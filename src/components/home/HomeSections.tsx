import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, ChevronDown, ChevronLeft, ChevronRight, Compass, Shield, CheckCircle2, Building2, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Container } from '../common/Container';
import { Button } from '../common/Button';
import { SafeImage } from '../common/SafeImage';
import { ScrollReveal } from '../common/ScrollReveal';
import {
  EXPERTISE_LIST,
  FEATURED_PROJECTS,
  INDUSTRIES_LIST,
  PHILOSOPHY_PRINCIPLES,
  FAQS,
} from '../../data/content';

// SECTION 01 — FULL-SCREEN CINEMATIC HERO SLIDER WITH DYNAMIC CONTENT & SLIDE TRANSITIONS
const HERO_SLIDES = [
  {
    image: '/images/home/hero-slide-1.webp',
    fallback: '/images/hero-main.jpg',
    alt: 'Indian Village Residential Plotting with clean asphalt road, demarcated plots and village homes',
    tag: 'RURAL RESIDENTIAL PLOTTING',
    title: 'Building Foundations.',
    highlight: 'Shaping Tomorrow.',
    description: 'Engineering thoughtful infrastructure and plotted residential solutions through disciplined land planning, accurate boundary demarcation, and responsible execution.',
    ctaPrimary: { text: 'EXPLORE OUR PROJECTS', path: '/projects' },
    ctaSecondary: { text: 'DISCOVER OUR EXPERTISE', path: '/expertise' },
    label: 'Village Plotting'
  },
  {
    image: '/images/home/hero-slide-2.webp',
    fallback: '/images/expertise/residential-plots.webp',
    alt: 'Green Residential Plotting with boundary walls, green grass and black asphalt roads',
    tag: 'MASTER-PLANNED TOWNSHIPS',
    title: 'Rooted in the Land.',
    highlight: 'Built for Families.',
    description: 'Developing sustainable residential colonies with wide black-top roads, peaceful green surroundings, and complete statutory documentation across Uttar Pradesh.',
    ctaPrimary: { text: 'VIEW AVAILABLE PLOTS', path: '/projects' },
    ctaSecondary: { text: 'LEARN ABOUT AKG', path: '/about' },
    label: 'Green Plotting'
  },
  {
    image: '/images/home/hero-slide-3.webp',
    fallback: '/images/about/about-landscape.webp',
    alt: 'Developed Village Township with brick houses, road connectivity and open surroundings',
    tag: 'CLEAR TITLE & DEMARCATION',
    title: 'Secure Land Ownership.',
    highlight: 'Zero Compromise.',
    description: 'Every plot is delineated with permanent concrete pillars and red-brick boundary courses, pre-verified for immediate registry and possession readiness.',
    ctaPrimary: { text: 'EXPLORE OUR SERVICES', path: '/expertise' },
    ctaSecondary: { text: 'CONTACT ADVISORY', path: '/contact' },
    label: 'Village Township'
  },
  {
    image: '/images/home/hero-slide-4.webp',
    fallback: '/images/home/hero-township.webp',
    alt: 'Aerial View of Indian Plotting layout with clear boundaries and connecting asphalt roads',
    tag: 'REGIONAL INFRASTRUCTURE',
    title: 'Strategic Connectivity.',
    highlight: 'Enduring Growth.',
    description: 'Connecting serene village-side neighborhoods directly to major economic corridors, civic hubs, and highway arteries for generational prosperity.',
    ctaPrimary: { text: 'VIEW PORTFOLIO', path: '/projects' },
    ctaSecondary: { text: 'SCHEDULE SITE VISIT', path: '/contact' },
    label: 'Aerial View'
  }
];

export const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Automatic transition every 5.5 seconds (paused on hover)
  useEffect(() => {
    if (isPaused) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5500);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused]);

  // Preload upcoming slides into memory
  useEffect(() => {
    HERO_SLIDES.forEach((slide) => {
      const img = new Image();
      img.src = slide.image;
    });
  }, []);

  const goToPrev = () => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const handleScrollDown = () => {
    const nextSection = document.getElementById('intro-section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const activeSlide = HERO_SLIDES[currentSlide];

  return (
    <section
      className="relative min-h-[85vh] lg:min-h-[88vh] flex flex-col justify-between overflow-hidden bg-[#142D45] text-white select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Automatic Crossfade + Subtle Ken Burns Zoom Slider */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {HERO_SLIDES.map((slide, index) => {
          const isActive = index === currentSlide;
          return (
            <div
              key={slide.image}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              <SafeImage
                src={slide.image}
                fallbackSrc={slide.fallback}
                alt={slide.alt}
                className={`w-full h-full object-cover object-center transition-transform duration-7000 ease-out ${
                  isActive ? 'scale-[1.04]' : 'scale-100'
                }`}
              />
            </div>
          );
        })}
        {/* Subtle dark navy gradient overlays for effortless typography legibility */}
        <div className="absolute inset-0 z-20 bg-gradient-to-r from-[#0B1522]/95 via-[#0B1522]/80 sm:via-[#0B1522]/65 to-[#0B1522]/30 pointer-events-none" />
        <div className="absolute inset-0 z-20 bg-gradient-to-t from-[#0B1522]/95 via-transparent to-black/40 pointer-events-none" />
      </div>

      {/* Main Content with Animated Key Transitions */}
      <Container size="wide" className="relative z-30 my-auto pt-20 sm:pt-28 pb-12 sm:pb-16">
        <div className="max-w-3xl space-y-5 sm:space-y-6 text-left">
          {/* Animated Badge */}
          <div>
            <div
              key={`tag-${currentSlide}`}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-[#D4B07B]/40 bg-[#0B1522]/80 backdrop-blur-md text-[#D4B07B] text-[10px] sm:text-[11px] font-bold tracking-[0.25em] uppercase font-sans animate-fadeIn shadow-sm"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4B07B] shadow-[0_0_8px_#D4B07B]" />
              <span>{activeSlide.tag}</span>
            </div>
          </div>

          {/* Animated Display Heading - Two perfectly balanced lines */}
          <h1
            key={`title-${currentSlide}`}
            className="font-serif text-[2.5rem] xs:text-[2.85rem] sm:text-6xl md:text-7xl lg:text-[5.25rem] font-medium leading-[1.08] sm:leading-[1.04] tracking-[-0.02em] text-[#FAF9F6] animate-fadeInUp drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)]"
          >
            <span className="block text-[#FAF9F6]">{activeSlide.title}</span>
            <span className="block italic font-normal text-[#D4B07B] mt-1 sm:mt-1.5 drop-shadow-[0_2px_12px_rgba(0,0,0,0.7)]">
              {activeSlide.highlight}
            </span>
          </h1>

          {/* Animated Supporting Paragraph */}
          <p
            key={`desc-${currentSlide}`}
            className="text-sm sm:text-base md:text-lg text-[#E6EAF0] font-light leading-relaxed sm:leading-[1.7] max-w-2xl font-sans animate-fadeIn drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]"
          >
            {activeSlide.description}
          </p>

          {/* Two Interactive CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2 sm:pt-3">
            <Link
              to={activeSlide.ctaPrimary.path}
              className="inline-flex items-center justify-center gap-2.5 px-7 sm:px-8 py-3.5 sm:py-4 rounded-full text-xs font-bold uppercase tracking-widest text-[#0B1522] bg-[#FAF9F6] hover:bg-white transition-all duration-300 shadow-md hover:shadow-xl active:scale-[0.98] font-sans text-center group/btn"
            >
              <span>{activeSlide.ctaPrimary.text}</span>
              <ArrowRight className="w-4 h-4 text-[#9E7844] transition-transform duration-300 group-hover/btn:translate-x-1" />
            </Link>

            <Link
              to={activeSlide.ctaSecondary.path}
              className="inline-flex items-center justify-center gap-2.5 px-7 sm:px-8 py-3.5 sm:py-4 rounded-full text-xs font-bold uppercase tracking-widest text-[#FAF9F6] border border-white/40 hover:border-white hover:bg-white/10 transition-all duration-300 backdrop-blur-xs active:scale-[0.98] font-sans text-center"
            >
              <span>{activeSlide.ctaSecondary.text}</span>
            </Link>
          </div>
        </div>
      </Container>

      {/* Slider Controls: Arrow Buttons, 4 Indicators & Scroll Down */}
      <div className="relative z-30 pb-8 flex flex-col items-center justify-center gap-4">
        {/* Navigation Bar with Previous/Next Arrows & Interactive Dots */}
        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#142D45]/75 backdrop-blur-md border border-[#B18A58]/30 shadow-lg">
          <button
            type="button"
            onClick={goToPrev}
            aria-label="Previous slide"
            className="text-white/60 hover:text-white transition-colors cursor-pointer p-1 focus:outline-hidden"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-2 px-1">
            {HERO_SLIDES.map((slide, idx) => (
              <button
                key={slide.label}
                type="button"
                onClick={() => setCurrentSlide(idx)}
                aria-label={`Switch to slide ${idx + 1}: ${slide.label}`}
                className={`transition-all duration-300 rounded-full cursor-pointer focus:outline-hidden ${
                  idx === currentSlide
                    ? 'w-7 h-2 bg-[#D4B07B]'
                    : 'w-2 h-2 bg-white/40 hover:bg-white/80'
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={goToNext}
            aria-label="Next slide"
            className="text-white/60 hover:text-white transition-colors cursor-pointer p-1 focus:outline-hidden"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Scroll Down Indicator */}
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
          <ScrollReveal direction="up" distance={30} duration={750} className="lg:col-span-6 flex flex-col items-start space-y-6 text-left">
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
          </ScrollReveal>

          {/* Right Column: Large Architectural Photograph (Natural proportions, generous whitespace) */}
          <ScrollReveal direction="up" delay={150} distance={35} duration={800} className="lg:col-span-6">
            <div className="relative overflow-hidden rounded-none shadow-2xl border border-[#EAE6DF] dark:border-[#20272D] group">
              <SafeImage
                src="/images/about/about-landscape.webp"
                fallbackSrc="/images/intro-architecture.jpg"
                alt="Surveyed residential plots and developed land layout with natural surroundings"
                className="w-full h-[460px] sm:h-[540px] object-cover image-reveal"
              />
            </div>
          </ScrollReveal>
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
        <ScrollReveal direction="up" distance={25} duration={750} className="text-center max-w-4xl mx-auto space-y-6">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#B18A58] font-sans">
            OUR CREED
          </span>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-medium text-[#142D45] dark:text-[#FAF9F6] leading-[1.25] tracking-tight">
            “Every structure begins with a vision.{' '}
            <span className="text-[#B18A58] italic font-normal">
              Every lasting development begins with the right foundation.
            </span>”
          </h2>
        </ScrollReveal>
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
          <ScrollReveal direction="up" distance={30} duration={750} className="lg:col-span-5 flex flex-col items-start space-y-6 text-left lg:sticky lg:top-32 self-start">
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
          </ScrollReveal>

          {/* Right Column: Refined Vertical Numbered List */}
          <div className="lg:col-span-7 divide-y divide-[#EAE6DF] dark:divide-[#20272D]">
            {EXPERTISE_LIST.map((item, index) => (
              <ScrollReveal
                key={item.id}
                direction="up"
                delay={index * 80}
                distance={24}
                duration={700}
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
              </ScrollReveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

// SECTION 05 — FEATURED PROJECTS (Dominant Editorial Gallery with Interactive Category Filters)
export const DominantProjectsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'All',
    'Transportation Infrastructure',
    'Commercial Development',
    'Building Construction',
    'Civil Construction',
    'Road & Transportation',
  ];

  const filteredProjects =
    selectedCategory === 'All'
      ? FEATURED_PROJECTS
      : FEATURED_PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <section className="py-28 lg:py-36 bg-[#FAF9F6] dark:bg-[#0A121E] border-t border-[#EAE6DF] dark:border-[#1E293B]">
      <Container size="wide">
        <ScrollReveal direction="up" distance={25} duration={700} className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
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
        </ScrollReveal>

        {/* Project Category Filter Tabs */}
        <ScrollReveal direction="up" delay={80} distance={20} duration={600} className="mb-12">
          <div className="flex flex-wrap items-center gap-2 pb-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 font-sans cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#142D45] text-white dark:bg-[#D4B07B] dark:text-[#142D45] shadow-sm'
                    : 'bg-white dark:bg-[#101E2E] text-[#142D45] dark:text-[#E6EAF0] border border-[#EAE6DF] dark:border-[#20272D] hover:border-[#B18A58]/60'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Dynamic Project Cards Grid with Smooth Transition */}
        {filteredProjects.length === 0 ? (
          <div className="py-16 text-center text-[#777C80] dark:text-[#A0A6AC] font-sans">
            No projects found in this category.
          </div>
        ) : filteredProjects.length >= 4 && selectedCategory === 'All' ? (
          <>
            {/* Row 1: Dominant 65% Main Project Image + 35% Supporting Image */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-8">
              {/* Main 65% Feature */}
              <ScrollReveal direction="up" distance={30} duration={800} className="lg:col-span-8 group">
                <div className="relative overflow-hidden h-[440px] sm:h-[520px] shadow-xl">
                  <SafeImage
                    src={filteredProjects[0].image}
                    fallbackSrc={filteredProjects[0].image}
                    alt={filteredProjects[0].title}
                    containerClassName="absolute inset-0 w-full h-full"
                    className="w-full h-full object-cover image-reveal"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent z-10 pointer-events-none" />
                  <div className="absolute top-6 left-6 z-20">
                    <span className="px-3.5 py-1 text-[10px] font-bold tracking-[0.2em] uppercase bg-[#142D45]/90 text-white border border-[#B18A58]/40 font-sans">
                      {filteredProjects[0].category}
                    </span>
                  </div>
                  <div className="absolute bottom-8 left-8 right-8 text-white z-20">
                    <p className="text-xs text-[#D4B07B] uppercase tracking-widest mb-1.5 font-sans font-semibold">
                      {filteredProjects[0].location}
                    </p>
                    <h3 className="font-serif text-3xl sm:text-4xl font-medium mb-2 leading-snug">
                      {filteredProjects[0].title}
                    </h3>
                    <p className="text-sm text-gray-200 line-clamp-2 max-w-2xl font-light font-sans mb-4">
                      {filteredProjects[0].description}
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
              </ScrollReveal>

              {/* Supporting 35% Project */}
              <ScrollReveal direction="up" delay={120} distance={30} duration={800} className="lg:col-span-4 group">
                <div className="relative overflow-hidden h-[440px] sm:h-[520px] shadow-xl flex flex-col justify-end p-8 text-white">
                  <SafeImage
                    src={filteredProjects[1].image}
                    fallbackSrc={filteredProjects[1].image}
                    alt={filteredProjects[1].title}
                    containerClassName="absolute inset-0 w-full h-full"
                    className="w-full h-full object-cover image-reveal"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10 pointer-events-none" />
                  <div className="relative z-20">
                    <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#D4B07B] block mb-2 font-sans">
                      {filteredProjects[1].category}
                    </span>
                    <h3 className="font-serif text-2xl font-medium mb-2 leading-snug">
                      {filteredProjects[1].title}
                    </h3>
                    <p className="text-xs text-gray-300 line-clamp-3 font-light font-sans mb-4">
                      {filteredProjects[1].description}
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
              </ScrollReveal>
            </div>

            {/* Row 2: Secondary Editorial Pair */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <ScrollReveal direction="up" distance={30} duration={800} className="group relative overflow-hidden h-[340px] sm:h-[380px] p-8 text-white flex flex-col justify-end shadow-lg">
                <SafeImage
                  src={filteredProjects[2].image}
                  fallbackSrc={filteredProjects[2].image}
                  alt={filteredProjects[2].title}
                  containerClassName="absolute inset-0 w-full h-full"
                  className="w-full h-full object-cover image-reveal"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent z-10 pointer-events-none" />
                <div className="relative z-20">
                  <span className="text-[10px] font-bold tracking-widest text-[#D4B07B] uppercase block mb-1 font-sans">
                    {filteredProjects[2].category}
                  </span>
                  <h3 className="font-serif text-2xl font-medium mb-1">
                    {filteredProjects[2].title}
                  </h3>
                  <p className="text-xs text-gray-300 font-light font-sans line-clamp-2">
                    {filteredProjects[2].description}
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={120} distance={30} duration={800} className="group relative overflow-hidden h-[340px] sm:h-[380px] p-8 text-white flex flex-col justify-end shadow-lg">
                <SafeImage
                  src={filteredProjects[3].image}
                  fallbackSrc={filteredProjects[3].image}
                  alt={filteredProjects[3].title}
                  containerClassName="absolute inset-0 w-full h-full"
                  className="w-full h-full object-cover image-reveal"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent z-10 pointer-events-none" />
                <div className="relative z-20">
                  <span className="text-[10px] font-bold tracking-widest text-[#D4B07B] uppercase block mb-1 font-sans">
                    {filteredProjects[3].category}
                  </span>
                  <h3 className="font-serif text-2xl font-medium mb-1">
                    {filteredProjects[3].title}
                  </h3>
                  <p className="text-xs text-gray-300 font-light font-sans line-clamp-2">
                    {filteredProjects[3].description}
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </>
        ) : (
          /* Filtered Category Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, idx) => (
              <ScrollReveal
                key={project.id}
                direction="up"
                delay={idx * 80}
                distance={25}
                duration={750}
                className="group relative overflow-hidden h-[380px] p-8 text-white flex flex-col justify-end shadow-lg"
              >
                <SafeImage
                  src={project.image}
                  fallbackSrc={project.image}
                  alt={project.title}
                  containerClassName="absolute inset-0 w-full h-full"
                  className="w-full h-full object-cover image-reveal"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent z-10 pointer-events-none" />
                <div className="relative z-20">
                  <span className="text-[10px] font-bold tracking-widest text-[#D4B07B] uppercase block mb-1 font-sans">
                    {project.category}
                  </span>
                  <h3 className="font-serif text-2xl font-medium mb-1">
                    {project.title}
                  </h3>
                  <p className="text-xs text-gray-300 font-light font-sans line-clamp-2 mb-3">
                    {project.description}
                  </p>
                  <Link
                    to="/projects"
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#D4B07B] hover:text-white transition-colors font-sans"
                  >
                    <span>View Project</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        )}
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
          <ScrollReveal direction="up" distance={30} duration={800} className="lg:col-span-7 space-y-6">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#B18A58] font-sans">
              OUR COMMITMENT
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium leading-[1.08] text-[#FAF9F6]">
              Creating Infrastructure That Moves Communities Forward.
            </h2>
            <p className="text-base sm:text-lg text-gray-300 font-light leading-relaxed max-w-2xl font-sans">
              True development transcends immediate construction—it establishes the durable economic conduits, transit corridors, and institutional pillars upon which modern regional prosperity depends.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={150} distance={30} duration={800} className="lg:col-span-5">
            <div className="relative overflow-hidden border border-[#B18A58]/30 h-72 sm:h-80 shadow-2xl">
              <SafeImage
                src="/images/home/aerial-township.webp"
                fallbackSrc="/images/about/about-township.webp"
                alt="Panoramic view of developed residential plotted township with landscaped green parks"
                className="w-full h-full object-cover opacity-90"
              />
            </div>
          </ScrollReveal>
        </div>

        {/* 3 Principles as Large Editorial Text Blocks (Not Small Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pt-12 border-t border-white/15">
          {PHILOSOPHY_PRINCIPLES.map((principle, index) => (
            <ScrollReveal
              key={principle.number}
              direction="up"
              delay={index * 120}
              distance={25}
              duration={750}
              className="space-y-3"
            >
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
            </ScrollReveal>
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
        <ScrollReveal direction="up" distance={25} duration={700} className="max-w-2xl mb-16 text-left">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#B18A58] font-sans block mb-3">
            MARKET DIVERSITY
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium text-[#142D45] dark:text-[#FAF9F6] leading-tight">
            Industries We Serve
          </h2>
          <p className="text-base text-[#777C80] dark:text-[#A0A6AC] font-light mt-4 font-sans">
            Deploying domain-specific civil methodologies, precision structural design, and field management across all six vital sectors.
          </p>
        </ScrollReveal>

        {/* Row 1: Two Large Image-Led Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {INDUSTRIES_LIST.slice(0, 2).map((ind, index) => (
            <ScrollReveal
              key={ind.id}
              direction="up"
              delay={index * 120}
              distance={30}
              duration={750}
              className="group border border-[#EAE6DF] dark:border-[#20272D] overflow-hidden"
            >
              <div className="h-64 sm:h-80 overflow-hidden relative">
                <SafeImage
                  src={ind.image}
                  fallbackSrc={ind.image}
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
            </ScrollReveal>
          ))}
        </div>

        {/* Row 2: One Wide Landscape Image Item */}
        <ScrollReveal direction="up" distance={30} duration={800} className="mb-8">
          <div className="group border border-[#EAE6DF] dark:border-[#20272D] overflow-hidden grid grid-cols-1 lg:grid-cols-12 bg-[#FAF9F6] dark:bg-[#101E2E]">
            <div className="lg:col-span-7 h-72 sm:h-96 overflow-hidden relative">
              <SafeImage
                src={INDUSTRIES_LIST[2].image}
                fallbackSrc={INDUSTRIES_LIST[2].image}
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
        </ScrollReveal>

        {/* Row 3: Remaining 3 Categories (Transportation, Institutional, Public Infrastructure) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {INDUSTRIES_LIST.slice(3, 6).map((ind, index) => (
            <ScrollReveal
              key={ind.id}
              direction="up"
              delay={index * 100}
              distance={28}
              duration={750}
              className="group border border-[#EAE6DF] dark:border-[#20272D] overflow-hidden bg-[#FAF9F6] dark:bg-[#101E2E]"
            >
              <div className="h-56 overflow-hidden relative">
                <SafeImage
                  src={ind.image}
                  fallbackSrc={ind.image}
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
            </ScrollReveal>
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
          <ScrollReveal direction="up" distance={35} duration={800} className="lg:col-span-6">
            <div className="relative overflow-hidden shadow-2xl border border-[#EAE6DF] dark:border-[#20272D]">
              <SafeImage
                src="/images/operational-framework.jpg"
                fallbackSrc="/images/operational-framework.jpg"
                alt="Technical land survey, contour mapping, and residential layout planning"
                className="w-full h-[460px] sm:h-[540px] object-cover image-reveal"
              />
            </div>
          </ScrollReveal>

          {/* Right: Small Label, Large Heading, 3 Concise Principles, Explore Link */}
          <ScrollReveal direction="up" delay={150} distance={35} duration={850} className="lg:col-span-6 flex flex-col items-start space-y-6 text-left">
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
          </ScrollReveal>
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
        <ScrollReveal direction="up" distance={30} duration={800} className="text-center space-y-6 max-w-3xl mx-auto">
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

          <div className="pt-8 border-t border-white/10 text-xs text-gray-400 font-sans flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
            <span>Maheshpur, Near HDFC Bank</span>
            <span>•</span>
            <a
              href="mailto:arvindmauryavns5@gmail.com"
              className="hover:text-white transition-colors"
            >
              arvindmauryavns5@gmail.com
            </a>
            <span>•</span>
            <a
              href="tel:6306917991"
              className="hover:text-white transition-colors"
            >
              6306917991
            </a>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
};
