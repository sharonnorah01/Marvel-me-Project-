import React from 'react';
import { useCart } from '../context/CartContext';
import { 
  Compass, 
  Sparkles, 
  Heart, 
  Baby, 
  Smile, 
  Coffee, 
  ArrowRight, 
  Award
} from 'lucide-react';
import { handleImageFallback } from '../utils/images';

export interface TreasureCategory {
  id: string;
  name: string;
  badge: string;
  tagline: string;
  description: string;
  image: string;
  personalizedFeatures: string[];
}

export const TREASURE_CATEGORIES: TreasureCategory[] = [
  {
    id: 'gifts-for-her',
    name: 'Gifts for Her',
    badge: 'Soft Glow & Radiance',
    tagline: 'Warm embraces, silk touches & botanical sanctuaries',
    description: 'Designed to pamper her senses. Every curation comes housed in an ivory linen keepsake chest, paired with hand-poured amber soy candles, wildflower honeycomb, and custom monogrammed ribbons.',
    image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=900&auto=format&fit=crop',
    personalizedFeatures: [
      'Complimentary Monogrammed Satin Ribbon',
      'Hand-Penned Gold Gilded Calligraphy Letter',
      'Bespoke Rose & Lavender Wax Seal',
    ],
  },
  {
    id: 'gifts-for-him',
    name: 'Gifts for Him',
    badge: 'Craft & Distinction',
    tagline: 'Full-grain leather, forged brass & highland single-estate roasts',
    description: 'Distinctive keepsakes crafted for the gentleman of refined taste. From heirloom notebooks with wooden button closures to smoked rosemary provisions and solid brass writing instruments.',
    image: '/images/notebook-1.jpg',
    personalizedFeatures: [
      'Blind-Debossed Monogram on Hardcover Notebook',
      'Solid Brass Machined Rollerball Pen Engraving',
      'Black Matte Ceramic Keepsake Jar with Wax Seal',
    ],
  },
  {
    id: 'baby-corner',
    name: 'Baby Corner',
    badge: 'Pure Gentleness',
    tagline: 'Organic cloud cotton, heirloom rattles & nursery milestones',
    description: 'Welcome little miracles into the world with pure, gentle warmth. Hypoallergenic organic cotton blankets, handcrafted wooden rattles, and keepsake memory boxes created to cherish baby milestones forever.',
    image: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?q=80&w=900&auto=format&fit=crop',
    personalizedFeatures: [
      'Embroidered Baby Name on Muslin Cloud Blanket',
      'Engraved Natural Beechwood Birth Milestone Disc',
      'Hand-Lettered Welcome to the World Calligraphy Card',
    ],
  },
  {
    id: 'kids-teens',
    name: 'Kids & Teens',
    badge: 'Wonder & Discovery',
    tagline: 'Stargazer adventure kits, creative arts & secret keepsake trunks',
    description: 'Fuel their curiosity and imagination with engaging, elevated treasures. High-grade artist watercolors, constellation stargazing compasses, and secret-lock journals designed to celebrate their unique dreams.',
    image: 'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?q=80&w=900&auto=format&fit=crop',
    personalizedFeatures: [
      'Name Foil-Embossed on Creative Sketchbook or Journal',
      'Custom Constellation Star Map with Child’s Birthday',
      'Secret Brass Key & Personalized Nameplate',
    ],
  },
  {
    id: 'gifts-for-me',
    name: 'Gifts for Me',
    badge: 'Sacred Solitude',
    tagline: 'Mindful slow living, restorative rituals & tranquil bath sanctuaries',
    description: 'Because your soul deserves a heartfelt hug. Treat yourself to guilty-pleasure artisanal chocolates, Himalayan herbal bath soaks, and slow-burning amber candles crafted to turn your home into an opulent refuge.',
    image: '/images/gifts_for_me.jpg',
    personalizedFeatures: [
      'Personal Intention & Affirmation Letterpress Card',
      'Choice of Hand-Blended Botanical Scent Profile',
      'Complimentary Gold Foil Velvet Gift Box with Wax Seal',
    ],
  },
];

export const TreasureHuntSection: React.FC = () => {
  const { openTreasureCategory, setCurrentView, setSelectedCategoryFilter } = useCart();

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'gifts-for-her':
        return Heart;
      case 'gifts-for-him':
        return Award;
      case 'baby-corner':
        return Baby;
      case 'kids-teens':
        return Smile;
      case 'gifts-for-me':
        return Coffee;
      default:
        return Sparkles;
    }
  };

  return (
    <section id="treasure-hunt" className="bg-white py-16 sm:py-20 border-y border-[#E8E2D8] relative overflow-hidden">
      
      {/* Subtle Background Radial Glow */}
      <div 
        aria-hidden="true" 
        className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#daaf37]/5 rounded-full blur-3xl pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#daaf37]">
              <Compass className="w-3.5 h-3.5 text-[#daaf37]" />
              <span>TREASURE HUNT · PERSONALIZED GIFTS</span>
            </div>

            <h2 className="font-serif-luxury text-3xl sm:text-5xl text-[#222222] font-medium leading-tight">
              Uncover the Perfect Personalized Treasure
            </h2>

            <p className="text-sm text-[#66615B] leading-relaxed">
              Every soul receives love differently. Click on any category card below to open a curated page of gifts handcrafted, monogrammed, and styled for the ones who matter most.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                setSelectedCategoryFilter('All');
                setCurrentView('shop');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-5 py-3 bg-[#daaf37] text-[#222222] hover:bg-[#c49b2c] text-xs font-semibold rounded-[8px] transition-all flex items-center gap-2 cursor-pointer shadow-sm border border-[#daaf37]"
            >
              <span>Explore All Catalog</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#222222]" />
            </button>
          </div>
        </div>

        {/* 5 Category Cards Grid - Directly opens the category page */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {TREASURE_CATEGORIES.map((category) => {
            const Icon = getCategoryIcon(category.id);

            return (
              <div
                key={category.id}
                onClick={() => openTreasureCategory(category.id)}
                className="group relative rounded-[10px] overflow-hidden bg-white border border-[#E2DBD0] hover:border-[#daaf37] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer hover:-translate-y-1.5"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    openTreasureCategory(category.id);
                  }
                }}
              >
                {/* Top Image Preview with Badge */}
                <div className="aspect-[4/3] w-full relative overflow-hidden bg-[#F2EDE4]">
                  <img
                    src={category.image}
                    alt={category.name}
                    onError={(e) => handleImageFallback(e, category.id)}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-[4px] text-[10px] font-semibold uppercase tracking-wider bg-[#FAF7F2]/95 text-[#222222] backdrop-blur-sm border border-[#E2DBD0] shadow-sm">
                      {category.badge}
                    </span>
                  </div>

                  {/* Category Title on image overlay */}
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <div className="flex items-center gap-2">
                      <div className="p-1 rounded-[4px] bg-[#daaf37]/20 text-[#daaf37]">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="font-serif-luxury text-xl font-medium leading-none drop-shadow-sm">
                        {category.name}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Card Content & Details */}
                <div className="p-4 sm:p-5 space-y-3 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <p className="text-xs text-[#5C574F] line-clamp-2 leading-relaxed">
                      {category.tagline}
                    </p>

                    <div className="pt-1">
                      {category.personalizedFeatures.slice(0, 1).map((feat, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] px-2.5 py-1 rounded-[4px] font-medium bg-[#FAF7F2] text-[#7A746B] border border-[#EAE4D8] block truncate"
                        >
                          ✦ {feat}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Link Button */}
                  <div className="pt-3 border-t border-[#F0EAE1] flex items-center justify-between text-xs font-semibold text-[#222222] group-hover:text-[#daaf37] transition-colors">
                    <span>Open {category.name}</span>
                    <div className="w-6 h-6 rounded-full bg-[#FAF7F2] group-hover:bg-[#222222] group-hover:text-[#daaf37] flex items-center justify-center transition-colors">
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
