import { Router } from "express";
import { guestLoginController, sendResetPassword, userLoginController, userRegisterController } from "../controllers/userController.js";
import { verifyUser } from "../middleware/verifyMiddleware.js";

const router = Router()

router.post('/login', userLoginController);
router.post('/guest', guestLoginController);
router.post('/register', userRegisterController);
router.get('/verify', verifyUser);
router.post('/forgot', sendResetPassword);

export default router;