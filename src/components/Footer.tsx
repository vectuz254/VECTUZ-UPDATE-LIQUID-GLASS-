import React from 'react';
import { RubiksBrandLogo } from './Icons';
import { ShieldCheck, Heart, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#06080A] border-t border-white/10 pt-16 pb-12 z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <RubiksBrandLogo size={36} />
              <div>
                <span className="font-serif text-2xl font-bold tracking-tight text-[#F0ECE4]">
                  VECTUZ<span className="text-[#00E87A]">.</span>
                </span>
                <span className="text-[10px] tracking-widest text-[#8E9AA8] font-mono block -mt-1">
                  HIGH PERFORMANCE SME ENGINE
                </span>
              </div>
            </div>

            <p className="text-xs text-[#8E9AA8] max-w-sm leading-relaxed">
              VECTUZ designs and builds lightning-fast, mobile-first websites and online stores for ambitious Kenyan SMEs â€” powered by M-Pesa checkout, custom branding, and real human support.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#141920] border border-[#00E87A]/30 text-xs font-medium text-[#00E87A]">
              <ShieldCheck className="w-4 h-4" />
              <span>Safaricom M-Pesa Verified Merchant Stack</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-sm font-bold text-[#F0ECE4] uppercase tracking-wider mb-4">
              Solutions
            </h4>
            <ul className="space-y-2.5 text-xs text-[#8E9AA8]">
              <li><a href="#services" className="hover:text-[#00E87A] transition-colors">Salon & Spa Bookings</a></li>
              <li><a href="#services" className="hover:text-[#00E87A] transition-colors">Fashion Boutique E-Commerce</a></li>
              <li><a href="#services" className="hover:text-[#00E87A] transition-colors">M-Pesa STK Push Integration</a></li>
              <li><a href="#services" className="hover:text-[#00E87A] transition-colors">Local Nairobi SEO</a></li>
              <li><a href="#pricing" className="hover:text-[#00E87A] transition-colors">5-Day Quick Launch</a></li>
            </ul>
          </div>

          {/* Pricing & Guarantee */}
          <div>
            <h4 className="font-serif text-sm font-bold text-[#F0ECE4] uppercase tracking-wider mb-4">
              Packages
            </h4>
            <ul className="space-y-2.5 text-xs text-[#8E9AA8]">
              <li><a href="#pricing" className="hover:text-[#00E87A] transition-colors">Free Web Review (KES 0)</a></li>
              <li><a href="#pricing" className="hover:text-[#00E87A] transition-colors">Starter (KES 14,999)</a></li>
              <li><a href="#pricing" className="hover:text-[#00E87A] transition-colors">Business Growth (KES 44,999)</a></li>
              <li><a href="#pricing" className="hover:text-[#00E87A] transition-colors">Premium E-Commerce (KES 79,999)</a></li>
              <li><a href="#pricing" className="hover:text-[#00E87A] transition-colors">MAX Enterprise (Custom)</a></li>
            </ul>
          </div>

          {/* Legal & Location */}
          <div>
            <h4 className="font-serif text-sm font-bold text-[#F0ECE4] uppercase tracking-wider mb-4">
              Studio & Legal
            </h4>
            <ul className="space-y-2.5 text-xs text-[#8E9AA8]">
              <li><span className="text-[#F0ECE4]">Nairobi, Kenya</span> (EAT Timezone)</li>
              <li><a href="#contact" className="hover:text-[#00E87A] transition-colors">Book Strategy Call</a></li>
              <li><a href="#" className="hover:text-[#00E87A] transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-[#00E87A] transition-colors">Terms of Service</a></li>
              <li><a href="#faq" className="hover:text-[#00E87A] transition-colors">Client FAQ</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8E9AA8]">
          <p>Â© {new Date().getFullYear()} VECTUZ (vectuz.xyz). All rights reserved. Built with precision for Kenyan businesses.</p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 p-2 rounded-xl bg-[#141920] hover:bg-[#1A212B] text-[#F0ECE4] border border-white/10 transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#00E87A]" />
          </button>
        </div>
      </div>
    </footer>
  );
};
