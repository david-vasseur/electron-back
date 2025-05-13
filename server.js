import express from 'express';
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

app.use(cookieParser());
app.use(express.json());

app.get('/api/verify', cors(), verifyUser);
app.get('/api/reset', cors(), restPasswordForm);
app.get('/api/resetPassword', cors(), updatePasswordController);

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
