import jwt from 'jsonwebtoken';
import { isJTIBlacklisted } from '../utils/jtiBlacklist.js';
import createError from '../utils/createError.js';

export const restPasswordForm = async (req, res, next) => {
    const { token } = req.query;
    try {

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const jti = decoded.jti

        const isBlacklisted = await isJTIBlacklisted(jti);

        if (isBlacklisted) {
            throw createError("Token déjà utilisé", 400);
        }

        return res.render('resetPassword', { token });

    } catch (error) {
        next(error);
    }
};