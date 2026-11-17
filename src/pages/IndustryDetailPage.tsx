import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Container } from '../components/common/Container';
import { SafeImage } from '../components/common/SafeImage';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { ScrollReveal } from '../components/common/ScrollReveal';
import { INDUSTRIES_LIST, FEATURED_PROJECTS, EXPERTISE_LIST } from '../data/content';
import { CheckCircle2, ArrowRight, ShieldCheck, Layers, ArrowLeft } from 'lucide-react';

export const IndustryDetailPage: React.FC = () => {
  const { industryId } = useParams<{ industryId: string }>();
  const industry = INDUSTRIES_LIST.find((ind) => ind.id === industryId);

  if (!industry) {
    return <Navigate to="/industries" replace />;
  }

  const relatedExpertise = EXPERTISE_LIST.slice(0, 3);
  const otherIndustries = INDUSTRIES_LIST.filter((ind) => ind.id !== industryId);

  return (
    <div className="bg-[#FAF9F6] dark:bg-[#0A121E]">
      <Breadcrumbs
        items={[
          { label: 'Industries', path: '/industries' },
          { label: industry.title }
        ]}
      />

      {/* Hero Section */}
      <section className="relative w-full h-[50vh] sm:h-[55vh] min-h-[400px] flex items-end pb-12 sm:pb-16 overflow-hidden bg-[#0A121E] text-white">
        <div className="absolute inset-0 w-full h-full z-0">
          <SafeImage
            src={industry.image}
            fallbackSrc="/images/industries-hero.jpg"
            alt={industry.title}
            containerClassName="w-full h-full"
            className="w-full h-full object-cover object-center"
          />
        </div>

        <div className="absolute inset-0 bg-[#0A1828]/60 z-[1] pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1828]/95 via-transparent to-[#0A1828]/40 z-[1] pointer-events-none" />

        <Container size="wide" className="relative z-10 w-full">
          <ScrollReveal direction="up" distance={25} duration={750}>
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.25em] text-[#D4B07B] block mb-2 sm:mb-3 font-sans drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              SECTOR {industry.number} &bull; APPLICATION SPECIFICATIONS
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-medium text-[#FAF9F6] leading-[1.05] drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] max-w-4xl">
              {industry.title}
            </h1>
            <p className="text-sm sm:text-base text-gray-200 font-light mt-3 max-w-2xl font-sans">
              {industry.tagline}
            </p>
          </ScrollReveal>
        </Container>
      </section>

      {/* Main Content */}
      <section className="py-16 sm:py-24">
        <Container size="wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-8 space-y-10">
              {/* Sector Overview */}
              <ScrollReveal direction="up" distance={20} duration={700}>
                <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-[#0F172A] border border-[#E8E6E1] dark:border-[#1E293B] shadow-xs space-y-5">
                  <h2 className="font-serif text-2xl sm:text-3xl font-medium text-[#132338] dark:text-[#FAF9F6]">
                    Sector Architecture &amp; Delivery Standards
                  </h2>
                  <p className="text-base text-[#667080] dark:text-[#94A3B8] font-light leading-relaxed font-sans">
                    {industry.description}
                  </p>
                  <p className="text-sm text-[#667080] dark:text-[#94A3B8] font-light leading-relaxed font-sans">
                    Each market sector operates under distinctive regulatory benchmarks, traffic patterns, and statutory compliance demands. AKG Infrastructure tailors structural design, utility layouts, and earthwork grading to match these requirements precisely.
                  </p>
                </div>
              </ScrollReveal>

              {/* Key Competencies in this Sector */}
              <ScrollReveal direction="up" distance={20} duration={700}>
                <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-[#0F172A] border border-[#E8E6E1] dark:border-[#1E293B] shadow-xs space-y-6">
                  <h3 className="font-serif text-2xl font-medium text-[#132338] dark:text-[#FAF9F6]">
                    Sector Competencies &amp; Use Cases
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {industry.keyAspects.map((aspect, i) => (
                      <div
                        key={i}
                        className="p-5 rounded-2xl bg-[#FAF9F6] dark:bg-[#101E2E] border border-[#E8E6E1] dark:border-[#20272D] flex items-center gap-3"
                      >
                        <CheckCircle2 className="w-5 h-5 text-[#9E7844] shrink-0" />
                        <span className="text-xs sm:text-sm font-semibold text-[#132338] dark:text-[#FAF9F6]">
                          {aspect}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              {/* Related Expertise Domains */}
              <ScrollReveal direction="up" distance={20} duration={700}>
                <div className="space-y-6">
                  <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#132338] dark:text-[#FAF9F6]">
                    Integrated Expertise Providing Sector Delivery
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {relatedExpertise.map((exp) => (
                      <Link
                        key={exp.id}
                        to={`/expertise/${exp.id}`}
                        className="group flex flex-col rounded-2xl overflow-hidden bg-white dark:bg-[#0F172A] border border-[#E8E6E1] dark:border-[#1E293B] shadow-xs hover:shadow-lg transition-all"
                      >
                        <div className="h-40 overflow-hidden relative">
                          <SafeImage
                            src={exp.image}
                            fallbackSrc={exp.image}
                            alt={exp.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                        <div className="p-4 flex-1 flex flex-col justify-between">
                          <span className="text-[10px] uppercase font-bold text-[#9E7844] block mb-1">
                            Domain {exp.number}
                          </span>
                          <h4 className="font-serif text-sm font-medium text-[#132338] dark:text-[#FAF9F6] line-clamp-2 mb-2">
                            {exp.title}
                          </h4>
                          <span className="text-xs text-[#B18A58] font-semibold flex items-center gap-1 mt-auto">
                            Read Domain &rarr;
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
              <div className="p-6 rounded-3xl bg-white dark:bg-[#0F172A] border border-[#E8E6E1] dark:border-[#1E293B] shadow-xs">
                <span className="text-xs font-bold uppercase tracking-widest text-[#9E7844] block mb-4 font-sans">
                  ALL SECTORS
                </span>
                <nav className="flex flex-col space-y-1.5 font-sans">
                  {otherIndustries.map((ind) => (
                    <Link
                      key={ind.id}
                      to={`/industries/${ind.id}`}
                      className="flex items-center justify-between px-4 py-2.5 rounded-xl text-xs font-semibold text-[#1F242A] dark:text-[#CBD5E1] hover:bg-[#142D45]/10 dark:hover:bg-white/10 hover:text-[#132338] dark:hover:text-white transition-colors"
                    >
                      <span className="truncate">{ind.title}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#9E7844] shrink-0" />
                    </Link>
                  ))}
                </nav>
              </div>

              {/* Consultation Card */}
              <div className="p-6 rounded-3xl bg-[#142D45] text-white space-y-4">
                <h4 className="font-serif text-xl font-medium text-[#FAF9F6]">
                  Sector Feasibility Review
                </h4>
                <p className="text-xs text-gray-300 font-light leading-relaxed">
                  Our civil desk reviews client-specific engineering guidelines, statutory permits, and site topologies.
                </p>
                <Link
                  to="/contact"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-full text-xs font-bold uppercase tracking-wider text-[#142D45] bg-[#FAF9F6] hover:bg-white transition-all font-sans"
                >
                  <span>CONNECT WITH SECTOR LEAD</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#9E7844]" />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};
