import React from 'react';

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  subtitle,
  align = 'center',
  className = '',
}) => {
  const alignClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center mx-auto',
    right: 'text-right items-end ml-auto',
  }[align];

  return (
    <div className={`flex flex-col max-w-3xl ${alignClasses} ${className}`}>
      {badge && (
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase text-[#142D45] dark:text-[#D4B07B] bg-[#142D45]/10 dark:bg-white/10 border border-[#142D45]/15 dark:border-white/15 mb-3 font-sans">
          <span className="w-1.5 h-1.5 rounded-full bg-[#B18A58]" />
          {badge}
        </span>
      )}
      <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.65rem] font-medium text-[#142D45] dark:text-[#FAF9F6] tracking-tight leading-[1.2] mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-base sm:text-lg text-[#777C80] dark:text-[#A0A6AC] leading-relaxed font-light font-sans">
          {subtitle}
        </p>
      )}
    </div>
  );
};

