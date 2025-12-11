import { Routes, Route, Navigate } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';

// Public pages
import HomePage from '../pages/public/HomePage';
import HistoryPage from '../pages/public/HistoryPage';
import OrganizationPage from '../pages/public/OrganizationPage';
import VisionMissionPage from '../pages/public/VisionMissionPage';
import ServicesPage from '../pages/public/ServicesPage';
import NewsPage from '../pages/public/NewsPage';
import NewsDetailPage from '../pages/public/NewsDetailPage';

// Admin pages
import LoginPage from '../pages/admin/LoginPage';
import DashboardPage from '../pages/admin/DashboardPage';
import NewsManagePage from '../pages/admin/NewsManagePage';
import ServicesManagePage from '../pages/admin/ServicesManagePage';

const AppRouter = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<HomePage />} />

      {/* Profile Routes */}
      <Route path="/profile" element={<Navigate to="/profile/history" replace />} />
      <Route path="/profile/history" element={<HistoryPage />} />
      <Route path="/profile/organization" element={<OrganizationPage />} />
      <Route path="/profile/vision-mission" element={<VisionMissionPage />} />
      
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
    </Routes>
  );
};

export default AppRouter;