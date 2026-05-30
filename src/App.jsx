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
  // Permanently lock the application to the dark theme across all devices
  useEffect(() => {
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  }, []);

  // Force scroll to top on load/refresh and clear hash
  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
    if (window.location.hash) {
      window.history.replaceState(null, null, window.location.pathname);
    }
  }, []);

  // Scroll Reveal Intersection Observer
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

    const elements = document.querySelectorAll('.reveal-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen text-slate-100 bg-[#0C1F3B]">
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
      <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800 relative z-10 transition-colors overflow-hidden mt-auto">
        
        {/* Bulletproof 2D World Map Background Layer */}
        <div className="absolute bottom-0 left-0 w-full h-[250px] sm:h-[400px] md:h-[500px] pointer-events-none z-0 flex justify-center overflow-hidden">
          
          {/* MOBILE IMAGE: Shows on phones */}
          <img 
            src="/world-map-mobile.png" 
            alt="World Map Mobile Background"
            className="block md:hidden w-full h-full object-cover object-bottom opacity-30 mix-blend-screen"
          />

          {/* DESKTOP (WINDOWS) IMAGE: object-cover with reduced opacity */}
          <img 
            src="/world-map-desktop.png" 
            alt="World Map Desktop Background"
            className="hidden md:block w-full h-full object-cover object-bottom opacity-10 mix-blend-screen"
          />

          {/* Fades the top edge of the map smoothly into the background */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-transparent to-transparent"></div>
        </div>

        {/* Content Container (z-10 ensures it sits on top of the map) */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 text-left">
            {/* Column 1: Brand & Slogan */}
            <div className="space-y-4">
              <Logo className="scale-90 origin-left drop-shadow-lg" />
              <p className="text-xs text-slate-300 leading-relaxed font-medium drop-shadow-md">
                Studying and settling abroad made easy by Immigration Hub. New Zealand and Kerala's premier student visa & migration consultancies.
              </p>
            </div>

            {/* Column 2: Quick Links */}
            <div className="space-y-3">
              <h4 className="font-heading font-bold text-xs text-white uppercase tracking-wider drop-shadow-sm">
                Immigration Hub
              </h4>
              <ul className="space-y-2 text-xs font-medium text-slate-400">
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
              <h4 className="font-heading font-bold text-xs text-white uppercase tracking-wider drop-shadow-sm">
                Study Pathways
              </h4>
              <ul className="space-y-2 text-xs font-medium text-slate-400">
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


          </div>

          {/* Sub-footer Area */}
          <div className="border-t border-slate-700/50 pt-8 mt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-400 font-medium">
            <p className="drop-shadow-sm">
              © {new Date().getFullYear()} IMMIGRATION HUB (The Global Visa Expert). All Rights Reserved.
            </p>
            <div className="flex gap-4 mt-4 md:mt-0 text-[10px]">
              <span className="hover:text-white transition-colors cursor-help" title="Government regulatory codes strictly adhered to.">IAA Code of Conduct</span>
              <span>•</span>
              <span className="hover:text-white transition-colors cursor-help" title="Strict GDPR and Privacy Act compliance.">Privacy Policy</span>
              <span>•</span>
              <span className="hover:text-white transition-colors cursor-help" title="No initial consulting fee for student pathway analysis.">Terms of Service</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;