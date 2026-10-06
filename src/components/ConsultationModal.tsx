import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { X, Calendar, Clock, Check, Sparkles, MessageCircle, Phone, Mail } from 'lucide-react';

export const ConsultationModal: React.FC = () => {
  const { isConsultationOpen, setIsConsultationOpen } = useCart();

  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [occasionType, setOccasionType] = useState('Wedding & Bridal Favors');
  const [recipientCount, setRecipientCount] = useState('1 - 10 people');
  const [estimatedBudget, setEstimatedBudget] = useState('$500 - $1,500');
  const [preferredDate, setPreferredDate] = useState(
    new Date(Date.now() + 86400000 * 3).toISOString().split('T')[0]
  );
  const [consultationFormat, setConsultationFormat] = useState('Virtual Video Concierge');
  const [specialRequests, setSpecialRequests] = useState('');
  const [isBooked, setIsBooked] = useState(false);

  if (!isConsultationOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsBooked(true);
  };

  const handleClose = () => {
    setIsConsultationOpen(false);
    setIsBooked(false);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="relative bg-[#FAF7F2] text-[#2D2A26] w-full max-w-xl rounded-[8px] shadow-2xl border border-[#D9D2C7] overflow-hidden flex flex-col">
        
        {/* Header */}
        <div className="bg-[#1C1A18] text-[#FAF7F2] px-6 py-4 flex items-center justify-between border-b border-[#C5A880]/30">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-[#C5A880]" />
            <span className="font-serif-luxury text-xl font-medium tracking-wide">
              Bespoke Gift Consultation
            </span>
          </div>

          <button
            onClick={handleClose}
            aria-label="Close consultation modal"
            className="p-1 rounded-[6px] text-[#A8A29E] hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <div className="p-6 sm:p-8">
          {!isBooked ? (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-1">
                <span className="text-[11px] uppercase tracking-widest text-[#8C6D3B] font-semibold">
                  Personal Stylist Session
                </span>
                <h3 className="font-serif-luxury text-2xl text-[#1C1A18] font-medium">
                  Curate the Unforgettable
                </h3>
                <p className="text-xs text-[#66615B] leading-relaxed">
                  Book a private 45-minute styling consultation with a senior Marvel Me curator. We design bespoke packaging, source rare provisions, and coordinate hand-delivery for your most momentous occasions.
                </p>
              </div>

              <div className="space-y-3.5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#7A746B] mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Genevieve Laurent"
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      className="w-full px-3 py-2 text-xs bg-white border border-[#D9D2C7] rounded-[8px] focus:outline-none focus:border-[#A58457]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#7A746B] mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="genevieve@example.com"
                      value={clientEmail}
                      onChange={(e) => setClientEmail(e.target.value)}
                      className="w-full px-3 py-2 text-xs bg-white border border-[#D9D2C7] rounded-[8px] focus:outline-none focus:border-[#A58457]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#7A746B] mb-1">
                      Occasion
                    </label>
                    <select
                      value={occasionType}
                      onChange={(e) => setOccasionType(e.target.value)}
                      className="w-full px-3 py-2 text-xs bg-white border border-[#D9D2C7] rounded-[8px] focus:outline-none focus:border-[#A58457]"
                    >
                      <option value="Wedding & Bridal Favors">Wedding & Bridal Favors</option>
                      <option value="Executive Corporate Gifting">Executive Corporate Gifting</option>
                      <option value="Golden Anniversary Milestone">Golden Anniversary Milestone</option>
                      <option value="Celebrity / VIP Private Curation">Celebrity / VIP Private Curation</option>
                      <option value="Holiday Celebration Suite">Holiday Celebration Suite</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#7A746B] mb-1">
                      Recipient Volume
                    </label>
                    <select
                      value={recipientCount}
                      onChange={(e) => setRecipientCount(e.target.value)}
                      className="w-full px-3 py-2 text-xs bg-white border border-[#D9D2C7] rounded-[8px] focus:outline-none focus:border-[#A58457]"
                    >
                      <option value="1 - 5 recipients">1 - 5 recipients</option>
                      <option value="6 - 20 recipients">6 - 20 recipients</option>
                      <option value="20 - 100+ recipients">20 - 100+ recipients</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#7A746B] mb-1">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      value={preferredDate}
                      onChange={(e) => setPreferredDate(e.target.value)}
                      className="w-full px-3 py-2 text-xs bg-white border border-[#D9D2C7] rounded-[8px] focus:outline-none focus:border-[#A58457]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#7A746B] mb-1">
                      Format
                    </label>
                    <select
                      value={consultationFormat}
                      onChange={(e) => setConsultationFormat(e.target.value)}
                      className="w-full px-3 py-2 text-xs bg-white border border-[#D9D2C7] rounded-[8px] focus:outline-none focus:border-[#A58457]"
                    >
                      <option value="Virtual Video Concierge">Virtual Video Concierge</option>
                      <option value="Phone Consultation">Phone Consultation</option>
                      <option value="In-Person Atelier Visit">In-Person Atelier Visit</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#7A746B] mb-1">
                    Special Vision or Notes (Optional)
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Tell us about the recipients, specific aesthetic preferences, or custom branding..."
                    value={specialRequests}
                    onChange={(e) => setSpecialRequests(e.target.value)}
                    className="w-full px-3 py-2 text-xs bg-white border border-[#D9D2C7] rounded-[8px] focus:outline-none focus:border-[#A58457]"
                  />
                </div>
              </div>

              <div className="pt-2 flex items-center justify-between">
                <button
                  type="button"
                  onClick={handleClose}
                  className="text-xs text-[#7A746B] hover:text-[#1C1A18] cursor-pointer"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="px-6 py-2.5 bg-[#1C1A18] text-[#FAF7F2] hover:bg-[#33302C] text-xs font-semibold rounded-[8px] transition-colors flex items-center gap-2 cursor-pointer shadow-sm"
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#C5A880]" />
                  <span>Request Stylist Appointment</span>
                </button>
              </div>
            </form>
          ) : (
            <div className="space-y-5 text-center py-4 animate-in fade-in duration-300">
              <div className="w-14 h-14 rounded-full bg-white border border-[#C5A880] text-[#245D33] flex items-center justify-center mx-auto shadow-sm">
                <Check className="w-6 h-6 stroke-[3]" />
              </div>

              <div className="space-y-1">
                <span className="text-[11px] uppercase tracking-widest text-[#8C6D3B] font-semibold">
                  Appointment Reserved
                </span>
                <h3 className="font-serif-luxury text-3xl text-[#1C1A18] font-medium">
                  We look forward to styling with you.
                </h3>
                <p className="text-xs text-[#524E48] max-w-sm mx-auto leading-relaxed">
                  A senior gifting stylist will review your details and send calendar credentials to <strong>{clientEmail}</strong> within 2 hours.
                </p>
              </div>

              <div className="p-4 bg-white rounded-[8px] border border-[#E2DBD0] text-xs max-w-xs mx-auto space-y-1 text-left">
                <div><span className="text-[#7A746B]">Client:</span> <strong>{clientName || 'Valued Guest'}</strong></div>
                <div><span className="text-[#7A746B]">Occasion:</span> {occasionType}</div>
                <div><span className="text-[#7A746B]">Scheduled Date:</span> {preferredDate}</div>
                <div><span className="text-[#7A746B]">Medium:</span> {consultationFormat}</div>
              </div>

              <button
                type="button"
                onClick={handleClose}
                className="px-6 py-2.5 bg-[#1C1A18] text-[#FAF7F2] hover:bg-[#33302C] text-xs font-medium rounded-[8px] transition-colors cursor-pointer"
              >
                Return to Shop
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
