import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { createUser, getGuestUser, getUserById, searchUserByEmail, searchUserByGuestpass } from "../repositories/userRepository.js";
import { sendConfirmationEmail } from '../utils/emailService.js';

export const userLoginService = async (email, password) => {
  
    try {
        const verifUser = await searchUserByEmail(email);   

            if (!verifUser) {
                throw new Error("Email ou mot de passe non valide");
            };

            if (verifUser.isverified === false) {
                throw new Error("Compte pas encore validé");
            }

        const isValid = await bcrypt.compare(password, verifUser.password);

            if (!isValid) {
                throw new Error("Email ou mot de passe non valide");                
            };

        const user = await getUserById(verifUser.id);

            console.log(user.name, "vient de se connecter");
            return user;

    } catch (error) {
        throw error;
    }
};

export const guestLoginService = async (guestpass) => {

    try {
        const verifGuestUser = await searchUserByGuestpass(guestpass);
            
        if (!verifGuestUser) {
            throw new Error("GuestPass incorrect ou inexistant");
        }

        const user = await getGuestUser(guestpass);

        console.log(user.name, "vient de se connecter en invité");
        return user;

    } catch (error) {
        throw error;
    }
};

export const userRegisterService = async (email, password, firstname, name) => {

    try {

        const verifyExistingUser = await searchUserByEmail(email);

        if (verifyExistingUser) {
            throw new Error("Un utilisateur est deja inscrit avec cet email")
        }

        const token = jwt.sign(
            { email },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        )

        console.log(token);

        const mail = await sendConfirmationEmail(email, token);

        if (mail.info?.rejected.length > 0) {
            throw new Error('Email rejeté');
          }

        const user = await createUser(email, password, firstname, name);

        return user;
        
    } catch (error) {
        throw error;
    }
};

