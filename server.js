import express from 'express';
import userRoute from './routes/userRoutes.js';
import imageRoute from './routes/imageRoute.js';
import eventRoute from './routes/eventRoute.js';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import { verifyUser } from './middleware/verifyMiddleware.js';

dotenv.config();


const app = express();
const port = 3001;

app.use(cookieParser());
app.use(express.json());

app.get('/photo-share/api/verify', cors(), verifyUser);

app.use(cors({
  origin: false, 
  credentials: true
}));

app.use('/photo-share/api/users', userRoute);
app.use('/photo-share/api/images', imageRoute);
app.use('/photo-share/api/event', eventRoute);

app.listen(port, () => {
  console.log(`Server running`);
});
