import React from 'react';

// Brand Motif: Metallic Rubik's Cube with Growth Arrow Ribbon
export const RubiksBrandLogo: React.FC<{ size?: number; className?: string }> = ({ size = 38, className = '' }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`filter drop-shadow-md ${className}`}
    >
      <defs>
        <linearGradient id="cubeTop" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00E87A" />
          <stop offset="100%" stopColor="#009A51" />
        </linearGradient>
        <linearGradient id="cubeLeft" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3A8FE8" />
          <stop offset="100%" stopColor="#1E4D8F" />
        </linearGradient>
        <linearGradient id="cubeRight" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F5C842" />
          <stop offset="100%" stopColor="#A88118" />
        </linearGradient>
        <linearGradient id="ribbonGrad" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#E84444" />
          <stop offset="50%" stopColor="#00E87A" />
          <stop offset="100%" stopColor="#3A8FE8" />
        </linearGradient>
        <filter id="glowFilter" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Isometric Cube Isometric Faces */}
      {/* Top Face */}
      <polygon points="50,14 84,31 50,48 16,31" fill="url(#cubeTop)" stroke="#090B0E" strokeWidth="2" strokeLinejoin="round" />
      {/* Top Face Grid */}
      <line x1="27" y1="36" x2="61" y2="20" stroke="#090B0E" strokeWidth="1.5" />
      <line x1="39" y1="42" x2="73" y2="26" stroke="#090B0E" strokeWidth="1.5" />
      <line x1="39" y1="20" x2="73" y2="37" stroke="#090B0E" strokeWidth="1.5" />
      <line x1="27" y1="26" x2="61" y2="43" stroke="#090B0E" strokeWidth="1.5" />

      {/* Left Face */}
      <polygon points="16,31 50,48 50,84 16,67" fill="url(#cubeLeft)" stroke="#090B0E" strokeWidth="2" strokeLinejoin="round" />
      {/* Left Grid */}
      <line x1="27" y1="37" x2="27" y2="73" stroke="#090B0E" strokeWidth="1.5" />
      <line x1="39" y1="43" x2="39" y2="79" stroke="#090B0E" strokeWidth="1.5" />
      <line x1="16" y1="43" x2="50" y2="60" stroke="#090B0E" strokeWidth="1.5" />
      <line x1="16" y1="55" x2="50" y2="72" stroke="#090B0E" strokeWidth="1.5" />

      {/* Right Face */}
      <polygon points="50,48 84,31 84,67 50,84" fill="url(#cubeRight)" stroke="#090B0E" strokeWidth="2" strokeLinejoin="round" />
      {/* Right Grid */}
      <line x1="61" y1="43" x2="61" y2="79" stroke="#090B0E" strokeWidth="1.5" />
      <line x1="73" y1="37" x2="73" y2="73" stroke="#090B0E" strokeWidth="1.5" />
      <line x1="50" y1="60" x2="84" y2="43" stroke="#090B0E" strokeWidth="1.5" />
      <line x1="50" y1="72" x2="84" y2="55" stroke="#090B0E" strokeWidth="1.5" />

      {/* Growth Arrow Ribbon Wrapping Upward Through The Cube */}
      <path
        d="M10,75 C25,92 65,92 88,60 C98,46 86,22 62,20 C42,18 28,32 30,50 C32,68 60,70 78,54"
        stroke="url(#ribbonGrad)"
        strokeWidth="5"
        strokeLinecap="round"
        fill="none"
        filter="url(#glowFilter)"
      />
      {/* Growth Arrowhead */}
      <polygon points="76,46 88,52 82,62" fill="#00E87A" />
    </svg>
  );
};

// Toy Robot / Cube Character holding glowing mini cube for pricing cards
export const ToyRobotCubeIcon: React.FC<{
  color: 'green' | 'gold' | 'red' | 'blue';
  size?: number;
}> = ({ color, size = 64 }) => {
  const colorMap = {
    green: { main: '#00E87A', glow: 'rgba(0, 232, 122, 0.7)' },
    gold: { main: '#F5C842', glow: 'rgba(245, 200, 66, 0.7)' },
    red: { main: '#E84444', glow: 'rgba(232, 68, 68, 0.7)' },
    blue: { main: '#3A8FE8', glow: 'rgba(58, 143, 232, 0.7)' },
  };

  const selected = colorMap[color];

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id={`glow-${color}`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={selected.main} stopOpacity="0.8" />
          <stop offset="100%" stopColor={selected.main} stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Robot Antenna */}
      <line x1="50" y1="20" x2="50" y2="10" stroke="#8E9AA8" strokeWidth="3" strokeLinecap="round" />
      <circle cx="50" cy="8" r="4" fill={selected.main} />

      {/* Robot Head (Cube Style) */}
      <rect x="32" y="20" width="36" height="30" rx="6" fill="#1A212B" stroke="#374151" strokeWidth="2" />
      {/* Robot Visor / Eyes */}
      <rect x="38" y="27" width="24" height="10" rx="3" fill="#090B0E" />
      <circle cx="44" cy="32" r="2.5" fill={selected.main} />
      <circle cx="56" cy="32" r="2.5" fill={selected.main} />
      {/* Robot Smile */}
      <path d="M44 43 Q50 47 56 43" stroke="#8E9AA8" strokeWidth="2" strokeLinecap="round" fill="none" />

      {/* Robot Body */}
      <rect x="35" y="52" width="30" height="28" rx="5" fill="#141920" stroke="#374151" strokeWidth="2" />
      {/* Chest Display Gauge */}
      <rect x="42" y="58" width="16" height="8" rx="2" fill="#090B0E" />
      <line x1="44" y1="62" x2="54" y2="62" stroke={selected.main} strokeWidth="2" strokeLinecap="round" />

      {/* Robot Left Arm holding the Mini Cube */}
      <path d="M35 58 Q22 62 25 74" stroke="#8E9AA8" strokeWidth="3.5" strokeLinecap="round" fill="none" />
      {/* Robot Right Arm */}
      <path d="M65 58 Q78 62 75 74" stroke="#8E9AA8" strokeWidth="3.5" strokeLinecap="round" fill="none" />

      {/* Glow Aura for Mini Cube */}
      <circle cx="24" cy="76" r="14" fill={`url(#glow-${color})`} />

      {/* Glowing Mini Rubik's Cube held in hands */}
      <g transform="translate(16, 68) scale(0.65)">
        <polygon points="12,2 22,7 12,12 2,7" fill={selected.main} stroke="#090B0E" strokeWidth="1" />
        <polygon points="2,7 12,12 12,22 2,17" fill="#141920" stroke="#090B0E" strokeWidth="1" />
        <polygon points="12,12 22,7 22,17 12,22" fill={selected.main} fillOpacity="0.75" stroke="#090B0E" strokeWidth="1" />
      </g>
    </svg>
  );
};

// Kenyan M-Pesa Official Styled Badge Icon
export const MpesaBadgeIcon: React.FC<{ className?: string }> = ({ className = 'h-6' }) => {
  return (
    <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#00E87A]/10 border border-[#00E87A]/30 text-[#00E87A] text-xs font-bold tracking-wide ${className}`}>
      <span className="w-2 h-2 rounded-full bg-[#00E87A] animate-ping" />
      <span>M-PESA INSTANT</span>
    </div>
  );
};
