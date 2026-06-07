import React, { useState } from 'react';
import { ShieldCheck, GraduationCap, Briefcase, Users, PlaneTakeoff, ChevronRight, CheckCircle2 } from 'lucide-react';

export const VisasNZ = () => {
  const [activeTab, setActiveTab] = useState('student');

  const visas = [
    {
      id: 'student',
      name: 'Student Visa',
      icon: <GraduationCap className="w-5 h-5" />,
      tagline: 'Unlock standard New Zealand education & stay-back work rights',
      description: 'Ideal for individuals seeking quality education at New Zealand colleges, universities, or private training establishments (PTEs). Allows you to work up to 25 hours a week part-time and full-time during holidays.',
      checklist: [
        'Offer of Place from an NZQA-accredited educational institution',
        'Evidence of sufficient funds for living expenses',
        'Tuition fee payment receipt or confirmation',
        'Academic transcripts & English language competency proof',
        'Genuine intent & clear post-study pathway plans'
      ],
      liaTip: 'Selecting the correct course matching your academic and work history is critical. Implausible course pathways are the primary cause of student visa rejections.'
    },
    {
      id: 'visitor',
      name: 'Visitor Visa',
      icon: <PlaneTakeoff className="w-5 h-5" />,
      tagline: 'Explore the beauty of New Zealand with the right visitor visa guidance',
      description: 'Allows you to visit New Zealand for tourism, visiting family & friends.',
      checklist: [
        'Valid passport and evidence of identity',
        'Proof of financial support',
        'Onward travel ticket showing planned departure from New Zealand',
        'Sincere intent to visit and return to home country'
      ],
      liaTip: 'Always provide robust evidence of ties to your home country (employment letters, property ownership, close family) to substantiate your return intentions.'
    },
    {
      id: 'resident',
      name: 'Resident Visa',
      icon: <Briefcase className="w-5 h-5" />,
      tagline: 'Pathways to settle in New Zealand permanently',
      description: 'Encompasses skilled migrant, green list, work-to-residence, and family-based pathways. Provides permanent residence status allowing you to live, work, and study in New Zealand indefinitely.',
      checklist: [
        'Expression of Interest (EOI) or direct registration',
        'Job offer in a skilled or Green List tier role (if required)',
        'Detailed character certificates & medical clearances',
        'Sufficient points score under the Skilled Migrant Category (SMC)'
      ],
      liaTip: 'The Green List provides direct or fast-tracked residency routes for key professions like software developers, engineers, and healthcare practitioners.'
    },
    {
      id: 'dependent',
      name: 'Dependent & Family Visa',
      icon: <Users className="w-5 h-5" />,
      tagline: 'Bring your spouse, partner, or children along',
      description: 'Enables partners and children of New Zealand citizens, residents, or specific student/work visa holders to travel to and live in New Zealand with appropriate study or work rights.',
      checklist: [
        'Evidence of genuine, stable, and long-term partnership',
        'Proof of sponsor status (New Zealand visa type, financial capability)',
        'Birth certificates for dependent children',
        'Shared home rental agreements, bank accounts, or utility bills'
      ],
      liaTip: 'New Zealand partner visas require exhaustive documentation proving you live together in a "genuine and stable" relationship. Planning documents months in advance is key.'
    },
    {
      id: 'accredited',
      name: 'Accredited Employer Work Visa',
      icon: <ShieldCheck className="w-5 h-5" />,
      tagline: 'The primary temporary work visa pathway for skilled professionals',
      description: 'The Accredited Employer Work Visa (AEWV) allows skilled professionals to work in New Zealand for an accredited employer. Requires a job check approval for the specific employer before visa filing.',
      checklist: [
        'Full job offer from an INZ accredited employer',
        'Evidence of suitable qualification or relevant work experience',
        'Job check token showing no local New Zealanders are available',
        'Employment contract complying with median wage regulations'
      ],
      liaTip: 'Employers must carry out a labor market check first. Make sure your employer is fully accredited before signing any contracts or applying.'
    }
  ];

  const currentVisa = visas.find(v => v.id === activeTab) || visas[0];

  const handleApplyShortcut = () => {
    // Select Purpose of Inquiry or focus form
    const purposeSelect = document.getElementById('purpose-inquiry');
    if (purposeSelect) {
      purposeSelect.value = 'Immigration Services to New Zealand';
      // Trigger native event so React state updates
      const event = new Event('change', { bubbles: true });
      purposeSelect.dispatchEvent(event);
    }
    
    // Set destination country to New Zealand
    const destInput = document.getElementById('preferred-country');
    if (destInput) {
      destInput.value = 'New Zealand';
      const event = new Event('input', { bubbles: true });
      destInput.dispatchEvent(event);
    }

    const formSec = document.getElementById('forms-hub');
    if (formSec) {
      formSec.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="visas" className="py-12 md:py-16 bg-transparent transition-colors duration-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 reveal-on-scroll">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 text-xs font-bold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-4 h-4" /> Licensed Immigration Adviser Expertise
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 dark:text-white uppercase tracking-tight">
            New Zealand <span className="text-gradient-brand">Visas Hub</span>
          </h2>
          <div className="h-1.5 w-20 bg-gradient-to-r from-primary to-brand-red mx-auto mt-4 rounded-full"></div>
          <p className="text-slate-600 dark:text-slate-400 mt-6 text-base font-light">
            Providing trusted New Zealand immigration advice through our government-licensed Director and Licensed Immigration Adviser (LIA), Explore the right pathway for your settlement goals.
          </p>
        </div>

        {/* Tab Interface Split Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Vertical Menu Buttons */}
          <div className="lg:col-span-4 flex flex-col gap-2 reveal-on-scroll reveal-delay-100">
            {visas.map((visa) => (
              <button
                key={visa.id}
                onClick={() => setActiveTab(visa.id)}
                className={`w-full p-4 rounded-xl flex items-center justify-between transition-all duration-300 text-left ${
                  activeTab === visa.id
                    ? 'bg-gradient-brand text-white shadow-lg shadow-primary/20 scale-[1.01]'
                    : 'bg-sky-50/60 dark:bg-dark-card border border-slate-100 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-primary/30 hover:bg-slate-50 dark:hover:bg-slate-900/50'
                }`}
              >
                <div className="flex items-center gap-3.5">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                    activeTab === visa.id 
                      ? 'bg-white/20 text-white' 
                      : 'bg-primary/10 text-primary dark:text-accent'
                  }`}>
                    {visa.icon}
                  </div>
                  <span className="font-heading font-bold text-sm sm:text-base">
                    {visa.name}
                  </span>
                </div>
                <ChevronRight className={`w-4 h-4 transition-transform duration-300 ${
                  activeTab === visa.id ? 'translate-x-1 rotate-90 sm:rotate-0' : ''
                }`} />
              </button>
            ))}
          </div>

          {/* Right Column: Tab Content Details Pane */}
          <div className="lg:col-span-8 glassmorphism rounded-2xl border border-white/20 dark:border-white/5 bg-white/60 dark:bg-dark-card/60 p-6 sm:p-8 electric-glow text-left min-h-[420px] flex flex-col justify-between reveal-on-scroll reveal-delay-200">
            <div className="space-y-6">
              {/* Header Title */}
              <div>
                <h3 className="font-heading font-extrabold text-2xl text-slate-900 dark:text-white flex items-center gap-2">
                  {currentVisa.name}
                </h3>
                <p className="text-xs font-semibold text-primary dark:text-accent uppercase tracking-wider mt-1.5">
                  {currentVisa.tagline}
                </p>
              </div>

              {/* Description */}
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-light">
                {currentVisa.description}
              </p>

              {/* Requirements Checklist */}
              <div>
                <h4 className="font-heading font-bold text-sm text-slate-800 dark:text-white uppercase tracking-wider mb-3">
                  Key Requirements Checklist:
                </h4>
                <ul className="grid sm:grid-cols-2 gap-2.5">
                  {currentVisa.checklist.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-600 dark:text-slate-400">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span className="font-light">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* LIA Expert Tip Banner */}
              <div className="p-4 rounded-xl bg-emerald-500/5 dark:bg-emerald-500/10 border border-emerald-500/20">
                <div className="flex gap-3">
                  <div className="p-1 rounded bg-emerald-500 text-white shrink-0 h-6 w-6 flex items-center justify-center font-bold text-xs">
                    LIA
                  </div>
                  <div>
                    <h5 className="font-heading font-bold text-xs text-emerald-800 dark:text-emerald-400 uppercase tracking-wide">
                      Licensed Adviser's Strategic Tip:
                    </h5>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-light mt-1">
                      {currentVisa.liaTip}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA action bottom */}
            <div className="pt-6 border-t border-slate-100 dark:border-slate-800/80 mt-6 flex justify-end">
              <button
                onClick={handleApplyShortcut}
                className="px-5 py-2.5 rounded-lg bg-primary hover:bg-primary-dark text-white font-bold text-xs tracking-wider uppercase transition-all shadow-md shadow-primary/10 hover:shadow-primary/20 hover:scale-102 flex items-center gap-1.5"
              >
                <span>Check Your Visa Eligibility</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
