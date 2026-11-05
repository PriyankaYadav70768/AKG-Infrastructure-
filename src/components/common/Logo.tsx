import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  className?: string;
  variant?: 'header' | 'footer' | 'auth';
}

export const Logo: React.FC<LogoProps> = ({ className = '', variant = 'header' }) => {
  return (
    <Link to="/" className={`inline-flex items-center gap-3 group focus-ring rounded-lg ${className}`}>
      {/* Premium Monogram Icon */}
      <div className="relative flex items-center justify-center w-10 h-10 rounded-md bg-[#234A70] text-white shadow-sm transition-transform duration-200 group-hover:scale-105">
        {/* Subtle geometric lines */}
        <svg viewBox="0 0 32 32" className="w-6 h-6 fill-none stroke-current stroke-2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 26L16 6L26 26" className="text-white" />
          <path d="M10 19H22" stroke="#B58B55" strokeWidth="2.5" />
          <path d="M16 6V26" stroke="rgba(255,255,255,0.4)" strokeDasharray="2 2" strokeWidth="1" />
        </svg>
        {/* Gold accent dot */}
        <div className="absolute top-1 right-1 w-2 h-2 rounded-full bg-[#B58B55] border-2 border-white" />
      </div>

      {/* Brand Wordmark */}
      <div className="flex flex-col text-left">
        <span className="font-display font-extrabold text-[1.125rem] tracking-tight text-[#132338] dark:text-[#FAF9F6] leading-tight flex items-center gap-1.5">
          AKG
          <span className="text-[0.65rem] font-semibold uppercase tracking-wider px-1.5 py-0.5 rounded bg-[#F3EFEA] dark:bg-[#1E3048] text-[#132338] dark:text-[#D4B07B] border border-[#E8E6E1] dark:border-[#2A374A]">
            Group
          </span>
        </span>
        <span className="text-[0.6875rem] font-semibold tracking-widest uppercase text-[#777C80] dark:text-[#94A3B8]">
          Infrastructure
        </span>
      </div>
    </Link>
  );
};

