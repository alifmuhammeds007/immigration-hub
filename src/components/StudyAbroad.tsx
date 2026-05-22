import React from 'react';
import { ArrowUpRight, GraduationCap, Compass, Briefcase, DollarSign } from 'lucide-react';

interface CountryCard {
  name: string;
  flag: string;
  gradient: string;
  workRights: string;
  postStudyWork: string;
  tuitionFee: string;
  popularCourses: string;
  highlight: string;
}

export const StudyAbroad: React.FC = () => {
  const countries: CountryCard[] = [
    {
      name: "New Zealand",
      flag: "🇳🇿",
      gradient: "from-blue-600 to-indigo-800",
      workRights: "20 Hrs / Week",
      postStudyWork: "Up to 3 Years",
      tuitionFee: "$22,000 - $35,000 NZD / Yr",
      popularCourses: "IT, Nursing, Engineering, Business, PG Diploma",
      highlight: "Our specialized focus. Fully guided under legal LIA Director licensure!"
    },
    {
      name: "United Kingdom",
      flag: "🇬🇧",
      gradient: "from-rose-600 to-blue-800",
      workRights: "20 Hrs / Week",
      postStudyWork: "2 Years (Graduate Route)",
      tuitionFee: "£11,000 - £22,000 / Yr",
      popularCourses: "MBA, Data Science, Digital Marketing, Public Health",
      highlight: "Premium world-class universities, fast 1-year master's programs."
    },
    {
      name: "Dubai (UAE)",
      flag: "🇦🇪",
      gradient: "from-emerald-600 to-amber-600",
      workRights: "Part-time Permitted",
      postStudyWork: "Golden Visa Opportunities",
      tuitionFee: "AED 35,000 - 75,000 / Yr",
      popularCourses: "Hospitality, Logistics, Business Management, Architecture",
      highlight: "Tax-free living, global corporate hub with quick processing."
    },
    {
      name: "France",
      flag: "🇫🇷",
      gradient: "from-indigo-600 via-white to-red-600",
      workRights: "Part-time Permitted",
      postStudyWork: "2 Years Master Stayback",
      tuitionFee: "€8,000 - €16,000 / Yr",
      popularCourses: "Luxury Branding, Fashion Management, Culinary, AI",
      highlight: "Subsidized accommodation, top-tier triple-accredited business schools."
    },
    {
      name: "Malta",
      flag: "🇲🇹",
      gradient: "from-red-700 to-slate-400",
      workRights: "15 Hrs / Week (after 90 days)",
      postStudyWork: "9 Months Stayback",
      tuitionFee: "€5,000 - €8,500 / Yr",
      popularCourses: "Business Administration, IT, Tourism & Hospitality Management",
      highlight: "Highly affordable European study option. Fast entry to Schengen Zone."
    },
    {
      name: "Spain",
      flag: "🇪🇸",
      gradient: "from-amber-500 to-red-600",
      workRights: "30 Hrs / Week",
      postStudyWork: "1-2 Years Job Seeker Visa",
      tuitionFee: "€3,000 - €9,000 / Yr (Pvt higher)",
      popularCourses: "Hospitality & Tourism, Sports Management, International Business",
      highlight: "Vibrant cultural hub, lower living expenses, expansive work rights."
    }
  ];

  const handleCountryShortcut = (countryName: string) => {
    // Scroll to the book counselling form
    const destInput = document.getElementById('preferred-country') as HTMLInputElement;
    if (destInput) {
      destInput.value = countryName;
      const event = new Event('input', { bubbles: true });
      destInput.dispatchEvent(event);
    }
    
    const enquiryDest = document.getElementById('enquiry-country') as HTMLSelectElement;
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
    <section id="study-abroad" className="py-20 bg-white dark:bg-dark-card transition-colors duration-300 relative">
      {/* Background graphic */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] rounded-full bg-primary/5 blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 reveal-on-scroll">
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 dark:text-white uppercase tracking-tight">
            Study Abroad <span className="text-gradient-primary">Destinations</span>
          </h2>
          <div className="h-1.5 w-20 bg-gradient-to-r from-primary to-accent mx-auto mt-4 rounded-full"></div>
          <p className="text-slate-600 dark:text-slate-400 mt-6 text-base font-light">
            We offer study opportunities in high-ranking destinations. We help you choose the right country, best courses, and ideal career pathways with comprehensive expert support.
          </p>
        </div>

        {/* Countries Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {countries.map((country, idx) => (
            <div
              key={idx}
              className={`group relative rounded-3xl overflow-hidden bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300 text-left flex flex-col justify-between reveal-on-scroll premium-card-hover reveal-delay-${(idx % 3 + 1) * 100}`}
            >
              {/* Graphic Banner card */}
              <div className={`h-24 bg-gradient-to-r ${country.gradient} p-5 relative flex items-center justify-between overflow-hidden`}>
                {/* Decorative glow / graphic */}
                <div className="absolute -right-10 -bottom-10 w-28 h-28 rounded-full bg-white/10 blur-xl"></div>
                
                <div className="flex items-center gap-3 relative z-10">
                  <div className="w-12 h-12 rounded-full bg-white/15 backdrop-blur-md flex items-center justify-center text-3xl shadow-inner shadow-white/20">
                    {country.flag}
                  </div>
                  <h3 className="font-heading font-extrabold text-lg sm:text-xl text-white">
                    {country.name}
                  </h3>
                </div>

                <GraduationCap className="w-12 h-12 text-white/10 absolute right-4 bottom-2" />
              </div>

              {/* Information Parameters */}
              <div className="p-6 space-y-4 flex-grow">
                {/* Data Row 1: Stayback */}
                <div className="flex items-center justify-between text-xs border-b border-slate-100 dark:border-slate-800/80 pb-2">
                  <span className="text-slate-400 dark:text-slate-500 font-medium flex items-center gap-1.5">
                    <Compass className="w-3.5 h-3.5 text-primary" /> Stayback Option
                  </span>
                  <span className="font-semibold text-slate-800 dark:text-slate-200">
                    {country.postStudyWork}
                  </span>
                </div>

                {/* Data Row 2: Work rights */}
                <div className="flex items-center justify-between text-xs border-b border-slate-100 dark:border-slate-800/80 pb-2">
                  <span className="text-slate-400 dark:text-slate-500 font-medium flex items-center gap-1.5">
                    <Briefcase className="w-3.5 h-3.5 text-accent" /> Part-Time Work
                  </span>
                  <span className="font-semibold text-slate-800 dark:text-slate-200">
                    {country.workRights}
                  </span>
                </div>

                {/* Data Row 3: Tuition */}
                <div className="flex items-center justify-between text-xs border-b border-slate-100 dark:border-slate-800/80 pb-2">
                  <span className="text-slate-400 dark:text-slate-500 font-medium flex items-center gap-1.5">
                    <DollarSign className="w-3.5 h-3.5 text-emerald-500" /> Avg Tuition Cost
                  </span>
                  <span className="font-semibold text-slate-800 dark:text-slate-200">
                    {country.tuitionFee}
                  </span>
                </div>

                {/* Courses */}
                <div className="space-y-1">
                  <h4 className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                    Popular Programs
                  </h4>
                  <p className="text-xs text-slate-700 dark:text-slate-300 leading-normal font-light">
                    {country.popularCourses}
                  </p>
                </div>

                {/* Specialty Highlight Banner */}
                <p className="text-[11px] leading-relaxed text-slate-500 dark:text-slate-400 italic bg-slate-100/50 dark:bg-slate-800/50 p-2.5 rounded-xl border border-slate-100 dark:border-slate-800/50">
                  {country.highlight}
                </p>
              </div>

              {/* Action Button Footer */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => handleCountryShortcut(country.name)}
                  className="w-full py-2.5 rounded-xl bg-slate-100 hover:bg-primary hover:text-white dark:bg-slate-800 dark:hover:bg-primary text-slate-700 dark:text-slate-300 font-bold text-xs tracking-wider uppercase transition-all flex items-center justify-center gap-1"
                >
                  <span>Select Destination</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
