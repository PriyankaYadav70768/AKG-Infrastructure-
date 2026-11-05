import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Mail, CheckCircle2 } from 'lucide-react';
import { forgotPasswordSchema, ForgotPasswordFormData } from '../../schemas/authSchemas';
import { FormInput } from '../common/FormInput';
import { Button } from '../common/Button';

interface ForgotPasswordModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ForgotPasswordModal: React.FC<ForgotPasswordModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [isSuccess, setIsSuccess] = React.useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ForgotPasswordFormData>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: { email: '' },
  });

  if (!isOpen) return null;

  const onSubmit = async (_data: ForgotPasswordFormData) => {
    // Frontend demo simulated network latency
    await new Promise((resolve) => setTimeout(resolve, 800));
    setIsSuccess(true);
  };

  const handleModalClose = () => {
    setIsSuccess(false);
    reset();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-xs transition-opacity"
        onClick={handleModalClose}
      />

      {/* Modal Dialog */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="forgot-password-title"
        className="relative bg-[#FFFFFF] dark:bg-[#0D1826] rounded-xl shadow-2xl max-w-md w-full p-6 sm:p-8 border border-[#E8E6E1] dark:border-[#1E293B] z-10"
      >
        {!isSuccess ? (
          <div>
            <h3
              id="forgot-password-title"
              className="font-serif text-2xl font-medium text-[#142D45] dark:text-[#FAF9F6] tracking-tight mb-2"
            >
              Reset Portal Password
            </h3>
            <p className="text-sm text-[#777C80] dark:text-[#94A3B8] mb-6 leading-relaxed font-light">
              Enter your registered email address to receive password reset instructions.
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <FormInput
                label="Registered Email"
                type="email"
                placeholder="you@example.com"
                leftIcon={<Mail className="w-4 h-4" />}
                error={errors.email?.message}
                {...register('email')}
              />

              <div className="p-3 rounded-lg bg-[#F3EFEA] dark:bg-[#142338] border border-[#E8E6E1] dark:border-[#20272D] text-xs text-[#777C80] dark:text-[#94A3B8]">
                <strong>Notice:</strong> This is an interactive frontend demonstration. No external email dispatch service is triggered.
              </div>

              <div className="flex items-center justify-end gap-3 pt-2">
                <Button type="button" variant="secondary" size="md" onClick={handleModalClose}>
                  Cancel
                </Button>
                <Button type="submit" variant="primary" size="md" isLoading={isSubmitting}>
                  Send Reset Link
                </Button>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-2">
            <div className="w-12 h-12 rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto mb-4 border border-emerald-200 dark:border-emerald-800">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-2xl font-medium text-[#142D45] dark:text-[#FAF9F6] mb-2">
              Instructions Dispatched
            </h3>
            <p className="text-sm text-[#777C80] dark:text-[#94A3B8] mb-6 leading-relaxed font-light">
              We have dispatched password recovery instructions to your registered email address if it exists in the system.
            </p>
            <Button type="button" variant="primary" size="md" onClick={handleModalClose}>
              Back to Sign In
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};
