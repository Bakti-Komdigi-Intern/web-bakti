import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { newsService } from '../../services/newsService';
import { Search, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../../store/languageStore';

const NewsPage = () => {
  const [news, setNews] = useState([]);
  const [pagination, setPagination] = useState({});
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const { t } = useLanguage();

  useEffect(() => {
    fetchNews();
  }, [currentPage, search]);

  const fetchNews = async () => {
    try {
      const response = await newsService.getNews(currentPage, 9, search);
      if (response.success) {
        setNews(response.data.news);
        setPagination(response.data.pagination);
      }
    } catch (error) {
      console.error('Error fetching news:', error);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setCurrentPage(1);
    fetchNews();
  };

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 transition-colors">
      <Navbar />
      
      <div className="flex-grow bg-gray-50 dark:bg-gray-800 py-12 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center mb-8 text-gray-900 dark:text-white">
            {t('latestNewsTitle')}
          </h1>

          {/* Search */}
          <form onSubmit={handleSearch} className="max-w-2xl mx-auto mb-12">
            <div className="flex gap-2">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-3 text-gray-400 dark:text-gray-500" size={20} />
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder={t('searchNews')}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors"
                />
              </div>
              <button
                type="submit"
                className="px-6 py-3 bg-primary dark:bg-blue-600 text-white rounded-lg hover:bg-blue-700 dark:hover:bg-blue-700 transition-colors"
              >
                {t('search')}
              </button>
            </div>
          </form>

          {/* News Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {news.map((item) => (
              <Link
                key={item.id}
                to={`/news/${item.slug}`}
                className="bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all"
              >
                {item.thumbnail && (
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full h-48 object-cover"
                  />
                )}
                <div className="p-6">
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                    {new Date(item.created_at).toLocaleDateString('id-ID', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </p>
                  <h2 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white hover:text-primary dark:hover:text-blue-400 transition-colors">
                    {item.title}
                  </h2>
                  <div 
                    className="text-gray-600 dark:text-gray-300 line-clamp-3"
                    dangerouslySetInnerHTML={{ __html: item.content.substring(0, 150) + '...' }}
                  />
                  <p className="text-primary dark:text-blue-400 mt-4 font-medium">
                    {t('readMore')} →
                  </p>
                </div>
              </Link>
            ))}
          </div>

          {/* Pagination */}
          {pagination.totalPages > 1 && (
            <div className="flex justify-center items-center space-x-4">
              <button
                onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors"
              >
                <ChevronLeft size={20} />
                {t('previous')}
              </button>
              
              <span className="text-gray-600 dark:text-gray-300">
                {t('page')} {currentPage} {t('of')} {pagination.totalPages}
              </span>
              
              <button
                onClick={() => setCurrentPage(p => Math.min(pagination.totalPages, p + 1))}
                disabled={currentPage === pagination.totalPages}
                className="flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors"
              >
                {t('next')}
                <ChevronRight size={20} />
              </button>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default NewsPage;