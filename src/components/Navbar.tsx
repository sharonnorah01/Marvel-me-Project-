import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { ShoppingBag, Search, Menu, X, Sparkles, Calendar, Heart } from 'lucide-react';

export const Navbar: React.FC = () => {
  const {
    cartCount,
    setIsCartOpen,
    currentView,
    setCurrentView,
    setSelectedCategoryFilter,
    setIsQuizOpen,
    setIsConsultationOpen,
    searchQuery,
    setSearchQuery,
  } = useCart();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showSearchInput, setShowSearchInput] = useState(false);

  const handleNavClick = (view: 'home' | 'shop' | 'about', category?: string) => {
    setCurrentView(view);
    if (category) {
      setSelectedCategoryFilter(category);
    } else if (view === 'shop') {
      setSelectedCategoryFilter('All');
    }
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
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

      {/* Main Top Bar Contract: Brand single element, 4-6 nav links, 1-2 primary actions */}
      <header className="sticky top-0 z-40 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#E8E2D8] transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Zone 1: Single text element Brand Wordmark */}
          <button
            onClick={() => handleNavClick('home')}
            className="group text-left cursor-pointer focus:outline-none"
            aria-label="Marvel Me Home"
          >
            <span className="font-serif-luxury text-3xl sm:text-4xl tracking-tight text-[#222222] font-medium group-hover:text-[#daaf37] transition-colors">
              Marvel Me
            </span>
          </button>

          {/* Zone 2: 4-6 clean text navigation links (single line, no pills) */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium tracking-wide text-[#3D3A36]">
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

            <button
              onClick={() => handleNavClick('shop', 'All')}
              className={`hover:text-[#daaf37] transition-colors cursor-pointer py-1 relative ${
                currentView === 'shop' ? 'text-[#222222] font-semibold' : ''
              }`}
            >
              Shop
              {currentView === 'shop' && (
                <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#daaf37]" />
              )}
            </button>

            <button
              onClick={() => handleNavClick('shop', 'Gift Hampers')}
              className="hover:text-[#daaf37] transition-colors cursor-pointer py-1"
            >
              Gift Hampers
            </button>

            <button
              onClick={() => handleNavClick('shop', 'Picnics')}
              className="hover:text-[#daaf37] transition-colors cursor-pointer py-1"
            >
              Picnics
            </button>

            <button
              onClick={() => handleNavClick('shop', 'Gift Wrapping')}
              className="hover:text-[#daaf37] transition-colors cursor-pointer py-1"
            >
              Gift Wrapping
            </button>

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

          {/* Zone 3: 1-2 primary actions */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Search Input Toggle */}
            <div className="relative">
              {showSearchInput ? (
                <div className="flex items-center bg-white border border-[#D9D2C7] rounded-[8px] px-2.5 py-1.5 shadow-sm">
                  <Search className="w-4 h-4 text-[#8C8479] mr-2" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => {
                      setSearchQuery(e.target.value);
                      if (currentView !== 'shop') setCurrentView('shop');
                    }}
                    placeholder="Search gifts, hampers..."
                    className="w-36 sm:w-48 text-xs bg-transparent focus:outline-none text-[#2D2A26]"
                    autoFocus
                  />
                  <button
                    onClick={() => {
                      setShowSearchInput(false);
                      setSearchQuery('');
                    }}
                    className="text-[#8C8479] hover:text-[#222222] ml-1"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setShowSearchInput(true)}
                  aria-label="Search collection"
                  className="p-2 text-[#3D3A36] hover:text-[#daaf37] transition-colors rounded-[8px] hover:bg-[#F2ECE1] cursor-pointer"
                >
                  <Search className="w-5 h-5" />
                </button>
              )}
            </div>

            {/* Gift Quiz Action */}
            <button
              onClick={() => setIsQuizOpen(true)}
              className="hidden md:flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-[#2D2A26] border border-[#D9D2C7] rounded-[8px] hover:border-[#daaf37] hover:bg-[#F4EFEA] transition-colors cursor-pointer whitespace-nowrap"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#daaf37]" />
              <span>Gift Quiz</span>
            </button>

            {/* Book Consultation */}
            <button
              onClick={() => setIsConsultationOpen(true)}
              className="hidden sm:flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-[#FAF7F2] bg-[#222222] hover:bg-[#333333] rounded-[8px] transition-colors cursor-pointer shadow-sm whitespace-nowrap"
            >
              <Calendar className="w-3.5 h-3.5 text-[#daaf37]" />
              <span>Consultation</span>
            </button>

            {/* Shopping Bag Trigger */}
            <button
              onClick={() => setIsCartOpen(true)}
              aria-label={`View shopping bag with ${cartCount} items`}
              className="relative p-2 text-[#222222] hover:text-[#daaf37] transition-colors rounded-[8px] hover:bg-[#F2ECE1] cursor-pointer"
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
              className="lg:hidden p-2 text-[#222222] hover:text-[#daaf37] rounded-[8px] hover:bg-[#F2ECE1]"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#FAF7F2] border-b border-[#E8E2D8] px-6 py-6 space-y-4 animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="grid grid-cols-2 gap-3 pb-3 border-b border-[#E8E2D8]">
              <button
                onClick={() => {
                  setIsQuizOpen(true);
                  setMobileMenuOpen(false);
                }}
                className="flex items-center justify-center gap-2 p-2.5 bg-white border border-[#D9D2C7] rounded-[8px] text-xs font-medium text-[#2D2A26]"
              >
                <Sparkles className="w-4 h-4 text-[#daaf37]" />
                Gift Quiz
              </button>
              <button
                onClick={() => {
                  setIsConsultationOpen(true);
                  setMobileMenuOpen(false);
                }}
                className="flex items-center justify-center gap-2 p-2.5 bg-[#222222] text-[#FAF7F2] rounded-[8px] text-xs font-medium"
              >
                <Calendar className="w-4 h-4 text-[#daaf37]" />
                Consultation
              </button>
            </div>

            <div className="flex flex-col space-y-3 text-base">
              <button
                onClick={() => handleNavClick('home')}
                className="text-left font-serif-luxury text-xl py-1 text-[#222222] hover:text-[#daaf37]"
              >
                Home
              </button>
              <button
                onClick={() => handleNavClick('shop', 'All')}
                className="text-left font-serif-luxury text-xl py-1 text-[#222222] hover:text-[#daaf37]"
              >
                Explore Full Shop
              </button>
              <button
                onClick={() => handleNavClick('shop', 'Gift Hampers')}
                className="text-left py-1 text-sm text-[#4A4641] hover:text-[#daaf37]"
              >
                Gift Hampers
              </button>
              <button
                onClick={() => handleNavClick('shop', 'Picnics')}
                className="text-left py-1 text-sm text-[#4A4641] hover:text-[#daaf37]"
              >
                Picnic Experiences
              </button>
              <button
                onClick={() => handleNavClick('shop', 'Gift Wrapping')}
                className="text-left py-1 text-sm text-[#4A4641] hover:text-[#daaf37]"
              >
                Artisanal Gift Wrapping
              </button>
              <button
                onClick={() => handleNavClick('shop', 'Gift Surprises')}
                className="text-left py-1 text-sm text-[#4A4641] hover:text-[#daaf37]"
              >
                Gift Surprises
              </button>
              <button
                onClick={() => handleNavClick('shop', 'Corporate Gifting')}
                className="text-left py-1 text-sm text-[#4A4641] hover:text-[#daaf37]"
              >
                Corporate Gifting
              </button>
              <button
                onClick={() => handleNavClick('about')}
                className="text-left font-serif-luxury text-xl py-1 text-[#222222] hover:text-[#daaf37]"
              >
                Our Story & Philosophy
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
