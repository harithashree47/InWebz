import React from 'react';
import Hero from './Hero';
import DemoBanner from './DemoBanner';
import Highlights from './Highlights';
import About from './About';
import Services from './Services';
import Projects from './Projects';
import Expertise from './Expertise';
import Process from './Process';
import Testimonials from './Testimonials';
import Contact from './Contact';
import FinalCta from './FinalCta';

export default function HomePage({ onOpenContact }) {
  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    else if (onOpenContact) onOpenContact();
  };

  return (
    <div className="flex flex-col w-full">
      {/* 02. HERO SECTION */}
      <Hero onBuildTogether={scrollToContact} />

      {/* DEMO OFFER BANNER */}
      <DemoBanner onBookDemo={scrollToContact} />

      {/* 03. COMPANY HIGHLIGHTS */}
      <Highlights />

      {/* 04. ABOUT US */}
      <About onDiscoverStory={scrollToContact} />

      {/* 05. OUR SERVICES */}
      <Services onSelectService={scrollToContact} />

      {/* 07. OUR PROJECTS */}
      <Projects />

      {/* 08. TECHNOLOGIES & EXPERTISE */}
      <Expertise />

      {/* 09. DEVELOPMENT PROCESS */}
      <Process />

      {/* 11. TESTIMONIALS */}
      <Testimonials />

      {/* 12. CONTACT SECTION */}
      <Contact />

      {/* 13. FINAL CTA */}
      <FinalCta onGetStarted={scrollToContact} />
    </div>
  );
}
