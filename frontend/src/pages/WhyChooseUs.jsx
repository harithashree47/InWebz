import React from 'react';
import { Lightbulb, Target, CheckCircle2, ShieldCheck, Compass, Zap } from 'lucide-react';

const ADVANTAGES = [
  {
    title: 'Innovation First',
    description:
      'We approach every challenge with fresh perspectives and forward-thinking ideas.',
    icon: Lightbulb,
  },
  {
    title: 'Technology With Purpose',
    description:
      'We choose the right technologies to create meaningful business outcomes.',
    icon: Target,
  },
  {
    title: 'Precision In Every Detail',
    description:
      'We believe exceptional results begin with attention to the smallest details.',
    icon: CheckCircle2,
  },
  {
    title: 'Quality Without Compromise',
    description:
      'We maintain high standards throughout every stage of development.',
    icon: ShieldCheck,
  },
  {
    title: 'Built Around Your Vision',
    description:
      'Your goals shape our strategy, design and development decisions.',
    icon: Compass,
  },
  {
    title: 'Evolving With Technology',
    description:
      'We embrace modern advancements to build solutions ready for tomorrow.',
    icon: Zap,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative py-20 sm:py-28 overflow-hidden bg-white w-full border-t border-slate-100">
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 text-left">
          <div className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#8B5CF6] font-mono flex items-center gap-2 mb-3">
            <span className="h-1.5 w-6 rounded-full bg-[#8B5CF6] inline-block" />
            THE INWEBZZ ADVANTAGE
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-[#090e1a] tracking-tight leading-[1.18]">
            Excellence Isn't An Option.{' '}
            <span className="text-[#8B5CF6] font-bold">It's Our Approach.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#1e293b] font-normal leading-relaxed mt-4">
            Every solution we create reflects our commitment to thoughtful innovation, technical precision and meaningful results.
          </p>
        </div>

        {/* 6 Advantage Cards Grid on clean white */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {ADVANTAGES.map((adv, idx) => {
            const Icon = adv.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl sm:rounded-3xl p-7 sm:p-8 border border-slate-200/80 hover:border-violet-300 hover:shadow-lg transition-all duration-300 group shadow-soft-card"
              >
                <div className="h-12 w-12 rounded-2xl bg-violet-50 text-[#8B5CF6] flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-[#8B5CF6] group-hover:text-white transition-all">
                  <Icon className="h-6 w-6 stroke-[1.8]" />
                </div>

                <h3 className="text-xl font-bold font-heading text-slate-900 group-hover:text-[#8B5CF6] transition-colors mb-2">
                  {adv.title}
                </h3>

                <p className="text-sm text-[#1e293b] leading-relaxed font-normal">
                  {adv.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
