import React, { useState } from 'react';
import { Container } from '../components/common/Container';
import { FormInput } from '../components/common/FormInput';
import { Button } from '../components/common/Button';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';

export const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="py-20 lg:py-28 bg-[#FAF9F6] dark:bg-[#0A121E]">
      <Container size="wide">
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#9E7844] block mb-3">
            Inquiries &amp; Coordination
          </span>
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-medium text-[#132338] dark:text-[#F8FAFC] leading-[1.08] mb-6">
            Contact AKG Infrastructure
          </h1>
          <p className="text-lg sm:text-xl text-[#667080] dark:text-[#94A3B8] font-light leading-relaxed">
            Reach out to our engineering, procurement, or administrative desks regarding project inquiries or technical coordination.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left: Contact Info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-[#0F172A] border border-[#E8E6E1] dark:border-[#1E293B] shadow-xs space-y-6">
              <h2 className="font-serif text-2xl font-medium text-[#132338] dark:text-[#F8FAFC]">
                Corporate Desk &amp; Technical Operations
              </h2>
              <p className="text-sm text-[#667080] dark:text-[#94A3B8] leading-relaxed font-light">
                We handle inquiries for civil infrastructure tenders, joint ventures, and technical feasibility studies.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3.5 text-sm text-[#1F242A] dark:text-[#E2E8F0]">
                  <MapPin className="w-5 h-5 text-[#9E7844] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block font-semibold">Corporate Enclave</strong>
                    <span className="text-[#667080] dark:text-[#94A3B8] text-xs">Official corporate address available upon verification</span>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 text-sm text-[#1F242A] dark:text-[#E2E8F0]">
                  <Mail className="w-5 h-5 text-[#9E7844] shrink-0" />
                  <div>
                    <strong className="block font-semibold">General Inquiries</strong>
                    <span className="text-[#667080] dark:text-[#94A3B8] text-xs">inquiry@akginfrastructure.com</span>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 text-sm text-[#1F242A] dark:text-[#E2E8F0]">
                  <Phone className="w-5 h-5 text-[#9E7844] shrink-0" />
                  <div>
                    <strong className="block font-semibold">Telephone Exchange</strong>
                    <span className="text-[#667080] dark:text-[#94A3B8] text-xs">+91 (0) 11 4982 0000</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#E8E6E1] dark:border-[#1E293B]">
                <p className="text-xs text-[#667080] dark:text-[#94A3B8]">
                  Already an appointed Project Manager or Site Engineer? Use the{' '}
                  <a href="/login" className="text-[#9E7844] font-bold hover:underline">
                    Staff Portal
                  </a>{' '}
                  to access field protocols.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-7 bg-white dark:bg-[#0F172A] p-8 sm:p-12 rounded-3xl border border-[#E8E6E1] dark:border-[#1E293B] shadow-xs">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-14 h-14 rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200 dark:border-emerald-800">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-3xl font-medium text-[#132338] dark:text-[#F8FAFC]">Message Received</h3>
                <p className="text-sm text-[#667080] dark:text-[#94A3B8] max-w-md mx-auto leading-relaxed font-light">
                  Thank you for reaching out to AKG Infrastructure. This is a demonstration submission; our technical desk will address corporate inquiries during live deployment.
                </p>
                <Button
                  variant="secondary"
                  size="md"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
                  }}
                >
                  Send Another Inquiry
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h2 className="font-serif text-3xl font-medium text-[#132338] dark:text-[#F8FAFC] mb-2">Send an Inquiry</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FormInput
                    label="Full Name"
                    required
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                  <FormInput
                    label="Email Address"
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FormInput
                    label="Contact Number"
                    type="tel"
                    placeholder="+91..."
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                  <FormInput
                    label="Project Domain"
                    placeholder="e.g. Civil Construction, Roads"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#1F242A] dark:text-[#E2E8F0] mb-1.5">
                    Project Scope / Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Provide details on project specifications, site location, and anticipated timelines..."
                    className="w-full bg-[#FFFFFF] dark:bg-[#1E293B] text-[#1F242A] dark:text-[#F8FAFC] text-sm rounded-lg border border-[#E8E6E1] dark:border-[#334155] p-3 focus:border-[#1E3A5F] focus:ring-2 focus:ring-[#1E3A5F]/15 outline-none font-sans"
                  />
                </div>

                <div className="pt-2">
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full sm:w-auto"
                    rightIcon={<Send className="w-4 h-4" />}
                  >
                    Submit Inquiry
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};
