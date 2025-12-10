-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Waktu pembuatan: 10 Des 2025 pada 03.11
-- Versi server: 8.0.30
-- Versi PHP: 8.3.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bakti_db`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `admin`
--

CREATE TABLE `admin` (
  `id` int NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `role` enum('admin','superadmin') COLLATE utf8mb4_unicode_ci DEFAULT 'admin',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `admin`
--

INSERT INTO `admin` (`id`, `name`, `email`, `password`, `role`, `created_at`, `updated_at`) VALUES
(1, 'Admin', 'admin@bakti.id', '$2a$10$9Rm4goU2M72VsrmrsoodeuZSRXaHKwAZ6s7rkmAz0O6tNd3Kxl7W6', 'admin', '2025-12-09 02:52:40', '2025-12-09 02:56:45');

-- --------------------------------------------------------

--
-- Struktur dari tabel `news`
--

CREATE TABLE `news` (
  `id` int NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `content` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `thumbnail` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `author` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `news`
--

INSERT INTO `news` (`id`, `title`, `slug`, `content`, `thumbnail`, `author`, `created_at`, `updated_at`) VALUES
(1, 'Peluncuran Portal Baru', 'peluncuran-portal-baru', '<p>Kami dengan bangga mengumumkan peluncuran portal baru yang dirancang untuk memberikan pengalaman pengguna yang lebih baik.</p><p>Portal ini dilengkapi dengan berbagai fitur modern dan antarmuka yang user-friendly.</p>', NULL, 'Admin', '2025-12-09 02:52:40', '2025-12-09 02:52:40'),
(2, 'Peningkatan Layanan Digital', 'peningkatan-layanan-digital', '<p>Program peningkatan layanan digital telah berhasil dilaksanakan di berbagai daerah.</p><p>Hasilnya menunjukkan peningkatan signifikan dalam kualitas konektivitas.</p>', NULL, 'Admin', '2025-12-09 02:52:40', '2025-12-09 02:52:40'),
(3, 'Workshop Teknologi Informasi', 'workshop-teknologi-informasi', '<p>Workshop tentang teknologi informasi terkini akan diadakan bulan depan.</p><p>Pendaftaran dibuka untuk umum dengan kapasitas terbatas.</p>', NULL, 'Admin', '2025-12-09 02:52:40', '2025-12-09 02:52:40');

-- --------------------------------------------------------

--
-- Struktur dari tabel `profile`
--

CREATE TABLE `profile` (
  `id` int NOT NULL,
  `sejarah` text COLLATE utf8mb4_unicode_ci,
  `visi_misi` text COLLATE utf8mb4_unicode_ci,
  `struktur_organisasi` text COLLATE utf8mb4_unicode_ci,
  `kontak` text COLLATE utf8mb4_unicode_ci,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `profile`
--

INSERT INTO `profile` (`id`, `sejarah`, `visi_misi`, `struktur_organisasi`, `kontak`, `created_at`, `updated_at`) VALUES
(1, '<h2>Sejarah Organisasi</h2><p>Portal didirikan untuk membangun infrastruktur digital yang lebih baik.</p>', '<h3>Visi</h3><p>Menjadi platform terdepan dalam pelayanan digital publik</p><h3>Misi</h3><ul><li>Meningkatkan konektivitas</li><li>Memberikan layanan berkualitas</li></ul>', '<h2>Struktur Organisasi</h2><p>CEO - Direktur - Manager - Staff</p>', '<p>Email: info@portal.id<br>Phone: +62 21 1234567<br>Address: Jakarta, Indonesia</p>', '2025-12-09 02:52:40', '2025-12-09 02:52:40');

-- --------------------------------------------------------

--
-- Struktur dari tabel `services`
--

CREATE TABLE `services` (
  `id` int NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `icon` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `services`
--

INSERT INTO `services` (`id`, `title`, `description`, `icon`, `created_at`, `updated_at`) VALUES
(1, 'BAKTI AKSI', 'BAKTI AKSI (Akses Internet) merupakan program penyediaan layanan Internet menggunakan teknologi fiber optic, radio link dan VSAT. BAKTI AKSI ini tersebar di layanan-layanan publik di seluruh Indonesia seperti sekolah, balai latihan kerja, Puskesmas, Kantor Desa, pos TNI, serta lokasi publik lainnya.\r\n\r\nVSAT membutuhkan lahan untuk meletakkan stasiun piringannya yang memiliki diameter sekitar tiga meter, dan memerlukan daya listrik minimal 450 watt. Selain itu pemohon harus melengkapi syarat dalam pembangunan infrastruktur ini dengan memiliki perangkat komputer dan sinyal seluler.', '/uploads/1765302131614-975629061.png', '2025-12-09 02:52:40', '2025-12-09 17:42:11'),
(2, 'BAKTI SINYAL', 'Base Transceiver Station (BTS) dibangun di daerah 3T (Terdepan, Terluar, Tertinggal) dan Lokpri (lokasi prioritas) untuk membuka isolasi komunikasi di daerah yang tidak terjamah layanan telekomunikasi (blank spot).\r\n\r\nPembangunan BTS membutuhkan lahan berukuran 20mx20m untuk mendirikan menara beserta perangkat pendukungnya. Pembangunan proyek ini telah dijalankan sejak 2015. BTS memiliki ketinggian sekitar 42-72 meter yang ditopang oleh sumber listrik seperti Solar Panel, Hybrid dan PLN. BTS juga memiliki transmisi terestrial seperti microwave dan /atau Fiber Optik juga VSAT.', '/uploads/1765302169719-627322538.png', '2025-12-09 02:52:40', '2025-12-09 17:42:49'),
(3, 'Palapa Ring', 'Palapa Ring (Tol Langit) merupakan proyek infrastruktur telekomunikasi berupa pembangunan serat optik di seluruh Indonesia sepanjang 36.000 kilometer. Proyek itu terdiri atas tujuh lingkar kecil serat optik (untuk wilayah Sumatera, Jawa, Kalimantan, Nusa Tenggara, Papua, Sulawesi, dan Maluku) dan satu backhaul untuk menghubungkan semuanya.', '/uploads/1765302202060-465117414.png', '2025-12-09 02:52:40', '2025-12-09 17:43:22'),
(4, 'SATRIA', 'Proyek satelit multifungsi pemerintah, SATRIA (Satelit Republik Indonesia) merupakan salah satu proyek strategis nasional. Proyek ini merupakan bentuk nyata upaya pemerintah melalui BAKTI Kominfo untuk menyediakan konektivitas internet yang inklusif dan merata ke seluruh pelosok negeri, khususnya yang belum terlayani penyelenggaraan telekomunikasi terestrial, yaitu di wilayah Terluar, Tertinggal dan Terdepan (3T) serta perbatasan.\r\n\r\nKondisi geografis Indonesia yang sulit dijangkau dengan jaringan terestrial, akan dapat didukung oleh teknologi satelit. Selain itu biaya penyediaan satelit yang lebih ekonomis dibanding dengan layanan telekomunikasi lainnya. Proyek satelit multifungsi ini dilakukan melalui skema Kerjasama Pemerintah dengan Badan Usaha (KPBU) dengan pembayaran ketersediaan layanan atau Availability Payment (AP) selama 15 tahun periode operasi satelit.\r\n\r\nSkema kerjasama ini sesuai dengan Peraturan Presiden No. 38 Tahun 2015 tentang Kerjasama Pemerintah dengan Badan Usaha dalam Penyediaan Infrastruktur. Keunggulan skema ini adalah adanya penjaminan proyek yang diberikan Kemenkeu melalui PT. Penjaminan Infrastruktur Indonesia yang akan meningkatan kelayakan proyek.\r\n\r\nProyek SATRIA mulai di konstruksi pada akhir tahun 2020, dan akan diluncurkan pada tahun 2023. Pembangunan SATRIA bekerjasama dengan pabrik kedirgantaraan asal Perancis, Thales Alenia Space dan perusahaan transportasi luar angkasa asal Amerika Serikat, SpaceX.\r\n\r\nPenandatanganan proyek SATRIA dengan Thales Alenia Space pada 1 Juli 2019. Sedangkan penandatanganan proyek SATRIA dengan SpaceX sebagai penyedia roket peluncur dilaksanakan pada 16 Agustus 2019.\r\n\r\nSATRIA akan memiliki 11 stasiun bumi atau gateway yang tersebar di beberapa lokasi di seluruh Indonesia. Stasiun Bumi di Cikarang nantinya akan menjadi Primary Satellite Control Center (PSCC) dan Network Operations Center (NOC). Sepuluh stasiun bumi lainnya berada di Batam, Banjarmasin, Tarakan, Pontianak, Kupang, Ambon, Manado, Manokwari, Timika dan Jayapura. Adapun stasiun bumi di Banjarmasin akan menjadi Back-Up Satellite Control Center (BSCC).\r\n\r\nSatelit yang dirancang khusus dengan kapasitas 150 Gbps ini akan menggunakan teknologi High Throughput Satellite (HTS). Terdapat lebih kurang 150.000 titik layanan publik yang terdiri atas sarana pendidikan, pemerintah daerah, administrasi pertahanan keamanan, dan fasilitas kesehatan yang akan dilayani oleh SATRIA. Proyek ini juga akan saling melengkapi dengan proyek Palapa Ring.\r\n\r\nTitik layanan publik yang dapat dijangkau SATRIA diantaranya 93.900 titik sekolah dan pesantren untuk mendukung pelaksanaan pembelajaran jarak jauh dan ujian berbasis komputer, 3.700 titik pusat kesehatan masyarakat (Puskesmas) atau fasilitas kesehatan dan rumah sakit. Serta layanan kesehatan lainnya untuk menyokong kebutuhan database kesehatan yang terintegrasi dan terpusat.\r\n\r\n3.900 titik layanan keamanan masyarakat (Kamtibmas) di wilayah 3T untuk mendukung kebutuhan administrasi keamanan dan ketertiban masyarakat,dan 47.900 titik kantor desa/kelurahan/kecamatan dan pemerintah daerah lainnya untuk mengoptimalkan pelayanan sistem pemerintahan berbasis elektronik atau SPBE secara efisien dan efektif. Serta 600 titik layanan publik lainnya.\r\n\r\nLayanan publik yang dijangkau SATRIA diharapkan dapat mengkoneksikan sekitar 45 juta masyarakat Indonesia yang belum terjangkau akses internet.', '/uploads/1765302190497-999898850.png', '2025-12-09 17:40:05', '2025-12-09 17:43:10'),
(5, 'Ekosistem Digital', 'Peran BAKTI Kominfo tidak sekadar membangun infrastruktur digital namun juga mendorong terbentuknya ekosistem ekonomi digital. Masyarakat penerima manfaat program utama BAKTI Kominfo diberdayakan agar dapat memanfaatkan infrastruktur TIK (Teknologi Informasi dan Komunikasi) yang telah dibangun.\r\n\r\nSehingga akselerasi ekonomi digital di masyarakat khususnya di daerah 3T dapat dioptimalkan.\r\n\r\nBerbagai program ekosistem dibentuk untuk memberdayakan masyarakat agar dapat memanfaatkan layanan internet secara produktif.', '/uploads/1765302179327-130829390.png', '2025-12-09 17:40:29', '2025-12-09 17:42:59');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indeks untuk tabel `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `slug` (`slug`),
  ADD KEY `idx_slug` (`slug`),
  ADD KEY `idx_created_at` (`created_at`);

--
-- Indeks untuk tabel `profile`
--
ALTER TABLE `profile`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `services`
--
ALTER TABLE `services`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT untuk tabel `news`
--
ALTER TABLE `news`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT untuk tabel `profile`
--
ALTER TABLE `profile`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT untuk tabel `services`
--
ALTER TABLE `services`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
