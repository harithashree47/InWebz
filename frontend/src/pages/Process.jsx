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
    <section className="relative py-20 sm:py-28 overflow-hidden bg-white w-full border-t border-slate-100">
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 text-center">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto space-y-4 mb-16">
          <div className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#8B5CF6] font-mono">
            // OUR APPROACH
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-[#090e1a] tracking-tight leading-[1.18]">
            From First Thought{' '}
            <span className="text-[#8B5CF6] font-bold">To Final Execution.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#1e293b] font-normal leading-relaxed">
            A structured approach, collaborative mindset and attention to detail guide every project we undertake.
          </p>
        </div>

        {/* 5-Step Process Pipeline on clean white */}
        <div className="relative w-full max-w-6xl mx-auto">
          {/* Connector Line on md+ */}
          <div className="hidden md:block absolute top-[32px] left-[8%] right-[8%] h-[2px] border-t-2 border-dashed border-violet-200 -z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 relative z-10">
            {PHASES.map((phase) => {
              const Icon = phase.icon;
              return (
                <div key={phase.step} className="flex flex-col items-center group text-center">
                  {/* Step icon circle */}
                  <div className="relative h-16 w-16 rounded-full bg-white shadow-soft-card border-2 border-slate-200 flex items-center justify-center text-[#8B5CF6] group-hover:scale-110 group-hover:border-[#8B5CF6] group-hover:bg-[#8B5CF6] group-hover:text-white transition-all duration-300">
                    <Icon className="h-7 w-7 stroke-[1.8]" />
                  </div>

                  {/* Step Number */}
                  <div className="text-xs font-mono font-bold text-[#8B5CF6] mt-3.5 tracking-wider uppercase">
                    Phase {phase.step}
                  </div>

                  {/* Step Title */}
                  <h3 className="text-lg font-bold font-heading text-slate-900 mt-1">
                    {phase.title}
                  </h3>

                  {/* Step Description */}
                  <p className="text-sm text-[#1e293b] mt-1.5 leading-relaxed font-normal max-w-[210px]">
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
