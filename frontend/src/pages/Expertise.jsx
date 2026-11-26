import React, { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const TECH_TOOLS = [
  {
    name: 'HTML5',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',
  },
  {
    name: 'CSS3',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg',
  },
  {
    name: 'JavaScript',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
  },
  {
    name: 'Bootstrap',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg',
  },
  {
    name: 'Tailwind CSS',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
  },
  {
    name: 'React.js',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
  },
  {
    name: 'Node.js',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg',
  },
  {
    name: 'NestJS',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg',
  },
  {
    name: 'TypeScript',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
  },
  {
    name: 'PostgreSQL',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg',
  },
  {
    name: 'MongoDB',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg',
  },
  {
    name: 'Git & GitHub',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg',
  },
];

export default function Expertise() {
  const trackRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const el = trackRef.current;
    if (!el || isPaused) return undefined;

    let rafId;
    const step = () => {
      el.scrollLeft += 0.7;
      if (el.scrollLeft >= el.scrollWidth / 2) {
        el.scrollLeft = 0;
      }
      rafId = requestAnimationFrame(step);
    };
    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [isPaused]);

  const scrollByStep = (direction) => {
    const el = trackRef.current;
    if (!el) return;
    const amount = 260;
    if (direction < 0 && el.scrollLeft <= 10) {
      el.scrollLeft = el.scrollWidth / 2;
    }
    el.scrollBy({ left: direction * amount, behavior: 'smooth' });
  };

  return (
    <section
      id="expertise"
      className="relative py-20 sm:py-28 overflow-hidden bg-gradient-to-b from-[#faf9ff] via-white to-[#faf9ff] w-full border-t border-slate-100"
    >
      {/* Crisp Two-Tone Layered Corner Shapes (2 Corners) */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <svg
          viewBox="0 0 240 240"
          className="absolute -top-2 -right-2 w-48 h-48 sm:w-64 sm:h-64"
          fill="none"
        >
          <path d="M240,0 L240,210 C150,200 70,130 50,0 Z" fill="#ede9fe" fillOpacity="0.8" />
          <path d="M240,65 L240,240 C195,215 175,135 240,65 Z" fill="#ddd6fe" fillOpacity="0.75" />
        </svg>

        <svg
          viewBox="0 0 240 240"
          className="absolute -bottom-2 -left-2 w-48 h-48 sm:w-64 sm:h-64"
          fill="none"
        >
          <path d="M0,240 L0,30 C90,40 170,110 190,240 Z" fill="#ede9fe" fillOpacity="0.8" />
          <path d="M0,175 L0,0 C45,25 65,105 0,175 Z" fill="#ddd6fe" fillOpacity="0.75" />
        </svg>

        <div className="hidden md:block absolute top-24 left-[18%] w-2.5 h-2.5 rounded-full bg-[#7c3aed]" />
        <div className="hidden md:block absolute top-24 right-[18%] w-2.5 h-2.5 rounded-full bg-[#7c3aed]" />
      </div>

      <div className="relative z-10 w-full px-2 sm:px-4 lg:px-6">
        {/* Section Header (centered) */}
        <div className="max-w-3xl mb-14 text-center mx-auto">
          <div className="inline-block mb-4">
            <span className="text-base sm:text-lg font-bold font-heading text-[#090e1a] tracking-tight">
              Our Technology Ecosystem
            </span>
            <span className="block h-[2.5px] w-24 bg-[#8B5CF6] rounded-full mt-1.5 mx-auto" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold font-heading text-[#090e1a] tracking-tight leading-[1.18]">
            Driven By Innovation.{' '}
            <span className="block mt-1 text-[#8B5CF6]">
              Powered By Technology.
            </span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed mt-4 max-w-2xl mx-auto">
            We leverage modern frameworks, development tools and emerging technologies to engineer solutions that are reliable, adaptable and built for the future.
          </p>
        </div>

        {/* Continuous Horizontal Carousel with Left/Right Arrows */}
        <div
          className="relative w-full px-1 sm:px-5"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Left Arrow */}
          <button
            type="button"
            onClick={() => scrollByStep(-1)}
            aria-label="Scroll technologies left"
            className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 z-20 h-10 w-10 rounded-full bg-white border border-slate-200/80 shadow-md text-slate-600 hover:text-[#8B5CF6] hover:border-violet-200 items-center justify-center transition-all cursor-pointer"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          {/* Smooth Scrolling Track */}
          <div
            ref={trackRef}
            className="flex gap-5 sm:gap-6 overflow-x-auto py-5 px-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {[...TECH_TOOLS, ...TECH_TOOLS].map((tech, idx) => (
              <div
                key={`${tech.name}-${idx}`}
                className="w-36 sm:w-40 shrink-0 bg-white rounded-3xl py-6 px-4 border border-white shadow-[0_18px_24px_-10px_rgba(15,23,42,0.22),0_4px_10px_-4px_rgba(15,23,42,0.06)] hover:-translate-y-1.5 hover:shadow-[0_24px_32px_-10px_rgba(139,92,246,0.28),0_8px_16px_-4px_rgba(15,23,42,0.08)] transition-all duration-300 flex flex-col items-center justify-center gap-3 group"
              >
                <img
                  src={tech.logo}
                  alt={tech.name}
                  loading="lazy"
                  className="w-12 h-12 sm:w-14 sm:h-14 object-contain group-hover:scale-110 transition-transform duration-300"
                />
                <span className="text-xs sm:text-sm font-bold text-slate-700">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            type="button"
            onClick={() => scrollByStep(1)}
            aria-label="Scroll technologies right"
            className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 z-20 h-10 w-10 rounded-full bg-white border border-slate-200/80 shadow-md text-slate-600 hover:text-[#8B5CF6] hover:border-violet-200 items-center justify-center transition-all cursor-pointer"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
