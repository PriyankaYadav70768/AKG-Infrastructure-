import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Container } from '../components/common/Container';
import { SafeImage } from '../components/common/SafeImage';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { ScrollReveal } from '../components/common/ScrollReveal';
import { FEATURED_PROJECTS } from '../data/content';
import { MapPin, Calendar, Layers, ShieldCheck, ArrowRight, ArrowLeft } from 'lucide-react';

export const ProjectDetailPage: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const project = FEATURED_PROJECTS.find((p) => p.id === projectId);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  const otherProjects = FEATURED_PROJECTS.filter((p) => p.id !== projectId).slice(0, 3);

  return (
    <div className="bg-[#FAF9F6] dark:bg-[#0A121E]">
      <Breadcrumbs
        items={[
          { label: 'Projects', path: '/projects' },
          { label: project.title }
        ]}
      />

      {/* Hero Section */}
      <section className="relative w-full h-[55vh] sm:h-[60vh] min-h-[420px] flex items-end pb-12 sm:pb-16 overflow-hidden bg-[#0A121E] text-white">
        <div className="absolute inset-0 w-full h-full z-0">
          <SafeImage
            src={project.image}
            fallbackSrc="/images/projects-hero.jpg"
            alt={project.title}
            containerClassName="w-full h-full"
            className="w-full h-full object-cover object-center"
          />
        </div>

        <div className="absolute inset-0 bg-[#0A1828]/60 z-[1] pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1828]/95 via-transparent to-[#0A1828]/40 z-[1] pointer-events-none" />

        <Container size="wide" className="relative z-10 w-full">
          <ScrollReveal direction="up" distance={25} duration={750}>
            <div className="flex flex-wrap items-center gap-3 mb-3">
              <span className="px-3.5 py-1 text-[10px] font-bold tracking-[0.2em] uppercase bg-[#142D45]/90 text-white border border-[#B18A58]/50 rounded-full font-sans">
                {project.category}
              </span>
              <span className="text-xs text-[#D4B07B] font-semibold flex items-center gap-1.5 font-sans">
                <MapPin className="w-3.5 h-3.5" />
                <span>{project.location}</span>
              </span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-medium text-[#FAF9F6] leading-[1.05] drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] max-w-4xl">
              {project.title}
            </h1>
          </ScrollReveal>
        </Container>
      </section>

      {/* Key Project Meta Bar */}
      <div className="bg-white dark:bg-[#0F172A] border-b border-[#E8E6E1] dark:border-[#1E293B] py-6 shadow-xs">
        <Container size="wide">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 font-sans">
            <div>
              <span className="text-[10px] uppercase font-bold text-[#9E7844] tracking-wider block">
                Status
              </span>
              <span className="text-sm font-semibold text-[#132338] dark:text-[#FAF9F6]">
                {project.status}
              </span>
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold text-[#9E7844] tracking-wider block">
                Category
              </span>
              <span className="text-sm font-semibold text-[#132338] dark:text-[#FAF9F6]">
                {project.category}
              </span>
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold text-[#9E7844] tracking-wider block">
                Execution Stage
              </span>
              <span className="text-sm font-semibold text-[#132338] dark:text-[#FAF9F6]">
                {project.year || 'Active'}
              </span>
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold text-[#9E7844] tracking-wider block">
                Key Highlight
              </span>
              <span className="text-sm font-semibold text-[#132338] dark:text-[#FAF9F6]">
                {project.highlight || 'Field Coordination'}
              </span>
            </div>
          </div>
        </Container>
      </div>

      {/* Main Content */}
      <section className="py-16 sm:py-24">
        <Container size="wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-8 space-y-10">
              {/* Project Description */}
              <ScrollReveal direction="up" distance={20} duration={700}>
                <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-[#0F172A] border border-[#E8E6E1] dark:border-[#1E293B] shadow-xs space-y-5">
                  <h2 className="font-serif text-2xl sm:text-3xl font-medium text-[#132338] dark:text-[#FAF9F6]">
                    Project Overview &amp; Civil Context
                  </h2>
                  <p className="text-base text-[#667080] dark:text-[#94A3B8] font-light leading-relaxed font-sans">
                    {project.description}
                  </p>
                  <p className="text-sm text-[#667080] dark:text-[#94A3B8] font-light leading-relaxed font-sans">
                    Under the direct technical supervision of AKG Infrastructure, this scheme represents strategic execution across land stabilization, civil drainage corridors, and arterial accessibility designed for generational service life.
                  </p>
                </div>
              </ScrollReveal>

              {/* Technical Scope Breakdown */}
              <ScrollReveal direction="up" distance={20} duration={700}>
                <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-[#0F172A] border border-[#E8E6E1] dark:border-[#1E293B] shadow-xs space-y-6">
                  <h3 className="font-serif text-2xl font-medium text-[#132338] dark:text-[#FAF9F6]">
                    Delivered Engineering Scope
                  </h3>
                  <div className="p-5 rounded-2xl bg-[#FAF9F6] dark:bg-[#101E2E] border border-[#E8E6E1] dark:border-[#20272D] flex items-center gap-4">
                    <Layers className="w-6 h-6 text-[#9E7844] shrink-0" />
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#9E7844] block">
                        Verified Work Scope
                      </span>
                      <span className="text-sm sm:text-base font-semibold text-[#132338] dark:text-[#FAF9F6]">
                        {project.scope}
                      </span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Verified Visual Gallery for Project */}
              <ScrollReveal direction="up" distance={20} duration={700}>
                <div className="space-y-6">
                  <h3 className="font-serif text-2xl font-medium text-[#132338] dark:text-[#FAF9F6]">
                    Site Photography &amp; Visual Survey
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="h-64 rounded-2xl overflow-hidden border border-[#E8E6E1] dark:border-[#20272D] shadow-sm">
                      <SafeImage
                        src={project.image}
                        fallbackSrc={project.image}
                        alt={`${project.title} primary view`}
                        className="w-full h-full object-cover image-reveal"
                      />
                    </div>
                    <div className="h-64 rounded-2xl overflow-hidden border border-[#E8E6E1] dark:border-[#20272D] shadow-sm">
                      <SafeImage
                        src="/images/home/aerial-township.webp"
                        fallbackSrc="/images/home/hero-township.webp"
                        alt={`${project.title} layout planning`}
                        className="w-full h-full object-cover image-reveal"
                      />
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
              <div className="p-6 rounded-3xl bg-white dark:bg-[#0F172A] border border-[#E8E6E1] dark:border-[#1E293B] shadow-xs space-y-4">
                <span className="text-xs font-bold uppercase tracking-widest text-[#9E7844] block font-sans">
                  INQUIRE ON THIS SCHEME
                </span>
                <p className="text-xs text-[#667080] dark:text-[#94A3B8] leading-relaxed">
                  Connect with our project desk regarding statutory approvals, possession dates, or civil specifications.
                </p>
                <Link
                  to="/contact"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-full text-xs font-bold uppercase tracking-wider text-[#142D45] bg-[#FAF9F6] hover:bg-[#142D45] hover:text-white border border-[#142D45]/20 dark:border-white/20 transition-all font-sans"
                >
                  <span>REQUEST BRIEFING</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#9E7844]" />
                </Link>
              </div>

              {/* Other Projects */}
              <div className="p-6 rounded-3xl bg-white dark:bg-[#0F172A] border border-[#E8E6E1] dark:border-[#1E293B] shadow-xs">
                <span className="text-xs font-bold uppercase tracking-widest text-[#9E7844] block mb-4 font-sans">
                  MORE FEATURED WORKS
                </span>
                <div className="space-y-4">
                  {otherProjects.map((op) => (
                    <Link
                      key={op.id}
                      to={`/projects/${op.id}`}
                      className="group flex items-center gap-3.5"
                    >
                      <div className="w-14 h-14 rounded-xl overflow-hidden shrink-0 border border-[#E8E6E1] dark:border-[#20272D]">
                        <SafeImage
                          src={op.image}
                          fallbackSrc={op.image}
                          alt={op.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="text-[10px] uppercase font-bold text-[#9E7844] block truncate">
                          {op.category}
                        </span>
                        <h5 className="font-serif text-xs font-medium text-[#132338] dark:text-[#FAF9F6] truncate group-hover:text-[#B18A58] transition-colors">
                          {op.title}
                        </h5>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};
