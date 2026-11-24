import React from 'react';
import { LinkedinIcon, GithubIcon, TwitterIcon } from '../components/common/SocialIcons';

const TEAM = [
  {
    name: 'Aravind Swaminathan',
    role: 'Founder & Principal Architect',
    focus: 'Enterprise Systems & Cloud Infrastructure',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Meera Krishnan',
    role: 'Lead UI/UX Designer',
    focus: 'Design Systems & Psychological UX',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Karthik Raman',
    role: 'Senior Full-Stack Engineer',
    focus: 'React 19, TypeScript & Web Performance',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Ananya Deshmukh',
    role: 'Solutions Strategist',
    focus: 'Agile Delivery & Technical Roadmap',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80',
  },
];

export default function Team() {
  return (
    <section id="team" className="relative py-20 sm:py-28 overflow-hidden bg-white w-full border-t border-slate-100">
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 text-left">
          <div className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#8B5CF6] font-mono flex items-center gap-2 mb-3">
            <span className="h-1.5 w-6 rounded-full bg-[#8B5CF6] inline-block" />
            THE PEOPLE BEHIND THE PROGRESS
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-[#090e1a] tracking-tight leading-[1.18]">
            Creative Minds.{' '}
            <span className="text-[#8B5CF6] font-bold">One Shared Vision.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#1e293b] font-normal leading-relaxed mt-4">
            We are a team of thinkers, designers and developers united by curiosity, collaboration and a passion for creating meaningful technology.
          </p>
        </div>

        {/* Team Grid on clean white */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {TEAM.map((member, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 border border-slate-200/80 hover:border-violet-300 hover:shadow-xl transition-all duration-300 group flex flex-col justify-between shadow-soft-card"
            >
              <div>
                <div className="aspect-square w-full rounded-2xl overflow-hidden mb-5 bg-slate-100">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

                <h3 className="text-xl font-bold font-heading text-slate-900 group-hover:text-[#8B5CF6] transition-colors">
                  {member.name}
                </h3>

                <div className="text-xs font-bold text-[#8B5CF6] mt-1 font-mono uppercase tracking-wider">
                  {member.role}
                </div>

                <p className="text-sm text-[#1e293b] mt-2 font-normal leading-relaxed">
                  {member.focus}
                </p>
              </div>

              {/* Social connect pills */}
              <div className="pt-4 mt-5 border-t border-slate-100 flex items-center gap-2.5 text-slate-500">
                <span className="p-1.5 rounded-full hover:bg-violet-50 hover:text-[#8B5CF6] transition-colors cursor-pointer">
                  <LinkedinIcon className="h-4 w-4" />
                </span>
                <span className="p-1.5 rounded-full hover:bg-violet-50 hover:text-[#8B5CF6] transition-colors cursor-pointer">
                  <GithubIcon className="h-4 w-4" />
                </span>
                <span className="p-1.5 rounded-full hover:bg-violet-50 hover:text-[#8B5CF6] transition-colors cursor-pointer">
                  <TwitterIcon className="h-4 w-4" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
