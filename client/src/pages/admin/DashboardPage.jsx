import { useEffect, useState } from 'react';
import AdminLayout from '../../components/AdminLayout';
import { newsService } from '../../services/newsService';
import { servicesService } from '../../services/servicesService';
import { Newspaper, Briefcase, TrendingUp } from 'lucide-react';

const DashboardPage = () => {
  const [stats, setStats] = useState({
    totalNews: 0,
    totalServices: 0,
    recentNews: []
  });

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const [newsRes, servicesRes, recentRes] = await Promise.all([
        newsService.getNews(1, 1000),
        servicesService.getServices(),
        newsService.getLatestNews(5)
      ]);

      setStats({
        totalNews: newsRes.data?.pagination?.total || 0,
        totalServices: servicesRes.data?.length || 0,
        recentNews: recentRes.data || []
      });
    } catch (error) {
      console.error('Error fetching stats:', error);
    }
  };

  const statCards = [
    {
      icon: Newspaper,
      label: 'Total News',
      value: stats.totalNews,
      color: 'bg-blue-500'
    },
    {
      icon: Briefcase,
      label: 'Total Services',
      value: stats.totalServices,
      color: 'bg-green-500'
    },
    {
      icon: TrendingUp,
      label: 'Recent Updates',
      value: stats.recentNews.length,
      color: 'bg-purple-500'
    }
  ];

  return (
    <AdminLayout>
      <div>
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Dashboard Overview</h1>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {statCards.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 text-sm mb-1">{stat.label}</p>
                    <p className="text-3xl font-bold text-gray-800">{stat.value}</p>
                  </div>
                  <div className={`${stat.color} p-4 rounded-full`}>
                    <Icon className="text-white" size={24} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Recent News */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Recent News</h2>
          <div className="space-y-4">
            {stats.recentNews.length === 0 ? (
              <p className="text-gray-500">No news available</p>
            ) : (
              stats.recentNews.map((news) => (
                <div key={news.id} className="border-b border-gray-200 pb-4 last:border-0">
                  <h3 className="font-semibold text-gray-800 mb-1">{news.title}</h3>
                  <p className="text-sm text-gray-600">
                    By {news.author} • {new Date(news.created_at).toLocaleDateString('id-ID')}
                  </p>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default DashboardPage;