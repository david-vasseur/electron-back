import { Router } from "express";
import { deleteEventController, newEventController, updateEventAccessController, updateEventNameController } from "../controllers/eventController.js";
import { verifyToken } from "../middleware/jwtMiddleware.js";
import { permissionMiddleware } from "../middleware/permissionMiddleware.js";

const router = Router();

router.post('/create', verifyToken, permissionMiddleware, newEventController);
router.delete('/delete/:eventId', verifyToken, permissionMiddleware, deleteEventController);
router.patch('/update/:eventId', verifyToken, permissionMiddleware, updateEventNameController);
router.patch('/update/access/:eventId', verifyToken, permissionMiddleware, updateEventAccessController);

export default router;