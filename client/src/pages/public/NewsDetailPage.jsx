import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { newsService } from '../../services/newsService';
import { Calendar, User, ArrowLeft } from 'lucide-react';

const NewsDetailPage = () => {
  const { slug } = useParams();
  const [news, setNews] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchNews();
  }, [slug]);

  const fetchNews = async () => {
    try {
      const response = await newsService.getNewsDetail(slug);
      if (response.success) {
        setNews(response.data);
      }
    } catch (error) {
      console.error('Error fetching news:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <p className="text-xl text-gray-600">Loading...</p>
        </div>
        <Footer />
      </div>
    );
  }

  if (!news) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">News Not Found</h1>
            <Link to="/news" className="text-primary hover:underline">
              Back to News
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/news"
            className="inline-flex items-center text-primary hover:underline mb-6"
          >
            <ArrowLeft className="mr-2" size={20} />
            Back to News
          </Link>

          <article className="bg-white rounded-lg shadow-lg overflow-hidden">
            {news.thumbnail && (
              <img
                src={news.thumbnail}
                alt={news.title}
                className="w-full h-96 object-cover"
              />
            )}

            <div className="p-8">
              <h1 className="text-4xl font-bold text-gray-800 mb-4">
                {news.title}
              </h1>

              <div className="flex items-center space-x-6 text-gray-600 mb-8 pb-8 border-b">
                <div className="flex items-center">
                  <User size={18} className="mr-2" />
                  <span>{news.author}</span>
                </div>
                <div className="flex items-center">
                  <Calendar size={18} className="mr-2" />
                  <span>
                    {new Date(news.created_at).toLocaleDateString('id-ID', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </span>
                </div>
              </div>

              <div 
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: news.content }}
              />
            </div>
          </article>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default NewsDetailPage;