import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { 
  X, Check, Lock, ShieldCheck, Truck, CreditCard, 
  Sparkles, Calendar, ArrowLeft, ArrowRight, Printer, HeartHandshake
} from 'lucide-react';

export const CheckoutModal: React.FC = () => {
  const { isCheckoutOpen, setIsCheckoutOpen, cart, subtotal, clearCart } = useCart();

  // Multi-step form: 'details' -> 'payment' -> 'confirmed'
  const [step, setStep] = useState<'details' | 'payment' | 'confirmed'>('details');

  // Shipping state
  const [recipientName, setRecipientName] = useState('Eleanor Vance');
  const [senderEmail, setSenderEmail] = useState('arthur.pendelton@example.com');
  const [phone, setPhone] = useState('+1 (555) 234-8971');
  const [streetAddress, setStreetAddress] = useState('742 Kensington Crescent, Suite 4B');
  const [city, setCity] = useState('San Francisco');
  const [postalCode, setPostalCode] = useState('94102');
  const [country, setCountry] = useState('United States');
  const [isGiftSurprise, setIsGiftSurprise] = useState(true);

  // Payment state
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'apple' | 'klarna'>('card');
  const [cardNumber, setCardNumber] = useState('4242 •••• •••• 9821');
  const [cardExpiry, setCardExpiry] = useState('11/29');
  const [cardCvc, setCardCvc] = useState('883');
  const [isProcessing, setIsProcessing] = useState(false);

  // Generated Order Details
  const [orderId, setOrderId] = useState('');
  const [orderDate, setOrderDate] = useState('');

  if (!isCheckoutOpen) return null;

  const handleProceedToPayment = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('payment');
  };

  const handleCompleteOrder = () => {
    setIsProcessing(true);
    setTimeout(() => {
      const generatedId = `MM-${Math.floor(10000 + Math.random() * 90000)}-LUXE`;
      setOrderId(generatedId);
      setOrderDate(new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }));
      setIsProcessing(false);
      setStep('confirmed');
      clearCart();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/65 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="relative bg-[#FAF7F2] text-[#2D2A26] w-full max-w-3xl rounded-[8px] shadow-2xl border border-[#D9D2C7] overflow-hidden flex flex-col my-auto">
        
        {/* Top Header */}
        <div className="bg-[#1C1A18] text-[#FAF7F2] px-6 py-4 flex items-center justify-between border-b border-[#C5A880]/30">
          <div className="flex items-center gap-3">
            <span className="font-serif-luxury text-2xl font-medium tracking-wide">
              Marvel Me Atelier
            </span>
            <span className="text-xs text-[#C5A880] border-l border-white/20 pl-3 hidden sm:inline">
              Seamless Luxury Checkout
            </span>
          </div>

          <button
            onClick={() => setIsCheckoutOpen(false)}
            aria-label="Close checkout"
            className="p-1 rounded-[6px] text-[#A8A29E] hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Checkout Steps Bar */}
        {step !== 'confirmed' && (
          <div className="bg-[#F4EFEA] px-6 py-3 border-b border-[#E8E2D8] flex items-center justify-between text-xs font-medium">
            <div className="flex items-center gap-2">
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[11px] ${
                step === 'details' ? 'bg-[#1C1A18] text-white' : 'bg-[#245D33] text-white'
              }`}>
                {step === 'payment' ? '✓' : '1'}
              </span>
              <span className={step === 'details' ? 'text-[#1C1A18] font-bold' : 'text-[#7A746B]'}>
                1. Recipient & Milestone Delivery
              </span>
            </div>

            <div className="h-0.5 w-8 bg-[#D9D2C7] hidden sm:block" />

            <div className="flex items-center gap-2">
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[11px] ${
                step === 'payment' ? 'bg-[#1C1A18] text-white' : 'bg-[#D9D2C7] text-[#5C574F]'
              }`}>
                2
              </span>
              <span className={step === 'payment' ? 'text-[#1C1A18] font-bold' : 'text-[#7A746B]'}>
                2. Secure Payment
              </span>
            </div>

            <div className="h-0.5 w-8 bg-[#D9D2C7] hidden sm:block" />

            <div className="flex items-center gap-2 text-[#7A746B]">
              <span className="w-5 h-5 rounded-full bg-[#D9D2C7] flex items-center justify-center text-[11px] text-[#5C574F]">
                3
              </span>
              <span>3. Order Receipt</span>
            </div>
          </div>
        )}

        {/* Main Step Content */}
        <div className="p-6 sm:p-8">
          
          {/* STEP 1: Details & Shipping Form */}
          {step === 'details' && (
            <form onSubmit={handleProceedToPayment} className="space-y-6">
              
              <div>
                <h3 className="font-serif-luxury text-2xl text-[#1C1A18] font-medium">
                  Where should we send your hug?
                </h3>
                <p className="text-xs text-[#7A746B] mt-0.5">
                  We hand-deliver packages with care, discretion, and pristine presentation.
                </p>
              </div>

              {/* Form fields */}
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#7A746B] mb-1">
                      Recipient Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={recipientName}
                      onChange={(e) => setRecipientName(e.target.value)}
                      placeholder="e.g. Eleanor Vance"
                      className="w-full px-3.5 py-2.5 text-xs bg-white border border-[#D9D2C7] rounded-[8px] focus:outline-none focus:border-[#A58457]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#7A746B] mb-1">
                      Sender Contact Email (Receipts)
                    </label>
                    <input
                      type="email"
                      required
                      value={senderEmail}
                      onChange={(e) => setSenderEmail(e.target.value)}
                      placeholder="e.g. arthur@example.com"
                      className="w-full px-3.5 py-2.5 text-xs bg-white border border-[#D9D2C7] rounded-[8px] focus:outline-none focus:border-[#A58457]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#7A746B] mb-1">
                      Recipient Delivery Address
                    </label>
                    <input
                      type="text"
                      required
                      value={streetAddress}
                      onChange={(e) => setStreetAddress(e.target.value)}
                      placeholder="Street name, apartment, suite"
                      className="w-full px-3.5 py-2.5 text-xs bg-white border border-[#D9D2C7] rounded-[8px] focus:outline-none focus:border-[#A58457]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#7A746B] mb-1">
                      Phone Number (For Courier Only)
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+1 (555) 000-0000"
                      className="w-full px-3.5 py-2.5 text-xs bg-white border border-[#D9D2C7] rounded-[8px] focus:outline-none focus:border-[#A58457]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#7A746B] mb-1">
                      City
                    </label>
                    <input
                      type="text"
                      required
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="w-full px-3 py-2 text-xs bg-white border border-[#D9D2C7] rounded-[8px] focus:outline-none focus:border-[#A58457]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#7A746B] mb-1">
                      Postal Code
                    </label>
                    <input
                      type="text"
                      required
                      value={postalCode}
                      onChange={(e) => setPostalCode(e.target.value)}
                      className="w-full px-3 py-2 text-xs bg-white border border-[#D9D2C7] rounded-[8px] focus:outline-none focus:border-[#A58457]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#7A746B] mb-1">
                      Country
                    </label>
                    <input
                      type="text"
                      required
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                      className="w-full px-3 py-2 text-xs bg-white border border-[#D9D2C7] rounded-[8px] focus:outline-none focus:border-[#A58457]"
                    />
                  </div>
                </div>

                {/* Surprise Gift Checkbox */}
                <label className="flex items-center gap-2.5 p-3 rounded-[8px] bg-white border border-[#E2DBD0] cursor-pointer">
                  <input
                    type="checkbox"
                    checked={isGiftSurprise}
                    onChange={(e) => setIsGiftSurprise(e.target.checked)}
                    className="w-4 h-4 text-[#1C1A18] rounded accent-[#1C1A18]"
                  />
                  <div className="text-xs">
                    <span className="font-semibold text-[#1C1A18]">Maintain Surprise Secrecy</span>
                    <span className="text-[#7A746B] ml-1">
                      (Courier will not disclose sender until recipient opens their calligraphy envelope)
                    </span>
                  </div>
                </label>
              </div>

              {/* Order Summary Snapshot */}
              <div className="p-4 bg-white rounded-[8px] border border-[#E2DBD0] flex items-center justify-between text-xs">
                <div>
                  <span className="text-[#7A746B]">Selected Curations ({cart.length} items):</span>
                  <div className="font-medium text-[#1C1A18]">
                    {cart.map((c) => c.product.name).join(', ')}
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-[#7A746B]">Total</span>
                  <div className="text-base font-bold text-[#1C1A18] tabular-nums">${subtotal}</div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center justify-between pt-2">
                <button
                  type="button"
                  onClick={() => setIsCheckoutOpen(false)}
                  className="text-xs text-[#5C574F] hover:text-[#1C1A18] flex items-center gap-1 cursor-pointer"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Return to Shopping Bag</span>
                </button>

                <button
                  type="submit"
                  className="px-6 py-3 bg-[#1C1A18] text-[#FAF7F2] hover:bg-[#33302C] text-xs font-semibold rounded-[8px] transition-all flex items-center gap-2 cursor-pointer shadow-md"
                >
                  <span>Continue to Payment</span>
                  <ArrowRight className="w-4 h-4 text-[#C5A880]" />
                </button>
              </div>

            </form>
          )}

          {/* STEP 2: Payment Simulation */}
          {step === 'payment' && (
            <div className="space-y-6">
              
              <div>
                <h3 className="font-serif-luxury text-2xl text-[#1C1A18] font-medium">
                  Select Payment Method
                </h3>
                <p className="text-xs text-[#7A746B] mt-0.5">
                  All transactions are 256-bit encrypted with instant receipt issuance.
                </p>
              </div>

              {/* Payment selector tabs */}
              <div className="grid grid-cols-3 gap-3">
                <button
                  type="button"
                  onClick={() => setPaymentMethod('card')}
                  className={`p-3 rounded-[8px] border text-left cursor-pointer transition-all ${
                    paymentMethod === 'card'
                      ? 'bg-white border-[#A58457] shadow-sm ring-1 ring-[#A58457]'
                      : 'bg-white border-[#E2DBD0] hover:border-[#C5A880]'
                  }`}
                >
                  <CreditCard className="w-5 h-5 text-[#8C6D3B] mb-1" />
                  <div className="text-xs font-semibold text-[#1C1A18]">Credit Card</div>
                  <div className="text-[10px] text-[#7A746B]">Visa, Master, Amex</div>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('apple')}
                  className={`p-3 rounded-[8px] border text-left cursor-pointer transition-all ${
                    paymentMethod === 'apple'
                      ? 'bg-white border-[#A58457] shadow-sm ring-1 ring-[#A58457]'
                      : 'bg-white border-[#E2DBD0] hover:border-[#C5A880]'
                  }`}
                >
                  <Lock className="w-5 h-5 text-[#1C1A18] mb-1" />
                  <div className="text-xs font-semibold text-[#1C1A18]">Express Pay</div>
                  <div className="text-[10px] text-[#7A746B]">Apple Pay / Google Pay</div>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('klarna')}
                  className={`p-3 rounded-[8px] border text-left cursor-pointer transition-all ${
                    paymentMethod === 'klarna'
                      ? 'bg-white border-[#A58457] shadow-sm ring-1 ring-[#A58457]'
                      : 'bg-white border-[#E2DBD0] hover:border-[#C5A880]'
                  }`}
                >
                  <Sparkles className="w-5 h-5 text-[#A58457] mb-1" />
                  <div className="text-xs font-semibold text-[#1C1A18]">Klarna Pay in 4</div>
                  <div className="text-[10px] text-[#7A746B]">4 x ${Math.round(subtotal / 4)} 0% APR</div>
                </button>
              </div>

              {/* Credit card inputs simulation */}
              <div className="p-5 bg-white rounded-[8px] border border-[#E2DBD0] space-y-4">
                <div className="flex items-center justify-between text-xs text-[#7A746B]">
                  <span className="font-medium text-[#1C1A18]">Card Information</span>
                  <div className="flex gap-2 text-[10px] font-mono text-[#8C6D3B]">
                    <span>🔒 SSL SECURE</span>
                  </div>
                </div>

                <div>
                  <input
                    type="text"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                    placeholder="Card Number"
                    className="w-full px-3.5 py-2.5 text-xs bg-[#FAF7F2] border border-[#D9D2C7] rounded-[8px] focus:outline-none focus:border-[#A58457] font-mono"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="text"
                    value={cardExpiry}
                    onChange={(e) => setCardExpiry(e.target.value)}
                    placeholder="MM / YY"
                    className="w-full px-3.5 py-2.5 text-xs bg-[#FAF7F2] border border-[#D9D2C7] rounded-[8px] focus:outline-none focus:border-[#A58457] font-mono"
                  />
                  <input
                    type="text"
                    value={cardCvc}
                    onChange={(e) => setCardCvc(e.target.value)}
                    placeholder="CVC"
                    className="w-full px-3.5 py-2.5 text-xs bg-[#FAF7F2] border border-[#D9D2C7] rounded-[8px] focus:outline-none focus:border-[#A58457] font-mono"
                  />
                </div>
              </div>

              {/* Recipient summary badge */}
              <div className="p-4 bg-[#F4EFEA] rounded-[8px] border border-[#E2DBD0] text-xs flex items-center justify-between">
                <div>
                  <span className="text-[#7A746B]">Recipient:</span>{' '}
                  <strong className="text-[#1C1A18]">{recipientName}</strong> · {city}, {country}
                </div>
                <button
                  type="button"
                  onClick={() => setStep('details')}
                  className="text-[#8C6D3B] underline hover:text-[#1C1A18] cursor-pointer"
                >
                  Edit
                </button>
              </div>

              {/* Actions */}
              <div className="flex items-center justify-between pt-2">
                <button
                  type="button"
                  onClick={() => setStep('details')}
                  className="text-xs text-[#5C574F] hover:text-[#1C1A18] flex items-center gap-1 cursor-pointer"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Back to Delivery Info</span>
                </button>

                <button
                  type="button"
                  disabled={isProcessing}
                  onClick={handleCompleteOrder}
                  className="px-8 py-3.5 bg-[#1C1A18] text-[#FAF7F2] hover:bg-[#33302C] text-sm font-semibold rounded-[8px] transition-all flex items-center gap-2 cursor-pointer shadow-lg disabled:opacity-50"
                >
                  {isProcessing ? (
                    <span>Penned & Finalizing Order...</span>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4 text-[#C5A880]" />
                      <span>Confirm & Place Order · ${subtotal}</span>
                    </>
                  )}
                </button>
              </div>

            </div>
          )}

          {/* STEP 3: Luxury Confirmation Receipt */}
          {step === 'confirmed' && (
            <div className="space-y-6 text-center animate-in fade-in zoom-in-95 duration-300">
              
              <div className="w-16 h-16 rounded-full bg-[#FAF7F2] border-2 border-[#C5A880] flex items-center justify-center text-[#245D33] mx-auto shadow-inner">
                <Check className="w-8 h-8 stroke-[2.5]" />
              </div>

              <div className="space-y-1">
                <span className="text-[11px] uppercase tracking-widest text-[#8C6D3B] font-semibold">
                  Order Confirmed & Atelier Dispatched
                </span>
                <h3 className="font-serif-luxury text-3xl sm:text-4xl text-[#1C1A18] font-medium">
                  Your hug is on its way.
                </h3>
                <p className="text-xs text-[#66615B] max-w-md mx-auto">
                  A receipt has been dispatched to <strong>{senderEmail}</strong>. Our artisans are now hand-wrapping your curations and preparing the wax-sealed calligraphy card.
                </p>
              </div>

              {/* Detailed Receipt Card */}
              <div className="p-6 bg-white rounded-[8px] border border-[#D9D2C7] shadow-md text-left space-y-4 max-w-xl mx-auto">
                <div className="flex items-center justify-between pb-3 border-b border-[#F0EAE1]">
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-[#8C8479]">Order Reference</div>
                    <div className="font-mono text-sm font-bold text-[#1C1A18]">{orderId}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] uppercase tracking-wider text-[#8C8479]">Date Placed</div>
                    <div className="text-xs font-medium text-[#1C1A18]">{orderDate}</div>
                  </div>
                </div>

                <div className="space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span className="text-[#7A746B]">Milestone Recipient:</span>
                    <span className="font-semibold text-[#1C1A18]">{recipientName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#7A746B]">Destination:</span>
                    <span className="text-[#4A4641]">{streetAddress}, {city}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#7A746B]">Courier Service:</span>
                    <span className="text-[#8C6D3B] font-medium">Marvel Me White-Glove Hand Delivery</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#7A746B]">Personalized Calligraphy:</span>
                    <span className="text-[#245D33] font-medium">Included & Wax-Sealed</span>
                  </div>
                </div>

                {/* Milestone Delivery Tracker */}
                <div className="pt-3 border-t border-[#F0EAE1] space-y-2">
                  <div className="text-[11px] font-semibold text-[#1C1A18]">Live Delivery Timeline</div>
                  <div className="grid grid-cols-4 gap-1 text-center text-[10px]">
                    <div className="p-1.5 bg-[#FAF7F2] border border-[#C5A880] rounded-[4px] text-[#8C6D3B] font-semibold">
                      1. Placed ✓
                    </div>
                    <div className="p-1.5 bg-[#FAF7F2] border border-[#C5A880]/50 rounded-[4px] text-[#8C6D3B] font-semibold">
                      2. Curating
                    </div>
                    <div className="p-1.5 bg-[#F9F6F0] rounded-[4px] text-[#A8A29E]">
                      3. Hand-Penned
                    </div>
                    <div className="p-1.5 bg-[#F9F6F0] rounded-[4px] text-[#A8A29E]">
                      4. Milestone Hand-off
                    </div>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => window.print()}
                  className="px-4 py-2.5 bg-white border border-[#D9D2C7] text-xs font-medium rounded-[8px] hover:border-[#A58457] transition-colors flex items-center gap-2 cursor-pointer"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Print Gift Receipt</span>
                </button>

                <button
                  type="button"
                  onClick={() => setIsCheckoutOpen(false)}
                  className="px-6 py-2.5 bg-[#1C1A18] text-[#FAF7F2] hover:bg-[#33302C] text-xs font-semibold rounded-[8px] transition-colors cursor-pointer"
                >
                  Return to Marvel Me Boutique
                </button>
              </div>

            </div>
          )}

        </div>

      </div>
    </div>
  );
};
