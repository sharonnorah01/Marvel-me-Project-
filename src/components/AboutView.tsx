import React from 'react';
import { useCart } from '../context/CartContext';
import { Heart, Sparkles, Ribbon, ShieldCheck, ArrowRight, Award, Compass, Users } from 'lucide-react';

export const AboutView: React.FC = () => {
  const { setCurrentView, setIsQuizOpen, setIsConsultationOpen } = useCart();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16 lg:space-y-24">
      
      {/* Brand Hero Story */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#8C6D3B] font-semibold">
            <span>Our Origin & Creed</span>
            <span aria-hidden="true">·</span>
            <span>Artisanal Luxury</span>
          </div>

          <h1 className="font-serif-luxury text-4xl sm:text-5xl lg:text-6xl text-[#1C1A18] font-medium leading-tight text-balance">
            We believe gifting should feel like a genuine, heartfelt hug.
          </h1>

          <div className="space-y-4 text-sm sm:text-base text-[#524E48] leading-relaxed">
            <p>
              In a digital world overflowing with hurried one-click deliveries and impersonal gift cards tucked in plain cardboard, <strong>Marvel Me</strong> was founded to restore reverence, tenderness, and tactile joy to the act of giving.
            </p>
            <p>
              A true gift is not merely an object; it is an emotional proxy for your physical presence. When someone is grieving, celebrating an anniversary, embarking on a new beginning, or simply needing to know they are held in your thoughts, the parcel they hold in their hands should convey warmth before the seal is even broken.
            </p>
          </div>

          <div className="pt-2 flex items-center gap-4">
            <button
              onClick={() => setCurrentView('shop')}
              className="px-6 py-3.5 bg-[#1C1A18] text-[#FAF7F2] hover:bg-[#33302C] text-xs font-semibold rounded-[8px] transition-colors flex items-center gap-2 cursor-pointer shadow-sm"
            >
              <span>Explore Our Curations</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#C5A880]" />
            </button>

            <button
              onClick={() => setIsConsultationOpen(true)}
              className="px-6 py-3.5 bg-white border border-[#D9D2C7] text-[#2D2A26] hover:border-[#A58457] text-xs font-semibold rounded-[8px] transition-colors cursor-pointer"
            >
              <span>Meet a Gifting Stylist</span>
            </button>
          </div>
        </div>

        {/* Story Visual Frame */}
        <div className="lg:col-span-5 relative">
          <div className="rounded-[8px] overflow-hidden border border-[#D9D2C7] bg-white shadow-xl relative">
            <img
              src="/src/assets/images/product_gift_wrapping_1791316011135.jpg"
              alt="Marvel Me gift wrapping craftsmanship"
              className="w-full h-[440px] object-cover"
            />
            <div className="p-5 bg-white/95 backdrop-blur-md border-t border-[#E8E2D8] space-y-1">
              <span className="text-[11px] uppercase tracking-widest text-[#8C6D3B] font-semibold">
                The Atelier Workshop
              </span>
              <p className="text-xs text-[#4A4641] italic">
                “Every bow is hand-measured, every wax seal hand-poured at 140°C, and every word penned with archival Japanese sumi ink.”
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The 4 Principles of Marvel Me Gifting */}
      <section className="bg-white p-8 sm:p-12 lg:p-16 rounded-[8px] border border-[#E2DBD0] space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs uppercase tracking-widest text-[#8C6D3B] font-semibold">
            Uncompromising Standards
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl text-[#1C1A18] font-medium">
            The Marvel Me Integrity Pledge
          </h2>
          <p className="text-xs sm:text-sm text-[#66615B]">
            Four promises that govern every single hamper, picnic, and surprise box that departs our studio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-5 rounded-[8px] bg-[#FAF7F2] border border-[#EAE4D8] space-y-3">
            <div className="w-10 h-10 rounded-[6px] bg-white border border-[#D9D2C7] flex items-center justify-center text-[#8C6D3B]">
              <Ribbon className="w-5 h-5" />
            </div>
            <h3 className="font-serif-luxury text-xl text-[#1C1A18] font-medium">
              1. The Ritual of Unwrapping
            </h3>
            <p className="text-xs text-[#524E48] leading-relaxed">
              We never use plastic tape, cling wraps, or commercial foam peanuts. We use heavyweight cotton papers, velvet ribbons, and tissue scented with botanical oils.
            </p>
          </div>

          <div className="p-5 rounded-[8px] bg-[#FAF7F2] border border-[#EAE4D8] space-y-3">
            <div className="w-10 h-10 rounded-[6px] bg-white border border-[#D9D2C7] flex items-center justify-center text-[#8C6D3B]">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="font-serif-luxury text-xl text-[#1C1A18] font-medium">
              2. Small-Batch Artisans Only
            </h3>
            <p className="text-xs text-[#524E48] leading-relaxed">
              From our raw wildflower honey to single-origin bean chocolates and soy candles, we partner strictly with independent ethical purveyors.
            </p>
          </div>

          <div className="p-5 rounded-[8px] bg-[#FAF7F2] border border-[#EAE4D8] space-y-3">
            <div className="w-10 h-10 rounded-[6px] bg-white border border-[#D9D2C7] flex items-center justify-center text-[#8C6D3B]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-serif-luxury text-xl text-[#1C1A18] font-medium">
              3. Pen Over Print
            </h3>
            <p className="text-xs text-[#524E48] leading-relaxed">
              Every message card is hand-scribed in flowing cursive. We honor your personal words with authentic 450gsm letterpress cardstock.
            </p>
          </div>

          <div className="p-5 rounded-[8px] bg-[#FAF7F2] border border-[#EAE4D8] space-y-3">
            <div className="w-10 h-10 rounded-[6px] bg-white border border-[#D9D2C7] flex items-center justify-center text-[#8C6D3B]">
              <Compass className="w-5 h-5" />
            </div>
            <h3 className="font-serif-luxury text-xl text-[#1C1A18] font-medium">
              4. Milestone Timing
            </h3>
            <p className="text-xs text-[#524E48] leading-relaxed">
              A birthday gift arriving three days late loses its magic. Our scheduled courier network delivers directly on the anniversary date.
            </p>
          </div>
        </div>
      </section>

      {/* Corporate & Bespoke Concierge Spotlight */}
      <section className="bg-[#1C1A18] text-[#FAF7F2] rounded-[8px] p-8 sm:p-12 lg:p-16 border border-[#C5A880]/30 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-8 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#C5A880] font-semibold">
            <Award className="w-4 h-4" />
            <span>Corporate & Executive Concierge</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl text-[#FAF7F2] font-medium">
            Elevate executive milestones, client gratitude & festive celebrations
          </h2>
          <p className="text-xs sm:text-sm text-[#D1C9BC] leading-relaxed max-w-2xl">
            Whether honoring a retiring board director, sending bespoke appreciation to 50 VIP partners, or outfitting a luxury destination wedding, Marvel Me offers full white-glove corporate styling with subtle blind-debossed client monograms.
          </p>
          <div className="pt-2 flex items-center gap-3">
            <button
              onClick={() => setIsConsultationOpen(true)}
              className="px-6 py-3 bg-[#C5A880] text-[#1C1A18] hover:bg-[#D4AF37] text-xs font-semibold rounded-[8px] transition-colors cursor-pointer shadow-sm"
            >
              Book Corporate Gifting Stylist
            </button>
            <button
              onClick={() => setCurrentView('shop')}
              className="px-6 py-3 bg-transparent border border-white/20 text-white hover:bg-white/10 text-xs font-medium rounded-[8px] transition-colors cursor-pointer"
            >
              View Corporate Suites
            </button>
          </div>
        </div>

        <div className="lg:col-span-4 p-6 bg-white/5 backdrop-blur-md rounded-[8px] border border-white/10 space-y-3 text-xs">
          <div className="font-serif-luxury text-lg text-[#C5A880]">Corporate Capabilities</div>
          <ul className="space-y-2 text-[#D1C9BC]">
            <li>✦ Multi-destination global delivery coordination</li>
            <li>✦ Custom Pantone silk ribbon matching</li>
            <li>✦ Bespoke laser engraving & blind debossing</li>
            <li>✦ Dedicated senior concierge account manager</li>
          </ul>
        </div>
      </section>

    </div>
  );
};
