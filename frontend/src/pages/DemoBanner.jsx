import React from 'react';
import { Calendar, Phone, Zap } from 'lucide-react';

export default function DemoBanner({ onBookDemo }) {
  return (
    <section
      aria-label="Free Demo Offer"
      className="relative w-full overflow-hidden bg-gradient-to-r from-[#090e1a] via-[#0f172a] to-[#090e1a] border-y border-slate-800/80"
    >
      {/* Subtle dot grid background */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(rgba(148,163,184,0.18)_1px,transparent_1px)] [background-size:20px_20px]" />

      {/* Soft violet ambient glow */}
      <div className="pointer-events-none absolute -left-24 top-1/2 -translate-y-1/2 h-44 w-72 rounded-full bg-[#8B5CF6]/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 top-1/2 -translate-y-1/2 h-44 w-72 rounded-full bg-indigo-500/15 blur-3xl" />

      <div className="relative z-10 w-full px-4 sm:px-8 lg:px-12 xl:px-16 py-6 sm:py-7">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-5">
          {/* Left: Icon + Offer Copy */}
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-[#8B5CF6] to-[#6366f1] text-white flex items-center justify-center shadow-[0_6px_20px_-2px_rgba(139,92,246,0.45)] shrink-0">
              <Zap className="h-5 w-5 stroke-[2]" />
            </div>

            <div>
              <h2 className="text-lg sm:text-xl font-bold font-heading text-white tracking-tight leading-tight">
                Contact for a Free Demo
              </h2>
              <p className="text-sm mt-0.5 leading-snug">
                <span className="font-bold text-[#a78bfa]">25% OFF</span>{' '}
                <span className="text-slate-300">Limited Time Offer for All Services</span>
              </p>
            </div>
          </div>

          {/* Right: Appointment CTA + Phone */}
          <div className="flex flex-wrap items-center gap-3.5 w-full lg:w-auto">
            <button
              type="button"
              onClick={onBookDemo}
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl bg-gradient-to-r from-[#8B5CF6] to-[#7c3aed] hover:from-[#7c3aed] hover:to-[#6d28d9] text-white text-xs sm:text-sm font-bold tracking-wider uppercase shadow-[0_6px_20px_-2px_rgba(139,92,246,0.45)] hover:shadow-[0_10px_26px_-2px_rgba(139,92,246,0.6)] hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
            >
              <Calendar className="h-4 w-4 shrink-0" />
              <span>Make an Appointment</span>
            </button>

            <a
              href="tel:+919080356538"
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 hover:border-violet-400/50 text-white text-sm font-semibold backdrop-blur-md transition-all duration-300"
            >
              <Phone className="h-4 w-4 text-slate-300 shrink-0" />
              <span>+91 90803 56538</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
