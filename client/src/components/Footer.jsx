import { useLanguage } from '../store/languageStore';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-800 dark:bg-gray-950 text-white mt-auto transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">BAKTI Komdigi</h3>
            <p className="text-gray-400 dark:text-gray-500">
              Centennial Tower Lt. 42-45,<br/>
              Jl. Gatot Subroto Kav. 24-25<br/>
              Jakarta 12930<br/>
              Telepon : (021) 31936590<br/>
              Operasional Kantor :<br/>
              Senin - Jumat Pkl. 08.00 - 17.00 WIB<br/>
              online Senin - Jumat 24 jam<br/>
              Email : humas@baktikominfo.id
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('quickLinks')}</h4>
            <ul className="space-y-2 text-gray-400 dark:text-gray-500">
              <li><a href="/profile" className="hover:text-white">{t('profile')}</a></li>
              <li><a href="/services" className="hover:text-white">{t('services')}</a></li>
              <li><a href="/news" className="hover:text-white">{t('news')}</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('contact')}</h4>
            <p className="text-gray-400 dark:text-gray-500">
              Email: humas@baktikominfo.id<br />
              Whatsapp: (021) 31936590
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Social Media</h4>
            <p className="text-gray-400 dark:text-gray-500">
              Facebook<br />
              Instagram<br />
              Youtube<br />
              Twitter
            </p>
          </div>
        </div>
        <div className="border-t border-gray-700 dark:border-gray-800 mt-8 pt-8 text-center text-gray-400 dark:text-gray-500">
          <p>&copy; {new Date().getFullYear()} BAKTI Komdigi. {t('allRightsReserved')}.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;