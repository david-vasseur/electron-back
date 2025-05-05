import jwt from 'jsonwebtoken';

export const verifyToken = (req, res, next) => {
    console.log("middleware JWT utiliser");
    
    // const token = req.headers['authorization']?.split(' ')[1]; 
    const token = req.cookies.token;

    if (!token) {
        console.log(req.cookie);
        return res.status(401).json({ message: 'Accès non autorisé' });
        
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; 
        next(); 
    } catch (error) {
        return res.status(401).json({ message: 'Token invalide ou expiré' });
    }
};