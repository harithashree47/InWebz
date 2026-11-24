import React from 'react';
import Hero from './Hero';
import Highlights from './Highlights';
import About from './About';
import Services from './Services';
import WhyChooseUs from './WhyChooseUs';
import Projects from './Projects';
import Expertise from './Expertise';
import Process from './Process';
import Team from './Team';
import Testimonials from './Testimonials';
import Faq from './Faq';
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

      {/* 03. COMPANY HIGHLIGHTS */}
      <Highlights />

      {/* 04. ABOUT US */}
      <About onDiscoverStory={scrollToContact} />

      {/* 05. OUR SERVICES */}
      <Services onSelectService={scrollToContact} />

      {/* 06. WHY CHOOSE INWEBZZ? */}
      <WhyChooseUs />

      {/* 07. OUR PROJECTS */}
      <Projects />

      {/* 08. TECHNOLOGIES & EXPERTISE */}
      <Expertise />

      {/* 09. DEVELOPMENT PROCESS */}
      <Process />

      {/* 10. OUR TEAM */}
      <Team />

      {/* 11. TESTIMONIALS */}
      <Testimonials />

      {/* 12. FAQ */}
      <Faq />

      {/* 13. CONTACT SECTION */}
      <Contact />

      {/* 14. FINAL CTA */}
      <FinalCta onGetStarted={scrollToContact} />
    </div>
  );
}
