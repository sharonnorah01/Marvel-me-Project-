import React from 'react';
import { Product } from '../data/products';
import { useCart } from '../context/CartContext';
import { Star, Sparkles, ArrowUpRight } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { setActiveProductDetail } = useCart();

  return (
    <div
      onClick={() => setActiveProductDetail(product)}
      className="group flex flex-col bg-white rounded-[8px] border border-[#E2DBD0] hover:border-[#C5A880]/60 hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer"
    >
      {/* Product Image Stage */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#F6F2EA]">
        <img
          src={product.images[0]}
          onError={(e) => {
            const target = e.currentTarget;
            if (!target.src.includes('/images/hero_luxury_gift_box.jpg')) {
              target.src = '/images/hero_luxury_gift_box.jpg';
            }
          }}
          alt={product.name}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
        />

        {/* Subtle status tag (max 1 tag, anti-pill discipline) */}
        {product.bestseller && (
          <div className="absolute top-3 left-3 bg-[#FAF7F2]/90 backdrop-blur-sm border border-[#C5A880]/40 px-2.5 py-1 rounded-[6px] text-[11px] font-medium text-[#1C1A18] tracking-wider uppercase">
            Bestseller
          </div>
        )}
        {!product.bestseller && product.featured && (
          <div className="absolute top-3 left-3 bg-[#FAF7F2]/90 backdrop-blur-sm border border-[#C5A880]/40 px-2.5 py-1 rounded-[6px] text-[11px] font-medium text-[#1C1A18] tracking-wider uppercase">
            Signature
          </div>
        )}

        {/* Quick view / customize overlay hover button */}
        <div className="absolute inset-0 bg-[#1C1A18]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setActiveProductDetail(product);
            }}
            className="w-full py-2.5 bg-[#FAF7F2] text-[#1C1A18] hover:bg-white text-xs font-semibold rounded-[8px] transition-colors shadow-md flex items-center justify-center gap-1.5"
          >
            <span>Personalize & Order</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#A58457]" />
          </button>
        </div>
      </div>

      {/* Card Body & Metadata */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
        <div>
          {/* Category & Rating Row */}
          <div className="flex items-center justify-between text-xs text-[#7A746B] mb-1">
            <span className="uppercase tracking-wider text-[11px] font-medium text-[#8C6D3B]">
              {product.category}
            </span>
            <div className="flex items-center gap-1">
              <Star className="w-3.5 h-3.5 fill-[#C5A880] text-[#C5A880]" />
              <span className="font-semibold text-[#2D2A26] tabular-nums">
                {product.rating.toFixed(1)}
              </span>
              <span className="text-[#8C8479]">({product.reviewCount})</span>
            </div>
          </div>

          {/* Product Title */}
          <h3 className="font-serif-luxury text-lg sm:text-xl text-[#1C1A18] font-medium group-hover:text-[#A58457] transition-colors line-clamp-1">
            {product.name}
          </h3>

          {/* Tagline */}
          <p className="text-xs text-[#5C574F] line-clamp-2 mt-1 leading-relaxed">
            {product.tagline}
          </p>
        </div>

        {/* Footer with Price and Details */}
        <div className="pt-3 border-t border-[#F0EAE1] flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className="text-base font-semibold text-[#1C1A18] tabular-nums">
              ${product.price}
            </span>
            {product.originalPrice && (
              <span className="text-xs text-[#8C8479] line-through tabular-nums">
                ${product.originalPrice}
              </span>
            )}
          </div>

          <div className="text-[11px] text-[#A58457] font-medium flex items-center gap-1">
            <Sparkles className="w-3 h-3" />
            <span>Wrap & Note Included</span>
          </div>
        </div>
      </div>
    </div>
  );
};
