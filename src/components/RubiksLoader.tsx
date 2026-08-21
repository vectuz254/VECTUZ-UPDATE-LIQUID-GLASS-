import React, { useEffect, useState } from 'react';

interface RubiksLoaderProps {
  onLoaded: () => void;
}

export const RubiksLoader: React.FC<RubiksLoaderProps> = ({ onLoaded }) => {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState('Scrambling architecture...');

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onLoaded, 450);
          return 100;
        }
        const next = prev + 5;
        if (next === 30) setStatusText('Configuring Nairobi M-Pesa stack...');
        if (next === 65) setStatusText('Optimizing mobile lightning speed...');
        if (next === 90) setStatusText('Aligning Rubik\'s growth vectors...');
        return next;
      });
    }, 90);

    return () => clearInterval(timer);
  }, [onLoaded]);

  // Rubik's stickers simulation color cycle
  const colors = ['#00E87A', '#F5C842', '#3A8FE8', '#E84444', '#FFFFFF', '#FF8C00'];

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#090B0E] transition-opacity duration-700">
      {/* Background ambient glow */}
      <div className="absolute w-72 h-72 rounded-full bg-[#00E87A]/10 blur-[90px] pointer-events-none" />
      <div className="absolute w-72 h-72 rounded-full bg-[#3A8FE8]/10 blur-[90px] pointer-events-none translate-x-12 translate-y-12" />

      {/* 3D Rubik's Cube Container */}
      <div className="cube-scene mb-10">
        <div className="cube-3d">
          {/* Front */}
          <div className="cube-face cube-face-front">
            {Array.from({ length: 9 }).map((_, i) => (
              <div
                key={`f-${i}`}
                className="cube-sticker"
                style={{ backgroundColor: colors[(i + Math.floor(progress / 20)) % colors.length] }}
              />
            ))}
          </div>
          {/* Back */}
          <div className="cube-face cube-face-back">
            {Array.from({ length: 9 }).map((_, i) => (
              <div
                key={`b-${i}`}
                className="cube-sticker"
                style={{ backgroundColor: colors[(i + 1 + Math.floor(progress / 20)) % colors.length] }}
              />
            ))}
          </div>
          {/* Right */}
          <div className="cube-face cube-face-right">
            {Array.from({ length: 9 }).map((_, i) => (
              <div
                key={`r-${i}`}
                className="cube-sticker"
                style={{ backgroundColor: colors[(i + 2 + Math.floor(progress / 20)) % colors.length] }}
              />
            ))}
          </div>
          {/* Left */}
          <div className="cube-face cube-face-left">
            {Array.from({ length: 9 }).map((_, i) => (
              <div
                key={`l-${i}`}
                className="cube-sticker"
                style={{ backgroundColor: colors[(i + 3 + Math.floor(progress / 20)) % colors.length] }}
              />
            ))}
          </div>
          {/* Top */}
          <div className="cube-face cube-face-top">
            {Array.from({ length: 9 }).map((_, i) => (
              <div
                key={`t-${i}`}
                className="cube-sticker"
                style={{ backgroundColor: colors[(i + 4 + Math.floor(progress / 20)) % colors.length] }}
              />
            ))}
          </div>
          {/* Bottom */}
          <div className="cube-face cube-face-bottom">
            {Array.from({ length: 9 }).map((_, i) => (
              <div
                key={`bm-${i}`}
                className="cube-sticker"
                style={{ backgroundColor: colors[(i + 5 + Math.floor(progress / 20)) % colors.length] }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Brand Title */}
      <h2 className="font-serif text-2xl md:text-3xl font-bold tracking-widest text-[#F0ECE4] mb-2">
        VECTUZ<span className="text-[#00E87A]">.</span>
      </h2>
      <p className="text-xs uppercase tracking-widest text-[#8E9AA8] font-mono mb-6">
        {statusText}
      </p>

      {/* Progress Bar with Liquid Glow */}
      <div className="w-56 h-1.5 bg-[#141920] rounded-full overflow-hidden border border-white/10 relative">
        <div
          className="h-full bg-gradient-to-r from-[#00E87A] via-[#3A8FE8] to-[#F5C842] transition-all duration-150 rounded-full"
          style={{ width: `${progress}%` }}
        />
      </div>
      <span className="text-[11px] font-mono text-[#8E9AA8] mt-2">{progress}%</span>
    </div>
  );
};
