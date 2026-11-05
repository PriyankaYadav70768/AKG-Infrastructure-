import React from 'react';
import { Container } from '../components/common/Container';
import { SafeImage } from '../components/common/SafeImage';
import { Button } from '../components/common/Button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const About: React.FC = () => {
  return (
    <div className="bg-[#FAF9F6] dark:bg-[#0A121E]">
      {/* 1. Large Photographic Page Hero */}
      <section className="relative h-[55vh] min-h-[420px] flex items-end pb-16 overflow-hidden bg-[#142D45] text-white">
        <SafeImage
          src="/editorial-hero.svg"
          fallbackSrc="/editorial-hero.svg"
          alt="AKG Infrastructure site execution and engineering"
          className="w-full h-full object-cover opacity-85 absolute inset-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#142D45] via-[#142D45]/60 to-transparent" />
        <Container size="wide" className="relative z-10">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#D4B07B] block mb-3 font-sans">
            COMPANY OVERVIEW
          </span>
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-medium text-[#FAF9F6] leading-[1.05]">
            Engineering Progress With Purpose.
          </h1>
        </Container>
      </section>

      {/* 2. Small uppercase section label, 3. Large serif heading, 4. Company introduction in an editorial layout */}
      <section className="py-24 lg:py-32">
        <Container size="wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <div className="lg:col-span-6 space-y-6 text-left">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#B18A58] font-sans">
                WHO WE ARE
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl font-medium text-[#142D45] dark:text-[#FAF9F6] leading-[1.1]">
                Balancing Structural Rigor with Practical Execution.
              </h2>
              <p className="text-base sm:text-lg text-[#777C80] dark:text-[#A0A6AC] font-light leading-relaxed font-sans">
                Founded on the conviction that enduring infrastructure requires an uncompromising balance of structural calculation and disciplined field management, AKG Infrastructure coordinates complex developments across urban, commercial, and industrial corridors.
              </p>
              <p className="text-sm sm:text-base text-[#777C80] dark:text-[#A0A6AC] font-light leading-relaxed font-sans">
                Our multidisciplinary project teams integrate civil engineering, architectural coordination, geotechnical survey, and environmental protection from inception through final commissioning.
              </p>
            </div>

            {/* 5. Large Architectural Photograph */}
            <div className="lg:col-span-6">
              <div className="relative overflow-hidden shadow-2xl border border-[#EAE6DF] dark:border-[#20272D]">
                <SafeImage
                  src="/intro-architecture.svg"
                  fallbackSrc="/intro-architecture.svg"
                  alt="Architectural development and engineering standards"
                  className="w-full h-[440px] sm:h-[500px] object-cover image-reveal"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 6. Company Philosophy Section (Full-Width Dark Navy #142D45) */}
      <section className="py-24 lg:py-32 bg-[#142D45] text-white">
        <Container size="wide">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#B18A58] font-sans block mb-3">
              PHILOSOPHY
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium text-[#FAF9F6] leading-tight mb-6">
              Constructed to Withstand Time.
            </h2>
            <p className="text-base sm:text-lg text-gray-300 font-light leading-relaxed font-sans">
              We reject short-term compromises in material selection or site preparation. Our philosophy centers on creating built assets that remain resilient across expanding demographic demands.
            </p>
          </div>

          {/* 7. Engineering Principles (Large Editorial Text Blocks) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pt-12 border-t border-white/15">
            <div className="space-y-3">
              <span className="font-serif text-3xl font-light text-[#B18A58]">01</span>
              <h3 className="font-serif text-2xl font-medium text-white">Site Integrity</h3>
              <p className="text-xs uppercase tracking-widest text-[#D4B07B] font-semibold font-sans">Multi-Tier Oversight</p>
              <p className="text-sm text-gray-300 font-light leading-relaxed font-sans">
                Standardized daily field inspections led by experienced Site Engineers and Site Supervisors benchmark tolerances at every pour.
              </p>
            </div>

            <div className="space-y-3">
              <span className="font-serif text-3xl font-light text-[#B18A58]">02</span>
              <h3 className="font-serif text-2xl font-medium text-white">HSE Protocols</h3>
              <p className="text-xs uppercase tracking-widest text-[#D4B07B] font-semibold font-sans">Zero-Tolerance Mandate</p>
              <p className="text-sm text-gray-300 font-light leading-relaxed font-sans">
                Comprehensive environmental protection, safety auditing, and worker health compliance are mandated across every jobsite perimeter.
              </p>
            </div>

            <div className="space-y-3">
              <span className="font-serif text-3xl font-light text-[#B18A58]">03</span>
              <h3 className="font-serif text-2xl font-medium text-white">Predictable Delivery</h3>
              <p className="text-xs uppercase tracking-widest text-[#D4B07B] font-semibold font-sans">Milestone Accountability</p>
              <p className="text-sm text-gray-300 font-light leading-relaxed font-sans">
                Critical path methodology and transparent progress controls ensure that commercial and civic timelines are achieved predictably.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 8. Final Contact CTA */}
      <section className="py-24 lg:py-32 bg-[#FAF9F6] dark:bg-[#0A121E]">
        <Container size="default">
          <div className="text-center space-y-6 max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#B18A58] font-sans">
              INITIATE CONSULTATION
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-medium text-[#142D45] dark:text-[#FAF9F6]">
              Partner With AKG Infrastructure
            </h2>
            <p className="text-base text-[#777C80] dark:text-[#A0A6AC] font-light leading-relaxed font-sans">
              Connect with our corporate office to discuss constructability reviews, joint venture developments, or contractor clearance.
            </p>
            <div className="pt-4 flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-xs font-bold uppercase tracking-widest text-[#FAF9F6] bg-[#142D45] hover:bg-[#070E18] dark:bg-[#1E3A5F] transition-all font-sans"
              >
                <span>CONTACT US</span>
                <ArrowRight className="w-4 h-4 text-[#B18A58]" />
              </Link>
              <Link
                to="/login"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-xs font-bold uppercase tracking-widest text-[#142D45] dark:text-white border border-[#142D45]/30 dark:border-white/30 hover:border-[#142D45] transition-all font-sans"
              >
                <span>PORTAL LOGIN / JOIN</span>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};
