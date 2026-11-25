import React from 'react';
import { ArrowRight, Eye, Target } from 'lucide-react';
import Button from '../components/common/Button';
import FadeIn from '../components/common/FadeIn';

const PILLARS = [
  {
    index: '01',
    eyebrow: 'Our Horizon',
    title: 'Our Vision',
    description:
      'To become a catalyst for digital transformation, shaping a future where technology creates limitless opportunities.',
    Icon: Eye,
  },
  {
    index: '02',
    eyebrow: 'Our Purpose',
    title: 'Our Mission',
    description:
      'To empower businesses through innovative, reliable and scalable digital solutions that deliver lasting value.',
    Icon: Target,
  },
];

export default function About({ onDiscoverStory }) {
  return (
    <section
      id="about"
      className="relative py-20 sm:py-28 overflow-hidden bg-gradient-to-b from-white via-violet-50/20 to-white w-full"
    >
      {/* Subtle ambient glow behind the right column */}
      <div className="pointer-events-none absolute top-1/2 -right-24 -translate-y-1/2 w-[440px] h-[440px] rounded-full bg-violet-200/25 blur-3xl" />

      <div className="relative w-full px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Heading, Description & Story CTA */}
          <FadeIn delay={1} className="lg:col-span-6">
            <div className="space-y-6 text-left">
              <div className="inline-flex items-center gap-2.5 text-xs sm:text-[13px] font-bold tracking-[0.2em] uppercase text-[#8B5CF6]">
                <span className="w-2 h-2 rounded-full bg-[#8B5CF6] shadow-[0_0_10px_rgba(139,92,246,0.75)]" />
                <span>Get to Know Inwebzz</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-bold font-heading text-slate-900 tracking-tight leading-[1.16]">
                We Think Beyond Code.{' '}
                <span className="block mt-1.5 bg-gradient-to-r from-[#8B5CF6] via-[#7C3AED] to-[#4F46E5] bg-clip-text text-transparent font-bold">
                  We Engineer What's Next.
                </span>
              </h2>

              <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-xl">
                At Inwebzz, technology is more than a tool — it's an opportunity to create something meaningful. We are a software solutions company driven by innovation, creativity and technical excellence. From intuitive digital experiences to powerful software applications, we turn complex challenges into purposeful solutions.
              </p>

              <div className="pt-2">
                <Button
                  href="#services"
                  onClick={onDiscoverStory}
                  variant="primary"
                  size="lg"
                  className="text-base font-bold px-7 py-3.5 shadow-primary-glow transition-all duration-300"
                  iconRight={<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />}
                >
                  Discover Our Story
                </Button>
              </div>
            </div>
          </FadeIn>

          {/* Right Column: Elevated Glass Vision & Mission Cards */}
          <FadeIn delay={2} className="lg:col-span-6">
            <div className="space-y-6">
              {PILLARS.map((pillar) => {
                const Icon = pillar.Icon;
                return (
                  <div
                    key={pillar.index}
                    className="relative bg-white/80 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-7 sm:p-8 border border-white/80 ring-1 ring-slate-200/60 shadow-[0_14px_38px_-10px_rgba(15,23,42,0.1),0_4px_14px_-4px_rgba(139,92,246,0.08),inset_0_1px_0_0_rgba(255,255,255,0.95)] hover:bg-white/95 hover:ring-violet-200/80 hover:shadow-[0_24px_48px_-12px_rgba(139,92,246,0.22),0_10px_24px_-6px_rgba(15,23,42,0.08),inset_0_1px_0_0_rgba(255,255,255,1)] hover:-translate-y-1 transition-all duration-300 ease-out group overflow-hidden"
                  >
                    <div className="pointer-events-none absolute -top-12 -right-12 h-32 w-32 rounded-full bg-violet-100/60 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="relative z-10">
                      <div className="flex items-start justify-between gap-4 mb-4">
                        <div className="flex items-center gap-4">
                          <div className="h-12 w-12 rounded-2xl bg-violet-50/90 border border-violet-100/80 text-[#8B5CF6] flex items-center justify-center shadow-[0_4px_12px_-2px_rgba(139,92,246,0.12)] group-hover:bg-[#8B5CF6] group-hover:text-white group-hover:border-[#8B5CF6] group-hover:shadow-[0_8px_20px_-4px_rgba(139,92,246,0.38)] group-hover:scale-105 transition-all duration-300 shrink-0">
                            <Icon className="h-5 w-5 stroke-[1.9]" />
                          </div>
                          <div>
                            <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#8B5CF6]">
                              {pillar.eyebrow}
                            </div>
                            <h3 className="text-xl font-bold font-heading text-indigo-950 group-hover:text-[#8B5CF6] transition-colors duration-300">
                              {pillar.title}
                            </h3>
                          </div>
                        </div>

                        <span className="text-xs font-mono font-semibold text-slate-300 group-hover:text-violet-400 transition-colors duration-300">
                          {pillar.index}
                        </span>
                      </div>

                      <p className="text-base text-slate-600 leading-relaxed font-normal">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
