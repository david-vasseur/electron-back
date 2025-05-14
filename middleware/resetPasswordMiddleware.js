import jwt from 'jsonwebtoken';
import { verifiedUser } from "../repositories/userRepository.js";

export const restPasswordForm = async (req, res) => {
    const { token } = req.query;
    try {

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        await verifiedUser(decoded.email); 
        res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate');
        res.setHeader('Pragma', 'no-cache');
        res.setHeader('Expires', '0');
        res.setHeader('ETag', '');
        res.render('resetPassword', { token });

    } catch (error) {
        res.status(400).render('expired');
    }
};