import * as newsModel from '../models/newsModel.js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const generateSlug = (title) => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
};

export const getNews = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const search = req.query.search || '';
    const offset = (page - 1) * limit;

    const news = await newsModel.getAllNews(limit, offset, search);
    const total = await newsModel.getNewsCount(search);

    res.json({
      success: true,
      data: {
        news,
        pagination: {
          page,
          limit,
          total,
          totalPages: Math.ceil(total / limit)
        }
      }
    });
  } catch (error) {
    console.error('Get news error:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

export const getNewsDetail = async (req, res) => {
  try {
    const { identifier } = req.params;
    let news;

    if (isNaN(identifier)) {
      news = await newsModel.getNewsBySlug(identifier);
    } else {
      news = await newsModel.getNewsById(identifier);
    }

    if (!news) {
      return res.status(404).json({ success: false, message: 'News not found' });
    }

    res.json({ success: true, data: news });
  } catch (error) {
    console.error('Get news detail error:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

export const createNews = async (req, res) => {
  try {
    const { title, content } = req.body;
    const author = req.user.name;

    if (!title || !content) {
      return res.status(400).json({ success: false, message: 'Title and content are required' });
    }

    let slug = generateSlug(title);
    const existingNews = await newsModel.getNewsBySlug(slug);
    if (existingNews) {
      slug = `${slug}-${Date.now()}`;
    }

    const thumbnail = req.file ? `/uploads/${req.file.filename}` : null;

    const newsId = await newsModel.createNews(title, slug, content, thumbnail, author);

    res.status(201).json({
      success: true,
      message: 'News created successfully',
      data: { id: newsId, slug }
    });
  } catch (error) {
    console.error('Create news error:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

export const updateNews = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content } = req.body;
    const author = req.user.name;

    const existingNews = await newsModel.getNewsById(id);
    if (!existingNews) {
      return res.status(404).json({ success: false, message: 'News not found' });
    }

    let slug = title ? generateSlug(title) : existingNews.slug;
    const thumbnail = req.file ? `/uploads/${req.file.filename}` : existingNews.thumbnail;

    if (req.file && existingNews.thumbnail) {
      const oldPath = path.join(__dirname, '..', existingNews.thumbnail);
      if (fs.existsSync(oldPath)) {
        fs.unlinkSync(oldPath);
      }
    }

    await newsModel.updateNews(
      id,
      title || existingNews.title,
      slug,
      content || existingNews.content,
      thumbnail,
      author
    );

    res.json({ success: true, message: 'News updated successfully' });
  } catch (error) {
    console.error('Update news error:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

export const deleteNews = async (req, res) => {
  try {
    const { id } = req.params;

    const news = await newsModel.getNewsById(id);
    if (!news) {
      return res.status(404).json({ success: false, message: 'News not found' });
    }

    if (news.thumbnail) {
      const imagePath = path.join(__dirname, '..', news.thumbnail);
      if (fs.existsSync(imagePath)) {
        fs.unlinkSync(imagePath);
      }
    }

    await newsModel.deleteNews(id);

    res.json({ success: true, message: 'News deleted successfully' });
  } catch (error) {
    console.error('Delete news error:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

export const getLatestNews = async (req, res) => {
  try {
    const limit = parseInt(req.query.limit) || 3;
    const news = await newsModel.getLatestNews(limit);

    res.json({ success: true, data: news });
  } catch (error) {
    console.error('Get latest news error:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};