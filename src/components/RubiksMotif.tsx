import React from 'react';

export const SectionCubeDivider: React.FC<{ title?: string; subtitle?: string; accent?: 'green' | 'gold' | 'red' | 'blue' }> = ({
  title,
  subtitle,
  accent = 'green'
}) => {
  const accentColors = {
    green: 'from-[#00E87A]/20 via-[#00E87A] to-[#00E87A]/20',
    gold: 'from-[#F5C842]/20 via-[#F5C842] to-[#F5C842]/20',
    red: 'from-[#E84444]/20 via-[#E84444] to-[#E84444]/20',
    blue: 'from-[#3A8FE8]/20 via-[#3A8FE8] to-[#3A8FE8]/20',
  };

  const badgeBg = {
    green: 'bg-[#00E87A]/10 text-[#00E87A] border-[#00E87A]/30',
    gold: 'bg-[#F5C842]/10 text-[#F5C842] border-[#F5C842]/30',
    red: 'bg-[#E84444]/10 text-[#E84444] border-[#E84444]/30',
    blue: 'bg-[#3A8FE8]/10 text-[#3A8FE8] border-[#3A8FE8]/30',
  };

  return (
    <div className="flex flex-col items-center justify-center my-8 text-center px-4">
      {/* Mini Cube Badge */}
      {subtitle && (
        <div className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border mb-3 ${badgeBg[accent]}`}>
          {/* Mini cube glyph */}
          <span className="w-2.5 h-2.5 grid grid-cols-2 gap-0.5">
            <span className="bg-current rounded-[0.5px]"></span>
            <span className="bg-current opacity-70 rounded-[0.5px]"></span>
            <span className="bg-current opacity-50 rounded-[0.5px]"></span>
            <span className="bg-current opacity-80 rounded-[0.5px]"></span>
          </span>
          {subtitle}
        </div>
      )}

      {title && (
        <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-[#F0ECE4] dark:text-[#F0ECE4] light:text-[#0F172A] mb-4">
          {title}
        </h2>
      )}

      {/* Decorative Gradient Line with Cube Knot */}
      <div className="flex items-center justify-center w-full max-w-xs gap-3 my-2">
        <div className={`h-[1px] flex-1 bg-gradient-to-r ${accentColors[accent]}`} />
        <div className="w-2.5 h-2.5 rotate-45 border border-current opacity-60 bg-transparent" />
        <div className={`h-[1px] flex-1 bg-gradient-to-r ${accentColors[accent]}`} />
      </div>
    </div>
  );
};
