import React, { useState } from 'react';
import { ArrowRight, ArrowUpRight, Eye, X } from 'lucide-react';
import Button from '../components/common/Button';
import FadeIn from '../components/common/FadeIn';
import { PROJECT_CATEGORIES, PROJECTS } from '../data/projectsData';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedModalProject, setSelectedModalProject] = useState(null);

  const filteredProjects =
    activeCategory === 'all'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="relative py-20 sm:py-28 overflow-hidden bg-white w-full border-t border-slate-100">
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
        {/* Section Header */}
        <FadeIn delay={1} className="max-w-3xl mb-12 text-left">
          <div className="inline-block mb-4">
            <span className="text-base sm:text-lg font-bold font-heading text-[#090e1a] tracking-tight">
              Our Portfolio
            </span>
            <span className="block h-[2.5px] w-24 bg-[#8B5CF6] rounded-full mt-1.5" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold font-heading text-[#090e1a] tracking-tight leading-[1.18]">
            Crafted With Purpose.{' '}
            <span className="block mt-1 text-[#8B5CF6]">
              Built To Make An Impact.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#1e293b] font-normal leading-relaxed mt-4">
            Every project is an opportunity to challenge conventions, explore possibilities and create something extraordinary. Discover the digital experiences we've brought to life.
          </p>
        </FadeIn>

        {/* Filter Tabs */}
        <FadeIn delay={2}>
          <div className="flex flex-wrap items-center gap-2.5 mb-12">
            {PROJECT_CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-[#8B5CF6] text-white shadow-md shadow-violet-500/25'
                      : 'bg-white text-slate-800 border border-slate-200 hover:border-violet-300 hover:text-[#8B5CF6]'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </FadeIn>

        {/* Projects Grid on clean white */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <FadeIn key={project.id} delay={(index % 3) + 1} className="h-full">
              <div className="h-full bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-[0_14px_34px_-12px_rgba(15,23,42,0.1)] hover:border-violet-200 hover:shadow-[0_24px_44px_-12px_rgba(139,92,246,0.2)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
                <div>
                  {/* Visual Preview */}
                  <div
                    onClick={() => setSelectedModalProject(project)}
                    className="relative aspect-[16/10] overflow-hidden bg-slate-900 cursor-pointer"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4 z-10 bg-white/95 backdrop-blur-md px-3.5 py-1 rounded-full text-xs font-bold text-[#8B5CF6] border border-slate-100 shadow-sm">
                      {project.categoryLabel}
                    </div>

                    {/* Diagonal Light-Sheen Sweep on Hover */}
                    <div className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out bg-gradient-to-r from-transparent via-white/25 to-transparent skew-x-12" />

                    {/* Top-Right Animated Quick-View Icon Button */}
                    <div className="pointer-events-none absolute top-4 right-4 z-10 h-10 w-10 rounded-full bg-white/95 backdrop-blur-md text-[#8B5CF6] shadow-lg flex items-center justify-center opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 group-hover:rotate-12 transition-all duration-300">
                      <ArrowUpRight className="h-5 w-5 stroke-[2.2]" />
                    </div>

                    {/* Sleek Bottom Violet Accent Bar on Hover */}
                    <div className="pointer-events-none absolute bottom-0 left-0 h-1 w-0 group-hover:w-full bg-gradient-to-r from-[#8B5CF6] to-[#6366F1] transition-all duration-500" />
                  </div>

                  {/* Details */}
                  <div className="p-7">
                    <div className="text-xs sm:text-[13px] font-semibold text-[#8B5CF6] tracking-wide uppercase mb-1.5">
                      {project.client}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold font-heading text-[#090e1a] group-hover:text-[#8B5CF6] transition-colors leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed font-normal">
                      {project.description}
                    </p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="px-7 py-5 border-t border-slate-100 flex items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => setSelectedModalProject(project)}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-[13px] font-bold text-slate-700 hover:text-[#8B5CF6] transition-colors cursor-pointer"
                  >
                    <Eye className="h-4 w-4 text-[#8B5CF6]" />
                    <span>Discover The Details</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setSelectedModalProject(project)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-violet-50 text-xs sm:text-[13px] font-bold text-[#8B5CF6] group-hover:bg-[#8B5CF6] group-hover:text-white transition-all duration-300 cursor-pointer"
                  >
                    <span>Explore Project</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Case Study Modal */}
        {selectedModalProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <div
              onClick={() => setSelectedModalProject(null)}
              className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
            />
            <div className="relative w-full max-w-2xl bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200 z-10 animate-in fade-in zoom-in-95 duration-200">
              <button
                onClick={() => setSelectedModalProject(null)}
                className="absolute top-6 right-6 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="space-y-4">
                <span className="text-xs font-mono font-bold text-[#8B5CF6] uppercase tracking-wider">
                  Case Study // {selectedModalProject.categoryLabel}
                </span>

                <h3 className="text-2xl font-bold font-heading text-slate-900">
                  {selectedModalProject.title}
                </h3>

                <p className="text-sm text-[#1e293b] leading-relaxed font-normal">
                  {selectedModalProject.description}
                </p>

                <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-inner border border-slate-100">
                  <img
                    src={selectedModalProject.image}
                    alt={selectedModalProject.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="space-y-2 pt-2">
                  <div className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                    Deliverables & Highlights
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {selectedModalProject.deliverables.map((del, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-lg bg-violet-50 text-[#8B5CF6] text-xs font-semibold"
                      >
                        {del}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-end">
                  <Button
                    onClick={() => setSelectedModalProject(null)}
                    variant="primary"
                    size="sm"
                  >
                    Close
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
