import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export interface AccordionItem {
  id: string;
  title: string;
  content: React.ReactNode;
  badge?: string;
}

interface AccordionProps {
  items: AccordionItem[];
  defaultOpenId?: string;
  className?: string;
}

export const Accordion: React.FC<AccordionProps> = ({
  items,
  defaultOpenId,
  className = '',
}) => {
  const [openId, setOpenId] = useState<string | null>(defaultOpenId || null);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className={`space-y-3 ${className}`}>
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div
            key={item.id}
            className="rounded-2xl border border-[#E8E6E1] dark:border-[#1E293B] bg-white dark:bg-[#0F172A] overflow-hidden transition-all duration-200 shadow-xs"
          >
            <button
              type="button"
              onClick={() => toggle(item.id)}
              className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 hover:bg-black/[0.015] dark:hover:bg-white/[0.02] transition-colors focus:outline-hidden"
              aria-expanded={isOpen}
            >
              <div className="flex items-center gap-3">
                <span className="font-serif text-lg sm:text-xl font-medium text-[#132338] dark:text-[#FAF9F6]">
                  {item.title}
                </span>
                {item.badge && (
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-[#142D45]/10 dark:bg-white/10 text-[#9E7844] dark:text-[#D4B07B]">
                    {item.badge}
                  </span>
                )}
              </div>
              <ChevronDown
                className={`w-5 h-5 text-[#9E7844] shrink-0 transition-transform duration-300 ${
                  isOpen ? 'rotate-180 text-[#132338] dark:text-[#FAF9F6]' : ''
                }`}
              />
            </button>
            {isOpen && (
              <div className="px-6 pb-6 pt-1 text-sm text-[#667080] dark:text-[#94A3B8] font-light leading-relaxed font-sans border-t border-[#E8E6E1]/50 dark:border-[#1E293B]/50 animate-fadeIn">
                {item.content}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
