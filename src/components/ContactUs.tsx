import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Copy, Check, MessageSquare } from 'lucide-react';

export const ContactUs: React.FC = () => {
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const offices = [
    {
      city: "Kochi, Kerala (India HQ)",
      role: "Corporate Head Office & Filing Division",
      address: "IMMIGRATION HUB, 2nd Floor, Grand Tower, Near Metro Pillar 420, Kochi, Kerala - 682025",
      phones: ["+91 96330 62888", "+91 96330 69888"],
      email: "office@immigrationhub.in",
      hours: "Mon - Sat: 9:30 AM - 6:00 PM (IST)"
    },
    {
      city: "Auckland (New Zealand Liaison)",
      role: "Licensed LIA Advisory & Post-Landing Division",
      address: "IMMIGRATION HUB NZ, Level 4, 125 Queen Street, Auckland CBD, Auckland 1010, New Zealand",
      phones: ["+64 21 028 8882 (LIA Hotline)"],
      email: "office@immigrationhub.in",
      hours: "Mon - Fri: 9:00 AM - 5:00 PM (NZST)"
    }
  ];

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(null), 2000);
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-dark-card transition-colors duration-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 dark:text-white uppercase tracking-tight">
            Contact <span className="text-gradient-primary">Our Experts</span>
          </h2>
          <div className="h-1.5 w-20 bg-gradient-to-r from-primary to-accent mx-auto mt-4 rounded-full"></div>
          <p className="text-slate-600 dark:text-slate-400 mt-6 text-base font-light">
            We are readily accessible. Reach out to our India or New Zealand divisions directly, or drop into our offices for a face-to-face counselling session.
          </p>
        </div>

        {/* Info Blocks Grid */}
        <div className="grid lg:grid-cols-12 gap-12 items-start mb-16">
          {/* Left Column: Office Contacts */}
          <div className="lg:col-span-8 space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
              {offices.map((office, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:border-primary/20 hover:shadow-lg transition-all duration-300 text-left flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    {/* Header */}
                    <div>
                      <span className="text-[10px] font-bold text-primary dark:text-accent uppercase tracking-widest bg-primary/10 border border-primary/20 px-2 py-0.5 rounded">
                        {office.role}
                      </span>
                      <h3 className="font-heading font-extrabold text-lg text-slate-900 dark:text-white mt-2">
                        {office.city}
                      </h3>
                    </div>

                    {/* Address */}
                    <div className="flex items-start gap-2.5 text-xs text-slate-600 dark:text-slate-400">
                      <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <p className="leading-relaxed font-light">{office.address}</p>
                    </div>

                    {/* Phones */}
                    <div className="space-y-2">
                      {office.phones.map((phone, pIdx) => (
                        <div key={pIdx} className="flex items-center justify-between text-xs text-slate-600 dark:text-slate-400">
                          <a
                            href={`tel:${phone.replace(/\s+/g, '')}`}
                            className="flex items-center gap-2.5 hover:text-primary transition-colors font-semibold"
                          >
                            <Phone className="w-4 h-4 text-emerald-500 shrink-0" />
                            <span>{phone}</span>
                          </a>
                          <button
                            onClick={() => handleCopy(phone, `${office.city}-phone-${pIdx}`)}
                            className="p-1 hover:bg-slate-200 dark:hover:bg-slate-800 rounded transition-colors text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"
                            title="Copy Phone Number"
                          >
                            {copiedText === `${office.city}-phone-${pIdx}` ? (
                              <Check className="w-3.5 h-3.5 text-emerald-500" />
                            ) : (
                              <Copy className="w-3.5 h-3.5" />
                            )}
                          </button>
                        </div>
                      ))}
                    </div>

                    {/* Email */}
                    <div className="flex items-center justify-between text-xs text-slate-600 dark:text-slate-400">
                      <a
                        href={`mailto:${office.email}`}
                        className="flex items-center gap-2.5 hover:text-primary transition-colors font-semibold"
                      >
                        <Mail className="w-4 h-4 text-indigo-500 shrink-0" />
                        <span>{office.email}</span>
                      </a>
                      <button
                        onClick={() => handleCopy(office.email, `${office.city}-email`)}
                        className="p-1 hover:bg-slate-200 dark:hover:bg-slate-800 rounded transition-colors text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"
                        title="Copy Email"
                      >
                        {copiedText === `${office.city}-email` ? (
                          <Check className="w-3.5 h-3.5 text-emerald-500" />
                        ) : (
                          <Copy className="w-3.5 h-3.5" />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="border-t border-slate-200/50 dark:border-slate-800/80 pt-4 mt-6 flex items-center gap-2 text-[10px] text-slate-400 dark:text-slate-500">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{office.hours}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Dynamic Support Channel Buttons */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl glassmorphism border border-slate-100 dark:border-slate-800 bg-white/60 dark:bg-slate-900/60 shadow-xl electric-glow text-left space-y-6">
              <h3 className="font-heading font-extrabold text-lg text-slate-900 dark:text-white">
                Direct Contact Bubbles
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-light leading-relaxed">
                Connect with our Senior Consultants instantly. Tap below to chat directly on WhatsApp or explore our visual portfolio on Instagram.
              </p>

              <div className="space-y-4">
                {/* WhatsApp Bubble Button */}
                <a
                  href="https://wa.me/919633062888"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full p-4 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm tracking-wide transition-all shadow-md shadow-emerald-500/10 hover:shadow-emerald-500/20 hover:scale-[1.01] flex items-center justify-center gap-3 group"
                >
                  <MessageSquare className="w-5 h-5 shrink-0 group-hover:scale-110 transition-transform" />
                  <span>WhatsApp Lead Consultant</span>
                </a>

                {/* Instagram Bubble Button */}
                <a
                  href="https://instagram.com/immigrationhub__"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full p-4 rounded-2xl bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 hover:opacity-95 text-white font-bold text-sm tracking-wide transition-all shadow-md hover:scale-[1.01] flex items-center justify-center gap-3 group"
                >
                  <svg className="w-5 h-5 shrink-0 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                  </svg>
                  <span>Follow @immigrationhub__</span>
                </a>
              </div>

              {/* Secure Trust Indicator */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80">
                <div className="flex gap-2.5 items-start">
                  <div className="p-1 rounded bg-emerald-500/10 text-emerald-500 shrink-0">
                    ✔
                  </div>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400 leading-normal font-light">
                    No initial consultant fees required for profiling and study matching. Experience 100% legal visa advisory services.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
