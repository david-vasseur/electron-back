const errorMiddleware = (err, req, res, next) => {
    console.error(err);

    const status = err.statusCode || 500;
    const message = err.isOperational ? err.message : "Une erreur interne est survenue.";

    res.status(status).json({ message });
};

export default errorMiddleware;