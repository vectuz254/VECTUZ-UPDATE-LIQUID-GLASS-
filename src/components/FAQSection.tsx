import React, { useState } from 'react';
import { SectionCubeDivider } from './RubiksMotif';
import { ChevronDown, Plus, Minus, HelpCircle } from 'lucide-react';
import { FAQItem } from '../types';

const faqs: FAQItem[] = [
  {
    id: '1',
    category: 'timeline',
    question: 'How fast will my website be live and ready for customers?',
    answer: 'Most standard projects (Starter and Business packages) are designed, approved, and launched within 5 to 10 working days. We work in rapid agile sprints with live preview links so you can test features on your own phone before final launch.',
  },
  {
    id: '2',
    category: 'payments',
    question: 'How does the M-Pesa STK Push payment integration work?',
    answer: 'We integrate with Safaricomâ€™s Daraja 2.0 API or trusted Kenyan payment aggregators (like Pesapal/IntaSend). When a customer clicks "Pay Now", an instant prompt appears directly on their Safaricom line asking for their M-Pesa PIN. Once entered, the payment clears into your Paybill, Till number, or bank account immediately, and the order is marked as paid.',
  },
  {
    id: '3',
    category: 'design',
    question: 'Do I get to request revisions during the build?',
    answer: 'Yes! Every package comes with 3 full rounds of revisions during the staging period. You can fine-tune text copy, colors, photo placements, button labels, and layouts until you are completely thrilled with the final look.',
  },
  {
    id: '4',
    category: 'support',
    question: 'Are there hidden monthly software fees or lock-ins?',
    answer: 'No. You own 100% of your website, your code, and your domain. Unlike platforms that charge hefty monthly dollar subscriptions plus hidden transaction fees, with VECTUZ you only pay the one-time build cost, plus standard annual domain renewal.',
  },
  {
    id: '5',
    category: 'design',
    question: 'Can I update product photos, prices, and salon services myself?',
    answer: 'Absolutely. We set up an intuitive, mobile-friendly dashboard where you or your staff can add new salon services, update fashion stock prices, publish photos, and toggle sold-out items directly from your smartphone.',
  },
  {
    id: '6',
    category: 'support',
    question: 'What if I need ongoing help after launch day?',
    answer: 'Launch day is just the beginning! All packages come with dedicated WhatsApp support windows (30 to 60 days) to assist you with questions, staff training, and technical monitoring. We also provide optional VIP monthly care retainers.',
  },
];

export const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('1');

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 relative z-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionCubeDivider
          subtitle="Clear Answers"
          title="Frequently Asked Questions"
          accent="gold"
        />

        <p className="text-center text-[#8E9AA8] max-w-xl mx-auto -mt-2 mb-12 text-sm sm:text-base">
          Have questions about the timeline, M-Pesa setups, or revision process? We believe in 100% clarity.
        </p>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`glass-card transition-all duration-300 rounded-2xl overflow-hidden border ${
                  isOpen
                    ? 'border-[#F5C842]/50 bg-[#141920]'
                    : 'border-white/10 hover:border-white/20'
                }`}
              >
                <button
                  onClick={() => toggle(faq.id)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="font-serif text-base sm:text-lg font-bold text-[#F0ECE4]">
                    {faq.question}
                  </span>
                  <div
                    className={`p-2 rounded-full transition-transform duration-300 ${
                      isOpen ? 'bg-[#F5C842] text-black rotate-180' : 'bg-[#1A212B] text-[#8E9AA8]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm text-[#8E9AA8] leading-relaxed border-t border-white/5 animate-in fade-in duration-200">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* WhatsApp Direct Help Banner */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-[#141920] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="font-bold text-[#F0ECE4] text-sm">Have a unique requirement or custom question?</h4>
            <p className="text-xs text-[#8E9AA8]">Chat directly with our Nairobi engineering team on WhatsApp.</p>
          </div>
          <a
            href="https://wa.me/254700000000?text=Hi%20VECTUZ,%20I%20have%20a%20question%20about%20a%20website"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl font-bold bg-[#00E87A] text-black text-xs hover:bg-[#00E87A]/90 transition-all flex items-center gap-2"
          >
            <span>Message on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
