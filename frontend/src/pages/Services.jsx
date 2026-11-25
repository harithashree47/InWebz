import React from 'react';
import {
  Globe,
  Smartphone,
  PenTool,
  ShoppingCart,
  Cpu,
  Layers,
  Sparkles,
  ArrowRight,
} from 'lucide-react';

const SERVICES = [
  {
    id: 'web-dev',
    title: 'Web Development',
    description: 'High-performance websites with modern design and scalable architecture.',
    icon: Globe,
    iconColor: 'text-[#8B5CF6]',
  },
  {
    id: 'mobile-app',
    title: 'Mobile App Development',
    description: 'Intuitive iOS and Android apps built for everyday experiences.',
    icon: Smartphone,
    iconColor: 'text-sky-500',
  },
  {
    id: 'ui-ux',
    title: 'UI/UX Design',
    description: 'Elegant interfaces and effortless user journeys crafted with precision.',
    icon: PenTool,
    iconColor: 'text-pink-500',
  },
  {
    id: 'ecommerce',
    title: 'E-Commerce Development',
    description: 'High-converting online stores that strengthen your brand.',
    icon: ShoppingCart,
    iconColor: 'text-emerald-500',
  },
  {
    id: 'custom-software',
    title: 'Custom Software Development',
    description: 'Tailored software engineered around your business workflows.',
    icon: Cpu,
    iconColor: 'text-indigo-500',
  },
  {
    id: 'web-apps',
    title: 'Web Application Development',
    description: 'Intelligent, scalable web apps that accelerate business growth.',
    icon: Layers,
    iconColor: 'text-amber-500',
  },
  {
    id: 'digital-solutions',
    title: 'Digital Solutions',
    description: 'Technology-driven solutions to innovate and thrive digitally.',
    icon: Sparkles,
    iconColor: 'text-rose-500',
  },
];

export default function Services({ onSelectService }) {
  return (
    <section id="services" className="relative pt-24 sm:pt-32 pb-20 sm:pb-28 overflow-hidden bg-[#f4f5f7] w-full">
      {/* Repeating Scalloped Wave Top Divider (matches Impact bottom wave) */}
      <div className="pointer-events-none absolute -top-px left-0 w-full h-7 overflow-hidden leading-none">
        <svg className="w-full h-full block" aria-hidden="true">
          <defs>
            <pattern id="servicesTopScallopWave" width="64" height="29" patternUnits="userSpaceOnUse">
              <path
                d="M0,0 L0,15 Q16,29 32,15 Q48,1 64,15 L64,0 Z"
                fill="#ffffff"
              />
            </pattern>
          </defs>
          <rect width="100%" height="29" fill="url(#servicesTopScallopWave)" />
        </svg>
      </div>

      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
        {/* Section Header (centered) */}
        <div className="max-w-3xl mb-14 text-center mx-auto">
          <div className="inline-block mb-4">
            <span className="text-base sm:text-lg font-bold font-heading text-[#090e1a] tracking-tight">
              What We Do Best
            </span>
            <span className="block h-[2.5px] w-24 bg-[#8B5CF6] rounded-full mt-1.5 mx-auto" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold font-heading text-[#090e1a] tracking-tight leading-[1.18]">
            Engineering Ideas.{' '}
            <span className="block mt-1 text-[#8B5CF6]">
              Elevating Businesses.
            </span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed mt-4 max-w-xl mx-auto">
            We combine creative thinking with technical expertise to deliver digital solutions that solve real challenges and unlock new opportunities.
          </p>
        </div>

        {/* 7 Services Grid (matching Impact card style & shadow) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-7">
          {SERVICES.map((srv) => {
            const Icon = srv.icon;
            return (
              <div
                key={srv.id}
                onClick={() => onSelectService && onSelectService(srv)}
                className="bg-white rounded-3xl p-7 border border-white shadow-[0_18px_24px_-10px_rgba(15,23,42,0.22),0_4px_10px_-4px_rgba(15,23,42,0.06)] hover:-translate-y-1.5 hover:shadow-[0_24px_32px_-10px_rgba(139,92,246,0.28),0_8px_16px_-4px_rgba(15,23,42,0.08)] transition-all duration-300 flex flex-col justify-between cursor-pointer group"
              >
                <div>
                  <Icon className={`h-8 w-8 stroke-[1.6] mb-4 group-hover:scale-110 transition-transform duration-300 ${srv.iconColor}`} />

                  <h3 className="text-lg sm:text-xl font-bold font-heading text-[#090e1a] group-hover:text-[#8B5CF6] transition-colors mb-2">
                    {srv.title}
                  </h3>

                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
                    {srv.description}
                  </p>
                </div>

                <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#8B5CF6] group-hover:translate-x-1 transition-transform">
                  <span>Learn More</span>
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
