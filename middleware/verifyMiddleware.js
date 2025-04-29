import jwt from 'jsonwebtoken';
import { verifiedUser } from "../repositories/userRepository.js";

export const verifyUser = async (req, res) => {
    const { token } = req.query;
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    await verifiedUser(decoded.email); 
    res.send(`
      <html>
        <head>
          <title>Email Vérifié</title>
        </head>
        <body style="font-family: Arial, sans-serif; background: linear-gradient(45deg,rgba(42, 123, 155, 1) 0%, rgba(87, 199, 133, 1) 50%, rgba(83, 237, 232, 1) 100%); text-align: center; padding: 50px;">
          <h1 style="color: #28a745;">Email vérifié avec succès !</h1>
          <h2 style="font-size: 20px; color: #333333;">Vous pouvez maintenant vous connecter à votre compte dans l'application.</h2>
        </body>
      </html>
    `);
  } catch (err) {
    res.status(400).send(`
        <html>
            <head>
            <title>Lien expiré</title>
            </head>
            <body style="font-family: Arial, sans-serif; background: linear-gradient(45deg,rgba(42, 123, 155, 1) 0%, rgba(87, 199, 133, 1) 50%, rgba(83, 237, 232, 1) 100%); text-align: center; padding: 50px;">
            <h1 style="color: rgb(197, 44, 44);">Lien expiré ou invalide</h1>
            </body>
        </html>
    `);
  }
}