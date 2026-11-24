import React from 'react';
import { ArrowDown, ArrowRight, Sparkles, Code2 } from 'lucide-react';
import Button from '../components/common/Button';
import Logo from '../components/common/Logo';

export default function Hero({ onBuildTogether }) {
  return (
    <section
      id="home"
      className="relative pt-32 sm:pt-40 pb-20 sm:pb-28 overflow-hidden bg-white w-full"
    >
      {/* Decorative ambient flares */}
      <div className="pointer-events-none absolute -top-32 -right-32 w-[600px] h-[600px] bg-gradient-to-br from-[#8B5CF6]/10 via-[#a78bfa]/5 to-transparent rounded-full blur-3xl" />
      <div className="pointer-events-none absolute top-1/2 -left-32 w-[500px] h-[500px] bg-violet-500/5 rounded-full blur-3xl" />

      {/* Full width container */}
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Eyebrow text, Main Heading, Description, CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Minimalist modern eyebrow text without capsule pill bubble */}
            <div className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#8B5CF6] font-mono flex items-center gap-2">
              <span className="h-1.5 w-6 rounded-full bg-[#8B5CF6] inline-block" />
              INNOVATION • ENGINEERING • DIGITAL EXCELLENCE
            </div>

            {/* Main Heading - Reduced boldness, refined & sleek */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-heading text-[#090e1a] tracking-tight leading-[1.18]">
              Where Vision Meets Technology.{' '}
              <span className="text-[#8B5CF6] font-bold block mt-1.5">
                Where Possibilities Become Reality.
              </span>
            </h1>

            {/* Description - Crisp, high-contrast, easy-to-read */}
            <p className="text-base sm:text-lg lg:text-[18px] text-[#1e293b] font-normal leading-relaxed max-w-2xl">
              We transform ambitious ideas into exceptional digital solutions. Through intelligent engineering, thoughtful design and forward-thinking technology, we help businesses move beyond what's possible.
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <Button href="#projects" variant="primary" size="lg" className="text-base font-bold px-8 py-3.5">
                Explore Our Work
              </Button>

              <Button
                href="#contact"
                onClick={onBuildTogether}
                variant="outline"
                size="lg"
                className="text-base font-bold px-7 py-3.5"
                iconRight={<ArrowRight className="h-4 w-4" />}
              >
                Let's Build Together
              </Button>
            </div>

            {/* Scroll Indicator */}
            <div className="pt-4 flex items-center gap-2.5 text-sm font-semibold text-slate-500">
              <a
                href="#highlights"
                className="inline-flex items-center gap-2 text-slate-600 hover:text-[#8B5CF6] transition-colors group cursor-pointer"
              >
                <span className="p-1.5 rounded-full bg-violet-50 text-[#8B5CF6] group-hover:translate-y-0.5 transition-transform">
                  <ArrowDown className="h-4 w-4" />
                </span>
                <span className="font-medium text-slate-700">Discover What's Possible</span>
              </a>
            </div>
          </div>

          {/* Right Column: 3D Device Showcase with Inwebzz Logo */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            <div className="absolute inset-0 bg-gradient-to-tr from-violet-50/70 to-slate-50/50 rounded-3xl -rotate-2 transform scale-95 -z-10 border border-slate-100" />

            <div className="relative w-full max-w-[560px] transition-transform duration-500 hover:scale-[1.02]">
              {/* Laptop Chassis */}
              <div className="relative mx-auto bg-[#131b2e] rounded-t-2xl p-3 sm:p-4 shadow-2xl border-4 border-slate-700">
                <div className="h-1.5 w-1.5 rounded-full bg-slate-500 mx-auto mb-2" />

                {/* Laptop Screen Content */}
                <div className="relative aspect-[16/10] bg-[#070b14] rounded-lg overflow-hidden flex flex-col justify-center items-center p-6 text-center border border-slate-800">
                  <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#8B5CF6_1px,transparent_1px)] [background-size:18px_18px]" />

                  <div className="relative z-10 flex flex-col items-center">
                    <Logo theme="dark" tagline="Software Solutions" size="lg" />
                    <div className="mt-5 px-4 py-1.5 rounded-full bg-white/10 text-slate-200 text-xs font-mono border border-white/10 flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-[#8B5CF6] animate-ping" />
                      Engineering What's Next
                    </div>
                  </div>
                </div>
              </div>

              {/* Laptop Stand Base */}
              <div className="relative mx-auto bg-slate-300 h-3.5 sm:h-4 w-[108%] -left-[4%] rounded-b-xl shadow-lg border-t border-slate-400">
                <div className="w-20 h-1 bg-slate-400 rounded-full mx-auto" />
              </div>

              {/* Floating Badge 1: Top Right */}
              <div className="absolute -top-5 -right-3 sm:-right-5 bg-white rounded-2xl p-4 shadow-soft-card border border-slate-200/80 flex items-center gap-3 animate-float-slow">
                <div className="h-10 w-10 rounded-xl bg-violet-50 text-[#8B5CF6] flex items-center justify-center font-bold">
                  <Code2 className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-base font-bold text-slate-900 font-heading">
                    Engineered
                  </div>
                  <div className="text-xs text-slate-600 font-medium">
                    With Precision
                  </div>
                </div>
              </div>

              {/* Floating Badge 2: Bottom Left */}
              <div className="absolute -bottom-6 left-2 sm:left-4 bg-white rounded-2xl px-5 py-3 shadow-soft-card border border-slate-200/80 flex items-center gap-3 animate-float-reverse">
                <div className="text-[#8B5CF6]">
                  <Sparkles className="h-5 w-5" />
                </div>
                <div className="text-xs sm:text-sm font-bold text-slate-900 font-heading">
                  Thoughtful Design.<br />Scalable Architecture.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
