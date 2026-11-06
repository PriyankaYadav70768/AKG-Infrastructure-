import React from 'react';
import { ArrowRight, ChevronDown, Compass, Shield, CheckCircle2, Building2, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Container } from '../common/Container';
import { Button } from '../common/Button';
import { SafeImage } from '../common/SafeImage';
import {
  EXPERTISE_LIST,
  FEATURED_PROJECTS,
  INDUSTRIES_LIST,
  PHILOSOPHY_PRINCIPLES,
  FAQS,
} from '../../data/content';

// SECTION 01 — FULL-SCREEN CINEMATIC HERO (75-90% Viewport Height)
export const Hero: React.FC = () => {
  const handleScrollDown = () => {
    const nextSection = document.getElementById('intro-section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative min-h-[85vh] lg:min-h-[88vh] flex flex-col justify-between overflow-hidden bg-[#142D45] text-white">
      {/* Background Large-Scale Photographic Composition */}
      <div className="absolute inset-0 z-0">
        <SafeImage
          src="/editorial-hero.svg"
          fallbackSrc="/editorial-hero.svg"
          alt="Large-scale infrastructure engineering and corridor execution"
          className="w-full h-full object-cover opacity-90 scale-[1.02] transition-transform duration-1000"
        />
        {/* Cinematic subtle dark gradient overlay for effortless typography legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#142D45]/90 via-[#142D45]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#142D45]/90 via-transparent to-black/30" />
      </div>

      {/* Main Content: Positioned toward lower-left / center-left */}
      <Container size="wide" className="relative z-10 my-auto pt-24 pb-12">
        <div className="max-w-3xl space-y-6 text-left">
          {/* Small uppercase label */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-[#B18A58]/50 bg-[#142D45]/60 backdrop-blur-md text-[#D4B07B] text-[11px] font-bold tracking-[0.2em] uppercase font-sans">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B18A58]" />
            AKG INFRASTRUCTURE
          </div>

          {/* Large elegant serif display heading */}
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-medium leading-[1.03] tracking-tight text-[#FAF9F6]">
            Building Foundations. <br />
            <span className="italic font-normal text-[#D4B07B]">Shaping Tomorrow.</span>
          </h1>

          {/* Supporting paragraph */}
          <p className="text-base sm:text-lg lg:text-xl text-gray-200 font-light leading-relaxed max-w-2xl font-sans">
            Engineering thoughtful infrastructure and development solutions through disciplined planning, technical excellence and responsible execution.
          </p>

          {/* Two CTAs: EXPLORE OUR PROJECTS & DISCOVER OUR EXPERTISE */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full text-xs font-bold uppercase tracking-widest text-[#142D45] bg-[#FAF9F6] hover:bg-[#FAF9F6]/90 transition-all shadow-md hover:shadow-lg active:scale-[0.98] font-sans"
            >
              <span>EXPLORE OUR PROJECTS</span>
              <ArrowRight className="w-4 h-4 text-[#B18A58]" />
            </Link>

            <Link
              to="/expertise"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full text-xs font-bold uppercase tracking-widest text-[#FAF9F6] border border-white/40 hover:border-white hover:bg-white/10 transition-all active:scale-[0.98] font-sans"
            >
              <span>DISCOVER OUR EXPERTISE</span>
            </Link>
          </div>
        </div>
      </Container>

      {/* Small Scroll Indicator near bottom */}
      <div className="relative z-10 pb-8 flex items-center justify-center">
        <button
          type="button"
          onClick={handleScrollDown}
          className="inline-flex items-center gap-2 text-xs text-[#D4B07B] hover:text-[#FAF9F6] uppercase tracking-[0.2em] font-sans transition-colors cursor-pointer group focus:outline-hidden"
          aria-label="Scroll down to company introduction"
        >
          <span>Scroll Down</span>
          <ChevronDown className="w-3.5 h-3.5 animate-bounce group-hover:translate-y-0.5 transition-transform" />
        </button>
      </div>
    </section>
  );
};

// SECTION 02 — EDITORIAL COMPANY INTRODUCTION
export const EditorialIntroSection: React.FC = () => {
  return (
    <section id="intro-section" className="scroll-mt-20 py-28 lg:py-36 bg-[#FAF9F6] dark:bg-[#0A121E]">
      <Container size="wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Left Column */}
          <div className="lg:col-span-6 flex flex-col items-start space-y-6 text-left">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#B18A58] font-sans">
              WHO WE ARE
            </span>

            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium text-[#142D45] dark:text-[#FAF9F6] leading-[1.08] tracking-tight">
              Engineering Progress Through Purposeful Development.
            </h2>

            <p className="text-base sm:text-lg text-[#777C80] dark:text-[#A0A6AC] font-light leading-relaxed font-sans">
              AKG Infrastructure brings together engineering discipline, structured project planning and responsible execution to support the built environments of tomorrow.
            </p>

            <p className="text-sm sm:text-base text-[#777C80] dark:text-[#A0A6AC] font-light leading-relaxed font-sans">
              Our multidisciplinary teams unite civil engineers, structural specialists, architects, and on-site supervisors to navigate complex statutory and physical landscapes with uncompromised integrity.
            </p>

            <div className="pt-2">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#142D45] dark:text-[#D4B07B] border-b-2 border-[#B18A58] pb-1 hover:text-[#B18A58] transition-colors font-sans"
              >
                <span>DISCOVER AKG</span>
                <ArrowRight className="w-4 h-4 text-[#B18A58]" />
              </Link>
            </div>
          </div>

          {/* Right Column: Large Architectural Photograph (Natural proportions, generous whitespace) */}
          <div className="lg:col-span-6">
            <div className="relative overflow-hidden rounded-none shadow-2xl border border-[#EAE6DF] dark:border-[#20272D] group">
              <SafeImage
                src="/intro-architecture.svg"
                fallbackSrc="/intro-architecture.svg"
                alt="AKG Infrastructure architectural and purposeful development"
                className="w-full h-[460px] sm:h-[540px] object-cover image-reveal"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

// SECTION 03 — BRAND STATEMENT / SIGNATURE SECTION
export const BrandStatementSection: React.FC = () => {
  return (
    <section className="py-24 lg:py-32 bg-[#EAE6DF]/60 dark:bg-[#101E2E] border-y border-[#EAE6DF] dark:border-[#1E293B]">
      <Container size="default">
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#B18A58] font-sans">
            OUR CREED
          </span>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-medium text-[#142D45] dark:text-[#FAF9F6] leading-[1.25] tracking-tight">
            “Every structure begins with a vision.{' '}
            <span className="text-[#B18A58] italic font-normal">
              Every lasting development begins with the right foundation.
            </span>”
          </h2>
        </div>
      </Container>
    </section>
  );
};

// SECTION 04 — EXPERTISE / WHAT WE DO (Editorial Split Layout with Numbered List)
export const ExpertiseSplitSection: React.FC = () => {
  return (
    <section className="py-28 lg:py-36 bg-[#FFFFFF] dark:bg-[#0F172A]">
      <Container size="wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left Column: Heading & Short Introduction */}
          <div className="lg:col-span-5 flex flex-col items-start space-y-6 text-left lg:sticky lg:top-32 self-start">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#B18A58] font-sans">
              WHAT WE DO
            </span>

            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium text-[#142D45] dark:text-[#FAF9F6] leading-tight">
              Our Expertise
            </h2>

            <p className="text-base sm:text-lg text-[#777C80] dark:text-[#A0A6AC] font-light leading-relaxed font-sans">
              AKG Infrastructure deploys deep domain capabilities across civil frameworks, transportation arterials, and vertical superstructure delivery.
            </p>

            <Link
              to="/expertise"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#142D45] dark:text-[#D4B07B] border-b-2 border-[#B18A58] pb-1 hover:text-[#B18A58] transition-colors font-sans"
            >
              <span>EXPLORE ALL SERVICES</span>
              <ArrowRight className="w-4 h-4 text-[#B18A58]" />
            </Link>
          </div>

          {/* Right Column: Refined Vertical Numbered List */}
          <div className="lg:col-span-7 divide-y divide-[#EAE6DF] dark:divide-[#20272D]">
            {EXPERTISE_LIST.map((item) => (
              <div
                key={item.id}
                className="py-8 sm:py-10 first:pt-0 last:pb-0 group transition-all duration-300 hover:pl-2"
              >
                <div className="flex items-baseline gap-4 mb-2">
                  <span className="font-serif text-2xl font-light text-[#B18A58]">
                    {item.number}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#142D45] dark:text-[#FAF9F6] group-hover:text-[#B18A58] transition-colors">
                    {item.title}
                  </h3>
                </div>

                <p className="text-sm sm:text-base text-[#777C80] dark:text-[#A0A6AC] font-light leading-relaxed max-w-2xl pl-10 mb-4 font-sans">
                  {item.shortDesc}
                </p>

                <div className="pl-10">
                  <Link
                    to="/expertise"
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#142D45] dark:text-[#D4B07B] group-hover:translate-x-1 transition-transform font-sans"
                  >
                    <span>View Specifications</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#B18A58]" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

// SECTION 05 — FEATURED PROJECTS (Dominant Editorial Gallery with 65% Main Image & Supporting Image)
export const DominantProjectsSection: React.FC = () => {
  return (
    <section className="py-28 lg:py-36 bg-[#FAF9F6] dark:bg-[#0A121E] border-t border-[#EAE6DF] dark:border-[#1E293B]">
      <Container size="wide">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#B18A58] font-sans block mb-3">
              REPRESENTATIVE WORK
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium text-[#142D45] dark:text-[#FAF9F6] leading-tight">
              Featured Projects
            </h2>
          </div>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#142D45] dark:text-white hover:text-[#B18A58] transition-colors font-sans self-start md:self-auto"
          >
            <span>VIEW ALL PROJECTS</span>
            <ArrowRight className="w-4 h-4 text-[#B18A58]" />
          </Link>
        </div>

        {/* Row 1: Dominant 65% Main Project Image + 35% Supporting Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          {/* Main 65% Feature */}
          <div className="lg:col-span-8 group">
            <div className="relative overflow-hidden h-[440px] sm:h-[520px] shadow-xl">
              <SafeImage
                src={FEATURED_PROJECTS[0].image}
                fallbackSrc="/editorial-hero.svg"
                alt={FEATURED_PROJECTS[0].title}
                className="w-full h-full object-cover image-reveal"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
              <div className="absolute top-6 left-6">
                <span className="px-3.5 py-1 text-[10px] font-bold tracking-[0.2em] uppercase bg-[#142D45]/90 text-white border border-[#B18A58]/40 font-sans">
                  {FEATURED_PROJECTS[0].category}
                </span>
              </div>
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <p className="text-xs text-[#D4B07B] uppercase tracking-widest mb-1.5 font-sans font-semibold">
                  {FEATURED_PROJECTS[0].location}
                </p>
                <h3 className="font-serif text-3xl sm:text-4xl font-medium mb-2 leading-snug">
                  {FEATURED_PROJECTS[0].title}
                </h3>
                <p className="text-sm text-gray-200 line-clamp-2 max-w-2xl font-light font-sans mb-4">
                  {FEATURED_PROJECTS[0].description}
                </p>
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#D4B07B] hover:text-white transition-colors font-sans"
                >
                  <span>VIEW PROJECT DETAILS</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Supporting 35% Project */}
          <div className="lg:col-span-4 group">
            <div className="relative overflow-hidden h-[440px] sm:h-[520px] shadow-xl flex flex-col justify-end p-8 text-white">
              <SafeImage
                src={FEATURED_PROJECTS[1].image}
                fallbackSrc="/about-operations.svg"
                alt={FEATURED_PROJECTS[1].title}
                className="w-full h-full object-cover image-reveal absolute inset-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              <div className="relative z-10">
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#D4B07B] block mb-2 font-sans">
                  {FEATURED_PROJECTS[1].category}
                </span>
                <h3 className="font-serif text-2xl font-medium mb-2 leading-snug">
                  {FEATURED_PROJECTS[1].title}
                </h3>
                <p className="text-xs text-gray-300 line-clamp-3 font-light font-sans mb-4">
                  {FEATURED_PROJECTS[1].description}
                </p>
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#D4B07B] hover:text-white transition-colors font-sans"
                >
                  <span>VIEW PROJECT</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Row 2: Secondary Editorial Pair */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="group relative overflow-hidden h-[340px] sm:h-[380px] p-8 text-white flex flex-col justify-end">
            <SafeImage
              src={FEATURED_PROJECTS[2].image}
              fallbackSrc="/public-infrastructure.svg"
              alt={FEATURED_PROJECTS[2].title}
              className="w-full h-full object-cover image-reveal absolute inset-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
            <div className="relative z-10">
              <span className="text-[10px] font-bold tracking-widest text-[#D4B07B] uppercase block mb-1 font-sans">
                {FEATURED_PROJECTS[2].category}
              </span>
              <h3 className="font-serif text-2xl font-medium mb-1">
                {FEATURED_PROJECTS[2].title}
              </h3>
              <p className="text-xs text-gray-300 font-light font-sans line-clamp-2">
                {FEATURED_PROJECTS[2].description}
              </p>
            </div>
          </div>

          <div className="group relative overflow-hidden h-[340px] sm:h-[380px] p-8 text-white flex flex-col justify-end">
            <SafeImage
              src={FEATURED_PROJECTS[3].image}
              fallbackSrc="/intro-architecture.svg"
              alt={FEATURED_PROJECTS[3].title}
              className="w-full h-full object-cover image-reveal absolute inset-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
            <div className="relative z-10">
              <span className="text-[10px] font-bold tracking-widest text-[#D4B07B] uppercase block mb-1 font-sans">
                {FEATURED_PROJECTS[3].category}
              </span>
              <h3 className="font-serif text-2xl font-medium mb-1">
                {FEATURED_PROJECTS[3].title}
              </h3>
              <p className="text-xs text-gray-300 font-light font-sans line-clamp-2">
                {FEATURED_PROJECTS[3].description}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

// SECTION 06 — DARK BRAND EXPERIENCE (Full-Width Deep Navy #142D45 Section)
export const DarkBrandExperienceSection: React.FC = () => {
  return (
    <section className="py-28 lg:py-36 bg-[#142D45] text-white relative overflow-hidden">
      <Container size="wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-16">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#B18A58] font-sans">
              OUR COMMITMENT
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium leading-[1.08] text-[#FAF9F6]">
              Creating Infrastructure That Moves Communities Forward.
            </h2>
            <p className="text-base sm:text-lg text-gray-300 font-light leading-relaxed max-w-2xl font-sans">
              True development transcends immediate construction—it establishes the durable economic conduits, transit corridors, and institutional pillars upon which modern regional prosperity depends.
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="relative overflow-hidden border border-[#B18A58]/30 h-72 sm:h-80 shadow-2xl">
              <SafeImage
                src="/about-operations.svg"
                fallbackSrc="/about-operations.svg"
                alt="Active technical supervision and governance"
                className="w-full h-full object-cover opacity-85"
              />
            </div>
          </div>
        </div>

        {/* 3 Principles as Large Editorial Text Blocks (Not Small Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pt-12 border-t border-white/15">
          {PHILOSOPHY_PRINCIPLES.map((principle) => (
            <div key={principle.number} className="space-y-3">
              <span className="font-serif text-3xl font-light text-[#B18A58]">
                {principle.number}
              </span>
              <h3 className="font-serif text-2xl font-medium text-white">
                {principle.title}
              </h3>
              <p className="text-xs uppercase tracking-widest text-[#D4B07B] font-semibold font-sans">
                {principle.tagline}
              </p>
              <p className="text-sm text-gray-300 font-light leading-relaxed font-sans">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

// SECTION 07 — INDUSTRIES WE SERVE (All 6 Categories: Row 1 = 2 Large; Row 2 = 1 Wide Landscape; Row 3 = 3 Asymmetric)
export const EditorialIndustriesSection: React.FC = () => {
  return (
    <section className="py-28 lg:py-36 bg-[#FFFFFF] dark:bg-[#0F172A] border-t border-[#EAE6DF] dark:border-[#1E293B]">
      <Container size="wide">
        <div className="max-w-2xl mb-16 text-left">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#B18A58] font-sans block mb-3">
            MARKET DIVERSITY
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium text-[#142D45] dark:text-[#FAF9F6] leading-tight">
            Industries We Serve
          </h2>
          <p className="text-base text-[#777C80] dark:text-[#A0A6AC] font-light mt-4 font-sans">
            Deploying domain-specific civil methodologies, precision structural design, and field management across all six vital sectors.
          </p>
        </div>

        {/* Row 1: Two Large Image-Led Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {INDUSTRIES_LIST.slice(0, 2).map((ind) => (
            <div key={ind.id} className="group border border-[#EAE6DF] dark:border-[#20272D] overflow-hidden">
              <div className="h-64 sm:h-80 overflow-hidden relative">
                <SafeImage
                  src={ind.image}
                  fallbackSrc="/about-operations.svg"
                  alt={ind.title}
                  className="w-full h-full object-cover image-reveal"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#D4B07B] block mb-1 font-sans">
                    Sector {ind.number}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-medium">
                    {ind.title}
                  </h3>
                </div>
              </div>
              <div className="p-6 bg-[#FAF9F6] dark:bg-[#101E2E]">
                <p className="text-xs uppercase tracking-wider text-[#B18A58] font-semibold mb-2 font-sans">
                  {ind.tagline}
                </p>
                <p className="text-sm text-[#777C80] dark:text-[#A0A6AC] font-light leading-relaxed mb-4 font-sans">
                  {ind.description}
                </p>
                <Link to="/industries" className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#142D45] dark:text-[#D4B07B] font-sans">
                  <span>Explore Sector</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Row 2: One Wide Landscape Image Item */}
        <div className="mb-8">
          <div className="group border border-[#EAE6DF] dark:border-[#20272D] overflow-hidden grid grid-cols-1 lg:grid-cols-12 bg-[#FAF9F6] dark:bg-[#101E2E]">
            <div className="lg:col-span-7 h-72 sm:h-96 overflow-hidden relative">
              <SafeImage
                src={INDUSTRIES_LIST[2].image}
                fallbackSrc="/intro-architecture.svg"
                alt={INDUSTRIES_LIST[2].title}
                className="w-full h-full object-cover image-reveal"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#D4B07B] block mb-1 font-sans">
                  Sector {INDUSTRIES_LIST[2].number}
                </span>
                <h3 className="font-serif text-3xl font-medium">
                  {INDUSTRIES_LIST[2].title}
                </h3>
              </div>
            </div>
            <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-center">
              <p className="text-xs uppercase tracking-wider text-[#B18A58] font-semibold mb-2 font-sans">
                {INDUSTRIES_LIST[2].tagline}
              </p>
              <p className="text-sm text-[#777C80] dark:text-[#A0A6AC] font-light leading-relaxed mb-6 font-sans">
                {INDUSTRIES_LIST[2].description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {INDUSTRIES_LIST[2].keyAspects.map((aspect, i) => (
                  <span key={i} className="text-xs px-3 py-1 bg-white dark:bg-[#142D45] border border-[#EAE6DF] dark:border-[#20272D] text-[#142D45] dark:text-[#FAF9F6] font-sans">
                    {aspect}
                  </span>
                ))}
              </div>
              <Link to="/industries" className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#142D45] dark:text-[#D4B07B] font-sans">
                <span>View Industrial Capabilities</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Row 3: Remaining 3 Categories (Transportation, Institutional, Public Infrastructure) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {INDUSTRIES_LIST.slice(3, 6).map((ind) => (
            <div key={ind.id} className="group border border-[#EAE6DF] dark:border-[#20272D] overflow-hidden bg-[#FAF9F6] dark:bg-[#101E2E]">
              <div className="h-56 overflow-hidden relative">
                <SafeImage
                  src={ind.image}
                  fallbackSrc="/public-infrastructure.svg"
                  alt={ind.title}
                  className="w-full h-full object-cover image-reveal"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#D4B07B] block mb-0.5 font-sans">
                    Sector {ind.number}
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-medium leading-snug">
                    {ind.title}
                  </h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-xs text-[#777C80] dark:text-[#A0A6AC] font-light leading-relaxed mb-4 font-sans line-clamp-3">
                  {ind.description}
                </p>
                <Link to="/industries" className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#142D45] dark:text-[#D4B07B] font-sans">
                  <span>Explore &rarr;</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

// SECTION 08 — OUR APPROACH (Two-Column Editorial Section)
export const EditorialApproachSection: React.FC = () => {
  return (
    <section className="py-28 lg:py-36 bg-[#FAF9F6] dark:bg-[#0A121E] border-t border-[#EAE6DF] dark:border-[#1E293B]">
      <Container size="wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Left: Large Engineering Activity Photograph */}
          <div className="lg:col-span-6">
            <div className="relative overflow-hidden shadow-2xl border border-[#EAE6DF] dark:border-[#20272D]">
              <SafeImage
                src="/about-operations.svg"
                fallbackSrc="/about-operations.svg"
                alt="Disciplined on-site engineering and supervision activity"
                className="w-full h-[460px] sm:h-[540px] object-cover image-reveal"
              />
            </div>
          </div>

          {/* Right: Small Label, Large Heading, 3 Concise Principles, Explore Link */}
          <div className="lg:col-span-6 flex flex-col items-start space-y-6 text-left">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#B18A58] font-sans">
              OUR APPROACH
            </span>

            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium text-[#142D45] dark:text-[#FAF9F6] leading-[1.08] tracking-tight">
              From Planning to Precision.
            </h2>

            <div className="space-y-5 text-sm sm:text-base text-[#777C80] dark:text-[#A0A6AC] font-light leading-relaxed font-sans">
              <p>
                <strong>01 — Deep Geotechnical &amp; Feasibility Modeling:</strong> Validating subsurface bearing conditions, hydrological loads, and seismic criteria before breaking ground.
              </p>
              <p>
                <strong>02 — Multi-Tier Construction Oversight:</strong> Deploying specialized Site Engineers, Safety Officers, and Quantity Surveyors with rigorous milestone validation.
              </p>
              <p>
                <strong>03 — Verified Quality Assurance:</strong> Continuous concrete batch testing, structural tolerance audits, and seamless statutory project handover.
              </p>
            </div>

            <div className="pt-2">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#142D45] dark:text-[#D4B07B] border-b-2 border-[#B18A58] pb-1 hover:text-[#B18A58] transition-colors font-sans"
              >
                <span>EXPLORE OUR APPROACH</span>
                <ArrowRight className="w-4 h-4 text-[#B18A58]" />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

// SECTION 09 — CONTACT / FINAL CTA (Closing Section)
export const FinalClosingCTASection: React.FC = () => {
  return (
    <section className="py-28 lg:py-36 bg-[#142D45] text-white border-t border-[#20272D]">
      <Container size="default">
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#B18A58] font-sans">
            GET IN TOUCH
          </span>

          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium text-[#FAF9F6] tracking-tight">
            Let's Build Something That Lasts.
          </h2>

          <p className="text-base sm:text-lg text-gray-300 font-light leading-relaxed font-sans">
            Reach out to our engineering, procurement, or administrative desks regarding project inquiries, constructability reviews, or partnership initiatives.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full text-xs font-bold uppercase tracking-widest text-[#142D45] bg-[#FAF9F6] hover:bg-[#FAF9F6]/90 transition-all shadow-md font-sans"
            >
              <span>CONTACT US</span>
              <ArrowRight className="w-4 h-4 text-[#B18A58]" />
            </Link>

            <Link
              to="/login"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full text-xs font-bold uppercase tracking-widest text-white border border-white/30 hover:border-white transition-all font-sans"
            >
              <span>PORTAL LOGIN / JOIN</span>
            </Link>
          </div>

          <div className="pt-8 border-t border-white/10 text-xs text-gray-400 font-sans">
            <span>Corporate Enclave • inquiry@akginfrastructure.com • +91 (0) 11 4982 0000</span>
          </div>
        </div>
      </Container>
    </section>
  );
};
