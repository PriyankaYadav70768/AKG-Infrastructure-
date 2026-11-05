import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'gold' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  to?: string;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  to,
  isLoading = false,
  leftIcon,
  rightIcon,
  className = '',
  disabled,
  ...props
}) => {
  const baseClasses =
    'inline-flex items-center justify-center font-medium transition-all duration-200 focus-ring select-none rounded-lg disabled:opacity-50 disabled:cursor-not-allowed';

  const sizeClasses = {
    sm: 'text-xs px-3.5 py-1.5 gap-1.5 font-semibold',
    md: 'text-sm px-5 py-2.5 gap-2 font-semibold',
    lg: 'text-base px-6 py-3.5 gap-2.5 font-semibold',
  }[size];

  const variantClasses = {
    primary:
      'bg-[#142D45] hover:bg-[#070E18] dark:bg-[#1E3A5F] dark:hover:bg-[#132338] text-white shadow-sm hover:shadow active:scale-[0.99] border border-transparent',
    secondary:
      'bg-[#F3EFEA] hover:bg-[#EAE6DF] dark:bg-[#142338] dark:hover:bg-[#1E334D] text-[#132338] dark:text-[#FAF9F6] border border-[#E8E6E1] dark:border-[#2A374A] active:scale-[0.99]',
    outline:
      'bg-transparent hover:bg-[#FAF9F6] dark:hover:bg-[#142338] text-[#142D45] dark:text-[#D4B07B] border border-[#142D45]/30 dark:border-[#D4B07B]/40 hover:border-[#142D45] dark:hover:border-[#D4B07B] active:scale-[0.99]',
    gold:
      'bg-[#B18A58] hover:bg-[#9E7844] text-white shadow-sm hover:shadow active:scale-[0.99] border border-transparent',
    ghost:
      'bg-transparent hover:bg-black/5 dark:hover:bg-white/5 text-[#132338] dark:text-[#FAF9F6] hover:text-[#B18A58] dark:hover:text-[#D4B07B]',
  }[variant];

  const combinedClasses = `${baseClasses} ${sizeClasses} ${variantClasses} ${className}`;

  if (to) {
    return (
      <Link to={to} className={combinedClasses}>
        {leftIcon && <span className="shrink-0">{leftIcon}</span>}
        <span>{children}</span>
        {rightIcon && <span className="shrink-0">{rightIcon}</span>}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} disabled={disabled || isLoading} {...props}>
      {isLoading ? (
        <span className="inline-flex items-center gap-2">
          <svg
            className="animate-spin h-4 w-4 text-current"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          <span>Processing...</span>
        </span>
      ) : (
        <>
          {leftIcon && <span className="shrink-0">{leftIcon}</span>}
          <span>{children}</span>
          {rightIcon && <span className="shrink-0">{rightIcon}</span>}
        </>
      )}
    </button>
  );
};

