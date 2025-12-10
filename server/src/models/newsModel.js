import pool from '../config/database.js';

export const getAllNews = async (limit = 10, offset = 0, search = '') => {
  let query = 'SELECT * FROM news WHERE 1=1';
  const params = [];
  
  if (search) {
    query += ' AND (title LIKE ? OR content LIKE ?)';
    params.push(`%${search}%`, `%${search}%`);
  }
  
  query += ' ORDER BY created_at DESC LIMIT ? OFFSET ?';
  params.push(limit, offset);
  
  const [rows] = await pool.query(query, params);
  return rows;
};

export const getNewsCount = async (search = '') => {
  let query = 'SELECT COUNT(*) as total FROM news WHERE 1=1';
  const params = [];
  
  if (search) {
    query += ' AND (title LIKE ? OR content LIKE ?)';
    params.push(`%${search}%`, `%${search}%`);
  }
  
  const [rows] = await pool.query(query, params);
  return rows[0].total;
};

export const getNewsById = async (id) => {
  const [rows] = await pool.query('SELECT * FROM news WHERE id = ?', [id]);
  return rows[0];
};

export const getNewsBySlug = async (slug) => {
  const [rows] = await pool.query('SELECT * FROM news WHERE slug = ?', [slug]);
  return rows[0];
};

export const createNews = async (title, slug, content, thumbnail, author) => {
  const [result] = await pool.query(
    'INSERT INTO news (title, slug, content, thumbnail, author) VALUES (?, ?, ?, ?, ?)',
    [title, slug, content, thumbnail, author]
  );
  return result.insertId;
};

export const updateNews = async (id, title, slug, content, thumbnail, author) => {
  const [result] = await pool.query(
    'UPDATE news SET title = ?, slug = ?, content = ?, thumbnail = ?, author = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?',
    [title, slug, content, thumbnail, author, id]
  );
  return result.affectedRows;
};

export const deleteNews = async (id) => {
  const [result] = await pool.query('DELETE FROM news WHERE id = ?', [id]);
  return result.affectedRows;
};

export const getLatestNews = async (limit = 3) => {
  const [rows] = await pool.query(
    'SELECT * FROM news ORDER BY created_at DESC LIMIT ?',
    [limit]
  );
  return rows;
};