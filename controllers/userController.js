import jwt from 'jsonwebtoken';
import { guestLoginSchema, userLoginSchema, userRegisterSchema } from "../schemaValidation/userSchema.js";
import { guestLoginService, sendResetPasswordEmailService, updatePasswordService, userLoginService, userRegisterService } from "../services/userService.js";
import createError from '../utils/createError.js';


/// Controlleur d'authentification ///

export const userLoginController = async (req, res, next) => {
    
    try {

        const { error } = userLoginSchema.validate(req.body);

        if (error) {
            throw createError( "Erreur de saisie", 400);
        }

        const { email, password } = req.body;

        const user = await userLoginService(email, password);

        if (!user) {
            throw createError( "Email ou mot de passe invalide", 403);
        }
        console.log(user);
        

        const token = jwt.sign(
            { id: user.id, name: user.name, email: user.email, role: "user" },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        );

        res.cookie('token', token, {
            httpOnly: true,      
            secure: true, 
            sameSite: 'none',
            maxAge: 60 * 60 * 1000 
        });
        
        res.status(200).json({
            message: "Connexion réussie",
            user: {
                id: user.id,
                firstname: user.firstname,
                name: user.name,
                email: user.email,
                role: "user",
                guestpass: user.guestpass,
                events: user.events 
            }            
        });

    } catch (error) {
        next(error);
    }
};

/// controlleur pour s'authentifier en guest ///

export const guestLoginController = async (req, res, next) => {

    try {

        const { error } = guestLoginSchema.validate(req.body);

        if (error) {
            throw createError("Mot de passe invalide", 400);
        }

        const { guestpass } = req.body;

        const user = await guestLoginService(guestpass);


        const token = jwt.sign(
            { id: user.id, name: user.name, role: "guest" },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        );

        res.cookie('token', token, {
            httpOnly: true,      
            secure: true, 
            sameSite: 'none',
            maxAge: 60 * 60 * 1000 
        });
        

        res.status(200).json({
            message: "Connexion reussi",
            user: {
                id: user.id,
                firstname: user.firstname,
                name: user.name,
                role: "guest",
                events: user.events
            }
        });

    } catch (error) {
        next(error);
    }
};

/// Controlleur pour la création d'un compte ///

export const userRegisterController = async (req, res, next) => {
    const { email, password, firstname, name } = req.body;

    try {

        const { error } = userRegisterSchema.validate(req.body);

        if (error) {
            throw createError("Informations non conformes", 400);
        }

        const user = await userRegisterService(email, password, firstname, name);

        res.status(201).json({ message: 'Vous êtes bien enregistré ! Un mail de validation vous a été envoyé.' });
        
    } catch (error) {
        next(error);
    }
};

/// controlleur pour envoyer un mail de changement de mot de passe ///

export const sendResetPassword = async (req, res, next) => {
    const { email } = req.body;

    try {
        
        const sendEmail = await sendResetPasswordEmailService(email);

        if (!sendEmail) {
            createError("Erreur de récuperation", 404);
        }

        res.status(200).json({ message: "Email envoyé avec succés" });


    } catch (error) {
        next(error);
    }
};

/// controlleur pour valider le nouveau mot de passe ///

export const updatePasswordController = async (req, res, next) => {
    const { password, confirmPassword, token } = req.body;

    try {

        if (!token || !password || !confirmPassword || password !== confirmPassword) {
            createError("Une erreur est survenue", 403);
        }

        const newPassword = await updatePasswordService(token, password);

        if (!newPassword) {
            createError("Une erreur est survenue", 403);
        }

        res.status(302).redirect('/reset-succes')
        
    } catch (error) {
        next(error)
    }
};
