import React from 'react';
import { Star, Quote } from 'lucide-react';

const REVIEWS = [
  {
    quote:
      'Inwebzz delivered beyond our expectations. Their technical rigor, proactive communication and design sophistication helped us launch our platform 4 weeks ahead of schedule.',
    author: 'Priya Sharma',
    role: 'Chief Executive Officer',
    company: 'TechVista Innovations',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    rating: 5,
  },
  {
    quote:
      'Working with Inwebzz was effortless. They transformed complex operational requirements into an intuitive web application that our entire organization relies on daily.',
    author: 'Marcus Vance',
    role: 'Head of Engineering',
    company: 'CloudSprint Global',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    rating: 5,
  },
  {
    quote:
      'The attention to detail in their UI/UX and backend engineering is exceptional. Our conversion rate increased by 142% post-launch. Truly an elite software partner.',
    author: 'Julian de Saint-Germain',
    role: 'VP of Digital Commerce',
    company: 'Atelier Maison Group',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-20 sm:py-28 overflow-hidden bg-white w-full border-t border-slate-100">
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 text-left">
          <div className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#8B5CF6] font-mono flex items-center gap-2 mb-3">
            <span className="h-1.5 w-6 rounded-full bg-[#8B5CF6] inline-block" />
            CLIENT PERSPECTIVES
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-[#090e1a] tracking-tight leading-[1.18]">
            Trust Built Through Collaboration.{' '}
            <span className="text-[#8B5CF6] font-bold">Success Defined By Results.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#1e293b] font-normal leading-relaxed mt-4">
            Strong partnerships create exceptional outcomes. Discover the experiences of those who have collaborated with us.
          </p>
        </div>

        {/* Testimonials 3 Column Grid on clean white */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {REVIEWS.map((rev, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-soft-card hover:border-violet-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  {/* 5 Purple Stars */}
                  <div className="flex items-center gap-1 text-[#8B5CF6]">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-[#8B5CF6] stroke-none" />
                    ))}
                  </div>

                  <Quote className="h-8 w-8 text-violet-100 group-hover:text-violet-200 transition-colors" />
                </div>

                <p className="text-base text-[#1e293b] leading-relaxed font-normal italic">
                  "{rev.quote}"
                </p>
              </div>

              <div className="pt-6 border-t border-slate-100 mt-6 flex items-center gap-3.5">
                <img
                  src={rev.avatar}
                  alt={rev.author}
                  className="h-12 w-12 rounded-full object-cover border-2 border-violet-100"
                />
                <div>
                  <div className="text-base font-bold font-heading text-slate-900">
                    {rev.author}
                  </div>
                  <div className="text-xs text-slate-500 font-medium">
                    {rev.role} • <span className="text-[#8B5CF6] font-semibold">{rev.company}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
