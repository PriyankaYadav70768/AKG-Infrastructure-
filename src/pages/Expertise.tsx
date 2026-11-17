import React from 'react';
import { Container } from '../components/common/Container';
import { Button } from '../components/common/Button';
import { SafeImage } from '../components/common/SafeImage';
import { ScrollReveal } from '../components/common/ScrollReveal';
import { EXPERTISE_LIST } from '../data/content';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Expertise: React.FC = () => {
  return (
    <div className="bg-[#FAF9F6] dark:bg-[#0A121E]">
      {/* Page Hero - Full-Section Coverage */}
      <section className="relative w-full h-[50vh] sm:h-[55vh] lg:h-[60vh] min-h-[400px] sm:min-h-[440px] lg:min-h-[460px] flex items-end pb-10 sm:pb-14 lg:pb-16 overflow-hidden bg-[#0A121E] text-white">
        {/* Full-width and full-height background image */}
        <div className="absolute inset-0 w-full h-full z-0">
          <SafeImage
            src="/images/expertise/green-township.webp"
            fallbackSrc="/images/expertise-hero.jpg"
            alt="Aerial view of master planned land development and plot demarcations"
            containerClassName="w-full h-full"
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Subtle, uniform dark navy overlay across entire section for optimal contrast and readability */}
        <div className="absolute inset-0 bg-[#0A1828]/55 z-[1] pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1828]/80 via-transparent to-[#0A1828]/40 z-[1] pointer-events-none" />

        {/* Foreground Content with Heading aligned to the bottom-left */}
        <Container size="wide" className="relative z-10 w-full">
          <ScrollReveal direction="up" distance={25} duration={750} className="max-w-2xl text-left">
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.22em] sm:tracking-[0.25em] text-[#D4B07B] block mb-2.5 sm:mb-3 font-sans drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              WHAT WE DO
            </span>
            <h1 className="font-serif text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-[#FAF9F6] leading-[1.08] sm:leading-[1.05] drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] break-words">
              Our Engineering Expertise.
            </h1>
          </ScrollReveal>
        </Container>
      </section>

      {/* Large Introductory Section */}
      <section className="py-20 lg:py-24 border-b border-[#EAE6DF] dark:border-[#1E293B]">
        <Container size="wide">
          <ScrollReveal direction="up" distance={20} duration={700}>
            <div className="max-w-3xl space-y-4">
              <h2 className="font-serif text-3xl sm:text-4xl font-medium text-[#142D45] dark:text-[#FAF9F6] leading-tight">
                Disciplined Methodologies Tailored to High-Complexity Schemes
              </h2>
              <p className="text-base sm:text-lg text-[#777C80] dark:text-[#A0A6AC] font-light leading-relaxed font-sans">
                From heavy ground stabilization and deep foundation caissons to high-span composite bridges and turnkey logistics parks, our six technical domains operate under unified engineering governance.
              </p>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* Alternating Image and Text Layouts with Numbered Sections & Hover Links */}
      <section className="py-24 lg:py-32">
        <Container size="wide">
          <div className="space-y-24">
            {EXPERTISE_LIST.map((item, index) => {
              const isEven = index % 2 === 1;
              return (
                <div
                  key={item.id}
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center ${
                    isEven ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  <div className={`lg:col-span-6 space-y-6 text-left ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <ScrollReveal direction={isEven ? 'right' : 'left'} distance={30} duration={750}>
                      <span className="font-serif text-3xl font-light text-[#B18A58]">
                        {item.number}
                      </span>
                      <h3 className="font-serif text-3xl sm:text-4xl font-medium text-[#142D45] dark:text-[#FAF9F6] leading-snug mt-2">
                        {item.title}
                      </h3>
                      <p className="text-base sm:text-lg text-[#777C80] dark:text-[#A0A6AC] font-light leading-relaxed font-sans mt-3">
                        {item.fullDesc}
                      </p>

                      <div className="pt-4 border-t border-[#EAE6DF] dark:border-[#20272D] mt-6">
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

                      <div className="pt-4 flex flex-wrap items-center gap-4">
                        <Link
                          to={`/expertise/${item.id}`}
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-[#132338] dark:bg-[#1E3A5F] hover:bg-[#070E18] transition-all font-sans shadow-xs"
                        >
                          <span>EXPLORE DOMAIN</span>
                          <ArrowRight className="w-3.5 h-3.5 text-[#D4B07B]" />
                        </Link>
                        <Link
                          to="/contact"
                          className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#142D45] dark:text-[#D4B07B] border-b border-[#B18A58] pb-1 hover:text-[#B18A58] transition-colors font-sans"
                        >
                          <span>INQUIRE</span>
                        </Link>
                      </div>
                    </ScrollReveal>
                  </div>

                  <div className={`lg:col-span-6 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <ScrollReveal direction={isEven ? 'left' : 'right'} distance={30} duration={800}>
                      <div className="relative overflow-hidden rounded-xl shadow-2xl border border-[#EAE6DF] dark:border-[#20272D] h-72 sm:h-96 group">
                        <SafeImage
                          src={item.image}
                          fallbackSrc={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover image-reveal"
                        />
                      </div>
                    </ScrollReveal>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-[#142D45] text-white">
        <Container size="default">
          <ScrollReveal direction="up" distance={25} duration={750}>
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
          </ScrollReveal>
        </Container>
      </section>
    </div>
  );
};
