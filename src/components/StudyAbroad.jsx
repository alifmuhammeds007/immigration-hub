import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export const StudyAbroad = () => {
  const countries = [
    {
      name: "New Zealand",
      flag: "🇳🇿",
      image: "/hero_nz.png"
    },
    {
      name: "United Kingdom",
      flag: "🇬🇧",
      image: "/hero_uk.png"
    },
    {
      name: "Dubai (UAE)",
      flag: "🇦🇪",
      image: "/hero_dubai.png"
    },
    {
      name: "France",
      flag: "🇫🇷",
      image: "/hero_france.png"
    },
    {
      name: "Malta",
      flag: "🇲🇹",
      image: "https://images.unsplash.com/photo-1543269664-76bc3997d9ea?auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Spain",
      flag: "🇪🇸",
      image: "https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&w=600&q=80"
    }
  ];

  const handleCountryShortcut = (countryName) => {
    // Scroll to the book counselling form
    const destInput = document.getElementById('preferred-country');
    if (destInput) {
      destInput.value = countryName;
      const event = new Event('input', { bubbles: true });
      destInput.dispatchEvent(event);
    }
    
    const enquiryDest = document.getElementById('enquiry-country');
    if (enquiryDest) {
      enquiryDest.value = countryName;
      const event = new Event('change', { bubbles: true });
      enquiryDest.dispatchEvent(event);
    }

    const formSec = document.getElementById('forms-hub');
    if (formSec) {
      formSec.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="study-abroad" className="py-12 md:py-16 bg-transparent transition-colors duration-300 relative">
      {/* Background graphic */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] rounded-full bg-primary/5 blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 reveal-on-scroll">
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 dark:text-white uppercase tracking-tight">
            Study Abroad <span className="text-gradient-brand">Destinations</span>
          </h2>
          <div className="h-1.5 w-20 bg-gradient-brand mx-auto mt-4 rounded-full"></div>
          <p className="text-slate-600 dark:text-slate-400 mt-6 text-base font-light">
            We offer study opportunities in high-ranking destinations. We help you choose the right country, best courses, and ideal career pathways with comprehensive expert support.
          </p>
        </div>

        {/* Countries Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {countries.map((country, idx) => (
            <div
              key={idx}
              onClick={() => handleCountryShortcut(country.name)}
              className="group relative h-80 rounded-3xl overflow-hidden shadow-md hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 cursor-pointer reveal-on-scroll premium-card-hover"
            >
              {/* Full-sized Scenic Country Image */}
              <img 
                src={country.image} 
                alt={country.name} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Premium dark gradient overlay for text readability and elegance */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent transition-opacity duration-300 group-hover:opacity-90"></div>
              
              {/* Glassmorphic hover highlight effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-tr from-primary/10 via-transparent to-accent/5 pointer-events-none"></div>

              {/* Text and Flag Container positioned beautifully at the bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col justify-end">
                <div className="flex items-center gap-3">
                  <span className="text-3xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] transform group-hover:scale-110 transition-transform duration-300">
                    {country.flag}
                  </span>
                  <h3 className="font-heading font-extrabold text-2xl text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)] tracking-wide">
                    {country.name}
                  </h3>
                </div>
                
                {/* Subtle visual link indicator that appears on hover */}
                <div className="h-0.5 w-0 bg-gradient-to-r from-brand-red to-primary transition-all duration-500 group-hover:w-20 mt-3 rounded-full shadow-[0_0_8px_#E51937]" />
                
                <span className="text-[10px] text-slate-300 font-bold uppercase tracking-wider mt-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 flex items-center gap-1">
                  Select Destination <ArrowUpRight className="w-3.5 h-3.5 text-brand-red" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
