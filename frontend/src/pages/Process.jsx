import React from 'react';
import { Search, Compass, PenTool, Code, CheckCircle } from 'lucide-react';

const PHASES = [
  {
    step: '01',
    title: 'Discover',
    description: 'Understanding your vision, business objectives and unique challenges.',
    icon: Search,
  },
  {
    step: '02',
    title: 'Strategize',
    description: 'Defining the right approach, technology and roadmap for success.',
    icon: Compass,
  },
  {
    step: '03',
    title: 'Design',
    description: 'Transforming concepts into intuitive and visually engaging experiences.',
    icon: PenTool,
  },
  {
    step: '04',
    title: 'Develop',
    description: 'Engineering robust, scalable solutions with precision and performance.',
    icon: Code,
  },
  {
    step: '05',
    title: 'Deliver',
    description: 'Launching refined digital products and providing continued support.',
    icon: CheckCircle,
  },
];

export default function Process() {
  return (
    <section className="relative py-20 sm:py-28 overflow-hidden bg-[#f4f5f7] w-full border-t border-slate-200/60">
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 text-center">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <div className="inline-block mb-4">
            <span className="text-base sm:text-lg font-bold font-heading text-[#090e1a] tracking-tight">
              Our Process
            </span>
            <span className="block h-[2.5px] w-24 bg-[#8B5CF6] rounded-full mt-1.5 mx-auto" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold font-heading text-[#090e1a] tracking-tight leading-[1.18]">
            From First Thought{' '}
            <span className="block mt-1 text-[#8B5CF6]">
              To Final Execution.
            </span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed mt-4 max-w-2xl mx-auto">
            A structured approach, collaborative mindset and attention to detail guide every project we undertake.
          </p>
        </div>

        {/* 5-Step Clean Process Cards */}
        <div className="relative w-full max-w-7xl mx-auto">
          {/* Subtle Connector Line on lg+ */}
          <div className="hidden lg:block absolute top-1/2 left-[6%] right-[6%] h-[2px] border-t-2 border-dashed border-violet-200/80 -translate-y-1/2 z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 sm:gap-6 relative z-10">
            {PHASES.map((phase) => {
              const Icon = phase.icon;
              return (
                <div
                  key={phase.step}
                  className="bg-white rounded-3xl p-6 border border-white shadow-[0_18px_24px_-10px_rgba(15,23,42,0.18),0_4px_10px_-4px_rgba(15,23,42,0.05)] hover:-translate-y-1.5 hover:shadow-[0_24px_32px_-10px_rgba(139,92,246,0.26),0_8px_16px_-4px_rgba(15,23,42,0.08)] transition-all duration-300 flex flex-col items-center text-center group"
                >
                  {/* Step Badge */}
                  <span className="px-3 py-1 rounded-full bg-violet-50 text-[#8B5CF6] text-[11px] font-mono font-bold tracking-wider uppercase mb-4">
                    Phase {phase.step}
                  </span>

                  {/* Step Icon */}
                  <div className="h-14 w-14 rounded-2xl bg-violet-50/70 border border-violet-100 text-[#8B5CF6] flex items-center justify-center mb-4 group-hover:bg-[#8B5CF6] group-hover:text-white group-hover:border-[#8B5CF6] group-hover:scale-105 transition-all duration-300">
                    <Icon className="h-6 w-6 stroke-[1.8]" />
                  </div>

                  {/* Step Title */}
                  <h3 className="text-lg font-bold font-heading text-[#090e1a] group-hover:text-[#8B5CF6] transition-colors mb-2">
                    {phase.title}
                  </h3>

                  {/* Step Description */}
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-normal">
                    {phase.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
