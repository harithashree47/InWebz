import React from 'react';
import { X, Play, Sparkles } from 'lucide-react';
import Logo from '../components/common/Logo';

export default function DemoModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      <div
        onClick={onClose}
        className="fixed inset-0 bg-slate-900/70 backdrop-blur-sm transition-opacity"
      />

      <div className="relative w-full max-w-3xl bg-[#090d16] text-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-800 z-10 animate-in fade-in zoom-in-95 duration-200 overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors z-20"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-6">
          <Logo theme="dark" tagline="Product Walkthrough" size="sm" />
        </div>

        {/* Simulated Video Player */}
        <div className="relative aspect-video rounded-2xl bg-slate-950 overflow-hidden border border-slate-800 flex items-center justify-center group shadow-inner">
          <img
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80"
            alt="Demo Preview"
            className="w-full h-full object-cover opacity-40 group-hover:opacity-50 transition-opacity"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />

          {/* Center Play Button */}
          <div className="relative z-10 flex flex-col items-center">
            <div className="h-16 w-16 sm:h-20 sm:w-20 rounded-full bg-[#ff2a5f] text-white flex items-center justify-center shadow-pink-glow hover:scale-110 transition-transform cursor-pointer">
              <Play className="h-8 w-8 fill-white ml-1" />
            </div>
            <span className="text-xs font-mono text-slate-300 mt-4 bg-black/60 px-3 py-1 rounded-full border border-white/10">
              Interactive Architecture Demo • 02:45
            </span>
          </div>
        </div>

        {/* Video Highlights */}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400 pt-4 border-t border-slate-800/80">
          <div className="flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-[#ff2a5f]" />
            <span>High-Velocity React 19 Frontend Engineering</span>
          </div>
          <div>Lighthouse 95+ Score • Zero Technical Debt</div>
        </div>
      </div>
    </div>
  );
}
