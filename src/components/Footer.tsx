import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { ArrowRight, Check, Sparkles, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const { setCurrentView, setSelectedCategoryFilter, setIsQuizOpen, setIsConsultationOpen } = useCart();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
  };

  return (
    <footer className="bg-[#222222] text-[#FAF7F2] border-t border-[#333333] mt-20">
      
      {/* Newsletter Privilege Section */}
      <div className="border-b border-white/10 py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
          <div className="space-y-1 max-w-xl">
            <span className="text-[11px] uppercase tracking-widest text-[#daaf37] font-semibold">
              The Marvel Me Atelier Journal
            </span>
            <h3 className="font-serif-luxury text-2xl sm:text-3xl text-[#FAF7F2] font-medium">
              Join the Society of Thoughtful Givers
            </h3>
            <p className="text-xs text-[#A8A29E] leading-relaxed">
              Receive seasonal curation reveals, exclusive small-batch releases, and complimentary gift-wrapping upgrades.
            </p>
          </div>

          <div className="w-full max-w-md">
            {!subscribed ? (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  required
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 text-xs bg-white/10 border border-white/20 rounded-[8px] text-white placeholder-white/50 focus:outline-none focus:border-[#daaf37]"
                />
                <button
                  type="submit"
                  className="px-5 py-3 bg-[#daaf37] hover:bg-[#b88e22] text-[#222222] text-xs font-semibold rounded-[8px] transition-colors shrink-0 cursor-pointer flex items-center gap-1.5"
                >
                  <span>Subscribe</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            ) : (
              <div className="p-3 bg-[#daaf37]/20 border border-[#daaf37] rounded-[8px] text-xs text-[#FAF7F2] flex items-center gap-2 justify-center">
                <Check className="w-4 h-4 text-[#daaf37]" />
                <span>Welcome! Use code <strong className="text-[#daaf37]">WELCOMEHUG10</strong> for 10% off your first gift.</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <span className="font-serif-luxury text-3xl text-[#FAF7F2] tracking-tight font-medium">
              Marvel Me
            </span>
            <p className="text-sm font-serif-luxury text-[#daaf37] italic">
              “Gifts that feel like a hug.”
            </p>
            <p className="text-xs text-[#A8A29E] leading-relaxed max-w-sm">
              Marvel Me creates bespoke sensory gift hampers, picnic suites, and surprise reveals with hand-folded archival wrapping and personalized handwritten calligraphy notes.
            </p>
            <div className="pt-2 text-xs text-[#A8A29E] space-y-1">
              <div>Atelier Concierge: <span className="text-white">concierge@marvelme.com</span></div>
              <div>Telephone: <span className="text-white">+1 (800) 484-HUGS</span></div>
            </div>
          </div>

          {/* Curations Column */}
          <div className="space-y-3 text-xs">
            <h4 className="font-semibold uppercase tracking-widest text-[#daaf37] text-[11px]">
              Gift Curations
            </h4>
            <ul className="space-y-2 text-[#D1C9BC]">
              <li>
                <button
                  onClick={() => {
                    setCurrentView('shop');
                    setSelectedCategoryFilter('Gift Hampers');
                  }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Luxury Gift Hampers
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setCurrentView('shop');
                    setSelectedCategoryFilter('Picnics');
                  }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Picnic Experiences
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setCurrentView('shop');
                    setSelectedCategoryFilter('Gift Surprises');
                  }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Celebration Surprises
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setCurrentView('shop');
                    setSelectedCategoryFilter('Gift Wrapping');
                  }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Bespoke Wrapping Suites
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setCurrentView('shop');
                    setSelectedCategoryFilter('Gift Card Vouchers');
                  }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Gift Card Vouchers
                </button>
              </li>
            </ul>
          </div>

          {/* Bespoke Services */}
          <div className="space-y-3 text-xs">
            <h4 className="font-semibold uppercase tracking-widest text-[#daaf37] text-[11px]">
              Bespoke Services
            </h4>
            <ul className="space-y-2 text-[#D1C9BC]">
              <li>
                <button
                  onClick={() => setIsConsultationOpen(true)}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  1-on-1 Gift Consultation
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setCurrentView('shop');
                    setSelectedCategoryFilter('Corporate Gifting');
                  }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Corporate & VIP Gifting
                </button>
              </li>
              <li>
                <button
                  onClick={() => setIsQuizOpen(true)}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Interactive Gift Match Quiz
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setCurrentView('home');
                    setTimeout(() => {
                      document.getElementById('treasure-hunt')?.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}
                  className="hover:text-white transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <span className="text-[#daaf37]">✦</span>
                  <span>Treasure Hunt (Personalized Gifts)</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentView('about')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Milestone Scheduling Guarantee
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentView('about')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Handwritten Calligraphy Standards
                </button>
              </li>
            </ul>
          </div>

          {/* About & Trust */}
          <div className="space-y-3 text-xs">
            <h4 className="font-semibold uppercase tracking-widest text-[#daaf37] text-[11px]">
              Our Atelier
            </h4>
            <ul className="space-y-2 text-[#D1C9BC]">
              <li>
                <button
                  onClick={() => setCurrentView('about')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Our Story & Philosophy
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentView('about')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Sustainable Packaging Pledge
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentView('about')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Small-Batch Maker Network
                </button>
              </li>
              <li>
                <span className="text-[#8C8479]">White-Glove Courier Logistics</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright & Guarantee */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-[#7A746B] gap-4">
          <div className="flex items-center gap-1">
            <span>© 2026 Marvel Me Atelier Inc. All rights reserved.</span>
            <span aria-hidden="true">·</span>
            <span>Gifts that feel like a hug.</span>
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Delivery Guarantees</span>
          </div>
        </div>

      </div>

    </footer>
  );
};
