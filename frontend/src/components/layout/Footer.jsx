import React from 'react';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import Logo from '../common/Logo';
import { LinkedinIcon, GithubIcon } from '../common/SocialIcons';

// Instagram Icon
function InstagramIcon({ className = 'h-5 w-5' }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

// YouTube Icon
function YoutubeIcon({ className = 'h-5 w-5' }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="relative bg-white border-t border-slate-200 pt-20 pb-12 overflow-hidden text-slate-800 w-full">
      {/* Full width container */}
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
        {/* Top Feature Banner */}
        <div className="pb-12 mb-14 border-b border-slate-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#8B5CF6]">
              OUR COMMITMENT
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold font-heading text-slate-900 mt-1">
              Building What's Next, Together.
            </h3>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#8B5CF6] text-white text-base font-bold shadow-md hover:bg-[#7c3aed] transition-all cursor-pointer"
          >
            <span>Start Your Project</span>
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        {/* Main Columns Grid - High contrast, prominent, clean */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-14 border-b border-slate-200">
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <Logo theme="light" size="md" />

            <div className="text-sm font-bold tracking-wider text-[#8B5CF6] uppercase pt-2">
              Imagine More. Create Beyond.
            </div>

            <p className="text-base text-[#1e293b] leading-relaxed max-w-md font-normal">
              Inwebzz Software Solutions — engineering meaningful digital experiences through innovation, creativity and technology.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-base font-bold text-slate-900 font-heading tracking-tight">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm sm:text-base font-medium text-slate-700">
              <li>
                <a href="#home" className="hover:text-[#8B5CF6] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#8B5CF6] transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#8B5CF6] transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-[#8B5CF6] transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#8B5CF6] transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-base font-bold text-slate-900 font-heading tracking-tight">
              Services
            </h4>
            <ul className="space-y-3 text-sm sm:text-base font-medium text-slate-700">
              <li>
                <a href="#services" className="hover:text-[#8B5CF6] transition-colors">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#8B5CF6] transition-colors">
                  Mobile Applications
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#8B5CF6] transition-colors">
                  UI/UX Design
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#8B5CF6] transition-colors">
                  E-Commerce
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#8B5CF6] transition-colors">
                  Custom Software
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Socials */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-base font-bold text-slate-900 font-heading tracking-tight">
              Connect With Us
            </h4>

            <ul className="space-y-3 text-sm sm:text-base font-medium text-slate-700">
              <li className="flex items-center gap-2.5">
                <Mail className="h-5 w-5 text-[#8B5CF6] shrink-0" />
                <a href="mailto:hello@inwebz.com" className="hover:text-[#8B5CF6] transition-colors">
                  hello@inwebz.com
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-5 w-5 text-[#8B5CF6] shrink-0" />
                <a href="tel:+919876543210" className="hover:text-[#8B5CF6] transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MapPin className="h-5 w-5 text-[#8B5CF6] shrink-0" />
                <span>Chennai, India</span>
              </li>
            </ul>

            {/* Social Icons */}
            <div className="pt-2">
              <div className="flex items-center gap-3">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="h-10 w-10 rounded-full border border-slate-300 flex items-center justify-center text-slate-700 hover:border-[#8B5CF6] hover:text-[#8B5CF6] transition-colors"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon className="h-4 w-4" />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="h-10 w-10 rounded-full border border-slate-300 flex items-center justify-center text-slate-700 hover:border-[#8B5CF6] hover:text-[#8B5CF6] transition-colors"
                  aria-label="GitHub"
                >
                  <GithubIcon className="h-4 w-4" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="h-10 w-10 rounded-full border border-slate-300 flex items-center justify-center text-slate-700 hover:border-[#8B5CF6] hover:text-[#8B5CF6] transition-colors"
                  aria-label="Instagram"
                >
                  <InstagramIcon className="h-4 w-4" />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noreferrer"
                  className="h-10 w-10 rounded-full border border-slate-300 flex items-center justify-center text-slate-700 hover:border-[#8B5CF6] hover:text-[#8B5CF6] transition-colors"
                  aria-label="YouTube"
                >
                  <YoutubeIcon className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Tagline */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-sm font-medium text-slate-600 gap-3">
          <div>
            © 2026 Inwebzz Software Solutions. All Rights Reserved.
          </div>
          <div className="text-slate-500">
            Designed With Intent. Built With Innovation.
          </div>
        </div>
      </div>
    </footer>
  );
}
