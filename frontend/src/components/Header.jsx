import React from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

const Header = () => {
  const { t } = useTranslation();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-lg border-b border-white/40 shadow">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src="/qickroom.svg" alt="QickRoom Logo" className="h-16 w-auto drop-shadow-lg" />
        </div>

        {/* Navigation Links */}
        <div className="hidden lg:flex items-center gap-8">
          <button
            onClick={() => scrollToSection('hero')}
            className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300"
          >
            {t('nav_home')}
          </button>
          <button
            onClick={() => scrollToSection('how-it-works')}
            className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300"
          >
            {t('nav_how_it_works')}
          </button>
          <button
            onClick={() => scrollToSection('services')}
            className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300"
          >
            {t('nav_services')}
          </button>
          <button
            onClick={() => scrollToSection('communication')}
            className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300"
          >
            {t('nav_communication')}
          </button>
          <button
            onClick={() => scrollToSection('benefits')}
            className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300"
          >
            {t('nav_benefits')}
          </button>
          <button
            onClick={() => scrollToSection('profits')}
            className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300"
          >
            {t('nav_profits')}
          </button>
          <button
            onClick={() => scrollToSection('why-us')}
            className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300"
          >
            {t('nav_why_us')}
          </button>
          <button
            onClick={() => scrollToSection('faq')}
            className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300"
          >
            {t('nav_faq')}
          </button>
        </div>

        <LanguageSwitcher />
      </div>
    </nav>
  );
};

export default Header;
