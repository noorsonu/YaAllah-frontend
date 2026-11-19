import React from 'react';

export default function MosqueTopSilhouette({ className = "" }: { className?: string }) {
  return (
    <div className={className}>
      <svg
        viewBox="0 0 1200 420"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
        preserveAspectRatio="xMidYEnd meet"
      >
        <defs>
          {/* Ethereal Soft White/Gold Faint Dome Gradient */}
          <linearGradient id="etherealDomeTaller" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
            <stop offset="35%" stopColor="#FFF2D6" stopOpacity="0.65" />
            <stop offset="70%" stopColor="#E5B246" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#1F0209" stopOpacity="0" />
          </linearGradient>

          {/* Delicate 24K Gold Finial Gradient */}
          <linearGradient id="etherealGoldTaller" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FFF7CC" />
            <stop offset="50%" stopColor="#E5B246" />
            <stop offset="100%" stopColor="#A8751A" />
          </linearGradient>

          {/* Soft Amber Glow behind the Grand Dome */}
          <radialGradient id="faintSunsetGlowTaller" cx="50%" cy="45%" r="55%">
            <stop offset="0%" stopColor="#FFA834" stopOpacity="0.45" />
            <stop offset="50%" stopColor="#C93D55" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#1F0209" stopOpacity="0" />
          </radialGradient>

          {/* Delicate Window Warm Lights */}
          <radialGradient id="softWindowLightTaller" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFFDF0" stopOpacity="0.95" />
            <stop offset="60%" stopColor="#FFC247" stopOpacity="0.65" />
            <stop offset="100%" stopColor="#FF9900" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Ethereal Amber Sunset Aura behind Central Domes */}
        <circle cx="600" cy="200" r="280" fill="url(#faintSunsetGlowTaller)" />

        {/* ============================================================ */}
        {/* GRAND TALLER MOSQUE SILHOUETTE (MAJESTIC DOMES & MINARETS)   */}
        {/* ============================================================ */}
        <g stroke="url(#etherealGoldTaller)" strokeWidth="0.8">

          {/* Far Left Minaret (Taller & Slender) */}
          <g id="minaret-far-left">
            <rect x="75" y="60" width="18" height="320" fill="url(#etherealDomeTaller)" stroke="none" />
            <line x1="75" y1="60" x2="75" y2="380" strokeWidth="0.8" opacity="0.6" />
            <line x1="93" y1="60" x2="93" y2="380" strokeWidth="0.8" opacity="0.6" />
            <rect x="70" y="130" width="28" height="6" rx="2" fill="url(#etherealGoldTaller)" stroke="none" opacity="0.85" />
            <rect x="71" y="220" width="26" height="5" rx="1.5" fill="url(#etherealGoldTaller)" stroke="none" opacity="0.85" />
            <polygon points="84,18 72,60 96,60" fill="url(#etherealGoldTaller)" stroke="none" />
            <circle cx="84,12" r="3.5" fill="url(#etherealGoldTaller)" stroke="none" />
            <path d="M82,6 C85,6 88,9 88,12 C88,15 85,18 82,18 C87,18 90,15 90,12 C90,9 87,6 82,6 Z" fill="#FFF7CC" stroke="none" />
          </g>

          {/* Far Right Minaret (Taller & Slender) */}
          <g id="minaret-far-right">
            <rect x="1107" y="60" width="18" height="320" fill="url(#etherealDomeTaller)" stroke="none" />
            <line x1="1107" y1="60" x2="1107" y2="380" strokeWidth="0.8" opacity="0.6" />
            <line x1="1125" y1="60" x2="1125" y2="380" strokeWidth="0.8" opacity="0.6" />
            <rect x="1102" y="130" width="28" height="6" rx="2" fill="url(#etherealGoldTaller)" stroke="none" opacity="0.85" />
            <rect x="1103" y="220" width="26" height="5" rx="1.5" fill="url(#etherealGoldTaller)" stroke="none" opacity="0.85" />
            <polygon points="1116,18 1104,60 1128,60" fill="url(#etherealGoldTaller)" stroke="none" />
            <circle cx="1116,12" r="3.5" fill="url(#etherealGoldTaller)" stroke="none" />
            <path d="M1114,6 C1117,6 1120,9 1120,12 C1120,15 1117,18 1114,18 C1119,18 1122,15 1122,12 C1122,9 1119,6 1114,6 Z" fill="#FFF7CC" stroke="none" />
          </g>

          {/* Mid Left Minaret */}
          <g id="minaret-mid-left">
            <rect x="230" y="100" width="14" height="280" fill="url(#etherealDomeTaller)" stroke="none" />
            <rect x="226" y="165" width="22" height="5" rx="1.5" fill="url(#etherealGoldTaller)" stroke="none" opacity="0.8" />
            <polygon points="237,55 228,100 246,100" fill="url(#etherealGoldTaller)" stroke="none" />
            <circle cx="237,49" r="3" fill="url(#etherealGoldTaller)" stroke="none" />
          </g>

          {/* Mid Right Minaret */}
          <g id="minaret-mid-right">
            <rect x="956" y="100" width="14" height="280" fill="url(#etherealDomeTaller)" stroke="none" />
            <rect x="952" y="165" width="22" height="5" rx="1.5" fill="url(#etherealGoldTaller)" stroke="none" opacity="0.8" />
            <polygon points="963,55 954,100 972,100" fill="url(#etherealGoldTaller)" stroke="none" />
            <circle cx="963,49" r="3" fill="url(#etherealGoldTaller)" stroke="none" />
          </g>

          {/* Outer Left Side Dome */}
          <g id="outer-dome-left">
            <rect x="130" y="250" width="90" height="50" fill="url(#etherealDomeTaller)" stroke="none" />
            <path d="M130 250 C130 185 220 185 220 250 Z" fill="url(#etherealDomeTaller)" stroke="none" />
            <path d="M130 250 C130 185 220 185 220 250" strokeWidth="0.9" opacity="0.75" />
            <line x1="175" y1="160" x2="175" y2="190" strokeWidth="1.5" />
            <circle cx="175" cy="155" r="3" fill="url(#etherealGoldTaller)" stroke="none" />
          </g>

          {/* Outer Right Side Dome */}
          <g id="outer-dome-right">
            <rect x="980" y="250" width="90" height="50" fill="url(#etherealDomeTaller)" stroke="none" />
            <path d="M980 250 C980 185 1070 185 1070 250 Z" fill="url(#etherealDomeTaller)" stroke="none" />
            <path d="M980 250 C980 185 1070 185 1070 250" strokeWidth="0.9" opacity="0.75" />
            <line x1="1025" y1="160" x2="1025" y2="190" strokeWidth="1.5" />
            <circle cx="1025" cy="155" r="3" fill="url(#etherealGoldTaller)" stroke="none" />
          </g>

          {/* Inner Left Dome */}
          <g id="inner-dome-left">
            <rect x="270" y="220" width="140" height="50" fill="url(#etherealDomeTaller)" stroke="none" />
            {[285, 310, 335, 360, 385].map((x) => (
              <path key={x} d={`M${x} 238 A5 5 0 0 1 ${x + 10} 238 L${x + 10} 252 L${x} 252 Z`} fill="url(#softWindowLightTaller)" stroke="none" />
            ))}
            <path d="M270 220 C270 135 410 135 410 220 Z" fill="url(#etherealDomeTaller)" stroke="none" />
            <path d="M270 220 C270 135 410 135 410 220" strokeWidth="1" opacity="0.8" />
            <line x1="340" y1="105" x2="340" y2="140" strokeWidth="2" />
            <circle cx="340" cy="100" r="4" fill="url(#etherealGoldTaller)" stroke="none" />
          </g>

          {/* Inner Right Dome */}
          <g id="inner-dome-right">
            <rect x="790" y="220" width="140" height="50" fill="url(#etherealDomeTaller)" stroke="none" />
            {[805, 830, 855, 880, 905].map((x) => (
              <path key={x} d={`M${x} 238 A5 5 0 0 1 ${x + 10} 238 L${x + 10} 252 L${x} 252 Z`} fill="url(#softWindowLightTaller)" stroke="none" />
            ))}
            <path d="M790 220 C790 135 930 135 930 220 Z" fill="url(#etherealDomeTaller)" stroke="none" />
            <path d="M790 220 C790 135 930 135 930 220" strokeWidth="1" opacity="0.8" />
            <line x1="860" y1="105" x2="860" y2="140" strokeWidth="2" />
            <circle cx="860" cy="100" r="4" fill="url(#etherealGoldTaller)" stroke="none" />
          </g>

          {/* Central Grand Dome (Taller, Majestic Peak) */}
          <g id="central-grand-dome">
            {/* Drum with 9 Glowing Amber Windows */}
            <rect x="450" y="200" width="300" height="60" fill="url(#etherealDomeTaller)" stroke="none" />
            {[475, 505, 535, 565, 595, 625, 655, 685, 715].map((x) => (
              <path key={x} d={`M${x} 220 A6 6 0 0 1 ${x + 12} 220 L${x + 12} 238 L${x} 238 Z`} fill="url(#softWindowLightTaller)" stroke="none" />
            ))}
            {/* Taller Persian Ogee Profile Dome */}
            <path d="M450 200 C450 60 600 50 600 50 C600 50 750 60 750 200 Z" fill="url(#etherealDomeTaller)" stroke="none" />
            <path d="M450 200 C450 60 600 50 600 50 C600 50 750 60 750 200" strokeWidth="1.4" opacity="0.9" />

            {/* Majestic Golden Finial & Crescent Spire */}
            <line x1="600" y1="15" x2="600" y2="65" strokeWidth="2.5" />
            <circle cx="600" cy="10" r="5" fill="url(#etherealGoldTaller)" stroke="none" />
            {/* Grand Crescent Finial */}
            <path
              d="M596 2 C600 2 604 5 604 10 C604 15 600 18 596 18 C602 18 607 15 607 10 C607 5 602 2 596 2 Z"
              fill="#FFF7CC"
              stroke="none"
            />
          </g>

          {/* Base Wall & Colonnade Soft Baseline */}
          <line x1="60" y1="360" x2="1140" y2="360" strokeWidth="1" strokeDasharray="8 6" opacity="0.5" />
          <line x1="120" y1="380" x2="1080" y2="380" strokeWidth="0.8" opacity="0.3" />
        </g>
      </svg>
    </div>
  );
}
