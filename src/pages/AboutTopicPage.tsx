import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Container } from '../components/common/Container';
import { SafeImage } from '../components/common/SafeImage';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { ScrollReveal } from '../components/common/ScrollReveal';
import {
  ShieldCheck,
  Target,
  Eye,
  Award,
  Users,
  CheckCircle2,
  ArrowRight,
  Compass,
  FileCheck,
  Building2,
  HeartHandshake
} from 'lucide-react';

interface AboutTopicConfig {
  title: string;
  tagline: string;
  heroImage: string;
  badge: string;
  intro: string;
  sections: {
    heading: string;
    description: string;
    points?: string[];
  }[];
  stats?: { value: string; label: string }[];
}

const ABOUT_TOPICS: Record<string, AboutTopicConfig> = {
  'company-overview': {
    title: 'Company Overview',
    tagline: 'Engineering discipline and regional development governance',
    heroImage: '/images/about/about-township.webp',
    badge: 'CORPORATE IDENTITY',
    intro: 'AKG Infrastructure brings together engineering discipline, structured project planning, and responsible execution to develop resilient communities, plotted townships, and vital civil infrastructure across Uttar Pradesh.',
    sections: [
      {
        heading: 'Multidisciplinary Engineering Approach',
        description: 'Our civil teams unify land surveyors, structural specialists, environmental planners, and site supervisors. We operate with strict statutory compliance, ensuring every project adheres to land revenue regulations, RERA guidelines, and environmental standards.',
        points: [
          'Pre-acquisition title search and statutory clearance checks',
          'Accurate GIS-assisted boundary delineation and pillar demarcations',
          'Black-top road network laying and underground utility corridors',
          'Environmentally conscious stormwater retention and rainwater recharge'
        ]
      },
      {
        heading: 'Operational Scope & Regional Footprint',
        description: 'From rural plotted colonies in expanding regional corridors to turnkey civil contracts, AKG Infrastructure maintains high engineering standards with dedicated on-site laboratory testing and rigorous milestone oversight.'
      }
    ],
    stats: [
      { value: '100%', label: 'Statutory Verification' },
      { value: '6+', label: 'Engineering Domains' },
      { value: '25+', label: 'Years Combined Leadership' },
      { value: '0', label: 'Compromise on Quality' }
    ]
  },
  'our-story': {
    title: 'Our Story',
    tagline: 'From foundational land stewardship to organized infrastructure delivery',
    heroImage: '/images/about/about-village-land.webp',
    badge: 'HERITAGE & EVOLUTION',
    intro: 'AKG Infrastructure was established with a singular conviction: that rural and semi-urban plotted land development must adhere to the same uncompromising civil standards as major municipal projects.',
    sections: [
      {
        heading: 'Addressing Unorganized Land Development',
        description: 'For decades, regional land development in Uttar Pradesh suffered from ambiguous boundaries, uncertain registries, and inadequate drainage networks. AKG Infrastructure changed this dynamic by introducing precision civil surveys, clear title registries, and permanent boundary pillars before opening projects for acquisition.',
        points: [
          'Eliminating boundary disputes through precision corner markers',
          'Investing upfront in heavy road stabilization and black-top surfacing',
          'Ensuring clean land registries with transparent legal documentation',
          'Building long-term generational trust with local families and investors'
        ]
      },
      {
        heading: 'Commitment to Enduring Value',
        description: 'Today, AKG Infrastructure continues to expand with master-planned colonies, regional arterial link schemes, and community-centered enclaves that provide peaceful, safe, and progressive living environments.'
      }
    ]
  },
  'mission': {
    title: 'Our Mission',
    tagline: 'Delivering secure, master-planned residential environments through transparent civil execution',
    heroImage: '/images/about/about-township-layout.webp',
    badge: 'PURPOSE & COMMITMENT',
    intro: 'Our mission is to establish trusted, secure, and thoughtfully plotted residential land infrastructure that empowers families to build lasting homes with peace of mind.',
    sections: [
      {
        heading: 'Core Mission Pillars',
        description: 'Every project undertaken by AKG Infrastructure is guided by clear performance imperatives:',
        points: [
          'Total Title Security: Pre-verified revenue titles and immediate registry readiness',
          'Structural Integrity: Precision road networks, durable retaining walls, and utility conduits',
          'Environmental Responsibility: Preserving green village surroundings and natural drainage paths',
          'Client Empowerment: Honest consultation, zero hidden liabilities, and clear timelines'
        ]
      }
    ]
  },
  'vision': {
    title: 'Our Vision',
    tagline: 'To be northern India’s most trusted partner in structured plotted land infrastructure',
    heroImage: '/images/about/about-landscape.webp',
    badge: 'STRATEGIC OUTLOOK',
    intro: 'We envision a future where regional development seamlessly bridges rural charm with urban connectivity, setting benchmark standards for plotted community developments throughout Uttar Pradesh.',
    sections: [
      {
        heading: 'A Planned Tomorrow',
        description: 'By standardizing land planning, arterial road engineering, and community-level utility design, AKG Infrastructure is transforming open land into sustainable, well-connected townships for generations to come.',
        points: [
          'Regional Arterial Connectivity: Strategically locating projects along high-growth economic corridors',
          'Sustainable Community Standards: Integrating tree-lined avenues, solar illumination, and water security',
          'Digital Land Intelligence: Deploying drone survey models and digital registry tracking'
        ]
      }
    ]
  },
  'our-values': {
    title: 'Our Core Values',
    tagline: 'Integrity, precision, and respect for the land',
    heroImage: '/images/about/about-township.webp',
    badge: 'ETHICAL FOUNDATION',
    intro: 'Our principles dictate how we inspect soil, delineate plot corners, interact with local communities, and deliver ownership deeds to our clients.',
    sections: [
      {
        heading: 'The Five Principles of AKG Infrastructure',
        description: 'Our values guide our day-to-day decisions across all site projects:',
        points: [
          'Transparency: Clear documentation, verified land titles, and honest pricing with zero ambiguity',
          'Precision: Accurate plot boundaries using permanent concrete pillars and red-brick boundary foundations',
          'Stewardship: Respect for agricultural boundaries, rural greenery, and regional ecology',
          'Reliability: Delivering black-top roads, drainage networks, and electricity grids on promised schedules',
          'Customer-First Mindset: Long-term relationships built on prompt communication and trusted possession'
        ]
      }
    ]
  },
  'why-choose-akg': {
    title: 'Why Choose AKG Infrastructure',
    tagline: 'The tangible advantages of acquiring land developed under unified civil governance',
    heroImage: '/images/about/about-village-land.webp',
    badge: 'COMPETITIVE EDGE',
    intro: 'When you partner with AKG Infrastructure, you invest in pre-verified land assets protected by physical demarcation, statutory compliance, and durable road infrastructure.',
    sections: [
      {
        heading: 'Key AKG Advantages',
        description: 'Explore why hundreds of families and regional investors trust AKG Infrastructure for their land plotting needs:',
        points: [
          'Immediate Registry & Clear Title: Complete revenue verification before a plot is offered',
          'Permanent Physical Demarcation: High-visibility yellow markers, concrete pillars, and brick courses',
          'Black-Top Asphalt Roads: Wide, cleanly paved roads designed for long-term vehicular access',
          'Peaceful Village Surroundings: Clean air, natural green environs, and genuine community harmony',
          'Strategic Growth Corridors: High capital appreciation driven by proximity to expanding transit links'
        ]
      }
    ]
  }
};

export const AboutTopicPage: React.FC = () => {
  const { topic } = useParams<{ topic: string }>();
  const topicData = topic ? ABOUT_TOPICS[topic] : null;

  if (!topicData) {
    return <Navigate to="/about" replace />;
  }

  const otherTopics = Object.keys(ABOUT_TOPICS)
    .filter((k) => k !== topic)
    .map((k) => ({
      slug: k,
      ...ABOUT_TOPICS[k]
    }));

  return (
    <div className="bg-[#FAF9F6] dark:bg-[#0A121E]">
      <Breadcrumbs
        items={[
          { label: 'About Us', path: '/about' },
          { label: topicData.title }
        ]}
      />

      {/* Topic Hero Section */}
      <section className="relative w-full h-[45vh] sm:h-[50vh] min-h-[380px] flex items-end pb-12 sm:pb-16 overflow-hidden bg-[#0A121E] text-white">
        <div className="absolute inset-0 w-full h-full z-0">
          <SafeImage
            src={topicData.heroImage}
            fallbackSrc="/images/about-hero.jpg"
            alt={topicData.title}
            containerClassName="w-full h-full"
            className="w-full h-full object-cover object-center"
          />
        </div>

        <div className="absolute inset-0 bg-[#0A1828]/60 z-[1] pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1828]/90 via-transparent to-[#0A1828]/40 z-[1] pointer-events-none" />

        <Container size="wide" className="relative z-10 w-full">
          <ScrollReveal direction="up" distance={25} duration={750}>
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.25em] text-[#D4B07B] block mb-2 sm:mb-3 font-sans drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              {topicData.badge}
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-medium text-[#FAF9F6] leading-[1.05] drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] max-w-3xl">
              {topicData.title}
            </h1>
            <p className="text-sm sm:text-base text-gray-200 font-light mt-3 max-w-2xl font-sans">
              {topicData.tagline}
            </p>
          </ScrollReveal>
        </Container>
      </section>

      {/* Main Content Area */}
      <section className="py-16 sm:py-24">
        <Container size="wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Content Column */}
            <div className="lg:col-span-8 space-y-12">
              <ScrollReveal direction="up" distance={20} duration={700}>
                <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-[#0F172A] border border-[#E8E6E1] dark:border-[#1E293B] shadow-xs">
                  <p className="text-base sm:text-lg text-[#132338] dark:text-[#E2E8F0] font-light leading-relaxed">
                    {topicData.intro}
                  </p>
                </div>
              </ScrollReveal>

              {topicData.stats && (
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {topicData.stats.map((stat, i) => (
                    <div
                      key={i}
                      className="p-6 rounded-2xl bg-white dark:bg-[#0F172A] border border-[#E8E6E1] dark:border-[#1E293B] text-center"
                    >
                      <div className="font-serif text-3xl sm:text-4xl font-medium text-[#9E7844] mb-1">
                        {stat.value}
                      </div>
                      <div className="text-xs text-[#667080] dark:text-[#94A3B8] font-sans">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {topicData.sections.map((sec, idx) => (
                <ScrollReveal key={idx} direction="up" distance={20} duration={700}>
                  <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-[#0F172A] border border-[#E8E6E1] dark:border-[#1E293B] shadow-xs space-y-5">
                    <h2 className="font-serif text-2xl sm:text-3xl font-medium text-[#132338] dark:text-[#FAF9F6]">
                      {sec.heading}
                    </h2>
                    <p className="text-sm sm:text-base text-[#667080] dark:text-[#94A3B8] font-light leading-relaxed font-sans">
                      {sec.description}
                    </p>

                    {sec.points && (
                      <div className="pt-4 border-t border-[#E8E6E1] dark:border-[#1E293B] space-y-3">
                        {sec.points.map((pt, pIdx) => (
                          <div key={pIdx} className="flex items-start gap-3">
                            <CheckCircle2 className="w-4 h-4 text-[#9E7844] shrink-0 mt-0.5" />
                            <span className="text-xs sm:text-sm text-[#1F242A] dark:text-[#CBD5E1] font-sans">
                              {pt}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </ScrollReveal>
              ))}

              {/* Inquiry Action */}
              <div className="p-8 rounded-3xl bg-[#142D45] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
                <div>
                  <h3 className="font-serif text-2xl font-medium text-[#FAF9F6]">
                    Have Questions on {topicData.title}?
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-300 font-light mt-1">
                    Connect with our technical advisory team for verified details and site visits.
                  </p>
                </div>
                <Link
                  to="/contact"
                  className="px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-[#142D45] bg-[#FAF9F6] hover:bg-white transition-all shrink-0 font-sans flex items-center gap-2"
                >
                  <span>CONNECT WITH US</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#9E7844]" />
                </Link>
              </div>
            </div>

            {/* Right Sidebar: Quick Navigation to other topics */}
            <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
              <div className="p-6 rounded-3xl bg-white dark:bg-[#0F172A] border border-[#E8E6E1] dark:border-[#1E293B] shadow-xs">
                <span className="text-xs font-bold uppercase tracking-widest text-[#9E7844] block mb-4 font-sans">
                  MORE ABOUT US
                </span>
                <nav className="flex flex-col space-y-2 font-sans">
                  <Link
                    to="/about"
                    className="flex items-center justify-between px-4 py-2.5 rounded-xl text-xs font-semibold text-[#667080] dark:text-[#94A3B8] hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
                  >
                    <span>About Overview</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#9E7844]" />
                  </Link>

                  {otherTopics.map((t) => (
                    <Link
                      key={t.slug}
                      to={`/about/${t.slug}`}
                      className="flex items-center justify-between px-4 py-2.5 rounded-xl text-xs font-semibold text-[#1F242A] dark:text-[#CBD5E1] hover:bg-[#142D45]/10 dark:hover:bg-white/10 hover:text-[#132338] dark:hover:text-white transition-colors"
                    >
                      <span>{t.title}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#9E7844]" />
                    </Link>
                  ))}
                </nav>
              </div>

              {/* Verified Demarcation Callout */}
              <div className="p-6 rounded-3xl border border-[#E8E6E1] dark:border-[#1E293B] bg-[#FAF9F6] dark:bg-[#0B1522] space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#9E7844]">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Statutory Standards</span>
                </div>
                <p className="text-xs text-[#667080] dark:text-[#94A3B8] leading-relaxed">
                  All plotted townships under AKG Infrastructure are pre-verified through certified land survey maps, ensuring genuine peace of mind.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};
