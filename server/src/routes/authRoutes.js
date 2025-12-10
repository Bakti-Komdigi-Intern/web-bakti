import express from 'express';
import * as authController from '../controllers/authController.js';
import { verifyToken } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/login', authController.login);
router.get('/profile', verifyToken, authController.getProfile);
router.get('/verify', verifyToken, authController.verifyToken);

export default router;