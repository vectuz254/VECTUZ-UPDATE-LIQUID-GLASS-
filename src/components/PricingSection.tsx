import React, { useState } from 'react';
import { PricingTier } from '../types';
import { SectionCubeDivider } from './RubiksMotif';
import { ToyRobotCubeIcon } from './Icons';
import { PricingModal } from './PricingModal';
import { Check, Sparkles, Zap, ArrowRight, ShieldCheck, Star } from 'lucide-react';

const pricingTiers: PricingTier[] = [
  {
    id: 'free-review',
    name: 'Free Web & SEO Review',
    price: 'KES 0',
    originalPrice: 'KES 5,000',
    description: 'A 15-minute video teardown of your current site, Instagram page, or Google profile with 5 actionable conversion fixes.',
    accentColor: 'blue',
    features: [
      'Speed & Mobile UX Audit',
      'M-Pesa Checkout Flow Inspection',
      'Local Nairobi Google Maps Check',
      '5 High-Impact Conversion Fixes',
      'No Obligation or Credit Card',
    ],
    idealFor: 'Businesses wanting quick expert feedback',
    deliveryTime: '24 Hours',
    badge: '100% Free',
  },
  {
    id: 'starter',
    name: 'Starter Package',
    price: 'KES 14,999',
    originalPrice: 'KES 22,000',
    description: 'The fastest launchpad for solo entrepreneurs, nail techs, barbers, and boutique fashion owners ready to look professional.',
    accentColor: 'green',
    features: [
      'High-Converting Single Page Landing',
      'Direct WhatsApp Booking Button',
      'M-Pesa Paybill / Till Display',
      'Mobile-Optimized (Under 1s Load)',
      '.co.ke Domain & SSL for 1 Year',
      '3 Rounds of Revisions',
    ],
    idealFor: 'Solo stylists, barbers & small boutiques',
    deliveryTime: '3â€“5 Days',
    badge: 'Quick Launch',
  },
  {
    id: 'business',
    name: 'Business Growth',
    price: 'KES 44,999',
    originalPrice: 'KES 60,000',
    popular: true,
    description: 'Our most popular full-featured package for established salons, spas, and retail brands needing automated bookings & payments.',
    accentColor: 'gold',
    features: [
      'Up to 5 Custom-Designed Pages',
      '1-Tap M-Pesa STK Push Checkout',
      'Online Appointment Booking System',
      'Full Product & Service Lookbook',
      'Google Maps & Local SEO Setup',
      'WhatsApp Auto-Confirmation Bot',
      '30 Days Dedicated Post-Launch Support',
    ],
    idealFor: 'Full salons, spas, fashion boutiques',
    deliveryTime: '5â€“7 Days',
    badge: 'Most Popular',
  },
  {
    id: 'premium',
    name: 'Premium E-Commerce',
    price: 'KES 79,999',
    originalPrice: 'KES 110,000',
    description: 'Full digital storefront built for high-volume inventory, customer accounts, order tracking, and multi-channel marketing.',
    accentColor: 'red',
    features: [
      'Full E-Commerce Store (Unlimited Items)',
      'Automated M-Pesa + Visa/Mastercard',
      'Real-Time Nairobi Rider Delivery Calc',
      'Abandoned Cart WhatsApp Follow-ups',
      'Customer Accounts & Loyalty Rewards',
      'Instagram Shop & TikTok Catalog Sync',
      '60 Days VIP Tech Support',
    ],
    idealFor: 'High-volume fashion & beauty retailers',
    deliveryTime: '7â€“10 Days',
    badge: 'Scale Fast',
  },
  {
    id: 'max',
    name: 'MAX Custom / Enterprise',
    price: 'KES 150,000â€“450,000',
    period: 'Custom Scope',
    description: 'Tailored enterprise platforms, multi-branch booking engines, custom mobile apps, and deep ERP/POS integrations.',
    accentColor: 'blue',
    features: [
      'Multi-Branch Salon & Clinic Engine',
      'Custom Mobile App (iOS & Android)',
      'Custom POS & Inventory Integration',
      'Dedicated Cloud Server Architecture',
      '24/7 Priority SLA & Lead Engineer',
      'Quarterly UX Optimization & AB Testing',
    ],
    idealFor: 'Franchises, multi-location clinics & brands',
    deliveryTime: '2â€“4 Weeks',
    badge: 'Bespoke',
  },
];

export const PricingSection: React.FC<{ onSelectMpesaTier: (tier: PricingTier) => void }> = ({
  onSelectMpesaTier,
}) => {
  const [selectedTier, setSelectedTier] = useState<PricingTier | null>(null);

  const glowBorderClass = {
    green: 'glass-glow-border-green shadow-glass-green',
    gold: 'glass-glow-border-gold shadow-glass-gold',
    red: 'glass-glow-border-red shadow-glass-red',
    blue: 'glass-glow-border-blue shadow-glass-blue',
  };

  const accentTextClass = {
    green: 'text-[#00E87A]',
    gold: 'text-[#F5C842]',
    red: 'text-[#E84444]',
    blue: 'text-[#3A8FE8]',
  };

  const accentButtonBg = {
    green: 'bg-[#00E87A] text-black hover:bg-[#00E87A]/90',
    gold: 'bg-[#F5C842] text-black hover:bg-[#F5C842]/90',
    red: 'bg-[#E84444] text-white hover:bg-[#E84444]/90',
    blue: 'bg-[#3A8FE8] text-white hover:bg-[#3A8FE8]/90',
  };

  return (
    <section id="pricing" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <SectionCubeDivider
          subtitle="Simple, Transparent Investment"
          title="Packages Built for Every Stage"
          accent="gold"
        />

        <p className="text-center text-[#8E9AA8] max-w-2xl mx-auto -mt-2 mb-12 text-sm sm:text-base">
          No hidden fees, no monthly software traps. You own 100% of your website, domain, and customer data forever.
        </p>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {pricingTiers.map((tier) => {
            const isPopular = tier.popular;

            return (
              <div
                key={tier.id}
                onClick={() => setSelectedTier(tier)}
                className={`glass-card ${glowBorderClass[tier.accentColor]} p-7 rounded-3xl flex flex-col justify-between cursor-pointer transform hover:-translate-y-2 transition-all duration-300 relative group ${
                  isPopular ? 'lg:-translate-y-2 ring-1 ring-[#F5C842]/50' : ''
                }`}
              >
                {/* Popular Ribbon */}
                {isPopular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#F5C842] to-[#00E87A] text-black text-[11px] font-black uppercase tracking-widest px-4 py-1 rounded-full shadow-lg flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 fill-black" />
                    <span>POPULAR CHOICE</span>
                  </div>
                )}

                <div>
                  {/* Card Header: Toy Robot Holding Glowing Mini Cube + Tier Label */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <ToyRobotCubeIcon color={tier.accentColor} size={52} />
                      <div>
                        <span className={`text-xs font-bold uppercase tracking-wider ${accentTextClass[tier.accentColor]}`}>
                          {tier.badge || 'Package'}
                        </span>
                        <h3 className="font-serif text-xl font-bold text-[#F0ECE4]">
                          {tier.name}
                        </h3>
                      </div>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="my-4 pb-4 border-b border-white/10">
                    <div className="flex items-baseline gap-2">
                      <span className="font-serif text-3xl sm:text-4xl font-extrabold text-[#F0ECE4] tracking-tight">
                        {tier.price}
                      </span>
                      {tier.originalPrice && (
                        <span className="text-xs text-[#8E9AA8] line-through font-mono">
                          {tier.originalPrice}
                        </span>
                      )}
                    </div>
                    {tier.period && (
                      <span className="text-xs text-[#8E9AA8] font-mono">{tier.period}</span>
                    )}
                    <p className="text-xs text-[#8E9AA8] mt-2 leading-relaxed">
                      {tier.description}
                    </p>
                  </div>

                  {/* Feature Checklist */}
                  <div className="space-y-2.5 my-4">
                    {tier.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-[#F0ECE4]">
                        <div className="p-0.5 rounded-full bg-white/10 mt-0.5 flex-shrink-0">
                          <Check className={`w-3 h-3 ${accentTextClass[tier.accentColor]}`} />
                        </div>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer action */}
                <div className="pt-4 border-t border-white/10 mt-4">
                  <div className="flex items-center justify-between text-[11px] text-[#8E9AA8] mb-3">
                    <span>â± Delivery: <strong>{tier.deliveryTime}</strong></span>
                    <span className="text-[#00E87A]">Tap to inspect</span>
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedTier(tier);
                    }}
                    className={`w-full py-3 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all ${accentButtonBg[tier.accentColor]} shadow-md`}
                  >
                    <span>Choose {tier.name}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Custom Scope Footer Guarantee Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-[#141920]/80 border border-[#00E87A]/30 backdrop-blur-xl flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-[#00E87A]/10 text-[#00E87A]">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <div>
              <h4 className="font-serif text-lg font-bold text-[#F0ECE4]">The VECTUZ Launch Guarantee</h4>
              <p className="text-xs text-[#8E9AA8]">
                3 revision rounds included in every build. If your site isn't delivered within the agreed timeline, we discount 15% immediately.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-[#00E87A] bg-[#00E87A]/10 px-3 py-1.5 rounded-lg border border-[#00E87A]/30">
              100% Kenyan M-Pesa Verified
            </span>
          </div>
        </div>
      </div>

      {/* Interactive Modal when tapping a card */}
      <PricingModal
        tier={selectedTier}
        onClose={() => setSelectedTier(null)}
        onProceedToMpesa={(tier) => {
          setSelectedTier(null);
          onSelectMpesaTier(tier);
        }}
      />
    </section>
  );
};
