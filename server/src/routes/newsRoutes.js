import express from 'express';
import * as newsController from '../controllers/newsController.js';
import { verifyToken, isAdmin } from '../middlewares/authMiddleware.js';
import { upload } from '../middlewares/uploadMiddleware.js';

const router = express.Router();

// Public routes
router.get('/', newsController.getNews);
router.get('/latest', newsController.getLatestNews);
router.get('/:identifier', newsController.getNewsDetail);

// Admin routes
router.post('/', verifyToken, isAdmin, upload.single('thumbnail'), newsController.createNews);
router.put('/:id', verifyToken, isAdmin, upload.single('thumbnail'), newsController.updateNews);
router.delete('/:id', verifyToken, isAdmin, newsController.deleteNews);

export default router;