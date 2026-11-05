import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield, CheckCircle2, Building2, HardHat, Compass } from 'lucide-react';
import { Logo } from '../common/Logo';
import { ThemeToggle } from '../common/ThemeToggle';
import { LoginForm } from './LoginForm';
import { JoinForm } from './JoinForm';
import { ForgotPasswordModal } from './ForgotPasswordModal';
import { SafeImage } from '../common/SafeImage';
import authPreviewAsset from '../../assets/about-operations.svg';

export const AuthLayout: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'login' | 'join'>('login');
  const [isForgotModalOpen, setIsForgotModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FAF9F6] dark:bg-[#0A121E] text-[#1F242A] dark:text-[#E6EAF0] flex flex-col transition-colors duration-200">
      {/* Top subtle navigation bar */}
      <div className="border-b border-[#E8E6E1] dark:border-[#1E293B] bg-[#FFFFFF] dark:bg-[#0D1826] py-3.5 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Logo />
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#777C80] dark:text-[#94A3B8] hover:text-[#142D45] dark:hover:text-[#FAF9F6] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Return to Website</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Two-Column Auth Container */}
      <div className="flex-1 flex items-stretch">
        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 min-h-full">
          {/* LEFT SECTION (45% on desktop): Brand visual composition */}
          <div className="lg:col-span-5 bg-[#F3EFEA] dark:bg-[#0F1C2E] border-r border-[#E8E6E1] dark:border-[#1E293B] p-8 sm:p-12 lg:p-14 flex flex-col justify-between relative overflow-hidden">
            {/* Top branding text */}
            <div className="relative z-10 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFFFFF] dark:bg-[#142D45] border border-[#E8E6E1] dark:border-white/10 text-xs font-semibold text-[#142D45] dark:text-[#D4B07B]">
                <Shield className="w-3.5 h-3.5 text-[#B18A58]" />
                <span>Authorized Field & Engineering Portal</span>
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl font-medium tracking-tight text-[#142D45] dark:text-[#FAF9F6] leading-tight">
                Welcome to AKG Infrastructure
              </h1>

              <p className="text-sm sm:text-base text-[#777C80] dark:text-[#A0A6AC] font-light leading-relaxed max-w-md font-sans">
                Access your account and connect with the AKG Infrastructure platform.
              </p>
            </div>

            {/* Middle Feature Highlights */}
            <div className="relative z-10 my-8 sm:my-10 space-y-4">
              <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#FFFFFF] dark:bg-[#142338] border border-[#E8E6E1] dark:border-[#20272D] shadow-xs">
                <div className="w-9 h-9 rounded-lg bg-[#142D45]/10 dark:bg-white/10 text-[#142D45] dark:text-[#D4B07B] flex items-center justify-center shrink-0 mt-0.5">
                  <HardHat className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#142D45] dark:text-[#FAF9F6]">
                    10 Engineering Designations
                  </h4>
                  <p className="text-xs text-[#777C80] dark:text-[#A0A6AC] mt-0.5 font-light">
                    Tailored recruitment and project assignments for Project Managers, Civil Engineers, Surveyors, and Safety Officers.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#FFFFFF] dark:bg-[#142338] border border-[#E8E6E1] dark:border-[#20272D] shadow-xs">
                <div className="w-9 h-9 rounded-lg bg-[#B18A58]/10 text-[#B18A58] flex items-center justify-center shrink-0 mt-0.5">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#142D45] dark:text-[#FAF9F6]">
                    Coordinated Site Execution
                  </h4>
                  <p className="text-xs text-[#777C80] dark:text-[#A0A6AC] mt-0.5 font-light">
                    Unified reporting from foundation grading to structural handover.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#FFFFFF] dark:bg-[#142338] border border-[#E8E6E1] dark:border-[#20272D] shadow-xs">
                <div className="w-9 h-9 rounded-lg bg-[#142D45]/10 dark:bg-white/10 text-[#142D45] dark:text-[#D4B07B] flex items-center justify-center shrink-0 mt-0.5">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#142D45] dark:text-[#FAF9F6]">
                    Quality & Safety Governance
                  </h4>
                  <p className="text-xs text-[#777C80] dark:text-[#A0A6AC] mt-0.5 font-light">
                    Structured HSE protocols and multi-stage compliance auditing.
                  </p>
                </div>
              </div>
            </div>

            {/* High quality infrastructure visual in subtle rounded card */}
            <div className="relative z-10 rounded-xl overflow-hidden border border-[#E8E6E1] dark:border-[#20272D] bg-[#FFFFFF] dark:bg-[#142338] shadow-sm">
              <SafeImage
                src={authPreviewAsset}
                fallbackSrc="/about-operations.svg"
                alt="Engineering infrastructure site construction"
                className="w-full h-44 object-cover"
              />
              <div className="p-3 bg-white dark:bg-[#142338] flex items-center justify-between text-xs text-[#777C80] dark:text-[#A0A6AC]">
                <span className="flex items-center gap-1.5 font-medium text-[#142D45] dark:text-[#FAF9F6]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#B18A58]" />
                  Active Construction Management
                </span>
                <span className="text-[11px] uppercase tracking-wider text-[#B18A58] font-semibold">
                  Field Operations
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT SECTION (55% on desktop): Clean Authentication Panel */}
          <div className="lg:col-span-7 bg-[#FFFFFF] dark:bg-[#0A121E] p-6 sm:p-10 lg:p-14 flex flex-col justify-center max-w-xl mx-auto w-full">
            {/* Top Segmented Tab Controls: Login / Join */}
            <div className="bg-[#F3EFEA] dark:bg-[#142338] p-1 rounded-xl border border-[#E8E6E1] dark:border-[#1E293B] grid grid-cols-2 gap-1 mb-6">
              <button
                type="button"
                onClick={() => setActiveTab('login')}
                className={`py-2.5 text-sm font-semibold rounded-lg transition-all duration-150 text-center cursor-pointer ${
                  activeTab === 'login'
                    ? 'bg-[#FFFFFF] dark:bg-[#1E3A5F] text-[#142D45] dark:text-white shadow-sm font-bold border border-[#E8E6E1] dark:border-transparent'
                    : 'text-[#777C80] dark:text-[#94A3B8] hover:text-[#142D45] dark:hover:text-white'
                }`}
                aria-selected={activeTab === 'login'}
                role="tab"
              >
                Login
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('join')}
                className={`py-2.5 text-sm font-semibold rounded-lg transition-all duration-150 text-center cursor-pointer ${
                  activeTab === 'join'
                    ? 'bg-[#FFFFFF] dark:bg-[#1E3A5F] text-[#142D45] dark:text-white shadow-sm font-bold border border-[#E8E6E1] dark:border-transparent'
                    : 'text-[#777C80] dark:text-[#94A3B8] hover:text-[#142D45] dark:hover:text-white'
                }`}
                aria-selected={activeTab === 'join'}
                role="tab"
              >
                Join
              </button>
            </div>

            {/* Active Form Header (for Login tab) */}
            {activeTab === 'login' && (
              <div className="mb-6">
                <h2 className="font-serif text-2xl sm:text-3xl font-medium tracking-tight text-[#142D45] dark:text-[#FAF9F6]">
                  Welcome Back
                </h2>
                <p className="text-sm text-[#777C80] dark:text-[#A0A6AC] mt-1.5 font-light">
                  Sign in to continue to the infrastructure management dashboard.
                </p>
              </div>
            )}

            {/* Active Form */}
            {activeTab === 'login' ? (
              <LoginForm onForgotPassword={() => setIsForgotModalOpen(true)} />
            ) : (
              <JoinForm />
            )}

            {/* Bottom help contact */}
            <div className="mt-8 pt-6 border-t border-[#E8E6E1] dark:border-[#1E293B] text-center">
              <p className="text-xs text-[#777C80] dark:text-[#94A3B8]">
                Need project onboarding support or credential verification?{' '}
                <Link to="/contact" className="text-[#142D45] dark:text-[#D4B07B] font-semibold hover:underline">
                  Contact Technical Operations
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Forgot Password Modal */}
      <ForgotPasswordModal
        isOpen={isForgotModalOpen}
        onClose={() => setIsForgotModalOpen(false)}
      />
    </div>
  );
};
