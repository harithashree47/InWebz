import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';
import Button from '../components/common/Button';
import FadeIn from '../components/common/FadeIn';
import Logo from '../components/common/Logo';

export default function Hero({ onBuildTogether }) {
  return (
    <section
      id="home"
      className="relative pt-28 sm:pt-36 lg:pt-40 pb-24 sm:pb-32 overflow-hidden bg-white w-full"
    >
      {/* Subtle modern dot matrix canvas overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:28px_28px] [mask-image:radial-gradient(ellipse_75%_55%_at_50%_20%,#000_60%,transparent_100%)] opacity-70" />

      {/* Subtle floating Figma accent dots */}
      <div className="pointer-events-none absolute top-28 left-[12%] w-2.5 h-2.5 rounded-full bg-[#8B5CF6]/30" />
      <div className="pointer-events-none absolute bottom-32 left-[42%] w-3 h-3 rounded-full bg-[#8B5CF6]/25 blur-[1px]" />
      <div className="pointer-events-none absolute top-36 right-[8%] w-3.5 h-3.5 rounded-full bg-[#6D28D9]/25" />

      <div className="relative z-10 w-full px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: Clean Editorial Typography & Actions */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <FadeIn delay={1}>
              <div className="text-xs sm:text-[13px] font-bold tracking-[0.18em] uppercase text-[#8B5CF6]">
                Innovation • Engineering • Digital Excellence
              </div>
            </FadeIn>

            <FadeIn delay={2}>
              <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-extrabold font-heading text-[#090e1a] tracking-tight leading-[1.12]">
                Where Vision Meets{' '}
                <span className="text-[#8B5CF6]">Technology.</span>
                <span className="block mt-1.5">
                  Where Possibilities Become Reality.
                </span>
              </h1>
            </FadeIn>

            <FadeIn delay={3}>
              <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-xl">
                We transform ambitious ideas into exceptional digital solutions. Through intelligent engineering, thoughtful design and forward-thinking technology, we help businesses move beyond what&apos;s possible.
              </p>
            </FadeIn>

            <FadeIn delay={4}>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Button
                  href="#contact"
                  onClick={onBuildTogether}
                  variant="primary"
                  size="lg"
                  className="rounded-xl text-sm sm:text-base font-bold px-7 py-3.5 shadow-[0_12px_28px_-6px_rgba(124,58,237,0.45)] hover:shadow-[0_16px_32px_-6px_rgba(124,58,237,0.6)] transition-all duration-300"
                  iconRight={<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />}
                >
                  Let&apos;s Discuss
                </Button>

                <Button
                  href="#projects"
                  variant="outline"
                  size="lg"
                  className="rounded-xl text-sm sm:text-base font-bold px-7 py-3.5 text-slate-800 hover:text-[#8B5CF6] hover:border-violet-300 transition-all duration-300"
                >
                  Explore Our Work
                </Button>
              </div>
            </FadeIn>

            {/* Clean Trust Strip */}
            <FadeIn delay={5}>
              <div className="pt-4 flex flex-wrap items-center gap-6 text-xs sm:text-sm font-medium text-slate-500">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#8B5CF6]" />
                  <span>50+ Projects Delivered</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#8B5CF6]" />
                  <span>5+ Years of Expertise</span>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right Column: Original Inwebz Glass Showcase Card + Dot-Matrix Grid */}
          <div className="lg:col-span-6 relative flex justify-center items-center py-6">
            <div className="relative w-full max-w-[520px]">
              {/* Dot-grid accents behind showcase */}
              <div className="pointer-events-none absolute -top-6 -right-4 w-28 h-24 bg-[radial-gradient(#94a3b8_1.5px,transparent_1.5px)] [background-size:12px_12px] opacity-45" />
              <div className="pointer-events-none absolute -bottom-6 -left-4 w-28 h-24 bg-[radial-gradient(#94a3b8_1.5px,transparent_1.5px)] [background-size:12px_12px] opacity-45" />

              {/* Ambient Glow Aura */}
              <div className="pointer-events-none absolute -inset-3 bg-gradient-to-tr from-[#8B5CF6]/20 via-[#a78bfa]/15 to-transparent rounded-3xl blur-2xl -z-10 transform -rotate-1" />

              {/* Main Glass Showcase Card */}
              <div className="relative rounded-2xl bg-white/95 backdrop-blur-xl border border-slate-200/90 shadow-[0_20px_50px_rgba(15,23,42,0.08)] overflow-hidden">
                {/* Window Top Navigation Bar */}
                <div className="flex items-center justify-between px-5 py-3.5 border-b border-slate-100 bg-slate-50/60">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-400 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-400 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-400 inline-block" />
                    <span className="ml-2 text-xs font-mono font-medium text-slate-400">
                      inwebz.solutions / preview
                    </span>
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
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#8B5CF6_1px,transparent_1px)] [background-size:16px_16px] opacity-25" />
                    <div className="pointer-events-none absolute -top-12 -right-12 w-36 h-36 bg-[#8B5CF6]/20 rounded-full blur-2xl" />

                    {/* Inwebz Logo */}
                    <div className="relative z-10 py-1">
                      <Logo
                        theme="dark"
                        size="lg"
                        className="transform group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    <div className="relative z-10 mt-4 flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-slate-200 text-xs font-mono">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6] animate-ping" />
                      Engineering What&apos;s Next
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

              {/* Floating Circle Dots around the Showcase */}
              <div className="pointer-events-none absolute -top-5 -right-3 w-7 h-7 rounded-full bg-[#8B5CF6]/25 border border-[#8B5CF6]/30 animate-float-slow z-20" />
              <div className="pointer-events-none absolute -top-2 right-12 w-3.5 h-3.5 rounded-full bg-[#A78BFA]/70 z-20" />
              <div className="pointer-events-none absolute top-1/2 -right-6 w-4 h-4 rounded-full bg-[#8B5CF6]/40 z-20" />
              <div className="pointer-events-none absolute -bottom-5 -left-3 w-8 h-8 rounded-full bg-[#8B5CF6]/20 border border-[#8B5CF6]/25 animate-float-reverse z-20" />
              <div className="pointer-events-none absolute -bottom-2 left-12 w-3.5 h-3.5 rounded-full bg-[#6D28D9]/45 z-20" />
            </div>
          </div>
        </div>
      </div>

      {/* Single Light Bottom Wave Divider */}
      <div className="pointer-events-none absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 110"
          className="w-full h-20 sm:h-28 text-[#EDE9FE]"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            fill="currentColor"
            d="M0,84 C360,28 720,96 1080,46 C1260,20 1360,12 1440,8 L1440,110 L0,110 Z"
          />
        </svg>
      </div>
    </section>
  );
}
