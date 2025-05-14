import jwt from 'jsonwebtoken';
import { guestLoginSchema, userLoginSchema, userRegisterSchema } from "../schemaValidation/userSchema.js";
import { guestLoginService, sendResetPasswordEmailService, updatePasswordService, userLoginService, userRegisterService } from "../services/userService.js";
import createError from '../utils/createError.js';


/// Controlleur d'authentification ///

export const userLoginController = async (req, res, next) => {
    
    try {

        const { error } = userLoginSchema.validate(req.body);

        if (error) {
            res.status(400).json({ message: "Email ou mot de passe invalide" });
            return;
        }

        const { email, password } = req.body;

        const user = await userLoginService(email, password);
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
        console.error(error);
        next(error);
    }
};

/// controlleur pour s'authentifier en guest ///

export const guestLoginController = async (req, res) => {

    try {

        const { error } = guestLoginSchema.validate(req.body);

        if (error) {
            res.status(400).json({ message: "Mot de passe invalide" });
            return;
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
        console.error(error);
        res.status(500).json({ message: 'Erreur serveur' });
    }
}

/// Controlleur pour la création d'un compte ///

export const userRegisterController = async (req, res) => {
    const { email, password, firstname, name } = req.body;

    try {

        const { error } = userRegisterSchema.validate(req.body);

        if (error) {
            res.status(400).json({ message: "Informations non conformes" });
            return;
        }

        const user = await userRegisterService(email, password, firstname, name);

        res.status(201).json({ message: 'Vous êtes bien enregistré !' });
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erreur serveur' });
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
    console.log(password, confirmPassword, token);

    try {

        if (!token || !password || !confirmPassword || password !== confirmPassword) {
            createError("Une erreur est survenue", 403);
        }

        const newPassword = await updatePasswordService(token, password);

        if (!newPassword) {
            createError("Une erreur est survenue", 403);
        }

        res.status(201).send(`
            <html>
                <head>
                    <title>Email Vérifié</title>
                    <meta http-equiv="Cache-Control" content="no-store" />
                </head>
                <body style="font-family: Arial, sans-serif; background: linear-gradient(45deg,rgba(42, 123, 155, 1) 0%, rgba(87, 199, 133, 1) 50%, rgba(83, 237, 232, 1) 100%); text-align: center; padding: 50px;">
                    <h1 style="color: #28a745;">Mot de passe modifié avec succès !</h1>
                    <h2 style="font-size: 20px; color: #333333;">Vous pouvez maintenant utilisier votre nouveau mot de passe.</h2>
                </body>
            </html>
            `)
        
    } catch (error) {
        next(error)
    }
    
}
