import { Router } from "express";
import { deleteImageController, getImagesController, uploadImageController } from "../controllers/imageController.js";
import multer from 'multer';
import { verifyToken } from "../middleware/jwtMiddleware.js";
import { permissionMiddleware } from "../middleware/permissionMiddleware.js";

const upload = multer({ storage: multer.memoryStorage() });
const router = Router();

router.get('/images/:eventId', verifyToken, getImagesController);
router.post('/image', verifyToken, permissionMiddleware, upload.single('image'), uploadImageController);
router.delete('/image/:imageId', verifyToken, permissionMiddleware, deleteImageController);

export default router;