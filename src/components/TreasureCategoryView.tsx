import React, { useState, useMemo } from 'react';
import { useCart } from '../context/CartContext';
import { PRODUCTS, Product } from '../data/products';
import { ProductCard } from './ProductCard';
import { TREASURE_CATEGORIES } from './TreasureHuntSection';
import { 
  Compass, 
  Sparkles, 
  ArrowLeft, 
  ArrowRight, 
  Feather, 
  Award, 
  Check, 
  Calendar, 
  SlidersHorizontal, 
  ArrowUpDown,
  ShoppingBag,
  Heart,
  Baby,
  Smile,
  Coffee,
  ShieldCheck
} from 'lucide-react';
import { handleImageFallback } from '../utils/images';

export const TreasureCategoryView: React.FC = () => {
  const { 
    activeTreasureCategory, 
    openTreasureCategory, 
    setCurrentView, 
    setIsConsultationOpen,
    setIsQuizOpen
  } = useCart();

  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'rating'>('featured');
  const [priceFilter, setPriceFilter] = useState<'All' | 'under150' | '150to200' | 'over200'>('All');

  // Find active category configuration
  const currentCategory = useMemo(() => {
    return (
      TREASURE_CATEGORIES.find(
        (c) => c.id === activeTreasureCategory || c.name.toLowerCase() === activeTreasureCategory.toLowerCase()
      ) || TREASURE_CATEGORIES[0]
    );
  }, [activeTreasureCategory]);

  // Filter products matching this category
  const categoryProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      // Check occasions or category matching
      const hasOccasion = product.occasions.some(
        (occ) => occ.toLowerCase() === currentCategory.name.toLowerCase()
      );
      
      // Category specific fallbacks/inclusions
      let matches = hasOccasion;
      if (currentCategory.id === 'gifts-for-her') {
        matches = matches || product.occasions.includes('Romantic') || product.occasions.includes('Self-Care') || product.id === 'the-golden-reverie-hamper';
      } else if (currentCategory.id === 'gifts-for-him') {
        matches = matches || product.category === 'Corporate Gifting' || product.id === 'the-artisan-heritage-valet-suite';
      } else if (currentCategory.id === 'baby-corner') {
        matches = matches || product.id === 'heirloom-baby-lullaby-chest';
      } else if (currentCategory.id === 'kids-teens') {
        matches = matches || product.id === 'celestial-stargazer-adventure-chest' || product.category === 'Gift Surprises';
      } else if (currentCategory.id === 'gifts-for-me') {
        matches = matches || product.occasions.includes('Self-Care') || product.id === 'serenity-solitude-ritual-hamper';
      }

      // Price filter
      if (priceFilter === 'under150' && product.price >= 150) return false;
      if (priceFilter === '150to200' && (product.price < 150 || product.price > 200)) return false;
      if (priceFilter === 'over200' && product.price <= 200) return false;

      return matches;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    });
  }, [currentCategory, priceFilter, sortBy]);

  const otherCategories = useMemo(() => {
    return TREASURE_CATEGORIES.filter((c) => c.id !== currentCategory.id);
  }, [currentCategory]);

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

  const CategoryIcon = getCategoryIcon(currentCategory.id);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      
      {/* 1. Breadcrumb & Back Navigation */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#E8E2D8] pb-4">
        <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-xs text-[#7A746B]">
          <button
            onClick={() => {
              setCurrentView('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="hover:text-[#daaf37] transition-colors cursor-pointer"
          >
            Home
          </button>
          <span>/</span>
          <button
            onClick={() => {
              setCurrentView('home');
              setTimeout(() => {
                document.getElementById('treasure-hunt')?.scrollIntoView({ behavior: 'smooth' });
              }, 100);
            }}
            className="hover:text-[#daaf37] transition-colors cursor-pointer"
          >
            Treasure Hunt
          </button>
          <span>/</span>
          <span className="font-semibold text-[#222222]">{currentCategory.name}</span>
        </nav>

        <button
          onClick={() => {
            setCurrentView('home');
            setTimeout(() => {
              document.getElementById('treasure-hunt')?.scrollIntoView({ behavior: 'smooth' });
            }, 100);
          }}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#5C574F] hover:text-[#daaf37] transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to All Treasure Categories</span>
        </button>
      </div>

      {/* 2. Editorial Hero Banner for this Specific Category */}
      <div className="bg-white rounded-[10px] border border-[#E2DBD0] shadow-sm overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0 items-center">
        
        {/* Left Column: Editorial Information */}
        <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 space-y-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#daaf37]">
              <Compass className="w-3.5 h-3.5 text-[#daaf37]" />
              <span>TREASURE HUNT · {currentCategory.badge}</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-[8px] bg-[#FAF7F2] border border-[#daaf37]/40 flex items-center justify-center text-[#daaf37]">
                <CategoryIcon className="w-5 h-5" />
              </div>
              <h1 className="font-serif-luxury text-3xl sm:text-5xl text-[#222222] font-medium leading-tight">
                {currentCategory.name}
              </h1>
            </div>

            <p className="text-base text-[#4A4641] font-serif-luxury italic">
              “{currentCategory.tagline}”
            </p>

            <p className="text-xs sm:text-sm text-[#66615B] leading-relaxed max-w-xl">
              {currentCategory.description}
            </p>
          </div>

          {/* Included Signature Personalization Suite */}
          <div className="bg-[#FAF7F2] p-4 sm:p-5 rounded-[8px] border border-[#E8E2D8] space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-[#222222] flex items-center gap-1.5">
              <Feather className="w-3.5 h-3.5 text-[#daaf37]" />
              <span>Signature Personalization for {currentCategory.name}:</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-[#524E48]">
              {currentCategory.personalizedFeatures.map((feat, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#daaf37] flex-shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-[#daaf37] flex-shrink-0" />
                <span>White-Glove Scheduled Courier Delivery</span>
              </div>
            </div>
          </div>

          {/* Quick Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-1">
            <button
              onClick={() => setIsConsultationOpen(true)}
              className="px-5 py-3 bg-[#daaf37] text-[#222222] hover:bg-[#c49b2c] text-xs font-semibold rounded-[8px] transition-all flex items-center gap-2 cursor-pointer shadow-sm"
            >
              <Calendar className="w-4 h-4" />
              <span>Book 1-on-1 Stylist for {currentCategory.name}</span>
            </button>

            <button
              onClick={() => setIsQuizOpen(true)}
              className="px-4 py-3 bg-white text-[#2D2A26] border border-[#D9D2C7] hover:border-[#daaf37] text-xs font-medium rounded-[8px] transition-colors flex items-center gap-1.5 cursor-pointer shadow-sm"
            >
              <Sparkles className="w-4 h-4 text-[#daaf37]" />
              <span>Take Gift Recommendation Quiz</span>
            </button>
          </div>
        </div>

        {/* Right Column: Hero Category Photo */}
        <div className="lg:col-span-5 h-72 sm:h-96 lg:h-full relative overflow-hidden bg-[#F2EDE4] min-h-[360px]">
          <img
            src={currentCategory.image}
            alt={currentCategory.name}
            onError={(e) => handleImageFallback(e, currentCategory.id)}
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
          
          <div className="absolute bottom-6 left-6 right-6 text-white space-y-1.5">
            <span className="px-2.5 py-1 rounded-[4px] bg-[#daaf37] text-[#222222] text-[10px] font-semibold uppercase tracking-wider inline-block">
              Curated World
            </span>
            <div className="font-serif-luxury text-2xl font-medium">
              Every package wrapped with devotion
            </div>
            <p className="text-xs text-[#EAE4D8]">
              Includes wax seal, silk ribbon bow, and hand-penned card.
            </p>
          </div>
        </div>

      </div>

      {/* 3. Filter & Sort Strip */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-4 rounded-[8px] border border-[#E2DBD0] shadow-sm">
        <div className="flex items-center gap-2 text-xs font-semibold text-[#222222]">
          <ShoppingBag className="w-4 h-4 text-[#daaf37]" />
          <span>{categoryProducts.length} Curated Gifts in {currentCategory.name}</span>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          {/* Price Range Filter */}
          <div className="flex items-center gap-1.5 text-xs text-[#5C574F]">
            <SlidersHorizontal className="w-3.5 h-3.5 text-[#8C8479]" />
            <span className="hidden sm:inline">Price:</span>
            <select
              value={priceFilter}
              onChange={(e) => setPriceFilter(e.target.value as any)}
              className="bg-[#FAF7F2] border border-[#D9D2C7] rounded-[6px] px-2.5 py-1.5 text-xs font-medium text-[#2D2A26] focus:outline-none focus:border-[#daaf37] cursor-pointer"
            >
              <option value="All">All Prices</option>
              <option value="under150">Under $150</option>
              <option value="150to200">$150 – $200</option>
              <option value="over200">Over $200</option>
            </select>
          </div>

          {/* Sort By Dropdown */}
          <div className="flex items-center gap-1.5 text-xs text-[#5C574F]">
            <ArrowUpDown className="w-3.5 h-3.5 text-[#8C8479]" />
            <span className="hidden sm:inline">Sort:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-[#FAF7F2] border border-[#D9D2C7] rounded-[6px] px-2.5 py-1.5 text-xs font-medium text-[#2D2A26] focus:outline-none focus:border-[#daaf37] cursor-pointer"
            >
              <option value="featured">Featured Curations</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Customer Rating</option>
            </select>
          </div>
        </div>
      </div>

      {/* 4. Products Grid */}
      {categoryProducts.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-[8px] border border-[#E2DBD0] space-y-4">
          <div className="w-16 h-16 rounded-full bg-[#FAF7F2] border border-[#D9D2C7] flex items-center justify-center mx-auto text-[#daaf37]">
            <Compass className="w-7 h-7" />
          </div>
          <h3 className="font-serif-luxury text-2xl text-[#222222]">
            No gifts match your price selection
          </h3>
          <p className="text-xs text-[#7A746B] max-w-md mx-auto">
            Try resetting your price filters to explore our full selection of {currentCategory.name}.
          </p>
          <button
            onClick={() => setPriceFilter('All')}
            className="px-5 py-2.5 bg-[#222222] text-[#FAF7F2] text-xs font-semibold rounded-[6px] hover:bg-[#333333] transition-colors cursor-pointer"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {categoryProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}

      {/* 5. Custom Stylist Consultation Invitation */}
      <div className="bg-[#222222] text-[#FAF7F2] rounded-[10px] p-8 sm:p-12 border border-[#daaf37]/30 shadow-lg relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-3 max-w-xl relative z-10">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#daaf37] font-semibold">
            <Feather className="w-4 h-4" />
            <span>Bespoke Concierge</span>
          </div>
          <h3 className="font-serif-luxury text-2xl sm:text-3xl text-[#FAF7F2] font-medium leading-tight">
            Can’t find the exact curation for {currentCategory.name}?
          </h3>
          <p className="text-xs sm:text-sm text-[#D1C9BC] leading-relaxed">
            Our master gifting stylists can source rare artisanal chocolates, hand-dye Italian ribbons, or engrave customized family crests. Book a private consultation and we will handle every detail.
          </p>
        </div>

        <button
          onClick={() => setIsConsultationOpen(true)}
          className="px-6 py-4 bg-[#daaf37] text-[#222222] hover:bg-[#c49b2c] text-xs font-semibold rounded-[8px] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md whitespace-nowrap relative z-10"
        >
          <Calendar className="w-4 h-4" />
          <span>Book Custom Gift Consultation</span>
        </button>

        <div
          aria-hidden="true"
          className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-[#daaf37]/10 blur-3xl pointer-events-none"
        />
      </div>

      {/* 6. Switch to Other Treasure Worlds */}
      <div className="space-y-4 pt-4 border-t border-[#E8E2D8]">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-[11px] uppercase tracking-widest text-[#daaf37] font-semibold">
              Explore More Worlds
            </span>
            <h3 className="font-serif-luxury text-xl sm:text-2xl text-[#222222] font-medium">
              Other Treasure Hunt Categories
            </h3>
          </div>
          <button
            onClick={() => {
              setCurrentView('home');
              setTimeout(() => {
                document.getElementById('treasure-hunt')?.scrollIntoView({ behavior: 'smooth' });
              }, 100);
            }}
            className="text-xs font-semibold text-[#b88e22] hover:text-[#222222] flex items-center gap-1 cursor-pointer"
          >
            <span>View All Worlds</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {otherCategories.map((other) => {
            const OtherIcon = getCategoryIcon(other.id);

            return (
              <button
                key={other.id}
                type="button"
                onClick={() => openTreasureCategory(other.id)}
                className="group p-4 bg-white rounded-[8px] border border-[#E2DBD0] hover:border-[#daaf37] hover:shadow-md transition-all text-left flex items-center gap-4 cursor-pointer"
              >
                <div className="w-14 h-14 rounded-[6px] overflow-hidden bg-[#F0ECE4] flex-shrink-0 relative">
                  <img
                    src={other.image}
                    alt={other.name}
                    onError={(e) => handleImageFallback(e, other.id)}
                    className="w-full h-full object-cover transition-transform group-hover:scale-105"
                  />
                </div>

                <div className="space-y-0.5 flex-1 min-w-0">
                  <div className="flex items-center gap-1.5 text-[#daaf37]">
                    <OtherIcon className="w-3.5 h-3.5" />
                    <span className="text-[10px] uppercase font-semibold tracking-wider">
                      {other.badge}
                    </span>
                  </div>
                  <h4 className="font-serif-luxury text-base font-semibold text-[#222222] group-hover:text-[#daaf37] transition-colors truncate">
                    {other.name}
                  </h4>
                  <p className="text-[11px] text-[#7A746B] line-clamp-1">
                    {other.tagline}
                  </p>
                </div>

                <ArrowRight className="w-4 h-4 text-[#8C8479] group-hover:text-[#daaf37] group-hover:translate-x-0.5 transition-all flex-shrink-0" />
              </button>
            );
          })}
        </div>
      </div>

    </div>
  );
};
