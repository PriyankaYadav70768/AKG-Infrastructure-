import React, { forwardRef } from 'react';

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  helperText?: string;
  leftIcon?: React.ReactNode;
  rightElement?: React.ReactNode;
}

export const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
  ({ label, error, helperText, leftIcon, rightElement, id, className = '', ...props }, ref) => {
    const inputId = id || props.name || Math.random().toString(36).substring(7);

    return (
      <div className="w-full text-left">
        <label
          htmlFor={inputId}
          className="block text-xs font-semibold uppercase tracking-wider text-[#132338] dark:text-[#E2E8F0] mb-1.5 font-sans"
        >
          {label} {props.required && <span className="text-red-500">*</span>}
        </label>
        <div className="relative">
          {leftIcon && (
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#777C80] dark:text-[#94A3B8]">
              {leftIcon}
            </div>
          )}
          <input
            id={inputId}
            ref={ref}
            className={`w-full bg-[#FFFFFF] dark:bg-[#0D1826] text-[#132338] dark:text-[#FAF9F6] text-sm rounded-lg border transition-all duration-150 py-2.5 ${
              leftIcon ? 'pl-10' : 'pl-3.5'
            } ${rightElement ? 'pr-11' : 'pr-3.5'} ${
              error
                ? 'border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500'
                : 'border-[#E8E6E1] dark:border-[#1E293B] hover:border-[#CCD2D8] dark:hover:border-[#334155] focus:border-[#142D45] dark:focus:border-[#D4B07B] focus:ring-2 focus:ring-[#142D45]/15 dark:focus:ring-[#D4B07B]/20'
            } placeholder-[#777C80]/60 dark:placeholder-[#94A3B8]/60 outline-none ${className}`}
            {...props}
          />
          {rightElement && (
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
              {rightElement}
            </div>
          )}
        </div>
        {error && <p className="mt-1.5 text-xs text-red-600 dark:text-red-400 font-medium">{error}</p>}
        {!error && helperText && (
          <p className="mt-1 text-xs text-[#777C80] dark:text-[#94A3B8]">{helperText}</p>
        )}
      </div>
    );
  }
);

FormInput.displayName = 'FormInput';

