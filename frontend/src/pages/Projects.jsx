import React, { useState } from 'react';
import { ArrowRight, ExternalLink, Eye, X } from 'lucide-react';
import Button from '../components/common/Button';

const CATEGORIES = [
  { id: 'all', label: 'All' },
  { id: 'websites', label: 'Websites' },
  { id: 'web-apps', label: 'Web Applications' },
  { id: 'ecommerce', label: 'E-Commerce' },
  { id: 'mobile-apps', label: 'Mobile Apps' },
];

const PROJECTS = [
  {
    id: 1,
    title: 'Nexus Cloud Architecture & Telemetry',
    category: 'web-apps',
    categoryLabel: 'Web Applications',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    description: 'Enterprise analytics dashboard featuring real-time state visualization and microservice telemetry.',
    client: 'Nexus Systems Inc.',
    deliverables: ['Custom Web App', 'Interactive Dashboard', 'WebSockets', 'REST APIs'],
  },
  {
    id: 2,
    title: 'Aura Capital Global Treasury',
    category: 'websites',
    categoryLabel: 'Websites',
    image: 'https://images.unsplash.com/photo-1642543492481-44e81e3914a7?auto=format&fit=crop&w=1200&q=80',
    description: 'Modern high-frequency corporate fintech web platform engineered with sub-100ms response times.',
    client: 'Aura Financial Ltd.',
    deliverables: ['Responsive Web Design', 'High-Converting Funnel', 'Security Hardening'],
  },
  {
    id: 3,
    title: 'Atelier Maison Luxury Flagship',
    category: 'ecommerce',
    categoryLabel: 'E-Commerce',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80',
    description: 'Headless digital storefront with custom 3D garment previews and frictionless global checkout.',
    client: 'Atelier Maison Paris',
    deliverables: ['Headless Shopify', 'Stripe Multi-Currency', 'Performance Tuning'],
  },
  {
    id: 4,
    title: 'Pulse Care Telehealth iOS & Android',
    category: 'mobile-apps',
    categoryLabel: 'Mobile Apps',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
    description: 'HIPAA-compliant cross-platform mobile care portal with encrypted video consultations.',
    client: 'Pulse BioHealth',
    deliverables: ['React Native Mobile App', 'WebRTC Video Calls', 'Biometrics Sync'],
  },
  {
    id: 5,
    title: 'Hyperion Developer Ecosystem',
    category: 'web-apps',
    categoryLabel: 'Web Applications',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
    description: 'Cloud infrastructure canvas allowing engineers to design, simulate, and export code directly.',
    client: 'Hyperion Labs',
    deliverables: ['Interactive Canvas', 'Monaco Code Integration', 'Automated CI/CD'],
  },
  {
    id: 6,
    title: 'Veloce Logistics Telematics OS',
    category: 'websites',
    categoryLabel: 'Websites',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    description: 'Geographic asset management platform rendering 18,000+ live markers with smooth 60fps scrolling.',
    client: 'Veloce Mobility',
    deliverables: ['Mapbox GL UI', 'Real-Time Telemetry', 'High-Load Optimization'],
  },
];

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
        <div className="max-w-3xl mb-12 text-left">
          <div className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#8B5CF6] font-mono flex items-center gap-2 mb-3">
            <span className="h-1.5 w-6 rounded-full bg-[#8B5CF6] inline-block" />
            SELECTED WORKS
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-[#090e1a] tracking-tight leading-[1.18]">
            Crafted With Purpose.{' '}
            <span className="text-[#8B5CF6] font-bold">Built To Make An Impact.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#1e293b] font-normal leading-relaxed mt-4">
            Every project is an opportunity to challenge conventions, explore possibilities and create something extraordinary. Discover the digital experiences we've brought to life.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2.5 mb-12">
          {CATEGORIES.map((cat) => {
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

        {/* Projects Grid on clean white */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-soft-card hover:border-violet-300 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Visual Preview */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1 rounded-full text-xs font-bold text-[#8B5CF6] border border-slate-100 shadow-sm">
                    {project.categoryLabel}
                  </div>
                </div>

                {/* Details */}
                <div className="p-7">
                  <div className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider mb-1">
                    {project.client}
                  </div>
                  <h3 className="text-xl font-bold font-heading text-slate-900 group-hover:text-[#8B5CF6] transition-colors leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-sm text-[#1e293b] mt-2.5 leading-relaxed font-normal">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-7 pt-0 border-t border-slate-100 mt-4 flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedModalProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 hover:text-[#8B5CF6] transition-colors cursor-pointer"
                >
                  <Eye className="h-4 w-4 text-[#8B5CF6]" />
                  <span>Discover The Details</span>
                </button>

                <button
                  type="button"
                  onClick={() => setSelectedModalProject(project)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-violet-50 text-xs font-bold text-[#8B5CF6] hover:bg-[#8B5CF6] hover:text-white transition-all cursor-pointer"
                >
                  <span>Explore Project</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
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

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <a
                    href="#contact"
                    onClick={() => setSelectedModalProject(null)}
                    className="inline-flex items-center gap-2 text-sm font-bold text-[#8B5CF6] hover:underline"
                  >
                    View Live Experience <ExternalLink className="h-4 w-4" />
                  </a>

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
