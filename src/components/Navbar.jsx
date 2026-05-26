import React, { useState, useEffect } from 'react';
import { Menu, X, ShieldCheck } from 'lucide-react';
import { Logo } from './Logo';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'New Zealand Visas', href: '#visas' },
    { name: 'Study Abroad', href: '#study-abroad' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 pointer-events-none transition-all duration-300 ${
          scrolled ? 'pt-3 sm:pt-4 lg:pt-0 px-4 sm:px-6 lg:px-0' : 'pt-0 px-0'
        }`}
        style={{ transform: 'translateZ(0)' }}
      >
        <div
          className={`mx-auto w-full transition-all duration-300 ease-out pointer-events-auto will-change-auto ${
            scrolled
              ? 'max-w-6xl lg:max-w-full rounded-2xl lg:rounded-none border lg:border-x-0 lg:border-t-0 border-white/10 border-t-white/20 bg-gradient-to-b from-[#112544]/95 lg:from-[#0A172C]/95 to-[#0A172C]/95 lg:to-[#0A172C]/85 backdrop-blur-xl lg:backdrop-blur-lg shadow-2xl lg:shadow-none shadow-slate-950/80 px-4 sm:px-6 lg:px-8 py-2.5 lg:py-4'
              : 'max-w-full rounded-none border-b border-white/10 bg-gradient-to-b from-[#0A172C]/95 to-[#0A172C]/85 backdrop-blur-lg px-4 sm:px-6 lg:px-8 py-4'
          }`}
        >
          <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
            {/* Logo */}
            <a href="#home" className="flex items-center">
              <Logo />
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-7">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="relative group font-sans font-semibold text-sm text-slate-200 hover:text-white transition-colors duration-300 py-1.5"
                >
                  <span>{link.name}</span>
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#E51937] transition-all duration-300 group-hover:w-full rounded-full shadow-[0_0_8px_#E51937]" />
                </a>
              ))}
            </div>

            {/* Right Action Items */}
            <div className="hidden md:flex items-center gap-5">
              {/* LIA Badge */}
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 hover:border-emerald-400/40 hover:bg-emerald-500/20 hover:shadow-[0_0_12px_rgba(16,185,129,0.2)] text-xs font-bold transition-all duration-300 cursor-help">
                <ShieldCheck className="w-4 h-4 animate-pulse text-emerald-400" />
                <span>Licensed New Zealand LIA Guidance</span>
              </div>
            </div>

            {/* Mobile Menu & Action Button */}
            <div className="flex md:hidden items-center gap-2">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/20 transition-all duration-200"
                aria-label="Toggle Menu"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-slate-950/70 backdrop-blur-md z-40 md:hidden transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-[290px] sm:w-[340px] bg-gradient-to-b from-[#0A172C]/98 to-[#112544]/98 backdrop-blur-xl z-50 shadow-2xl transition-transform duration-300 ease-in-out md:hidden border-l border-white/10 flex flex-col ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-4 border-b border-white/15 flex items-center justify-between">
          <Logo />
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 hover:border-white/20 transition-all duration-200"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="px-5 py-6 space-y-2.5 flex flex-col flex-grow overflow-y-auto">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="py-3 px-4 font-semibold text-base rounded-xl hover:bg-white/5 text-slate-200 hover:text-white border border-transparent hover:border-white/5 transition-all duration-200 flex items-center justify-between group"
            >
              <span>{link.name}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#E51937] scale-0 group-hover:scale-100 transition-transform duration-200 shadow-[0_0_8px_#E51937]" />
            </a>
          ))}

          <div className="pt-6 border-t border-white/15 space-y-4 mt-auto">
            <div className="flex items-center gap-2.5 px-4 py-3.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-bold shadow-sm">
              <ShieldCheck className="w-5 h-5 text-emerald-400 animate-pulse" />
              <span>Licensed New Zealand LIA Guidance</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
