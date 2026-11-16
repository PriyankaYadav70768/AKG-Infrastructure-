import React from 'react';
import { Container } from '../components/common/Container';
import { SafeImage } from '../components/common/SafeImage';
import { ScrollReveal } from '../components/common/ScrollReveal';
import {
  ArrowRight,
  ShieldCheck,
  Award,
  Users,
  Compass,
  CheckCircle2,
  FileCheck,
  Target,
  Eye,
  Building2,
  MapPin,
  Ruler,
  Layers,
  HeartHandshake
} from 'lucide-react';
import { Link } from 'react-router-dom';

export const About: React.FC = () => {
  return (
    <div className="bg-[#FAF9F6] dark:bg-[#0A121E]">
      {/* 1. Large Photographic Page Hero */}
      <section className="relative h-[60vh] min-h-[480px] flex items-end pb-16 overflow-hidden bg-[#101E2E] text-white">
        <SafeImage
          src="/images/about/about-township.webp"
          fallbackSrc="/images/about-hero.jpg"
          alt="Planned residential land development and layout mapping in rural Uttar Pradesh"
          containerClassName="absolute inset-0 w-full h-full"
          className="w-full h-full object-cover object-center transform scale-105 transition-transform duration-1000 ease-out"
        />
        {/* Layered cinematic gradients to guarantee both rich image visibility and text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#101E2E] via-[#101E2E]/50 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#101E2E]/85 via-[#101E2E]/40 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-black/20 pointer-events-none" />

        <Container size="wide" className="relative z-10">
          <ScrollReveal direction="up" distance={25} duration={750}>
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#D4B07B] block mb-3 font-sans drop-shadow-sm">
              ABOUT AKG INFRASTRUCTURE
            </span>
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-medium text-[#FAF9F6] leading-[1.05] max-w-4xl drop-shadow-md">
              Rooted in the Land. Built for Generations.
            </h1>
          </ScrollReveal>
        </Container>
      </section>

      {/* 2. Company Overview & Who We Are */}
      <section className="py-24 lg:py-32">
        <Container size="wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <ScrollReveal direction="up" distance={30} duration={800} className="lg:col-span-6 space-y-6 text-left">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#B18A58] font-sans">
                WHO WE ARE
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl font-medium text-[#142D45] dark:text-[#FAF9F6] leading-[1.1] tracking-tight">
                Balancing Ground-Level Insight with Structured Engineering.
              </h2>
              <p className="text-base sm:text-lg text-[#777C80] dark:text-[#A0A6AC] font-light leading-relaxed font-sans">
                AKG Infrastructure is an integrated land development, residential plotting, and civil infrastructure firm headquartered in Uttar Pradesh. We specialize in transforming raw agricultural and rural acreage into thoughtfully planned, legally demarcated, and accessible residential layouts.
              </p>
              <p className="text-sm sm:text-base text-[#777C80] dark:text-[#A0A6AC] font-light leading-relaxed font-sans">
                Our multidisciplinary teams unite civil engineers, structural specialists, land surveyors, and on-site supervisors to navigate complex statutory clearances, physical contours, and boundary demarcations with uncompromised integrity. By ensuring transparent documentation and sustainable internal road connectivity, we provide families and investors with land opportunities designed for long-term security.
              </p>
              <div className="pt-2 flex items-center gap-6">
                <div>
                  <span className="block font-serif text-3xl font-medium text-[#142D45] dark:text-[#FAF9F6]">100%</span>
                  <span className="text-xs text-[#777C80] dark:text-[#A0A6AC] font-sans">Clear Title Verification</span>
                </div>
                <div className="h-10 w-[1px] bg-[#EAE6DF] dark:bg-[#20272D]" />
                <div>
                  <span className="block font-serif text-3xl font-medium text-[#142D45] dark:text-[#FAF9F6]">Zero</span>
                  <span className="text-xs text-[#777C80] dark:text-[#A0A6AC] font-sans">Boundary Ambiguity</span>
                </div>
                <div className="h-10 w-[1px] bg-[#EAE6DF] dark:bg-[#20272D]" />
                <div>
                  <span className="block font-serif text-3xl font-medium text-[#142D45] dark:text-[#FAF9F6]">End-to-End</span>
                  <span className="text-xs text-[#777C80] dark:text-[#A0A6AC] font-sans">Survey &amp; Development</span>
                </div>
              </div>
            </ScrollReveal>

            {/* Architectural / Land Photograph */}
            <ScrollReveal direction="up" delay={150} distance={35} duration={850} className="lg:col-span-6">
              <div className="relative overflow-hidden shadow-2xl border border-[#EAE6DF] dark:border-[#20272D] group">
                <SafeImage
                  src="/images/about/about-landscape.webp"
                  fallbackSrc="/images/intro-architecture.jpg"
                  alt="Demarcated residential land layout and plotted development"
                  className="w-full h-[460px] sm:h-[520px] object-cover image-reveal"
                />
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* 3. Mission & Vision — Two-Column Balanced Layout */}
      <section className="py-20 lg:py-28 bg-[#FFFFFF] dark:bg-[#0F172A] border-y border-[#EAE6DF] dark:border-[#1E293B]">
        <Container size="wide">
          <ScrollReveal direction="up" distance={25} duration={700} className="max-w-2xl mb-16 text-left">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#B18A58] font-sans block mb-3">
              PURPOSE &amp; ASPIRATION
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-medium text-[#142D45] dark:text-[#FAF9F6] leading-tight">
              Our Mission &amp; Vision
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Mission Card */}
            <ScrollReveal direction="up" distance={30} duration={800} className="p-8 sm:p-12 bg-[#FAF9F6] dark:bg-[#142D45]/40 border border-[#EAE6DF] dark:border-[#20272D] flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-full bg-[#142D45] text-[#D4B07B] flex items-center justify-center mb-6">
                  <Target className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#B18A58] font-sans block mb-2">
                  OUR MISSION
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#142D45] dark:text-[#FAF9F6] mb-4">
                  Democratizing Secure Land Ownership Through Transparent Engineering
                </h3>
                <p className="text-sm sm:text-base text-[#777C80] dark:text-[#A0A6AC] font-light leading-relaxed font-sans mb-6">
                  To deliver thoughtfully planned residential plots and infrastructure developments grounded in uncompromising title transparency, accurate ground demarcation, and responsible environmental stewardship—enabling individuals and families to build their homes upon solid legal and physical ground.
                </p>
              </div>
              <ul className="space-y-2.5 pt-4 border-t border-[#EAE6DF] dark:border-[#20272D] text-xs sm:text-sm text-[#142D45] dark:text-[#E6EAF0] font-sans">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#B18A58] shrink-0" />
                  <span>Rigorous verification of registry and statutory clearances</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#B18A58] shrink-0" />
                  <span>Physical boundary marking with corner stones and brick courses</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#B18A58] shrink-0" />
                  <span>Integrated internal road grading and drainage planning</span>
                </li>
              </ul>
            </ScrollReveal>

            {/* Vision Card */}
            <ScrollReveal direction="up" delay={120} distance={30} duration={800} className="p-8 sm:p-12 bg-[#FAF9F6] dark:bg-[#142D45]/40 border border-[#EAE6DF] dark:border-[#20272D] flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-full bg-[#142D45] text-[#D4B07B] flex items-center justify-center mb-6">
                  <Eye className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#B18A58] font-sans block mb-2">
                  OUR VISION
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#142D45] dark:text-[#FAF9F6] mb-4">
                  Setting the Regional Benchmark for Planned Rural &amp; Suburban Communities
                </h3>
                <p className="text-sm sm:text-base text-[#777C80] dark:text-[#A0A6AC] font-light leading-relaxed font-sans mb-6">
                  To be Uttar Pradesh’s most trusted real-estate development partner, recognized for pioneering sustainable plotted colonies that seamlessly connect serene rural surroundings with modern civic conveniences, durable transit links, and thriving neighborhood ecosystems.
                </p>
              </div>
              <ul className="space-y-2.5 pt-4 border-t border-[#EAE6DF] dark:border-[#20272D] text-xs sm:text-sm text-[#142D45] dark:text-[#E6EAF0] font-sans">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#B18A58] shrink-0" />
                  <span>Fostering self-sustaining residential communities with lasting value</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#B18A58] shrink-0" />
                  <span>Promoting planned regional growth that respects local agricultural ecology</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#B18A58] shrink-0" />
                  <span>Expanding accessible property opportunities across high-potential corridors</span>
                </li>
              </ul>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* 4. Our Core Values — 5 Strategic Cards */}
      <section className="py-24 lg:py-32">
        <Container size="wide">
          <ScrollReveal direction="up" distance={25} duration={700} className="max-w-2xl mb-16 text-left">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#B18A58] font-sans block mb-3">
              WHAT GUIDES US
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-medium text-[#142D45] dark:text-[#FAF9F6] leading-tight">
              Our Core Values
            </h2>
            <p className="text-base text-[#777C80] dark:text-[#A0A6AC] font-light mt-3 font-sans">
              Every project consultation, boundary measurement, and site handover is governed by five non-negotiable principles.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Value 1 */}
            <ScrollReveal direction="up" delay={50} distance={25} duration={750} className="p-8 bg-[#FAF9F6] dark:bg-[#101E2E] border border-[#EAE6DF] dark:border-[#20272D] space-y-4 hover:border-[#B18A58]/60 transition-colors">
              <span className="font-serif text-3xl font-light text-[#B18A58]">01</span>
              <h3 className="font-serif text-2xl font-medium text-[#142D45] dark:text-[#FAF9F6]">
                Absolute Transparency
              </h3>
              <p className="text-xs uppercase tracking-widest text-[#B18A58] font-semibold font-sans">Clear Deeds &amp; Direct Dealings</p>
              <p className="text-sm text-[#777C80] dark:text-[#A0A6AC] font-light leading-relaxed font-sans">
                Every land parcel in our portfolio undergoes complete title scrutiny. We provide clients with complete statutory verification, eliminating hidden clauses or ambiguous documentation.
              </p>
            </ScrollReveal>

            {/* Value 2 */}
            <ScrollReveal direction="up" delay={120} distance={25} duration={750} className="p-8 bg-[#FAF9F6] dark:bg-[#101E2E] border border-[#EAE6DF] dark:border-[#20272D] space-y-4 hover:border-[#B18A58]/60 transition-colors">
              <span className="font-serif text-3xl font-light text-[#B18A58]">02</span>
              <h3 className="font-serif text-2xl font-medium text-[#142D45] dark:text-[#FAF9F6]">
                Precision &amp; Quality
              </h3>
              <p className="text-xs uppercase tracking-widest text-[#B18A58] font-semibold font-sans">Accurate Engineering Demarcation</p>
              <p className="text-sm text-[#777C80] dark:text-[#A0A6AC] font-light leading-relaxed font-sans">
                From total station topographic surveys to permanent corner pillars and solid brick boundary demarcations, we treat land layout as a disciplined science.
              </p>
            </ScrollReveal>

            {/* Value 3 */}
            <ScrollReveal direction="up" delay={190} distance={25} duration={750} className="p-8 bg-[#FAF9F6] dark:bg-[#101E2E] border border-[#EAE6DF] dark:border-[#20272D] space-y-4 hover:border-[#B18A58]/60 transition-colors">
              <span className="font-serif text-3xl font-light text-[#B18A58]">03</span>
              <h3 className="font-serif text-2xl font-medium text-[#142D45] dark:text-[#FAF9F6]">
                Uncompromising Trust
              </h3>
              <p className="text-xs uppercase tracking-widest text-[#B18A58] font-semibold font-sans">Relationships Over Transactions</p>
              <p className="text-sm text-[#777C80] dark:text-[#A0A6AC] font-light leading-relaxed font-sans">
                Trust is earned through accountability. We maintain transparent pricing, honest site guidance, and timely delivery of project milestones for every stakeholder.
              </p>
            </ScrollReveal>

            {/* Value 4 */}
            <ScrollReveal direction="up" delay={260} distance={25} duration={750} className="p-8 bg-[#FAF9F6] dark:bg-[#101E2E] border border-[#EAE6DF] dark:border-[#20272D] space-y-4 hover:border-[#B18A58]/60 transition-colors">
              <span className="font-serif text-3xl font-light text-[#B18A58]">04</span>
              <h3 className="font-serif text-2xl font-medium text-[#142D45] dark:text-[#FAF9F6]">
                Reliability in Execution
              </h3>
              <p className="text-xs uppercase tracking-widest text-[#B18A58] font-semibold font-sans">Dependable Road &amp; Utility Work</p>
              <p className="text-sm text-[#777C80] dark:text-[#A0A6AC] font-light leading-relaxed font-sans">
                We follow through on all development commitments—delivering robust black asphalt and gravel roads, stormwater drainage planning, and clean access rights.
              </p>
            </ScrollReveal>

            {/* Value 5 */}
            <ScrollReveal direction="up" delay={330} distance={25} duration={750} className="p-8 bg-[#FAF9F6] dark:bg-[#101E2E] border border-[#EAE6DF] dark:border-[#20272D] space-y-4 hover:border-[#B18A58]/60 transition-colors sm:col-span-2 lg:col-span-2">
              <span className="font-serif text-3xl font-light text-[#B18A58]">05</span>
              <h3 className="font-serif text-2xl font-medium text-[#142D45] dark:text-[#FAF9F6]">
                Customer Satisfaction &amp; Community Stewardship
              </h3>
              <p className="text-xs uppercase tracking-widest text-[#B18A58] font-semibold font-sans">Enduring Value for Families</p>
              <p className="text-sm text-[#777C80] dark:text-[#A0A6AC] font-light leading-relaxed font-sans max-w-3xl">
                Our ultimate validation is a family building their dream home on our plots with peace of mind. We maintain ongoing support throughout site registration, possession, and development planning.
              </p>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* 5. Our Areas of Expertise — Detailed Information */}
      <section className="py-24 lg:py-32 bg-[#FFFFFF] dark:bg-[#0F172A] border-t border-[#EAE6DF] dark:border-[#1E293B]">
        <Container size="wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            <ScrollReveal direction="up" distance={30} duration={750} className="lg:col-span-5 flex flex-col items-start space-y-6 text-left lg:sticky lg:top-32 self-start">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#B18A58] font-sans">
                CORE CAPABILITIES
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium text-[#142D45] dark:text-[#FAF9F6] leading-tight">
                Our Expertise
              </h2>
              <p className="text-base sm:text-lg text-[#777C80] dark:text-[#A0A6AC] font-light leading-relaxed font-sans">
                A disciplined engineering approach applied across all phases of residential land planning, legal verification, and site infrastructure execution.
              </p>
              <Link
                to="/expertise"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#142D45] dark:text-[#D4B07B] border-b-2 border-[#B18A58] pb-1 hover:text-[#B18A58] transition-colors font-sans"
              >
                <span>EXPLORE ALL SERVICES</span>
                <ArrowRight className="w-4 h-4 text-[#B18A58]" />
              </Link>
            </ScrollReveal>

            <div className="lg:col-span-7 space-y-8">
              {/* Capability 1 */}
              <ScrollReveal direction="up" distance={25} duration={750} className="p-8 bg-[#FAF9F6] dark:bg-[#142D45]/30 border border-[#EAE6DF] dark:border-[#20272D]">
                <div className="flex items-center gap-3 mb-3">
                  <Ruler className="w-5 h-5 text-[#B18A58]" />
                  <h3 className="font-serif text-2xl font-medium text-[#142D45] dark:text-[#FAF9F6]">
                    Residential Land Plotting &amp; Subdivisions
                  </h3>
                </div>
                <p className="text-sm text-[#777C80] dark:text-[#A0A6AC] font-light leading-relaxed font-sans mb-3">
                  Master layout design dividing rural and suburban land parcels into standard residential plots (e.g. 1000, 1500, 2000+ sq.ft.) with wide internal road setbacks and optimal frontage.
                </p>
                <div className="text-xs text-[#B18A58] font-semibold font-sans uppercase tracking-wider">
                  Highlights: Rectangular geometry • Corner demarcation • Standardized frontage
                </div>
              </ScrollReveal>

              {/* Capability 2 */}
              <ScrollReveal direction="up" delay={80} distance={25} duration={750} className="p-8 bg-[#FAF9F6] dark:bg-[#142D45]/30 border border-[#EAE6DF] dark:border-[#20272D]">
                <div className="flex items-center gap-3 mb-3">
                  <Compass className="w-5 h-5 text-[#B18A58]" />
                  <h3 className="font-serif text-2xl font-medium text-[#142D45] dark:text-[#FAF9F6]">
                    Topographic Survey &amp; Physical Demarcation
                  </h3>
                </div>
                <p className="text-sm text-[#777C80] dark:text-[#A0A6AC] font-light leading-relaxed font-sans mb-3">
                  Accurate contour mapping, total station surveying, and permanent ground demarcation using concrete corner pillars, numbered plot flags, and single/double-course brick boundary lines.
                </p>
                <div className="text-xs text-[#B18A58] font-semibold font-sans uppercase tracking-wider">
                  Highlights: Total station surveys • Concrete corner stones • Brick perimeter courses
                </div>
              </ScrollReveal>

              {/* Capability 3 */}
              <ScrollReveal direction="up" delay={160} distance={25} duration={750} className="p-8 bg-[#FAF9F6] dark:bg-[#142D45]/30 border border-[#EAE6DF] dark:border-[#20272D]">
                <div className="flex items-center gap-3 mb-3">
                  <Layers className="w-5 h-5 text-[#B18A58]" />
                  <h3 className="font-serif text-2xl font-medium text-[#142D45] dark:text-[#FAF9F6]">
                    Internal Road Infrastructure &amp; Earthwork
                  </h3>
                </div>
                <p className="text-sm text-[#777C80] dark:text-[#A0A6AC] font-light leading-relaxed font-sans mb-3">
                  Site grading, soil stabilization, and laying of durable black asphalt or compacted WBM gravel access roads connecting all internal plots directly to main highway connectors.
                </p>
                <div className="text-xs text-[#B18A58] font-semibold font-sans uppercase tracking-wider">
                  Highlights: 25-30 ft wide arterial pathways • Soil compaction • Arterial connectivity
                </div>
              </ScrollReveal>

              {/* Capability 4 */}
              <ScrollReveal direction="up" delay={240} distance={25} duration={750} className="p-8 bg-[#FAF9F6] dark:bg-[#142D45]/30 border border-[#EAE6DF] dark:border-[#20272D]">
                <div className="flex items-center gap-3 mb-3">
                  <FileCheck className="w-5 h-5 text-[#B18A58]" />
                  <h3 className="font-serif text-2xl font-medium text-[#142D45] dark:text-[#FAF9F6]">
                    Statutory Clearances &amp; Registry Assistance
                  </h3>
                </div>
                <p className="text-sm text-[#777C80] dark:text-[#A0A6AC] font-light leading-relaxed font-sans mb-3">
                  Comprehensive legal vetting, revenue department documentation, land mutation verification, and complete guidance through registry and possession handovers.
                </p>
                <div className="text-xs text-[#B18A58] font-semibold font-sans uppercase tracking-wider">
                  Highlights: Transparent chain of title • Mutation assistance • Immediate possession
                </div>
              </ScrollReveal>
            </div>
          </div>
        </Container>
      </section>

      {/* 6. Why Choose AKG Infrastructure — Key Advantages */}
      <section className="py-24 lg:py-32 bg-[#FAF9F6] dark:bg-[#0A121E]">
        <Container size="wide">
          <ScrollReveal direction="up" distance={25} duration={700} className="max-w-2xl mb-16 text-left">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#B18A58] font-sans block mb-3">
              THE AKG ADVANTAGE
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-medium text-[#142D45] dark:text-[#FAF9F6] leading-tight">
              Why Choose AKG Infrastructure
            </h2>
            <p className="text-base text-[#777C80] dark:text-[#A0A6AC] font-light mt-3 font-sans">
              Direct advantages that set our plotted developments apart in reliability, execution speed, and investment security.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ScrollReveal direction="up" delay={50} distance={25} duration={750} className="p-8 bg-[#FFFFFF] dark:bg-[#101E2E] border border-[#EAE6DF] dark:border-[#20272D] shadow-sm">
              <ShieldCheck className="w-8 h-8 text-[#B18A58] mb-4" />
              <h3 className="font-serif text-xl font-medium text-[#142D45] dark:text-[#FAF9F6] mb-2">
                100% Verified Titles
              </h3>
              <p className="text-xs sm:text-sm text-[#777C80] dark:text-[#A0A6AC] font-light leading-relaxed font-sans">
                Zero legal ambiguity. Every plot offered is pre-cleared with complete revenue documentation, chain of title, and direct registry readiness.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={120} distance={25} duration={750} className="p-8 bg-[#FFFFFF] dark:bg-[#101E2E] border border-[#EAE6DF] dark:border-[#20272D] shadow-sm">
              <MapPin className="w-8 h-8 text-[#B18A58] mb-4" />
              <h3 className="font-serif text-xl font-medium text-[#142D45] dark:text-[#FAF9F6] mb-2">
                Strategic Connectivity
              </h3>
              <p className="text-xs sm:text-sm text-[#777C80] dark:text-[#A0A6AC] font-light leading-relaxed font-sans">
                Carefully selected rural and suburban parcels in high-growth corridors of Uttar Pradesh, providing rapid highway access and scenic surroundings.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={190} distance={25} duration={750} className="p-8 bg-[#FFFFFF] dark:bg-[#101E2E] border border-[#EAE6DF] dark:border-[#20272D] shadow-sm">
              <Ruler className="w-8 h-8 text-[#B18A58] mb-4" />
              <h3 className="font-serif text-xl font-medium text-[#142D45] dark:text-[#FAF9F6] mb-2">
                Visible Ground Demarcation
              </h3>
              <p className="text-xs sm:text-sm text-[#777C80] dark:text-[#A0A6AC] font-light leading-relaxed font-sans">
                What you see is what you own. Every plot is physically delineated with concrete corner pillars and red-brick boundary courses before site visits.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={260} distance={25} duration={750} className="p-8 bg-[#FFFFFF] dark:bg-[#101E2E] border border-[#EAE6DF] dark:border-[#20272D] shadow-sm">
              <HeartHandshake className="w-8 h-8 text-[#B18A58] mb-4" />
              <h3 className="font-serif text-xl font-medium text-[#142D45] dark:text-[#FAF9F6] mb-2">
                Customer-Centric Guidance
              </h3>
              <p className="text-xs sm:text-sm text-[#777C80] dark:text-[#A0A6AC] font-light leading-relaxed font-sans">
                From initial site inspections and plot selection to registry execution and possession handovers, our dedicated team assists you at every step.
              </p>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* 7. Our Approach & Commitment — Full-Width Deep Navy #142D45 Section */}
      <section className="py-24 lg:py-32 bg-[#142D45] text-white">
        <Container size="wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-16">
            <ScrollReveal direction="up" distance={30} duration={800} className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#B18A58] font-sans">
                OUR APPROACH &amp; COMMITMENT
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium text-[#FAF9F6] leading-[1.08]">
                Constructed to Endure. Planned for Prosperity.
              </h2>
              <p className="text-base sm:text-lg text-gray-300 font-light leading-relaxed font-sans">
                We reject short-term compromises in land selection, boundary accuracy, or road grading. Our methodology centers on delivering residential land developments that maintain legal security and environmental harmony across generations.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={150} distance={30} duration={800} className="lg:col-span-5">
              <div className="relative overflow-hidden border border-[#B18A58]/30 shadow-2xl h-72 sm:h-80">
                <SafeImage
                  src="/images/about/about-village-land.webp"
                  fallbackSrc="/images/about-hero.jpg"
                  alt="Rural residential plotting with red brick boundaries in Uttar Pradesh"
                  className="w-full h-full object-cover"
                />
              </div>
            </ScrollReveal>
          </div>

          {/* 3 Pillars of Commitment */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pt-12 border-t border-white/15">
            <ScrollReveal direction="up" delay={50} distance={25} duration={750} className="space-y-3">
              <span className="font-serif text-3xl font-light text-[#B18A58]">01</span>
              <h3 className="font-serif text-2xl font-medium text-white">Site Integrity</h3>
              <p className="text-xs uppercase tracking-widest text-[#D4B07B] font-semibold font-sans">Multi-Tier Field Oversight</p>
              <p className="text-sm text-gray-300 font-light leading-relaxed font-sans">
                Standardized daily field inspections led by experienced Site Engineers and Surveyors benchmark boundary tolerances and road compaction at every stage.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={150} distance={25} duration={750} className="space-y-3">
              <span className="font-serif text-3xl font-light text-[#B18A58]">02</span>
              <h3 className="font-serif text-2xl font-medium text-white">Statutory Governance</h3>
              <p className="text-xs uppercase tracking-widest text-[#D4B07B] font-semibold font-sans">Zero-Risk Legal Compliance</p>
              <p className="text-sm text-gray-300 font-light leading-relaxed font-sans">
                Full revenue department compliance, verified mutation documents, and direct registry facilitation ensure zero legal encumbrance for all buyers.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={250} distance={25} duration={750} className="space-y-3">
              <span className="font-serif text-3xl font-light text-[#B18A58]">03</span>
              <h3 className="font-serif text-2xl font-medium text-white">Community Longevity</h3>
              <p className="text-xs uppercase tracking-widest text-[#D4B07B] font-semibold font-sans">Responsible Development</p>
              <p className="text-sm text-gray-300 font-light leading-relaxed font-sans">
                Preserving natural trees, green buffer zones, and open spaces within each plotting scheme ensures peaceful, livable surroundings for future homes.
              </p>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* 8. Final Consultation CTA */}
      <section className="py-24 lg:py-32 bg-[#FAF9F6] dark:bg-[#0A121E]">
        <Container size="default">
          <ScrollReveal direction="up" distance={25} duration={750} className="text-center space-y-6 max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#B18A58] font-sans">
              INITIATE CONSULTATION
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-medium text-[#142D45] dark:text-[#FAF9F6]">
              Partner With AKG Infrastructure
            </h2>
            <p className="text-base text-[#777C80] dark:text-[#A0A6AC] font-light leading-relaxed font-sans">
              Connect directly with our land advisory and engineering desks to schedule on-site plot visits, review available schemes, or discuss development opportunities.
            </p>
            <div className="pt-4 flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-xs font-bold uppercase tracking-widest text-[#FAF9F6] bg-[#142D45] hover:bg-[#070E18] dark:bg-[#1E3A5F] transition-all font-sans shadow-md"
              >
                <span>CONTACT US</span>
                <ArrowRight className="w-4 h-4 text-[#B18A58]" />
              </Link>
              <Link
                to="/login"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-xs font-bold uppercase tracking-widest text-[#142D45] dark:text-white border border-[#142D45]/30 dark:border-white/30 hover:border-[#142D45] transition-all font-sans"
              >
                <span>PORTAL LOGIN / JOIN</span>
              </Link>
            </div>
          </ScrollReveal>
        </Container>
      </section>
    </div>
  );
};
export default About;
