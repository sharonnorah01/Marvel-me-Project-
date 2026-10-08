import React from 'react';
import { useCart } from '../context/CartContext';
import { 
  Gift, 
  Briefcase, 
  UtensilsCrossed, 
  Sparkles, 
  Ribbon, 
  ArrowRight,
  Award
} from 'lucide-react';
import { handleImageFallback } from '../utils/images';

export interface MasterpieceCategory {
  id: string;
  name: string;
  badge: string;
  tagline: string;
  description: string;
  image: string;
  featureHighlight: string;
  count: number;
}

export const MASTERPIECE_CATEGORIES: MasterpieceCategory[] = [
  {
    id: 'Gift Hampers',
    name: 'Gift Hampers',
    badge: 'Artisanal Hampers',
    tagline: 'Sensory comforts, wild honeycomb & comforting amber glow',
    description: 'Housed in tactile keepsake linen chests, crafted to slow down time and awaken the senses with small-batch delicacies.',
    image: '/images/product_luxury_hamper.jpg',
    featureHighlight: 'Keepsake Linen Chests',
    count: 4,
  },
  {
    id: 'Corporate Gifting',
    name: 'Corporate Gifting',
    badge: 'Executive & VIP',
    tagline: 'Bespoke executive suites, debossed notebooks & machined brass pens',
    description: 'Distinguished enterprise appreciation designed without cheap promotional logos, featuring heirloom notebooks with wooden buttons.',
    image: '/images/notebook-1.jpg', // notebook-1 as requested
    featureHighlight: 'notebook-1 Cover Suite',
    count: 2,
  },
  {
    id: 'Picnics',
    name: 'Picnics',
    badge: 'Al Fresco Dining',
    tagline: 'Handwoven willow baskets, Belgian washed linen & crystal flutes',
    description: 'Delivered ready-to-unfurl with artisanal cheese boards, chilled botanical pressés, and brass-lantern candlelight.',
    image: '/images/product_luxury_picnic.jpg',
    featureHighlight: 'Belgian Linen & Crystal',
    count: 2,
  },
  {
    id: 'Events Special',
    name: 'Events Special',
    badge: 'Weddings & Galas',
    tagline: 'Celebration flutes, guestbook keepsakes & bespoke favors',
    description: 'White-glove event styling for weddings, galas, milestone promotions, and private celebrations.',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=900&auto=format&fit=crop',
    featureHighlight: 'Bespoke Event Monograms',
    count: 2,
  },
  {
    id: 'Season Greetings',
    name: 'Season Greetings',
    badge: 'Holiday Reveries',
    tagline: 'Winter spiced dark chocolates, pine candles & festive warmth',
    description: 'Celebrate the solstice and festive holidays with comforting seasonal harvest honey and amber cedarwood aromas.',
    image: 'https://images.unsplash.com/photo-1512909006721-3d6018887383?q=80&w=900&auto=format&fit=crop',
    featureHighlight: 'Spiced Cocoa & Pine Candles',
    count: 2,
  },
];

export const CuratedMasterpiecesSection: React.FC = () => {
  const { setSelectedCategoryFilter, setCurrentView, setSearchQuery } = useCart();

  const handleNavigateToCategory = (categoryName: string) => {
    setSelectedCategoryFilter(categoryName);
    setSearchQuery('');
    setCurrentView('shop');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getCategoryIcon = (categoryName: string) => {
    switch (categoryName) {
      case 'Gift Hampers':
        return Gift;
      case 'Corporate Gifting':
        return Briefcase;
      case 'Picnics':
        return UtensilsCrossed;
      case 'Events Special':
        return Sparkles;
      case 'Season Greetings':
        return Ribbon;
      default:
        return Award;
    }
  };

  return (
    <section id="curated-masterpieces" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      
      {/* Clean Title & Eyebrow Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#E8E2D8] pb-6">
        <div className="space-y-2 max-w-2xl">
          <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.25em] text-[#daaf37] font-semibold">
            <Award className="w-3.5 h-3.5 text-[#daaf37]" />
            <span>CURATED MASTERPIECES</span>
          </div>

          <h2 className="font-serif-luxury text-3xl sm:text-4xl text-[#222222] font-medium leading-tight">
            Curated Masterpieces
          </h2>

          <p className="text-xs sm:text-sm text-[#66615B] leading-relaxed">
            Explore our signature collections across five bespoke disciplines. From executive corporate suites featuring heirloom notebook-1 bindings to open-air picnic reveries and festive holiday celebrations.
          </p>
        </div>

        <button
          onClick={() => {
            setSelectedCategoryFilter('All');
            setSearchQuery('');
            setCurrentView('shop');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="text-xs font-semibold text-[#222222] hover:text-[#daaf37] flex items-center gap-1.5 transition-colors cursor-pointer self-start md:self-end"
        >
          <span>Explore All Curations</span>
          <ArrowRight className="w-3.5 h-3.5 text-[#daaf37]" />
        </button>
      </div>

      {/* The 5 Category Cards Grid with Direct Navigation */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
        {MASTERPIECE_CATEGORIES.map((cat) => {
          const Icon = getCategoryIcon(cat.name);

          return (
            <div
              key={cat.id}
              onClick={() => handleNavigateToCategory(cat.name)}
              className="group relative rounded-[10px] overflow-hidden bg-white border border-[#E2DBD0] hover:border-[#daaf37] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer hover:-translate-y-1.5"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  handleNavigateToCategory(cat.name);
                }
              }}
            >
              {/* Top Image Preview with Badge */}
              <div className="aspect-[4/3] w-full relative overflow-hidden bg-[#F2EDE4]">
                <img
                  src={cat.image}
                  alt={cat.name}
                  onError={(e) => handleImageFallback(e, cat.name)}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                
                {/* Category Badge */}
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-[4px] text-[10px] font-semibold uppercase tracking-wider bg-[#FAF7F2]/95 text-[#222222] backdrop-blur-sm border border-[#E2DBD0] shadow-sm">
                    {cat.badge}
                  </span>
                </div>

                {/* Category Title on image overlay */}
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <div className="flex items-center gap-2">
                    <div className="p-1 rounded-[4px] bg-[#daaf37]/20 text-[#daaf37]">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="font-serif-luxury text-xl font-medium leading-none drop-shadow-sm">
                      {cat.name}
                    </span>
                  </div>
                </div>
              </div>

              {/* Card Content & Details */}
              <div className="p-4 sm:p-5 space-y-3 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <p className="text-xs text-[#5C574F] line-clamp-2 leading-relaxed">
                    {cat.tagline}
                  </p>

                  <div className="pt-1">
                    <span className="text-[10px] px-2.5 py-1 rounded-[4px] font-medium bg-[#FAF7F2] text-[#7A746B] border border-[#EAE4D8] block truncate">
                      ✦ {cat.featureHighlight}
                    </span>
                  </div>
                </div>

                {/* Direct Navigation Action Link */}
                <div className="pt-3 border-t border-[#F0EAE1] flex items-center justify-between text-xs font-semibold text-[#222222] group-hover:text-[#daaf37] transition-colors">
                  <span>Open {cat.name}</span>
                  <div className="w-6 h-6 rounded-full bg-[#FAF7F2] group-hover:bg-[#222222] group-hover:text-[#daaf37] flex items-center justify-center transition-colors">
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
};
