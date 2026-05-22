import { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Logo } from './components/Logo';
import { AboutUs } from './components/AboutUs';
import { VisasNZ } from './components/VisasNZ';
import { StudyAbroad } from './components/StudyAbroad';
import { Testimonials } from './components/Testimonials';
import { FormsHub } from './components/FormsHub';
import { ContactUs } from './components/ContactUs';
import { QuickEnquiry } from './components/QuickEnquiry';
import { FloatingBubbles } from './components/FloatingBubbles';
import { ShieldCheck } from 'lucide-react';

function App() {
  useEffect(() => {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  }, []);

  // Scroll Reveal Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    const elements = document.querySelectorAll('.reveal-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="min-h-screen text-slate-800 bg-[#F8FAFC]">
      {/* 1. Navigation bar */}
      <Navbar />

      {/* 2. Hero Section */}
      <Hero />

      {/* 3. About Us Section */}
      <AboutUs />

      {/* 4. New Zealand Visas Hub */}
      <VisasNZ />

      {/* 5. Study Abroad Destinations Section */}
      <StudyAbroad />

      {/* 6. Form Hub (Visa Assessment & 1:1 Booking) */}
      <FormsHub />

      {/* 7. Testimonials Carousel / Grid */}
      <Testimonials />

      {/* 8. Contact Section */}
      <ContactUs />

      {/* 9. Floating / Collapsible Widget Utilities */}
      <QuickEnquiry />
      <FloatingBubbles />

      {/* 10. Corporate Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800 relative z-10 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 text-left">
            {/* Column 1: Brand & Slogan */}
            <div className="space-y-4">
              <Logo className="scale-90 origin-left" />
              <p className="text-xs text-slate-500 leading-relaxed font-light">
                Studying and settling abroad made easy by Immigration Hub. Kerala and New Zealand’s premier study visa & migration consultancies.
              </p>
              <div className="flex items-center gap-1.5 px-3 py-1 w-fit rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[10px] font-bold uppercase tracking-wider">
                <ShieldCheck className="w-3.5 h-3.5" /> LIA Licensed Director
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div className="space-y-3">
              <h4 className="font-heading font-bold text-xs text-white uppercase tracking-wider">
                Immigration Hub
              </h4>
              <ul className="space-y-2 text-xs font-light">
                <li>
                  <a href="#home" className="hover:text-white transition-colors">Home</a>
                </li>
                <li>
                  <a href="#about" className="hover:text-white transition-colors">About Us</a>
                </li>
                <li>
                  <a href="#visas" className="hover:text-white transition-colors">New Zealand Visas</a>
                </li>
                <li>
                  <a href="#study-abroad" className="hover:text-white transition-colors">Study Abroad</a>
                </li>
              </ul>
            </div>

            {/* Column 3: Global Pathways */}
            <div className="space-y-3">
              <h4 className="font-heading font-bold text-xs text-white uppercase tracking-wider">
                Study Pathways
              </h4>
              <ul className="space-y-2 text-xs font-light">
                <li>
                  <a href="#study-abroad" className="hover:text-white transition-colors">Study in New Zealand</a>
                </li>
                <li>
                  <a href="#study-abroad" className="hover:text-white transition-colors">Study in the United Kingdom</a>
                </li>
                <li>
                  <a href="#study-abroad" className="hover:text-white transition-colors">Study in Europe (France, Malta, Spain)</a>
                </li>
                <li>
                  <a href="#study-abroad" className="hover:text-white transition-colors">Study in Dubai (UAE)</a>
                </li>
              </ul>
            </div>

            {/* Column 4: Contact Shortcuts */}
            <div className="space-y-3">
              <h4 className="font-heading font-bold text-xs text-white uppercase tracking-wider">
                Support Hours
              </h4>
              <p className="text-xs text-slate-500 font-light leading-normal">
                Our filing division operates Mon - Sat: 9:30 AM to 6:00 PM IST.<br/>
                Our Auckland office operates Mon - Fri: 9:00 AM to 5:00 PM NZST.
              </p>
              <div className="text-[10px] text-slate-500 font-light pt-2">
                Need immediate help? Click the green WhatsApp bubble at the bottom right.
              </div>
            </div>
          </div>

          {/* Sub-footer Area */}
          <div className="border-t border-slate-800 pt-8 mt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-600 dark:text-slate-500 font-light">
            <p>
              © {new Date().getFullYear()} IMMIGRATION HUB (The Global Visa Expert). All Rights Reserved.
            </p>
            <div className="flex gap-4 mt-4 md:mt-0 text-[10px]">
              <span className="hover:text-slate-400 cursor-help" title="Government regulatory codes strictly adhered to.">IAA Code of Conduct</span>
              <span>•</span>
              <span className="hover:text-slate-400 cursor-help" title="Strict GDPR and Privacy Act compliance.">Privacy Policy</span>
              <span>•</span>
              <span className="hover:text-slate-400 cursor-help" title="No initial consulting fee for student pathway analysis.">Terms of Service</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
