import express from 'express';
import * as profileController from '../controllers/profileController.js';
import { verifyToken, isAdmin } from '../middlewares/authMiddleware.js';

const router = express.Router();

// Public route
router.get('/', profileController.getProfile);

// Admin route
router.put('/', verifyToken, isAdmin, profileController.updateProfile);

export default router;