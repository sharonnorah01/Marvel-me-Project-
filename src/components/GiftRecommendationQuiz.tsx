import React, { useState } from 'react';
import { QUIZ_QUESTIONS, PRODUCTS, Product, GIFT_WRAPPING_OPTIONS } from '../data/products';
import { useCart } from '../context/CartContext';
import { X, Sparkles, ArrowRight, ArrowLeft, Check, Heart, RotateCcw } from 'lucide-react';
import { handleImageFallback } from '../utils/images';

export const GiftRecommendationQuizModal: React.FC = () => {
  const { isQuizOpen, setIsQuizOpen, setActiveProductDetail, addToCart } = useCart();
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [isCompleted, setIsCompleted] = useState(false);

  if (!isQuizOpen) return null;

  const currentQuestion = QUIZ_QUESTIONS[currentStepIndex];

  const handleSelectOption = (questionId: string, value: string) => {
    const updated = { ...answers, [questionId]: value };
    setAnswers(updated);

    if (currentStepIndex < QUIZ_QUESTIONS.length - 1) {
      setCurrentStepIndex(currentStepIndex + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const handleBack = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex(currentStepIndex - 1);
    }
  };

  const handleReset = () => {
    setAnswers({});
    setCurrentStepIndex(0);
    setIsCompleted(false);
  };

  // Logic to find top matched products
  const getRecommendedProducts = (): { product: Product; matchScore: number; reason: string }[] => {
    const recipient = answers['recipient'] || 'partner';
    const vibe = answers['vibe'] || 'hug';
    const budget = answers['budget'] || 'signature';

    let primaryId = 'the-golden-reverie-hamper';
    let secondaryId = 'midnight-noir-surprise-box';
    let matchScore = 98;
    let reason = 'Tailored for deep sensory comfort, warm candlelight, and artisanal indulgence.';

    if (vibe === 'adventure') {
      primaryId = 'sunlit-provence-picnic';
      secondaryId = 'twilight-sunset-meadow-picnic';
      matchScore = 99;
      reason = 'Crafted for romantic afternoons under golden skies with crystal flutes and gourmet provisions.';
    } else if (vibe === 'surprise') {
      primaryId = 'midnight-noir-surprise-box';
      secondaryId = 'the-golden-reverie-hamper';
      matchScore = 97;
      reason = 'Features warm ambient fairy lights and a multi-level reveal for maximum joyous gasp factor.';
    } else if (recipient === 'corporate') {
      primaryId = 'executive-atelier-corporate-suite';
      secondaryId = 'the-golden-reverie-hamper';
      matchScore = 96;
      reason = 'Sophisticated executive appreciation with full-grain leather, brass instruments, and artisanal coffee.';
    } else if (budget === 'modest') {
      primaryId = 'artisanal-gift-wrapping-suite';
      secondaryId = 'marvel-me-experience-voucher';
      matchScore = 95;
      reason = 'Refined luxury presentation that makes any gesture feel like a royal coronation.';
    }

    const primaryProd = PRODUCTS.find((p) => p.id === primaryId) || PRODUCTS[0];
    const secondaryProd = PRODUCTS.find((p) => p.id === secondaryId) || PRODUCTS[1];

    return [
      { product: primaryProd, matchScore, reason },
      { product: secondaryProd, matchScore: matchScore - 4, reason: 'An exquisite alternative with comforting artisanal elements.' },
    ];
  };

  const recommendations = getRecommendedProducts();

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#222222]/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="relative bg-[#FAF7F2] text-[#2D2A26] w-full max-w-2xl rounded-[8px] shadow-2xl border border-[#D9D2C7] overflow-hidden flex flex-col">
        
        {/* Header */}
        <div className="bg-[#222222] text-[#FAF7F2] px-6 py-4 flex items-center justify-between border-b border-[#daaf37]/30">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#daaf37]" />
            <span className="font-serif-luxury text-xl font-medium tracking-wide">
              Marvel Me Gift Stylist Quiz
            </span>
          </div>

          <button
            onClick={() => setIsQuizOpen(false)}
            aria-label="Close quiz"
            className="p-1 rounded-[6px] text-[#A8A29E] hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Progress Bar */}
        {!isCompleted && (
          <div className="bg-[#EAE4D8] h-1.5 w-full">
            <div
              className="bg-[#daaf37] h-full transition-all duration-300"
              style={{ width: `${((currentStepIndex + 1) / QUIZ_QUESTIONS.length) * 100}%` }}
            />
          </div>
        )}

        {/* Content Body */}
        <div className="p-6 sm:p-8">
          {!isCompleted ? (
            <div className="space-y-6">
              
              {/* Question Headline */}
              <div className="text-center space-y-1">
                <span className="text-[11px] uppercase tracking-widest text-[#daaf37] font-semibold">
                  Step {currentStepIndex + 1} of {QUIZ_QUESTIONS.length}
                </span>
                <h3 className="font-serif-luxury text-2xl sm:text-3xl text-[#222222] font-medium">
                  {currentQuestion.title}
                </h3>
                <p className="text-xs text-[#7A746B] italic">
                  {currentQuestion.subtitle}
                </p>
              </div>

              {/* Options Grid */}
              <div className="space-y-3">
                {currentQuestion.options.map((opt) => {
                  const isSelected = answers[currentQuestion.id] === opt.value;
                  return (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() => handleSelectOption(currentQuestion.id, opt.value)}
                      className={`w-full p-4 text-left rounded-[8px] border transition-all cursor-pointer flex items-center justify-between ${
                        isSelected
                          ? 'bg-[#222222] text-[#FAF7F2] border-[#222222] shadow-md ring-1 ring-[#daaf37]'
                          : 'bg-white text-[#2D2A26] border-[#E2DBD0] hover:border-[#daaf37] hover:bg-[#FDFBF7]'
                      }`}
                    >
                      <div className="space-y-0.5">
                        <p className={`text-sm font-semibold ${isSelected ? 'text-[#FAF7F2]' : 'text-[#222222]'}`}>
                          {opt.label}
                        </p>
                        <p className={`text-xs ${isSelected ? 'text-[#daaf37]' : 'text-[#66615B]'}`}>
                          {opt.description}
                        </p>
                      </div>

                      <div
                        className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ml-3 ${
                          isSelected
                            ? 'border-[#daaf37] bg-[#daaf37] text-[#222222]'
                            : 'border-[#D9D2C7] bg-white'
                        }`}
                      >
                        {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Navigation Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-[#E8E2D8]">
                <button
                  type="button"
                  onClick={handleBack}
                  disabled={currentStepIndex === 0}
                  className={`text-xs flex items-center gap-1 font-medium cursor-pointer ${
                    currentStepIndex === 0 ? 'opacity-30 cursor-not-allowed text-[#8C8479]' : 'text-[#5C574F] hover:text-[#222222]'
                  }`}
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Previous</span>
                </button>

                <span className="text-xs text-[#8C8479]">
                  {answers[currentQuestion.id] ? 'Option selected' : 'Choose one option'}
                </span>
              </div>

            </div>
          ) : (
            /* Results Presentation */
            <div className="space-y-6 text-center animate-in fade-in duration-300">
              
              <div className="space-y-2">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#FAF7F2] border border-[#daaf37] rounded-[8px] text-xs font-semibold text-[#222222]">
                  <Sparkles className="w-3.5 h-3.5 text-[#daaf37]" />
                  <span>Curated Just For You</span>
                </div>
                <h3 className="font-serif-luxury text-3xl text-[#222222] font-medium">
                  Gifts That Truly Feel Like A Hug
                </h3>
                <p className="text-xs text-[#524E48] max-w-md mx-auto">
                  Based on your answers, our gifting stylist selected these standout curations designed to create an unforgettable emotional embrace.
                </p>
              </div>

              {/* Top Recommendations */}
              <div className="space-y-4 text-left">
                {recommendations.map(({ product, matchScore, reason }, idx) => (
                  <div
                    key={product.id}
                    className="p-4 bg-white rounded-[8px] border border-[#E2DBD0] hover:border-[#daaf37] transition-all shadow-sm flex flex-col sm:flex-row items-center gap-4"
                  >
                    <img
                      src={product.images[0]}
                      onError={(e) => handleImageFallback(e, product.category)}
                      alt={product.name}
                      className="w-full sm:w-28 h-28 object-cover rounded-[8px] border border-[#E8E2D8] shrink-0"
                    />

                    <div className="flex-1 space-y-1 w-full">
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] uppercase tracking-wider text-[#daaf37] font-semibold">
                          {idx === 0 ? '✦ Primary Match' : 'Secondary Match'}
                        </span>
                        <span className="text-xs font-bold text-[#222222] bg-[#FAF7F2] border border-[#daaf37]/50 px-2 py-0.5 rounded-[6px] tabular-nums">
                          {matchScore}% Match
                        </span>
                      </div>

                      <h4 className="font-serif-luxury text-lg text-[#222222] font-medium">
                        {product.name}
                      </h4>

                      <p className="text-xs text-[#66615B] leading-relaxed line-clamp-2">
                        {reason}
                      </p>

                      <div className="pt-2 flex items-center justify-between">
                        <span className="text-sm font-bold text-[#222222] tabular-nums">
                          ${product.price}
                        </span>

                        <div className="flex gap-2">
                          <button
                            type="button"
                            onClick={() => {
                              setIsQuizOpen(false);
                              setActiveProductDetail(product);
                            }}
                            className="px-3 py-1.5 bg-[#daaf37] text-[#222222] hover:bg-[#c49b2c] text-xs font-semibold rounded-[8px] transition-colors cursor-pointer shadow-sm"
                          >
                            Personalize & View
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quiz Reset Button */}
              <div className="pt-2 flex items-center justify-center gap-4">
                <button
                  type="button"
                  onClick={handleReset}
                  className="text-xs text-[#66615B] hover:text-[#222222] flex items-center gap-1.5 cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5 text-[#daaf37]" />
                  <span>Retake Stylist Quiz</span>
                </button>
              </div>

            </div>
          )}
        </div>

      </div>
    </div>
  );
};
