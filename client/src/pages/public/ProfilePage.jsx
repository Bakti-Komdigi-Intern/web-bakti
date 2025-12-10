import { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { profileService } from '../../services/profileService';
import { useLanguage } from '../../store/languageStore';

const ProfilePage = () => {
  const [profile, setProfile] = useState(null);
  const { t } = useLanguage();

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const response = await profileService.getProfile();
      if (response.success) {
        setProfile(response.data);
      }
    } catch (error) {
      console.error('Error fetching profile:', error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 transition-colors">
      <Navbar />
      
      <div className="flex-grow bg-gray-50 dark:bg-gray-800 py-12 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            {t('companyProfile')}
          </h1>

          <div className="space-y-12">
            {/* Sejarah */}
            <section className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-8 transition-colors">
              <h2 className="text-2xl font-bold text-primary dark:text-blue-400 mb-4">
                {t('ourHistory')}
              </h2>
              <div 
                className="prose dark:prose-invert max-w-none text-gray-700 dark:text-gray-300"
                dangerouslySetInnerHTML={{ __html: profile?.sejarah || `<p>${t('loading')}</p>` }}
              />
            </section>

            {/* Visi Misi */}
            <section className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-8 transition-colors">
              <h2 className="text-2xl font-bold text-primary dark:text-blue-400 mb-4">
                {t('visionMission')}
              </h2>
              <div 
                className="prose dark:prose-invert max-w-none text-gray-700 dark:text-gray-300"
                dangerouslySetInnerHTML={{ __html: profile?.visi_misi || `<p>${t('loading')}</p>` }}
              />
            </section>

            {/* Struktur Organisasi */}
            <section className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-8 transition-colors">
              <h2 className="text-2xl font-bold text-primary dark:text-blue-400 mb-4">
                {t('organizationStructure')}
              </h2>
              <div 
                className="prose dark:prose-invert max-w-none text-gray-700 dark:text-gray-300"
                dangerouslySetInnerHTML={{ __html: profile?.struktur_organisasi || `<p>${t('loading')}</p>` }}
              />
            </section>

            {/* Kontak */}
            <section className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-8 transition-colors">
              <h2 className="text-2xl font-bold text-primary dark:text-blue-400 mb-4">
                {t('contactUs')}
              </h2>
              <div 
                className="prose dark:prose-invert max-w-none text-gray-700 dark:text-gray-300"
                dangerouslySetInnerHTML={{ __html: profile?.kontak || `<p>${t('loading')}</p>` }}
              />
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProfilePage;