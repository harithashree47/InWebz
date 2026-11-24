import React, { useState } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import ContactModal from './pages/ContactModal';
import { useScrollSpy } from './hooks/useScrollSpy';

const SECTION_IDS = [
  'home',
  'about',
  'services',
  'projects',
  'expertise',
  'team',
  'contact',
];

export default function App() {
  const activeSection = useScrollSpy(SECTION_IDS, 140);
  const [isNavContactOpen, setIsNavContactOpen] = useState(false);

  return (
    <div className="relative min-h-screen w-full bg-white text-slate-900 antialiased selection:bg-violet-500/20 selection:text-[#8B5CF6] overflow-x-hidden">
      {/* 01. NAVBAR */}
      <Navbar
        activeSection={activeSection}
        onOpenContact={() => setIsNavContactOpen(true)}
      />

      {/* Main Pages Flow */}
      <main className="relative w-full bg-white">
        <HomePage onOpenContact={() => setIsNavContactOpen(true)} />
      </main>

      {/* 15. FOOTER */}
      <Footer />

      {/* Interactive Contact Modal */}
      <ContactModal
        isOpen={isNavContactOpen}
        onClose={() => setIsNavContactOpen(false)}
      />
    </div>
  );
}
