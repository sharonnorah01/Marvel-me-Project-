import React, { useState, useMemo } from 'react';
import { PRODUCTS, Product } from '../data/products';
import { ProductCard } from './ProductCard';
import { useCart } from '../context/CartContext';
import { Search, Filter, SlidersHorizontal, Sparkles, X, ArrowUpDown, Compass } from 'lucide-react';
import { CATEGORIES } from './CategoryNavigation';
import { TREASURE_CATEGORIES } from './TreasureHuntSection';

export const ShopView: React.FC = () => {
  const {
    selectedCategoryFilter,
    setSelectedCategoryFilter,
    searchQuery,
    setSearchQuery,
    setIsQuizOpen,
  } = useCart();

  const [selectedTreasureCategory, setSelectedTreasureCategory] = useState<string>('All');
  const [priceRange, setPriceRange] = useState<'All' | 'under100' | '100to200' | 'over200'>('All');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'rating'>('featured');
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  // Treasure Hunt categories list for filter
  const treasureCategoriesList = [
    { id: 'All', name: 'All Treasures' },
    ...TREASURE_CATEGORIES.map((cat) => ({ id: cat.id, name: cat.name })),
  ];

  // Filtered & Sorted Products
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      // Category check
      if (selectedCategoryFilter !== 'All' && product.category !== selectedCategoryFilter) {
        return false;
      }

      // Search query check
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesName = product.name.toLowerCase().includes(query);
        const matchesDesc = product.description.toLowerCase().includes(query);
        const matchesTagline = product.tagline.toLowerCase().includes(query);
        const matchesCategory = product.category.toLowerCase().includes(query);
        const matchesOccasion = product.occasions.some((occ) => occ.toLowerCase().includes(query));
        if (!matchesName && !matchesDesc && !matchesTagline && !matchesCategory && !matchesOccasion) {
          return false;
        }
      }

      // Treasure Hunt Category check
      if (selectedTreasureCategory !== 'All') {
        const selectedCatObj = TREASURE_CATEGORIES.find((c) => c.id === selectedTreasureCategory);
        const targetName = selectedCatObj ? selectedCatObj.name : selectedTreasureCategory;

        const hasOccasion = product.occasions.some((occ) =>
          occ.toLowerCase() === targetName.toLowerCase()
        );

        let matchesTreasure = hasOccasion;
        if (selectedTreasureCategory === 'gifts-for-her') {
          matchesTreasure = matchesTreasure || product.occasions.includes('Romantic') || product.occasions.includes('Self-Care') || product.id === 'the-golden-reverie-hamper';
        } else if (selectedTreasureCategory === 'gifts-for-him') {
          matchesTreasure = matchesTreasure || product.category === 'Corporate Gifting' || product.id === 'the-artisan-heritage-valet-suite';
        } else if (selectedTreasureCategory === 'baby-corner') {
          matchesTreasure = matchesTreasure || product.id === 'heirloom-baby-lullaby-chest';
        } else if (selectedTreasureCategory === 'kids-teens') {
          matchesTreasure = matchesTreasure || product.id === 'celestial-stargazer-adventure-chest' || product.category === 'Gift Surprises';
        } else if (selectedTreasureCategory === 'gifts-for-me') {
          matchesTreasure = matchesTreasure || product.occasions.includes('Self-Care') || product.id === 'serenity-solitude-ritual-hamper';
        }

        if (!matchesTreasure) return false;
      }

      // Price range check
      if (priceRange === 'under100' && product.price >= 100) return false;
      if (priceRange === '100to200' && (product.price < 100 || product.price > 200)) return false;
      if (priceRange === 'over200' && product.price <= 200) return false;

      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    });
  }, [selectedCategoryFilter, searchQuery, selectedTreasureCategory, priceRange, sortBy]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Editorial Header */}
      <div className="border-b border-[#E8E2D8] pb-6 space-y-2">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="text-xs uppercase tracking-widest text-[#d9a300] font-semibold mb-1">
              Complete Gift Shop · Treasure Hunt & Curations
            </div>
            <h1 className="font-serif-luxury text-3xl sm:text-4xl text-[#222222] font-medium">
              Explore All Marvel Me Gifts
            </h1>
            <p className="text-xs sm:text-sm text-[#66615B] mt-1 max-w-xl">
              Explore our complete collection spanning personalized Treasure Hunt offerings and artisanal gift curations. Every item includes bespoke gift wrapping and hand-penned calligraphy.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsQuizOpen(true)}
              className="px-4 py-2 bg-white text-[#2D2A26] border border-[#D9D2C7] hover:border-[#daaf37] rounded-[8px] text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#daaf37]" />
              <span>Take Gift Quiz</span>
            </button>
            <span className="text-xs text-[#7A746B] tabular-nums font-medium">
              Showing {filteredProducts.length} of {PRODUCTS.length} gifts
            </span>
          </div>
        </div>
      </div>

      {/* Primary Category Horizontal Filter Bar */}
      <div className="space-y-4">
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none">
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategoryFilter === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategoryFilter(cat.id)}
                className={`px-4 py-2 rounded-[8px] text-xs font-medium whitespace-nowrap transition-all cursor-pointer border ${
                  isSelected
                    ? 'bg-[#222222] text-[#FAF7F2] border-[#222222] shadow-sm ring-1 ring-[#daaf37]'
                    : 'bg-white text-[#4A4641] border-[#E2DBD0] hover:border-[#daaf37] hover:bg-[#FAF7F2]'
                }`}
              >
                {cat.name}
              </button>
            );
          })}
        </div>

        {/* Secondary Filter & Sort Bar */}
        <div className="bg-white p-4 rounded-[8px] border border-[#E2DBD0] flex flex-wrap items-center justify-between gap-4 text-xs">
          
          {/* Treasure Hunt Categories Filter */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar scrollbar-none">
            <span className="font-semibold text-[#222222] uppercase tracking-wider text-[11px] shrink-0 flex items-center gap-1">
              <Compass className="w-3 h-3 text-[#daaf37]" />
              <span>All Treasures:</span>
            </span>
            <div className="flex gap-1.5 overflow-x-auto no-scrollbar scrollbar-none">
              {treasureCategoriesList.map((treasureCat) => (
                <button
                  key={treasureCat.id}
                  onClick={() => setSelectedTreasureCategory(treasureCat.id)}
                  className={`px-2.5 py-1 rounded-[6px] text-xs transition-colors cursor-pointer whitespace-nowrap ${
                    selectedTreasureCategory === treasureCat.id
                      ? 'bg-[#FAF7F2] text-[#b88e22] font-bold border border-[#daaf37] shadow-2xs'
                      : 'text-[#66615B] hover:text-[#222222]'
                  }`}
                >
                  {treasureCat.name}
                </button>
              ))}
            </div>
          </div>

          {/* Budget & Sort Controls */}
          <div className="flex items-center gap-3 ml-auto">
            {/* Budget Range */}
            <div className="flex items-center gap-1.5">
              <span className="text-[#7A746B]">Budget:</span>
              <select
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value as any)}
                className="bg-[#FAF7F2] border border-[#D9D2C7] rounded-[6px] px-2.5 py-1 text-xs focus:outline-none focus:border-[#daaf37]"
              >
                <option value="All">All Budgets</option>
                <option value="under100">Under $100</option>
                <option value="100to200">$100 - $200</option>
                <option value="over200">$200+</option>
              </select>
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-1.5">
              <span className="text-[#7A746B]">Sort:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-[#FAF7F2] border border-[#D9D2C7] rounded-[6px] px-2.5 py-1 text-xs focus:outline-none focus:border-[#daaf37]"
              >
                <option value="featured">Featured First</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>

            {/* Reset Filters */}
            {(selectedCategoryFilter !== 'All' || selectedTreasureCategory !== 'All' || priceRange !== 'All' || searchQuery) && (
              <button
                onClick={() => {
                  setSelectedCategoryFilter('All');
                  setSelectedTreasureCategory('All');
                  setPriceRange('All');
                  setSearchQuery('');
                }}
                className="text-[#991B1B] hover:underline flex items-center gap-1 font-medium cursor-pointer"
              >
                <X className="w-3.5 h-3.5" />
                <span>Reset</span>
              </button>
            )}
          </div>

        </div>
      </div>

      {/* Products Grid */}
      {filteredProducts.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-[8px] border border-[#E2DBD0] space-y-4">
          <div className="w-16 h-16 rounded-full bg-[#FAF7F2] border border-[#D9D2C7] flex items-center justify-center mx-auto text-[#daaf37]">
            <Search className="w-7 h-7" />
          </div>
          <h3 className="font-serif-luxury text-2xl text-[#222222]">
            No curations matched your filters
          </h3>
          <p className="text-xs text-[#7A746B] max-w-sm mx-auto leading-relaxed">
            Try adjusting your budget or selected treasure category to browse more gifts that feel like a hug.
          </p>
          <button
            onClick={() => {
              setSelectedCategoryFilter('All');
              setSelectedTreasureCategory('All');
              setPriceRange('All');
              setSearchQuery('');
            }}
            className="px-6 py-2.5 bg-[#222222] text-[#FAF7F2] text-xs font-semibold rounded-[8px] hover:bg-[#333333] transition-colors cursor-pointer"
          >
            Clear All Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}

      {/* Category Story / Consultation Assistance Banner */}
      <div className="p-8 rounded-[8px] bg-[#FAF7F2] border border-[#daaf37]/40 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-1 text-center md:text-left">
          <div className="text-xs uppercase tracking-wider font-semibold text-[#daaf37]">
            Need a bespoke custom curation?
          </div>
          <h3 className="font-serif-luxury text-2xl text-[#222222] font-medium">
            Private Gifting Stylist Consultations
          </h3>
          <p className="text-xs text-[#5C574F] max-w-xl">
            For luxury corporate programs, destination weddings, and custom VIP milestones, our head curator handles everything from hand-dyed ribbons to guaranteed milestone courier logistics.
          </p>
        </div>

        <button
          onClick={() => {
            const consultationProduct = PRODUCTS.find((p) => p.category === 'Gift Consultations');
            if (consultationProduct) {
              setSelectedCategoryFilter('Gift Consultations');
            }
          }}
          className="px-6 py-3 bg-[#222222] text-[#FAF7F2] hover:bg-[#333333] text-xs font-semibold rounded-[8px] transition-colors shrink-0 cursor-pointer shadow-sm"
        >
          Explore Consultation Service
        </button>
      </div>

    </div>
  );
};
