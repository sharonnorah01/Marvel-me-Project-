import React from 'react';
import { useCart } from '../context/CartContext';
import { PRODUCTS } from '../data/products';
import { X, Heart, Trash2, ArrowRight, Sparkles, ArrowUpRight } from 'lucide-react';
import { handleImageFallback } from '../utils/images';

export const WishlistDrawer: React.FC = () => {
  const {
    wishlist,
    isWishlistOpen,
    setIsWishlistOpen,
    toggleWishlist,
    setActiveProductDetail,
    setCurrentView,
    setSelectedCategoryFilter,
  } = useCart();

  if (!isWishlistOpen) return null;

  const wishlistedProducts = PRODUCTS.filter((p) => wishlist.includes(p.id));

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-[#222222]/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="absolute inset-0" onClick={() => setIsWishlistOpen(false)} />

      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FAF7F2] text-[#2D2A26] shadow-2xl flex flex-col border-l border-[#D9D2C7]">
          {/* Header */}
          <div className="p-6 bg-white border-b border-[#E8E2D8] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-[#daaf37] fill-[#daaf37]" />
              <h2 className="font-serif-luxury text-2xl text-[#222222] font-medium">
                Saved Curations
              </h2>
              <span className="text-xs text-[#8C8479] tabular-nums">
                ({wishlistedProducts.length} {wishlistedProducts.length === 1 ? 'item' : 'items'})
              </span>
            </div>

            <button
              onClick={() => setIsWishlistOpen(false)}
              aria-label="Close wishlist"
              className="p-1.5 rounded-[8px] text-[#5C574F] hover:text-[#222222] hover:bg-[#FAF7F2] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Subheader banner */}
          <div className="bg-[#F4EFEA] px-6 py-2.5 border-b border-[#E8E2D8] text-xs text-[#5C574F] flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-[#daaf37] shrink-0" />
            <span>Items saved to your private wishlist for your upcoming milestones.</span>
          </div>

          {/* Wishlist Items List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {wishlistedProducts.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12">
                <div className="w-16 h-16 rounded-full bg-white border border-[#D9D2C7] flex items-center justify-center text-[#daaf37]">
                  <Heart className="w-7 h-7" />
                </div>
                <h3 className="font-serif-luxury text-xl text-[#222222]">
                  Your Wishlist is Empty
                </h3>
                <p className="text-xs text-[#7A746B] max-w-xs leading-relaxed">
                  Save your favorite hampers, picnics, and bespoke gifts here to revisit or personalize later.
                </p>
                <button
                  onClick={() => {
                    setIsWishlistOpen(false);
                    setCurrentView('shop');
                    setSelectedCategoryFilter('All');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="px-6 py-2.5 bg-[#daaf37] text-[#222222] rounded-[8px] text-xs font-semibold hover:bg-[#c49b2c] transition-colors cursor-pointer shadow-sm"
                >
                  Explore All Curations
                </button>
              </div>
            ) : (
              wishlistedProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-[8px] border border-[#E2DBD0] p-4 flex gap-4 transition-all hover:border-[#daaf37] shadow-sm"
                >
                  <div
                    onClick={() => {
                      setIsWishlistOpen(false);
                      setActiveProductDetail(product);
                    }}
                    className="w-20 h-20 rounded-[6px] overflow-hidden bg-[#F6F2EA] shrink-0 border border-[#E8E2D8] cursor-pointer"
                  >
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      onError={(e) => handleImageFallback(e, product.category)}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-1 flex flex-col justify-between min-w-0">
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <span className="text-[10px] uppercase tracking-wider font-semibold text-[#b88e22]">
                          {product.treasureCategory || product.category}
                        </span>
                        <button
                          onClick={() => toggleWishlist(product.id)}
                          title="Remove from wishlist"
                          aria-label="Remove item"
                          className="text-[#8C8479] hover:text-[#C53030] p-1 transition-colors cursor-pointer"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <h4
                        onClick={() => {
                          setIsWishlistOpen(false);
                          setActiveProductDetail(product);
                        }}
                        className="font-serif-luxury text-base text-[#222222] font-medium truncate cursor-pointer hover:text-[#daaf37]"
                      >
                        {product.name}
                      </h4>
                      <p className="text-xs font-bold text-[#222222] mt-0.5">
                        ${product.price}
                      </p>
                    </div>

                    <div className="pt-2 flex items-center justify-between">
                      <button
                        onClick={() => {
                          setIsWishlistOpen(false);
                          setActiveProductDetail(product);
                        }}
                        className="inline-flex items-center gap-1 text-xs font-medium text-[#222222] hover:text-[#daaf37] transition-colors cursor-pointer"
                      >
                        <span>Personalize & Order</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-[#daaf37]" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Actions */}
          {wishlistedProducts.length > 0 && (
            <div className="p-6 bg-white border-t border-[#E8E2D8] space-y-3">
              <button
                onClick={() => {
                  setIsWishlistOpen(false);
                  setCurrentView('shop');
                  setSelectedCategoryFilter('All');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="w-full py-3 bg-[#daaf37] text-[#222222] hover:bg-[#c49b2c] rounded-[8px] text-xs font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-md"
              >
                <span>Continue Shopping Curations</span>
                <ArrowRight className="w-4 h-4 text-[#222222]" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
