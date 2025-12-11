import { Link, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { useLanguage } from '../store/languageStore';
import { History, Users, Target } from 'lucide-react';

const ProfileLayout = ({ children }) => {
  const location = useLocation();
  const { t, language } = useLanguage();

  const menuItems = [
    {
      path: '/profile/history',
      icon: History,
      label: language === 'id' ? 'Sejarah' : 'History',
    },
    {
      path: '/profile/organization',
      icon: Users,
      label: language === 'id' ? 'Struktur Organisasi' : 'Organization Structure',
    },
    {
      path: '/profile/vision-mission',
      icon: Target,
      label: language === 'id' ? 'Visi & Misi' : 'Vision & Mission',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 transition-colors">
      <Navbar />
      
      {/* Hero Header */}
      <div className="bg-gradient-to-r from-primary to-tertiary dark:from-primary-900 dark:to-purple-900 text-white py-16 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {language === 'id' ? 'Sejarah' : 'History of'} BAKTI
          </h1>
          <p className="text-xl">
            {language === 'id' 
              ? 'Perjalanan transformasi dalam mewujudkan pemerataan akses telekomunikasi dan informasi di Indonesia' 
              : 'The journey of transformation in realizing equitable access to telecommunications and information in Indonesia'}
          </p>
        </div>
      </div>

      <div className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <nav className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 sticky top-20 transition-colors">
                <h2 className="text-lg font-bold mb-4 text-gray-900 dark:text-white px-2">
                  {language === 'id' ? 'Menu Profil' : 'Profile Menu'}
                </h2>
                <ul className="space-y-2">
                  {menuItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = location.pathname === item.path;
                    return (
                      <li key={item.path}>
                        <Link
                          to={item.path}
                          className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                            isActive
                              ? 'bg-primary dark:bg-primary-600 text-white'
                              : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                          }`}
                        >
                          <Icon size={20} />
                          <span className="font-medium">{item.label}</span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </aside>

            {/* Content */}
            <main className="lg:col-span-3">
              {/* <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 transition-colors"> */}
                {children}
              {/* </div> */}
            </main>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProfileLayout;