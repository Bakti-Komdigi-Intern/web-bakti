import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';

// Public pages
import HomePage from '../pages/public/HomePage';
import ProfilePage from '../pages/public/ProfilePage';
import ServicesPage from '../pages/public/ServicesPage';
import NewsPage from '../pages/public/NewsPage';
import NewsDetailPage from '../pages/public/NewsDetailPage';

// Admin pages
import LoginPage from '../pages/admin/LoginPage';
import DashboardPage from '../pages/admin/DashboardPage';
import NewsManagePage from '../pages/admin/NewsManagePage';
import ServicesManagePage from '../pages/admin/ServicesManagePage';
import ProfileManagePage from '../pages/admin/ProfileManagePage';

const AppRouter = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<HomePage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/news" element={<NewsPage />} />
      <Route path="/news/:slug" element={<NewsDetailPage />} />

      {/* Admin Routes */}
      <Route path="/admin/login" element={<LoginPage />} />
      <Route
        path="/admin/dashboard"
        element={
          <ProtectedRoute>
            <DashboardPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/news"
        element={
          <ProtectedRoute>
            <NewsManagePage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/services"
        element={
          <ProtectedRoute>
            <ServicesManagePage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/profile"
        element={
          <ProtectedRoute>
            <ProfileManagePage />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default AppRouter;