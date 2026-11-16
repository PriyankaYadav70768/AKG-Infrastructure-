import React, { useState } from 'react';
import { Container } from '../components/common/Container';
import { SafeImage } from '../components/common/SafeImage';
import { ScrollReveal } from '../components/common/ScrollReveal';
import { FEATURED_PROJECTS } from '../data/content';
import { Button } from '../components/common/Button';
import { MapPin, ArrowRight, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';
import { HorizontalProjectsGallery } from '../components/projects/HorizontalProjectsGallery';

export const Projects: React.FC = () => {
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
    <div className="bg-[#FAF9F6] dark:bg-[#0A121E]">
      {/* Large Page Heading & Hero - Full Section Coverage (Unchanged Hero Background) */}
      <section className="relative w-full h-[50vh] sm:h-[55vh] lg:h-[60vh] min-h-[400px] sm:min-h-[440px] lg:min-h-[460px] flex items-end pb-10 sm:pb-14 lg:pb-16 overflow-hidden bg-[#0A121E] text-white">
        {/* Full-width and full-height background image */}
        <div className="absolute inset-0 w-full h-full z-0">
          <SafeImage
            src="/images/home/aerial-township.webp"
            fallbackSrc="/images/projects-hero.jpg"
            alt="Aerial view of plotted land developments and planned residential enclaves"
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
              PORTFOLIO SHOWCASE
            </span>
            <h1 className="font-serif text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-[#FAF9F6] leading-[1.08] sm:leading-[1.05] drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] break-words">
              Infrastructure &amp; Civil Works.
            </h1>
          </ScrollReveal>
        </Container>
      </section>

      {/* Filter categories & Editorial Intro */}
      <section className="py-12 sm:py-16 border-b border-[#EAE6DF] dark:border-[#1E293B]">
        <Container size="wide">
          <ScrollReveal direction="up" distance={20} duration={700}>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <p className="text-sm sm:text-base text-[#777C80] dark:text-[#A0A6AC] font-light max-w-xl font-sans">
                Representative civil schemes illustrating structural execution, arterial transport links, and commercial framework delivery.
              </p>

              <div className="flex flex-wrap items-center gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-wider transition-all duration-200 font-sans ${
                      selectedCategory === cat
                        ? 'bg-[#142D45] dark:bg-[#1E3A5F] text-white shadow-xs'
                        : 'bg-white dark:bg-[#101E2E] text-[#777C80] dark:text-[#A0A6AC] hover:text-[#142D45] dark:hover:text-white border border-[#EAE6DF] dark:border-[#20272D]'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* REFERENCE-STYLE HORIZONTAL SCROLLING PROJECT GALLERY ANIMATION */}
      <section className="py-12 sm:py-16">
        <HorizontalProjectsGallery projects={filteredProjects} />
      </section>
    </div>
  );
};
