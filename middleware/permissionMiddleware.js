export const permissionMiddleware = (req, res, next) => {
    console.log("middleware PERMISSION utiliser");
    if (req.user?.role !== "user") {
        res.status(403).json({ message: "Acces non autorisé" });
        console.log("PAS AUTHORISE");
        return;
    }
    next()
};