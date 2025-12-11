import ProfileLayout from '../../components/ProfileLayout';
import { useLanguage } from '../../store/languageStore';
import { Users, Mail, Phone } from 'lucide-react';

const OrganizationPage = () => {
  const { language } = useLanguage();

  const organizationData = {
    id: {
      title: 'Struktur Organisasi',
      description: 'Struktur organisasi Portal dirancang untuk mendukung kelancaran operasional dan pencapaian visi misi perusahaan.',
      leadership: [
        {
          position: 'Direktur Utama',
          name: 'Dr. John Doe',
          email: 'ceo@portal.id',
          phone: '+62 21 1234567'
        },
        {
          position: 'Direktur Teknik',
          name: 'Ir. Jane Smith, M.T.',
          email: 'cto@portal.id',
          phone: '+62 21 1234568'
        },
        {
          position: 'Direktur Operasional',
          name: 'Ahmad Wijaya, S.E., M.M.',
          email: 'coo@portal.id',
          phone: '+62 21 1234569'
        }
      ],
      departments: [
        {
          name: 'Divisi Teknologi Informasi',
          description: 'Bertanggung jawab atas infrastruktur IT dan pengembangan sistem'
        },
        {
          name: 'Divisi Operasional',
          description: 'Mengelola operasional harian dan layanan pelanggan'
        },
        {
          name: 'Divisi Keuangan',
          description: 'Mengelola keuangan dan pelaporan perusahaan'
        },
        {
          name: 'Divisi SDM',
          description: 'Mengelola pengembangan sumber daya manusia'
        }
      ]
    },
    en: {
      title: 'Organization Structure',
      description: 'Portal\'s organizational structure is designed to support operational smoothness and achievement of the company\'s vision and mission.',
      leadership: [
        {
          position: 'Chief Executive Officer',
          name: 'Dr. John Doe',
          email: 'ceo@portal.id',
          phone: '+62 21 1234567'
        },
        {
          position: 'Chief Technology Officer',
          name: 'Ir. Jane Smith, M.T.',
          email: 'cto@portal.id',
          phone: '+62 21 1234568'
        },
        {
          position: 'Chief Operating Officer',
          name: 'Ahmad Wijaya, S.E., M.M.',
          email: 'coo@portal.id',
          phone: '+62 21 1234569'
        }
      ],
      departments: [
        {
          name: 'Information Technology Division',
          description: 'Responsible for IT infrastructure and system development'
        },
        {
          name: 'Operations Division',
          description: 'Manages daily operations and customer service'
        },
        {
          name: 'Finance Division',
          description: 'Manages company finance and reporting'
        },
        {
          name: 'Human Resources Division',
          description: 'Manages human resource development'
        }
      ]
    }
  };

  const content = organizationData[language];

  return (
    <ProfileLayout>
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          {content.title}
        </h1>
        
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
          {content.description}
        </p>

        {/* Leadership */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            {language === 'id' ? 'Pimpinan' : 'Leadership'}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {content.leadership.map((leader, index) => (
              <div key={index} className="bg-gradient-to-br from-primary/5 to-secondary/5 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg p-6 border border-primary/20 dark:border-blue-500/30 transition-all hover:shadow-lg">
                <div className="flex items-center justify-center w-20 h-20 bg-primary dark:bg-blue-600 rounded-full mx-auto mb-4">
                  <Users className="text-white" size={40} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white text-center mb-2">
                  {leader.name}
                </h3>
                <p className="text-primary dark:text-blue-400 text-center font-medium mb-4">
                  {leader.position}
                </p>
                <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <div className="flex items-center gap-2">
                    <Mail size={16} />
                    <a href={`mailto:${leader.email}`} className="hover:text-primary dark:hover:text-blue-400">
                      {leader.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone size={16} />
                    <span>{leader.phone}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Departments */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            {language === 'id' ? 'Divisi' : 'Divisions'}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {content.departments.map((dept, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 transition-colors hover:shadow-md">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                  {dept.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {dept.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Organization Chart Placeholder */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            {language === 'id' ? 'Bagan Organisasi' : 'Organization Chart'}
          </h2>
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg p-12 text-center border-2 border-dashed border-primary/30 dark:border-blue-500/30">
            <Users className="mx-auto mb-4 text-primary dark:text-blue-400" size={64} />
            <p className="text-gray-600 dark:text-gray-400">
              {language === 'id' 
                ? 'Bagan organisasi akan ditampilkan di sini' 
                : 'Organization chart will be displayed here'}
            </p>
          </div>
        </div>
      </div>
    </ProfileLayout>
  );
};

export default OrganizationPage;