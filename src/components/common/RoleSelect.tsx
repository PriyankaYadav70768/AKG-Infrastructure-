import React, { forwardRef } from 'react';
import { Briefcase, ChevronDown } from 'lucide-react';
import { roles } from '../../data/roles';

interface RoleSelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

export const RoleSelect = forwardRef<HTMLSelectElement, RoleSelectProps>(
  ({ label = 'Role / Designation', error, helperText, id, className = '', ...props }, ref) => {
    const selectId = id || props.name || 'role-select';

    return (
      <div className="w-full text-left">
        {label && (
          <label
            htmlFor={selectId}
            className="block text-xs font-semibold uppercase tracking-wider text-[#132338] dark:text-[#E2E8F0] mb-1.5 font-sans"
          >
            {label} {props.required && <span className="text-red-500">*</span>}
          </label>
        )}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#777C80] dark:text-[#94A3B8]">
            <Briefcase className="w-4 h-4" />
          </div>
          <select
            id={selectId}
            ref={ref}
            className={`w-full appearance-none bg-[#FFFFFF] dark:bg-[#0D1826] text-[#132338] dark:text-[#FAF9F6] text-sm rounded-lg border transition-all duration-150 py-2.5 pl-10 pr-10 cursor-pointer ${
              error
                ? 'border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500'
                : 'border-[#E8E6E1] dark:border-[#1E293B] hover:border-[#CCD2D8] dark:hover:border-[#334155] focus:border-[#142D45] dark:focus:border-[#D4B07B] focus:ring-2 focus:ring-[#142D45]/15 dark:focus:ring-[#D4B07B]/20'
            } outline-none ${className}`}
            defaultValue=""
            {...props}
          >
            <option value="" disabled className="text-gray-400 dark:text-gray-500 dark:bg-[#0D1826]">
              Select Your Role
            </option>
            {roles.map((roleName) => (
              <option key={roleName} value={roleName} className="text-[#132338] dark:text-[#FAF9F6] dark:bg-[#0D1826] py-1">
                {roleName}
              </option>
            ))}
          </select>
          <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-[#777C80] dark:text-[#94A3B8]">
            <ChevronDown className="w-4 h-4" />
          </div>
        </div>
        {error && <p className="mt-1.5 text-xs text-red-600 font-medium">{error}</p>}
        {!error && helperText && (
          <p className="mt-1 text-xs text-[#626B75]">{helperText}</p>
        )}
      </div>
    );
  }
);

RoleSelect.displayName = 'RoleSelect';
