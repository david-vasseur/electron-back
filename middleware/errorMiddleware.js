const errorMiddleware = (err, req, res, next) => {
    console.error(err);

    const status = err.statusCode || 500;
    const message = err.isOperational ? err.message : "Une erreur interne est survenue.";

    if (req.originalUrl.startsWith("/api")) {
        return res.status(status).json({ message });
    }

    res.status(status).render("expired", { message });
    
};

export default errorMiddleware;