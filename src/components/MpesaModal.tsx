import React, { useState } from 'react';
import { PricingTier } from '../types';
import { X, Smartphone, CheckCircle, ShieldCheck, RefreshCw, AlertCircle, Sparkles } from 'lucide-react';
import { RubiksBrandLogo } from './Icons';

interface MpesaModalProps {
  tier: PricingTier | null;
  onClose: () => void;
}

export const MpesaModal: React.FC<MpesaModalProps> = ({ tier, onClose }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [stage, setStage] = useState<'form' | 'pushing' | 'awaiting' | 'success'>('form');
  const [mpesaReceipt, setMpesaReceipt] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  if (!tier) return null;

  const handleInitiateSTK = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phoneNumber || phoneNumber.length < 9) {
      setErrorMsg('Please enter a valid Kenyan phone number (e.g., 0712345678)');
      return;
    }
    setErrorMsg('');
    setStage('pushing');

    // Simulate STK Push flow
    setTimeout(() => {
      setStage('awaiting');
      setTimeout(() => {
        const fakeReceipt = 'QHJ' + Math.floor(100000 + Math.random() * 900000) + 'X';
        setMpesaReceipt(fakeReceipt);
        setStage('success');
      }, 3500);
    }, 1500);
  };

  const resetModal = () => {
    setStage('form');
    setPhoneNumber('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-md rounded-3xl bg-[#141920] border border-[#00E87A]/30 p-6 sm:p-8 text-[#F0ECE4] shadow-2xl shadow-[#00E87A]/10 overflow-hidden">
        {/* Close Button */}
        <button
          onClick={resetModal}
          className="absolute top-5 right-5 p-2 rounded-full bg-[#1A212B] hover:bg-[#252E3B] text-[#8E9AA8] hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 border-b border-white/10 pb-4 mb-5">
          <RubiksBrandLogo size={32} />
          <div>
            <h3 className="font-serif text-xl font-bold text-[#F0ECE4]">
              M-Pesa Express Checkout
            </h3>
            <p className="text-xs text-[#00E87A] font-mono">
              Secured by Safaricom Daraja STK Push
            </p>
          </div>
        </div>

        {/* STK Push Stages */}
        {stage === 'form' && (
          <form onSubmit={handleInitiateSTK} className="space-y-4">
            {/* Package Summary Pill */}
            <div className="p-3.5 rounded-xl bg-[#090B0E] border border-white/10 flex items-center justify-between">
              <div>
                <p className="text-xs text-[#8E9AA8]">Selected Package</p>
                <p className="font-bold text-sm text-[#F0ECE4]">{tier.name}</p>
              </div>
              <div className="text-right">
                <p className="text-xs text-[#8E9AA8]">Amount Due</p>
                <p className="font-mono text-base font-extrabold text-[#00E87A]">
                  {tier.price}
                </p>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#8E9AA8] mb-1.5">
                Full Name
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Wanjiku Kimani"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-[#090B0E] border border-white/10 text-sm text-[#F0ECE4] focus:outline-none focus:border-[#00E87A] transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#8E9AA8] mb-1.5">
                Business / Salon Name
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Luxe Glow Nairobi"
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-[#090B0E] border border-white/10 text-sm text-[#F0ECE4] focus:outline-none focus:border-[#00E87A] transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#8E9AA8] mb-1.5">
                Safaricom M-Pesa Number
              </label>
              <div className="relative">
                <span className="absolute left-3.5 top-2.5 text-xs text-[#8E9AA8] font-mono">
                  ðŸ‡°ðŸ‡ª +254
                </span>
                <input
                  type="tel"
                  required
                  placeholder="0712 345 678"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="w-full pl-20 pr-4 py-2.5 rounded-xl bg-[#090B0E] border border-white/10 text-sm text-[#F0ECE4] font-mono focus:outline-none focus:border-[#00E87A] transition-colors"
                />
              </div>
              <p className="text-[11px] text-[#8E9AA8] mt-1">
                You will receive an automatic PIN pop-up on this mobile number.
              </p>
            </div>

            {errorMsg && (
              <div className="p-2.5 rounded-lg bg-red-900/30 border border-red-500/40 text-red-300 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl font-bold bg-[#00E87A] text-black hover:bg-[#00E87A]/90 transition-all flex items-center justify-center gap-2 text-sm shadow-lg shadow-[#00E87A]/20 mt-2"
            >
              <Smartphone className="w-4 h-4" />
              <span>Send M-Pesa STK Prompt</span>
            </button>

            <div className="flex items-center justify-center gap-1.5 text-[11px] text-[#8E9AA8] pt-1">
              <ShieldCheck className="w-3.5 h-3.5 text-[#00E87A]" />
              <span>Encrypted via Safaricom Daraja v2 SSL</span>
            </div>
          </form>
        )}

        {stage === 'pushing' && (
          <div className="py-10 text-center space-y-4">
            <RefreshCw className="w-12 h-12 text-[#00E87A] animate-spin mx-auto" />
            <h4 className="font-serif text-lg font-bold text-[#F0ECE4]">Connecting to Safaricom...</h4>
            <p className="text-xs text-[#8E9AA8]">
              Initiating secure payment request for <strong className="text-[#00E87A]">{tier.price}</strong> to {phoneNumber}.
            </p>
          </div>
        )}

        {stage === 'awaiting' && (
          <div className="py-8 text-center space-y-5">
            <div className="w-16 h-16 rounded-full bg-[#00E87A]/20 border border-[#00E87A] flex items-center justify-center mx-auto animate-pulse">
              <Smartphone className="w-8 h-8 text-[#00E87A]" />
            </div>

            <div className="space-y-1">
              <h4 className="font-serif text-xl font-bold text-[#F0ECE4]">Prompt Sent to Your Phone!</h4>
              <p className="text-xs text-[#8E9AA8] max-w-xs mx-auto">
                Please check your phone screen and enter your <strong className="text-white">M-Pesa PIN</strong> to complete the order.
              </p>
            </div>

            <div className="p-3 bg-[#090B0E] rounded-xl border border-white/10 font-mono text-xs text-[#00E87A] flex items-center justify-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#00E87A] animate-ping" />
              <span>Awaiting PIN authorization...</span>
            </div>
          </div>
        )}

        {stage === 'success' && (
          <div className="py-6 text-center space-y-4 animate-in zoom-in-95 duration-300">
            <div className="w-16 h-16 rounded-full bg-[#00E87A] flex items-center justify-center mx-auto shadow-lg shadow-[#00E87A]/30">
              <CheckCircle className="w-10 h-10 text-black" />
            </div>

            <div className="space-y-1">
              <span className="text-[11px] font-bold font-mono uppercase tracking-widest text-[#00E87A]">
                Payment Confirmed
              </span>
              <h4 className="font-serif text-2xl font-bold text-[#F0ECE4]">You're All Set!</h4>
              <p className="text-xs text-[#8E9AA8] max-w-xs mx-auto">
                Thank you, <strong className="text-white">{fullName}</strong>. Your project onboarding for <strong className="text-[#00E87A]">{businessName}</strong> has been initiated.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#090B0E] border border-[#00E87A]/30 text-left space-y-1.5 font-mono text-xs">
              <div className="flex justify-between">
                <span className="text-[#8E9AA8]">Receipt Code:</span>
                <span className="text-[#00E87A] font-bold">{mpesaReceipt}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#8E9AA8]">Amount Paid:</span>
                <span className="text-[#F0ECE4]">{tier.price}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#8E9AA8]">Package:</span>
                <span className="text-[#F0ECE4]">{tier.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#8E9AA8]">Assigned Engineer:</span>
                <span className="text-[#F0ECE4]">Nairobi Lead Pod</span>
              </div>
            </div>

            <button
              onClick={resetModal}
              className="w-full py-3.5 rounded-xl font-bold bg-[#00E87A] text-black hover:bg-[#00E87A]/90 transition-all text-sm shadow-lg shadow-[#00E87A]/20"
            >
              Continue to Project Onboarding
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
