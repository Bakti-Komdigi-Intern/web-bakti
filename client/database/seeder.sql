-- Create Database
CREATE DATABASE IF NOT EXISTS bakti_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE bakti_db;

-- Table: admin
CREATE TABLE IF NOT EXISTS admin (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  role ENUM('admin', 'superadmin') DEFAULT 'admin',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Table: news
CREATE TABLE IF NOT EXISTS news (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  slug VARCHAR(255) NOT NULL UNIQUE,
  content TEXT NOT NULL,
  thumbnail VARCHAR(255),
  author VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX idx_slug (slug),
  INDEX idx_created_at (created_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Table: services
CREATE TABLE IF NOT EXISTS services (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  icon VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Table: profile
CREATE TABLE IF NOT EXISTS profile (
  id INT AUTO_INCREMENT PRIMARY KEY,
  sejarah TEXT,
  visi_misi TEXT,
  struktur_organisasi TEXT,
  kontak TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Insert default admin user (password: admin123)
INSERT INTO admin (name, email, password, role) 
VALUES ('Admin', 'admin@bakti.id', '$2a$10$Kp5YXxZQJNV.Rg8OKqXxW.VZYzqN7YqKXQmYYcHNHJNqXQmYYcHNH', 'admin');

-- Insert default profile
INSERT INTO profile (id, sejarah, visi_misi, struktur_organisasi, kontak) 
VALUES (
  1, 
  '<h2>Sejarah Organisasi</h2><p>Portal didirikan untuk membangun infrastruktur digital yang lebih baik.</p>',
  '<h3>Visi</h3><p>Menjadi platform terdepan dalam pelayanan digital publik</p><h3>Misi</h3><ul><li>Meningkatkan konektivitas</li><li>Memberikan layanan berkualitas</li></ul>',
  '<h2>Struktur Organisasi</h2><p>CEO - Direktur - Manager - Staff</p>',
  '<p>Email: info@portal.id<br>Phone: +62 21 1234567<br>Address: Jakarta, Indonesia</p>'
);

-- Insert sample services
INSERT INTO services (title, description) VALUES
('Digital Infrastructure', 'Membangun infrastruktur digital yang handal dan modern untuk mendukung konektivitas nasional'),
('Public Services', 'Menyediakan layanan publik berbasis teknologi untuk meningkatkan efisiensi pelayanan'),
('Connectivity Solutions', 'Solusi konektivitas terintegrasi untuk menjangkau seluruh wilayah Indonesia');

-- Insert sample news
INSERT INTO news (title, slug, content, author) VALUES
('Peluncuran Portal Baru', 'peluncuran-portal-baru', '<p>Kami dengan bangga mengumumkan peluncuran portal baru yang dirancang untuk memberikan pengalaman pengguna yang lebih baik.</p><p>Portal ini dilengkapi dengan berbagai fitur modern dan antarmuka yang user-friendly.</p>', 'Admin'),
('Peningkatan Layanan Digital', 'peningkatan-layanan-digital', '<p>Program peningkatan layanan digital telah berhasil dilaksanakan di berbagai daerah.</p><p>Hasilnya menunjukkan peningkatan signifikan dalam kualitas konektivitas.</p>', 'Admin'),
('Workshop Teknologi Informasi', 'workshop-teknologi-informasi', '<p>Workshop tentang teknologi informasi terkini akan diadakan bulan depan.</p><p>Pendaftaran dibuka untuk umum dengan kapasitas terbatas.</p>', 'Admin');