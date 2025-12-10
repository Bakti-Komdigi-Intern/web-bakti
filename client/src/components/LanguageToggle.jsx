import { Globe } from 'lucide-react';
import { useLanguage } from '../store/languageStore';

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 p-2 rounded-lg hover:bg-tertiary hover:text-white dark:hover:bg-gray-700 dark:text-white transition-colors"
      aria-label="Toggle language"
    >
      <Globe className="w-5 h-5" />
      <span className="text-sm font-medium uppercase">{language}</span>
    </button>
  );
};

export default LanguageToggle;