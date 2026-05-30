import React from 'react';
import { CheckCircle, Shield, Users, Landmark, HeartHandshake } from 'lucide-react';

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
      {/* Background graphic */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] rounded-full bg-primary/5 blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Block */}
        <div className="text-center max-w-5xl mx-auto mb-16 reveal-on-scroll">
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 dark:text-white uppercase tracking-tight">
            About <span className="text-gradient-brand">Immigration Hub</span>
          </h2>
          <div className="h-1.5 w-20 bg-gradient-to-r from-primary to-brand-red mx-auto mt-4 rounded-full"></div>
          <p className="text-slate-600 dark:text-slate-300 mt-6 text-sm sm:text-base font-light leading-relaxed max-w-4xl mx-auto text-left sm:text-center">
            We are a New Zealand-based study and immigration consultancy operating in New Zealand  and India . At Immigration Hub, we specialize in guiding applicants towards the best career and migration pathways with the support of our dynamic and enthusiastic education and migration consultants. With our CEO’s decade-long experience living, working, and studying in New Zealand, along with guidance from our Director, a Licensed Immigration Adviser (LIA), we offer expert knowledge and trusted guidance in both the education and migration sectors.
            <br /><br />
            Our clientcentric approach carefully assesses each applicant’s educational and professional background, career goals, settlement plans, family background, financial considerations, and socioeconomic circumstances to evaluate and recommend the bestfit study abroad options. We assist clients in selecting the right institution and course, provide expert guidance for a hasslefree pre and poststudy journey, support with documentation and visa application processes, and also offer reliable postlanding services.
          </p>
        </div>

        {/* Core Profile Split Grid */}
        <div className="grid lg:grid-cols-12 gap-12 items-start mb-16">
          {/* Left Column: Why Choose & Leadership Cards Stacked (Lg: col-span-7) */}
          <div className="lg:col-span-7 space-y-6 text-left reveal-on-scroll reveal-delay-100">
            <h3 className="font-heading font-bold text-2xl text-slate-800 dark:text-white">
              Why Choose Our Expert Advisors?
            </h3>

            <div className="space-y-6">
              {/* Profile Card 1: Director LIA */}
              <div className="rounded-3xl glassmorphism border border-slate-100 dark:border-slate-800 bg-white/60 dark:bg-slate-900/60 shadow-lg flex flex-col sm:flex-row overflow-hidden hover:border-emerald-500/30 transition-all duration-300 premium-card-hover">
                {/* Left Column (Full Height Photo & Profile Details) */}
                <div className="w-full sm:w-48 bg-slate-950/5 dark:bg-slate-950/20 flex flex-col border-b sm:border-b-0 sm:border-r border-slate-100 dark:border-slate-800/80 shrink-0">
                  {/* Photo at the top of the column */}
                  <div className="w-full h-48 shrink-0 relative overflow-hidden">
                    <img 
                      src="/priyanka.jpg" 
                      alt="Priyanka Anilkumar" 
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                  {/* Name and LIA under the picture */}
                  <div className="p-4 flex-1 flex flex-col items-center justify-center text-center">
                    <h4 className="font-heading font-extrabold text-[15px] sm:text-base text-slate-900 dark:text-white leading-tight">
                      Priyanka Anilkumar
                    </h4>
                    <div className="mt-3 px-5 py-1.5 rounded-xl bg-gradient-to-tr from-emerald-600 via-emerald-500 to-teal-400 text-white font-black text-xs sm:text-sm tracking-widest shadow-lg shadow-emerald-500/20 border border-emerald-400/20 uppercase inline-block hover:scale-105 transition-transform duration-300">
                      LIA
                    </div>
                  </div>
                </div>

                {/* Right Column (Credentials Details) */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-center text-left">
                  <h3 className="font-heading font-extrabold text-lg text-slate-900 dark:text-white uppercase tracking-wider text-gradient-primary">
                    Director Credentials
                  </h3>
                  <div className="h-4" /> {/* Gap */}
                  <p className="text-xs sm:text-[13px] text-slate-600 dark:text-slate-350 font-light leading-relaxed">
                    Our Director & New Zealand Licensed Immigration Adviser, Priyanka Anilkumar (IAA Licence No. 202501411), is authorised to provide professional immigration advice and assistance for all types of New Zealand visas. From guiding clients with the right visa pathway to preparing, handling, and lodging visa applications, she offers complete end-to-end support with honesty, transparency, and professionalism.
                  </p>
                </div>
              </div>

              {/* Profile Card 2: CEO Profile */}
              <div className="rounded-3xl glassmorphism border border-slate-100 dark:border-slate-800 bg-white/60 dark:bg-slate-900/60 shadow-lg flex flex-col sm:flex-row overflow-hidden hover:border-primary/30 transition-all duration-300 premium-card-hover">
                {/* Left Column (Profile Details) */}
                <div className="w-full sm:w-48 bg-slate-950/5 dark:bg-slate-950/20 flex flex-col items-center justify-center text-center p-6 border-b sm:border-b-0 sm:border-r border-slate-100 dark:border-slate-800/80 shrink-0">
                  <h4 className="font-heading font-extrabold text-[15px] sm:text-base text-slate-900 dark:text-white leading-tight">
                    Manu
                  </h4>
                  <div className="mt-3 px-5 py-1.5 rounded-xl bg-gradient-to-tr from-primary via-[#D31F3C] to-[#E51937] text-white font-black text-xs sm:text-sm tracking-widest shadow-lg shadow-primary/20 border border-primary/20 uppercase inline-block hover:scale-105 transition-transform duration-300">
                    CEO
                  </div>
                </div>

                {/* Right Column (Credentials Details) */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-center text-left">
                  <h3 className="font-heading font-extrabold text-lg text-slate-900 dark:text-white uppercase tracking-wider text-gradient-primary">
                    CEO Credentials
                  </h3>
                  <div className="h-4" /> {/* Gap */}
                  <p className="text-xs sm:text-[13px] text-slate-600 dark:text-slate-350 font-light leading-relaxed">
                    Our CEO, Manu, has been living in New Zealand for over 10 years and brings valuable international experience in guiding students towards the right education and career pathways in New Zealand and other countries. Through his genuine support, practical guidance, and student-focused approach, he has helped many aspiring students confidently begin their study abroad journey. His dedication, experience, and continuous efforts have been one of the strongest foundations behind the growth and strength of our team.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Trust & Metrics Grid (Lg: col-span-5) */}
          <div className="lg:col-span-5 relative reveal-on-scroll reveal-delay-200 space-y-6">
            {/* Visual Scenic Backdrop Card */}
            <div className="relative h-64 rounded-3xl overflow-hidden shadow-xl border border-white/10 group">
              <img 
                src="/hero_nz.png" 
                alt="Christchurch, New Zealand" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-left">
                <span className="text-[10px] font-bold text-accent uppercase tracking-widest bg-white/10 px-2 py-0.5 rounded backdrop-blur-sm">
                  Our Destination Focus
                </span>
                <h4 className="font-heading font-extrabold text-xl text-white mt-2 drop-shadow">
                  Your Trusted Partner to New Zealand
                </h4>
                <p className="text-xs text-slate-300 font-light mt-1">
                  Director-led LIA immigration guidance with an active local presence in both Christchurch & Kerala.
                </p>
              </div>
            </div>

            {/* Sub-features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-emerald-500/20 transition-all duration-300">
                <div className="p-2 w-fit rounded-lg bg-emerald-500/10 text-emerald-500 mb-3 animate-pulse">
                  <Shield className="w-5 h-5" />
                </div>
                <h4 className="font-heading font-semibold text-sm text-slate-800 dark:text-white">Licensed & Regulated</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Operated under strict New Zealand LIA Code of Conduct</p>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-primary/20 transition-all duration-300">
                <div className="p-2 w-fit rounded-lg bg-primary/10 text-primary mb-3 animate-pulse">
                  <Users className="w-5 h-5" />
                </div>
                <h4 className="font-heading font-semibold text-sm text-slate-800 dark:text-white">Client-Centric Approach</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Thorough background evaluation & course mapping</p>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-accent/20 transition-all duration-300">
                <div className="p-2 w-fit rounded-lg bg-accent/10 text-accent mb-3">
                  <Landmark className="w-5 h-5" />
                </div>
                <h4 className="font-heading font-semibold text-sm text-slate-800 dark:text-white">Decade of Experience</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">CEO's direct living, studying & working knowledge</p>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-brand-red/20 transition-all duration-300">
                <div className="p-2 w-fit rounded-lg bg-brand-red/10 text-brand-red mb-3">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <h4 className="font-heading font-semibold text-sm text-slate-800 dark:text-white">Post-Landing Care</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Airport pickup, initial stay, & local job search support</p>
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
