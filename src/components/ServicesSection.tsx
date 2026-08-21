import React from 'react';
import { SectionCubeDivider } from './RubiksMotif';
import { Palette, Code2, Smartphone, CreditCard, CloudLightning, LineChart, Sparkles, CheckCircle } from 'lucide-react';

export const ServicesSection: React.FC = () => {
  const services = [
    {
      id: 'web-design',
      title: 'Custom Web & Brand Design',
      tagline: 'Tailored for Fashion & Beauty Brands',
      description: 'Zero cookie-cutter templates. We design luxurious, high-converting digital storefronts tailored specifically to your brand identity, colors, and clientele.',
      icon: Palette,
      accent: 'green' as const,
      borderClass: 'glass-glow-border-green',
      iconBg: 'bg-[#00E87A]/10 text-[#00E87A]',
      features: ['Figma to Pixel-Perfect Code', 'Tailored for Kenyan Audiences', 'High-Res Lookbook & Product Galleries'],
    },
    {
      id: 'mpesa-payments',
      title: 'M-Pesa STK Push & Card Checkout',
      tagline: 'Get Paid Instantly in Kenyan Shillings',
      description: 'Integrate Daraja API STK push directly. Your clients enter their Safaricom phone number and receive the instant PIN prompt on their phone â€” with zero friction.',
      icon: CreditCard,
      accent: 'gold' as const,
      borderClass: 'glass-glow-border-gold',
      iconBg: 'bg-[#F5C842]/10 text-[#F5C842]',
      features: ['Lipa na M-Pesa (Till / Paybill)', 'Real-Time Instant Confirmation', 'Visa & Mastercard Backup'],
    },
    {
      id: 'mobile-speed',
      title: 'Mobile-First 0.8s Ultra Speed',
      tagline: 'Flawless on Safaricom & Airtel 4G/5G',
      description: 'Over 88% of Kenyan consumers shop and book appointments on smartphones. We compress assets and optimize every byte to ensure instantaneous loading on any device.',
      icon: Smartphone,
      accent: 'blue' as const,
      borderClass: 'glass-glow-border-blue',
      iconBg: 'bg-[#3A8FE8]/10 text-[#3A8FE8]',
      features: ['Sub-second Page Speeds', 'Thumb-Friendly Navigation', 'Zero Data Wastage'],
    },
    {
      id: 'turnaround-support',
      title: '5â€“10 Day Delivery & Hosting',
      tagline: 'Launch Without Waiting for Months',
      description: 'We handle your .co.ke or .com domain registration, SSL certificates, supercharged cloud hosting, and email accounts so you can start taking orders immediately.',
      icon: CloudLightning,
      accent: 'red' as const,
      borderClass: 'glass-glow-border-red',
      iconBg: 'bg-[#E84444]/10 text-[#E84444]',
      features: ['Domain & SSL Configured', 'Fast 5-Day Delivery', 'Dedicated WhatsApp Support'],
    },
    {
      id: 'booking-systems',
      title: 'Salon & Spa Booking Systems',
      tagline: 'Automated Calendar & WhatsApp Reminders',
      description: 'Let your clients book hairstyles, nail sessions, or spa treatments 24/7 without manual WhatsApp back-and-forth, reducing no-shows with automated SMS alerts.',
      icon: Code2,
      accent: 'green' as const,
      borderClass: 'glass-glow-border-green',
      iconBg: 'bg-[#00E87A]/10 text-[#00E87A]',
      features: ['Staff Schedule Management', 'Deposit / Downpayment via M-Pesa', 'WhatsApp Confirmation Bots'],
    },
    {
      id: 'seo-growth',
      title: 'Local SEO & Google Maps Ranking',
      tagline: 'Dominate Searches in Nairobi',
      description: 'Ensure your salon or boutique appears #1 when people search "best hair salon in Westlands" or "fashion boutique Nairobi" on Google Search and Maps.',
      icon: LineChart,
      accent: 'gold' as const,
      borderClass: 'glass-glow-border-gold',
      iconBg: 'bg-[#F5C842]/10 text-[#F5C842]',
      features: ['Google Business Profile Setup', 'Schema Structured Data', 'Meta Pixel & Analytics Setup'],
    },
  ];

  return (
    <section id="services" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Rubik's Divider */}
        <SectionCubeDivider
          subtitle="Engineered for Kenyan Businesses"
          title="Everything You Need to Dominate Online"
          accent="green"
        />

        <p className="text-center text-[#8E9AA8] max-w-2xl mx-auto -mt-2 mb-12 text-sm sm:text-base">
          Built for how business is actually conducted in Nairobi and across East Africa â€” fast, mobile-friendly, and integrated with local payment rails.
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((srv) => {
            const IconComponent = srv.icon;
            return (
              <div
                key={srv.id}
                className={`glass-card ${srv.borderClass} p-8 rounded-2xl flex flex-col justify-between hover:-translate-y-1.5 transition-all duration-300 group shadow-xl`}
              >
                <div>
                  {/* Top Bar: Icon + Mini Rubik's Accent */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`p-3 rounded-xl ${srv.iconBg} group-hover:scale-110 transition-transform`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div className="w-4 h-4 grid grid-cols-2 gap-0.5 opacity-30 group-hover:opacity-80 transition-opacity">
                      <div className="bg-current rounded-[0.5px]" />
                      <div className="bg-current rounded-[0.5px]" />
                      <div className="bg-current rounded-[0.5px]" />
                      <div className="bg-current rounded-[0.5px]" />
                    </div>
                  </div>

                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#8E9AA8] block mb-1">
                    {srv.tagline}
                  </span>
                  <h3 className="font-serif text-xl font-bold text-[#F0ECE4] mb-3 group-hover:text-white transition-colors">
                    {srv.title}
                  </h3>
                  <p className="text-sm text-[#8E9AA8] leading-relaxed mb-6">
                    {srv.description}
                  </p>
                </div>

                {/* Features list */}
                <div className="pt-4 border-t border-white/5 space-y-2">
                  {srv.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-[#F0ECE4]">
                      <CheckCircle className="w-3.5 h-3.5 text-[#00E87A] flex-shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
