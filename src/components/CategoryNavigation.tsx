import React, { useRef } from 'react';
import { useCart } from '../context/CartContext';
import { Gift, Sparkles, Ribbon, Ticket, UtensilsCrossed, Briefcase, CalendarClock, LayoutGrid, ChevronLeft, ChevronRight } from 'lucide-react';
import { PRODUCTS } from '../data/products';

interface CategoryItem {
  id: string;
  name: string;
  count: number;
  icon: React.ComponentType<{ className?: string }>;
  tagline: string;
  featuredImage?: string;
}

export const CATEGORIES: CategoryItem[] = [
  { id: 'All', name: 'All Curations', count: 12, icon: LayoutGrid, tagline: 'Explore our full luxury collection' },
  { id: 'Gift Hampers', name: 'Gift Hampers', count: 4, icon: Gift, tagline: 'Artisanal provisions & soothing sanctuaries', featuredImage: '/images/product_luxury_hamper.jpg' },
  { id: 'Corporate Gifting', name: 'Corporate Gifting', count: 2, icon: Briefcase, tagline: 'Distinguished executive suites & client appreciation', featuredImage: '/images/notebook-1.jpg' },
  { id: 'Picnics', name: 'Picnic Experiences', count: 2, icon: UtensilsCrossed, tagline: 'Wicker baskets & golden hour dining', featuredImage: '/images/product_luxury_picnic.jpg' },
  { id: 'Events Special', name: 'Events Special', count: 2, icon: Sparkles, tagline: 'Weddings, grand galas & milestone celebrations', featuredImage: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=900&auto=format&fit=crop' },
  { id: 'Season Greetings', name: 'Season Greetings', count: 2, icon: Ribbon, tagline: 'Festive solstice reveries & holiday cheer', featuredImage: 'https://images.unsplash.com/photo-1512909006721-3d6018887383?q=80&w=900&auto=format&fit=crop' },
  { id: 'Gift Wrapping', name: 'Gift Wrapping', count: 1, icon: Ribbon, tagline: 'Bespoke cotton paper, wax seals & silk', featuredImage: '/images/product_gift_wrapping.jpg' },
  { id: 'Gift Surprises', name: 'Gift Surprises', count: 2, icon: Sparkles, tagline: 'Multi-layer reveal boxes with fairy lights', featuredImage: '/images/product_surprise_box.jpg' },
  { id: 'Gift Card Vouchers', name: 'Gift Card Vouchers', count: 1, icon: Ticket, tagline: 'Embossed wax-sealed keepsake invitations', featuredImage: '/images/hero_luxury_gift_box.jpg' },
];

export const CategoryNavigation: React.FC = () => {
  const { selectedCategoryFilter, setSelectedCategoryFilter, currentView, setCurrentView } = useCart();
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleSelect = (catName: string) => {
    setSelectedCategoryFilter(catName);
    if (currentView !== 'shop') {
      setCurrentView('shop');
    }
  };

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -260 : 260;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-4 border-b border-[#E8E2D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex items-center justify-between mb-3.5">
          <div>
            <h2 className="font-serif-luxury text-2xl text-[#222222] font-medium">
              Gift Curations
            </h2>
            <p className="text-xs text-[#7A746B] mt-0.5">
              Select a category to explore our bespoke offerings
            </p>
          </div>
          
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleSelect('All')}
              className={`text-xs font-medium cursor-pointer ${
                selectedCategoryFilter === 'All' ? 'text-[#daaf37] font-bold underline' : 'text-[#5C574F] hover:text-[#222222]'
              }`}
            >
              View All ({PRODUCTS_COUNT})
            </button>

            <div className="hidden sm:flex items-center gap-1.5 border-l border-[#E2DBD0] pl-3">
              <button
                onClick={() => handleScroll('left')}
                aria-label="Scroll categories left"
                className="w-7 h-7 rounded-full border border-[#D9D2C7] bg-white hover:bg-[#FAF7F2] hover:border-[#daaf37] flex items-center justify-center text-[#5C574F] hover:text-[#222222] transition-colors cursor-pointer shadow-xs"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => handleScroll('right')}
                aria-label="Scroll categories right"
                className="w-7 h-7 rounded-full border border-[#D9D2C7] bg-white hover:bg-[#FAF7F2] hover:border-[#daaf37] flex items-center justify-center text-[#5C574F] hover:text-[#222222] transition-colors cursor-pointer shadow-xs"
              >
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* All categories in one row with horizontal scroll (scrollbar hidden) */}
        <div className="relative">
          <div
            ref={scrollContainerRef}
            className="flex items-stretch gap-2.5 overflow-x-auto no-scrollbar scrollbar-none [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden pb-1 pt-1 scroll-smooth snap-x select-none"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {CATEGORIES.map((cat) => {
              const Icon = cat.icon;
              const isSelected = selectedCategoryFilter === cat.id;

              return (
                <button
                  key={cat.id}
                  onClick={() => handleSelect(cat.id)}
                  className={`flex-none w-[130px] sm:w-[140px] flex flex-col items-center justify-center p-3 rounded-[8px] text-center transition-all cursor-pointer border snap-start ${
                    isSelected
                      ? 'bg-[#222222] text-[#FAF7F2] border-[#222222] shadow-sm ring-1 ring-[#daaf37]'
                      : 'bg-white text-[#2D2A26] border-[#E2DBD0] hover:border-[#daaf37] hover:bg-[#FDFBF7]'
                  }`}
                >
                  <div
                    className={`p-2 rounded-[8px] mb-1.5 transition-colors ${
                      isSelected ? 'bg-white/10 text-[#daaf37]' : 'bg-[#FAF7F2] text-[#b88e22]'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-semibold leading-tight truncate w-full px-1">{cat.name}</span>
                  <span className={`text-[10px] mt-0.5 ${isSelected ? 'text-[#daaf37]' : 'text-[#8C8479]'}`}>
                    {cat.id === 'All' ? `${PRODUCTS.length} items` : `${cat.count} curated`}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

const PRODUCTS_COUNT = PRODUCTS.length;
