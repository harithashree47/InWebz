import React, { useState } from 'react';
import { X, Send, CheckCircle2 } from 'lucide-react';
import Button from '../components/common/Button';

export default function ContactModal({ isOpen, onClose, defaultService = 'Web Development' }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: defaultService,
    message: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
      setFormData({ name: '', email: '', service: defaultService, message: '' });
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-100 z-10 animate-in fade-in zoom-in-95 duration-200">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>

        {submitted ? (
          <div className="py-12 text-center space-y-3">
            <div className="h-14 w-14 rounded-full bg-emerald-50 text-emerald-500 mx-auto flex items-center justify-center">
              <CheckCircle2 className="h-8 w-8" />
            </div>
            <h3 className="text-2xl font-bold font-heading text-slate-900">
              Message Sent!
            </h3>
            <p className="text-sm text-slate-500 max-w-xs mx-auto">
              Thank you! Our technical team will get back to you within 2 hours.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <div className="text-xs font-semibold text-[#ff2a5f] uppercase tracking-wider font-heading">
                Let's Talk
              </div>
              <h3 className="text-2xl font-bold font-heading text-slate-900 mt-1">
                Start Your Project
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Tell us about your requirements and we'll craft the right solution.
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#ff2a5f] focus:ring-1 focus:ring-[#ff2a5f]"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1">
                  Work Email *
                </label>
                <input
                  type="email"
                  required
                  placeholder="john@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#ff2a5f] focus:ring-1 focus:ring-[#ff2a5f]"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1">
                  Service Interested In
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#ff2a5f] focus:ring-1 focus:ring-[#ff2a5f] bg-white"
                >
                  <option>Web Development</option>
                  <option>Mobile App Development</option>
                  <option>UI/UX Design</option>
                  <option>E-Commerce Solutions</option>
                  <option>Custom Software</option>
                  <option>Digital Consulting</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1">
                  Project Brief *
                </label>
                <textarea
                  rows={3}
                  required
                  placeholder="Briefly describe your goals, timeline, and scope..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#ff2a5f] focus:ring-1 focus:ring-[#ff2a5f] resize-none"
                />
              </div>
            </div>

            <div className="pt-2">
              <Button variant="pink" size="md" className="w-full justify-center">
                Send Message
              </Button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
