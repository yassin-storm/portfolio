'use client';

import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import BackgroundGrid from '@/components/ui/BackgroundGrid';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import SkillsSection from '@/components/sections/SkillsSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import EducationCertificatesSection from '@/components/sections/EducationCertificatesSection';
import ServicesSection from '@/components/sections/ServicesSection';
import ContactSection from '@/components/sections/ContactSection';

export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-[#08090d] text-zinc-100 overflow-x-hidden selection:bg-cyan-500/30 selection:text-white">
      {/* Dynamic ambient grid and particle constellation */}
      <BackgroundGrid />

      {/* Fixed Navigation */}
      <Navbar />

      {/* Sections */}
      <div className="relative z-10 space-y-12">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <EducationCertificatesSection />
        <ServicesSection />
        <ContactSection />
      </div>

      {/* Global Footer */}
      <Footer />
    </main>
  );
}
