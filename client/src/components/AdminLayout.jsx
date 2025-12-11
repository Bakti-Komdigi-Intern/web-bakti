import { Link, useNavigate, useLocation } from 'react-router-dom';
import { LogOut, LayoutDashboard, Newspaper, Briefcase } from 'lucide-react';
import { authService } from '../services/authService';
import { useLanguage } from '../store/languageStore';
import ThemeToggle from './ThemeToggle';
import LanguageToggle from './LanguageToggle';

const AdminLayout = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const user = authService.getCurrentUser();
  const { t } = useLanguage();

  const handleLogout = () => {
    authService.logout();
    navigate('/admin/login');
  };

  const menuItems = [
    { icon: LayoutDashboard, label: t('dashboard'), path: '/admin/dashboard' },
    { icon: Newspaper, label: t('news'), path: '/admin/news' },
    { icon: Briefcase, label: t('services'), path: '/admin/services' },
  ];

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors">
      {/* Sidebar */}
      <aside className="fixed inset-y-0 left-0 w-64 bg-gray-800 dark:bg-gray-950 text-white">
        <div className="flex items-center justify-center h-16 bg-gray-900 dark:bg-black">
          <h1 className="text-xl font-bold">{t('adminPanel')}</h1>
        </div>
        <nav className="mt-8">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center px-6 py-3 hover:bg-gray-700 dark:hover:bg-gray-800 transition-colors ${
                  isActive ? 'bg-gray-700 dark:bg-gray-800 border-l-4 border-primary' : ''
                }`}
              >
                <Icon className="mr-3" size={20} />
                {item.label}
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* Main Content */}
      <div className="ml-64">
        {/* Header */}
        <header className="bg-white dark:bg-gray-800 shadow-sm h-16 flex items-center justify-between px-8 transition-colors">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
            {menuItems.find(item => item.path === location.pathname)?.label || 'Admin'}
          </h2>
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <LanguageToggle />
            <span className="text-gray-600 dark:text-gray-300">{t('welcome')}, {user?.name}</span>
            <button
              onClick={handleLogout}
              className="flex items-center px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
            >
              <LogOut className="mr-2" size={18} />
              {t('logout')}
            </button>
          </div>
        </header>

        {/* Content */}
        <main className="p-8">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;