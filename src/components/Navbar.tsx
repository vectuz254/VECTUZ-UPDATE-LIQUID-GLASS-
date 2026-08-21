import React, { useState, useEffect } from 'react';
import { RubiksBrandLogo } from './Icons';
import { useTheme } from './ThemeContext';
import { Menu, X, Sun, Moon, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';

export const Navbar: React.FC<{ onOpenBooking: () => void }> = ({ onOpenBooking }) => {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Results', href: '#results' },
    { label: 'Testimonials', href: '#social-proof' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#090B0E]/80 backdrop-blur-xl border-b border-white/10 py-3 shadow-lg'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <a href="#" className="flex items-center gap-3 group">
          <RubiksBrandLogo size={36} className="group-hover:rotate-12 transition-transform duration-500" />
          <div className="flex flex-col">
            <span className="font-serif text-2xl font-bold tracking-tight text-[#F0ECE4] flex items-center gap-1">
              VECTUZ
              <span className="inline-block w-2 h-2 rounded-full bg-[#00E87A] animate-pulse" />
            </span>
            <span className="text-[10px] tracking-widest text-[#8E9AA8] font-mono -mt-1">
              NAIROBI â€¢ KENYA
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#8E9AA8]">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-[#00E87A] transition-colors relative py-1 group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00E87A] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Action Controls & CTA */}
        <div className="hidden md:flex items-center gap-4">
          {/* M-Pesa verified badge pill */}
          <div className="hidden lg:flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#141920] border border-[#00E87A]/20 text-[11px] text-[#8E9AA8]">
            <ShieldCheck className="w-3.5 h-3.5 text-[#00E87A]" />
            <span>M-Pesa Verified</span>
          </div>

          {/* Dark / Light Toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="p-2 rounded-xl bg-[#141920] hover:bg-[#1A212B] border border-white/10 text-[#F0ECE4] transition-all"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-[#F5C842]" />
            ) : (
              <Moon className="w-4 h-4 text-[#3A8FE8]" />
            )}
          </button>

          {/* Primary CTA */}
          <button
            onClick={onOpenBooking}
            className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-semibold rounded-xl group bg-gradient-to-br from-[#00E87A] via-[#3A8FE8] to-[#F5C842] shadow-lg hover:shadow-[#00E87A]/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            <span className="px-4 py-2 transition-all ease-in duration-75 bg-[#090B0E] rounded-[10px] group-hover:bg-opacity-0 text-[#F0ECE4] group-hover:text-black flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#00E87A] group-hover:text-black" />
              Book a Call
            </span>
          </button>
        </div>

        {/* Mobile Menu & Theme button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="p-2 rounded-lg bg-[#141920] border border-white/10 text-[#F0ECE4]"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-[#F5C842]" />
            ) : (
              <Moon className="w-4 h-4 text-[#3A8FE8]" />
            )}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-[#141920] border border-white/10 text-[#F0ECE4]"
            aria-label="Open Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#090B0E]/95 backdrop-blur-2xl border-b border-white/10 px-6 py-6 space-y-4 animate-in slide-in-from-top duration-300">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-[#F0ECE4] hover:text-[#00E87A] py-2 border-b border-white/5"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3 rounded-xl font-bold bg-[#00E87A] text-black flex items-center justify-center gap-2 shadow-lg shadow-[#00E87A]/20"
            >
              <span>Book a Strategy Call</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
