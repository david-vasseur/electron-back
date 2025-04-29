import jwt from 'jsonwebtoken';
import { guestLoginSchema, userLoginSchema, userRegisterSchema } from "../schemaValidation/userSchema.js";
import { guestLoginService, userLoginService, userRegisterService } from "../services/userService.js";


/// Controlleur d'authentification ///

export const userLoginController = async (req, res) => {
    
    try {

        const { error } = userLoginSchema.validate(req.body);

        if (error) {
            res.status(400).json({ message: "Email ou mot de passe invalide" });
            return;
        }

        const { email, password } = req.body;

        const user = await userLoginService(email, password);

        const token = jwt.sign(
            { id: user.id, name: user.name, email: user.email, role: "user" },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        );

        res.cookie('token', token, {
            httpOnly: true,      
            secure: false, 
            sameSite: 'none',
            maxAge: 60 * 60 * 1000 
        });
        
        res.status(200).json({
            message: "Connexion réussie",
            user: {
                id: user.id,
                firstName: user.firstname,
                name: user.name,
                email: user.email,
                role: "user",
                guestpass: user.guestpass,
                events: user.events 
            }            
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erreur serveur' });
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
            secure: false, 
            sameSite: 'none',
            maxAge: 60 * 60 * 1000 
        });
        

        res.status(200).json({
            message: "Connexion reussi",
            user: {
                id: user.id,
                firstName: user.firstname,
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
