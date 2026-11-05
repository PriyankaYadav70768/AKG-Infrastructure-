import React, { useState } from 'react';
import fallbackConstruction from '../../assets/hero-construction.svg';

interface SafeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackSrc?: string;
  containerClassName?: string;
}

export const SafeImage: React.FC<SafeImageProps> = ({
  src,
  fallbackSrc = fallbackConstruction,
  alt = 'AKG Infrastructure',
  className = '',
  containerClassName = '',
  ...props
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const activeSrc = hasError || !src ? fallbackSrc : src;

  return (
    <div className={`relative overflow-hidden ${containerClassName}`}>
      {/* Loading Skeleton */}
      {isLoading && (
        <div className="absolute inset-0 bg-[#F6F7F8] animate-pulse flex items-center justify-center z-0">
          <div className="w-8 h-8 rounded-full border-2 border-[#234A70]/20 border-t-[#234A70] animate-spin" />
        </div>
      )}

      {/* Main image with fallback guarantee */}
      <img
        src={activeSrc}
        alt={alt}
        className={`transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'} ${className}`}
        onLoad={() => setIsLoading(false)}
        onError={() => {
          if (!hasError) {
            setHasError(true);
            setIsLoading(false);
          }
        }}
        {...props}
      />
    </div>
  );
};

