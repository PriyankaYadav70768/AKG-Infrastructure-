import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

export const ThemeToggle: React.FC<{ className?: string }> = ({ className = '' }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`relative inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-full transition-all duration-200 border border-[#E8E6E1] dark:border-[#2A374A] bg-white dark:bg-[#142338] text-[#132338] dark:text-[#FAF9F6] hover:bg-[#F3EFEA] dark:hover:bg-[#1E334D] focus:outline-none focus:ring-2 focus:ring-[#9E7844] shadow-xs cursor-pointer ${className}`}
      aria-label={`Switch to ${theme === 'light' ? 'Dark' : 'Light'} Mode`}
      title={`Current: ${theme === 'light' ? 'Light Mode' : 'Dark Mode'}. Click to switch to ${theme === 'light' ? 'Dark Mode' : 'Light Mode'}`}
    >
      {theme === 'light' ? (
        <>
          <Moon className="w-3.5 h-3.5 text-[#132338]" />
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#132338] hidden sm:inline">
            Dark
          </span>
        </>
      ) : (
        <>
          <Sun className="w-3.5 h-3.5 text-[#D4B07B]" />
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#FAF9F6] hidden sm:inline">
            Light
          </span>
        </>
      )}
    </button>
  );
};


