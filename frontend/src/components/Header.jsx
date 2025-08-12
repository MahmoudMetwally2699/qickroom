import React from 'react';
// ...existing code...
import LanguageSwitcher from './LanguageSwitcher';

const Header = () => {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-lg border-b border-white/40 shadow flex items-center justify-between px-6 py-3">
      <div className="flex items-center gap-2">
        <img src="/qickroom.svg" alt="QickRoom Logo" className="h-16 w-auto drop-shadow-lg" />
      </div>
      <LanguageSwitcher />
    </nav>
  );
};

export default Header;
