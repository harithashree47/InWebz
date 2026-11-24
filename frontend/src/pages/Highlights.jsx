import React from 'react';
import { Rocket, Users, Wrench, Award } from 'lucide-react';

const STATS = [
  {
    number: '50+',
    label: 'Projects Delivered',
    icon: Rocket,
    desc: 'High-performance digital products engineered and shipped.',
  },
  {
    number: '30+',
    label: 'Successful Collaborations',
    icon: Users,
    desc: 'Long-term partnerships across startups and growing enterprises.',
  },
  {
    number: '25+',
    label: 'Technologies & Tools',
    icon: Wrench,
    desc: 'Modern tech stacks mastered for speed, scale and security.',
  },
  {
    number: '5+',
    label: 'Years of Expertise',
    icon: Award,
    desc: 'Deep industry experience across digital product lifecycles.',
  },
];

export default function Highlights() {
  return (
    <section id="highlights" className="relative py-16 sm:py-20 bg-white border-y border-slate-100 w-full">
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
        {/* Sleek section label without capsule bubble */}
        <div className="text-center mb-10">
          <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#8B5CF6] font-mono">
            // OUR JOURNEY IN NUMBERS
          </span>
        </div>

        {/* 4 Stats Grid on clean white */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {STATS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-7 border border-slate-200/80 shadow-soft-card hover:border-violet-300 hover:shadow-lg transition-all duration-300 flex flex-col items-center sm:items-start text-center sm:text-left group"
              >
                <div className="p-3.5 rounded-xl bg-violet-50 text-[#8B5CF6] mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="h-6 w-6 stroke-[2]" />
                </div>

                <div className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 group-hover:text-[#8B5CF6] transition-colors">
                  {item.number}
                </div>

                <div className="text-base font-bold text-slate-900 font-heading mt-1">
                  {item.label}
                </div>

                <p className="text-sm text-[#1e293b] mt-1.5 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
