import { useState, useEffect, createContext, useContext } from 'react';

// Translations
const translations = {
  en: {
    // Navbar
    home: 'Home',
    profile: 'Profile',
    services: 'Services',
    news: 'News',
    
    // Home Page
    welcomeTitle: 'Bakti Komdigi',
    welcomeSubtitle: 'Realizing equal access to telecommunications and information throughout Indonesia to build an inclusive and competitive digital society.',
    exploreServices: 'Explore Our Services',
    ourServices: 'Our Services',
    latestNews: 'Latest News',
    learnMore: 'Learn more',
    viewAllNews: 'View All News',
    readMore: 'Read more',
    
    // Profile Page
    companyProfile: 'Company Profile',
    ourHistory: 'Our History',
    visionMission: 'Vision & Mission',
    organizationStructure: 'Organization Structure',
    contactUs: 'Contact Us',
    
    // Services Page
    comprehensiveSolutions: 'We provide comprehensive solutions to meet your digital infrastructure needs',
    
    // News Page
    latestNewsTitle: 'Latest News',
    searchNews: 'Search news...',
    search: 'Search',
    page: 'Page',
    of: 'of',
    previous: 'Previous',
    next: 'Next',
    
    // News Detail
    backToNews: 'Back to News',
    newsNotFound: 'News Not Found',
    loading: 'Loading...',
    
    // Admin
    adminPanel: 'Admin Panel',
    dashboard: 'Dashboard',
    welcome: 'Welcome',
    logout: 'Logout',
    login: 'Login',
    email: 'Email Address',
    password: 'Password',
    signIn: 'Sign in to access admin panel',
    loggingIn: 'Logging in...',
    
    // Dashboard
    dashboardOverview: 'Dashboard Overview',
    totalNews: 'Total News',
    totalServices: 'Total Services',
    recentUpdates: 'Recent Updates',
    recentNews: 'Recent News',
    noNewsAvailable: 'No news available',
    
    // News Management
    newsManagement: 'News Management',
    addNews: 'Add News',
    editNews: 'Edit News',
    title: 'Title',
    content: 'Content',
    thumbnail: 'Thumbnail',
    author: 'Author',
    date: 'Date',
    actions: 'Actions',
    cancel: 'Cancel',
    save: 'Save',
    saving: 'Saving...',
    delete: 'Delete',
    edit: 'Edit',
    deleteConfirm: 'Are you sure you want to delete this news?',
    
    // Services Management
    servicesManagement: 'Services Management',
    addService: 'Add Service',
    editService: 'Edit Service',
    description: 'Description',
    icon: 'Icon',
    deleteServiceConfirm: 'Delete this service?',
    
    // Profile Management
    profileManagement: 'Profile Management',
    history: 'History',
    contact: 'Contact',
    saveChanges: 'Save Changes',
    
    // Footer
    buildingInfrastructure: 'Building digital infrastructure for better connectivity',
    quickLinks: 'Quick Links',
    allRightsReserved: 'All rights reserved',
    
    // Messages
    loginSuccessful: 'Login successful',
    loginFailed: 'Login failed',
    newsCreated: 'News created successfully',
    newsUpdated: 'News updated successfully',
    newsDeleted: 'News deleted successfully',
    serviceCreated: 'Service created successfully',
    serviceUpdated: 'Service updated successfully',
    serviceDeleted: 'Service deleted successfully',
    profileUpdated: 'Profile updated successfully',
    failedToSave: 'Failed to save',
  },
  id: {
    // Navbar
    home: 'Beranda',
    profile: 'Profil',
    services: 'Layanan',
    news: 'Berita',
    
    // Home Page
    welcomeTitle: 'Indonesia Terkoneksi, Semakin Digital Semakin Maju',
    welcomeSubtitle: 'Mewujudkan pemerataan akses telekomunikasi dan informasi di seluruh wilayah Indonesia untuk membangun masyarakat digital yang inklusif dan berdaya saing.',
    exploreServices: 'Jelajahi Layanan Kami',
    ourServices: 'Layanan Kami',
    latestNews: 'Berita Terbaru',
    learnMore: 'Pelajari lebih lanjut',
    viewAllNews: 'Lihat Semua Berita',
    readMore: 'Baca selengkapnya',
    
    // Profile Page
    companyProfile: 'Profil Perusahaan',
    ourHistory: 'Sejarah Kami',
    visionMission: 'Visi & Misi',
    organizationStructure: 'Struktur Organisasi',
    contactUs: 'Hubungi Kami',
    
    // Services Page
    comprehensiveSolutions: 'Kami menyediakan solusi komprehensif untuk memenuhi kebutuhan infrastruktur digital Anda',
    
    // News Page
    latestNewsTitle: 'Berita Terbaru',
    searchNews: 'Cari berita...',
    search: 'Cari',
    page: 'Halaman',
    of: 'dari',
    previous: 'Sebelumnya',
    next: 'Selanjutnya',
    
    // News Detail
    backToNews: 'Kembali ke Berita',
    newsNotFound: 'Berita Tidak Ditemukan',
    loading: 'Memuat...',
    
    // Admin
    adminPanel: 'Panel Admin',
    dashboard: 'Dashboard',
    welcome: 'Selamat datang',
    logout: 'Keluar',
    login: 'Masuk',
    email: 'Alamat Email',
    password: 'Kata Sandi',
    signIn: 'Masuk untuk mengakses panel admin',
    loggingIn: 'Sedang masuk...',
    
    // Dashboard
    dashboardOverview: 'Ringkasan Dasbor',
    totalNews: 'Total Berita',
    totalServices: 'Total Layanan',
    recentUpdates: 'Pembaruan Terbaru',
    recentNews: 'Berita Terbaru',
    noNewsAvailable: 'Tidak ada berita tersedia',
    
    // News Management
    newsManagement: 'Manajemen Berita',
    addNews: 'Tambah Berita',
    editNews: 'Edit Berita',
    title: 'Judul',
    content: 'Konten',
    thumbnail: 'Gambar Thumbnail',
    author: 'Penulis',
    date: 'Tanggal',
    actions: 'Aksi',
    cancel: 'Batal',
    save: 'Simpan',
    saving: 'Menyimpan...',
    delete: 'Hapus',
    edit: 'Edit',
    deleteConfirm: 'Apakah Anda yakin ingin menghapus berita ini?',
    
    // Services Management
    servicesManagement: 'Manajemen Layanan',
    addService: 'Tambah Layanan',
    editService: 'Edit Layanan',
    description: 'Deskripsi',
    icon: 'Ikon',
    deleteServiceConfirm: 'Hapus layanan ini?',
    
    // Profile Management
    profileManagement: 'Manajemen Profil',
    history: 'Sejarah',
    contact: 'Kontak',
    saveChanges: 'Simpan Perubahan',
    
    // Footer
    buildingInfrastructure: 'Membangun infrastruktur digital untuk konektivitas yang lebih baik',
    quickLinks: 'Tautan Cepat',
    allRightsReserved: 'Hak cipta dilindungi',
    
    // Messages
    loginSuccessful: 'Login berhasil',
    loginFailed: 'Login gagal',
    newsCreated: 'Berita berhasil dibuat',
    newsUpdated: 'Berita berhasil diperbarui',
    newsDeleted: 'Berita berhasil dihapus',
    serviceCreated: 'Layanan berhasil dibuat',
    serviceUpdated: 'Layanan berhasil diperbarui',
    serviceDeleted: 'Layanan berhasil dihapus',
    profileUpdated: 'Profil berhasil diperbarui',
    failedToSave: 'Gagal menyimpan',
  }
};

// Language Context
const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('language') || 'id';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'id' : 'en');
  };

  const t = (key) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};