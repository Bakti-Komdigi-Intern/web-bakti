import pool from '../config/database.js';

export const getAllServices = async () => {
  const [rows] = await pool.query('SELECT * FROM services ORDER BY created_at DESC');
  return rows;
};

export const getServiceById = async (id) => {
  const [rows] = await pool.query('SELECT * FROM services WHERE id = ?', [id]);
  return rows[0];
};

export const createService = async (title, description, icon) => {
  const [result] = await pool.query(
    'INSERT INTO services (title, description, icon) VALUES (?, ?, ?)',
    [title, description, icon]
  );
  return result.insertId;
};

export const updateService = async (id, title, description, icon) => {
  const [result] = await pool.query(
    'UPDATE services SET title = ?, description = ?, icon = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?',
    [title, description, icon, id]
  );
  return result.affectedRows;
};

export const deleteService = async (id) => {
  const [result] = await pool.query('DELETE FROM services WHERE id = ?', [id]);
  return result.affectedRows;
};