import React from 'react';
import { Container } from '../components/common/Container';
import { Button } from '../components/common/Button';
import { Home, ArrowLeft } from 'lucide-react';

export const NotFound: React.FC = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-20 bg-[#FAF9F6] dark:bg-[#0A121E]">
      <Container size="narrow" className="text-center">
        <span className="font-serif text-6xl sm:text-7xl font-bold text-[#142D45] dark:text-[#D4B07B] tracking-tight block mb-4">
          404
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl font-medium text-[#142D45] dark:text-[#FAF9F6] mb-3">
          Page Not Found
        </h1>
        <p className="text-sm sm:text-base text-[#777C80] dark:text-[#94A3B8] font-light max-w-md mx-auto mb-8 leading-relaxed font-sans">
          The requested infrastructure page or document could not be located. It may have been moved or archived.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button to="/" variant="primary" size="md" leftIcon={<Home className="w-4 h-4" />}>
            Back to Homepage
          </Button>
          <Button to="/login" variant="secondary" size="md">
            Go to Login / Join
          </Button>
        </div>
      </Container>
    </div>
  );
};

