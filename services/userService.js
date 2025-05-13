import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { createUser, getGuestUser, getUserById, searchUserByEmail, searchUserByGuestpass, updatePassword } from "../repositories/userRepository.js";
import { sendConfirmationEmail, sendResetPasswordEmail } from '../utils/emailService.js';
import createError from '../utils/createError.js';

export const userLoginService = async (email, password) => {
  
    try {
        const verifUser = await searchUserByEmail(email);   

            if (!verifUser) {
                throw createError("Email ou mot de passe non valide", 401);
            };

            if (verifUser.isverified === false) {
                throw createError("Compte pas encore validé", 403);
            }

        const isValid = await bcrypt.compare(password, verifUser.password);

            if (!isValid) {
                throw createError("Email ou mot de passe non valide", 401);                
            };

        const user = await getUserById(verifUser.id);

            console.log(user.firstname, user.name, "vient de se connecter");
            return user;

    } catch (error) {
        throw error;
    }
};

export const guestLoginService = async (guestpass) => {

    try {
        const verifGuestUser = await searchUserByGuestpass(guestpass);
            
        if (!verifGuestUser) {
            throw createError("GuestPass incorrect ou inexistant", 400);
        }

        const user = await getGuestUser(guestpass);

        console.log(user.firstname, user.name, "vient de se connecter en invité");
        return user;

    } catch (error) {
        throw error;
    }
};

export const userRegisterService = async (email, password, firstname, name) => {

    try {

        const verifyExistingUser = await searchUserByEmail(email);

        if (verifyExistingUser) {
            throw createError("Un utilisateur est deja inscrit avec cet email", 403)
        }

        const token = jwt.sign(
            { email },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        )

        const mail = await sendConfirmationEmail(email, token);

        if (mail.info?.rejected.length > 0) {
            throw createError('Email rejeté');
          }

        const user = await createUser(email, password, firstname, name);

        return user;
        
    } catch (error) {
        throw error;
    }
};

/// Service pour mettre a jour le mot de passe ///

export const updatePasswordService = async (email, newPassword) => {

    try {

        const verifyExistingUser = await searchUserByEmail(email);

        if (!verifyExistingUser) {
            throw createError("Utilisateur introuvable", 403);
        }

        const user = updatePassword(email, newPassword);

        return user;
        
    } catch (error) {
        throw error;
    }
};


/// Service pour envoyer un mail de reset password ///

export const sendResetPasswordEmailService = async (email) => {

    try {
        
        const verifyExistingUser = await searchUserByEmail(email);

        if (!verifyExistingUser) {
            throw createError("Erreur de recuperation", 403)
        };

        const token = jwt.sign(
            { email },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        );

        const mail = await sendResetPasswordEmail(email, token);

        if (mail.info?.rejected.length > 0) {
            throw createError("Email rejeté");
        }

    } catch (error) {
        throw error;
    }
};

