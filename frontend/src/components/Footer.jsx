import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-900 text-white py-16 px-6" style={{ backgroundColor: '#0F172B' }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">

          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img src="/qickroom.svg" alt="QickRoom Logo" className="h-12 w-auto" />
              <h3 className="text-2xl font-bold text-white">QickRoom</h3>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              {t('footer_description')}
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-300"
              >
                <span className="material-icons text-white text-sm">facebook</span>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors duration-300"
              >
                <span className="material-icons text-white text-sm">alternate_email</span>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-300"
              >
                <span className="material-icons text-white text-sm">link</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">{t('footer_quick_links')}</h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection('hero')}
                  className="text-gray-300 hover:text-white transition-colors duration-300 text-left"
                >
                  {t('nav_home')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('how-it-works')}
                  className="text-gray-300 hover:text-white transition-colors duration-300 text-left"
                >
                  {t('nav_how_it_works')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-gray-300 hover:text-white transition-colors duration-300 text-left"
                >
                  {t('nav_services')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('communication')}
                  className="text-gray-300 hover:text-white transition-colors duration-300 text-left"
                >
                  {t('nav_communication')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('benefits')}
                  className="text-gray-300 hover:text-white transition-colors duration-300 text-left"
                >
                  {t('nav_benefits')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('faq')}
                  className="text-gray-300 hover:text-white transition-colors duration-300 text-left"
                >
                  {t('nav_faq')}
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">{t('footer_contact_info')}</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="material-icons text-blue-400 text-xl">place</span>
                <div>
                  <p className="text-sm font-medium text-white mb-1">{t('footer_address')}</p>
                  <p className="text-gray-300 text-sm">النصر، قسم أول الغردقة، محافظة البحر الأحمر 19662، مصر</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="material-icons text-blue-400 text-xl">phone</span>
                <div>
                  <p className="text-sm font-medium text-white mb-1">{t('footer_phone')}</p>
                  <a
                    href="tel:+201060074053"
                    className="text-gray-300 hover:text-white transition-colors duration-300 text-sm"
                  >
                    +201060074053
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="material-icons text-blue-400 text-xl">email</span>
                <div>
                  <p className="text-sm font-medium text-white mb-1">{t('footer_email')}</p>
                  <a
                    href="mailto:contact@qickroom.com"
                    className="text-gray-300 hover:text-white transition-colors duration-300 text-sm"
                  >
                    contact@qickroom.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm">
              © 2025 QickRoom. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
