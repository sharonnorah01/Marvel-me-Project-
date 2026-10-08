import React from 'react';
import { Hero } from './Hero';
import { CategoryNavigation } from './CategoryNavigation';
import { TreasureHuntSection } from './TreasureHuntSection';
import { CuratedMasterpiecesSection } from './CuratedMasterpiecesSection';
import { useCart } from '../context/CartContext';
import { Sparkles, ArrowRight, Ribbon, HeartHandshake, ShieldCheck, Star } from 'lucide-react';

export const HomeView: React.FC = () => {
  const { setCurrentView, setSelectedCategoryFilter, setIsQuizOpen, setIsConsultationOpen } = useCart();

  return (
    <div className="space-y-12 sm:space-y-16 lg:space-y-20">
      {/* 1 & 2. Hero and Gift Curations with reduced space */}
      <div className="space-y-2 sm:space-y-4">
        <Hero />
        <CategoryNavigation />
      </div>

      {/* 3. TREASURE HUNT Section for Personalized Gifts */}
      <TreasureHuntSection />

      {/* 4. Curated Masterpieces Section with 5 Category Cards */}
      <CuratedMasterpiecesSection />

      {/* 5. The Anatomy of a Marvel Me Hug (Editorial Craftsmanship Spotlight) */}
      <section className="bg-white py-16 sm:py-20 border-y border-[#E8E2D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <span className="text-xs uppercase tracking-widest text-[#b88e22] font-semibold">
              The Marvel Me Standard
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl text-[#222222] font-medium">
              Why our gifts feel like a hug
            </h2>
            <p className="text-sm text-[#5C574F] leading-relaxed">
              Every package is designed to awaken the senses, slow down time, and forge a heartfelt emotional connection between giver and recipient.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pillar 1 */}
            <div className="p-8 rounded-[8px] bg-[#FAF7F2] border border-[#E8E2D8] space-y-4">
              <div className="w-12 h-12 rounded-[8px] bg-white border border-[#D9D2C7] flex items-center justify-center text-[#daaf37]">
                <Ribbon className="w-6 h-6" />
              </div>
              <h3 className="font-serif-luxury text-2xl text-[#222222] font-medium">
                Atelier Gift Wrapping
              </h3>
              <p className="text-xs text-[#524E48] leading-relaxed">
                Hand-folded 180gsm cotton parchment, double-faced Italian silk ribbons, and genuine hand-stamped wax seals. Unwrapping becomes a ceremony in itself.
              </p>
              <button
                onClick={() => {
                  setCurrentView('shop');
                  setSelectedCategoryFilter('Gift Wrapping');
                }}
                className="text-xs font-semibold text-[#b88e22] hover:text-[#222222] flex items-center gap-1 cursor-pointer pt-2"
              >
                <span>View Wrapping Styles</span>
                <span>→</span>
              </button>
            </div>

            {/* Pillar 2 */}
            <div className="p-8 rounded-[8px] bg-[#FAF7F2] border border-[#E8E2D8] space-y-4">
              <div className="w-12 h-12 rounded-[8px] bg-white border border-[#D9D2C7] flex items-center justify-center text-[#daaf37]">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="font-serif-luxury text-2xl text-[#222222] font-medium">
                Penned Calligraphy Note
              </h3>
              <p className="text-xs text-[#524E48] leading-relaxed">
                No printed generic thermal slips. Your custom message is handwritten by our in-house calligraphers on gold-gilded letterpress cardstock.
              </p>
              <button
                onClick={() => {
                  setCurrentView('shop');
                  setSelectedCategoryFilter('Gift Hampers');
                }}
                className="text-xs font-semibold text-[#b88e22] hover:text-[#222222] flex items-center gap-1 cursor-pointer pt-2"
              >
                <span>Personalize Your Note</span>
                <span>→</span>
              </button>
            </div>

            {/* Pillar 3 */}
            <div className="p-8 rounded-[8px] bg-[#FAF7F2] border border-[#E8E2D8] space-y-4">
              <div className="w-12 h-12 rounded-[8px] bg-white border border-[#D9D2C7] flex items-center justify-center text-[#daaf37]">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h3 className="font-serif-luxury text-2xl text-[#222222] font-medium">
                Milestone Scheduling
              </h3>
              <p className="text-xs text-[#524E48] leading-relaxed">
                Select the exact celebration date and delivery time window. We guarantee arrival with white-glove courier care so your surprise is never early and never late.
              </p>
              <button
                onClick={() => setIsConsultationOpen(true)}
                className="text-xs font-semibold text-[#b88e22] hover:text-[#222222] flex items-center gap-1 cursor-pointer pt-2"
              >
                <span>Book Delivery Concierge</span>
                <span>→</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Interactive Gift Quiz Callout Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#222222] text-[#FAF7F2] rounded-[8px] p-8 sm:p-12 lg:p-16 border border-[#daaf37]/30 shadow-xl relative overflow-hidden">
          
          <div className="relative z-10 max-w-2xl space-y-6">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#daaf37] font-semibold">
              <Sparkles className="w-4 h-4" />
              <span>Interactive Personalization</span>
            </div>

            <h2 className="font-serif-luxury text-3xl sm:text-5xl text-[#FAF7F2] font-medium leading-tight">
              Unsure which hug they need? Take our 60-second Gift Quiz.
            </h2>

            <p className="text-sm text-[#D1C9BC] leading-relaxed">
              Answer four gentle questions about their personality, milestone, and emotional vibe. Our gifting stylists will pinpoint the exact hamper or experience to evoke true joy.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={() => setIsQuizOpen(true)}
                className="px-8 py-4 bg-[#daaf37] text-[#222222] hover:bg-[#c49b2c] text-sm font-semibold rounded-[8px] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <Sparkles className="w-4 h-4" />
                <span>Start Gift Recommendation Quiz</span>
              </button>

              <button
                onClick={() => setIsConsultationOpen(true)}
                className="px-6 py-4 bg-transparent border border-white/30 text-white hover:bg-white/10 text-sm font-medium rounded-[8px] transition-colors flex items-center justify-center cursor-pointer"
              >
                <span>Speak with a Live Stylist</span>
              </button>
            </div>
          </div>

          {/* Decorative Background Texture Accent */}
          <div
            aria-hidden="true"
            className="absolute -right-20 -bottom-20 w-96 h-96 rounded-full bg-[#daaf37]/10 blur-3xl pointer-events-none"
          />
        </div>
      </section>

      {/* 6. Customer Stories / Testimonial Wall */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <div className="text-center max-w-xl mx-auto mb-10 space-y-2">
          <div className="flex justify-center text-[#daaf37] gap-1 text-sm">
            {'★'.repeat(5)}
          </div>
          <h2 className="font-serif-luxury text-3xl text-[#222222] font-medium">
            Over 3,200 Hearts Warmed
          </h2>
          <p className="text-xs text-[#7A746B]">
            Real words from givers and recipients across the world
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-[8px] border border-[#E2DBD0] space-y-3 shadow-sm">
            <div className="flex text-[#daaf37] text-xs">★★★★★</div>
            <p className="text-xs text-[#4A4641] leading-relaxed italic">
              “My mother called me sobbing with joy. She said opening the linen chest felt like stepping into an old European perfumery. The honey and candle are heavenly.”
            </p>
            <div className="pt-2 border-t border-[#F0EAE1] flex items-center justify-between text-[11px]">
              <span className="font-semibold text-[#222222]">Beatrice Althaus</span>
              <span className="text-[#8C8479]">Zurich · The Golden Reverie</span>
            </div>
          </div>

          <div className="p-6 bg-white rounded-[8px] border border-[#E2DBD0] space-y-3 shadow-sm">
            <div className="flex text-[#daaf37] text-xs">★★★★★</div>
            <p className="text-xs text-[#4A4641] leading-relaxed italic">
              “The Provence Picnic basket transformed our 5th anniversary. The wicker basket is now our permanent keepsake in our home, and the crystal flutes are stunning.”
            </p>
            <div className="pt-2 border-t border-[#F0EAE1] flex items-center justify-between text-[11px]">
              <span className="font-semibold text-[#222222]">Dr. Liam & Sarah Croft</span>
              <span className="text-[#8C8479]">Boston, MA · Picnic Set</span>
            </div>
          </div>

          <div className="p-6 bg-white rounded-[8px] border border-[#E2DBD0] space-y-3 shadow-sm">
            <div className="flex text-[#daaf37] text-xs">★★★★★</div>
            <p className="text-xs text-[#4A4641] leading-relaxed italic">
              “We ordered 35 corporate suites for our senior partners. Marvel Me coordinated all the customized cards and scheduled deliveries flawlessly. Pure class.”
            </p>
            <div className="pt-2 border-t border-[#F0EAE1] flex items-center justify-between text-[11px]">
              <span className="font-semibold text-[#222222]">Julian Sterling</span>
              <span className="text-[#8C8479]">London · Executive Atelier</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
