import React, { useState } from 'react';
import { SectionCubeDivider } from './RubiksMotif';
import { Mail, Phone, MapPin, Send, MessageSquare, CheckCircle, Clock, Calendar, Sparkles } from 'lucide-react';

export const ContactCheckoutSection: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    businessType: 'Salon & Spa',
    preferredPackage: 'Business Growth (KES 44,999)',
    projectGoal: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionCubeDivider
          subtitle="Let's Build Something Iconic"
          title="Start Your Project Today"
          accent="green"
        />

        <p className="text-center text-[#8E9AA8] max-w-2xl mx-auto -mt-2 mb-14 text-sm sm:text-base">
          Ready to launch your high-converting website? Book a free discovery strategy call or send us your project details below.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Contact & Studio Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-card glass-glow-border-green p-8 rounded-3xl space-y-6 shadow-xl">
              <h3 className="font-serif text-2xl font-bold text-[#F0ECE4]">
                VECTUZ Studio Nairobi
              </h3>
              <p className="text-sm text-[#8E9AA8] leading-relaxed">
                We work directly with forward-thinking Kenyan business owners to turn concepts into fast, profitable web experiences.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-[#00E87A]/10 text-[#00E87A] flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold uppercase tracking-wider text-[#8E9AA8]">Office Location</h5>
                    <p className="text-sm font-medium text-[#F0ECE4]">The Pavilion, 5th Floor, Westlands, Nairobi, Kenya</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-[#3A8FE8]/10 text-[#3A8FE8] flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold uppercase tracking-wider text-[#8E9AA8]">Email Address</h5>
                    <p className="text-sm font-medium text-[#F0ECE4]">hello@vectuz.xyz</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-[#F5C842]/10 text-[#F5C842] flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold uppercase tracking-wider text-[#8E9AA8]">Direct Phone & WhatsApp</h5>
                    <p className="text-sm font-medium text-[#F0ECE4]">+254 (0) 700 832 889</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-[#E84444]/10 text-[#E84444] flex-shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold uppercase tracking-wider text-[#8E9AA8]">Working Hours</h5>
                    <p className="text-sm font-medium text-[#F0ECE4]">Mon â€“ Sat: 8:00 AM â€“ 7:00 PM EAT</p>
                  </div>
                </div>
              </div>

              {/* Instant WhatsApp Quick Button */}
              <div className="pt-4 border-t border-white/10">
                <a
                  href="https://wa.me/254700832889?text=Hi%20VECTUZ,%20I%20would%20like%20to%20discuss%20a%20website%20project"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-[#00E87A]/15 border border-[#00E87A]/40 text-[#00E87A] font-bold text-xs flex items-center justify-center gap-2 hover:bg-[#00E87A] hover:text-black transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat With Us on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Booking & Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="glass-card glass-glow-border-gold p-8 sm:p-10 rounded-3xl shadow-xl relative">
              {submitted ? (
                <div className="py-12 text-center space-y-4 animate-in zoom-in-95 duration-300">
                  <div className="w-16 h-16 rounded-full bg-[#00E87A] flex items-center justify-center mx-auto shadow-lg shadow-[#00E87A]/30">
                    <CheckCircle className="w-10 h-10 text-black" />
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#F0ECE4]">
                    Strategy Call Request Received!
                  </h3>
                  <p className="text-sm text-[#8E9AA8] max-w-md mx-auto">
                    Thank you, <strong className="text-white">{formData.fullName}</strong>. Our senior design team has received your brief and will WhatsApp / email you within 2 business hours to confirm your discovery call.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-xl font-bold bg-[#1A212B] hover:bg-[#252E3B] text-xs text-[#F0ECE4] transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="border-b border-white/10 pb-4 mb-2">
                    <h3 className="font-serif text-2xl font-bold text-[#F0ECE4]">
                      Book Your Free 1-on-1 Discovery Call
                    </h3>
                    <p className="text-xs text-[#8E9AA8] mt-1">
                      No commitment required. We discuss your business goals, timeline, and demonstrate how you can automate sales with M-Pesa.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#8E9AA8] mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Cynthia Mwende"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#090B0E] border border-white/10 text-sm text-[#F0ECE4] focus:outline-none focus:border-[#00E87A] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#8E9AA8] mb-1.5">
                        WhatsApp Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 0712 345 678"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#090B0E] border border-white/10 text-sm text-[#F0ECE4] focus:outline-none focus:border-[#00E87A] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#8E9AA8] mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="cynthia@yourbrand.co.ke"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#090B0E] border border-white/10 text-sm text-[#F0ECE4] focus:outline-none focus:border-[#00E87A] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#8E9AA8] mb-1.5">
                        Industry / Business Type
                      </label>
                      <select
                        value={formData.businessType}
                        onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#090B0E] border border-white/10 text-sm text-[#F0ECE4] focus:outline-none focus:border-[#00E87A] transition-colors"
                      >
                        <option value="Salon & Spa">Salon, Barber & Spa</option>
                        <option value="Fashion & Boutique">Fashion & Clothing Boutique</option>
                        <option value="Beauty & Cosmetics">Beauty & Organic Cosmetics</option>
                        <option value="E-Commerce Retail">E-Commerce & Retail Store</option>
                        <option value="Restaurant & Cafe">Restaurant, Bar & Lounge</option>
                        <option value="Professional Services">Law, Real Estate, Consulting</option>
                        <option value="Other">Other SME / Enterprise</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#8E9AA8] mb-1.5">
                      Interested Package
                    </label>
                    <select
                      value={formData.preferredPackage}
                      onChange={(e) => setFormData({ ...formData, preferredPackage: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#090B0E] border border-white/10 text-sm text-[#F0ECE4] focus:outline-none focus:border-[#00E87A] transition-colors"
                    >
                      <option value="Free Review (KES 0)">Free Web & SEO Review (KES 0)</option>
                      <option value="Starter (KES 14,999)">Starter Package (KES 14,999)</option>
                      <option value="Business Growth (KES 44,999)">Business Growth (KES 44,999) - Most Popular</option>
                      <option value="Premium E-Commerce (KES 79,999)">Premium E-Commerce (KES 79,999)</option>
                      <option value="MAX Custom (KES 150,000+)">MAX Custom / Enterprise (KES 150,000+)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#8E9AA8] mb-1.5">
                      Tell us about your project or current bottlenecks
                    </label>
                    <textarea
                      rows={3}
                      placeholder="e.g. We want to accept automated M-Pesa appointment deposits for our salon in Westlands and stop losing clients in Instagram DMs..."
                      value={formData.projectGoal}
                      onChange={(e) => setFormData({ ...formData, projectGoal: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#090B0E] border border-white/10 text-sm text-[#F0ECE4] focus:outline-none focus:border-[#00E87A] transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl font-bold bg-gradient-to-r from-[#00E87A] via-[#3A8FE8] to-[#F5C842] text-black hover:opacity-95 transition-all text-sm shadow-xl shadow-[#00E87A]/20 flex items-center justify-center gap-2 transform hover:-translate-y-0.5"
                  >
                    <Sparkles className="w-4 h-4 fill-black" />
                    <span>Confirm Free Discovery Call</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
