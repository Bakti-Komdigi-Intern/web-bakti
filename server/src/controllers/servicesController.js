import * as servicesModel from '../models/servicesModel.js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const getServices = async (req, res) => {
  try {
    const services = await servicesModel.getAllServices();
    res.json({ success: true, data: services });
  } catch (error) {
    console.error('Get services error:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

export const getServiceDetail = async (req, res) => {
  try {
    const { id } = req.params;
    const service = await servicesModel.getServiceById(id);

    if (!service) {
      return res.status(404).json({ success: false, message: 'Service not found' });
    }

    res.json({ success: true, data: service });
  } catch (error) {
    console.error('Get service detail error:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

export const createService = async (req, res) => {
  try {
    const { title, description } = req.body;

    if (!title || !description) {
      return res.status(400).json({ 
        success: false, 
        message: 'Title and description are required' 
      });
    }

    const icon = req.file ? `/uploads/${req.file.filename}` : null;

    const serviceId = await servicesModel.createService(title, description, icon);

    res.status(201).json({
      success: true,
      message: 'Service created successfully',
      data: { id: serviceId }
    });
  } catch (error) {
    console.error('Create service error:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

export const updateService = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;

    const existingService = await servicesModel.getServiceById(id);
    if (!existingService) {
      return res.status(404).json({ success: false, message: 'Service not found' });
    }

    const icon = req.file ? `/uploads/${req.file.filename}` : existingService.icon;

    if (req.file && existingService.icon) {
      const oldPath = path.join(__dirname, '..', existingService.icon);
      if (fs.existsSync(oldPath)) {
        fs.unlinkSync(oldPath);
      }
    }

    await servicesModel.updateService(
      id,
      title || existingService.title,
      description || existingService.description,
      icon
    );

    res.json({ success: true, message: 'Service updated successfully' });
  } catch (error) {
    console.error('Update service error:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

export const deleteService = async (req, res) => {
  try {
    const { id } = req.params;

    const service = await servicesModel.getServiceById(id);
    if (!service) {
      return res.status(404).json({ success: false, message: 'Service not found' });
    }

    if (service.icon) {
      const iconPath = path.join(__dirname, '..', service.icon);
      if (fs.existsSync(iconPath)) {
        fs.unlinkSync(iconPath);
      }
    }

    await servicesModel.deleteService(id);

    res.json({ success: true, message: 'Service deleted successfully' });
  } catch (error) {
    console.error('Delete service error:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};