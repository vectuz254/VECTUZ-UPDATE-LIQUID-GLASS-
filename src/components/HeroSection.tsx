import React, { useEffect, useRef } from 'react';
import { ArrowRight, Sparkles, Zap, Smartphone, CheckCircle2, Shield, Flame } from 'lucide-react';
import { MpesaBadgeIcon } from './Icons';

export const HeroSection: React.FC<{ onBookCall: () => void; onViewPricing: () => void }> = ({
  onBookCall,
  onViewPricing,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // High-performance lightweight liquid glass gradient motion canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Dynamic floating liquid nodes
    const orbs = [
      { x: width * 0.2, y: height * 0.3, radius: 280, color: 'rgba(0, 232, 122, 0.12)', vx: 0.3, vy: 0.2 },
      { x: width * 0.8, y: height * 0.4, radius: 320, color: 'rgba(58, 143, 232, 0.10)', vx: -0.25, vy: 0.35 },
      { x: width * 0.5, y: height * 0.7, radius: 260, color: 'rgba(245, 200, 66, 0.08)', vx: 0.2, vy: -0.3 },
      { x: width * 0.3, y: height * 0.8, radius: 240, color: 'rgba(232, 68, 68, 0.07)', vx: -0.3, vy: -0.2 },
    ];

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw orbs
      orbs.forEach((orb) => {
        orb.x += orb.vx;
        orb.y += orb.vy;

        if (orb.x < 0 || orb.x > width) orb.vx *= -1;
        if (orb.y < 0 || orb.y > height) orb.vy *= -1;

        const grad = ctx.createRadialGradient(orb.x, orb.y, 10, orb.x, orb.y, orb.radius);
        grad.addColorStop(0, orb.color);
        grad.addColorStop(1, 'rgba(9, 11, 14, 0)');

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(orb.x, orb.y, orb.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Full-bleed Liquid Glass Animated Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
      />

      {/* Top & Bottom Seamless Dark Gradient Fades */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#090B0E] to-transparent pointer-events-none z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#090B0E] via-[#090B0E]/80 to-transparent pointer-events-none z-10" />

      {/* Hero Content Layer */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Copy & CTA */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            {/* Top Pill / Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#141920]/90 border border-[#00E87A]/30 text-xs font-semibold tracking-wide backdrop-blur-md shadow-lg shadow-[#00E87A]/5">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00E87A] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00E87A]"></span>
              </span>
              <span className="text-[#F0ECE4]">Kenya's #1 SME Growth Engine</span>
              <span className="text-[#8E9AA8]">â€¢</span>
              <span className="text-[#00E87A] font-bold">5â€“10 Days Launch</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#F0ECE4] leading-[1.12]">
              Websites for Kenyan Businesses,{' '}
              <span className="shimmer-text">Built to Sell.</span>
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg text-[#8E9AA8] max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              We design and build ultra-fast, mobile-first websites and online stores for Kenyan SMEs â€” specially crafted for fashion, beauty salons, boutiques, and retail with seamless <strong className="text-[#00E87A]">M-Pesa STK push</strong> checkout built right in.
            </p>

            {/* Quick Benefits Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs text-[#F0ECE4] font-medium">
              <div className="flex items-center justify-center lg:justify-start gap-2 bg-[#141920]/60 border border-white/5 px-3 py-2 rounded-lg">
                <CheckCircle2 className="w-4 h-4 text-[#00E87A] flex-shrink-0" />
                <span>Instant M-Pesa Checkout</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2 bg-[#141920]/60 border border-white/5 px-3 py-2 rounded-lg">
                <Zap className="w-4 h-4 text-[#F5C842] flex-shrink-0" />
                <span>0.8s Ultra Speed</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2 bg-[#141920]/60 border border-white/5 px-3 py-2 rounded-lg">
                <Shield className="w-4 h-4 text-[#3A8FE8] flex-shrink-0" />
                <span>No Monthly Lock-in</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <button
                onClick={onBookCall}
                className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold bg-[#00E87A] text-black hover:bg-[#00E87A]/90 transition-all transform hover:-translate-y-0.5 shadow-xl shadow-[#00E87A]/25 flex items-center justify-center gap-2 text-base group"
              >
                <span>Book a Free Strategy Call</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onViewPricing}
                className="w-full sm:w-auto px-7 py-4 rounded-xl font-semibold bg-[#141920]/80 hover:bg-[#1A212B] text-[#F0ECE4] border border-white/10 hover:border-white/20 transition-all flex items-center justify-center gap-2 text-base"
              >
                <span>View Transparent Pricing</span>
              </button>
            </div>

            {/* Micro Social proof stat */}
            <div className="pt-2 flex items-center justify-center lg:justify-start gap-4 text-xs text-[#8E9AA8]">
              <div className="flex -space-x-2">
                <img className="inline-block h-7 w-7 rounded-full ring-2 ring-[#090B0E]" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=60" alt="Client" />
                <img className="inline-block h-7 w-7 rounded-full ring-2 ring-[#090B0E]" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=60" alt="Client" />
                <img className="inline-block h-7 w-7 rounded-full ring-2 ring-[#090B0E]" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&auto=format&fit=crop&q=60" alt="Client" />
              </div>
              <p>
                <strong className="text-[#F0ECE4]">120+</strong> Kenyan businesses online â€¢ <span className="text-[#00E87A]">4.9/5 Rating</span>
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Modern Phone Mockup (Liquid Glass Frame) */}
          <div className="lg:col-span-5 flex justify-center relative">
            {/* Ambient Background Aura */}
            <div className="absolute -inset-4 bg-gradient-to-r from-[#00E87A]/20 via-[#3A8FE8]/20 to-[#F5C842]/20 rounded-3xl blur-2xl opacity-60 animate-pulse-glow" />

            {/* Smartphone Mockup */}
            <div className="relative w-full max-w-[320px] sm:max-w-[340px] rounded-[40px] p-3.5 bg-[#141920] border-2 border-white/20 shadow-2xl shadow-black/80 backdrop-blur-xl">
              {/* Phone Speaker & Camera Notch */}
              <div className="absolute top-6 left-1/2 -translate-x-1/2 w-28 h-4 bg-[#090B0E] rounded-full z-30 flex items-center justify-end px-3">
                <div className="w-2 h-2 rounded-full bg-[#3A8FE8]/60" />
              </div>

              {/* Inner Screen Screen Content */}
              <div className="relative rounded-[32px] overflow-hidden bg-[#090B0E] border border-white/10 text-left pt-8 pb-4 px-4 space-y-3 font-sans">
                {/* Store Header */}
                <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-[#00E87A]" />
                    <span className="font-serif text-xs font-bold tracking-wider text-[#F0ECE4]">ZURI LUXE SALON</span>
                  </div>
                  <span className="text-[10px] text-[#00E87A] font-mono bg-[#00E87A]/10 px-2 py-0.5 rounded-full border border-[#00E87A]/30">
                    Live Demo
                  </span>
                </div>

                {/* Hero Banner in Phone Mockup */}
                <div className="relative rounded-xl overflow-hidden h-28 bg-gradient-to-tr from-[#1A212B] to-[#252E3B] p-3 flex flex-col justify-end border border-white/10">
                  <img
                    src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=500&auto=format&fit=crop&q=80"
                    alt="Salon Style"
                    className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-luminosity"
                  />
                  <div className="relative z-10 space-y-0.5">
                    <span className="text-[9px] uppercase tracking-wider text-[#F5C842] font-bold">Nairobi Westlands</span>
                    <h4 className="font-serif text-sm font-bold text-white leading-tight">Glow Braids & Silk Press</h4>
                  </div>
                </div>

                {/* Service Cards inside phone */}
                <div className="space-y-2">
                  <div className="p-2 rounded-lg bg-[#141920] border border-white/10 flex items-center justify-between">
                    <div>
                      <p className="text-[11px] font-semibold text-[#F0ECE4]">Full Knotless Braids + Wash</p>
                      <p className="text-[10px] text-[#8E9AA8]">Duration: 3 hrs</p>
                    </div>
                    <span className="text-xs font-bold text-[#00E87A]">KES 3,500</span>
                  </div>

                  <div className="p-2 rounded-lg bg-[#141920] border border-white/10 flex items-center justify-between">
                    <div>
                      <p className="text-[11px] font-semibold text-[#F0ECE4]">Deluxe Gel Mani & Pedi</p>
                      <p className="text-[10px] text-[#8E9AA8]">Duration: 1.5 hrs</p>
                    </div>
                    <span className="text-xs font-bold text-[#00E87A]">KES 2,200</span>
                  </div>
                </div>

                {/* M-Pesa Interactive Simulation Strip */}
                <div className="p-2.5 rounded-xl bg-gradient-to-r from-[#00E87A]/15 to-[#3A8FE8]/15 border border-[#00E87A]/30 space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono text-[#F0ECE4] flex items-center gap-1">
                      <Zap className="w-3 h-3 text-[#00E87A]" /> 1-Tap M-Pesa STK Push
                    </span>
                    <span className="text-[9px] text-[#00E87A] font-bold">Verified</span>
                  </div>
                  <div className="bg-[#090B0E] p-1.5 rounded-lg text-center text-[10px] font-bold text-[#00E87A] border border-[#00E87A]/20 flex items-center justify-center gap-1.5">
                    <span>Lipa na M-Pesa Online</span>
                  </div>
                </div>

                {/* Floating Speed Stamp */}
                <div className="flex items-center justify-between text-[9px] text-[#8E9AA8] pt-1">
                  <span>ðŸš€ 99.8% Mobile Speed</span>
                  <span>âš¡ 0.8s Load Time</span>
                </div>
              </div>

              {/* Floating Badge Tag outside phone */}
              <div className="absolute -bottom-4 -left-4 bg-[#141920]/90 backdrop-blur-md border border-[#00E87A]/40 rounded-xl px-3 py-2 shadow-xl flex items-center gap-2">
                <Flame className="w-4 h-4 text-[#00E87A] animate-bounce" />
                <div className="text-[11px]">
                  <p className="font-bold text-[#F0ECE4]">+340% Conversions</p>
                  <p className="text-[9px] text-[#8E9AA8]">For Nairobi Boutiques</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
