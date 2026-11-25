import React, { useEffect, useRef, useState } from 'react';
import { Rocket, Users, Wrench, Award } from 'lucide-react';
import FadeIn from '../components/common/FadeIn';

const STATS = [
  {
    number: '50+',
    value: 50,
    label: 'Projects Delivered',
    desc: 'High-performance digital products engineered and shipped.',
    Icon: Rocket,
  },
  {
    number: '30+',
    value: 30,
    label: 'Successful Collaborations',
    desc: 'Long-term partnerships across startups and growing enterprises.',
    Icon: Users,
  },
  {
    number: '25+',
    value: 25,
    label: 'Technologies & Tools',
    desc: 'Modern tech stacks mastered for speed, scale and security.',
    Icon: Wrench,
  },
  {
    number: '5+',
    value: 5,
    label: 'Years of Expertise',
    desc: 'Deep industry experience across digital product lifecycles.',
    Icon: Award,
  },
];

export default function Highlights() {
  const sectionRef = useRef(null);
  const rafs = useRef([]);
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState(STATS.map((stat) => stat.number));

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return undefined;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setIsVisible(true);
        });
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return undefined;
    rafs.current = [];
    STATS.forEach((stat, i) => {
      const startTime = performance.now();
      const duration = 1500;
      const tick = (now) => {
        const progress = Math.min((now - startTime) / duration, 1);
        const value = Math.floor(progress * stat.value);
        setCounts((prev) => {
          const next = [...prev];
          next[i] = `${value}${stat.number.endsWith('+') ? '+' : ''}`;
          return next;
        });
        if (progress < 1) {
          rafs.current[i] = requestAnimationFrame(tick);
        }
      };
      rafs.current[i] = requestAnimationFrame(tick);
    });
    return () => {
      rafs.current.forEach((id) => cancelAnimationFrame(id));
    };
  }, [isVisible]);

  return (
    <section
      id="highlights"
      ref={sectionRef}
      className="relative py-20 sm:py-28 overflow-hidden bg-gradient-to-b from-slate-50/80 via-violet-50/30 to-slate-50/70 w-full border-y border-slate-100"
    >
      <div className="w-full px-3 sm:px-5 lg:px-6">
        <FadeIn delay={1}>
          <div className="max-w-3xl mb-14 text-center mx-auto px-2">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-[#090e1a] tracking-tight leading-[1.18]">
              Measuring Impact,{' '}
              <span className="text-[#8B5CF6] font-bold">Not Just Milestones</span>
            </h2>

            <p className="text-base sm:text-lg text-[#1e293b] font-normal leading-relaxed mt-4">
              Trusted by startups and growing enterprises to ship digital products that perform at scale.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 max-w-7xl mx-auto">
          {STATS.map((stat, idx) => {
            const Icon = stat.Icon;
            return (
              <FadeIn
                key={idx}
                delay={idx + 1}
                className="h-full"
              >
                <div className="relative h-full bg-white/75 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-7 sm:p-8 border border-white/80 ring-1 ring-slate-200/60 shadow-[0_14px_38px_-10px_rgba(15,23,42,0.12),0_4px_14px_-4px_rgba(139,92,246,0.1),inset_0_1px_0_0_rgba(255,255,255,0.95)] hover:bg-white/90 hover:ring-violet-200/80 hover:shadow-[0_24px_50px_-12px_rgba(139,92,246,0.24),0_10px_24px_-6px_rgba(15,23,42,0.1),inset_0_1px_0_0_rgba(255,255,255,1)] hover:-translate-y-1.5 transition-all duration-300 ease-out flex flex-col justify-between group overflow-hidden">
                  <div className="pointer-events-none absolute -top-12 -right-12 h-32 w-32 rounded-full bg-violet-100/60 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-7">
                      <div className="h-12 w-12 rounded-2xl bg-violet-50/90 border border-violet-100/80 text-[#8B5CF6] flex items-center justify-center shadow-[0_4px_12px_-2px_rgba(139,92,246,0.12)] group-hover:bg-[#8B5CF6] group-hover:text-white group-hover:border-[#8B5CF6] group-hover:shadow-[0_8px_20px_-4px_rgba(139,92,246,0.4)] group-hover:scale-105 transition-all duration-300">
                        <Icon className="h-5 w-5 stroke-[1.9]" />
                      </div>
                      <span className="text-xs font-mono font-semibold text-slate-300 group-hover:text-violet-400 transition-colors duration-300">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                    </div>

                    <div className="text-4xl sm:text-5xl font-extrabold font-heading tracking-tight bg-gradient-to-r from-[#8B5CF6] via-[#7c3aed] to-[#6366f1] bg-clip-text text-transparent tabular-nums mb-2">
                      {counts[idx]}
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold font-heading text-indigo-950 group-hover:text-[#8B5CF6] transition-colors duration-300 mb-2">
                      {stat.label}
                    </h3>

                    <p className="text-sm text-slate-600 leading-relaxed font-normal">
                      {stat.desc}
                    </p>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
