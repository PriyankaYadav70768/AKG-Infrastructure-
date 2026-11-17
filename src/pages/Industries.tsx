import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../components/common/Container';
import { INDUSTRIES_LIST } from '../data/content';
import { Button } from '../components/common/Button';
import { SafeImage } from '../components/common/SafeImage';
import { ScrollReveal } from '../components/common/ScrollReveal';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const Industries: React.FC = () => {
  return (
    <div className="bg-[#FAF9F6] dark:bg-[#0A121E]">
      {/* Cinematic Hero Section - Full Section Coverage */}
      <section className="relative w-full h-[50vh] sm:h-[55vh] lg:h-[60vh] min-h-[400px] sm:min-h-[440px] lg:min-h-[460px] flex items-end pb-10 sm:pb-14 lg:pb-16 overflow-hidden bg-[#0A121E] text-white">
        {/* Full-width and full-height background image */}
        <div className="absolute inset-0 w-full h-full z-0">
          <SafeImage
            src="/images/industries/developed-properties.webp"
            fallbackSrc="/images/industries-hero.jpg"
            alt="Aerial view of industrial, commercial, and residential infrastructure developments"
            containerClassName="w-full h-full"
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Subtle, uniform dark navy overlay across entire section for optimal contrast and readability */}
        <div className="absolute inset-0 bg-[#0A1828]/55 z-[1] pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1828]/80 via-transparent to-[#0A1828]/40 z-[1] pointer-events-none" />

        {/* Foreground Content */}
        <Container size="wide" className="relative z-10 w-full">
          <ScrollReveal direction="up" distance={25} duration={750}>
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.22em] sm:tracking-[0.25em] text-[#D4B07B] block mb-2.5 sm:mb-3 font-sans drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              SECTORS &amp; APPLICATIONS
            </span>
            <h1 className="font-serif text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-[#FAF9F6] leading-[1.08] sm:leading-[1.05] drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] break-words">
              Industries We Serve.
            </h1>
          </ScrollReveal>
        </Container>
      </section>

      {/* Intro Description */}
      <section className="py-20 lg:py-24 border-b border-[#EAE6DF] dark:border-[#1E293B]">
        <Container size="wide">
          <ScrollReveal direction="up" distance={20} duration={700}>
            <div className="max-w-3xl space-y-4">
              <h2 className="font-serif text-3xl sm:text-4xl font-medium text-[#142D45] dark:text-[#FAF9F6] leading-tight">
                Engineering Solutions Engineered for Specific Sector Demands
              </h2>
              <p className="text-base sm:text-lg text-[#777C80] dark:text-[#A0A6AC] font-light leading-relaxed font-sans">
                Tailoring civil methodology and structural design to the distinctive regulatory and operating conditions of each market sector.
              </p>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      <div className="py-20 lg:py-28">
        <Container size="wide">
          {/* Sectors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {INDUSTRIES_LIST.map((ind, idx) => (
            <ScrollReveal
              key={ind.id}
              direction="up"
              distance={25}
              delay={(idx % 3) * 100}
              duration={700}
            >
              <div className="rounded-2xl overflow-hidden bg-white dark:bg-[#0F172A] border border-[#E8E6E1] dark:border-[#1E293B] shadow-xs flex flex-col justify-between group h-full hover:shadow-xl transition-all duration-300">
                <div>
                  <div className="h-56 overflow-hidden relative">
                    <SafeImage
                      src={ind.image}
                      fallbackSrc={ind.image}
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
                      <div className="space-y-1.5 mb-5">
                        {ind.keyAspects.map((aspect, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs text-[#1F242A] dark:text-[#CBD5E1]">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#9E7844] shrink-0" />
                            <span>{aspect}</span>
                          </div>
                        ))}
                      </div>

                      <Link
                        to={`/industries/${ind.id}`}
                        className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#142D45] dark:text-[#D4B07B] hover:text-[#9E7844] transition-colors"
                      >
                        <span>EXPLORE SECTOR DETAILS</span>
                        <ArrowRight className="w-3.5 h-3.5 text-[#9E7844]" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Editorial Callout */}
        <ScrollReveal direction="up" distance={25} duration={750}>
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
        </ScrollReveal>
      </Container>
      </div>
    </div>
  );
};
