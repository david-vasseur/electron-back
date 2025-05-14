import express from 'express';
import path from 'path';
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

app.use(express.static(path.join(__dirname, 'view')));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.json());

app.set('views', './view');
app.set('view engine', 'ejs');

app.get('/api/verify', cors(), verifyUser);
app.get('/api/reset', cors(), restPasswordForm);
app.post('/api/resetPassword', cors(), updatePasswordController);

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
