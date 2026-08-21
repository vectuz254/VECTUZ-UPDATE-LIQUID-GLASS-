import React, { useState, useEffect } from 'react';
import { PricingTier } from '../types';
import { X, Check, Zap, Shield, ArrowRight, Clock, Award } from 'lucide-react';
import { ToyRobotCubeIcon } from './Icons';

interface PricingModalProps {
  tier: PricingTier | null;
  onClose: () => void;
  onProceedToMpesa: (tier: PricingTier) => void;
}

export const PricingModal: React.FC<PricingModalProps> = ({
  tier,
  onClose,
  onProceedToMpesa,
}) => {
  const [solvingStage, setSolvingStage] = useState(0);

  useEffect(() => {
    if (!tier) return;
    const interval = setInterval(() => {
      setSolvingStage((prev) => (prev + 1) % 4);
    }, 600);
    return () => clearInterval(interval);
  }, [tier]);

  if (!tier) return null;

  const accentColorMap = {
    green: '#00E87A',
    gold: '#F5C842',
    red: '#E84444',
    blue: '#3A8FE8',
  };

  const accentHex = accentColorMap[tier.accentColor];

  // Cube scramble simulation faces
  const cubeStates = [
    ['#00E87A', '#F5C842', '#3A8FE8', '#E84444'],
    ['#3A8FE8', '#00E87A', '#E84444', '#F5C842'],
    ['#F5C842', '#E84444', '#00E87A', '#3A8FE8'],
    [accentHex, accentHex, accentHex, accentHex], // Solved state matching tier
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-lg rounded-3xl bg-[#141920] border border-white/15 p-6 sm:p-8 text-[#F0ECE4] shadow-2xl shadow-black/80 overflow-hidden"
        style={{
          boxShadow: `0 0 40px ${accentHex}25`,
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-[#1A212B] hover:bg-[#252E3B] text-[#8E9AA8] hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Top Header with Toy Robot & 3D Mini Cube Scramble */}
        <div className="flex items-center gap-4 border-b border-white/10 pb-5">
          <div className="relative">
            <ToyRobotCubeIcon color={tier.accentColor} size={56} />
          </div>

          <div>
            <div className="flex items-center gap-2">
              <span
                className="text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border"
                style={{
                  borderColor: `${accentHex}60`,
                  backgroundColor: `${accentHex}15`,
                  color: accentHex,
                }}
              >
                {tier.name}
              </span>
              {tier.badge && (
                <span className="text-[10px] bg-white/10 text-white px-2 py-0.5 rounded-full font-semibold">
                  {tier.badge}
                </span>
              )}
            </div>
            <h3 className="font-serif text-2xl font-bold mt-1 text-[#F0ECE4]">
              {tier.price}
            </h3>
          </div>

          {/* Mini Interactive Solving/Scrambling Cube Animation */}
          <div className="ml-auto hidden sm:flex flex-col items-center">
            <div className="w-10 h-10 grid grid-cols-2 gap-1 p-1 bg-[#090B0E] rounded-lg border border-white/10 shadow-inner">
              {cubeStates[solvingStage].map((col, idx) => (
                <div
                  key={idx}
                  className="rounded-sm transition-all duration-300 transform"
                  style={{
                    backgroundColor: col,
                    transform: solvingStage === 3 ? 'scale(1)' : 'scale(0.9)',
                  }}
                />
              ))}
            </div>
            <span className="text-[9px] font-mono text-[#8E9AA8] mt-1">
              {solvingStage === 3 ? 'SOLVED' : 'SOLVING...'}
            </span>
          </div>
        </div>

        {/* Content & Details */}
        <div className="py-5 space-y-4 text-sm max-h-[55vh] overflow-y-auto pr-1">
          <p className="text-[#8E9AA8] text-sm leading-relaxed">{tier.description}</p>

          <div className="grid grid-cols-2 gap-3 py-2">
            <div className="p-3 rounded-xl bg-[#090B0E] border border-white/5 flex items-center gap-2.5">
              <Clock className="w-4 h-4 text-[#00E87A]" />
              <div>
                <p className="text-[10px] text-[#8E9AA8]">Timeline</p>
                <p className="text-xs font-bold text-[#F0ECE4]">{tier.deliveryTime}</p>
              </div>
            </div>
            <div className="p-3 rounded-xl bg-[#090B0E] border border-white/5 flex items-center gap-2.5">
              <Award className="w-4 h-4 text-[#F5C842]" />
              <div>
                <p className="text-[10px] text-[#8E9AA8]">Ideal For</p>
                <p className="text-xs font-bold text-[#F0ECE4] truncate">{tier.idealFor}</p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#8E9AA8] mb-3">
              Included Deliverables:
            </h4>
            <div className="space-y-2.5">
              {tier.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-[#F0ECE4]">
                  <div
                    className="w-4 h-4 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0"
                    style={{ backgroundColor: `${accentHex}20` }}
                  >
                    <Check className="w-3 h-3" style={{ color: accentHex }} />
                  </div>
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row gap-3">
          <button
            onClick={() => onProceedToMpesa(tier)}
            className="flex-1 py-3.5 px-6 rounded-xl font-bold text-black flex items-center justify-center gap-2 shadow-lg transition-transform hover:scale-[1.02] active:scale-[0.98]"
            style={{ backgroundColor: accentHex }}
          >
            <span>{tier.price === 'KES 0' ? 'Claim Free Review' : 'Proceed with M-Pesa'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={onClose}
            className="py-3.5 px-5 rounded-xl font-semibold bg-[#1A212B] hover:bg-[#252E3B] text-[#8E9AA8] hover:text-white transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
