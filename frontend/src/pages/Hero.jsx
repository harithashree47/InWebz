import React from 'react';
import { ArrowDown, ArrowRight, Sparkles, Code2, ShieldCheck, Zap } from 'lucide-react';
import Button from '../components/common/Button';
import Logo from '../components/common/Logo';

export default function Hero({ onBuildTogether }) {

  return (
    <section
      id="home"
      className="relative pt-32 sm:pt-40 lg:pt-44 pb-20 sm:pb-28 overflow-hidden bg-white w-full"
    >
      {/* Refined ethereal ambient glow */}
      <div className="pointer-events-none absolute -top-48 left-1/2 -translate-x-1/2 w-[1100px] h-[550px] bg-gradient-to-b from-[#8B5CF6]/12 via-[#a78bfa]/5 to-transparent rounded-full blur-3xl" />
      <div className="pointer-events-none absolute top-1/4 -right-32 w-[450px] h-[450px] bg-violet-400/5 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute top-2/3 -left-32 w-[450px] h-[450px] bg-indigo-400/5 rounded-full blur-3xl" />

      {/* Subtle modern dot matrix canvas overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:28px_28px] [mask-image:radial-gradient(ellipse_75%_55%_at_50%_15%,#000_60%,transparent_100%)] opacity-60" />

      <div className="relative w-full px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">

          {/* Left Column: High-Impact Agency Editorial Typography */}
          <div className="lg:col-span-7 space-y-7 text-left">
            {/* Minimalist Jewel Eyebrow - Pure typography, zero capsule box */}
            <div className="flex items-center gap-2.5 text-xs sm:text-[13px] font-bold tracking-[0.24em] text-[#8B5CF6] uppercase font-mono">
              <span className="w-2 h-2 rounded-full bg-[#8B5CF6] shadow-[0_0_10px_#8B5CF6]" />
              <span>INNOVATION • ENGINEERING • DIGITAL EXCELLENCE</span>
            </div>

            {/* Main Heading - Editorial balance, bold & refined */}
            <h1 className="text-3xl sm:text-5xl lg:text-[56px] font-bold font-heading text-slate-950 tracking-tight leading-[1.12]">
              Where Vision Meets Technology.{' '}
              <span className="block mt-2 bg-gradient-to-r from-[#8B5CF6] via-[#7C3AED] to-[#4F46E5] bg-clip-text text-transparent">
                Where Possibilities Become Reality.
              </span>
            </h1>

            {/* Description - High contrast dark slate */}
            <p className="text-base sm:text-lg lg:text-[18px] text-[#1e293b] font-normal leading-relaxed max-w-2xl">
              We transform ambitious ideas into exceptional digital solutions. Through intelligent engineering, thoughtful design and forward-thinking technology, we help businesses move beyond what's possible.
            </p>

            {/* Primary & Secondary Action CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button
                href="#projects"
                variant="primary"
                size="lg"
                className="text-base font-bold px-8 py-3.5 shadow-lg shadow-violet-500/25 hover:shadow-xl hover:shadow-violet-500/35 transition-all duration-300"
              >
                Explore Our Work
              </Button>

              <Button
                href="#contact"
                onClick={onBuildTogether}
                variant="outline"
                size="lg"
                className="text-base font-bold px-7 py-3.5 text-slate-800 hover:text-slate-950 hover:bg-slate-50 transition-all duration-300"
                iconRight={<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />}
              >
                Let's Build Together
              </Button>
            </div>

            {/* Live Trust Metrics Strip */}
            <div className="pt-6 grid grid-cols-3 gap-4 border-t border-slate-100 max-w-xl">
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-950 font-heading">
                  100<span className="text-[#8B5CF6]">+</span>
                </div>
                <div className="text-xs sm:text-sm font-medium text-slate-500 mt-0.5">
                  Projects Delivered
                </div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-950 font-heading">
                  99.8<span className="text-[#8B5CF6]">%</span>
                </div>
                <div className="text-xs sm:text-sm font-medium text-slate-500 mt-0.5">
                  Client Satisfaction
                </div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-950 font-heading">
                  10<span className="text-[#8B5CF6]">+</span>
                </div>
                <div className="text-xs sm:text-sm font-medium text-slate-500 mt-0.5">
                  Years of Expertise
                </div>
              </div>
            </div>

            {/* Scroll Indicator */}
            <div className="pt-1 flex items-center">
              <a
                href="#highlights"
                className="inline-flex items-center gap-2.5 text-sm font-semibold text-slate-500 hover:text-[#8B5CF6] transition-colors group cursor-pointer"
              >
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-violet-50 text-[#8B5CF6] group-hover:bg-[#8B5CF6] group-hover:text-white transition-all duration-300">
                  <ArrowDown className="h-3.5 w-3.5 animate-bounce" />
                </span>
                <span>Discover What's Possible</span>
              </a>
            </div>
          </div>

          {/* Right Column: Ultra-Chic Modern Glass Showcase */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            <div className="relative w-full max-w-[520px]">
              {/* Ambient Glow Aura */}
              <div className="absolute -inset-3 bg-gradient-to-tr from-[#8B5CF6]/20 via-[#a78bfa]/15 to-transparent rounded-3xl blur-2xl -z-10 transform -rotate-1" />

              {/* Main Glass Showcase Card */}
              <div className="relative rounded-2xl bg-white/95 backdrop-blur-xl border border-slate-200/90 shadow-[0_20px_50px_rgba(15,23,42,0.08)] overflow-hidden">
                {/* Window Top Navigation Bar */}
                <div className="flex items-center justify-between px-5 py-3.5 border-b border-slate-100 bg-slate-50/60">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-400 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-400 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-400 inline-block" />
                    <span className="ml-2 text-xs font-mono font-medium text-slate-400">inwebz.solutions / preview</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-600 text-xs font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Live System
                  </div>
                </div>

                {/* Window Inner Content */}
                <div className="p-6 sm:p-7 space-y-5">
                  {/* Center Obsidian Brand Showcase */}
                  <div className="relative rounded-xl p-8 bg-gradient-to-br from-[#0c1222] via-[#090e1a] to-[#131b2e] border border-slate-800 text-center flex flex-col items-center justify-center overflow-hidden group">
                    {/* Matrix Grid */}
                    <div className="absolute inset-0 bg-[radial-gradient(#8B5CF6_1px,transparent_1px)] [background-size:16px_16px] opacity-25" />
                    <div className="absolute -top-12 -right-12 w-36 h-36 bg-[#8B5CF6]/20 rounded-full blur-2xl pointer-events-none" />

                    {/* Inwebz Transparent Logo */}
                    <div className="relative z-10 py-1">
                      <Logo theme="dark" size="lg" className="transform group-hover:scale-105 transition-transform duration-500" />
                    </div>

                    <div className="relative z-10 mt-4 flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-slate-200 text-xs font-mono">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6] animate-ping" />
                      Engineering What's Next
                    </div>
                  </div>

                  {/* High-Performance Architecture Badges */}
                  <div className="grid grid-cols-2 gap-3.5">
                    <div className="p-3.5 rounded-xl bg-slate-50/80 border border-slate-100 flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-violet-100 text-[#8B5CF6] flex items-center justify-center shrink-0">
                        <Zap className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-[11px] font-medium text-slate-500">Performance</div>
                        <div className="text-sm font-bold text-slate-900 font-heading">99.8% Speed</div>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-50/80 border border-slate-100 flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center shrink-0">
                        <ShieldCheck className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-[11px] font-medium text-slate-500">Security</div>
                        <div className="text-sm font-bold text-slate-900 font-heading">Enterprise</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Glass Badge 1: Top Right */}
              <div className="absolute -top-4 -right-4 bg-white/95 backdrop-blur-md rounded-2xl px-4 py-3 shadow-[0_10px_30px_rgba(15,23,42,0.1)] border border-slate-200/80 flex items-center gap-3 animate-float-slow z-20">
                <div className="w-9 h-9 rounded-xl bg-violet-50 text-[#8B5CF6] flex items-center justify-center font-bold">
                  <Code2 className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900 font-heading">Engineered</div>
                  <div className="text-[11px] text-slate-500 font-medium">With Precision</div>
                </div>
              </div>

              {/* Floating Glass Badge 2: Bottom Left */}
              <div className="absolute -bottom-5 -left-4 bg-white/95 backdrop-blur-md rounded-2xl px-4 py-3 shadow-[0_10px_30px_rgba(15,23,42,0.1)] border border-slate-200/80 flex items-center gap-3 animate-float-reverse z-20">
                <div className="w-9 h-9 rounded-xl bg-fuchsia-50 text-[#8B5CF6] flex items-center justify-center font-bold">
                  <Sparkles className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900 font-heading">Thoughtful Design</div>
                  <div className="text-[11px] text-slate-500 font-medium">Scalable Architecture</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
