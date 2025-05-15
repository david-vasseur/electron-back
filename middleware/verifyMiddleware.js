import jwt from 'jsonwebtoken';
import { verifiedUser } from "../repositories/userRepository.js";
import createError from '../utils/createError.js';

export const verifyUser = async (req, res, next) => {
    const { token } = req.query;

	try {

		if (!token) {
			throw createError("Ticket invalide");
		}

		const decoded = jwt.verify(token, process.env.JWT_SECRET);

		if (!decoded) {
			throw createError("Ticket invalide ou expiré. Veuillez contacter un administrateur.", 400);
		}

		const verifiedDone = await verifiedUser(decoded.email); 

		if (!verifiedDone) {
			throw createError("Une erreur est survenue.", 401);
		}

		return res.render("verified");

	} catch (error) {
		next(error);
	}
};