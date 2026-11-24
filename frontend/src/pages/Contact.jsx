import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';
import Button from '../components/common/Button';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    lookingToBuild: 'Web Development',
    projectDetails: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        lookingToBuild: 'Web Development',
        projectDetails: '',
      });
    }, 3500);
  };

  return (
    <section id="contact" className="relative py-20 sm:py-28 overflow-hidden bg-white w-full border-t border-slate-100">
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          {/* Left Column: Heading, Description & Contact Details */}
          <div className="lg:col-span-5 space-y-7 text-left">
            <div className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#8B5CF6] font-mono flex items-center gap-2">
              <span className="h-1.5 w-6 rounded-full bg-[#8B5CF6] inline-block" />
              LET'S CREATE SOMETHING EXTRAORDINARY
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-[#090e1a] tracking-tight leading-[1.18]">
              Big Ideas Begin With A{' '}
              <span className="text-[#8B5CF6] font-bold">Simple Conversation.</span>
            </h2>

            <p className="text-base sm:text-lg text-[#1e293b] font-normal leading-relaxed">
              Whether you're building something new or transforming what already exists, we're ready to explore possibilities with you. Let's turn your vision into a digital reality.
            </p>

            {/* Contact Details Card on clean white */}
            <div className="bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/80 shadow-soft-card space-y-6">
              <h3 className="text-xl font-bold font-heading text-slate-900">
                Let's Connect. We'd Love To Hear What's On Your Mind.
              </h3>

              <div className="space-y-4">
                <div className="flex items-center gap-3.5 text-base font-semibold text-slate-800">
                  <div className="p-2.5 rounded-xl bg-violet-50 text-[#8B5CF6] shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <a href="mailto:hello@inwebz.com" className="hover:text-[#8B5CF6] transition-colors">
                    hello@inwebz.com
                  </a>
                </div>

                <div className="flex items-center gap-3.5 text-base font-semibold text-slate-800">
                  <div className="p-2.5 rounded-xl bg-violet-50 text-[#8B5CF6] shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                  <a href="tel:+919876543210" className="hover:text-[#8B5CF6] transition-colors">
                    +91 98765 43210
                  </a>
                </div>

                <div className="flex items-center gap-3.5 text-base font-semibold text-slate-800">
                  <div className="p-2.5 rounded-xl bg-violet-50 text-[#8B5CF6] shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <span>Chennai, India • Global Client Delivery</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Form on clean white */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/80 shadow-xl">
              {submitted ? (
                <div className="py-14 text-center space-y-4">
                  <div className="h-16 w-16 rounded-full bg-violet-50 text-[#8B5CF6] mx-auto flex items-center justify-center">
                    <CheckCircle2 className="h-9 w-9" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold font-heading text-slate-900">
                    Conversation Started!
                  </h3>
                  <p className="text-base text-[#1e293b] max-w-sm mx-auto font-normal">
                    Thank you! Our technical lead will review your message and reach out within 2 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Your Name */}
                    <div>
                      <label className="text-sm font-bold text-slate-800 block mb-1.5 font-heading">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Alex Morgan"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 placeholder-slate-400 text-base focus:outline-none focus:border-[#8B5CF6] focus:ring-2 focus:ring-[#8B5CF6]/20 transition-all font-medium"
                      />
                    </div>

                    {/* Work Email */}
                    <div>
                      <label className="text-sm font-bold text-slate-800 block mb-1.5 font-heading">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="alex@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 placeholder-slate-400 text-base focus:outline-none focus:border-[#8B5CF6] focus:ring-2 focus:ring-[#8B5CF6]/20 transition-all font-medium"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Contact Number */}
                    <div>
                      <label className="text-sm font-bold text-slate-800 block mb-1.5 font-heading">
                        Contact Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 placeholder-slate-400 text-base focus:outline-none focus:border-[#8B5CF6] focus:ring-2 focus:ring-[#8B5CF6]/20 transition-all font-medium"
                      />
                    </div>

                    {/* What Are You Looking To Build? */}
                    <div>
                      <label className="text-sm font-bold text-slate-800 block mb-1.5 font-heading">
                        What Are You Looking To Build?
                      </label>
                      <select
                        value={formData.lookingToBuild}
                        onChange={(e) => setFormData({ ...formData, lookingToBuild: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 text-base focus:outline-none focus:border-[#8B5CF6] focus:ring-2 focus:ring-[#8B5CF6]/20 transition-all bg-white font-medium"
                      >
                        <option>Web Development</option>
                        <option>Mobile App Development</option>
                        <option>UI/UX Design</option>
                        <option>E-Commerce Development</option>
                        <option>Custom Software Development</option>
                        <option>Web Application Development</option>
                        <option>Digital Solutions</option>
                      </select>
                    </div>
                  </div>

                  {/* Tell Us About Your Project */}
                  <div>
                    <label className="text-sm font-bold text-slate-800 block mb-1.5 font-heading">
                      Tell Us About Your Project *
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Share your goals, target timeline, features, or technical questions..."
                      value={formData.projectDetails}
                      onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 placeholder-slate-400 text-base focus:outline-none focus:border-[#8B5CF6] focus:ring-2 focus:ring-[#8B5CF6]/20 transition-all resize-none font-medium"
                    />
                  </div>

                  {/* Button: Start A Conversation */}
                  <div className="pt-2">
                    <Button
                      variant="primary"
                      size="lg"
                      className="w-full justify-center text-base font-bold py-3.5 shadow-lg shadow-violet-500/25"
                      iconRight={<Send className="h-4 w-4" />}
                    >
                      Start A Conversation
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
