import React from 'react';
import { Eye, Target } from 'lucide-react';
import Button from '../components/common/Button';

export default function About({ onDiscoverStory }) {
  return (
    <section id="about" className="relative py-20 sm:py-28 overflow-hidden bg-white w-full">
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Heading, Description & Story CTA */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#8B5CF6] font-mono flex items-center gap-2">
              <span className="h-1.5 w-6 rounded-full bg-[#8B5CF6] inline-block" />
              GET TO KNOW INWEBZZ
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-[#090e1a] tracking-tight leading-[1.18]">
              We Think Beyond Code.{' '}
              <span className="text-[#8B5CF6] block mt-1.5 font-bold">
                We Engineer What's Next.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-[#1e293b] font-normal leading-relaxed">
              At Inwebzz, technology is more than a tool — it's an opportunity to create something meaningful. We are a software solutions company driven by innovation, creativity and technical excellence. From intuitive digital experiences to powerful software applications, we turn complex challenges into purposeful solutions.
            </p>

            <div className="pt-2">
              <Button
                href="#services"
                onClick={onDiscoverStory}
                variant="primary"
                size="md"
                className="text-base font-bold px-7 py-3"
              >
                Discover Our Story
              </Button>
            </div>
          </div>

          {/* Right Column: Vision & Mission Cards on pure white */}
          <div className="lg:col-span-6 space-y-5">
            {/* Vision Card */}
            <div className="bg-white rounded-2xl sm:rounded-3xl p-7 sm:p-8 border border-slate-200/80 shadow-soft-card hover:border-violet-300 transition-all duration-300 group">
              <div className="flex items-center gap-3.5 mb-3">
                <div className="h-11 w-11 rounded-xl bg-violet-50 text-[#8B5CF6] flex items-center justify-center font-bold">
                  <Eye className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#8B5CF6]">
                    Our Horizon
                  </div>
                  <h3 className="text-xl font-bold font-heading text-slate-900">
                    OUR VISION
                  </h3>
                </div>
              </div>
              <p className="text-base text-[#1e293b] leading-relaxed font-normal">
                To become a catalyst for digital transformation, shaping a future where technology creates limitless opportunities.
              </p>
            </div>

            {/* Mission Card */}
            <div className="bg-white rounded-2xl sm:rounded-3xl p-7 sm:p-8 border border-slate-200/80 shadow-soft-card hover:border-violet-300 transition-all duration-300 group">
              <div className="flex items-center gap-3.5 mb-3">
                <div className="h-11 w-11 rounded-xl bg-violet-50 text-[#8B5CF6] flex items-center justify-center font-bold">
                  <Target className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#8B5CF6]">
                    Our Purpose
                  </div>
                  <h3 className="text-xl font-bold font-heading text-slate-900">
                    OUR MISSION
                  </h3>
                </div>
              </div>
              <p className="text-base text-[#1e293b] leading-relaxed font-normal">
                To empower businesses through innovative, reliable and scalable digital solutions that deliver lasting value.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
