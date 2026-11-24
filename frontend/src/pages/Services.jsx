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
    description:
      'Building high-performance websites that combine exceptional design, seamless functionality and scalable architecture.',
    icon: Globe,
  },
  {
    id: 'mobile-app',
    title: 'Mobile App Development',
    description:
      'Creating intuitive mobile applications that connect people, simplify interactions and enhance everyday experiences.',
    icon: Smartphone,
  },
  {
    id: 'ui-ux',
    title: 'UI/UX Design',
    description:
      'Transforming complex ideas into elegant interfaces and effortless user experiences through thoughtful design.',
    icon: PenTool,
  },
  {
    id: 'ecommerce',
    title: 'E-Commerce Development',
    description:
      'Crafting powerful online shopping experiences that strengthen brands and create meaningful customer connections.',
    icon: ShoppingCart,
  },
  {
    id: 'custom-software',
    title: 'Custom Software Development',
    description:
      'Engineering tailored software solutions that align with your business goals and evolving operational needs.',
    icon: Cpu,
  },
  {
    id: 'web-apps',
    title: 'Web Application Development',
    description:
      'Developing intelligent, scalable web applications that streamline workflows and accelerate business growth.',
    icon: Layers,
  },
  {
    id: 'digital-solutions',
    title: 'Digital Solutions',
    description:
      'Delivering technology-driven solutions that help businesses adapt, innovate and thrive in a digital-first world.',
    icon: Sparkles,
  },
];

export default function Services({ onSelectService }) {
  return (
    <section id="services" className="relative py-20 sm:py-28 overflow-hidden bg-white w-full border-t border-slate-100">
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 text-left">
          <div className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#8B5CF6] font-mono flex items-center gap-2 mb-3">
            <span className="h-1.5 w-6 rounded-full bg-[#8B5CF6] inline-block" />
            WHAT WE DO BEST
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-[#090e1a] tracking-tight leading-[1.18]">
            Engineering Ideas.{' '}
            <span className="text-[#8B5CF6] font-bold">Elevating Businesses.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#1e293b] font-normal leading-relaxed mt-4">
            We combine creative thinking with technical expertise to deliver digital solutions that solve real challenges and unlock new opportunities.
          </p>
        </div>

        {/* 7 Services Grid on clean white cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {SERVICES.map((srv) => {
            const Icon = srv.icon;
            return (
              <div
                key={srv.id}
                onClick={() => onSelectService && onSelectService(srv)}
                className="bg-white rounded-2xl sm:rounded-3xl p-7 sm:p-8 border border-slate-200/80 shadow-soft-card hover:border-violet-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between cursor-pointer group"
              >
                <div>
                  <div className="mb-6 p-3.5 rounded-2xl bg-violet-50 text-[#8B5CF6] group-hover:bg-[#8B5CF6] group-hover:text-white transition-colors duration-300 w-fit">
                    <Icon className="h-7 w-7 stroke-[1.8]" />
                  </div>

                  <h3 className="text-xl font-bold font-heading text-slate-900 group-hover:text-[#8B5CF6] transition-colors mb-2.5">
                    {srv.title}
                  </h3>

                  <p className="text-sm text-[#1e293b] leading-relaxed font-normal">
                    {srv.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#8B5CF6] group-hover:translate-x-1 transition-transform">
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
