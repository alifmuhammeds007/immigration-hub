import React, { useState, useEffect } from 'react';
import { Star, ShieldCheck, GraduationCap, Quote, MapPin } from 'lucide-react';

export const Testimonials = () => {
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    const elements = document.querySelectorAll('#testimonials .reveal-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, [filter]);

  const testimonials = [
    {
      name: "Teena Agnes",
      location: "United Arab Emirates",
      destination: "Dubai",
      program: "Visa Approved",
      institute: "Dubai Student Visa",
      rating: 5,
      review: "I would like to express my sincere gratitude to my legal advisor, Ms. Priyanka, for the exceptional support and guidance she provided throughout my immigration visa process. From the very beginning, she demonstrated outstanding professionalism, expertise, and dedication. To be honest, there were moments when I felt frustrated because of the large number of documents she requested. However, I now fully understand that her attention to detail and thorough preparation were the key reasons my visa process was completed so quickly and efficiently. Thanks to her hard work and prompt handling of my application, my visa was approved within just one day, which exceeded my expectations. Her commitment, responsiveness, and knowledge made the entire process smooth and stress-free. I highly recommend Ms. Priyanka to anyone seeking reliable and professional immigration assistance. Thank you for your excellent work, dedication, and support throughout this journey. Thank you so much, Ms. Priyanka.",
      badge: "🇦🇪 Dubai Visa Approved",
      avatarText: "TA",
      avatarColor: "bg-gradient-to-tr from-[#1B365D] to-indigo-600"
    },
    {
      name: "Silpa Thomas",
      location: "Kozhikode, Kerala",
      destination: "New Zealand",
      program: "Visa Approved",
      institute: "New Zealand Visitor Visa",
      rating: 5,
      review: "My dream of visiting New Zealand became a reality through Immigration Hub and the expert guidance of Adviser Priyanka. The application process was handled professionally with proper advice and continuous support throughout every stage. I truly appreciate their genuine assistance and would strongly recommend their services to anyone planning their New Zealand journey.",
      badge: "🇳🇿 New Zealand Visitor Visa Approved",
      avatarText: "ST",
      avatarColor: "bg-gradient-to-tr from-[#1B365D] to-emerald-600"
    },
    {
      name: "Princy",
      location: "United Arab Emirates",
      destination: "New Zealand",
      program: "Visa Approved",
      institute: "New Zealand Visitor Visa",
      rating: 5,
      review: "I’m very happy with the support I received from Immigration Hub for my New Zealand visitor visa application. The guidance provided by the Licensed Immigration Adviser was professional, detailed, and reassuring throughout the process. Their expertise and careful handling gave me confidence and helped me achieve a successful outcome.",
      badge: "🇳🇿 New Zealand Visitor Visa Approved",
      avatarText: "P",
      avatarColor: "bg-gradient-to-tr from-teal-500 to-emerald-600"
    },
    {
      name: "Joyal",
      location: "Kollam, Kerala",
      destination: "Dubai",
      program: "Visa Approved",
      institute: "Dubai Student Visa",
      rating: 5,
      review: "My study abroad journey to Dubai became simple and stress-free with the support of Immigration Hub. The team helped me choose an affordable course that matched both my career goals and budget, which gave me the confidence to take the first step towards my dream career. I’m truly happy with the guidance and support I received throughout my entire journey.",
      badge: "🇦🇪 Dubai Student Visa Approved",
      avatarText: "J",
      avatarColor: "bg-gradient-to-tr from-amber-500 to-orange-600"
    },
    {
      name: "Bichu Thankachan",
      location: "Kollam, Kerala",
      destination: "Europe",
      program: "Visa Approved",
      institute: "Malta Student Visa",
      rating: 5,
      review: "My European study journey to Malta became much smoother with the excellent guidance from the CEO, Manu . The support provided throughout the admission and visa process was professional, transparent, and reassuring at every stage. I’m extremely satisfied with their service and truly appreciate their commitment towards students and their future goals.",
      badge: "🇲🇹 Malta Student Visa Approved",
      avatarText: "BT",
      avatarColor: "bg-gradient-to-tr from-red-600 to-slate-500"
    },
    {
      name: "Arjun Pillai",
      location: "Kenya",
      destination: "Dubai",
      program: "Visa Approved",
      institute: "Dubai Student Visa",
      rating: 5,
      review: "I had a great experience with Immigration Hub during my study abroad process to Dubai. The team was supportive, approachable, and always ready to clarify my doubts. Their guidance with course selection, college admission, and visa processing made the entire journey easy and well-organised.",
      badge: "🇦🇪 Dubai Student Visa Approved",
      avatarText: "AP",
      avatarColor: "bg-gradient-to-tr from-yellow-500 to-red-600"
    },
    {
      name: "Jagan",
      location: "Kenya",
      destination: "Dubai",
      program: "Visa Approved",
      institute: "Dubai Student Visa",
      rating: 5,
      review: "Immigration Hub guided me towards the right academic pathway based on my interests and future plans. The team clearly explained every detail regarding my programme, student life in Dubai, and the visa process, which made me feel confident about studying abroad. I’m very happy with their professional support and would definitely recommend Immigration Hub to students planning their Dubai education journey.",
      badge: "🇦🇪 Dubai Student Visa Approved",
      avatarText: "J",
      avatarColor: "bg-gradient-to-tr from-[#1B365D] to-purple-600"
    },
    
  ];

  const filteredTestimonials = filter === 'all'
    ? testimonials
    : testimonials.filter(t => t.destination.toLowerCase() === filter.toLowerCase());

  return (
    <section id="testimonials" className="py-12 md:py-16 bg-transparent transition-colors duration-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 reveal-on-scroll">
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 dark:text-white uppercase tracking-tight">
            Client <span className="text-gradient-primary">Testimonials</span>
          </h2>
          <div className="h-1.5 w-20 bg-gradient-to-r from-primary to-accent mx-auto mt-4 rounded-full"></div>
          <p className="text-slate-600 dark:text-slate-400 mt-6 text-base font-light">
            Real stories from our successful students who unlocked amazing careers and settled abroad. Over 1,000+ happy clients from Multiple countries.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10 reveal-on-scroll reveal-delay-100">
          {[
            { id: 'all', label: '🌍 All Stories' },
            { id: 'new zealand', label: '🇳🇿 New Zealand' },
            { id: 'united kingdom', label: '🇬🇧 United Kingdom' },
            { id: 'europe', label: '🇪🇺 Europe (France, Malta, Spain)' },
            { id: 'dubai', label: '🇦🇪 Dubai' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 border ${
                filter === cat.id
                  ? 'bg-primary text-white border-primary shadow-md shadow-primary/20'
                  : 'bg-sky-50/60 dark:bg-dark-card border-slate-100 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:border-primary/30'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Testimonials Masonry Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTestimonials.map((item, idx) => (
            <div
              key={idx}
              className={`group relative p-6 sm:p-8 rounded-3xl bg-sky-50/50 dark:bg-dark-card border border-slate-100 dark:border-slate-800 hover:border-primary/20 hover:shadow-xl dark:hover:bg-slate-900/60 transition-all duration-300 text-left flex flex-col justify-between electric-glow reveal-on-scroll premium-card-hover reveal-delay-${(idx % 3 + 1) * 100}`}
            >
              {/* Top Section */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  {/* Rating */}
                  <div className="flex items-center gap-0.5">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-primary/10 group-hover:text-primary/20 transition-colors" />
                </div>

                {/* Review Message */}
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-light line-clamp-[7] group-hover:line-clamp-none transition-all duration-500">
                  "{item.review}"
                </p>
              </div>

              {/* Student Profile Info */}
              <div className="border-t border-slate-100 dark:border-slate-800/80 pt-4 mt-6">
                <div className="flex items-center gap-3">
                  {/* Avatar */}
                  <div className={`w-11 h-11 rounded-full ${item.avatarColor} text-white flex items-center justify-center font-heading font-extrabold text-sm shadow-md`}>
                    {item.avatarText}
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-sm text-slate-900 dark:text-white">
                      {item.name}
                    </h4>
                    <p className="text-[10px] text-slate-400 dark:text-slate-500 flex items-center gap-1 font-medium mt-0.5">
                      <MapPin className="w-3 h-3 text-primary shrink-0" />
                      <span>{item.location}</span>
                    </p>
                  </div>
                </div>

                {/* Study Destination Details */}
                <div className="mt-3.5 space-y-1 bg-slate-50 dark:bg-slate-900/60 p-2.5 rounded-xl border border-slate-100 dark:border-slate-800/50">
                  <div className="text-[10px] font-bold text-primary dark:text-accent uppercase tracking-wider flex items-center gap-1">
                    <GraduationCap className="w-3.5 h-3.5" />
                    <span>{item.institute}</span>
                  </div>
                  <div className="text-[10px] text-slate-600 dark:text-slate-400 leading-normal font-light">
                    {item.program}
                  </div>
                </div>

                {/* Approved Badge */}
                <div className="mt-3.5 inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 text-[9px] font-bold uppercase tracking-wider">
                  <ShieldCheck className="w-3 h-3" /> {item.badge}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
