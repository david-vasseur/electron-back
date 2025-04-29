export const permissionMiddleware = (req, res, next) => {
    if (req.user?.role !== "user") {
        res.status(403).json({ message: "Acces non autorisé" });
        return;
    }
    next()
};