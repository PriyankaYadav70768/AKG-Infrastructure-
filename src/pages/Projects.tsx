import React, { useState } from 'react';
import { Container } from '../components/common/Container';
import { SafeImage } from '../components/common/SafeImage';
import { FEATURED_PROJECTS } from '../data/content';
import { Button } from '../components/common/Button';
import { MapPin, ArrowRight, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';

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
      {/* Large Page Heading & Hero */}
      <section className="relative h-[48vh] min-h-[380px] flex items-end pb-14 overflow-hidden bg-[#142D45] text-white">
        <SafeImage
          src="/editorial-hero.svg"
          fallbackSrc="/editorial-hero.svg"
          alt="AKG Infrastructure representative portfolio"
          className="w-full h-full object-cover opacity-85 absolute inset-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#142D45] via-[#142D45]/60 to-transparent" />
        <Container size="wide" className="relative z-10">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#D4B07B] block mb-3 font-sans">
            PORTFOLIO SHOWCASE
          </span>
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-medium text-[#FAF9F6] leading-[1.05]">
            Infrastructure &amp; Civil Works.
          </h1>
        </Container>
      </section>

      {/* Filter categories & Editorial Intro */}
      <section className="py-16 border-b border-[#EAE6DF] dark:border-[#1E293B]">
        <Container size="wide">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <p className="text-base text-[#777C80] dark:text-[#A0A6AC] font-light max-w-xl font-sans">
              Representative civil schemes illustrating structural execution, arterial transport links, and commercial framework delivery.
            </p>

            <div className="flex flex-wrap items-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-150 font-sans ${
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
        </Container>
      </section>

      {/* Editorial Project Gallery with Mixed Image Proportions */}
      <section className="py-24 lg:py-32">
        <Container size="wide">
          <div className="space-y-16 mb-24">
            {/* Project 1: Full-Width Prominent Feature */}
            {filteredProjects[0] && (
              <div className="relative overflow-hidden h-[460px] sm:h-[540px] shadow-2xl group border border-[#EAE6DF] dark:border-[#20272D]">
                <SafeImage
                  src={filteredProjects[0].image}
                  fallbackSrc="/editorial-hero.svg"
                  alt={filteredProjects[0].title}
                  className="w-full h-full object-cover image-reveal"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                <div className="absolute top-6 left-6">
                  <span className="px-4 py-1.5 text-[10px] font-bold tracking-[0.2em] uppercase bg-[#142D45]/90 text-white border border-[#B18A58]/50 font-sans">
                    {filteredProjects[0].category}
                  </span>
                </div>
                <div className="absolute bottom-8 left-8 right-8 text-white max-w-3xl">
                  <div className="flex items-center gap-2 text-xs text-[#D4B07B] mb-2 font-sans">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{filteredProjects[0].location}</span>
                    <span>•</span>
                    <span>{filteredProjects[0].status}</span>
                  </div>
                  <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium mb-3 leading-snug">
                    {filteredProjects[0].title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-200 font-light font-sans mb-4 leading-relaxed">
                    {filteredProjects[0].description}
                  </p>
                  <p className="text-xs text-[#D4B07B] uppercase tracking-widest font-sans font-semibold">
                    Scope: {filteredProjects[0].scope}
                  </p>
                </div>
              </div>
            )}

            {/* Sub-gallery of projects in asymmetric 2-column & 3-column pairs */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.slice(1).map((project) => (
                <div
                  key={project.id}
                  className="border border-[#EAE6DF] dark:border-[#20272D] bg-white dark:bg-[#0F172A] shadow-xs flex flex-col justify-between group overflow-hidden"
                >
                  <div className="relative h-64 overflow-hidden">
                    <SafeImage
                      src={project.image}
                      fallbackSrc="/about-operations.svg"
                      alt={project.title}
                      className="w-full h-full object-cover image-reveal"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="text-[10px] font-bold tracking-widest text-[#D4B07B] uppercase bg-black/50 px-3 py-1 font-sans border border-white/10">
                        {project.category}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <div className="flex items-center gap-1.5 text-xs text-[#D4B07B] mb-1 font-sans">
                        <MapPin className="w-3 h-3" />
                        <span>{project.location}</span>
                      </div>
                      <h4 className="font-serif text-xl sm:text-2xl font-medium leading-snug">
                        {project.title}
                      </h4>
                    </div>
                  </div>

                  <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                    <p className="text-xs sm:text-sm text-[#777C80] dark:text-[#A0A6AC] font-light leading-relaxed mb-6 font-sans">
                      {project.description}
                    </p>

                    <div className="pt-4 border-t border-[#EAE6DF] dark:border-[#20272D] flex items-center justify-between text-xs font-sans">
                      <span className="text-[#142D45] dark:text-[#D4B07B] font-semibold">{project.status}</span>
                      <Link to="/contact" className="text-[#B18A58] hover:text-[#142D45] dark:hover:text-white font-bold uppercase tracking-wider">
                        Inquire &rarr;
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};
