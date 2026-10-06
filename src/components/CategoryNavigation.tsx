import React from 'react';
import { useCart } from '../context/CartContext';
import { Gift, Sparkles, Ribbon, Ticket, UtensilsCrossed, Briefcase, CalendarClock, LayoutGrid } from 'lucide-react';

interface CategoryItem {
  id: string;
  name: string;
  count: number;
  icon: React.ComponentType<{ className?: string }>;
  tagline: string;
}

export const CATEGORIES: CategoryItem[] = [
  { id: 'All', name: 'All Curations', count: 8, icon: LayoutGrid, tagline: 'Explore our full luxury collection' },
  { id: 'Gift Hampers', name: 'Gift Hampers', count: 2, icon: Gift, tagline: 'Artisanal provisions & soothing sanctuaries' },
  { id: 'Picnics', name: 'Picnic Experiences', count: 2, icon: UtensilsCrossed, tagline: 'Wicker baskets & golden hour dining' },
  { id: 'Gift Wrapping', name: 'Gift Wrapping', count: 1, icon: Ribbon, tagline: 'Bespoke cotton paper, wax seals & silk' },
  { id: 'Gift Surprises', name: 'Gift Surprises', count: 1, icon: Sparkles, tagline: 'Multi-layer reveal boxes with fairy lights' },
  { id: 'Gift Card Vouchers', name: 'Gift Card Vouchers', count: 1, icon: Ticket, tagline: 'Embossed wax-sealed keepsake invitations' },
  { id: 'Corporate Gifting', name: 'Corporate Gifting', count: 1, icon: Briefcase, tagline: 'Distinguished executive suites & client appreciation' },
  { id: 'Gift Consultations', name: 'Gift Consultations', count: 1, icon: CalendarClock, tagline: '1-on-1 private stylist appointments' },
];

export const CategoryNavigation: React.FC = () => {
  const { selectedCategoryFilter, setSelectedCategoryFilter, currentView, setCurrentView } = useCart();

  const handleSelect = (catName: string) => {
    setSelectedCategoryFilter(catName);
    if (currentView !== 'shop') {
      setCurrentView('shop');
    }
  };

  return (
    <section className="py-6 border-b border-[#E8E2D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="font-serif-luxury text-2xl text-[#1C1A18] font-medium">
              Curated Gift Categories
            </h2>
            <p className="text-xs text-[#7A746B] mt-0.5">
              Select a category to explore our bespoke offerings
            </p>
          </div>
          
          <button
            onClick={() => handleSelect('All')}
            className={`text-xs font-medium cursor-pointer ${
              selectedCategoryFilter === 'All' ? 'text-[#A58457] underline' : 'text-[#5C574F] hover:text-[#1C1A18]'
            }`}
          >
            View All ({PRODUCTS_COUNT})
          </button>
        </div>

        {/* Scrollable Category Grid / Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5">
          {CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            const isSelected = selectedCategoryFilter === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => handleSelect(cat.id)}
                className={`flex flex-col items-center justify-center p-3 rounded-[8px] text-center transition-all cursor-pointer border ${
                  isSelected
                    ? 'bg-[#1C1A18] text-[#FAF7F2] border-[#1C1A18] shadow-sm'
                    : 'bg-white text-[#2D2A26] border-[#E2DBD0] hover:border-[#C5A880] hover:bg-[#FDFBF7]'
                }`}
              >
                <div
                  className={`p-2 rounded-[8px] mb-1.5 transition-colors ${
                    isSelected ? 'bg-white/10 text-[#C5A880]' : 'bg-[#FAF7F2] text-[#8C6D3B]'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                </div>
                <span className="text-xs font-semibold leading-tight line-clamp-1">{cat.name}</span>
                <span className={`text-[10px] mt-0.5 ${isSelected ? 'text-[#C5A880]' : 'text-[#8C8479]'}`}>
                  {cat.id === 'All' ? '8 items' : `${cat.count} curated`}
                </span>
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
};

const PRODUCTS_COUNT = 8;
