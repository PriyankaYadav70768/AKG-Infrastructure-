import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home as HomeIcon } from 'lucide-react';
import { Container } from './Container';

export interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, className = '' }) => {
  return (
    <div className={`py-3 border-b border-[#E8E6E1]/80 dark:border-[#1E293B] bg-[#FAF9F6]/80 dark:bg-[#0A121E]/80 backdrop-blur-xs text-xs ${className}`}>
      <Container size="wide">
        <nav aria-label="Breadcrumb" className="flex items-center flex-wrap gap-2 text-[#777C80] dark:text-[#94A3B8] font-sans">
          <Link
            to="/"
            className="flex items-center gap-1 hover:text-[#132338] dark:hover:text-[#FAF9F6] transition-colors"
          >
            <HomeIcon className="w-3.5 h-3.5 text-[#B18A58]" />
            <span className="sr-only sm:not-sr-only">Home</span>
          </Link>

          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <React.Fragment key={index}>
                <ChevronRight className="w-3 h-3 text-[#B18A58]/60 shrink-0" />
                {item.path && !isLast ? (
                  <Link
                    to={item.path}
                    className="hover:text-[#132338] dark:hover:text-[#FAF9F6] transition-colors"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-[#132338] dark:text-[#FAF9F6] font-semibold truncate max-w-[200px] sm:max-w-none">
                    {item.label}
                  </span>
                )}
              </React.Fragment>
            );
          })}
        </nav>
      </Container>
    </div>
  );
};
