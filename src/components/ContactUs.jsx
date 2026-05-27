import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Copy, Check, MessageSquare } from 'lucide-react';

export const ContactUs = () => {
  const [copiedText, setCopiedText] = useState(null);

  const offices = [
    {
      city: "Kerala (India )",
      address: "",
      phones: ["+91 96330 62888", "+91 96330 69888"],
      email: "info@immigrationhub.nz",
      hours: ""
    },
    {
      city: "Christchurch(New Zealand Liasison)",
      address: "",
      phones: ["+64 204369699"],
      email: "info@immigrationhub.nz",
      hours: ""
    }
  ];

  const handleCopy = (text, label) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(null), 2000);
  };

  return (
    <section id="contact" className="py-12 md:py-16 bg-transparent transition-colors duration-300 relative">
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
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 items-stretch mb-16">
          
          {/* 1 & 2: Office Contacts */}
          {offices.map((office, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:border-primary/20 hover:shadow-lg transition-all duration-300 flex flex-col items-center justify-center text-center h-full min-h-[220px]"
            >
              <div className="space-y-5 w-full">
                {/* Header */}
                <div>
                  <h3 className="font-heading font-extrabold text-xl text-slate-900 dark:text-white">
                    {office.city}
                  </h3>
                </div>

                {/* Address */}
                {office.address && (
                  <div className="flex items-start justify-center gap-2 text-xs text-slate-600 dark:text-slate-400">
                    <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <p className="leading-relaxed font-light">{office.address}</p>
                  </div>
                )}

                {/* Phones */}
                <div className="space-y-2.5">
                  {office.phones.map((phone, pIdx) => (
                    <div key={pIdx} className="flex items-center justify-center gap-2 text-xs text-slate-600 dark:text-slate-400">
                      <a
                        href={`tel:${phone.replace(/\s+/g, '')}`}
                        className="flex items-center gap-2 hover:text-primary transition-colors font-semibold"
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
                <div className="flex items-center justify-center gap-2 text-xs text-slate-600 dark:text-slate-400">
                  <a
                    href={`mailto:${office.email}`}
                    className="flex items-center gap-2 hover:text-primary transition-colors font-semibold"
                  >
                    <Mail className="w-4 h-4 text-accent shrink-0" />
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
              {office.hours && (
                <div className="border-t border-slate-200/50 dark:border-slate-800/80 pt-4 mt-6 flex items-center justify-center gap-2 text-[10px] text-slate-400 dark:text-slate-500 w-full">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{office.hours}</span>
                </div>
              )}
            </div>
          ))}

          {/* 3: Dynamic Support Channel Buttons */}
          <div className="p-6 sm:p-8 rounded-3xl glassmorphism border border-slate-100 dark:border-slate-800 bg-white/60 dark:bg-slate-900/60 shadow-xl electric-glow text-left flex flex-col justify-between h-full">
            <div className="space-y-6">
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
  <svg 
    className="w-5 h-5 shrink-0 group-hover:scale-110 transition-transform" 
    viewBox="0 0 24 24" 
    fill="currentColor"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
  </svg>
  <span>WhatsApp Counselling</span>
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
            </div>

            {/* Secure Trust Indicator */}
            <div className="pt-4 mt-6 border-t border-slate-100 dark:border-slate-800/80">
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
    </section>
  );
};
