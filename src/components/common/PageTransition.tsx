import React from 'react';
import { useLocation } from 'react-router-dom';

interface PageTransitionProps {
  children: React.ReactNode;
  className?: string;
}

export const PageTransition: React.FC<PageTransitionProps> = ({
  children,
  className = '',
}) => {
  const location = useLocation();

  return (
    <div
      key={location.pathname}
      className={`animate-page-enter w-full flex-grow flex flex-col ${className}`}
    >
      {children}
    </div>
  );
};
