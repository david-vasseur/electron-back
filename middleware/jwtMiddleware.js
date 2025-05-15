import jwt from 'jsonwebtoken';
import createError from '../utils/createError';

export const verifyToken = (req, res, next) => {
 
    const token = req.cookies.token;

    try {

         if (!token) {
            throw createError("Accès non autorisé", 403);
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        req.user = decoded; 
        
        next(); 
    } catch (error) {
        next(error);
    }
};