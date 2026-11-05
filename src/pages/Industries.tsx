import React from 'react';
import { Container } from '../components/common/Container';
import { INDUSTRIES_LIST } from '../data/content';
import { Button } from '../components/common/Button';
import { SafeImage } from '../components/common/SafeImage';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const Industries: React.FC = () => {
  return (
    <div className="py-20 lg:py-28 bg-[#FAF9F6] dark:bg-[#0A121E]">
      <Container size="wide">
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#9E7844] block mb-3">
            Sectors &amp; Applications
          </span>
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-medium text-[#132338] dark:text-[#F8FAFC] leading-[1.08] mb-6">
            Industries We Serve
          </h1>
          <p className="text-lg sm:text-xl text-[#667080] dark:text-[#94A3B8] font-light leading-relaxed">
            Tailoring civil methodology and structural design to the distinctive regulatory and operating conditions of each market sector.
          </p>
        </div>

        {/* Sectors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {INDUSTRIES_LIST.map((ind) => (
            <div
              key={ind.id}
              className="rounded-2xl overflow-hidden bg-white dark:bg-[#0F172A] border border-[#E8E6E1] dark:border-[#1E293B] shadow-xs flex flex-col justify-between group"
            >
              <div>
                <div className="h-56 overflow-hidden relative">
                  <SafeImage
                    src={ind.image}
                    fallbackSrc="/public-infrastructure.svg"
                    alt={ind.title}
                    className="w-full h-full object-cover image-reveal"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent pointer-events-none" />
                  <div className="absolute top-4 left-4">
                    <span className="text-[10px] font-bold tracking-widest text-[#D4B07B] uppercase bg-black/40 px-2.5 py-1 rounded-full border border-white/10">
                      Sector {ind.number}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 pointer-events-none">
                    <h3 className="font-serif text-xl sm:text-2xl font-medium text-white mb-0.5 leading-snug">
                      {ind.title}
                    </h3>
                  </div>
                </div>

                <div className="p-6 sm:p-8">
                  <p className="text-xs uppercase tracking-wider text-[#9E7844] font-semibold mb-2">
                    {ind.tagline}
                  </p>
                  <p className="text-xs sm:text-sm text-[#667080] dark:text-[#94A3B8] leading-relaxed mb-6 font-light">
                    {ind.description}
                  </p>

                  <div className="pt-4 border-t border-[#E8E6E1] dark:border-[#1E293B] space-y-2">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#9E7844] block">
                      Key Competencies
                    </span>
                    <div className="space-y-1.5">
                      {ind.keyAspects.map((aspect, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-[#1F242A] dark:text-[#CBD5E1]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#9E7844] shrink-0" />
                          <span>{aspect}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Editorial Callout */}
        <div className="p-10 sm:p-14 rounded-3xl bg-white dark:bg-[#0F172A] border border-[#E8E6E1] dark:border-[#1E293B] text-center max-w-3xl mx-auto shadow-xs">
          <span className="text-xs font-bold uppercase tracking-widest text-[#9E7844] block mb-2">Sector Integration</span>
          <h3 className="font-serif text-3xl sm:text-4xl font-medium text-[#132338] dark:text-[#F8FAFC] mb-3">
            Looking for Custom Sector Specifications?
          </h3>
          <p className="text-sm text-[#667080] dark:text-[#94A3B8] mb-8 font-light leading-relaxed">
            We review client-specific engineering guidelines, tender documents, and regulatory safety standards across all six domains.
          </p>
          <Button to="/contact" variant="primary" size="md" rightIcon={<ArrowRight className="w-4 h-4" />}>
            Connect With Sector Leads
          </Button>
        </div>
      </Container>
    </div>
  );
};
