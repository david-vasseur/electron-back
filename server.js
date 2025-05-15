import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import userRoute from './routes/userRoutes.js';
import imageRoute from './routes/imageRoute.js';
import eventRoute from './routes/eventRoute.js';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import { verifyUser } from './middleware/verifyMiddleware.js';
import errorMiddleware from './middleware/errorMiddleware.js';
import { restPasswordForm } from './middleware/resetPasswordMiddleware.js';
import { updatePasswordController } from './controllers/userController.js';

dotenv.config();


const app = express();
const port = 3001;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, 'view')));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.json());

app.set('views', './view');
app.set('view engine', 'ejs');

app.get('/verify', cors(), verifyUser);
app.get('/reset', cors(), restPasswordForm);
app.post('/reset', cors(), updatePasswordController);
app.get('/reset-succes', cors(), (req, res) => { res.setHeader('Cache-Control', 'no-store'); res.render('resetSuccess') });

app.use(cors({
  origin: false, 
  credentials: true
}));

app.use('/api/users', userRoute);
app.use('/api/images', imageRoute);
app.use('/api/event', eventRoute);

app.use(errorMiddleware);

app.listen(port, () => {
  console.log(`Server running`);
});
