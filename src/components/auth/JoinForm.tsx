import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Mail, User, Phone, MapPin, Tag, CheckCircle, ShieldCheck, ArrowRight } from 'lucide-react';
import { joinSchema, JoinFormData } from '../../schemas/authSchemas';
import { FormInput } from '../common/FormInput';
import { RoleSelect } from '../common/RoleSelect';
import { Button } from '../common/Button';

export const JoinForm: React.FC = () => {
  const [demoSuccessMessage, setDemoSuccessMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<JoinFormData>({
    resolver: zodResolver(joinSchema),
    defaultValues: {
      fullName: '',
      phone: '',
      email: '',
      city: '',
      role: '',
      teamLeaderCode: '',
      message: '',
    },
  });

  const onSubmit = async (_data: JoinFormData) => {
    setDemoSuccessMessage(null);
    // Simulate frontend registration latency
    await new Promise((resolve) => setTimeout(resolve, 800));

    // Mandatory wording requirement from prompt:
    setDemoSuccessMessage(
      'Thank you for your interest in AKG Infrastructure. Your application has been submitted successfully. Our team will get in touch with you.'
    );
    reset();
  };

  return (
    <div className="w-full text-left">
      {/* Header section as requested */}
      <div className="mb-6">
        <h3 className="font-serif text-2xl font-medium text-[#142D45] dark:text-[#FAF9F6] tracking-tight">
          Join Our Team
        </h3>
        <p className="text-sm text-[#777C80] dark:text-[#94A3B8] mt-1 font-light">
          Submit your details and our team will get in touch.
        </p>
      </div>

      {demoSuccessMessage && (
        <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-sm flex items-start gap-3">
          <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <p className="font-semibold text-emerald-950">Application Received</p>
            <p className="text-xs leading-relaxed text-emerald-800">{demoSuccessMessage}</p>
            <button
              type="button"
              onClick={() => setDemoSuccessMessage(null)}
              className="text-xs font-semibold text-emerald-900 underline hover:no-underline pt-1 inline-block"
            >
              Submit another application
            </button>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* 1. Full Name (Full width) */}
        <FormInput
          label="Full Name"
          type="text"
          placeholder="John Doe"
          leftIcon={<User className="w-4 h-4" />}
          error={errors.fullName?.message}
          {...register('fullName')}
        />

        {/* 2. Phone & 3. Email (Side-by-side on desktop, stacked on mobile) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <FormInput
            label="Phone"
            type="tel"
            placeholder="+91 98765 43210"
            leftIcon={<Phone className="w-4 h-4" />}
            error={errors.phone?.message}
            {...register('phone')}
          />

          <FormInput
            label="Email"
            type="email"
            placeholder="john@example.com"
            leftIcon={<Mail className="w-4 h-4" />}
            error={errors.email?.message}
            {...register('email')}
          />
        </div>

        {/* 4. City (Full width) */}
        <FormInput
          label="City"
          type="text"
          placeholder="e.g. Varanasi"
          leftIcon={<MapPin className="w-4 h-4" />}
          error={errors.city?.message}
          {...register('city')}
        />

        {/* 5. Role / Designation dropdown (Exactly 10 options, required) */}
        <RoleSelect
          label="Role / Designation"
          error={errors.role?.message}
          helperText="Select the engineering / administrative role you are applying for"
          {...register('role')}
        />

        {/* 6. Team Leader Code (Optional) */}
        <FormInput
          label="Team Leader Code (Optional)"
          type="text"
          placeholder="Enter or select Team Leader Code"
          leftIcon={<Tag className="w-4 h-4" />}
          helperText="Have a Team Leader Code? Enter it to join directly under that Team Leader. Leave it blank if you don't have one."
          error={errors.teamLeaderCode?.message}
          {...register('teamLeaderCode')}
        />

        {/* 7. Message (Optional multiline textarea) */}
        <div>
          <label
            htmlFor="join-message"
            className="block text-xs font-semibold uppercase tracking-wider text-[#132338] dark:text-[#E2E8F0] mb-1.5 font-sans"
          >
            Message (Optional)
          </label>
          <textarea
            id="join-message"
            rows={3}
            placeholder="Tell us about your background, experience, or why you'd like to join AKG Infrastructure..."
            className="w-full bg-[#FFFFFF] dark:bg-[#0D1826] text-[#132338] dark:text-[#FAF9F6] text-sm rounded-lg border border-[#E8E6E1] dark:border-[#1E293B] hover:border-[#CCD2D8] dark:hover:border-[#334155] focus:border-[#142D45] dark:focus:border-[#D4B07B] focus:ring-2 focus:ring-[#142D45]/15 dark:focus:ring-[#D4B07B]/20 outline-none p-3 placeholder-[#777C80]/60 dark:placeholder-[#94A3B8]/60 transition-all"
            {...register('message')}
          />
          {errors.message && (
            <p className="mt-1 text-xs text-red-600 dark:text-red-400 font-medium">{errors.message.message}</p>
          )}
        </div>

        {/* 8. Submit Application Button (Full width navy-blue) */}
        <div className="pt-2">
          <Button
            type="submit"
            variant="primary"
            size="lg"
            className="w-full justify-center"
            isLoading={isSubmitting}
            rightIcon={<ArrowRight className="w-4 h-4" />}
          >
            SUBMIT APPLICATION
          </Button>
        </div>

        <div className="pt-1 text-center">
          <p className="text-xs text-[#777C80] dark:text-[#94A3B8] flex items-center justify-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-[#B18A58]" />
            <span>Simulated demonstration. No sensitive personal data is stored or logged.</span>
          </p>
        </div>
      </form>
    </div>
  );
};
