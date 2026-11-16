import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { MapPin, ArrowRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SafeImage } from '../common/SafeImage';
import { ProjectItem } from '../../data/content';

interface HorizontalProjectsGalleryProps {
  projects: ProjectItem[];
}

export const HorizontalProjectsGallery: React.FC<HorizontalProjectsGalleryProps> = ({ projects }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Link vertical scroll within container to horizontal translation
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Calculate horizontal translation percentage based on number of projects
  // When scrolling down, translate from 0% to negative percentage so cards glide right-to-left
  const totalCards = projects.length;
  // Dynamic offset calculation based on card widths and gaps
  const rawX = useTransform(scrollYProgress, [0, 1], ['0%', `-${Math.max(0, (totalCards - 1) * 72)}%`]);
  const smoothX = useSpring(rawX, { stiffness: 90, damping: 25, restDelta: 0.001 });

  return (
    <div className="relative w-full">
      {/* DESKTOP & TABLET: Scroll-driven Horizontal Animated Gallery */}
      <div
        ref={containerRef}
        className="hidden md:block relative"
        style={{ height: `${Math.max(250, totalCards * 75)}vh` }}
      >
        <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden bg-[#FAF9F6] dark:bg-[#0A121E]">
          {/* Header indicator and progress bar */}
          <div className="w-full px-6 sm:px-10 lg:px-16 mb-6 flex items-center justify-between z-20">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#B18A58] animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#9E7844] font-sans">
                FEATURED CIVIL WORKS &bull; SCROLL TO EXPLORE
              </span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-36 h-1 bg-[#E8E6E1] dark:bg-[#1E293B] rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-[#B18A58]"
                  style={{ scaleX: scrollYProgress, transformOrigin: '0%' }}
                />
              </div>
              <span className="text-xs font-mono font-semibold text-[#667080] dark:text-[#94A3B8]">
                {totalCards} Projects
              </span>
            </div>
          </div>

          {/* Horizontally moving track */}
          <div className="w-full overflow-hidden">
            <motion.div
              style={{ x: smoothX }}
              className="flex items-stretch gap-8 pl-6 sm:pl-10 lg:pl-16 pr-24 will-change-transform"
            >
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  className="w-[72vw] max-w-[620px] shrink-0 group flex flex-col rounded-2xl overflow-hidden bg-white dark:bg-[#0F172A] border border-[#E8E6E1] dark:border-[#1E293B] shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  {/* Top: Large Project Image with Dark Cinematic Overlay */}
                  <div className="relative h-[320px] lg:h-[360px] overflow-hidden">
                    <SafeImage
                      src={project.image}
                      fallbackSrc={project.image}
                      alt={project.title}
                      containerClassName="w-full h-full"
                      className="w-full h-full object-cover object-center image-reveal group-hover:scale-105 transition-transform duration-700 ease-out"
                    />

                    {/* Gradient overlays */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent pointer-events-none" />

                    {/* Category badge */}
                    <div className="absolute top-4 left-4 z-10">
                      <span className="px-3.5 py-1 text-[10px] font-bold tracking-[0.2em] uppercase bg-[#142D45]/90 text-white border border-[#B18A58]/50 rounded-full font-sans shadow-sm">
                        {project.category}
                      </span>
                    </div>

                    {/* Bottom overlay with location & title */}
                    <div className="absolute bottom-4 left-5 right-5 text-white pointer-events-none z-10">
                      <div className="flex items-center gap-2 text-xs text-[#D4B07B] mb-1 font-sans">
                        <MapPin className="w-3.5 h-3.5 shrink-0" />
                        <span>{project.location}</span>
                      </div>
                      <h3 className="font-serif text-2xl lg:text-3xl font-medium leading-snug drop-shadow-md">
                        {project.title}
                      </h3>
                    </div>
                  </div>

                  {/* Bottom: Preserved Project Description, Scope, Status and Action */}
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <p className="text-xs sm:text-sm text-[#667080] dark:text-[#94A3B8] font-light leading-relaxed font-sans line-clamp-3">
                      {project.description}
                    </p>

                    <div className="pt-4 border-t border-[#E8E6E1] dark:border-[#1E293B] flex items-center justify-between text-xs font-sans">
                      <div className="flex flex-col">
                        <span className="text-[10px] uppercase tracking-wider text-[#9E7844] font-semibold">
                          Status
                        </span>
                        <span className="text-[#142D45] dark:text-[#D4B07B] font-bold">
                          {project.status}
                        </span>
                      </div>

                      <Link
                        to="/contact"
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider text-[#142D45] dark:text-white bg-[#FAF9F6] dark:bg-[#1E293B] hover:bg-[#142D45] hover:text-white dark:hover:bg-[#B18A58] border border-[#E8E6E1] dark:border-[#2D3748] transition-all group/btn"
                      >
                        <span>INQUIRE</span>
                        <ArrowRight className="w-3.5 h-3.5 text-[#B18A58] group-hover/btn:translate-x-0.5 group-hover/btn:text-white transition-all" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* MOBILE: Smooth horizontal snap swipe gallery for optimal mobile usability */}
      <div className="block md:hidden w-full px-4 py-8">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#B18A58]" />
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#9E7844]">
              SWIPE PROJECTS
            </span>
          </div>
          <span className="text-[11px] font-mono text-[#667080] dark:text-[#94A3B8]">
            {totalCards} Projects
          </span>
        </div>

        <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-none">
          {projects.map((project) => (
            <div
              key={project.id}
              className="w-[85vw] max-w-[340px] shrink-0 snap-center flex flex-col rounded-2xl overflow-hidden bg-white dark:bg-[#0F172A] border border-[#E8E6E1] dark:border-[#1E293B] shadow-md"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <SafeImage
                  src={project.image}
                  fallbackSrc={project.image}
                  alt={project.title}
                  containerClassName="w-full h-full"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 text-[9px] font-bold tracking-wider uppercase bg-[#142D45]/90 text-white rounded-full border border-white/20">
                    {project.category}
                  </span>
                </div>
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <div className="flex items-center gap-1 text-[11px] text-[#D4B07B] mb-0.5">
                    <MapPin className="w-3 h-3" />
                    <span>{project.location}</span>
                  </div>
                  <h4 className="font-serif text-lg font-medium leading-snug line-clamp-2">
                    {project.title}
                  </h4>
                </div>
              </div>

              {/* Description & Action */}
              <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                <p className="text-xs text-[#667080] dark:text-[#94A3B8] font-light leading-relaxed line-clamp-3">
                  {project.description}
                </p>
                <div className="pt-3 border-t border-[#E8E6E1] dark:border-[#1E293B] flex items-center justify-between text-xs">
                  <span className="text-[#142D45] dark:text-[#D4B07B] font-semibold text-[11px]">
                    {project.status}
                  </span>
                  <Link
                    to="/contact"
                    className="text-[#B18A58] hover:underline font-bold uppercase tracking-wider text-[11px] flex items-center gap-1"
                  >
                    <span>Inquire</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
