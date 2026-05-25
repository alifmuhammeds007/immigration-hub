import React, { useState, useEffect } from 'react';
import { ArrowRight, Calendar, Compass, GraduationCap, ShieldCheck, Landmark } from 'lucide-react';

// OPTIMIZATION: Moved static data outside the component to prevent memory reallocation every 6 seconds
const slides = [
  { url: '/hero_nz.png', alt: 'Queenstown, New Zealand' },
  { url: '/hero_uk.png', alt: 'London, United Kingdom' },
  { url: '/hero_france.png', alt: 'Paris, France' },
  { url: '/hero_dubai.png', alt: 'Dubai, United Arab Emirates' }
];

export const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const stats = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-emerald-500" />,
      value: "LIA Licensed",
      label: "Director-led New Zealand visa counselling",
      desc: "Licensed Immigration Adviser expert support"
    },
    {
      icon: <GraduationCap className="w-6 h-6 text-primary" />,
      value: "10 Years",
      label: "CEO's New Zealand experience",
      desc: "Direct guidance based on studying & working in New Zealand"
    },
    {
      icon: <Landmark className="w-6 h-6 text-accent" />,
      value: "6+ Destinations",
      label: "Global study destination",
      desc: "Study options in New Zealand, UK, Dubai, France, Malta, Spain"
    },
    {
      icon: <Compass className="w-6 h-6 text-indigo-500" />,
      value: "End-to-end",
      label: "Pre & Post landing support",
      desc: " Kerala & New Zealand offices for continuous student support"
    }
  ];

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-10 md:pb-16 flex items-center overflow-hidden bg-transparent transition-colors duration-300">
      {/* Background Slideshow (Desktop Only) */}
      <div className="hidden lg:block absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {slides.map((slide, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out will-change-opacity ${
              currentSlide === idx ? 'opacity-[0.70]' : 'opacity-0'
            }`}
          >
            <img
              src={slide.url}
              alt={slide.alt}
              // OPTIMIZATION: Eager load the first image, lazy load the rest.
              loading={idx === 0 ? "eager" : "lazy"}
              fetchPriority={idx === 0 ? "high" : "auto"}
              className="w-full h-full object-cover object-center transform transition-transform duration-[6000ms] ease-out will-change-transform"
              style={{
                transform: currentSlide === idx ? 'scale(1.05)' : 'scale(1.02)'
              }}
            />
          </div>
        ))}
        {/* Soft, low-glare dark navy-indigo wash overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1B365D]/95 via-[#1B365D]/80 to-[#1B365D]/40 md:from-[#1B365D]/95 md:via-[#1B365D]/75 md:to-transparent"></div>
      </div>

      {/* Dynamic Ambient Background Blobs (OPTIMIZATION: Removed heavy pulse animation from large blurs) */}
      <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-primary/10 blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-brand-red/8 blur-[100px] pointer-events-none"></div>

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.08),rgba(255,255,255,0))] dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.15),rgba(255,255,255,0))] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Text Content Area */}
          <div className="lg:col-span-7 space-y-6 text-left animate-fade-in-up">
            
            {/* Glowing Headline with Pure White-to-Red Gradient */}
            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl md:text-6xl tracking-tight text-white leading-[1.1] [text-shadow:0_2px_10px_rgba(0,0,0,0.3)]">
              Studying and Settling Abroad Made Easy by{' '}
              <span className="bg-gradient-to-r from-white to-[#E51937] bg-clip-text text-transparent">
                IMMIGRATION HUB
              </span>
            </h1>

            {/* Dynamic, supportive context paragraph with White-to-Red gradients */}
            <p className="text-base sm:text-lg text-slate-100 leading-relaxed max-w-2xl font-medium [text-shadow:0_2px_5px_rgba(0,0,0,0.4)]">
              Explore genuine New Zealand visa and study pathways with the expert guidance of a{' '}
              <strong className="font-extrabold bg-gradient-to-r from-white to-[#E51937] bg-clip-text text-transparent whitespace-nowrap">
                Licensed Immigration Adviser (LIA)
              </strong>{' '}
              in New Zealand, while also unlocking exciting study abroad opportunities in destinations like the{' '}
              <strong className="font-extrabold bg-gradient-to-r from-white to-[#E51937] bg-clip-text text-transparent">
                UK, Dubai, France, Malta, Spain
              </strong>{' '}
              and more.
            </p>

            {/* Inline Slideshow Card for Mobile View */}
            <div className="block lg:hidden w-full aspect-[16/10] relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl my-5 z-10 electric-glow">
              {slides.map((slide, idx) => (
                <div
                  key={idx}
                  className={`absolute inset-0 transition-opacity duration-1000 ease-in-out will-change-opacity ${
                    currentSlide === idx ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <img
                    src={slide.url}
                    alt={slide.alt}
                    // OPTIMIZATION: Eager load the first image, lazy load the rest.
                    loading={idx === 0 ? "eager" : "lazy"}
                    fetchPriority={idx === 0 ? "high" : "auto"}
                    className="w-full h-full object-cover"
                  />
                  {/* Caption badge inside mobile slideshow */}
                  <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-md text-white text-[10px] font-bold tracking-wider uppercase">
                    {slide.alt}
                  </div>
                </div>
              ))}
            </div>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#forms-hub"
                onClick={(e) => {
                  e.preventDefault();
                  window.dispatchEvent(new CustomEvent('setFormsHubTab', { detail: 'counselling' }));
                  document.getElementById('forms-hub')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-6 py-3.5 rounded-xl bg-[#E51937] hover:bg-[#b81026] text-white font-bold text-sm tracking-wide uppercase transition-all shadow-lg shadow-brand-red/20 hover:shadow-brand-red/30 flex items-center gap-2 group hover:scale-[1.02]"
              >
                <Calendar className="w-4 h-4" />
                <span>Book 1:1 Free Counselling</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#forms-hub"
                onClick={(e) => {
                  e.preventDefault();
                  window.dispatchEvent(new CustomEvent('setFormsHubTab', { detail: 'assessment' }));
                  document.getElementById('forms-hub')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#E51937] to-[#C11027] hover:from-[#FF1E3D] hover:to-[#E51937] text-white font-bold text-sm tracking-wide uppercase transition-all shadow-lg shadow-brand-red/20 hover:shadow-brand-red/35 hover:-translate-y-0.5 active:translate-y-0 hover:scale-[1.02] flex items-center gap-2"
              >
                <span>Free Assessment</span>
              </a>

              <a
                href="#visas"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('visas')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-6 py-3.5 rounded-xl glassmorphism text-slate-800 dark:text-white font-bold text-sm tracking-wide uppercase transition-all border border-slate-200 dark:border-slate-800 hover:bg-slate-100/50 dark:hover:bg-slate-800/50 flex items-center gap-2 hover:scale-[1.02]"
              >
                Explore New Zealand Visas
              </a>
            </div>

            {/* Micro assurance */}
            <div className="flex items-center gap-6 text-xs text-slate-200 font-medium drop-shadow-[0_1px_3px_rgba(0,0,0,0.2)]">
              <div className="flex items-center gap-1.5">
                <span className="text-emerald-400 font-bold">✔</span> Zero Consultation Fee for Students
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-emerald-400 font-bold">✔</span> 100% Transparency Guaranteed
              </div>
            </div>
          </div>

          {/* Graphical Dashboard Feature Widget */}
          <div className="lg:col-span-5 relative animate-scale-up">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-accent/10 rounded-3xl blur-2xl pointer-events-none"></div>

            {/* The Visual Dashboard Card */}
            <div className="relative glassmorphism rounded-3xl border border-white/20 dark:border-white/5 p-6 sm:p-8 electric-glow dark:bg-dark-card/90">
              <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4 mb-6">
                <div className="flex items-center gap-2">
                  <span className="w-3.5 h-3.5 rounded-full bg-red-400"></span>
                  <span className="w-3.5 h-3.5 rounded-full bg-yellow-400"></span>
                  <span className="w-3.5 h-3.5 rounded-full bg-emerald-400"></span>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {stats.map((stat, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-white/50 dark:bg-slate-900/60 border border-slate-100/80 dark:border-slate-800 hover:border-primary/20 hover:bg-white/80 dark:hover:bg-slate-900 transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                      {stat.icon}
                    </div>
                    <div className="font-heading font-extrabold text-xl text-slate-900 dark:text-white leading-tight">
                      {stat.value}
                    </div>
                    <div className="text-xs font-bold text-primary dark:text-accent mt-0.5">
                      {stat.label}
                    </div>
                    <p className="text-[10px] text-slate-500 dark:text-slate-400 leading-normal mt-1">
                      {stat.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* CEO New Zealand Experience highlight */}
              <div className="mt-6 p-3 rounded-xl bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/10 flex items-center gap-3">
                <div className="text-[11px] font-semibold text-slate-600 dark:text-slate-300 leading-tight">
                  Our offices in <span className="font-bold text-primary dark:text-accent">Kerala</span> and <span className="font-bold text-primary dark:text-accent">New Zealand</span> provide post-landing services like airport pickup & job hunting guidance!
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};