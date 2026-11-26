import React from 'react';
import { Layout, Server, Database, PenTool } from 'lucide-react';

const ECOSYSTEM = [
  {
    category: 'Frontend Development',
    icon: Layout,
    description: 'Modern reactive component frameworks delivering fluid 60fps user experiences.',
    skills: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vue.js', 'HTML5 / CSS3'],
  },
  {
    category: 'Backend Development',
    icon: Server,
    description: 'Resilient APIs and microservices engineered for high throughput and sub-100ms response times.',
    skills: ['Node.js', 'Express', 'Python / FastAPI', 'NestJS', 'Go', 'GraphQL & REST'],
  },
  {
    category: 'Database Technologies',
    icon: Database,
    description: 'Scalable relational, NoSQL and in-memory caches designed for data integrity and speed.',
    skills: ['PostgreSQL', 'MongoDB', 'Supabase', 'Redis Cache', 'Firebase', 'MySQL'],
  },
  {
    category: 'Design & Development Tools',
    icon: PenTool,
    description: 'Industry-standard toolchains ensuring continuous integration and pixel-perfect design handoffs.',
    skills: ['Figma Design Systems', 'Docker Containers', 'AWS Cloud', 'Git / GitHub', 'Vercel Edge', 'Postman'],
  },
];

export default function Expertise() {
  return (
    <section id="expertise" className="relative py-20 sm:py-28 overflow-hidden bg-white w-full border-t border-slate-100">
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 text-left">
          <div className="inline-block mb-4">
            <span className="text-base sm:text-lg font-bold font-heading text-[#090e1a] tracking-tight">
              Our Technology Ecosystem
            </span>
            <span className="block h-[2.5px] w-24 bg-[#8B5CF6] rounded-full mt-1.5" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold font-heading text-[#090e1a] tracking-tight leading-[1.18]">
            Driven By Innovation.{' '}
            <span className="block mt-1 text-[#8B5CF6]">
              Powered By Technology.
            </span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed mt-4 max-w-2xl">
            We leverage modern frameworks, development tools and emerging technologies to engineer solutions that are reliable, adaptable and built for the future.
          </p>
        </div>

        {/* 4 Category Cards on clean white */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {ECOSYSTEM.map((eco, idx) => {
            const Icon = eco.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl sm:rounded-3xl p-7 border border-slate-200/70 shadow-[0_18px_24px_-10px_rgba(15,23,42,0.18),0_4px_10px_-4px_rgba(15,23,42,0.06)] hover:border-violet-200 hover:-translate-y-1.5 hover:shadow-[0_24px_34px_-10px_rgba(139,92,246,0.24),0_8px_16px_-4px_rgba(15,23,42,0.08)] transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="p-3.5 rounded-2xl bg-violet-50 text-[#8B5CF6] mb-5 w-fit group-hover:scale-110 group-hover:bg-[#8B5CF6] group-hover:text-white transition-all">
                    <Icon className="h-6 w-6 stroke-[1.8]" />
                  </div>

                  <h3 className="text-xl font-bold font-heading text-slate-900 group-hover:text-[#8B5CF6] transition-colors mb-2">
                    {eco.category}
                  </h3>

                  <p className="text-sm text-[#1e293b] leading-relaxed font-normal mb-6">
                    {eco.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <div className="flex flex-wrap gap-2">
                    {eco.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2.5 py-1 rounded-md bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-800"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
