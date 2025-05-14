import jwt from 'jsonwebtoken';
import { isJTIBlacklisted } from '../utils/jtiBlacklist';

export const restPasswordForm = async (req, res) => {
    const { token } = req.query;
    try {

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const jti = decoded.jti

        const isBlacklisted = await isJTIBlacklisted(jti);

        if (isBlacklisted) {
            res.status(400).render('expired');
        }

        res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate');
        res.setHeader('Pragma', 'no-cache');
        res.setHeader('Expires', '0');
        res.setHeader('ETag', '');
        res.render('resetPassword', { token });

    } catch (error) {
        res.status(400).render('expired');
    }
};