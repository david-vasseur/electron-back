import { Router } from "express";
import { guestLoginController, sendResetPassword, userLoginController, userRegisterController } from "../controllers/userController.js";

const router = Router()

router.post('/login', userLoginController);
router.post('/guest', guestLoginController);
router.post('/register', userRegisterController);
router.post('/forgot', sendResetPassword);

export default router;