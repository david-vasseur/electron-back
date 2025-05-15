import jwt from 'jsonwebtoken';
import { verifiedUser } from "../repositories/userRepository.js";
import createError from '../utils/createError.js';

export const verifyUser = async (req, res, next) => {
    const { token } = req.query;

	try {

		if (!token) {
			throw createError("Token invalide ou expiré");
		}

		const decoded = jwt.verify(token, process.env.JWT_SECRET);

		if (!decoded) {
			throw createError("Token invalide ou expiré");
		}

		await verifiedUser(decoded.email); 
		res.render("verified");

	} catch (error) {
		next(error);
	}
};