import React, { useState } from 'react';
import { Star, ShieldCheck, GraduationCap, Quote, MapPin } from 'lucide-react';

export const Testimonials = () => {
  const [filter, setFilter] = useState('all');

  const testimonials = [
    {
      name: "Anjali Nair",
      location: "Ernakulam, Kerala",
      destination: "New Zealand",
      program: "Postgraduate Diploma in Applied Management",
      institute: "Eastern Institute of Technology (EIT)",
      rating: 5,
      review: "The LIA license guidance at Immigration Hub is absolutely top-class. My study pathway was assessed step-by-step. They selected a course matching my career goals and navigated the visa filing flawlessly. The Director's guidance and personal experience in New Zealand were highly helpful, advising on actual living costs and post-landing work rights. The airport pickup and initial stay guidance in New Zealand were excellent! Highly recommended!",
      badge: "🇳🇿 New Zealand Student Visa Approved",
      avatarText: "AN",
      avatarColor: "bg-gradient-to-tr from-[#1B365D] to-emerald-600"
    },
    {
      name: "Rahul Kurup",
      location: "Trivandrum, Kerala",
      destination: "United Kingdom",
      program: "MSc in Data Science",
      institute: "University of East London (UEL)",
      rating: 5,
      review: "Getting my UK visa was extremely fast and smooth with Immigration Hub. As a fresh graduate, I was confused, but their counsellors helped me choose the perfect master's course within my budget. They kept the entire visa application process 100% transparent. I am highly grateful to the Kerala team for their exceptional pre-departure support!",
      badge: "🇬🇧 UK Study Visa Approved",
      avatarText: "RK",
      avatarColor: "bg-gradient-to-tr from-rose-500 to-red-600"
    },
    {
      name: "Sneha Joseph",
      location: "Kottayam, Kerala",
      destination: "Europe",
      program: "MBA in Global Luxury Brand Management",
      institute: "Paris School of Business",
      rating: 5,
      review: "Studying in France was my dream, and Immigration Hub made it happen easily. They helped me secure an offer with subsidized student accommodation in Paris and prepared me for the visa interview thoroughly. Their client-centric approach stands out. Highly professional, always accessible via phone and WhatsApp!",
      badge: "🇫🇷 France Student Visa Approved",
      avatarText: "SJ",
      avatarColor: "bg-gradient-to-tr from-[#1B365D] via-slate-400 to-[#E51937]"
    },
    {
      name: "Princy",
      location: "Kollam, Kerala",
      destination: "New Zealand",
      program: "Visitor Visa Application Support",
      institute: "New Zealand Immigration",
      rating: 5,
      review: "I’m very happy with the support I received from IMMIGRATION HUB for my New Zealand visitor visa application. The guidance provided by the Licensed Immigration Adviser was professional, detailed, and reassuring throughout the process. Their expertise and careful handling gave me confidence and helped me achieve a successful outcome.",
      badge: "🇳🇿 New Zealand Visitor Visa Approved",
      avatarText: "P",
      avatarColor: "bg-gradient-to-tr from-teal-500 to-emerald-600"
    },
    {
      name: "Harikrishnan R.",
      location: "Thrissur, Kerala",
      destination: "Dubai",
      program: "MBA in Logistics & Supply Chain",
      institute: "American University in the Emirates",
      rating: 5,
      review: "My processing for Dubai was incredibly swift. Immigration Hub was extremely helpful in advising on part-time work options and corporate connections. They completed the entire document submission in record time. A highly professional team of migration specialists!",
      badge: "🇦🇪 Dubai Study Visa Approved",
      avatarText: "HR",
      avatarColor: "bg-gradient-to-tr from-amber-500 to-orange-600"
    },
    {
      name: "Diya Mathews",
      location: "Pathanamthitta, Kerala",
      destination: "Europe",
      program: "Graduate Diploma in Tourism & Hospitality",
      institute: "Malta College of Arts, Science and Technology (MCAST)",
      rating: 5,
      review: "Highly affordable tuition fees and a beautiful Schengen environment were my key priorities. Diya and the Senior Counsellors at Immigration Hub recommended Malta. They guided me through the entire Schengen visa documentation. I had a completely hassle-free filing process and zero hidden charges!",
      badge: "🇲🇹 Malta Study Visa Approved",
      avatarText: "DM",
      avatarColor: "bg-gradient-to-tr from-red-600 to-slate-500"
    },
    {
      name: "Arjun S.",
      location: "Calicut, Kerala",
      destination: "Europe",
      program: "Master in Sports Management",
      institute: "GBSB Global Business School",
      rating: 5,
      review: "I applied for Spain through Immigration Hub. They provided highly detailed advice on stay-back work rights, job-seeker visa options, and local Spanish language learning supports. The transparent and realistic guidance was refreshing. They are truly the Global Visa Expert!",
      badge: "🇪🇸 Spain Study Visa Approved",
      avatarText: "AS",
      avatarColor: "bg-gradient-to-tr from-yellow-500 to-red-600"
    },
    {
      name: "Gopika Krishnan",
      location: "Palakkad, Kerala",
      destination: "New Zealand",
      program: "Postgraduate Diploma in Informatics",
      institute: "Otago Polytechnic (Auckland Campus)",
      rating: 5,
      review: "I had some gaps in my work history, making my student visa complex. The Licensed Immigration Adviser (LIA) at Immigration Hub personally reviewed my file and prepared a water-tight visa application explanation. They are very detailed, transparent, and follow a strict client-centric approach. My visa was approved in 12 days! A million thanks!",
      badge: "🇳🇿 New Zealand Student Visa Approved",
      avatarText: "GK",
      avatarColor: "bg-gradient-to-tr from-[#1B365D] to-purple-600"
    }
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
            Student <span className="text-gradient-primary">Testimonials</span>
          </h2>
          <div className="h-1.5 w-20 bg-gradient-to-r from-primary to-accent mx-auto mt-4 rounded-full"></div>
          <p className="text-slate-600 dark:text-slate-400 mt-6 text-base font-light">
            Real stories from our successful students who unlocked amazing careers and settled abroad. Over 1,000+ happy clients from Kerala and New Zealand.
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
