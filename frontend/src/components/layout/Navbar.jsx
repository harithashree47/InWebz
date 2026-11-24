import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import Logo from '../common/Logo';
import Button from '../common/Button';

const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'projects', label: 'Projects' },
  { id: 'expertise', label: 'Expertise' },
  { id: 'team', label: 'Our Team' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar({ activeSection = 'home', onOpenContact }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 20);

      const winHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      const totalScroll = docHeight - winHeight;
      if (totalScroll > 0) {
        const progress = Math.min(100, Math.max(0, (scrollY / totalScroll) * 100));
        setScrollProgress(progress);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  return (
    <>
      {/* Main Header Bar */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 w-full ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.06)] py-2.5 sm:py-3 border-b border-slate-100'
            : 'bg-white/95 backdrop-blur-sm py-3 sm:py-4 border-b border-slate-100'
        }`}
      >
        {/* Top Gradient Scroll Progress Line - Visible as you scroll down */}
        <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-transparent overflow-hidden pointer-events-none">
          <div
            className="h-full bg-gradient-to-r from-[#8B5CF6] via-[#a855f7] to-[#ec4899] transition-all duration-75 ease-out shadow-[0_0_10px_rgba(139,92,246,0.6)]"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>

        {/* Bottom subtle gradient accent line when scrolled */}
        {isScrolled && (
          <div className="absolute -bottom-[1px] left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#8B5CF6]/40 to-transparent pointer-events-none" />
        )}

        <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
          <nav className="flex items-center justify-between">
            {/* Logo with prominent size and zero background color */}
            <Logo theme="light" size="lg" className="shrink-0" />

            {/* Desktop Nav Links - Bolder, high-contrast, clean & modern */}
            <div className="hidden lg:flex items-center gap-7 xl:gap-9">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className={`relative text-[15px] xl:text-[16px] font-bold tracking-normal transition-colors duration-200 py-1.5 ${
                      isActive
                        ? 'text-[#8B5CF6]'
                        : 'text-slate-900 hover:text-[#8B5CF6]'
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <span className="absolute -bottom-1 left-0 right-0 h-[2.5px] bg-[#8B5CF6] rounded-full" />
                    )}
                  </a>
                );
              })}
            </div>

            {/* Right Action CTA Button (Desktop): Let's Collaborate */}
            <div className="hidden sm:flex items-center gap-4">
              <Button
                href="#contact"
                onClick={onOpenContact}
                variant="primary"
                size="md"
                className="px-6 py-2.5 text-sm sm:text-base font-bold shadow-md shadow-violet-500/25"
              >
                Let's Collaborate
              </Button>
            </div>

            {/* Mobile & Tablet Elegant Morphing Hamburger Button - Reference Image Style (Top full, Middle short right-aligned, Bottom full) */}
            <div className="flex lg:hidden items-center">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="w-10 h-10 flex flex-col items-end justify-center gap-[5px] bg-transparent focus:outline-none cursor-pointer"
                aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              >
                {/* Top line - Full width */}
                <span
                  className="block h-[2px] w-6 rounded-full origin-center"
                  style={{
                    transform: mobileMenuOpen ? 'translateY(7px) rotate(45deg)' : 'translateY(0) rotate(0deg)',
                    backgroundColor: mobileMenuOpen ? '#8B5CF6' : '#0f172a',
                    transition: 'transform 300ms cubic-bezier(0.16, 1, 0.3, 1), background-color 300ms ease',
                  }}
                />
                {/* Middle line - Shorter, right-aligned (matches user reference image) */}
                <span
                  className="block h-[2px] rounded-full origin-right"
                  style={{
                    width: mobileMenuOpen ? '24px' : '15px',
                    opacity: mobileMenuOpen ? 0 : 1,
                    transform: mobileMenuOpen ? 'scaleX(0)' : 'scaleX(1)',
                    backgroundColor: '#0f172a',
                    transition: 'opacity 200ms ease, transform 200ms ease, width 200ms ease',
                  }}
                />
                {/* Bottom line - Full width */}
                <span
                  className="block h-[2px] w-6 rounded-full origin-center"
                  style={{
                    transform: mobileMenuOpen ? 'translateY(-7px) rotate(-45deg)' : 'translateY(0) rotate(0deg)',
                    backgroundColor: mobileMenuOpen ? '#8B5CF6' : '#0f172a',
                    transition: 'transform 300ms cubic-bezier(0.16, 1, 0.3, 1), background-color 300ms ease',
                  }}
                />
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Dimmed backdrop overlay - Outside header to avoid backdrop-filter containment */}
      <div
        className="fixed inset-0 bg-slate-950/50 backdrop-blur-xs z-[80] transition-opacity duration-300 lg:hidden"
        style={{
          opacity: mobileMenuOpen ? 1 : 0,
          pointerEvents: mobileMenuOpen ? 'auto' : 'none',
          transition: 'opacity 300ms ease-in-out',
        }}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Side Drawer Panel - Anchored to LEFT side */}
      <aside
        className="fixed top-0 left-0 bottom-0 h-screen w-[85%] max-w-[340px] bg-white z-[90] shadow-2xl flex flex-col justify-between lg:hidden"
        style={{
          left: 0,
          right: 'auto',
          transform: mobileMenuOpen ? 'translateX(0)' : 'translateX(-100%)',
          visibility: mobileMenuOpen ? 'visible' : 'hidden',
          transition: 'transform 300ms cubic-bezier(0.16, 1, 0.3, 1), visibility 300ms',
        }}
        aria-label="Mobile Navigation Drawer"
      >
        {/* Drawer Header with Larger Logo and Transparent Close Button */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
          <Logo theme="light" size="lg" />
          <button
            type="button"
            onClick={() => setMobileMenuOpen(false)}
            className="w-10 h-10 flex items-center justify-center bg-transparent text-slate-700 hover:text-[#8B5CF6] transition-colors cursor-pointer focus:outline-none"
            aria-label="Close menu"
          >
            <X className="h-6 w-6 stroke-[2]" />
          </button>
        </div>

        {/* Drawer Navigation Links with Staggered AOS Slide-in Entrance */}
        <div className="flex-1 overflow-y-auto px-6 py-5 space-y-2">
          {NAV_ITEMS.map((item, index) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-3 rounded-xl text-[16px] sm:text-[17px] font-bold transition-all duration-200 ${
                  isActive
                    ? 'bg-violet-50 text-[#8B5CF6]'
                    : 'text-slate-900 hover:bg-slate-50 hover:text-[#8B5CF6]'
                }`}
                style={{
                  opacity: mobileMenuOpen ? 1 : 0,
                  transform: mobileMenuOpen ? 'translateX(0)' : 'translateX(-24px)',
                  transition: `opacity 350ms cubic-bezier(0.16, 1, 0.3, 1) ${mobileMenuOpen ? 80 + index * 40 : 0}ms, transform 350ms cubic-bezier(0.16, 1, 0.3, 1) ${mobileMenuOpen ? 80 + index * 40 : 0}ms`,
                }}
              >
                {item.label}
              </a>
            );
          })}
        </div>

        {/* Drawer Footer CTA with AOS Entrance */}
        <div
          className="p-6 border-t border-slate-100 bg-slate-50/50"
          style={{
            opacity: mobileMenuOpen ? 1 : 0,
            transform: mobileMenuOpen ? 'translateY(0)' : 'translateY(16px)',
            transition: `opacity 350ms cubic-bezier(0.16, 1, 0.3, 1) ${mobileMenuOpen ? 80 + NAV_ITEMS.length * 40 : 0}ms, transform 350ms cubic-bezier(0.16, 1, 0.3, 1) ${mobileMenuOpen ? 80 + NAV_ITEMS.length * 40 : 0}ms`,
          }}
        >
          <Button
            href="#contact"
            onClick={() => {
              setMobileMenuOpen(false);
              if (onOpenContact) onOpenContact();
            }}
            variant="primary"
            size="md"
            className="w-full justify-center text-base font-bold py-3.5 shadow-md shadow-violet-500/25"
          >
            Let's Collaborate
          </Button>
        </div>
      </aside>
    </>
  );
}
