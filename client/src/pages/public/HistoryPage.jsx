import ProfileLayout from '../../components/ProfileLayout';
import { useLanguage } from '../../store/languageStore';

const HistoryPage = () => {
  const { language } = useLanguage();

  const historyData = {
    id: {
      title: 'Sejarah Singkat',
      intro: 'Badan Aksesibilitas Telekomunikasi dan Informasi (BAKTI) lahir pada tahun 2006. Semula organisasi ini bernama Balai Telekomunikasi dan Informatika Pedesaan (BTIP) sesuai nomenklatur yang ditetapkan Peraturan Menteri Komunikasi dan Informatika. Seiring dengan pesatnya perkembangan di bidang Teknologi Informasi dan Komunikasi (TIK) dan tuntutan akan ketersediaan layanan TIK di seluruh lapisan masyarakat, BAKTI terus bertransformasi untuk meningkatkan fleksibilitas, efektivitas, dan produktivitas pelaksanaan tugas dan fungsinya.',
      timeline: [
        {
          year: '2006',
          title: 'Lahirnya BTIP',
          description: 'Balai Telekomunikasi dan Informatika Pedesaan (BTIP) didirikan berdasarkan Peraturan Menteri Komunikasi dan Informatika Nomor: 35/PER/M.Kominfo/11/2006. BTIP menerapkan pola pengelolaan keuangan Badan Layanan Umum berdasarkan Keputusan Menteri Keuangan Nomor: 1006/KMK.05/2006.'
        },
        {
          year: '2010',
          title: 'Transformasi ke BP3TI',
          description: 'BTIP bertransformasi menjadi Balai Penyedia dan Pengelola Pembiayaan Telekomunikasi dan Informatika (BP3TI) pada tanggal 19 November 2010 berdasarkan Peraturan Menteri Komunikasi dan Informatika Nomor: 18/PER/M/KOMINFO/11/2010.'
        },
        {
          year: '2017',
          title: 'Menjadi BP3TI Non-Eselon',
          description: 'BP3TI berubah menjadi unit pelaksana teknis non eselon berdasarkan Peraturan Menteri Komunikasi dan Informatika Nomor 2 Tahun 2017. Perubahan struktur dari process-based menjadi output-based, yaitu infrastruktur dan ekosistem.'
        },
        {
          year: '2018',
          title: 'Menjadi Bakti',
          description: 'Perubahan nomenklatur menjadi BAKTI (Badan Aksesibilitas Telekomunikasi dan Informasi) ditetapkan melalui Peraturan Menteri Komunikasi dan Informatika Republik Indonesia Nomor 3 Tahun 2018 tertanggal 23 Mei 2018.'
        }
      ]
    },
    en: {
      title: 'Portal History',
      intro: 'The journey of transformation in advancing government in the digital era, BAKTI has played a role as an accelerator of Indonesia\'s Digital Transformation.',
      timeline: [
        {
          year: '2006',
          title: 'Established',
          description: 'PT Penjaminan Infrastruktur Indonesia (Persero) or formerly PT Penjaminan Infrastruktur Indonesia (IIGF) was established based on Presidential Regulation of the Republic of Indonesia Number 78 of 2009 concerning the Legal Form of INFRASTRUCTURE GUARANTEE INDONESIA and the Articles of Association of INDONESIA INFRASTRUCTURE GUARANTEE FUND as amended by Presidential Regulation Number 1 of 2019 concerning Amendments to Presidential Regulation Number 78 of 2009.'
        },
        {
          year: '2010',
          title: 'Trusted USO/BHP',
          description: 'BAKTI was entrusted by the Indonesian government to implement the Universal Service Obligation (USO) program and the Indonesian Broadband Program. BAKTI plays a role in providing communication access to remote areas.'
        },
        {
          year: '2017',
          title: 'Becoming World Class BPPT',
          description: 'BAKTI was also trusted to carry out roles and functions in the National Planning and Budgeting System (SPPN). In supporting the SPPN process, BAKTI acts as one of the sources of funds for Ministries/Agencies to finance activities outside the APBN.'
        },
        {
          year: '2018',
          title: 'Implementation of GGG',
          description: 'Management of Good e-Government Governance to increase trust and provide excellent service in carrying out public services to stakeholders. Two things that are the main highlights of GGG are Integrity and Accountability related to HR and Institutions.'
        }
      ]
    }
  };

  const content = historyData[language];

  return (
    <ProfileLayout>
      <div className="prose dark:prose-invert max-w-none">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 transition-colors">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            {/* {content.title} */}
            Sejarah Singkat
          </h1>

          <div className='flex flex-col lg:flex-row gap-6'>

          </div>
        
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            {/* {content.intro} */}
            <strong>
            Badan Aksesibilitas Telekomunikasi dan Informasi (BAKTI)
            </strong>&nbsp;lahir pada tahun 2006. Semula organisasi ini bernama Balai Telekomunikasi dan Informatika Pedesaan (BTIP) sesuai nomenklatur yang ditetapkan Peraturan Menteri Komunikasi dan Informatika. <br /><br />
            Seiring dengan pesatnya perkembangan di bidang Teknologi Informasi dan Komunikasi (TIK) dan tuntutan akan ketersediaan layanan TIK di seluruh lapisan masyarakat, BAKTI terus bertransformasi untuk meningkatkan fleksibilitas, efektivitas, dan produktivitas pelaksanaan tugas dan fungsinya.
          </p>
        </div>

        <div className="mt-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            {language === 'id' ? 'Perjalanan Transformasi' : 'Transformation Journey'}
          </h2>
        </div>

        <div className="space-y-8">
          {content.timeline.map((item, index) => (
            <div key={index} className="relative pl-8 pb-8 border-l-2 border-primary dark:border-primary-500 last:pb-0">
              <div className="absolute -left-3 top-0 w-6 h-6 bg-primary dark:bg-primary-500 rounded-full border-4 border-white dark:border-gray-800"></div>
              
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 hover:scale-[1.02] transition-colors">
                <div className="flex items-center gap-4 mb-3">
                  <span className="inline-block px-4 py-1 bg-primary dark:bg-primary-600 text-white rounded-full text-sm font-bold">
                    {item.year}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {item.title}
                  </h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ProfileLayout>
  );
};

export default HistoryPage;