import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { 
  ShoppingBag, 
  Search, 
  Menu, 
  X, 
  Sparkles, 
  Calendar, 
  Heart, 
  ChevronDown,
  Award,
  Baby,
  Smile,
  Coffee,
  Compass,
  ArrowRight
} from 'lucide-react';
import { TREASURE_CATEGORIES } from './TreasureHuntSection';
import { CATEGORIES } from './CategoryNavigation';
import { Gift, Store } from 'lucide-react';

const getTreasureIcon = (id: string) => {
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

export const Navbar: React.FC = () => {
  const {
    cartCount,
    setIsCartOpen,
    wishlistCount,
    setIsWishlistOpen,
    currentView,
    setCurrentView,
    selectedCategoryFilter,
    setSelectedCategoryFilter,
    setIsQuizOpen,
    setIsConsultationOpen,
    searchQuery,
    setSearchQuery,
    openTreasureCategory,
    activeTreasureCategory,
  } = useCart();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileTreasureOpen, setMobileTreasureOpen] = useState(false);
  const [mobileCurationsOpen, setMobileCurationsOpen] = useState(false);

  const handleNavClick = (view: 'home' | 'shop' | 'about') => {
    setCurrentView(view);
    if (view === 'shop') {
      setSelectedCategoryFilter('All');
    }
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleTreasureHuntClick = () => {
    if (currentView !== 'home') {
      setCurrentView('home');
      setTimeout(() => {
        document.getElementById('treasure-hunt')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById('treasure-hunt')?.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const handleAllCurationsClick = () => {
    if (currentView !== 'home') {
      setCurrentView('home');
      setTimeout(() => {
        document.getElementById('curated-masterpieces')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById('curated-masterpieces')?.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const handleSelectCurationCategory = (catId: string) => {
    setSelectedCategoryFilter(catId);
    setSearchQuery('');
    setCurrentView('shop');
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleShopClick = () => {
    setSelectedCategoryFilter('All');
    setSearchQuery('');
    setCurrentView('shop');
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const curationItems = CATEGORIES.filter((c) => c.id !== 'All');

  const handleSearchChange = (val: string) => {
    setSearchQuery(val);
    if (val.trim() && currentView !== 'shop') {
      setCurrentView('shop');
      setSelectedCategoryFilter('All');
    }
  };

  return (
    <>
      {/* Editorial Announcement Bar */}
      <div className="bg-[#222222] text-[#FAF7F2] text-xs py-2 px-4 text-center tracking-wider border-b border-[#daaf37]/20 flex items-center justify-center gap-3">
        <span className="text-[#daaf37]">✦</span>
        <span>Complimentary Handwritten Calligraphy & Guaranteed Milestone Delivery on All Hampers</span>
        <span className="hidden md:inline text-[#daaf37]">✦</span>
        <button
          onClick={() => setIsQuizOpen(true)}
          className="hidden sm:inline-flex items-center gap-1 underline underline-offset-2 text-[#f3de8a] hover:text-white transition-colors cursor-pointer"
        >
          Find Your Gift Match →
        </button>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-40 bg-white border-b border-[#E8E2D8] shadow-xs transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-3 lg:gap-6">
          
          {/* Brand Wordmark */}
          <button
            onClick={() => handleNavClick('home')}
            className="group text-left cursor-pointer focus:outline-none shrink-0"
            aria-label="Marvel Me Home"
          >
            <span className="font-serif-luxury text-2xl sm:text-3xl xl:text-4xl tracking-tight text-[#222222] font-medium group-hover:text-[#daaf37] transition-colors">
              Marvel Me
            </span>
          </button>

          {/* Desktop Nav Items: Home, Treasure Hunt, All Curations, Our Story */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-8 text-sm font-medium tracking-wide text-[#3D3A36] shrink-0">
            {/* Home */}
            <button
              onClick={() => handleNavClick('home')}
              className={`hover:text-[#daaf37] transition-colors cursor-pointer py-1 relative ${
                currentView === 'home' ? 'text-[#222222] font-semibold' : ''
              }`}
            >
              Home
              {currentView === 'home' && (
                <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#daaf37]" />
              )}
            </button>

            {/* Treasure Hunt with Dropdown on Hover */}
            <div className="relative group py-2">
              <button
                onClick={handleTreasureHuntClick}
                className={`hover:text-[#daaf37] transition-colors cursor-pointer py-1 flex items-center gap-1.5 ${
                  currentView === 'treasure-category' ? 'text-[#daaf37] font-semibold' : 'text-[#222222]'
                }`}
                aria-haspopup="true"
              >
                <span className="text-[#daaf37] text-xs">✦</span>
                <span>Treasure Hunt</span>
                <ChevronDown className="w-3.5 h-3.5 text-[#8C8479] group-hover:text-[#daaf37] group-hover:rotate-180 transition-transform duration-200" />
              </button>

              {/* Hover Dropdown */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2.5 w-76 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 pointer-events-none group-hover:pointer-events-auto drop-shadow-xl">
                <div className="bg-white rounded-xl border border-[#E8E2D8] overflow-hidden py-1 ring-1 ring-black/5">
                  <div className="px-3.5 py-2.5 bg-[#FAF7F2] border-b border-[#E8E2D8] flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <Compass className="w-3.5 h-3.5 text-[#daaf37]" />
                      <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#222222]">
                        Treasure Hunt
                      </span>
                    </div>
                    <span className="text-[10px] text-[#8C8479] font-medium">5 Categories</span>
                  </div>

                  <div className="py-1">
                    {TREASURE_CATEGORIES.map((cat) => {
                      const Icon = getTreasureIcon(cat.id);
                      const isActive = currentView === 'treasure-category' && activeTreasureCategory === cat.id;
                      return (
                        <button
                          key={cat.id}
                          onClick={(e) => {
                            e.stopPropagation();
                            openTreasureCategory(cat.id);
                          }}
                          className={`w-full flex items-center gap-3 px-3.5 py-2.5 text-left transition-colors cursor-pointer group/item ${
                            isActive
                              ? 'bg-[#FAF7F2] text-[#222222]'
                              : 'hover:bg-[#FAF7F2] text-[#3D3A36]'
                          }`}
                        >
                          <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                            isActive
                              ? 'bg-[#222222] text-[#daaf37]'
                              : 'bg-[#FAF7F2] group-hover/item:bg-[#222222] text-[#daaf37]'
                          }`}>
                            <Icon className="w-4 h-4" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between">
                              <span className="text-xs font-medium text-[#222222] group-hover/item:text-[#daaf37] transition-colors">
                                {cat.name}
                              </span>
                              <span className="text-[10px] text-[#8C8479] group-hover/item:text-[#daaf37] group-hover/item:translate-x-0.5 transition-all">
                                →
                              </span>
                            </div>
                            <p className="text-[10px] text-[#8C8479] truncate mt-0.5">
                              {cat.badge}
                            </p>
                          </div>
                        </button>
                      );
                    })}
                  </div>

                  <div className="p-2 border-t border-[#E8E2D8] bg-[#FAF7F2]/60">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleTreasureHuntClick();
                      }}
                      className="w-full py-1.5 px-2.5 text-[11px] font-medium text-[#5A554E] hover:text-[#222222] flex items-center justify-between rounded hover:bg-white transition-colors cursor-pointer"
                    >
                      <span className="flex items-center gap-1.5">
                        <Sparkles className="w-3 h-3 text-[#daaf37]" />
                        <span>All Personalized Curations</span>
                      </span>
                      <ArrowRight className="w-3 h-3 text-[#8C8479]" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* All Curations with Mega Dropdown (5 per row on hover) */}
            <div className="relative group py-2">
              <button
                onClick={handleAllCurationsClick}
                className={`hover:text-[#daaf37] transition-colors cursor-pointer py-1 flex items-center gap-1.5 ${
                  currentView === 'shop' && selectedCategoryFilter !== 'All' ? 'text-[#daaf37] font-semibold' : 'text-[#222222]'
                }`}
                aria-haspopup="true"
              >
                <span>All Curations</span>
                <ChevronDown className="w-3.5 h-3.5 text-[#8C8479] group-hover:text-[#daaf37] group-hover:rotate-180 transition-transform duration-200" />
              </button>

              {/* Mega Dropdown: 5 categories per row */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[720px] xl:w-[820px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 pointer-events-none group-hover:pointer-events-auto drop-shadow-2xl">
                <div className="bg-white rounded-2xl border border-[#E8E2D8] overflow-hidden shadow-xl ring-1 ring-black/5">
                  {/* Header */}
                  <div className="px-5 py-3 bg-[#FAF7F2] border-b border-[#E8E2D8] flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Gift className="w-4 h-4 text-[#daaf37]" />
                      <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#222222]">
                        Gift Curations
                      </span>
                    </div>
                    <button
                      onClick={handleShopClick}
                      className="text-xs text-[#b88e22] hover:text-[#222222] font-semibold flex items-center gap-1 cursor-pointer transition-colors"
                    >
                      <span>Explore Entire Store</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* 5 per row grid */}
                  <div className="p-4 bg-white">
                    <div className="grid grid-cols-5 gap-2.5">
                      {curationItems.map((cat) => {
                        const Icon = cat.icon;
                        const isSelected = currentView === 'shop' && selectedCategoryFilter === cat.id;

                        return (
                          <button
                            key={cat.id}
                            onClick={(e) => {
                              e.stopPropagation();
                              handleSelectCurationCategory(cat.id);
                            }}
                            className={`flex flex-col items-center text-center p-3 rounded-xl border transition-all cursor-pointer group/card ${
                              isSelected
                                ? 'bg-[#FAF7F2] border-[#daaf37] shadow-xs ring-1 ring-[#daaf37]'
                                : 'bg-[#FAF7F2]/40 hover:bg-[#FAF7F2] border-[#E8E2D8] hover:border-[#daaf37]'
                            }`}
                          >
                            <div className="w-10 h-10 rounded-lg bg-white border border-[#E2DBD0] group-hover/card:border-[#daaf37] flex items-center justify-center text-[#daaf37] shadow-xs mb-2 transition-all group-hover/card:scale-105">
                              <Icon className="w-5 h-5" />
                            </div>
                            <span className="text-xs font-semibold text-[#222222] group-hover/card:text-[#daaf37] line-clamp-1 w-full transition-colors">
                              {cat.name}
                            </span>
                            <span className="text-[10px] text-[#8C8479] mt-0.5 line-clamp-1 w-full">
                              {cat.count} curated
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Footer note & link */}
                  <div className="px-5 py-2.5 bg-[#FAF7F2] border-t border-[#E8E2D8] flex items-center justify-between text-xs text-[#66615B]">
                    <span className="flex items-center gap-1.5 text-[11px]">
                      <Sparkles className="w-3.5 h-3.5 text-[#daaf37]" />
                      <span>Every curation comes wrapped with bespoke cotton paper & wax seal</span>
                    </span>
                    <button
                      onClick={handleShopClick}
                      className="font-medium text-[#222222] hover:text-[#daaf37] underline underline-offset-2 cursor-pointer"
                    >
                      View All in Shop →
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Shop Nav Item - Lists all gifts in treasure hunt and curations */}
            <button
              onClick={handleShopClick}
              className={`hover:text-[#daaf37] transition-colors cursor-pointer py-1 relative flex items-center gap-1.5 ${
                currentView === 'shop' && selectedCategoryFilter === 'All' ? 'text-[#222222] font-semibold' : 'text-[#3D3A36]'
              }`}
            >
              <Store className="w-3.5 h-3.5 text-[#daaf37]" />
              <span>Shop</span>
              {currentView === 'shop' && selectedCategoryFilter === 'All' && (
                <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#daaf37]" />
              )}
            </button>

            {/* Our Story */}
            <button
              onClick={() => handleNavClick('about')}
              className={`hover:text-[#daaf37] transition-colors cursor-pointer py-1 relative ${
                currentView === 'about' ? 'text-[#222222] font-semibold' : ''
              }`}
            >
              Our Story
              {currentView === 'about' && (
                <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#daaf37]" />
              )}
            </button>
          </nav>

          {/* Right Header Actions: Search Bar, Two CTAs, Wishlist Icon, Cart Icon */}
          <div className="flex items-center gap-2 sm:gap-3 xl:gap-3.5">
            {/* Search Bar */}
            <div className="relative hidden md:flex items-center bg-white border border-[#D9D2C7] focus-within:border-[#daaf37] focus-within:ring-1 focus-within:ring-[#daaf37]/30 rounded-[8px] px-2.5 py-1.5 shadow-xs transition-all w-36 lg:w-44 xl:w-56">
              <Search className="w-3.5 h-3.5 text-[#8C8479] mr-2 shrink-0" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => handleSearchChange(e.target.value)}
                placeholder="Search curations..."
                className="w-full text-xs bg-transparent focus:outline-none text-[#2D2A26] placeholder-[#8C8479]"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear search"
                  className="text-[#8C8479] hover:text-[#222222] ml-1 p-0.5 cursor-pointer"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* CTA 1: Gift Quiz */}
            <button
              onClick={() => setIsQuizOpen(true)}
              className="hidden lg:flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-[#2D2A26] bg-white border border-[#D9D2C7] rounded-[8px] hover:border-[#daaf37] hover:bg-[#FAF7F2] transition-colors cursor-pointer whitespace-nowrap shadow-xs"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#daaf37]" />
              <span>Gift Quiz</span>
            </button>

            {/* CTA 2: Consultation */}
            <button
              onClick={() => setIsConsultationOpen(true)}
              className="hidden sm:flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-[#222222] bg-[#daaf37] hover:bg-[#c99e2e] active:bg-[#b88e22] rounded-[8px] transition-colors cursor-pointer shadow-sm whitespace-nowrap"
            >
              <Calendar className="w-3.5 h-3.5 text-[#222222]" />
              <span>Consultation</span>
            </button>

            {/* Wishlist Icon */}
            <button
              onClick={() => setIsWishlistOpen(true)}
              aria-label={`View wishlist with ${wishlistCount} saved items`}
              className="relative p-2 text-[#222222] hover:text-[#daaf37] transition-colors rounded-[8px] hover:bg-[#F2ECE1] cursor-pointer"
              title="Saved Wishlist"
            >
              <Heart
                className={`w-5 h-5 ${
                  wishlistCount > 0 ? 'text-[#daaf37] fill-[#daaf37]' : 'text-[#222222]'
                }`}
              />
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#222222] text-[#daaf37] text-[11px] font-bold h-4 min-w-4 px-1 rounded-full flex items-center justify-center tabular-nums shadow-sm border border-[#daaf37]">
                  {wishlistCount}
                </span>
              )}
            </button>

            {/* Cart Icon */}
            <button
              onClick={() => setIsCartOpen(true)}
              aria-label={`View shopping bag with ${cartCount} items`}
              className="relative p-2 text-[#222222] hover:text-[#daaf37] transition-colors rounded-[8px] hover:bg-[#F2ECE1] cursor-pointer"
              title="Shopping Bag"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#222222] text-[#daaf37] text-[11px] font-bold h-4 min-w-4 px-1 rounded-full flex items-center justify-center tabular-nums shadow-sm border border-[#daaf37]">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="lg:hidden p-2 text-[#222222] hover:text-[#daaf37] rounded-[8px] hover:bg-[#F2ECE1] cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-[#E8E2D8] px-6 py-6 space-y-4 animate-in fade-in slide-in-from-top-2 duration-200">
            {/* Mobile Search Bar */}
            <div className="flex items-center bg-white border border-[#D9D2C7] focus-within:border-[#daaf37] rounded-[8px] px-3 py-2 shadow-xs">
              <Search className="w-4 h-4 text-[#8C8479] mr-2 shrink-0" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => handleSearchChange(e.target.value)}
                placeholder="Search curations, hampers..."
                className="w-full text-xs bg-transparent focus:outline-none text-[#2D2A26] placeholder-[#8C8479]"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear search"
                  className="text-[#8C8479] hover:text-[#222222] ml-1 p-0.5"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* The Two CTAs in Mobile */}
            <div className="grid grid-cols-2 gap-3 pt-1 pb-3 border-b border-[#E8E2D8]">
              <button
                onClick={() => {
                  setIsQuizOpen(true);
                  setMobileMenuOpen(false);
                }}
                className="flex items-center justify-center gap-2 p-2.5 bg-white border border-[#D9D2C7] rounded-[8px] text-xs font-semibold text-[#2D2A26] hover:border-[#daaf37] transition-colors"
              >
                <Sparkles className="w-4 h-4 text-[#daaf37]" />
                Gift Quiz
              </button>
              <button
                onClick={() => {
                  setIsConsultationOpen(true);
                  setMobileMenuOpen(false);
                }}
                className="flex items-center justify-center gap-2 p-2.5 bg-[#daaf37] text-[#222222] rounded-[8px] text-xs font-semibold hover:bg-[#c99e2e] transition-colors shadow-xs"
              >
                <Calendar className="w-4 h-4 text-[#222222]" />
                Consultation
              </button>
            </div>

            {/* Mobile Nav Links */}
            <div className="flex flex-col space-y-3 pt-1 text-base">
              <button
                onClick={() => handleNavClick('home')}
                className="text-left font-serif-luxury text-xl py-1 text-[#222222] hover:text-[#daaf37] transition-colors flex items-center justify-between"
              >
                <span>Home</span>
                {currentView === 'home' && (
                  <span className="text-xs font-sans text-[#daaf37] font-semibold uppercase tracking-wider">Active</span>
                )}
              </button>

              <div>
                <button
                  onClick={() => setMobileTreasureOpen(!mobileTreasureOpen)}
                  className="w-full text-left font-serif-luxury text-xl py-1 text-[#222222] hover:text-[#daaf37] transition-colors flex items-center justify-between"
                >
                  <span className="flex items-center gap-2">
                    <span className="text-[#daaf37] text-sm">✦</span>
                    <span>Treasure Hunt</span>
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] px-2 py-0.5 rounded bg-white border border-[#daaf37] text-[#daaf37] font-semibold uppercase tracking-wider">
                      5 Categories
                    </span>
                    <ChevronDown className={`w-4 h-4 text-[#8C8479] transition-transform duration-200 ${mobileTreasureOpen ? 'rotate-180' : ''}`} />
                  </div>
                </button>

                {mobileTreasureOpen && (
                  <div className="pl-3 py-1 space-y-1 border-l-2 border-[#daaf37]/40 ml-2 mt-1">
                    {TREASURE_CATEGORIES.map((cat) => {
                      const Icon = getTreasureIcon(cat.id);
                      return (
                        <button
                          key={cat.id}
                          onClick={() => {
                            openTreasureCategory(cat.id);
                            setMobileMenuOpen(false);
                          }}
                          className="w-full flex items-center justify-between p-2 rounded-lg text-left text-sm hover:bg-[#FAF7F2] text-[#222222]"
                        >
                          <div className="flex items-center gap-2.5">
                            <Icon className="w-4 h-4 text-[#daaf37]" />
                            <span className="font-medium text-xs">{cat.name}</span>
                          </div>
                          <span className="text-[10px] text-[#8C8479]">{cat.badge}</span>
                        </button>
                      );
                    })}
                    <button
                      onClick={handleTreasureHuntClick}
                      className="w-full text-left py-1.5 px-2 text-xs text-[#daaf37] font-semibold flex items-center gap-1.5 hover:underline"
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Explore Treasure Hunt Hub</span>
                    </button>
                  </div>
                )}
              </div>

              {/* All Curations with expandable categories */}
              <div>
                <button
                  onClick={() => setMobileCurationsOpen(!mobileCurationsOpen)}
                  className="w-full text-left font-serif-luxury text-xl py-1 text-[#222222] hover:text-[#daaf37] transition-colors flex items-center justify-between"
                >
                  <span className="flex items-center gap-2">
                    <Gift className="w-4 h-4 text-[#daaf37]" />
                    <span>All Curations</span>
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] px-2 py-0.5 rounded bg-white border border-[#daaf37] text-[#daaf37] font-semibold uppercase tracking-wider">
                      {curationItems.length} Categories
                    </span>
                    <ChevronDown className={`w-4 h-4 text-[#8C8479] transition-transform duration-200 ${mobileCurationsOpen ? 'rotate-180' : ''}`} />
                  </div>
                </button>

                {mobileCurationsOpen && (
                  <div className="pl-3 py-1 grid grid-cols-2 gap-1.5 border-l-2 border-[#daaf37]/40 ml-2 mt-1">
                    {curationItems.map((cat) => {
                      const Icon = cat.icon;
                      return (
                        <button
                          key={cat.id}
                          onClick={() => handleSelectCurationCategory(cat.id)}
                          className="flex items-center gap-2 p-2 rounded-lg text-left hover:bg-[#FAF7F2] border border-[#E8E2D8] bg-white"
                        >
                          <Icon className="w-3.5 h-3.5 text-[#daaf37] shrink-0" />
                          <span className="text-xs font-medium text-[#222222] truncate">{cat.name}</span>
                        </button>
                      );
                    })}
                    <button
                      onClick={handleAllCurationsClick}
                      className="col-span-2 text-left py-1.5 px-2 text-xs text-[#daaf37] font-semibold flex items-center gap-1.5 hover:underline"
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Explore Curated Masterpieces</span>
                    </button>
                  </div>
                )}
              </div>

              {/* Shop Nav Item */}
              <button
                onClick={handleShopClick}
                className="text-left font-serif-luxury text-xl py-1 text-[#222222] hover:text-[#daaf37] transition-colors flex items-center justify-between"
              >
                <span className="flex items-center gap-2">
                  <Store className="w-4 h-4 text-[#daaf37]" />
                  <span>Shop</span>
                </span>
                {currentView === 'shop' && selectedCategoryFilter === 'All' && (
                  <span className="text-xs font-sans text-[#daaf37] font-semibold uppercase tracking-wider">Active</span>
                )}
              </button>

              <button
                onClick={() => handleNavClick('about')}
                className="text-left font-serif-luxury text-xl py-1 text-[#222222] hover:text-[#daaf37] transition-colors flex items-center justify-between"
              >
                <span>Our Story</span>
                {currentView === 'about' && (
                  <span className="text-xs font-sans text-[#daaf37] font-semibold uppercase tracking-wider">Active</span>
                )}
              </button>
            </div>

            {/* Mobile Wishlist & Cart Quick Triggers */}
            <div className="pt-3 border-t border-[#E8E2D8] flex items-center justify-between">
              <button
                onClick={() => {
                  setIsWishlistOpen(true);
                  setMobileMenuOpen(false);
                }}
                className="flex items-center gap-2 text-xs font-medium text-[#222222] hover:text-[#daaf37]"
              >
                <Heart className={`w-4 h-4 ${wishlistCount > 0 ? 'text-[#daaf37] fill-[#daaf37]' : ''}`} />
                <span>Saved Wishlist ({wishlistCount})</span>
              </button>

              <button
                onClick={() => {
                  setIsCartOpen(true);
                  setMobileMenuOpen(false);
                }}
                className="flex items-center gap-2 text-xs font-medium text-[#222222] hover:text-[#daaf37]"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Bag ({cartCount})</span>
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
