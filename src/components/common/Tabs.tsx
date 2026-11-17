import React, { useState } from 'react';

export interface TabItem {
  id: string;
  label: string;
  content: React.ReactNode;
  icon?: React.ReactNode;
}

interface TabsProps {
  tabs: TabItem[];
  defaultTabId?: string;
  className?: string;
}

export const Tabs: React.FC<TabsProps> = ({
  tabs,
  defaultTabId,
  className = '',
}) => {
  const [activeId, setActiveId] = useState<string>(defaultTabId || tabs[0]?.id || '');
  const activeTab = tabs.find((t) => t.id === activeId) || tabs[0];

  return (
    <div className={`space-y-6 ${className}`}>
      {/* Tab controls */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none border-b border-[#E8E6E1] dark:border-[#1E293B]">
        {tabs.map((tab) => {
          const isActive = tab.id === activeId;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveId(tab.id)}
              className={`inline-flex items-center gap-2 px-5 py-3 text-xs font-bold uppercase tracking-wider rounded-t-xl transition-all duration-200 font-sans whitespace-nowrap border-b-2 -mb-px focus:outline-hidden ${
                isActive
                  ? 'border-[#9E7844] text-[#132338] dark:text-[#FAF9F6] bg-white/60 dark:bg-[#1E293B]/40'
                  : 'border-transparent text-[#667080] dark:text-[#94A3B8] hover:text-[#132338] dark:hover:text-[#FAF9F6]'
              }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Tab content panel */}
      <div className="animate-fadeIn">
        {activeTab?.content}
      </div>
    </div>
  );
};
