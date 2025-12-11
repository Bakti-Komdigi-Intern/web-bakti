import ProfileLayout from '../../components/ProfileLayout';
import { useLanguage } from '../../store/languageStore';
import { Target, CheckCircle, Sparkles } from 'lucide-react';

const VisionMissionPage = () => {
  const { language } = useLanguage();

  const visionMissionData = {
    id: {
      title: 'Visi & Misi',
      vision: {
        title: 'Visi',
        content: 'Menjadi platform terdepan dalam pelayanan digital publik yang inovatif, terpercaya, dan berkelanjutan untuk mendukung transformasi digital Indonesia.'
      },
      mission: {
        title: 'Misi',
        items: [
          'Menyediakan infrastruktur digital yang handal dan modern untuk mendukung konektivitas nasional',
          'Memberikan layanan publik berbasis teknologi yang efisien dan mudah diakses',
          'Mendorong inovasi dan transformasi digital di seluruh sektor pemerintahan',
          'Membangun ekosistem digital yang inklusif dan merata di seluruh Indonesia',
          'Meningkatkan kualitas layanan melalui pemanfaatan teknologi terkini'
        ]
      },
      values: {
        title: 'Nilai-Nilai Perusahaan',
        items: [
          {
            name: 'Integritas',
            description: 'Berkomitmen untuk selalu jujur, transparan, dan bertanggung jawab dalam setiap tindakan'
          },
          {
            name: 'Inovasi',
            description: 'Terus berinovasi dan mengadopsi teknologi terbaru untuk memberikan solusi terbaik'
          },
          {
            name: 'Kolaborasi',
            description: 'Membangun kerjasama yang kuat dengan berbagai pihak untuk mencapai tujuan bersama'
          },
          {
            name: 'Keunggulan',
            description: 'Berkomitmen untuk memberikan layanan dan hasil kerja yang berkualitas tinggi'
          },
          {
            name: 'Keberlanjutan',
            description: 'Menjalankan operasional dengan memperhatikan dampak jangka panjang terhadap lingkungan dan masyarakat'
          }
        ]
      },
      goals: {
        title: 'Tujuan dan Tanggung Jawab Utama',
        items: [
          'Penyelenggaraan infrastruktur telekomunikasi dan informatika',
          'Memfasilitasi akses digital untuk daerah terpencil dan tertinggal',
          'Pengembangan layanan digital untuk meningkatkan efisiensi pemerintahan',
          'Penguatan keamanan siber nasional'
        ]
      }
    },
    en: {
      title: 'Vision & Mission',
      vision: {
        title: 'Vision',
        content: 'To become the leading platform in innovative, trusted, and sustainable public digital services to support Indonesia\'s digital transformation.'
      },
      mission: {
        title: 'Mission',
        items: [
          'Provide reliable and modern digital infrastructure to support national connectivity',
          'Deliver efficient and easily accessible technology-based public services',
          'Drive innovation and digital transformation across all government sectors',
          'Build an inclusive and equitable digital ecosystem throughout Indonesia',
          'Improve service quality through the utilization of cutting-edge technology'
        ]
      },
      values: {
        title: 'Company Values',
        items: [
          {
            name: 'Integrity',
            description: 'Committed to always being honest, transparent, and responsible in every action'
          },
          {
            name: 'Innovation',
            description: 'Continuously innovating and adopting the latest technology to provide the best solutions'
          },
          {
            name: 'Collaboration',
            description: 'Building strong partnerships with various parties to achieve common goals'
          },
          {
            name: 'Excellence',
            description: 'Committed to delivering high-quality services and work results'
          },
          {
            name: 'Sustainability',
            description: 'Operating with consideration for long-term impacts on the environment and society'
          }
        ]
      },
      goals: {
        title: 'Main Objectives and Responsibilities',
        items: [
          'Implementation of telecommunications and informatics infrastructure',
          'Facilitate digital access for remote and underdeveloped areas',
          'Development of digital services to improve government efficiency',
          'Strengthening national cybersecurity'
        ]
      }
    }
  };

  const content = visionMissionData[language];

  return (
    <ProfileLayout>
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          {content.title}
        </h1>

        {/* Vision */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-primary dark:bg-blue-600 rounded-full flex items-center justify-center">
              <Target className="text-white" size={24} />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              {content.vision.title}
            </h2>
          </div>
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg p-8 border-l-4 border-primary dark:border-blue-500">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              {content.vision.content}
            </p>
          </div>
        </div>

        {/* Mission */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-secondary dark:bg-purple-600 rounded-full flex items-center justify-center">
              <CheckCircle className="text-white" size={24} />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              {content.mission.title}
            </h2>
          </div>
          <div className="space-y-4">
            {content.mission.items.map((item, index) => (
              <div key={index} className="flex gap-4 items-start bg-gray-50 dark:bg-gray-700 rounded-lg p-4 transition-colors hover:shadow-md">
                <div className="flex-shrink-0 w-8 h-8 bg-primary dark:bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  {index + 1}
                </div>
                <p className="text-gray-700 dark:text-gray-300 pt-1">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Values */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-yellow-500 dark:bg-yellow-600 rounded-full flex items-center justify-center">
              <Sparkles className="text-white" size={24} />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              {content.values.title}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {content.values.items.map((value, index) => (
              <div key={index} className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-700 dark:to-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-600 transition-all hover:shadow-lg hover:scale-105">
                <h3 className="text-xl font-bold text-primary dark:text-blue-400 mb-3">
                  {value.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Goals */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            {content.goals.title}
          </h2>
          <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 transition-colors">
            <ul className="space-y-3">
              {content.goals.items.map((goal, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="flex-shrink-0 text-green-500 dark:text-green-400 mt-1" size={20} />
                  <span className="text-gray-700 dark:text-gray-300">
                    {goal}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </ProfileLayout>
  );
};

export default VisionMissionPage;