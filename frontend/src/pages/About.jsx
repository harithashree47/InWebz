import React from 'react';
import { Eye, Target } from 'lucide-react';
import Button from '../components/common/Button';
import FadeIn from '../components/common/FadeIn';

const PILLARS = [
  {
    id: 'vision',
    eyebrow: 'Our Horizon',
    title: 'Our Vision',
    description:
      'To become a catalyst for digital transformation, shaping a future where technology creates limitless opportunities.',
    Icon: Eye,
  },
  {
    id: 'mission',
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
      className="relative py-20 sm:py-28 overflow-hidden bg-white w-full"
    >
      <div className="relative w-full px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Studio Photo + Vision & Mission Cards */}
          <FadeIn delay={1} className="lg:col-span-6">
            <div className="max-w-2xl mx-auto lg:mr-auto">
              {/* Clean Studio Collaboration Photo */}
              <div className="rounded-3xl overflow-hidden shadow-[0_20px_50px_-15px_rgba(15,23,42,0.18)] border border-slate-100">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=85"
                  alt="Inwebzz engineering and design team collaborating"
                  loading="lazy"
                  className="w-full h-[270px] sm:h-[320px] object-cover object-top block"
                />
              </div>

              {/* Side-by-Side Vision & Mission Cards below Photo */}
              <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {PILLARS.map((pillar) => {
                  const Icon = pillar.Icon;
                  return (
                    <div
                      key={pillar.id}
                      className="h-full bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/80 shadow-[0_12px_30px_-10px_rgba(15,23,42,0.08)] hover:border-violet-200 hover:shadow-[0_16px_36px_-10px_rgba(139,92,246,0.15)] transition-all duration-300 group flex flex-col justify-start"
                    >
                      <div className="flex items-center gap-3 mb-2.5">
                        <div className="h-9 w-9 rounded-xl bg-violet-50 border border-violet-100 text-[#8B5CF6] flex items-center justify-center shrink-0 group-hover:bg-[#8B5CF6] group-hover:text-white transition-colors duration-300">
                          <Icon className="h-4 w-4 stroke-[2]" />
                        </div>
                        <h3 className="text-lg sm:text-xl font-bold font-heading text-[#090e1a]">
                          {pillar.title}
                        </h3>
                      </div>

                      <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </FadeIn>

          {/* Right Column: Get to Know Inwebzz Text Content */}
          <FadeIn delay={2} className="lg:col-span-6">
            <div className="space-y-6 text-left">
              <div className="inline-block">
                <span className="text-base sm:text-lg font-bold font-heading text-[#090e1a] tracking-tight">
                  Get to Know Inwebzz
                </span>
                <span className="block h-[2.5px] w-24 bg-[#8B5CF6] rounded-full mt-1.5" />
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold font-heading text-[#090e1a] tracking-tight leading-[1.18]">
                We Think Beyond Code.{' '}
                <span className="block mt-1 text-[#8B5CF6]">
                  We Engineer What&apos;s Next.
                </span>
              </h2>

              <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed max-w-xl">
                At Inwebzz, technology is more than a tool — it&apos;s an opportunity to create something meaningful. We are a software solutions company driven by innovation, creativity and technical excellence. From intuitive digital experiences to powerful software applications, we turn complex challenges into purposeful solutions.
              </p>

              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <Button
                  href="#projects"
                  variant="primary"
                  size="md"
                  className="rounded-full text-sm font-bold px-7 py-3 shadow-[0_10px_24px_-6px_rgba(139,92,246,0.45)]"
                >
                  View Portfolio
                </Button>

                <button
                  type="button"
                  onClick={onDiscoverStory}
                  className="rounded-full bg-slate-100 hover:bg-violet-50 text-slate-800 hover:text-[#8B5CF6] border border-slate-200/80 hover:border-violet-200 text-sm font-semibold px-7 py-3 transition-all duration-300 cursor-pointer"
                >
                  Discover Our Story
                </button>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
