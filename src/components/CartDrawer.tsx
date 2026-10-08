import React from 'react';
import { useCart } from '../context/CartContext';
import { X, Trash2, ShoppingBag, ArrowRight, Sparkles, Calendar, Gift, Lock } from 'lucide-react';
import { handleImageFallback } from '../utils/images';

export const CartDrawer: React.FC = () => {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    subtotal,
    cartCount,
    setIsCheckoutOpen,
    setActiveProductDetail,
    setCurrentView,
  } = useCart();

  if (!isCartOpen) return null;

  const freeDeliveryThreshold = 250;
  const progressToFreeDelivery = Math.min(100, (subtotal / freeDeliveryThreshold) * 100);
  const remainingForFree = Math.max(0, freeDeliveryThreshold - subtotal);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-[#222222]/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="absolute inset-0" onClick={() => setIsCartOpen(false)} />

      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FAF7F2] text-[#2D2A26] shadow-2xl flex flex-col border-l border-[#D9D2C7]">
          
          {/* Header */}
          <div className="p-6 bg-white border-b border-[#E8E2D8] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#daaf37]" />
              <h2 className="font-serif-luxury text-2xl text-[#222222] font-medium">
                Shopping Bag
              </h2>
              <span className="text-xs text-[#8C8479] tabular-nums">
                ({cartCount} {cartCount === 1 ? 'item' : 'items'})
              </span>
            </div>

            <button
              onClick={() => setIsCartOpen(false)}
              aria-label="Close bag"
              className="p-1.5 rounded-[8px] text-[#5C574F] hover:text-[#222222] hover:bg-[#FAF7F2] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Complimentary Delivery Incentive */}
          <div className="bg-[#F4EFEA] px-6 py-3 border-b border-[#E8E2D8] text-xs">
            {remainingForFree === 0 ? (
              <div className="flex items-center gap-1.5 text-[#245D33] font-medium">
                <Sparkles className="w-3.5 h-3.5 text-[#daaf37]" />
                <span>You unlocked Complimentary Milestone White-Glove Courier!</span>
              </div>
            ) : (
              <div className="space-y-1.5">
                <div className="flex justify-between text-[#5C574F]">
                  <span>Add <strong className="text-[#222222]">${remainingForFree}</strong> for Complimentary Courier</span>
                  <span className="tabular-nums font-semibold text-[#daaf37]">{Math.round(progressToFreeDelivery)}%</span>
                </div>
                <div className="h-1 bg-[#E2DBD0] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#daaf37] transition-all duration-300"
                    style={{ width: `${progressToFreeDelivery}%` }}
                  />
                </div>
              </div>
            )}
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-5">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12">
                <div className="w-16 h-16 rounded-full bg-white border border-[#D9D2C7] flex items-center justify-center text-[#daaf37]">
                  <Gift className="w-7 h-7" />
                </div>
                <h3 className="font-serif-luxury text-xl text-[#222222]">
                  Your Bag is Currently Empty
                </h3>
                <p className="text-xs text-[#7A746B] max-w-xs leading-relaxed">
                  Discover curations that feel like a warm hug, personalized with handwritten notes and luxury wrapping.
                </p>
                <button
                  onClick={() => {
                    setIsCartOpen(false);
                    setCurrentView('shop');
                  }}
                  className="px-6 py-2.5 bg-[#daaf37] text-[#222222] rounded-[8px] text-xs font-semibold hover:bg-[#c49b2c] transition-colors cursor-pointer shadow-sm"
                >
                  Explore Gift Catalog
                </button>
              </div>
            ) : (
              cart.map((item) => {
                const itemTotal = (item.product.price + item.wrappingOption.price) * item.quantity;
                return (
                  <div
                    key={item.cartItemId}
                    className="p-4 bg-white rounded-[8px] border border-[#E2DBD0] space-y-3 shadow-sm"
                  >
                    <div className="flex gap-3">
                      <img
                        src={item.product.images[0]}
                        onError={(e) => handleImageFallback(e, item.product.category)}
                        alt={item.product.name}
                        className="w-18 h-18 rounded-[8px] object-cover border border-[#E8E2D8] shrink-0"
                      />

                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between">
                          <h4 className="font-serif-luxury text-base text-[#222222] font-medium leading-tight line-clamp-1">
                            {item.product.name}
                          </h4>
                          <button
                            onClick={() => removeFromCart(item.cartItemId)}
                            aria-label="Remove item"
                            className="text-[#A8A29E] hover:text-[#991B1B] p-0.5 ml-1 transition-colors cursor-pointer"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>

                        <p className="text-[11px] text-[#d9a300] uppercase tracking-wider font-semibold mt-0.5">
                          {item.product.treasureCategory || item.product.category}
                        </p>

                        <div className="text-xs font-bold text-[#222222] mt-1 tabular-nums">
                          ${itemTotal}
                        </div>
                      </div>
                    </div>

                    {/* Customization Details Summary */}
                    <div className="bg-[#FAF7F2] p-2.5 rounded-[6px] text-[11px] space-y-1.5 border border-[#EAE4D8]">
                      {/* Wrapping */}
                      <div className="flex items-center justify-between text-[#4A4641]">
                        <span className="flex items-center gap-1">
                          <Sparkles className="w-3 h-3 text-[#daaf37]" />
                          <span>Wrap: {item.wrappingOption.name}</span>
                        </span>
                        <span className="tabular-nums font-medium text-[#7A746B]">
                          {item.wrappingOption.price === 0 ? 'Free' : `+$${item.wrappingOption.price}`}
                        </span>
                      </div>

                      {/* Handwritten note preview */}
                      {item.personalizedNote.message && (
                        <div className="text-[#5C574F] italic border-t border-[#EAE2D5] pt-1 leading-snug line-clamp-2">
                          “{item.personalizedNote.message}”
                          <span className="not-italic text-[10px] text-[#8C8479] ml-1">
                            (To: {item.personalizedNote.to || 'Recipient'})
                          </span>
                        </div>
                      )}

                      {/* Scheduled Delivery Date */}
                      <div className="flex items-center gap-1 text-[#daaf37] border-t border-[#EAE2D5] pt-1">
                        <Calendar className="w-3 h-3" />
                        <span>Scheduled: {item.deliverySchedule.date} ({item.deliverySchedule.timeSlot})</span>
                      </div>
                    </div>

                    {/* Quantity Adjustment */}
                    <div className="flex items-center justify-between pt-1 text-xs">
                      <span className="text-[#7A746B]">Quantity</span>
                      <div className="flex items-center border border-[#D9D2C7] rounded-[6px] bg-[#FAF7F2]">
                        <button
                          onClick={() => updateQuantity(item.cartItemId, item.quantity - 1)}
                          className="px-2 py-0.5 text-xs text-[#5C574F] hover:text-[#222222] cursor-pointer"
                        >
                          -
                        </button>
                        <span className="px-2 text-xs font-semibold tabular-nums">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.cartItemId, item.quantity + 1)}
                          className="px-2 py-0.5 text-xs text-[#5C574F] hover:text-[#222222] cursor-pointer"
                        >
                          +
                        </button>
                      </div>
                    </div>

                  </div>
                );
              })
            )}
          </div>

          {/* Footer & Checkout Button */}
          {cart.length > 0 && (
            <div className="p-6 bg-white border-t border-[#E8E2D8] space-y-4">
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between text-[#5C574F]">
                  <span>Subtotal</span>
                  <span className="tabular-nums font-bold text-[#222222]">${subtotal}</span>
                </div>
                <div className="flex justify-between text-[#5C574F]">
                  <span>Artisanal Gift-Wrapping</span>
                  <span className="text-[#245D33] font-medium">Itemized Above</span>
                </div>
                <div className="flex justify-between text-[#5C574F]">
                  <span>Personalized Calligraphy Note</span>
                  <span className="text-[#245D33] font-medium">Complimentary</span>
                </div>
                <div className="flex justify-between text-[#222222] text-base font-bold pt-2 border-t border-[#F0EAE1]">
                  <span>Estimated Total</span>
                  <span className="tabular-nums">${subtotal}</span>
                </div>
              </div>

              <button
                onClick={() => {
                  setIsCartOpen(false);
                  setIsCheckoutOpen(true);
                }}
                className="w-full py-4 bg-[#daaf37] text-[#222222] hover:bg-[#c49b2c] text-sm font-semibold rounded-[8px] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <Lock className="w-4 h-4 text-[#222222]" />
                <span>Seamless Checkout · ${subtotal}</span>
                <ArrowRight className="w-4 h-4 text-[#222222]" />
              </button>

              <div className="text-center text-[11px] text-[#8C8479]">
                🔒 256-Bit Encrypted · Real-Time Milestone Tracking Included
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
