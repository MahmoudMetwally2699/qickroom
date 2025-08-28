import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const changeLanguage = (lng) => {
    console.log('Switching to', lng);
    i18n.changeLanguage(lng);
    document.documentElement.dir = lng === 'ar' ? 'rtl' : 'ltr';
    setIsOpen(false);
  };

  const getCurrentLanguage = () => {
    return i18n.language === 'ar' ? 'العربية' : 'English';
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Dropdown Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        {/* Globe Icon */}
        <span className="material-icons text-lg">language</span>

        {/* Current Language */}
        <span className="text-sm font-medium hidden sm:inline">
          {getCurrentLanguage()}
        </span>

        {/* Dropdown Arrow */}
        <span
          className={`material-icons text-sm transition-transform duration-200 ${
            isOpen ? 'rotate-180' : 'rotate-0'
          }`}
        >
          keyboard_arrow_down
        </span>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50">
          {/* English Option */}
          <button
            onClick={() => changeLanguage('en')}
            className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 transition-colors duration-150 flex items-center gap-3 ${
              i18n.language === 'en' ? 'bg-blue-50 text-blue-600' : 'text-gray-700'
            }`}
          >
            <span className="text-lg">🇺🇸</span>
            <span>English</span>
            {i18n.language === 'en' && (
              <span className="material-icons text-blue-600 text-sm ml-auto">check</span>
            )}
          </button>

          {/* Arabic Option */}
          <button
            onClick={() => changeLanguage('ar')}
            className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 transition-colors duration-150 flex items-center gap-3 ${
              i18n.language === 'ar' ? 'bg-green-50 text-green-600' : 'text-gray-700'
            }`}
          >
            <span className="text-lg">🇸🇦</span>
            <span>العربية</span>
            {i18n.language === 'ar' && (
              <span className="material-icons text-green-600 text-sm ml-auto">check</span>
            )}
          </button>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
