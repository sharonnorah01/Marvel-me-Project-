import {
  heroLuxuryGiftBox,
  productLuxuryHamper,
  productLuxuryPicnic,
  productGiftWrapping,
  productSurpriseBox,
} from '../assets/images';

export interface CustomerReview {
  id: string;
  author: string;
  location: string;
  rating: number;
  date: string;
  title: string;
  comment: string;
  verified: boolean;
}

export interface GiftWrappingOption {
  id: string;
  name: string;
  description: string;
  price: number;
  previewColor: string;
  accentColor: string;
}

export interface Product {
  id: string;
  name: string;
  category: 
    | 'Gift Hampers'
    | 'Gift Wrapping'
    | 'Gift Card Vouchers'
    | 'Picnics'
    | 'Gift Surprises'
    | 'Corporate Gifting'
    | 'Gift Consultations';
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  tagline: string;
  description: string;
  includes: string[];
  dimensions?: string;
  images: string[];
  featured?: boolean;
  bestseller?: boolean;
  occasions: string[];
  reviews: CustomerReview[];
}

export const GIFT_WRAPPING_OPTIONS: GiftWrappingOption[] = [
  {
    id: 'champagne-satin',
    name: 'Champagne Satin & Cream',
    description: 'Textured handmade ivory paper wrapped in double-faced champagne satin ribbon with dried botanical sprig.',
    price: 0,
    previewColor: '#FAF7F2',
    accentColor: '#C5A880',
  },
  {
    id: 'gold-foil-velvet',
    name: 'Gold Foil & Sage Velvet',
    description: 'Hot-stamped geometric gold foil on matte parchment, paired with plush moss-green velvet bow and brass bell.',
    price: 12,
    previewColor: '#F4EFEA',
    accentColor: '#3C4B3E',
  },
  {
    id: 'midnight-gold-seal',
    name: 'Midnight Noir & Gold Wax Seal',
    description: 'Architectural matte charcoal box with golden gilded ribbon and hand-stamped Marvel Me emblem wax seal.',
    price: 15,
    previewColor: '#1E1E1E',
    accentColor: '#C5A880',
  },
  {
    id: 'pure-linen-botanical',
    name: 'Pure Linen & Pressed Blooms',
    description: 'Hand-torn raw linen ribbon, deckle-edged gift card with genuine pressed field hydrangeas.',
    price: 9,
    previewColor: '#F0ECE4',
    accentColor: '#8C6D3B',
  },
  {
    id: 'eco-minimalist',
    name: 'Eco-Friendly Recycled Minimalist',
    description: '100% recycled unbleached cotton cord and minimalist kraft wrap with seeded plantable tag.',
    price: 0,
    previewColor: '#EBE5D8',
    accentColor: '#5C5449',
  },
];

export const CARD_STYLES = [
  { id: 'letterpress-cream', name: 'Letterpress Warm Cream', fontStyle: 'font-handwriting', bg: 'bg-[#FAF7F2]' },
  { id: 'gold-gilded', name: 'Gold Gilded Edge', fontStyle: 'font-handwriting', bg: 'bg-[#FFFDF9] border border-[#C5A880]/30' },
  { id: 'noir-velvet', name: 'Midnight & Gold Calligraphy', fontStyle: 'font-handwriting text-[#D4AF37]', bg: 'bg-[#1C1A18] text-[#D4AF37]' },
];

export const PRODUCTS: Product[] = [
  {
    id: 'the-golden-reverie-hamper',
    name: 'The Golden Reverie Hamper',
    category: 'Gift Hampers',
    price: 165,
    originalPrice: 185,
    rating: 4.95,
    reviewCount: 38,
    featured: true,
    bestseller: true,
    tagline: 'A warm sensory sanctuary of artisanal delights and comforting glow',
    description: 'Crafted as the quintessential embodiment of a gentle embrace, The Golden Reverie blends hand-harvested wild honeycomb, small-batch amber soy candles, and stone-ground organic chocolates in our signature textured keepsake linen chest.',
    includes: [
      'Hand-poured 220g Amber Bergamot & Vanilla Soy Candle (55hr burn)',
      'Single-origin Raw Wildflower Honeycomb Jar with solid brass honeycomb dripper',
      'Artisanal 72% Dark Venezuelan Cocoa Bar with salted almond slivers',
      'Organic French Chamomile & Golden Lavender Loose-leaf Infusion',
      'Custom gold-embossed keepsake linen chest with magnetic seal',
      'Personalized handwritten calligraphy message card',
    ],
    dimensions: '32cm x 24cm x 14cm · Weight 2.4kg',
    images: [
      productLuxuryHamper,
      heroLuxuryGiftBox,
      productGiftWrapping,
    ],
    occasions: ['Birthday', 'Anniversary', 'Thank You', 'Self-Care', 'Thinking of You'],
    reviews: [
      {
        id: 'rev-1',
        author: 'Eleanor Vance',
        location: 'London, UK',
        rating: 5,
        date: 'October 2, 2026',
        title: 'Truly felt like a warm embrace',
        comment: 'I sent this to my sister after a particularly grueling work month. She called me in tears of happiness. The packaging was immaculate, the candle smells like an opulent sanctuary, and the handwritten card was gorgeous.',
        verified: true,
      },
      {
        id: 'rev-2',
        author: 'Julian Montgomery',
        location: 'New York, NY',
        rating: 5,
        date: 'September 24, 2026',
        title: 'Breathtaking presentation & unboxing',
        comment: 'You can immediately tell Marvel Me does not cut corners. The gold foil details and the quality of the honeycomb and chocolate exceeded any luxury hamper I have previously purchased.',
        verified: true,
      },
    ],
  },
  {
    id: 'sunlit-provence-picnic',
    name: 'The Sunlit Provence Picnic Experience',
    category: 'Picnics',
    price: 295,
    rating: 5.0,
    reviewCount: 24,
    featured: true,
    bestseller: true,
    tagline: 'An unforgettable afternoon reverie delivered ready-to-unfurl',
    description: 'Designed for golden afternoons, romantic celebrations, and tranquil weekend escapes. Arrives in a bespoke split-lid handwoven willow basket complete with Belgian flax linen, hand-blown crystal flutes, and hand-selected gourmet delicacies.',
    includes: [
      'Bespoke handwoven natural willow picnic basket with genuine saddle leather straps',
      'Pure Belgian washed linen throw blanket (150cm x 180cm, water-resistant backing)',
      'Pair of hand-blown crystal champagne flutes with brass protective cradles',
      'Artisanal olive wood cutting board with brass cheese knife set',
      'Artisan Truffle Pecorino, Fig & Walnut Confiture, and Rosemary Sea Salt Crackers',
      'Chilled sparkling elderflower botanical pressé or non-alcoholic spritz',
    ],
    dimensions: '48cm x 34cm x 22cm · Weight 4.8kg',
    images: [
      productLuxuryPicnic,
      heroLuxuryGiftBox,
      productLuxuryHamper,
    ],
    occasions: ['Anniversary', 'Romantic', 'Birthday', 'Milestone'],
    reviews: [
      {
        id: 'rev-3',
        author: 'Camilla & David Thorne',
        location: 'Oxfordshire, UK',
        rating: 5,
        date: 'September 28, 2026',
        title: 'The ultimate anniversary surprise',
        comment: 'We spent our 10th anniversary in the botanical gardens with this hamper. Everything was perfectly chilled, thoughtful, and stunning down to the leather basket straps.',
        verified: true,
      },
    ],
  },
  {
    id: 'midnight-noir-surprise-box',
    name: 'Midnight Noir Celebration Surprise',
    category: 'Gift Surprises',
    price: 180,
    rating: 4.9,
    reviewCount: 31,
    featured: true,
    bestseller: false,
    tagline: 'Multi-layer reveal box with ambient glow and hidden treasures',
    description: 'Unbox an intimate celebration. When the magnetic black satin lid is lifted, gentle micro-fairy lights illuminate a multi-tiered array of personalized surprises, velvet pouches, artisanal treats, and gold foil confetti.',
    includes: [
      'Engineered matte charcoal multi-level magnetic reveal box',
      'Integrated warm 2700K ambient fairy lights (battery included)',
      'Velvet keepsake jewelry pouch with gold monogram initial option',
      'Pair of gold-leaf champagne truffles from master Parisian chocolatiers',
      'Scented wax tablet for linen drawer infused with cedarwood and white musk',
      'Bespoke photo memory print (optional upload during checkout)',
    ],
    dimensions: '26cm x 26cm x 18cm · Weight 1.8kg',
    images: [
      productSurpriseBox,
      heroLuxuryGiftBox,
      productGiftWrapping,
    ],
    occasions: ['Birthday', 'Romantic', 'Milestone', 'Anniversary'],
    reviews: [
      {
        id: 'rev-4',
        author: 'Sophia Chen',
        location: 'San Francisco, CA',
        rating: 5,
        date: 'September 15, 2026',
        title: 'Unbelievable attention to detail',
        comment: 'The lighting effect inside the box when you lift the lid is magical! It transformed a simple birthday present into a cinematic moment.',
        verified: true,
      },
    ],
  },
  {
    id: 'artisanal-gift-wrapping-suite',
    name: 'Bespoke Atelier Gift Wrapping Suite',
    category: 'Gift Wrapping',
    price: 32,
    rating: 4.98,
    reviewCount: 46,
    featured: false,
    bestseller: true,
    tagline: 'The lost art of tactile gift wrapping transformed into fine craft',
    description: 'Gift wrapping is not an afterthought at Marvel Me; it is the first chapter of emotional connection. Our artisans dress your gift with heavyweight 180gsm textured cotton paper, hand-pressed metallic gold foil details, and real botanical accents.',
    includes: [
      'Heavyweight archival textured ivory wrapping paper',
      'Custom stamped gold foil geometric or floral motifs',
      'Continuous double-sided 38mm Italian silk or French velvet ribbon bow',
      'Solid brass dried floral clip with lavender or olive sprig',
      'Hand-poured beeswax monogram seal',
      'Cotton deckle-edge personalized notecard',
    ],
    dimensions: 'Custom tailored to any package size',
    images: [
      productGiftWrapping,
      heroLuxuryGiftBox,
      productSurpriseBox,
    ],
    occasions: ['Any Occasion', 'Holiday', 'Birthday', 'Wedding'],
    reviews: [
      {
        id: 'rev-5',
        author: 'Marcus Sterling',
        location: 'Geneva, Switzerland',
        rating: 5,
        date: 'August 19, 2026',
        title: 'My partner hesitated to open it because it was so pretty',
        comment: 'The wrapping alone took our breath away. The velvet ribbon and wax seal looked like something from an old-world royal atelier.',
        verified: true,
      },
    ],
  },
  {
    id: 'executive-atelier-corporate-suite',
    name: 'The Executive Atelier Corporate Suite',
    category: 'Corporate Gifting',
    price: 210,
    rating: 4.92,
    reviewCount: 19,
    featured: false,
    bestseller: false,
    tagline: 'Sophisticated corporate appreciation that clients genuinely remember',
    description: 'Elevate your enterprise relationships with tasteful, distinguished gifts free of cheap promotional branding. Designed to express genuine gratitude with tactile leather, custom stationery, and premium roast blends.',
    includes: [
      'Full-grain Italian vegetable-tanned leather notebook cover with refillable lined journal',
      'Heavy machined solid brass rollerball pen with German refill',
      'Specialty single-estate whole bean coffee tin (250g) from ethical highland growers',
      'Artisanal smoked rosemary almonds in matte black ceramic jar',
      'Branded or blind-debossed client greeting letterhead',
      'Magnetic closure linen presentation box with gold foil numbering',
    ],
    dimensions: '30cm x 22cm x 10cm · Weight 1.9kg',
    images: [
      heroLuxuryGiftBox,
      productLuxuryHamper,
      productSurpriseBox,
    ],
    occasions: ['Corporate', 'Milestone', 'Thank You'],
    reviews: [
      {
        id: 'rev-6',
        author: 'Victoria Sterling',
        location: 'London, UK',
        rating: 5,
        date: 'September 12, 2026',
        title: 'Sent to 40 VIP clients - flawless feedback',
        comment: 'Every single CEO we sent this to messaged us personally to praise the presentation and leather notebook. Marvel Me managed the entire multi-destination delivery flawlessly.',
        verified: true,
      },
    ],
  },
  {
    id: 'marvel-me-experience-voucher',
    name: 'The Marvel Me Experience Voucher',
    category: 'Gift Card Vouchers',
    price: 150,
    rating: 4.96,
    reviewCount: 52,
    featured: false,
    bestseller: true,
    tagline: 'Delivered in an embossed gold-gilded physical keepsake box',
    description: 'When you want them to choose their own perfect hug. The Marvel Me Experience Voucher is never an ordinary plastic card. It arrives encased in an embossed heavy card envelope with a hand-poured gold wax seal and custom calligraphy naming the recipient.',
    includes: [
      'Heavyweight 450gsm card with hand-painted gold gilded borders',
      'Personalized calligraphy envelope with genuine wax seal',
      'Redeemable for any Marvel Me Hamper, Picnic Experience, or Bespoke Suite',
      'No expiration date · Includes complimentary concierge styling session',
      'Physical priority gift delivery or instant digital counterpart',
    ],
    dimensions: '18cm x 13cm sleeve',
    images: [
      productSurpriseBox,
      productGiftWrapping,
      heroLuxuryGiftBox,
    ],
    occasions: ['Birthday', 'Wedding', 'Holiday', 'Thank You'],
    reviews: [
      {
        id: 'rev-7',
        author: 'Arlo Bennett',
        location: 'Melbourne, Australia',
        rating: 5,
        date: 'September 01, 2026',
        title: 'The most elegant gift card in existence',
        comment: 'Giving a voucher usually feels impersonal, but not this one. The gold wax seal and heavy textured card made it feel like receiving a coronation invitation.',
        verified: true,
      },
    ],
  },
  {
    id: 'private-gift-consultation',
    name: 'Private Gifting Stylist Consultation',
    category: 'Gift Consultations',
    price: 45,
    rating: 5.0,
    reviewCount: 28,
    featured: false,
    bestseller: false,
    tagline: '1-on-1 bespoke styling session with our master gift curator',
    description: 'Let our master gifting curators craft a tailored gifting journey for your most significant moments. Includes custom sourcing, bespoke ribbon dye matching, bespoke calligraphy vows or letters, and guaranteed delivery coordination.',
    includes: [
      '45-minute virtual or in-person consultation with senior gifting stylist',
      'Digital mood board and personalized gift concept recommendations',
      'Sourcing of rare, bespoke items beyond standard catalog',
      'Full consultation fee credited toward your final order of $150 or more',
      'White-glove scheduled courier coordination',
    ],
    dimensions: 'Service Experience & Bespoke Curation',
    images: [
      productGiftWrapping,
      heroLuxuryGiftBox,
      productLuxuryHamper,
    ],
    occasions: ['Wedding', 'Corporate', 'Milestone', 'Anniversary'],
    reviews: [
      {
        id: 'rev-8',
        author: 'Harrison & Clara',
        location: 'Edinburgh, UK',
        rating: 5,
        date: 'August 14, 2026',
        title: 'Saved our wedding party favors and bridesmaid gifts',
        comment: 'Our stylist Clara was remarkable. She helped us design 12 custom hampers matching our wedding botanicals and coordinated same-day delivery to the countryside estate.',
        verified: true,
      },
    ],
  },
  {
    id: 'twilight-sunset-meadow-picnic',
    name: 'Twilight Sunset Meadow Picnic Basket',
    category: 'Picnics',
    price: 240,
    rating: 4.88,
    reviewCount: 15,
    featured: false,
    bestseller: false,
    tagline: 'An evening under the stars with thermal provisions and golden candlelight',
    description: 'Engineered for romantic dusk moments. Features thermal insulated inner compartments, ambient rechargeable brass tea lanterns, artisanal cheeses, dark chocolate dipped figs, and fine linen napkins.',
    includes: [
      'Reinforced wicker basket with thermal insulated lower cooler chamber',
      '2 rechargeable antique-finish brass ambient cordless lanterns',
      'Washed linen napkins with gold-stitched borders',
      'Artisanal aged gouda, black olive tapenade, and artisanal seed crispbread',
      'Salted caramel chocolate ganache tartlets for two',
    ],
    dimensions: '42cm x 30cm x 24cm · Weight 3.9kg',
    images: [
      productLuxuryPicnic,
      heroLuxuryGiftBox,
      productLuxuryHamper,
    ],
    occasions: ['Romantic', 'Anniversary', 'Birthday'],
    reviews: [
      {
        id: 'rev-9',
        author: 'Chloe Dupont',
        location: 'Montreal, Canada',
        rating: 5,
        date: 'July 29, 2026',
        title: 'Magical date night experience',
        comment: 'The lanterns create the coziest ambiance. The cheese and tartlets were exquisite. Worth every single cent.',
        verified: true,
      },
    ],
  },
];

export interface CartItem {
  cartItemId: string;
  product: Product;
  quantity: number;
  wrappingOption: GiftWrappingOption;
  personalizedNote: {
    to: string;
    from: string;
    message: string;
    cardStyle: string;
  };
  deliverySchedule: {
    date: string;
    timeSlot: string;
    specialInstructions: string;
  };
}

export const QUIZ_QUESTIONS = [
  {
    id: 'recipient',
    title: 'Who is this special gift meant for?',
    subtitle: 'Every soul receives love differently',
    options: [
      { label: 'Partner / Significant Other', value: 'partner', icon: 'heart', description: 'Deep romance, intimacy & sensory warmth' },
      { label: 'Cherished Friend or Sibling', value: 'friend', icon: 'sparkles', description: 'Celebratory joy, uplift & playful luxury' },
      { label: 'Parent or Family Elder', value: 'family', icon: 'home', description: 'Heartfelt comfort, quiet luxury & deep gratitude' },
      { label: 'Client, Colleague or Team', value: 'corporate', icon: 'briefcase', description: 'Distinguished taste, polished appreciation' },
      { label: 'Myself (Bespoke Self-Care)', value: 'self', icon: 'sun', description: 'Restorative indulgence & guilt-free sanctuary' },
    ],
  },
  {
    id: 'occasion',
    title: 'What celebration or milestone are you marking?',
    subtitle: 'Setting the emotional rhythm of the occasion',
    options: [
      { label: 'Anniversary or Romantic Milestone', value: 'anniversary', icon: 'calendar', description: 'Cherishing shared memories & future promise' },
      { label: 'Birthday Celebration', value: 'birthday', icon: 'gift', description: 'Honoring another magnificent year around the sun' },
      { label: 'Warm "Thinking of You" / Big Hug', value: 'comfort', icon: 'coffee', description: 'When someone needs to feel wrapped in comfort' },
      { label: 'Career Achievement or Promotion', value: 'career', icon: 'award', description: 'Celebrating dedication, brilliance & triumph' },
      { label: 'Wedding, Housewarming or New Beginnings', value: 'wedding', icon: 'feather', description: 'Welcoming golden chapters and warm homes' },
    ],
  },
  {
    id: 'vibe',
    title: 'What feeling should they experience upon opening?',
    subtitle: 'The emotional impression of the first glance',
    options: [
      { label: 'Warm Comfort & Sanctuary ("Like a Hug")', value: 'hug', icon: 'cloud', description: 'Soft candlelight, herbal tea, comforting treats' },
      { label: 'An Outdoor Romantic Adventure', value: 'adventure', icon: 'compass', description: 'Linen blankets, crystal flutes under open sky' },
      { label: 'Gasp of Wonder & Multi-Sensory Surprise', value: 'surprise', icon: 'eye', description: 'Hidden lights, mystery reveals & gold confetti' },
      { label: 'Bespoke Curated Craft & Timeless Utility', value: 'craft', icon: 'pen-tool', description: 'Fine stationery, leather & heirloom objects' },
    ],
  },
  {
    id: 'budget',
    title: 'What is your comfortable gifting budget?',
    subtitle: 'Marvel Me delivers pure luxury at every level',
    options: [
      { label: 'Delicate Gesture ($30 - $100)', value: 'modest', icon: 'tag', description: 'Atelier wrapping suites, vouchers, or delicate gifts' },
      { label: 'Signature Splendor ($100 - $200)', value: 'signature', icon: 'gem', description: 'Full sensory hampers and multi-tiered surprise boxes' },
      { label: 'Grand Experience ($200 - $350+)', value: 'grand', icon: 'crown', description: 'Luxurious picnic sets and complete heirloom suites' },
    ],
  },
];
