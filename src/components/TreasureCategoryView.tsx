import React, { useState, useMemo } from 'react';
import { useCart } from '../context/CartContext';
import { PRODUCTS, Product } from '../data/products';
import { ProductCard } from './ProductCard';
import { TREASURE_CATEGORIES } from './TreasureHuntSection';
import { 
  Compass, 
  Sparkles, 
  ArrowLeft, 
  Feather, 
  Calendar, 
  SlidersHorizontal, 
  ArrowUpDown,
  ShoppingBag
} from 'lucide-react';

export const TreasureCategoryView: React.FC = () => {
  const { 
    activeTreasureCategory, 
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

      {/* 2. Category Title Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="space-y-1.5">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#daaf37]">
            <Compass className="w-3.5 h-3.5 text-[#daaf37]" />
            <span>TREASURE HUNT · {currentCategory.badge}</span>
          </div>
          <h1 className="font-serif-luxury text-3xl sm:text-4xl text-[#222222] font-medium leading-tight">
            {currentCategory.name}
          </h1>
          <p className="text-xs sm:text-sm text-[#66615B] max-w-2xl leading-relaxed">
            {currentCategory.description}
          </p>
        </div>

        <div className="flex items-center gap-2.5 shrink-0">
          <button
            onClick={() => setIsConsultationOpen(true)}
            className="px-4 py-2.5 bg-[#daaf37] text-[#222222] hover:bg-[#c49b2c] text-xs font-semibold rounded-[8px] transition-all flex items-center gap-2 cursor-pointer shadow-sm"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Book Stylist</span>
          </button>
          <button
            onClick={() => setIsQuizOpen(true)}
            className="px-3.5 py-2.5 bg-white text-[#2D2A26] border border-[#D9D2C7] hover:border-[#daaf37] text-xs font-medium rounded-[8px] transition-colors flex items-center gap-1.5 cursor-pointer shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#daaf37]" />
            <span>Gift Quiz</span>
          </button>
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
            className="px-5 py-2.5 bg-[#daaf37] text-[#222222] text-xs font-semibold rounded-[6px] hover:bg-[#c49b2c] transition-colors cursor-pointer shadow-sm"
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

    </div>
  );
};
