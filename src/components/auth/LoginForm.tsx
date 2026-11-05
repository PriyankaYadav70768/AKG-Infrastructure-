import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Mail, CheckCircle, AlertCircle, ArrowRight } from 'lucide-react';
import { loginSchema, LoginFormData } from '../../schemas/authSchemas';
import { FormInput } from '../common/FormInput';
import { PasswordInput } from '../common/PasswordInput';
import { Button } from '../common/Button';

interface LoginFormProps {
  onForgotPassword: () => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({ onForgotPassword }) => {
  const [demoMessage, setDemoMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
  });

  const onSubmit = async (_data: LoginFormData) => {
    setDemoMessage(null);
    // Simulate brief frontend loading
    await new Promise((resolve) => setTimeout(resolve, 800));

    // Mandatory wording requirement from prompt
    setDemoMessage(
      'Demo login successful. Real authentication will be enabled after backend integration.'
    );
  };

  return (
    <div className="w-full">
      {demoMessage && (
        <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-sm flex items-start gap-3">
          <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <p className="font-semibold text-emerald-950">Verification Complete</p>
            <p className="text-xs leading-relaxed text-emerald-800">{demoMessage}</p>
            <button
              type="button"
              onClick={() => {
                setDemoMessage(null);
                reset();
              }}
              className="text-xs font-semibold text-emerald-900 underline hover:no-underline pt-1 inline-block"
            >
              Clear demo state
            </button>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* 1. Email Address */}
        <FormInput
          label="Email Address"
          type="email"
          placeholder="you@example.com"
          leftIcon={<Mail className="w-4 h-4" />}
          error={errors.email?.message}
          {...register('email')}
        />

        {/* 2. Password */}
        <PasswordInput
          label="Password"
          placeholder="Enter your password"
          error={errors.password?.message}
          {...register('password')}
        />

        {/* 3. Remember Me & Forgot Password */}
        <div className="flex items-center justify-between pt-1">
          <label className="flex items-center gap-2 text-xs text-[#132338] dark:text-[#E2E8F0] cursor-pointer select-none">
            <input
              type="checkbox"
              className="w-4 h-4 rounded border-[#E8E6E1] dark:border-[#2A374A] bg-white dark:bg-[#0D1826] text-[#142D45] dark:text-[#D4B07B] focus:ring-[#142D45] dark:focus:ring-[#D4B07B] focus:ring-offset-0 cursor-pointer"
              {...register('rememberMe')}
            />
            <span className="font-medium text-[#777C80] dark:text-[#94A3B8]">Remember Me</span>
          </label>

          <button
            type="button"
            onClick={onForgotPassword}
            className="text-xs font-semibold text-[#142D45] dark:text-[#D4B07B] hover:text-[#070E18] dark:hover:text-white hover:underline focus:outline-none cursor-pointer"
          >
            Forgot Password?
          </button>
        </div>

        {/* 4. Login Button: Mandatory Label "LOGIN →" */}
        <div className="pt-2">
          <Button
            type="submit"
            variant="primary"
            size="lg"
            className="w-full justify-center"
            isLoading={isSubmitting}
            rightIcon={<ArrowRight className="w-4 h-4" />}
          >
            LOGIN →
          </Button>
        </div>

        <div className="pt-2 text-center">
          <p className="text-xs text-[#777C80] dark:text-[#94A3B8] flex items-center justify-center gap-1.5">
            <AlertCircle className="w-3.5 h-3.5 text-[#B18A58]" />
            <span>Frontend demo environment. No production records are stored.</span>
          </p>
        </div>
      </form>
    </div>
  );
};
