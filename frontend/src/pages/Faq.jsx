import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQS = [
  {
    q: 'What types of software solutions do you specialize in?',
    a: 'We specialize in custom web applications, responsive websites, native and cross-platform mobile apps, headless e-commerce platforms, UI/UX design systems, and cloud-native software architectures.',
  },
  {
    q: 'How long does a typical software project take to deliver?',
    a: 'Most agile MVP and web application sprints run between 4 to 8 weeks, with functional preview deployments delivered every 2 weeks. Comprehensive enterprise platforms typically span 8 to 12 weeks with milestone-driven handovers.',
  },
  {
    q: 'Who retains intellectual property rights and code ownership?',
    a: 'You do. 100%. Upon project completion and final handover, all source code, Figma design systems, database schemas, and intellectual property belong entirely to your company with zero licensing restrictions.',
  },
  {
    q: 'Do you offer ongoing post-launch maintenance and support?',
    a: 'Yes. Every deployment includes 30 days of comprehensive hyper-care support covering bug resolution, performance tuning, and team onboarding. We also provide flexible ongoing monthly retainers for feature expansion and cloud scaling.',
  },
  {
    q: 'How do we begin working together?',
    a: 'Simply click "Let\'s Collaborate" or fill out the contact form below. We schedule a 30-minute discovery workshop to understand your vision, assess technical requirements, and deliver a clear project roadmap.',
  },
];

export default function Faq() {
  const [openIdx, setOpenIdx] = useState(0);

  const toggle = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="relative py-20 sm:py-28 overflow-hidden bg-white w-full border-t border-slate-100">
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 text-left">
          <div className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#8B5CF6] font-mono flex items-center gap-2 mb-3">
            <span className="h-1.5 w-6 rounded-full bg-[#8B5CF6] inline-block" />
            HAVE QUESTIONS?
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-[#090e1a] tracking-tight leading-[1.18]">
            Everything You Need To Know.{' '}
            <span className="text-[#8B5CF6] font-bold">All In One Place.</span>
          </h2>
        </div>

        {/* Accordion List on clean white */}
        <div className="max-w-4xl space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-violet-50/30 border-violet-200 shadow-sm'
                    : 'bg-white border-slate-200/80 hover:border-slate-300'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <span className="text-lg font-bold font-heading text-slate-900">
                    {faq.q}
                  </span>
                  <div
                    className={`p-2 rounded-full transition-transform duration-300 shrink-0 ${
                      isOpen ? 'rotate-180 bg-[#8B5CF6] text-white' : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    <ChevronDown className="h-5 w-5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-base text-[#1e293b] leading-relaxed font-normal border-t border-violet-100/60 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
