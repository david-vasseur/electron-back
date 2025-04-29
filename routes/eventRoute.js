import { Router } from "express";
import { deleteEvent, newEvent, updateEventName } from "../controllers/eventController.js";
import { verifyToken } from "../middleware/jwtMiddleware.js";
import { permissionMiddleware } from "../middleware/permissionMiddleware.js";

const router = Router();

router.post('/create', verifyToken, permissionMiddleware, newEvent);
router.delete('/delete/:eventId', verifyToken, permissionMiddleware, deleteEvent);
router.patch('/update/:eventId', verifyToken, permissionMiddleware, updateEventName);

export default router;