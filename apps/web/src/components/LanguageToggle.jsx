import React from 'react';
import { Languages } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const LanguageToggle = ({ className = '' }) => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      aria-label="Toggle site language between English and Spanish"
      className={`inline-flex items-center gap-1.5 rounded-full border border-[#c9d6cf] bg-white px-3 py-1.5 text-xs font-semibold text-[#4a6273] transition-colors hover:border-[#7bb06e] hover:text-[#6ba368] ${className}`}
    >
      <Languages className="h-3.5 w-3.5" strokeWidth={2} />
      <span className={language === 'en' ? 'text-[#6ba368]' : ''}>EN</span>
      <span className="text-[#c9d6cf]">/</span>
      <span className={language === 'es' ? 'text-[#6ba368]' : ''}>ES</span>
    </button>
  );
};

export default LanguageToggle;
