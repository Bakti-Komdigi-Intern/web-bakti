import pool from '../config/database.js';

export const findAdminByEmail = async (email) => {
  const [rows] = await pool.query(
    'SELECT * FROM admin WHERE email = ?',
    [email]
  );
  return rows[0];
};

export const findAdminById = async (id) => {
  const [rows] = await pool.query(
    'SELECT id, name, email, role FROM admin WHERE id = ?',
    [id]
  );
  return rows[0];
};

export const createAdmin = async (name, email, hashedPassword) => {
  const [result] = await pool.query(
    'INSERT INTO admin (name, email, password, role) VALUES (?, ?, ?, ?)',
    [name, email, hashedPassword, 'admin']
  );
  return result.insertId;
};