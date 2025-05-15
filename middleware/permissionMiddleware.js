import createError from "../utils/createError.js";

export const permissionMiddleware = (req, res, next) => {
    
    try {
        if (req.user?.role !== "user") {

            throw createError("Accès non autorisé", 403);

        }

        next()
        
    } catch (error) {
        next(error)
    }
};