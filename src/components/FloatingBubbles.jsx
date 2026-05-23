import React from 'react';
import { MessageCircle } from 'lucide-react';

export const FloatingBubbles = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3.5 pointer-events-none">
      {/* WhatsApp Floating Bubble */}
      <a
        href="https://wa.me/919633062888"
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba56] text-white flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 group relative border border-white/10 select-none cursor-pointer"
        aria-label="Chat on WhatsApp"
      >
        {/* Pulsating Ring Indicator */}
        <span className="absolute inset-0 rounded-full bg-[#25D366]/40 animate-ping pointer-events-none"></span>
        
        <MessageCircle className="w-7 h-7 relative z-10 shrink-0" />

        {/* Hover Tooltip Label */}
        <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-slate-900 text-white text-[10px] font-bold tracking-wider uppercase py-1.5 px-3 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap border border-slate-800">
          WhatsApp Adviser
        </span>
      </a>

      {/* Instagram Floating Bubble */}
      <a
        href="https://instagram.com/immigrationhub__"
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto w-14 h-14 rounded-full bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 group relative border border-white/10 select-none cursor-pointer"
        aria-label="Visit Instagram"
      >
        <svg className="w-6 h-6 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
        </svg>

        {/* Hover Tooltip Label */}
        <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-slate-900 text-white text-[10px] font-bold tracking-wider uppercase py-1.5 px-3 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap border border-slate-800">
          Follow Instagram
        </span>
      </a>
    </div>
  );
};
