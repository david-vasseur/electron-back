import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const sendConfirmationEmail = async (to, token) => {
  const confirmationUrl = `${process.env.FRONTEND_URL}/verify?token=${token}`;

  const mailOptions = {
    from: `"PhotoShare" <${process.env.EMAIL_USER}>`,
    to,
    subject: 'Confirmez votre adresse email',
    html: `
      <h1>Bienvenue !</h1>
      <p>Cliquez ici pour confirmer votre adresse :</p>
      <a href="${confirmationUrl}">Confirmer mon email</a>
    `,
  };

  const info = await transporter.sendMail(mailOptions);

  return info;
};

export const sendResetPasswordEmail = async (to, token) => {
  const changePasswordUrl = `${process.env.RESET_PASSWORD_URL}/verify?token=${token}`;

  const mailOptions = {
    from: `"PhotoShare" <${process.env.EMAIL_USER}>`,
    to,
    subject: 'Changer votre mot de passe',
    html: `
      <h1>Bienvenue !</h1>
      <p>Cliquez ici pour changer votre mot de passe :</p>
      <a href="${changePasswordUrl}">Ici !</a>
    `,
  };

  const info = await transporter.sendMail(mailOptions);

  return info;
};