import React, { useState } from 'react';
import { Product, GIFT_WRAPPING_OPTIONS, CARD_STYLES, GiftWrappingOption } from '../data/products';
import { useCart } from '../context/CartContext';
import { 
  X, Star, Check, Sparkles, Calendar, Clock, 
  ShieldCheck, Truck, ArrowLeft, Heart, Share2, 
  MessageSquare, User, AlertCircle
} from 'lucide-react';
import { handleImageFallback } from '../utils/images';

interface ProductDetailViewProps {
  product: Product;
  onClose: () => void;
}

export const ProductDetailView: React.FC<ProductDetailViewProps> = ({ product, onClose }) => {
  const { addToCart, toggleWishlist, isInWishlist } = useCart();
  const isFavorited = isInWishlist(product.id);

  // Active image index
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Customization state
  const [selectedWrapping, setSelectedWrapping] = useState<GiftWrappingOption>(GIFT_WRAPPING_OPTIONS[0]);
  const [cardTo, setCardTo] = useState('My Dearest');
  const [cardFrom, setCardFrom] = useState('With all my love');
  const [cardMessage, setCardMessage] = useState(
    'Wishing you moments of gentle tranquility, joyous wonder, and heartfelt peace. You deserve all the beauty in this world.'
  );
  const [selectedCardStyle, setSelectedCardStyle] = useState(CARD_STYLES[0].id);

  // Delivery Scheduling state
  const tomorrow = new Date(Date.now() + 86400000).toISOString().split('T')[0];
  const [deliveryDate, setDeliveryDate] = useState(tomorrow);
  const [deliveryTimeSlot, setDeliveryTimeSlot] = useState('Afternoon 1pm - 5pm');
  const [deliveryInstructions, setDeliveryInstructions] = useState('');

  // Quantity state
  const [quantity, setQuantity] = useState(1);
  const [isAddedSuccess, setIsAddedSuccess] = useState(false);
  const [newReviewAuthor, setNewReviewAuthor] = useState('');
  const [newReviewTitle, setNewReviewTitle] = useState('');
  const [newReviewComment, setNewReviewComment] = useState('');
  const [newReviewRating, setNewReviewRating] = useState(5);
  const [reviewsList, setReviewsList] = useState(product.reviews);
  const [reviewSubmittedMessage, setReviewSubmittedMessage] = useState(false);

  const totalPrice = (product.price + selectedWrapping.price) * quantity;

  const handleAddToCart = () => {
    addToCart(
      product,
      quantity,
      selectedWrapping,
      {
        to: cardTo,
        from: cardFrom,
        message: cardMessage,
        cardStyle: selectedCardStyle,
      },
      {
        date: deliveryDate,
        timeSlot: deliveryTimeSlot,
        specialInstructions: deliveryInstructions,
      }
    );
    setIsAddedSuccess(true);
    setTimeout(() => {
      setIsAddedSuccess(false);
      onClose();
    }, 800);
  };

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReviewAuthor.trim() || !newReviewComment.trim()) return;

    const newRev = {
      id: `rev-${Date.now()}`,
      author: newReviewAuthor.trim(),
      location: 'Verified Client',
      rating: newReviewRating,
      date: 'Just now',
      title: newReviewTitle.trim() || 'Exquisite presentation',
      comment: newReviewComment.trim(),
      verified: true,
    };

    setReviewsList([newRev, ...reviewsList]);
    setNewReviewAuthor('');
    setNewReviewTitle('');
    setNewReviewComment('');
    setReviewSubmittedMessage(true);
    setTimeout(() => setReviewSubmittedMessage(false), 4000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#222222]/70 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4 md:p-6 animate-in fade-in duration-200">
      
      {/* Container with soft cream background & 8px rounded corners */}
      <div className="relative bg-[#FAF7F2] text-[#2D2A26] w-full max-w-6xl max-h-[92vh] overflow-y-auto rounded-[8px] shadow-2xl border border-[#D9D2C7] flex flex-col">
        
        {/* Top Header Navigation Strip */}
        <div className="sticky top-0 z-30 bg-[#FAF7F2]/95 backdrop-blur-md px-6 py-4 border-b border-[#E8E2D8] flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-[#7A746B]">
            <button
              onClick={onClose}
              className="hover:text-[#222222] flex items-center gap-1 font-medium cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Collection</span>
            </button>
            <span aria-hidden="true">·</span>
            <span className="uppercase tracking-wider text-[#daaf37] font-semibold">{product.category}</span>
          </div>

          <button
            onClick={onClose}
            aria-label="Close product view"
            className="p-1.5 rounded-[8px] text-[#5C574F] hover:text-[#222222] hover:bg-[#EAE4D8] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Main Content */}
        <div className="p-6 sm:p-8 lg:p-10 space-y-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            
            {/* LEFT COLUMN: High-Resolution Gallery & Overview */}
            <div className="lg:col-span-7 space-y-8">
              
              {/* Primary Image Stage */}
              <div className="relative aspect-[4/3] rounded-[8px] overflow-hidden border border-[#D9D2C7] bg-[#F4EFEA] shadow-sm">
                <img
                  src={product.images[activeImageIndex] || product.images[0]}
                  onError={(e) => handleImageFallback(e, product.category)}
                  alt={product.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center"
                />

                <div className="absolute bottom-3 left-3 bg-[#222222]/80 text-[#FAF7F2] text-[11px] px-2.5 py-1 rounded-[6px] backdrop-blur-sm">
                  Image {activeImageIndex + 1} of {product.images.length} · Studio High-Res
                </div>
              </div>

              {/* Thumbnails Strip */}
              {product.images.length > 1 && (
                <div className="flex gap-3 overflow-x-auto no-scrollbar scrollbar-none pb-1">
                  {product.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      className={`relative w-20 h-20 rounded-[8px] overflow-hidden border-2 shrink-0 transition-all cursor-pointer ${
                        activeImageIndex === idx ? 'border-[#daaf37] scale-102 shadow-sm' : 'border-[#E2DBD0] opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img
                        src={img}
                        onError={(e) => handleImageFallback(e, product.category)}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}

              {/* Product Narrative & Sourcing */}
              <div className="bg-white p-6 rounded-[8px] border border-[#E2DBD0] space-y-4">
                <h3 className="font-serif-luxury text-2xl text-[#222222] font-medium">
                  The Art of the Curation
                </h3>
                <p className="text-sm text-[#524E48] leading-relaxed">
                  {product.description}
                </p>

                {/* What's Inside Checklist */}
                <div className="pt-4 border-t border-[#F0EAE1]">
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-[#daaf37] mb-3">
                    What Arrives Inside the Keepsake:
                  </h4>
                  <ul className="space-y-2.5">
                    {product.includes.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-[#3D3A36]">
                        <span className="w-4 h-4 rounded-full bg-[#FAF7F2] border border-[#daaf37] flex items-center justify-center shrink-0 mt-0.5 text-[#222222] font-bold">
                          ✓
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {product.dimensions && (
                  <div className="pt-3 border-t border-[#F0EAE1] flex items-center justify-between text-xs text-[#7A746B]">
                    <span className="font-medium text-[#4A4641]">Dimensions & Weight:</span>
                    <span>{product.dimensions}</span>
                  </div>
                )}
              </div>

              {/* Customer Reviews Section */}
              <div className="bg-white p-6 rounded-[8px] border border-[#E2DBD0] space-y-6">
                <div className="flex items-center justify-between border-b border-[#F0EAE1] pb-4">
                  <div>
                    <h3 className="font-serif-luxury text-2xl text-[#222222] font-medium">
                      Customer Reviews & Stories
                    </h3>
                    <div className="flex items-center gap-2 mt-1 text-xs text-[#7A746B]">
                      <div className="flex text-[#daaf37]">
                        {'★'.repeat(5)}
                      </div>
                      <span className="font-semibold text-[#222222] tabular-nums">
                        {product.rating.toFixed(2)} out of 5
                      </span>
                      <span>· Based on {reviewsList.length} verified gifts</span>
                    </div>
                  </div>
                </div>

                {/* Reviews List */}
                <div className="space-y-4">
                  {reviewsList.map((rev) => (
                    <div key={rev.id} className="p-4 rounded-[8px] bg-[#FAF7F2] border border-[#EAE4D8] space-y-2">
                      <div className="flex items-center justify-between text-xs">
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-[#222222]">{rev.author}</span>
                          {rev.verified && (
                            <span className="text-[11px] text-[#daaf37] font-semibold flex items-center gap-0.5">
                              ✓ Verified Buyer
                            </span>
                          )}
                        </div>
                        <span className="text-[#8C8479]">{rev.date}</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <div className="text-[#daaf37] text-xs">
                          {'★'.repeat(rev.rating)}
                        </div>
                        <span className="text-xs font-semibold text-[#2D2A26]">{rev.title}</span>
                      </div>

                      <p className="text-xs text-[#524E48] leading-relaxed">
                        “{rev.comment}”
                      </p>
                    </div>
                  ))}
                </div>

                {/* Write a Review Form */}
                <form onSubmit={handleAddReview} className="pt-4 border-t border-[#F0EAE1] space-y-3">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#daaf37]">
                    Share Your Gifting Experience
                  </h4>
                  
                  {reviewSubmittedMessage && (
                    <div className="p-3 bg-[#EAF5EC] text-[#245D33] text-xs rounded-[8px] flex items-center gap-2">
                      <Check className="w-4 h-4" />
                      <span>Thank you! Your verified review has been published.</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="text"
                      placeholder="Your Name (e.g. Charlotte M.)"
                      value={newReviewAuthor}
                      onChange={(e) => setNewReviewAuthor(e.target.value)}
                      required
                      className="px-3 py-2 text-xs bg-[#FAF7F2] border border-[#D9D2C7] rounded-[8px] focus:outline-none focus:border-[#daaf37]"
                    />
                    <input
                      type="text"
                      placeholder="Headline (e.g. Truly felt like a hug!)"
                      value={newReviewTitle}
                      onChange={(e) => setNewReviewTitle(e.target.value)}
                      className="px-3 py-2 text-xs bg-[#FAF7F2] border border-[#D9D2C7] rounded-[8px] focus:outline-none focus:border-[#daaf37]"
                    />
                  </div>

                  <textarea
                    rows={2}
                    placeholder="Describe how the recipient reacted, the unboxing, and the sensory details..."
                    value={newReviewComment}
                    onChange={(e) => setNewReviewComment(e.target.value)}
                    required
                    className="w-full px-3 py-2 text-xs bg-[#FAF7F2] border border-[#D9D2C7] rounded-[8px] focus:outline-none focus:border-[#daaf37] leading-relaxed"
                  />

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-xs text-[#7A746B]">
                      <span>Rating:</span>
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setNewReviewRating(star)}
                          className={`text-base cursor-pointer ${
                            star <= newReviewRating ? 'text-[#daaf37]' : 'text-[#D1C9BC]'
                          }`}
                        >
                          ★
                        </button>
                      ))}
                    </div>

                    <button
                      type="submit"
                      className="px-4 py-2 bg-[#daaf37] text-[#222222] hover:bg-[#c49b2c] text-xs font-semibold rounded-[8px] transition-colors cursor-pointer shadow-sm"
                    >
                      Publish Review
                    </button>
                  </div>
                </form>

              </div>

            </div>

            {/* RIGHT COLUMN: Contiguous Purchase & Customization Module */}
            <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-24">
              
              {/* Product Header Card */}
              <div className="bg-white p-6 rounded-[8px] border border-[#E2DBD0] shadow-sm space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-wider font-semibold text-[#daaf37]">
                    {product.category}
                  </span>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1 text-xs text-[#7A746B]">
                      <Star className="w-3.5 h-3.5 fill-[#daaf37] text-[#daaf37]" />
                      <span className="font-semibold text-[#222222] tabular-nums">{product.rating}</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => toggleWishlist(product.id)}
                      aria-label={isFavorited ? 'Remove from wishlist' : 'Save to wishlist'}
                      className="p-1.5 rounded-full border border-[#E2DBD0] hover:border-[#daaf37] transition-all hover:scale-105 cursor-pointer bg-[#FAF7F2]"
                      title={isFavorited ? 'Remove from Wishlist' : 'Save to Wishlist'}
                    >
                      <Heart
                        className={`w-4 h-4 transition-colors ${
                          isFavorited ? 'text-[#daaf37] fill-[#daaf37]' : 'text-[#5C574F]'
                        }`}
                      />
                    </button>
                  </div>
                </div>

                <h1 className="font-serif-luxury text-3xl text-[#222222] font-medium leading-tight">
                  {product.name}
                </h1>

                <p className="text-xs text-[#66615B] italic leading-relaxed">
                  “{product.tagline}”
                </p>

                <div className="flex items-baseline gap-3 pt-2">
                  <span className="text-2xl font-bold text-[#222222] tabular-nums">
                    ${product.price}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm text-[#8C8479] line-through tabular-nums">
                      ${product.originalPrice}
                    </span>
                  )}
                  <span className="text-xs text-[#daaf37] font-semibold bg-[#FAF7F2] px-2.5 py-0.5 rounded-[6px] border border-[#daaf37]/40">
                    Complimentary Handwritten Note
                  </span>
                </div>
              </div>

              {/* 1. Gift-Wrapping Customization Option */}
              <div className="bg-white p-6 rounded-[8px] border border-[#E2DBD0] shadow-sm space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-serif-luxury text-lg text-[#222222] font-medium">
                      1. Gift-Wrapping Presentation
                    </h3>
                    <p className="text-xs text-[#7A746B]">
                      Every parcel is hand-finished in our atelier
                    </p>
                  </div>
                  <span className="text-xs font-semibold text-[#d9a300] tabular-nums">
                    {selectedWrapping.price === 0 ? 'Included' : `+$${selectedWrapping.price}`}
                  </span>
                </div>

                {/* Wrapping Styles Selector */}
                <div className="space-y-2.5">
                  {GIFT_WRAPPING_OPTIONS.map((wrap) => {
                    const isSelected = selectedWrapping.id === wrap.id;
                    return (
                      <button
                        key={wrap.id}
                        type="button"
                        onClick={() => setSelectedWrapping(wrap)}
                        className={`w-full p-3 text-left rounded-[8px] border transition-all cursor-pointer flex items-start gap-3 ${
                          isSelected
                            ? 'bg-[#FAF7F2] border-[#daaf37] shadow-sm ring-1 ring-[#daaf37]'
                            : 'bg-white border-[#E2DBD0] hover:border-[#daaf37]'
                        }`}
                      >
                        <div
                          className="w-7 h-7 rounded-[6px] shrink-0 border border-[#D9D2C7] flex items-center justify-center shadow-inner mt-0.5"
                          style={{ backgroundColor: wrap.previewColor }}
                        >
                          <div
                            className="w-3.5 h-3.5 rounded-full"
                            style={{ backgroundColor: wrap.accentColor }}
                          />
                        </div>

                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-semibold text-[#222222]">
                              {wrap.name}
                            </span>
                            <span className="text-xs text-[#7A746B] tabular-nums font-medium">
                              {wrap.price === 0 ? 'Complimentary' : `+$${wrap.price}`}
                            </span>
                          </div>
                          <p className="text-[11px] text-[#5C574F] mt-0.5 line-clamp-1 leading-normal">
                            {wrap.description}
                          </p>
                        </div>

                        {isSelected && (
                          <div className="w-4 h-4 rounded-full bg-[#222222] text-[#daaf37] font-bold flex items-center justify-center text-[10px] shrink-0 mt-1">
                            ✓
                          </div>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 2. Personalized Note Field with Live Handwriting Preview */}
              <div className="bg-white p-6 rounded-[8px] border border-[#E2DBD0] shadow-sm space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-serif-luxury text-lg text-[#222222] font-medium">
                      2. Personalized Note Field
                    </h3>
                    <p className="text-xs text-[#7A746B]">
                      Penned in bespoke calligraphy on heavy letterpress card
                    </p>
                  </div>
                  <Sparkles className="w-4 h-4 text-[#daaf37]" />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#7A746B] mb-1">
                      To (Recipient)
                    </label>
                    <input
                      type="text"
                      value={cardTo}
                      onChange={(e) => setCardTo(e.target.value)}
                      placeholder="e.g. My Dearest Olivia"
                      className="w-full px-3 py-2 text-xs bg-[#FAF7F2] border border-[#D9D2C7] rounded-[8px] focus:outline-none focus:border-[#daaf37]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#7A746B] mb-1">
                      From (Sender)
                    </label>
                    <input
                      type="text"
                      value={cardFrom}
                      onChange={(e) => setCardFrom(e.target.value)}
                      placeholder="e.g. Julian"
                      className="w-full px-3 py-2 text-xs bg-[#FAF7F2] border border-[#D9D2C7] rounded-[8px] focus:outline-none focus:border-[#daaf37]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#7A746B] mb-1">
                    Your Heartfelt Message
                  </label>
                  <textarea
                    rows={3}
                    value={cardMessage}
                    onChange={(e) => setCardMessage(e.target.value)}
                    placeholder="Write a message that feels like a hug..."
                    className="w-full px-3 py-2 text-xs bg-[#FAF7F2] border border-[#D9D2C7] rounded-[8px] focus:outline-none focus:border-[#daaf37] leading-relaxed"
                  />
                  <div className="flex justify-between text-[11px] text-[#8C8479] mt-1">
                    <span>Card style:</span>
                    <div className="flex gap-2">
                      {CARD_STYLES.map((cs) => (
                        <button
                          key={cs.id}
                          type="button"
                          onClick={() => setSelectedCardStyle(cs.id)}
                          className={`cursor-pointer px-2 py-0.5 rounded-[4px] text-[10px] ${
                            selectedCardStyle === cs.id
                              ? 'bg-[#222222] text-[#daaf37] font-bold'
                              : 'bg-[#F2EDE4] text-[#4A4641]'
                          }`}
                        >
                          {cs.name.split(' ')[0]}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Live Handwriting Card Preview Box */}
                <div className="p-4 rounded-[8px] border border-[#daaf37]/40 bg-[#FFFDF9] shadow-inner relative overflow-hidden">
                  <div className="absolute top-2 right-2 text-[10px] uppercase tracking-wider text-[#daaf37] font-mono">
                    ✦ Live Card Preview
                  </div>
                  <div className="pt-2 text-left space-y-2">
                    <p className="font-handwriting text-xl text-[#3D372E]">
                      Dearest {cardTo || 'Friend'},
                    </p>
                    <p className="font-handwriting text-lg text-[#3D372E] leading-relaxed pl-2">
                      {cardMessage || 'Your gentle message will appear here in calligraphy...'}
                    </p>
                    <p className="font-handwriting text-xl text-[#3D372E] text-right pt-1">
                      — {cardFrom || 'Your Friend'}
                    </p>
                  </div>
                  <div className="mt-2 pt-2 border-t border-[#EAE2D5] flex items-center justify-between text-[10px] text-[#8C8479]">
                    <span>Marvel Me Atelier Seal</span>
                    <span>450gsm Cotton Card</span>
                  </div>
                </div>
              </div>

              {/* 3. Delivery Scheduling */}
              <div className="bg-white p-6 rounded-[8px] border border-[#E2DBD0] shadow-sm space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-serif-luxury text-lg text-[#222222] font-medium">
                      3. Milestone Delivery Scheduling
                    </h3>
                    <p className="text-xs text-[#7A746B]">
                      Guaranteed hand-delivery on your requested date
                    </p>
                  </div>
                  <Truck className="w-4 h-4 text-[#daaf37]" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#7A746B] mb-1">
                      Delivery Date
                    </label>
                    <input
                      type="date"
                      min={tomorrow}
                      value={deliveryDate}
                      onChange={(e) => setDeliveryDate(e.target.value)}
                      className="w-full px-3 py-2 text-xs bg-[#FAF7F2] border border-[#D9D2C7] rounded-[8px] focus:outline-none focus:border-[#daaf37]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#7A746B] mb-1">
                      Time Slot
                    </label>
                    <select
                      value={deliveryTimeSlot}
                      onChange={(e) => setDeliveryTimeSlot(e.target.value)}
                      className="w-full px-3 py-2 text-xs bg-[#FAF7F2] border border-[#D9D2C7] rounded-[8px] focus:outline-none focus:border-[#daaf37]"
                    >
                      <option value="Morning 9am - 12pm">Morning (9am - 12pm)</option>
                      <option value="Afternoon 1pm - 5pm">Afternoon (1pm - 5pm)</option>
                      <option value="Golden Hour 5pm - 8pm">Golden Hour (5pm - 8pm)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#7A746B] mb-1">
                    Special Courier Instructions (Optional)
                  </label>
                  <input
                    type="text"
                    value={deliveryInstructions}
                    onChange={(e) => setDeliveryInstructions(e.target.value)}
                    placeholder="e.g. Leave with concierge, or do not reveal sender until opened"
                    className="w-full px-3 py-2 text-xs bg-[#FAF7F2] border border-[#D9D2C7] rounded-[8px] focus:outline-none focus:border-[#daaf37]"
                  />
                </div>
              </div>

              {/* Purchase Action Box */}
              <div className="bg-[#FAF7F2] p-5 rounded-[8px] border border-[#D9D2C7] space-y-4">
                
                {/* Quantity & Total */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center border border-[#D9D2C7] rounded-[8px] bg-white">
                    <button
                      type="button"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-3 py-2 text-sm text-[#5C574F] hover:text-[#222222] hover:bg-[#FAF7F2] rounded-l-[8px] cursor-pointer"
                    >
                      -
                    </button>
                    <span className="px-3 py-2 text-xs font-semibold tabular-nums min-w-8 text-center">
                      {quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-3 py-2 text-sm text-[#5C574F] hover:text-[#222222] hover:bg-[#FAF7F2] rounded-r-[8px] cursor-pointer"
                    >
                      +
                    </button>
                  </div>

                  <div className="text-right">
                    <div className="text-xs text-[#7A746B]">Total including customization</div>
                    <div className="text-2xl font-bold text-[#222222] tabular-nums">
                      ${totalPrice}
                    </div>
                  </div>
                </div>

                {/* Primary Add to Bag CTA */}
                <button
                  type="button"
                  onClick={handleAddToCart}
                  disabled={isAddedSuccess}
                  className={`w-full py-4 text-sm font-semibold rounded-[8px] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md ${
                    isAddedSuccess
                      ? 'bg-[#2E6B3E] text-white'
                      : 'bg-[#daaf37] text-[#222222] hover:bg-[#c49b2c]'
                  }`}
                >
                  {isAddedSuccess ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Added to Shopping Bag!</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4 text-[#222222]" />
                      <span>Add to Bag · ${totalPrice}</span>
                    </>
                  )}
                </button>

                <div className="grid grid-cols-2 gap-2 text-[11px] text-[#7A746B] pt-2">
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#daaf37]" />
                    <span>Arrival Guarantee</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Heart className="w-3.5 h-3.5 text-[#daaf37]" />
                    <span>Curated with Love</span>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};
