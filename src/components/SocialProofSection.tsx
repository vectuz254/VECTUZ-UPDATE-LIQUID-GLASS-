import React from 'react';
import { SectionCubeDivider } from './RubiksMotif';
import { Star, CheckCircle, Quote, Sparkles, Building2, MapPin } from 'lucide-react';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Wanjiku Mwangi',
    role: 'Founder & Lead Stylist',
    business: 'Zuri Luxe Hair Studio',
    location: 'Westlands, Nairobi',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    quote: 'Before VECTUZ, our Instagram DMs were total chaos. We were losing client bookings every single day. VECTUZ built our booking portal with M-Pesa deposits in just 6 days. Our weekend slots now sell out automatically!',
    rating: 5,
    highlight: 'Appointments grew +280% in month 1',
    growthMetric: '+280% Bookings',
  },
  {
    id: '2',
    name: 'Kevin Ochieng',
    role: 'Creative Director',
    business: 'Nairobi Trendz Streetwear',
    location: 'Kilimani, Nairobi',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    quote: 'The 1-tap M-Pesa STK push checkout was a total game-changer. Customers browse our lookbook at midnight, tap pay, receive the prompt on their Safaricom line, and the order is locked in instantly without manual texting.',
    rating: 5,
    highlight: 'Processed KES 650K+ in online orders',
    growthMetric: 'KES 650K+ Sales',
  },
  {
    id: '3',
    name: 'Amina Hassan',
    role: 'Managing Partner',
    business: 'AfroGlow Organic Skincare',
    location: 'Karen, Nairobi',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
    quote: 'The liquid glass design aesthetic blew our customers away. It looks like a high-end luxury brand from Paris or New York, but loads blazing fast on Kenyan 4G. VECTUZ overdelivered on every single promise.',
    rating: 5,
    highlight: 'Zero cart abandonment issues',
    growthMetric: '0.8s Page Load',
  },
  {
    id: '4',
    name: 'Brian Kipchumba',
    role: 'Owner',
    business: 'Kifaru Mens Grooming Lounge',
    location: 'Lavington, Nairobi',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
    quote: 'The team at VECTUZ understands how business operates here. They did not just give us a template; they structured our barbershop pricing tiers so clients naturally choose our VIP executive package.',
    rating: 5,
    highlight: 'Average ticket price jumped from KES 1,500 to KES 3,200',
    growthMetric: '+113% Avg Ticket',
  },
  {
    id: '5',
    name: 'Faith Chebet',
    role: 'CEO',
    business: 'Lili Bridal & Couture',
    location: 'CBD, Nairobi',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80',
    quote: 'We launched our new bridal collection on our VECTUZ website and had 40 consultation bookings within 48 hours. The WhatsApp follow-up automation is brilliant!',
    rating: 5,
    highlight: 'Fully booked 3 months in advance',
    growthMetric: '3 Mos Booked',
  },
];

export const SocialProofSection: React.FC = () => {
  return (
    <section id="social-proof" className="py-20 relative overflow-hidden z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionCubeDivider
          subtitle="Real Client Success Stories"
          title="Loved by Nairobi's Top Salons & Brands"
          accent="green"
        />

        <p className="text-center text-[#8E9AA8] max-w-2xl mx-auto -mt-2 mb-12 text-sm sm:text-base">
          See how ambitious Kenyan entrepreneurs are scaling their revenue and automating their client bookings with VECTUZ websites.
        </p>
      </div>

      {/* Marquee Track 1 */}
      <div className="relative w-full overflow-hidden py-4">
        {/* Left and Right Fade Gradients */}
        <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-[#090B0E] to-transparent z-20 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-[#090B0E] to-transparent z-20 pointer-events-none" />

        <div className="animate-marquee-track flex gap-6">
          {[...testimonials, ...testimonials].map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="w-[340px] sm:w-[400px] flex-shrink-0 glass-card glass-glow-border-green p-6 rounded-2xl flex flex-col justify-between"
            >
              <div>
                {/* Header with Avatar & Rating */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={item.avatar}
                      alt={item.name}
                      className="w-12 h-12 rounded-full object-cover ring-2 ring-[#00E87A]/40"
                    />
                    <div>
                      <h4 className="font-bold text-sm text-[#F0ECE4] flex items-center gap-1.5">
                        {item.name}
                        <CheckCircle className="w-3.5 h-3.5 text-[#00E87A]" />
                      </h4>
                      <p className="text-xs text-[#8E9AA8]">{item.role}</p>
                      <p className="text-[11px] text-[#00E87A] flex items-center gap-1 mt-0.5">
                        <MapPin className="w-3 h-3" /> {item.business} ({item.location})
                      </p>
                    </div>
                  </div>
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#F5C842] text-[#F5C842]" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-xs sm:text-sm text-[#8E9AA8] italic leading-relaxed">
                  "{item.quote}"
                </p>
              </div>

              {/* Growth Metric Badge */}
              <div className="mt-5 pt-3 border-t border-white/10 flex items-center justify-between">
                <span className="text-[11px] text-[#8E9AA8] font-medium">{item.highlight}</span>
                <span className="text-xs font-bold font-mono px-2.5 py-0.5 rounded-full bg-[#00E87A]/15 text-[#00E87A] border border-[#00E87A]/30">
                  {item.growthMetric}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
