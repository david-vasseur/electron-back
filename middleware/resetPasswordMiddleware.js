import jwt from 'jsonwebtoken';
import { verifiedUser } from "../repositories/userRepository.js";

export const restPasswordForm = async (req, res) => {
    const { token } = req.query;
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    await verifiedUser(decoded.email); 
    res.send(`
      <html>
        <head>
            <title>Remise à zero du mot de passe</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    background: linear-gradient(45deg,rgba(42, 123, 155, 1) 0%, rgba(87, 199, 133, 1) 50%, rgba(83, 237, 232, 1) 100%);
                    text-align: center;
                    padding: 50px;
                }
                form {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
	                align-items: center;
                    gap: 1rem;
                }
                input, button {
                    padding: 10px;
                    margin: 10px;
                    border: none;
                    border-radius: 35px;
                }
                button {
                    background-color: #28a745;
                    color: white;
                    cursor: pointer;
                }
            </style>
        </head>
        <body style="font-family: Arial, sans-serif; background: linear-gradient(45deg,rgba(42, 123, 155, 1) 0%, rgba(87, 199, 133, 1) 50%, rgba(83, 237, 232, 1) 100%); text-align: center; padding: 50px;">
            <h1 style="color: #28a745;">Reinitialisez votre mot de passe</h1>
            <form>
                <input name="password" type="password" placeholder="Entrez votre mot de passe" required />
                <input name="confirmPassword" type="password" placeholder="Confirmez le mot de passe" required />
                <input type="hidden" name="token" value="${token}" />
                <button type="submit">Valider</button>
            </form>
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
};