import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { newsService } from '../../services/newsService';
import { servicesService } from '../../services/servicesService';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../../store/languageStore';

const HomePage = () => {
  const [latestNews, setLatestNews] = useState([]);
  const [services, setServices] = useState([]);
  const { t } = useLanguage();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [newsRes, servicesRes] = await Promise.all([
        newsService.getLatestNews(3),
        servicesService.getServices()
      ]);
      
      if (newsRes.success) setLatestNews(newsRes.data);
      if (servicesRes.success) setServices(servicesRes.data.slice(0, 5));
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 transition-colors">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-tertiary dark:from-blue-900 dark:to-purple-900 text-white py-20 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Indonesia Terkoneksi, <br />
              <span className='text-secondary dark:text-tertiary'>Semakin Digital <br /></span>
              Semakin Maju
            </h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              {t('welcomeSubtitle')}
            </p>
            <Link
              to="/services"
              className="inline-flex items-center bg-white text-primary hover:text-white dark:bg-gray-800 dark:text-white px-8 py-3 rounded-lg font-semibold hover:bg-tertiary dark:hover:bg-gray-700 transition-colors"
            >
              {t('exploreServices')}
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Highlight */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            {t('ourServices')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {services.map((service) => (
              <div key={service.id} className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow ">
                {service.icon && (
                  <img src={service.icon} alt={service.title} className="w-16 h-16 mb-4 mx-auto" />
                )}
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white text-center">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-center">{service.description.substring(0, 70)}...</p>
                <Link to="/services" className="text-primary dark:text-blue-400 hover:underline">
                  {t('learnMore')} →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-16 bg-white dark:bg-gray-900 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            {t('latestNews')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {latestNews.map((news) => (
              <Link
                key={news.id}
                to={`/news/${news.slug}`}
                className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              >
                {news.thumbnail && (
                  <img
                    src={news.thumbnail}
                    alt={news.title}
                    className="w-full h-48 object-cover"
                  />
                )}
                <div className="p-6">
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                    {new Date(news.created_at).toLocaleDateString('id-ID')}
                  </p>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white hover:text-primary dark:hover:text-blue-400">
                    {news.title}
                  </h3>
                  <div 
                    className="text-gray-600 dark:text-gray-300 line-clamp-3"
                    dangerouslySetInnerHTML={{ __html: news.content.substring(0, 150) + '...' }}
                  />
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/news"
              className="inline-flex items-center text-primary dark:text-blue-400 hover:underline text-lg"
            >
              {t('viewAllNews')}
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;