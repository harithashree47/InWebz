import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Star, Zap } from 'lucide-react';
import Button from '../components/common/Button';
import FadeIn from '../components/common/FadeIn';
import Logo from '../components/common/Logo';

const BG_BUBBLES = [
  { id: 'bg-1', pos: 'top-24 left-[8%]', size: 'w-3 h-3', bubble: 'bg-[#7c3aed]/70', star: 'text-[#7c3aed] fill-[#7c3aed] h-4 w-4' },
  { id: 'bg-2', pos: 'bottom-32 left-[34%]', size: 'w-4 h-4', bubble: 'bg-[#ddd6fe]', star: 'text-[#8B5CF6] fill-[#c4b5fd] h-5 w-5' },
  { id: 'bg-3', pos: 'top-28 right-[14%]', size: 'w-2.5 h-2.5', bubble: 'bg-[#6366F1]/70', star: 'text-indigo-500 fill-indigo-400 h-4 w-4' },
  { id: 'bg-4', pos: 'bottom-36 right-[6%]', size: 'w-4 h-4', bubble: 'bg-[#fca5a5]/70', star: 'text-amber-400 fill-amber-400 h-5 w-5' },
];

const CARD_BUBBLES = [
  { id: 'card-1', pos: '-top-7 -left-6', size: 'w-3 h-3', bubble: 'bg-[#6D28D9] animate-float-slow', star: 'text-amber-400 fill-amber-400 h-4 w-4' },
  { id: 'card-2', pos: '-top-5 right-10', size: 'w-2.5 h-2.5', bubble: 'bg-[#6366F1] animate-float-reverse', star: 'text-[#8B5CF6] fill-[#8B5CF6] h-4 w-4' },
  { id: 'card-3', pos: '-bottom-6 -left-8', size: 'w-4 h-4', bubble: 'bg-[#7C3AED]/75 animate-float-reverse', star: 'text-violet-300 fill-violet-400 h-5 w-5' },
  { id: 'card-4', pos: 'bottom-8 -right-8', size: 'w-3.5 h-3.5', bubble: 'bg-[#A78BFA]/80 animate-float-slow', star: 'text-amber-400 fill-amber-400 h-4 w-4' },
];

function InteractiveBubble({ item, isStarred, onToggle, className = '' }) {
  return (
    <button
      type="button"
      onClick={() => onToggle(item.id)}
      aria-label={isStarred ? 'Reset star to bubble' : 'Turn bubble into star'}
      className={`pointer-events-auto absolute ${item.pos} flex items-center justify-center cursor-pointer transition-transform duration-300 hover:scale-125 focus:outline-none ${className}`}
    >
      {isStarred ? (
        <Star className={`${item.star} drop-shadow-[0_4px_12px_rgba(139,92,246,0.45)] animate-[floatSlow_3s_ease-in-out_infinite] transition-all duration-300 scale-110`} />
      ) : (
        <span className={`block rounded-full transition-all duration-300 ${item.size} ${item.bubble}`} />
      )}
    </button>
  );
}

export default function Hero({ onBuildTogether }) {
  const [starredIds, setStarredIds] = useState({});

  const toggleBubble = (id) => {
    setStarredIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };
  return (
    <section
      id="home"
      className="relative pt-28 sm:pt-36 lg:pt-40 pb-24 sm:pb-32 overflow-hidden bg-white w-full"
    >
      {/* Subtle modern dot matrix canvas overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:28px_28px] [mask-image:radial-gradient(ellipse_75%_55%_at_50%_20%,#000_60%,transparent_100%)] opacity-55" />

      {/* Clickable Pastel Circles, Hollow Rings & Accent Dots Background */}
      <div className="pointer-events-none hidden sm:block absolute inset-0 overflow-hidden z-10">
        {BG_BUBBLES.map((item) => (
          <InteractiveBubble
            key={item.id}
            item={item}
            isStarred={Boolean(starredIds[item.id])}
            onToggle={toggleBubble}
          />
        ))}
      </div>

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

          {/* Right Column: Original Inwebz Glass Showcase Card + Violet Blob & Bubbles */}
          <FadeIn delay={3} className="lg:col-span-6">
            <div className="relative flex justify-center items-center py-6">
              <div className="relative w-full max-w-[520px]">
                {/* Two-Tone Organic Violet Blob Behind Showcase */}
                <svg
                  viewBox="0 0 200 200"
                  className="pointer-events-none absolute -inset-10 sm:-inset-14 w-[calc(100%+5rem)] sm:w-[calc(100%+7rem)] h-[calc(100%+5rem)] sm:h-[calc(100%+7rem)] -z-10 animate-float-slow"
                  aria-hidden="true"
                >
                <defs>
                  <linearGradient id="heroRightBlobBack" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#8B5CF6" />
                    <stop offset="100%" stopColor="#6D28D9" />
                  </linearGradient>
                  <linearGradient id="heroRightBlobFront" x1="20%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#7C3AED" />
                    <stop offset="100%" stopColor="#4C1D95" />
                  </linearGradient>
                </defs>
                {/* Lighter Lavender-Violet Layer */}
                <path
                  fill="url(#heroRightBlobBack)"
                  opacity="0.85"
                  d="M44.6,-69.8C57.9,-62.3,68.8,-50.1,75.4,-35.9C82,-21.7,84.3,-5.5,81.4,9.8C78.5,25.1,70.4,39.5,59.1,51.2C47.8,62.9,33.3,71.9,17.3,76.3C1.3,80.7,-16.2,80.5,-31.8,74.1C-47.4,67.7,-61.1,55.1,-70.3,39.7C-79.5,24.3,-84.2,6.1,-80.7,-10.7C-77.2,-27.5,-65.5,-42.9,-51.4,-50.6C-37.3,-58.3,-20.8,-58.3,-4.1,-53.2C12.6,-48.1,31.3,-77.3,44.6,-69.8Z"
                  transform="translate(96 98) scale(1.02)"
                />
                {/* Deeper Indigo-Violet Layer */}
                <path
                  fill="url(#heroRightBlobFront)"
                  opacity="0.92"
                  d="M47.7,-72.6C61.5,-64.2,72.2,-50.5,78.5,-35.1C84.8,-19.7,86.7,-2.6,83.1,13.4C79.5,29.4,70.4,44.3,58.1,55.9C45.8,67.5,30.3,75.8,13.6,79.4C-3.1,83,-21,81.9,-36.8,74.8C-52.6,67.7,-66.3,54.6,-74.2,38.7C-82.1,22.8,-84.2,4.1,-79.9,-13.1C-75.6,-30.3,-64.9,-46,-50.9,-54.7C-36.9,-63.4,-19.6,-65.1,-1.5,-63.2C16.6,-61.3,33.9,-81,47.7,-72.6Z"
                  transform="translate(106 102) scale(0.95)"
                />
              </svg>

              {/* Main Glass Showcase Card */}
              <div className="relative rounded-2xl bg-white/95 backdrop-blur-xl border border-slate-200/90 shadow-[0_20px_50px_rgba(15,23,42,0.08)] overflow-hidden hover:-translate-y-1 transition-transform duration-500">
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

              {/* Clickable Floating Bokeh Bubbles & Crisp Dots */}
              {CARD_BUBBLES.map((item) => (
                <InteractiveBubble
                  key={item.id}
                  item={item}
                  isStarred={Boolean(starredIds[item.id])}
                  onToggle={toggleBubble}
                  className="z-20"
                />
              ))}
              </div>
            </div>
          </FadeIn>
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
