import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, ShieldCheck } from 'lucide-react';
import { Logo } from './Logo';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (dark: boolean) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ darkMode, setDarkMode }) => {
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
    { name: 'NZ Visas', href: '#visas' },
    { name: 'Study Abroad', href: '#study-abroad' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <nav
        className="fixed top-0 left-0 w-full z-50 px-4 sm:px-6 lg:px-8 pointer-events-none"
      >
        <div
          className={`mx-auto w-full transition-all duration-500 ease-out pointer-events-auto ${
            scrolled
              ? 'max-w-6xl mt-3 rounded-2xl border border-slate-200/50 dark:border-slate-800/80 bg-white/80 dark:bg-dark-bg/85 backdrop-blur-md shadow-lg shadow-primary/5 dark:shadow-slate-950/20 px-4 sm:px-6 py-2.5'
              : 'max-w-7xl mt-0 rounded-none border-b border-transparent bg-transparent px-0 py-5'
          }`}
        >
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#home" className="flex items-center">
              <Logo />
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="font-sans font-medium text-sm text-slate-600 dark:text-slate-300 hover:text-[#0052FF] dark:hover:text-accent transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Right Action Items */}
            <div className="hidden md:flex items-center gap-4">
              {/* LIA Badge */}
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 text-xs font-bold transition-all duration-300">
                <ShieldCheck className="w-4 h-4 animate-pulse" />
                <span>Licensed NZ LIA Guidance</span>
              </div>

              {/* Theme Toggle */}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                aria-label="Toggle Theme"
              >
                {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>

              {/* Quick Action Button */}
              <a
                href="#forms-hub"
                className="px-4 py-2 rounded-lg bg-[#0052FF] hover:bg-[#003DB3] text-white font-semibold text-xs tracking-wider uppercase transition-all shadow-md shadow-primary/10 hover:shadow-primary/20 hover:scale-105 active:scale-95 duration-200"
              >
                Free Assessment
              </a>
            </div>

            {/* Mobile Menu & Theme Button */}
            <div className="flex md:hidden items-center gap-2">
              {/* Theme Toggle Mobile */}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                aria-label="Toggle Theme"
              >
                {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
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
          className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-[280px] sm:w-[320px] bg-white dark:bg-dark-bg z-50 shadow-2xl transition-transform duration-300 md:hidden border-l border-slate-100 dark:border-slate-800 flex flex-col ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-4 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
          <Logo />
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="px-4 py-6 space-y-2 flex flex-col flex-grow overflow-y-auto">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="py-3 px-4 font-semibold text-base rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}

          <div className="pt-6 border-t border-slate-100 dark:border-slate-800 space-y-4">
            <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 text-sm font-bold">
              <ShieldCheck className="w-5 h-5" />
              <span>Licensed NZ LIA Guidance</span>
            </div>

            <a
              href="#forms-hub"
              onClick={() => setIsOpen(false)}
              className="block w-full py-4 text-center rounded-xl bg-[#0052FF] text-white font-bold tracking-wider uppercase transition-all shadow-md shadow-primary/10 hover:shadow-primary/20"
            >
              Free Assessment
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

