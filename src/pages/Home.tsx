import React from 'react';
import {
  Hero,
  EditorialIntroSection,
  BrandStatementSection,
  ExpertiseSplitSection,
  DominantProjectsSection,
  DarkBrandExperienceSection,
  EditorialIndustriesSection,
  EditorialApproachSection,
  FinalClosingCTASection,
} from '../components/home/HomeSections';

export const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* SECTION 01 — FULL-SCREEN HERO */}
      <Hero />

      {/* SECTION 02 — EDITORIAL COMPANY INTRODUCTION */}
      <EditorialIntroSection />

      {/* SECTION 03 — BRAND STATEMENT / SIGNATURE SECTION */}
      <BrandStatementSection />

      {/* SECTION 04 — EXPERTISE / WHAT WE DO */}
      <ExpertiseSplitSection />

      {/* SECTION 05 — FEATURED PROJECTS */}
      <DominantProjectsSection />

      {/* SECTION 06 — DARK BRAND EXPERIENCE */}
      <DarkBrandExperienceSection />

      {/* SECTION 07 — INDUSTRIES WE SERVE */}
      <EditorialIndustriesSection />

      {/* SECTION 08 — OUR APPROACH */}
      <EditorialApproachSection />

      {/* SECTION 09 — CONTACT / FINAL CTA */}
      <FinalClosingCTASection />
    </div>
  );
};
