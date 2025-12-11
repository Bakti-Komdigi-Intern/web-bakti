import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '../store/languageStore';
import ThemeToggle from './ThemeToggle';
import LanguageToggle from './LanguageToggle';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [profileDropdown, setProfileDropdown] = useState(false);
  const { t, language } = useLanguage();

  const profileLinks = [
    { name: language === 'id' ? 'Sejarah' : 'History', path: '/profile/history' },
    { name: language === 'id' ? 'Struktur Organisasi' : 'Organization', path: '/profile/organization' },
    { name: language === 'id' ? 'Visi & Misi' : 'Vision & Mission', path: '/profile/vision-mission' },
  ];

  const mainLinks = [
    { name: t('home'), path: '/' },
    { name: t('services'), path: '/services' },
    { name: t('news'), path: '/news' },
  ];

  return (
    <nav className="bg-white sticky top-0 z-50 dark:bg-gray-900 text-primary dark:text-white shadow-lg transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img className='h-12 w-18 block dark:hidden' src="./src/assets/images/Logo_Bakti_Komdigi.png" alt="" />
              <img className='h-12 w-18 hidden dark:block' src="./src/assets/images/Logo_Bakti_Komdigi_Putih.png" alt="" />
              {/* <span className="text-2xl font-bold">Portal</span> */}
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Beranda */}
            <Link
              to="/"
              className="hover:text-gray-300 transition-colors px-3 py-2"
            >
              {t('home')}
            </Link>

            {/* {mainLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="hover:text-tertiary dark:hover:text-gray-500 transition-colors px-3 py-2"
              >
                {link.name}
              </Link>
            ))} */}

            {/* Profile Dropdown */}
            <div className="relative">
              <button
                onClick={() => setProfileDropdown(!profileDropdown)}
                className="flex items-center gap-1 hover:text-gray-300 transition-colors px-3 py-2"
              >
                {t('profile')}
                <ChevronDown size={16} className={`transform transition-transform ${profileDropdown ? 'rotate-180' : ''}`} />
              </button>
              
              {profileDropdown && (
                <>
                  <div 
                    className="fixed inset-0 z-10" 
                    onClick={() => setProfileDropdown(false)}
                  />
                  <div className="absolute right-2 mt-2 w-56 bg-white dark:bg-gray-800 rounded-lg shadow-xl z-20 py-2">
                    {profileLinks.map((link) => (
                      <Link
                        key={link.path}
                        to={link.path}
                        className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                        onClick={() => setProfileDropdown(false)}
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Layanan */}
            <Link
              to="/services"
              className="hover:text-gray-300 transition-colors px-3 py-2"
            >
              {t('services')}
            </Link>

            {/* Berita */}
            <Link
              to="/news"
              className="hover:text-gray-300 transition-colors px-3 py-2"
            >
              {t('news')}
            </Link>

            <div className="flex items-center gap-2 ml-4 pl-4 border-l border-white/30">
              <ThemeToggle />
              <LanguageToggle />
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-primary-dark"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-primary dark:bg-gray-900">
            {mainLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="block px-3 py-2 rounded-md hover:bg-primary-dark dark:hover:bg-gray-800"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            
            {/* Profile submenu mobile */}
            <div className="pl-3">
              <div className="font-semibold py-2 text-gray-300">{t('profile')}</div>
              {profileLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="block px-3 py-2 rounded-md hover:bg-primary-dark dark:hover:bg-gray-800 text-sm"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="px-3 py-2">
              <LanguageToggle />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;