import React from 'react';
import { Container } from '../components/common/Container';
import { Button } from '../components/common/Button';
import { SafeImage } from '../components/common/SafeImage';
import { EXPERTISE_LIST } from '../data/content';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Expertise: React.FC = () => {
  return (
    <div className="bg-[#FAF9F6] dark:bg-[#0A121E]">
      {/* Page Hero */}
      <section className="relative h-[48vh] min-h-[380px] flex items-end pb-14 overflow-hidden bg-[#142D45] text-white">
        <SafeImage
          src="/editorial-hero.svg"
          fallbackSrc="/editorial-hero.svg"
          alt="AKG Infrastructure technical expertise"
          className="w-full h-full object-cover opacity-85 absolute inset-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#142D45] via-[#142D45]/60 to-transparent" />
        <Container size="wide" className="relative z-10">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#D4B07B] block mb-3 font-sans">
            WHAT WE DO
          </span>
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-medium text-[#FAF9F6] leading-[1.05]">
            Our Engineering Expertise.
          </h1>
        </Container>
      </section>

      {/* Large Introductory Section */}
      <section className="py-20 lg:py-24 border-b border-[#EAE6DF] dark:border-[#1E293B]">
        <Container size="wide">
          <div className="max-w-3xl space-y-4">
            <h2 className="font-serif text-3xl sm:text-4xl font-medium text-[#142D45] dark:text-[#FAF9F6] leading-tight">
              Disciplined Methodologies Tailored to High-Complexity Schemes
            </h2>
            <p className="text-base sm:text-lg text-[#777C80] dark:text-[#A0A6AC] font-light leading-relaxed font-sans">
              From heavy ground stabilization and deep foundation caissons to high-span composite bridges and turnkey logistics parks, our six technical domains operate under unified engineering governance.
            </p>
          </div>
        </Container>
      </section>

      {/* Alternating Image and Text Layouts with Numbered Sections & Hover Links */}
      <section className="py-24 lg:py-32">
        <Container size="wide">
          <div className="space-y-24">
            {EXPERTISE_LIST.map((item, index) => (
              <div
                key={item.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={`lg:col-span-6 space-y-6 text-left ${index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}`}>
                  <span className="font-serif text-3xl font-light text-[#B18A58]">
                    {item.number}
                  </span>
                  <h3 className="font-serif text-3xl sm:text-4xl font-medium text-[#142D45] dark:text-[#FAF9F6] leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-base sm:text-lg text-[#777C80] dark:text-[#A0A6AC] font-light leading-relaxed font-sans">
                    {item.fullDesc}
                  </p>

                  <div className="pt-4 border-t border-[#EAE6DF] dark:border-[#20272D]">
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#B18A58] block mb-3 font-sans">
                      TECHNICAL COMPETENCIES
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {item.capabilities.map((cap, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-[#142D45] dark:text-[#FAF9F6] font-sans">
                          <CheckCircle2 className="w-4 h-4 text-[#B18A58] shrink-0" />
                          <span>{cap}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2">
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#142D45] dark:text-[#D4B07B] border-b-2 border-[#B18A58] pb-1 hover:text-[#B18A58] transition-colors font-sans"
                    >
                      <span>INQUIRE ON THIS DOMAIN</span>
                      <ArrowRight className="w-4 h-4 text-[#B18A58]" />
                    </Link>
                  </div>
                </div>

                <div className={`lg:col-span-6 ${index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="relative overflow-hidden shadow-2xl border border-[#EAE6DF] dark:border-[#20272D] h-72 sm:h-96">
                    <SafeImage
                      src={item.image}
                      fallbackSrc="/editorial-hero.svg"
                      alt={item.title}
                      className="w-full h-full object-cover image-reveal"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-[#142D45] text-white">
        <Container size="default">
          <div className="text-center space-y-6 max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#B18A58] font-sans">
              CONSULTATION
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-medium text-[#FAF9F6]">
              Require Engineering Feasibility Review?
            </h2>
            <p className="text-base text-gray-300 font-light leading-relaxed font-sans">
              Our technical desk reviews contractor tenders, BOQ calculations, and structural constructability models.
            </p>
            <div className="pt-4 flex justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-xs font-bold uppercase tracking-widest text-[#142D45] bg-[#FAF9F6] hover:bg-white transition-all font-sans"
              >
                <span>INITIATE REVIEW</span>
                <ArrowRight className="w-4 h-4 text-[#B18A58]" />
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};
