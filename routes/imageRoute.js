import { Router } from "express";
import { getAllImagesByEvent, uploadImage } from "../controllers/imageController.js";
import multer from 'multer';
const upload = multer({ storage: multer.memoryStorage() });

const router = Router();

router.get('/images/:eventId', getAllImagesByEvent);
router.post('/image', upload.single('image'), uploadImage);

export default router;