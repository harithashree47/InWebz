import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import Button from '../components/common/Button';

export default function FinalCta({ onGetStarted }) {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden bg-[#0a0e1a] text-white w-full">
      {/* Radiant ambient purple aura */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#8B5CF6]/20 rounded-full blur-[140px]" />

      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 text-center relative z-10">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="text-xs font-mono font-bold tracking-widest uppercase text-[#8B5CF6] flex items-center justify-center gap-2 mb-2">
            <span className="h-1.5 w-6 rounded-full bg-[#8B5CF6] inline-block" />
            PARTNER WITH INWEBZZ
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-heading text-white tracking-tight leading-[1.15]">
            The Future Doesn't Build Itself.{' '}
            <span className="text-[#8B5CF6] block mt-1.5 font-bold">
              Let's Create It Together.
            </span>
          </h2>

          <p className="text-base sm:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto">
            Your next breakthrough starts with an idea. Let's bring the right expertise and technology together to make it happen.
          </p>

          <div className="pt-6">
            <Button
              href="#contact"
              onClick={onGetStarted}
              variant="primary"
              size="lg"
              className="text-base sm:text-lg font-bold px-9 py-4 shadow-2xl shadow-violet-500/40"
              iconRight={<ArrowRight className="h-5 w-5" />}
            >
              Let's Get Started
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
