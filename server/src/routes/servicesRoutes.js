import express from 'express';
import * as servicesController from '../controllers/servicesController.js';
import { verifyToken, isAdmin } from '../middlewares/authMiddleware.js';
import { upload } from '../middlewares/uploadMiddleware.js';

const router = express.Router();

// Public routes
router.get('/', servicesController.getServices);
router.get('/:id', servicesController.getServiceDetail);

// Admin routes
router.post('/', verifyToken, isAdmin, upload.single('icon'), servicesController.createService);
router.put('/:id', verifyToken, isAdmin, upload.single('icon'), servicesController.updateService);
router.delete('/:id', verifyToken, isAdmin, servicesController.deleteService);

export default router;