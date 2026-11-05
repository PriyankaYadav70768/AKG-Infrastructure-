export interface NavItem {
  title: string;
  path: string;
}

export const NAVIGATION_ITEMS: NavItem[] = [
  { title: 'Home', path: '/' },
  { title: 'About Us', path: '/about' },
  { title: 'Expertise', path: '/expertise' },
  { title: 'Projects', path: '/projects' },
  { title: 'Industries', path: '/industries' },
  { title: 'Contact', path: '/contact' },
];

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  location: string;
  scope: string;
  description: string;
  status: 'In Progress' | 'Engineering Design' | 'Planning Phase' | 'Site Development';
  image: string;
  year?: string;
  highlight?: string;
}

export const FEATURED_PROJECTS: ProjectItem[] = [
  {
    id: 'pr-1',
    title: 'Metro Highway Corridor & Elevated Viaduct',
    category: 'Transportation Infrastructure',
    location: 'Northern Economic Corridor',
    scope: '6-Lane Arterial Link & Flyover Structures',
    description: 'High-density transit development engineered for long-term traffic throughput, seismic resilience, and smart grade separation.',
    status: 'In Progress',
    image: '/hero-construction.svg',
    year: 'Phase II',
    highlight: 'Active Viaduct Erection',
  },
  {
    id: 'pr-2',
    title: 'Integrated Logistics & Industrial Park',
    category: 'Commercial Development',
    location: 'Eastern Maritime Gateway',
    scope: 'Warehouse Systems, Heavy Pavements & Power Grid',
    description: 'Turnkey industrial estate spanning civil ground stabilization, automated distribution facilities, and storm drainage infrastructure.',
    status: 'Site Development',
    image: '/about-operations.svg',
    year: 'Under Execution',
    highlight: 'Heavy Pavement Stabilization',
  },
  {
    id: 'pr-3',
    title: 'Civic Administrative Tower & Plaza',
    category: 'Building Construction',
    location: 'Capital District',
    scope: 'Reinforced Concrete Framework & High-Spec Enclosure',
    description: 'Modern institutional multi-story civic building integrated with energy-efficient building services, sustainable facade, and public concourse.',
    status: 'In Progress',
    image: '/public-infrastructure.svg',
    year: 'Structural Shell',
    highlight: 'Civic Concourse & Atrium',
  },
  {
    id: 'pr-4',
    title: 'Regional River Span Cable Bridge',
    category: 'Civil Construction',
    location: 'Western Basin District',
    scope: 'Deep Caisson Foundations & Composite Decking',
    description: 'Precision-engineered river crossing built to withstand extreme monsoon water velocity with high-tensile structural steel pylons.',
    status: 'Engineering Design',
    image: '/hero-construction.svg',
    year: 'Engineering Review',
    highlight: 'Deep Caisson Foundations',
  },
  {
    id: 'pr-5',
    title: 'Eco-Technology Business Campus',
    category: 'Commercial Development',
    location: 'South Suburban Zone',
    scope: 'Multi-Block Tech Hub & Underground Substructure',
    description: 'State-of-the-art office infrastructure with deep basement retaining structures, precast structural components, and rainwater harvesting.',
    status: 'Planning Phase',
    image: '/about-operations.svg',
    year: 'Permitting',
    highlight: 'Subsurface Retaining Walls',
  },
  {
    id: 'pr-6',
    title: 'Interstate Freight Arterial Interchange',
    category: 'Road & Transportation',
    location: 'Central Junction',
    scope: 'Concrete Overpasses & Soil Reinforcement',
    description: 'Multi-level cloverleaf highway connection designed for heavy-axle freight traffic and uninterrupted logistics movement.',
    status: 'In Progress',
    image: '/public-infrastructure.svg',
    year: 'Grading Phase',
    highlight: 'Grade Separators',
  },
];

export interface ExpertiseItem {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  capabilities: string[];
  image: string;
}

export const EXPERTISE_LIST: ExpertiseItem[] = [
  {
    id: 'infra-dev',
    number: '01',
    title: 'Infrastructure Development',
    shortDesc: 'Comprehensive master planning, earthworks, utility grids, and large-scale site preparation.',
    fullDesc: 'We coordinate end-to-end infrastructure schemes from baseline geotechnical assessments to integrated site utilities, water networks, and power distribution conduits.',
    iconName: 'Building2',
    capabilities: ['Master Site Planning', 'Subsurface Utility Engineering', 'Bulk Earthmoving & Grading', 'Stormwater & Environmental Systems'],
    image: '/hero-construction.svg',
  },
  {
    id: 'civil-const',
    number: '02',
    title: 'Civil Construction',
    shortDesc: 'Deep foundation systems, reinforced concrete superstructures, and heavy civil engineering.',
    fullDesc: 'Our civil engineering capability encompasses drilled shafts, diaphragm walls, post-tensioned slabs, and robust concrete structures built under rigorous quality controls.',
    iconName: 'HardHat',
    capabilities: ['Deep Piling & Foundations', 'Reinforced Concrete Frameworks', 'Retaining Walls & Soil Anchors', 'Precision Structural Pouring'],
    image: '/about-operations.svg',
  },
  {
    id: 'building-const',
    number: '03',
    title: 'Building Construction',
    shortDesc: 'Institutional, commercial, and multi-use developments executed to exact architectural specs.',
    fullDesc: 'Delivering durable vertical assets with modern building envelopes, MEP integration, vertical transit cores, and fine commercial grade finishing.',
    iconName: 'Building',
    capabilities: ['Commercial High-Rise Shells', 'Institutional Facilities', 'Specialized MEP Infrastructure', 'Facade & Envelope Engineering'],
    image: '/public-infrastructure.svg',
  },
  {
    id: 'transportation',
    number: '04',
    title: 'Road & Transportation Infrastructure',
    shortDesc: 'Expressways, arterial connectors, grade separators, and transit corridor paving.',
    fullDesc: 'Executing complex highway sections, heavy-duty asphalt and rigid concrete pavements, flyovers, roundabouts, and modern intelligent transport civil works.',
    iconName: 'Compass',
    capabilities: ['Rigid & Flexible Pavements', 'Elevated Viaducts & Overpasses', 'Corridor Grade Separation', 'Traffic Management Infrastructure'],
    image: '/hero-construction.svg',
  },
  {
    id: 'project-execution',
    number: '05',
    title: 'Engineering & Project Execution',
    shortDesc: 'Rigorous schedule control, BIM coordination, procurement logistics, and site HSE protocols.',
    fullDesc: 'From initial constructability reviews to integrated milestone delivery, our engineering teams deploy structured project controls to minimize risks and ensure safety.',
    iconName: 'Ruler',
    capabilities: ['BIM & Clash Detection', 'Critical Path Method Scheduling', 'Vendor Quality Auditing', 'Comprehensive HSE Site Protocols'],
    image: '/about-operations.svg',
  },
  {
    id: 'commercial-dev',
    number: '06',
    title: 'Commercial Development',
    shortDesc: 'Industrial estates, logistics hubs, tech parks, and specialized corporate centers.',
    fullDesc: 'Designing and executing scalable commercial infrastructure tailored to freight logistics, corporate parks, and high-efficiency operational centers.',
    iconName: 'Briefcase',
    capabilities: ['Logistics & Warehousing Hubs', 'Corporate Headquarters Shells', 'Heavy Industrial Yards', 'Turnkey Facility Integration'],
    image: '/public-infrastructure.svg',
  },
];

export interface IndustryItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  keyAspects: string[];
  image: string;
}

export const INDUSTRIES_LIST: IndustryItem[] = [
  {
    id: 'commercial',
    number: '01',
    title: 'Corporate Offices & Business Parks',
    tagline: 'High-performing workspaces & corporate centers',
    description: 'Modern corporate parks, logistics facilities, and commercial office developments constructed with energy-conscious frameworks and scalable MEP layouts.',
    keyAspects: ['Corporate Offices', 'Business Parks', 'Mixed-Use Developments'],
    image: '/about-operations.svg',
  },
  {
    id: 'residential',
    number: '02',
    title: 'Residential Developments',
    tagline: 'Planned communities & residential towers',
    description: 'Subdivision civil infrastructure, internal road networks, utility backbones, and multi-unit structural shells built for long-term community longevity.',
    keyAspects: ['Master Planned Enclaves', 'Residential High-Rises', 'Community Utilities'],
    image: '/hero-construction.svg',
  },
  {
    id: 'industrial',
    number: '03',
    title: 'Industrial Facilities',
    tagline: 'Heavy-duty processing & manufacturing plants',
    description: 'Robust foundations, high-clearance crane-ready structural steel bays, heavy-axle concrete slabs, and industrial containment systems.',
    keyAspects: ['Manufacturing Facilities', 'Heavy Storage Sheds', 'Processing Units'],
    image: '/about-operations.svg',
  },
  {
    id: 'transportation',
    number: '04',
    title: 'Transportation Infrastructure',
    tagline: 'Highways, flyovers, transit links & bridges',
    description: 'Regional transit systems, multi-modal terminals, toll corridors, and grade-separated interchanges designed for continuous heavy vehicular movement.',
    keyAspects: ['Highways & Expressways', 'Bridges & Flyovers', 'Transit Hubs'],
    image: '/hero-construction.svg',
  },
  {
    id: 'institutional',
    number: '05',
    title: 'Institutional Infrastructure',
    tagline: 'Educational, healthcare & research facilities',
    description: 'Specialized public interest facilities demanding stringent structural codes, clean-room compatibility, and resilient backup service architectures.',
    keyAspects: ['Hospitals & Healthcare', 'Educational Campuses', 'Research Facilities'],
    image: '/public-infrastructure.svg',
  },
  {
    id: 'public-infra',
    number: '06',
    title: 'Public Infrastructure',
    tagline: 'Water networks, urban drainage & civic utilities',
    description: 'Essential municipal infrastructure including stormwater trunk lines, culvert systems, civic administrative complexes, and public plazas.',
    keyAspects: ['Civic Administrative Buildings', 'Drainage & Water Works', 'Public Plazas'],
    image: '/public-infrastructure.svg',
  },
];

export const PHILOSOPHY_PRINCIPLES = [
  {
    number: '01',
    title: 'Engineering Discipline',
    tagline: 'Precision calculation before every pour',
    description: 'Every project begins with thorough geotechnical review, structural load modeling, and clash-tested coordination to eliminate on-site ambiguity.',
  },
  {
    number: '02',
    title: 'Thoughtful Planning',
    tagline: 'Long-term resilience over temporary speed',
    description: 'We construct infrastructure to endure environmental cycles and expanding capacity demands, prioritizing sustainable material integrity.',
  },
  {
    number: '03',
    title: 'Responsible Execution',
    tagline: 'Multi-tier safety governance and transparent milestones',
    description: 'Field execution is anchored in uncompromising HSE standards, standardized daily inspection logs, and verifiable quality benchmarks.',
  },
];

export const FAQS = [
  {
    question: 'What types of infrastructure projects does AKG Infrastructure undertake?',
    answer: 'AKG Infrastructure coordinates projects across civil engineering, transportation corridors, structural commercial shells, heavy industrial facilities, and municipal utility backbones including stormwater drainage and public plazas.',
  },
  {
    question: 'How does AKG Infrastructure maintain on-site quality control?',
    answer: 'We deploy specialized field teams comprising Project Managers, Civil Engineers, Site Supervisors, and Safety Officers. Every milestone is benchmarked against defined structural tolerances, material batch testing, and third-party laboratory validations.',
  },
  {
    question: 'How are project personnel and site teams mobilized?',
    answer: 'Appointed engineers and field teams are onboarded through our centralized portal under designated engineering divisions, ensuring appropriate security clearance, scope alignment, and site mobilization.',
  },
  {
    question: 'What is AKG Infrastructure’s approach to safety and environmental standards (HSE)?',
    answer: 'Safety is non-negotiable. We maintain strict site perimeter controls, personal protective equipment mandates, regular equipment inspection protocols, and runoff management systems on every jobsite.',
  },
  {
    question: 'How can developers, authorities, or partners initiate a project consultation?',
    answer: 'You can connect directly with our technical operations desk via our Contact page or submit inquiries regarding tender review, constructability assessments, or joint development schemes.',
  },
];
