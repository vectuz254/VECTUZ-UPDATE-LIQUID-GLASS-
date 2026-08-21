import React, { useState } from 'react';
import { ThemeProvider } from './components/ThemeContext';
import { RubiksLoader } from './components/RubiksLoader';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ServicesSection } from './components/ServicesSection';
import { PricingSection } from './components/PricingSection';
import { SocialProofSection } from './components/SocialProofSection';
import { GrowthSection } from './components/GrowthSection';
import { FAQSection } from './components/FAQSection';
import { ContactCheckoutSection } from './components/ContactCheckoutSection';
import { Footer } from './components/Footer';
import { MpesaModal } from './components/MpesaModal';
import { PricingTier } from './types';

export const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [activeMpesaTier, setActiveMpesaTier] = useState<PricingTier | null>(null);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (loading) {
    return <RubiksLoader onLoaded={() => setLoading(false)} />;
  }

  return (
    <ThemeProvider>
      <Navbar onOpenBooking={() => scrollToSection('contact')} />
      <HeroSection />
      <ServicesSection />
      <PricingSection onSelectTier={setActiveMpesaTier} />
      <SocialProofSection />
      <GrowthSection />
      <FAQSection />
      <ContactCheckoutSection />
      <Footer />
      <MpesaModal tier={activeMpesaTier} onClose={() => setActiveMpesaTier(null)} />
    </ThemeProvider>
  );
};

export default App;