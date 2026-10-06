import React from 'react';
import { useCart } from '../context/CartContext';
import { ArrowRight, Sparkles, ShieldCheck, HeartHandshake, CalendarCheck } from 'lucide-react';

export const Hero: React.FC = () => {
  const { setCurrentView, setSelectedCategoryFilter, setIsQuizOpen, setIsConsultationOpen } = useCart();

  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-12 lg:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Split Hero Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Brand Story & Slogan */}
          <div className="lg:col-span-6 space-y-6 text-left">
            
            {/* Subtle editorial kicker */}
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#8C6D3B] font-medium">
              <span>Handcrafted Luxury Gifting</span>
              <span aria-hidden="true">·</span>
              <span>Bespoke Keepsakes</span>
            </div>

            {/* Slogan - Headline: Marvel Me's slogan 'Gifts that feel like a hug' */}
            <h1 className="font-serif-luxury text-4xl sm:text-5xl lg:text-6xl text-[#1C1A18] leading-[1.08] tracking-tight text-balance">
              Gifts that feel like a hug.
            </h1>

            {/* Prose description */}
            <p className="text-base sm:text-lg text-[#524E48] leading-relaxed max-w-xl">
              Marvel Me curates extraordinary sensory hampers, twilight picnic suites, and bespoke surprise reveals. Every package arrives dressed in artisanal gold foil wrapping, complete with your personalized handwritten calligraphy note and guaranteed milestone delivery.
            </p>

            {/* Action buttons with 8px radius */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                onClick={() => {
                  setCurrentView('shop');
                  setSelectedCategoryFilter('All');
                }}
                className="px-6 py-3.5 bg-[#1C1A18] text-[#FAF7F2] hover:bg-[#33302C] text-sm font-medium rounded-[8px] transition-all flex items-center justify-center gap-2 group cursor-pointer shadow-sm"
              >
                <span>Explore Curated Gifts</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#C5A880]" />
              </button>

              <button
                onClick={() => setIsQuizOpen(true)}
                className="px-6 py-3.5 bg-white text-[#2D2A26] border border-[#D9D2C7] hover:border-[#A58457] hover:bg-[#F9F6F0] text-sm font-medium rounded-[8px] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
              >
                <Sparkles className="w-4 h-4 text-[#A58457]" />
                <span>Gift Recommendation Quiz</span>
              </button>
            </div>

            {/* Trust and reassurance row */}
            <div className="pt-6 border-t border-[#E8E2D8] grid grid-cols-3 gap-4 text-xs text-[#5C574F]">
              <div className="flex items-start gap-2">
                <HeartHandshake className="w-4 h-4 text-[#A58457] shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-[#1C1A18]">Artisan Keepsakes</p>
                  <p className="text-[11px] text-[#7A746B]">Reusable linen & wood chests</p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-[#A58457] shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-[#1C1A18]">Handwritten Note</p>
                  <p className="text-[11px] text-[#7A746B]">Complimentary calligraphy card</p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <CalendarCheck className="w-4 h-4 text-[#A58457] shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-[#1C1A18]">Date Scheduling</p>
                  <p className="text-[11px] text-[#7A746B]">Arrives exactly on the day</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: High-Res Focal Visual Showcase */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Outer decorative gold hairline border container with 8px radius */}
              <div className="relative rounded-[8px] overflow-hidden border border-[#D9D2C7] bg-white shadow-xl">
                <img
                  src="/src/assets/images/hero_luxury_gift_box_1791315976640.jpg"
                  alt="Marvel Me luxury bespoke gift box wrapped with gold ribbon"
                  referrerPolicy="no-referrer"
                  className="w-full h-[360px] sm:h-[460px] object-cover object-center transform hover:scale-[1.01] transition-transform duration-700"
                />

                {/* Subtle luxury overlay card at bottom right */}
                <div className="absolute bottom-4 left-4 right-4 sm:left-auto sm:right-4 sm:max-w-xs bg-[#FAF7F2]/95 backdrop-blur-md p-4 rounded-[8px] border border-[#C5A880]/30 shadow-lg">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[#C5A880]">★★★★★</span>
                    <span className="text-xs font-semibold text-[#1C1A18] tabular-nums">4.98 / 5.0</span>
                  </div>
                  <p className="text-xs text-[#4A4641] leading-relaxed italic">
                    “The box opened like a dream. You can physically feel the care in every fold of ribbon.”
                  </p>
                  <div className="mt-2 text-[11px] text-[#8C6D3B] font-medium flex items-center justify-between">
                    <span>Verified Gift Recipient</span>
                    <button
                      onClick={() => {
                        setCurrentView('shop');
                        setSelectedCategoryFilter('Gift Hampers');
                      }}
                      className="underline hover:text-[#1C1A18] cursor-pointer"
                    >
                      Shop Hampers
                    </button>
                  </div>
                </div>

              </div>

              {/* Decorative Subtle Accent Frame */}
              <div
                aria-hidden="true"
                className="hidden sm:block absolute -top-3 -right-3 w-full h-full border border-[#C5A880]/40 rounded-[8px] pointer-events-none -z-10"
              />

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
