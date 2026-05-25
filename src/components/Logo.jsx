import React from 'react';

export const Logo = ({ className = '', showText = true }) => {
  return (
    <div className={`flex items-center gap-3 group select-none ${className}`}>
      {/* Stylized "IH" SVG Logo Icon */}
      <div className="relative w-12 h-12 flex-shrink-0 flex items-center justify-center bg-white/95 dark:bg-slate-50 rounded-xl border border-white/60 dark:border-slate-100 shadow-sm p-1.5 transition-all duration-300 group-hover:scale-[1.05] group-hover:shadow-md">
        <svg
          viewBox="0 0 100 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-[0_2px_6px_rgba(27,54,93,0.12)]"
        >
          <defs>
            {/* The mask that cuts a clean sweeping arc through the letters */}
            <mask id="logo-slice-mask">
              <rect x="0" y="0" width="100" height="80" fill="white" />
              {/* This arc is black to cut out of the elements */}
              <path
                d="M 5,50 C 28,42 52,30 85,22 L 85,29 C 52,37 28,49 5,57 Z"
                fill="black"
              />
            </mask>
          </defs>

          {/* Left Column "I" (Vibrant Red) */}
          <rect
            x="18"
            y="15"
            width="13"
            height="50"
            rx="1.5"
            fill="#E51937"
            mask="url(#logo-slice-mask)"
          />

          {/* Right Fused "H" (Corporate Navy / Dark Blue) */}
          <path
            d="M36,15 H49 V36 H61 V15 H74 V65 H61 V46 H49 V65 H36 Z"
            fill="#1B365D"
            mask="url(#logo-slice-mask)"
          />

          {/* Red Stylized Airplane flying at the end of the sweep */}
          {/* Micro-animation: orbits around the logo icon every 5 seconds and glides on hover */}
          <g className="animate-plane-orbit">
            <g className="transition-transform duration-500 ease-out group-hover:translate-x-1.5 group-hover:-translate-y-1">
              <g transform="translate(68, 5) rotate(15) scale(0.18)">
                <path
                  d="M47,21.5 L36,3.5 C34.5,1 32,0 29.5,0 C28,0 26.5,0.5 25.5,1.5 C24.5,3 24,5 25,7.5 L31.5,21.5 L12,21.5 L6.5,15.5 C5.5,14 4,13.5 3,13.5 C2,13.5 1,14 0.5,14.5 C-0.5,15.5 -0.5,17 0.5,18.5 L5,27.5 L0.5,36.5 C-0.5,38 -0.5,39.5 0.5,40.5 C1,41 2,41.5 3,41.5 C4,41.5 5.5,41 6.5,39.5 L12,33.5 L31.5,33.5 L25,47.5 C24,50 24.5,52 25.5,53.5 C26.5,54.5 28,55 29.5,55 C32,55 34.5,54 36,51.5 L47,33.5 C48,31.5 48.5,29.5 48.5,27.5 C48.5,25.5 48,23.5 47,21.5 Z"
                  fill="#E51937"
                />
              </g>
            </g>
          </g>
        </svg>
      </div>

      {/* Logo Typography */}
      {showText && (
        <div className="flex flex-col leading-tight">
          <div className="font-heading font-extrabold text-xl tracking-tight flex items-center">
            <span className="text-white transition-colors duration-200">
              Immigration
            </span>
            <span className="text-[#E51937] ml-1">
              Hub
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
