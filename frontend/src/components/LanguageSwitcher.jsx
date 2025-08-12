import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    console.log('Switching to', lng);
    i18n.changeLanguage(lng);
    document.documentElement.dir = lng === 'ar' ? 'rtl' : 'ltr';
  };

  return (
  <div className="flex gap-2 items-center z-50 relative">
      <button
        className={`px-3 py-1 rounded ${i18n.language === 'en' ? 'bg-blue-700' : 'bg-blue-500'} text-white hover:bg-blue-600 focus:outline-none`}
        onClick={() => changeLanguage('en')}
        aria-label="Switch to English"
      >
        English
      </button>
      <button
        className={`px-3 py-1 rounded ${i18n.language === 'ar' ? 'bg-green-700' : 'bg-green-500'} text-white hover:bg-green-600 focus:outline-none`}
        onClick={() => changeLanguage('ar')}
        aria-label="Switch to Arabic"
      >
        العربية
      </button>
    </div>
  );
};

export default LanguageSwitcher;
