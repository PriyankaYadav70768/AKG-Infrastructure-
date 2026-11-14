import React, { useState } from 'react';
import fallbackConstruction from '../../assets/images/fallback-construction.jpg';

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

  // If className has absolute inset-0 or w-full h-full, ensure the container fills parent properly
  const isAbsolute = className.includes('absolute');
  const isFullHeight = className.includes('h-full') || className.includes('h-[');
  const defaultContainer = `${isAbsolute ? 'absolute inset-0' : ''} ${isFullHeight && !isAbsolute ? 'w-full h-full' : ''} ${containerClassName}`.trim();

  return (
    <div className={`relative overflow-hidden ${defaultContainer}`}>
      {/* Loading Skeleton */}
      {isLoading && (
        <div className="absolute inset-0 bg-[#F6F7F8] dark:bg-[#101E2E] animate-pulse flex items-center justify-center z-0">
          <div className="w-8 h-8 rounded-full border-2 border-[#D4B07B]/30 border-t-[#D4B07B] animate-spin" />
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

