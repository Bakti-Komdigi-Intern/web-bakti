import pool from '../config/database.js';

export const getProfile = async () => {
  const [rows] = await pool.query('SELECT * FROM profile WHERE id = 1');
  return rows[0];
};

export const updateProfile = async (sejarah, visi_misi, struktur_organisasi, kontak) => {
  const [result] = await pool.query(
    'UPDATE profile SET sejarah = ?, visi_misi = ?, struktur_organisasi = ?, kontak = ?, updated_at = CURRENT_TIMESTAMP WHERE id = 1',
    [sejarah, visi_misi, struktur_organisasi, kontak]
  );
  return result.affectedRows;
};

export const initProfile = async () => {
  const [rows] = await pool.query('SELECT * FROM profile WHERE id = 1');
  if (rows.length === 0) {
    await pool.query(
      'INSERT INTO profile (id, sejarah, visi_misi, struktur_organisasi, kontak) VALUES (1, "", "", "", "")'
    );
  }
};