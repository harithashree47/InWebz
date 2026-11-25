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
      className="relative pt-20 sm:pt-28 pb-24 sm:pb-32 overflow-hidden bg-[#f4f5f7] w-full border-t border-slate-200/60"
    >
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
        <FadeIn delay={1}>
          <div className="max-w-3xl mb-14 text-center mx-auto px-2">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-[#090e1a] tracking-tight leading-[1.18]">
              Measuring Impact,{' '}
              <span className="text-[#8B5CF6] font-bold">Not Just Milestones</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed mt-4">
              Trusted by startups and growing enterprises to ship digital products that perform at scale.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={2}>
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
            {STATS.map((stat, idx) => {
              const Icon = stat.Icon;
              const rawCount = counts[idx];
              const hasPlus = rawCount.endsWith('+');
              const numericPart = hasPlus ? rawCount.slice(0, -1) : rawCount;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-3xl px-6 py-7 border border-white shadow-[0_18px_24px_-10px_rgba(15,23,42,0.22),0_4px_10px_-4px_rgba(15,23,42,0.06)] hover:-translate-y-1.5 hover:shadow-[0_24px_32px_-10px_rgba(139,92,246,0.28),0_8px_16px_-4px_rgba(15,23,42,0.08)] transition-all duration-300 flex items-center justify-center gap-4 group"
                >
                  <Icon className="h-8 w-8 sm:h-9 sm:w-9 text-[#8B5CF6] stroke-[1.6] shrink-0 group-hover:scale-110 transition-transform duration-300" />

                  <div className="text-left">
                    <div className="text-2xl sm:text-3xl font-extrabold font-heading tracking-tight text-[#090e1a] tabular-nums leading-none">
                      {numericPart}
                      {hasPlus && <span className="text-[#8B5CF6]">+</span>}
                    </div>
                    <div className="text-xs sm:text-sm font-medium text-slate-500 mt-1 leading-snug">
                      {stat.label}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </FadeIn>
      </div>

      {/* Repeating Scalloped Wave Bottom Divider */}
      <div className="pointer-events-none absolute -bottom-px left-0 w-full h-7 overflow-hidden leading-none">
        <svg className="w-full h-full block" aria-hidden="true">
          <defs>
            <pattern id="impactScallopWave" width="64" height="29" patternUnits="userSpaceOnUse">
              <path
                d="M0,29 L0,14 Q16,0 32,14 Q48,28 64,14 L64,29 Z"
                fill="#ffffff"
              />
            </pattern>
          </defs>
          <rect width="100%" height="29" fill="url(#impactScallopWave)" />
        </svg>
      </div>
    </section>
  );
}
