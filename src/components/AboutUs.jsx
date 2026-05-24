import React from 'react';
import { CheckCircle, Shield, Users } from 'lucide-react';

export const AboutUs = () => {
  const steps = [
    {
      title: "Background Assessment",
      desc: "Carefully evaluating your academic, work, family background, and financial details."
    },
    {
      title: "Best-Fit Institute Matching",
      desc: "Matching you with the perfect course and best-tier institute based on your career goals."
    },
    {
      title: "Documentation & Submission",
      desc: "Navigating complex document checklists, visa filing, and submission with precision."
    },
    {
      title: "Post-Landing Support",
      desc: "Services to help you settle in, choose accommodation, navigate work rights, and more."
    }
  ];

  return (
    <section id="about" className="py-12 md:py-16 bg-transparent transition-colors duration-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 reveal-on-scroll">
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 dark:text-white uppercase tracking-tight">
            About <span className="text-gradient-brand">Immigration Hub</span>
          </h2>
          <div className="h-1.5 w-20 bg-gradient-to-r from-primary to-brand-red mx-auto mt-4 rounded-full"></div>
          <p className="text-slate-600 dark:text-slate-400 mt-6 text-base font-light">
            We are a New Zealand based Study and Immigration consultant operating in New Zealand and Kerala.
            We specialize in guiding applicants toward their absolute best career and settlement pathways.
          </p>
        </div>

        {/* Core Profile Split Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Column: Mission Description */}
          <div className="space-y-6 text-left reveal-on-scroll reveal-delay-100">
            <h3 className="font-heading font-bold text-2xl text-slate-800 dark:text-white">
              Why Choose Our Expert Advisors?
            </h3>

            <p className="text-slate-600 dark:text-slate-300 leading-relaxed font-light">
              At **IMMIGRATION HUB**, we believe in a custom, client-centric approach. We assess education and exp background, career goals, settlement plans, family background, financial considerations, and socio-economic standards to evaluate and recommend the best-fit options to study abroad in the best institute.
            </p>

            <p className="text-slate-600 dark:text-slate-300 leading-relaxed font-light">
              We guide students to choose the best course with the best advice for a hassle-free pre and post-study life, navigate the documentation, visa application, and submission process, and also in the **Post-landing services**.
            </p>

            {/* Sub-features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-500 mt-0.5 animate-pulse">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-sm text-slate-800 dark:text-white">Licensed & Regulated</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Operated under strict LIA Code of Conduct</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-primary/10 text-primary mt-0.5 animate-pulse">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-sm text-slate-800 dark:text-white">Client-Centric Philosophy</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Custom pathways tailored to your profile</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Leadership Profile Cards */}
          <div className="relative reveal-on-scroll reveal-delay-200">
            <div className="absolute inset-0 bg-primary/5 rounded-3xl blur-xl pointer-events-none"></div>

            <div className="relative space-y-6">
              {/* Profile Card 1: Director LIA */}
              <div className="p-6 rounded-2xl glassmorphism border border-slate-100 dark:border-slate-800 bg-white/60 dark:bg-slate-900/60 shadow-lg flex flex-col sm:flex-row gap-5 items-center sm:items-start text-center sm:text-left hover:border-emerald-500/30 transition-all duration-300 premium-card-hover">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-emerald-500 to-teal-400 text-white flex items-center justify-center font-bold text-2xl shadow-md shrink-0 px-3">
                  LIA
                </div>
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[10px] font-bold uppercase">
                    Director Credentials
                  </div>
                  <h4 className="font-heading font-bold text-lg text-slate-900 dark:text-white">
                    Priyanka Anilkumar
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-light leading-relaxed">
                    Our Director & New Zealand Licensed Immigration Adviser, Priyanka Anilkumar (IAA Licence No. 202501411), is authorised to provide professional immigration advice and assistance for all types of New Zealand visas. From guiding clients with the right visa pathway to preparing, handling, and lodging visa applications, she offers complete end-to-end support with honesty, transparency, and professionalism.
                  </p>
                </div>
              </div>

              {/* Profile Card 2: LIA Guidance */}
              <div className="p-6 rounded-2xl glassmorphism border border-slate-100 dark:border-slate-800 bg-white/60 dark:bg-slate-900/60 shadow-lg flex flex-col sm:flex-row gap-5 items-center sm:items-start text-center sm:text-left hover:border-primary/30 transition-all duration-300 premium-card-hover">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-primary to-accent text-white flex items-center justify-center font-bold text-2xl shadow-md shrink-0 px-3">
                  LIA
                </div>
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-primary/10 text-primary dark:text-accent text-[10px] font-bold uppercase">
                    Director's Guidance
                  </div>
                  <h4 className="font-heading font-bold text-lg text-slate-900 dark:text-white">
                    Guidance of our Director & LIA
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-light leading-relaxed">
                    Every file at Immigration Hub is processed under the direct supervision and professional guidance of our licensed adviser. We help students evaluate course selectivities, understand part-time work rights (up to 25 hours per week!), manage living costs, and build reliable local support networks in New Zealand.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Step-by-Step Consulting Process Showcase */}
        <div className="border-t border-slate-100 dark:border-slate-800 pt-16 mt-16">
          <h3 className="font-heading font-bold text-2xl text-slate-800 dark:text-white mb-10 text-center reveal-on-scroll">
            Our Client-Centric Pathway Guidance
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className={`relative p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 text-left hover:bg-slate-100/50 dark:hover:bg-slate-900 transition-all duration-300 reveal-on-scroll premium-card-hover reveal-delay-${(idx + 1) * 100}`}
              >
                <div className="absolute top-4 right-4 text-3xl font-heading font-extrabold text-slate-200 dark:text-slate-800 select-none">
                  0{idx + 1}
                </div>
                <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <h4 className="font-heading font-bold text-base text-slate-900 dark:text-white mb-2">
                  {step.title}
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-light">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
