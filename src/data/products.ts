import {
  heroLuxuryGiftBox,
  productLuxuryHamper,
  productLuxuryPicnic,
  productGiftWrapping,
  productSurpriseBox,
  corporateNotebooks,
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
    | 'Corporate Gifting'
    | 'Picnics'
    | 'Events Special'
    | 'Season Greetings'
    | 'Gift Wrapping'
    | 'Gift Card Vouchers'
    | 'Gift Surprises'
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
    accentColor: '#daaf37',
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
    previewColor: '#222222',
    accentColor: '#daaf37',
  },
  {
    id: 'pure-linen-botanical',
    name: 'Pure Linen & Pressed Blooms',
    description: 'Hand-torn raw linen ribbon, deckle-edged gift card with genuine pressed field hydrangeas.',
    price: 9,
    previewColor: '#F0ECE4',
    accentColor: '#b88e22',
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
  { id: 'gold-gilded', name: 'Gold Gilded Edge', fontStyle: 'font-handwriting', bg: 'bg-[#FFFDF9] border border-[#daaf37]/40' },
  { id: 'noir-velvet', name: 'Midnight & Gold Calligraphy', fontStyle: 'font-handwriting text-[#daaf37]', bg: 'bg-[#222222] text-[#daaf37]' },
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
    occasions: ['Gifts for Her', 'Gifts for Me', 'Birthday', 'Anniversary', 'Thank You', 'Self-Care', 'Thinking of You'],
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
    occasions: ['Gifts for Her', 'Kids & Teens', 'Birthday', 'Romantic', 'Milestone', 'Anniversary'],
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
    featured: true,
    bestseller: false,
    tagline: 'Sophisticated corporate appreciation featuring dual bespoke artisan notebooks',
    description: 'Elevate your enterprise relationships with tasteful, distinguished gifts free of cheap promotional branding. Designed to express genuine gratitude with tactile executive notebooks with wooden button closures, custom stationery, and premium roast blends.',
    includes: [
      'Dual luxury hardcover executive notebooks with artisan wooden button closures & ribbon bookmarks',
      'Heavy machined solid brass rollerball pen with German refill',
      'Specialty single-estate whole bean coffee tin (250g) from ethical highland growers',
      'Artisanal smoked rosemary almonds in matte black ceramic jar',
      'Branded or blind-debossed client greeting letterhead',
      'Magnetic closure linen presentation box with gold foil numbering',
    ],
    dimensions: '30cm x 22cm x 10cm · Weight 1.9kg',
    images: [
      corporateNotebooks,
      heroLuxuryGiftBox,
      productLuxuryHamper,
    ],
    occasions: ['Gifts for Him', 'Corporate', 'Milestone', 'Thank You'],
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
  {
    id: 'heirloom-baby-lullaby-chest',
    name: 'The Heirloom Baby Lullaby Chest',
    category: 'Gift Hampers',
    price: 155,
    rating: 4.98,
    reviewCount: 42,
    featured: true,
    bestseller: true,
    tagline: 'Organic muslin swaddle, hand-knit bunny rattle & lavender nursery balm',
    description: 'Welcome little miracles into the world with pure, gentle warmth. Housed in a hand-crafted keepsake wooden treasure chest, this baby hamper features 100% GOTS certified organic cloud muslin swaddles, a hand-knit heirloom bunny rattle, organic calming lavender nursery balm, and a personalized engraved beechwood birth milestone disc.',
    includes: [
      'GOTS Certified organic cotton muslin swaddle blanket (120cm x 120cm)',
      'Hand-crocheted organic cotton bunny rattle with gentle chime bell',
      'Organic cold-pressed lavender chamomile baby massage balm (60ml)',
      'Personalized engraved beechwood birth milestone keepsake disc',
      'Hand-lettered "Welcome Little One" gold-foiled greeting card',
      'Solid pine keepsake trunk with antiqued brass latch and velvet lining',
    ],
    dimensions: '28cm x 20cm x 12cm · Weight 1.6kg',
    images: [
      'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=900&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?q=80&w=900&auto=format&fit=crop',
      productLuxuryHamper,
    ],
    occasions: ['Baby Corner', 'Milestone', 'Birthday', 'New Baby'],
    reviews: [
      {
        id: 'rev-baby-1',
        author: 'Hannah & Toby M.',
        location: 'Copenhagen, Denmark',
        rating: 5,
        date: 'September 19, 2026',
        title: 'The softest baby hamper we received',
        comment: 'The bunny rattle is our daughter’s favorite, and having her name engraved on the wooden keepsake disc made it a permanent heirloom.',
        verified: true,
      },
    ],
  },
  {
    id: 'celestial-stargazer-adventure-chest',
    name: 'Celestial Stargazer Adventure Trunk',
    category: 'Gift Surprises',
    price: 145,
    rating: 4.93,
    reviewCount: 23,
    featured: true,
    bestseller: false,
    tagline: 'Brass pocket telescope, glow constellation map & adventure journal',
    description: 'Ignite their imagination and hunger for discovery. Packed inside an exploratory riveted keepsake chest, featuring a collapsible solid brass nautical pocket telescope, a phosphorescent glow-in-the-dark star map, a blank adventure journal with custom name debossing, and artisan space-rock crystal sweets.',
    includes: [
      'Collapsible 25x30 optical solid brass pocket telescope with leather casing',
      'Screenprinted phosphorescent nighttime constellation sky chart',
      'Hardcover blank exploration journal with personalized name debossing',
      'Artisanal candied fruit "space crystals" in vintage glass apothecary vial',
      'Secret brass explorer key and personalized explorer badge',
    ],
    dimensions: '26cm x 18cm x 14cm · Weight 1.7kg',
    images: [
      'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?q=80&w=900&auto=format&fit=crop',
      productSurpriseBox,
      heroLuxuryGiftBox,
    ],
    occasions: ['Kids & Teens', 'Birthday', 'Milestone'],
    reviews: [
      {
        id: 'rev-teen-1',
        author: 'Marcus & Leo Vance',
        location: 'Seattle, WA',
        rating: 5,
        date: 'August 30, 2026',
        title: 'My 11-year old was spellbound',
        comment: 'Far better than another screen or plastic toy. The brass telescope really works and the journal feels like an explorer’s artifact.',
        verified: true,
      },
    ],
  },
  {
    id: 'serenity-solitude-ritual-hamper',
    name: 'The Sanctuary Solitude Ritual Hamper',
    category: 'Gift Hampers',
    price: 150,
    rating: 4.97,
    reviewCount: 34,
    featured: true,
    bestseller: true,
    tagline: 'Organic French lavender bath soak, silk eye mask & amber soy candle',
    description: 'A sacred sensory sanctuary created specifically for "Gifts for Me". Dedicate time to tranquility with mineral-rich Dead Sea lavender bath salts, a pure 22-momme mulberry silk sleep mask, a crackling wooden-wick amber soy candle, and single-estate white peony loose-leaf tea.',
    includes: [
      'Dead Sea mineral botanical bath soak with French lavender & crushed rose petals (300g)',
      '100% Grade 6A pure 22-momme Mulberry silk weighted eye sanctuary mask',
      'Hand-poured 200g crackling wood-wick amber & cashmere soy candle (45hr burn)',
      'Single-origin organic White Peony loose-leaf tea with solid brass infuser spoon',
      'Personal Intention letterpress card handwritten in gold ink',
    ],
    dimensions: '30cm x 22cm x 12cm · Weight 2.1kg',
    images: [
      'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=900&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=900&auto=format&fit=crop',
      productLuxuryHamper,
    ],
    occasions: ['Gifts for Me', 'Self-Care', 'Birthday', 'Thank You'],
    reviews: [
      {
        id: 'rev-me-1',
        author: 'Elena Rostova',
        location: 'Vienna, Austria',
        rating: 5,
        date: 'October 1, 2026',
        title: 'Bought this for myself after a long project',
        comment: 'The scent when you open the lid is pure serenity. The silk eye mask feels divine and the candle crackles like an intimate fireplace.',
        verified: true,
      },
    ],
  },
  {
    id: 'the-artisan-heritage-valet-suite',
    name: 'The Heritage Valet & Espresso Hamper',
    category: 'Gift Hampers',
    price: 175,
    rating: 4.94,
    reviewCount: 27,
    featured: true,
    bestseller: false,
    tagline: 'Artisanal single-estate roast, leather catchall tray & dark cocoa',
    description: 'An elevated daily ritual for the discerning man. Features full-grain vegetable-tanned leather catchall desk tray with custom hot-stamped initials, a specialty single-estate dark espresso roast, smoked rosemary sea salt almonds, and a solid brass pocket shoehorn and key clip.',
    includes: [
      'Vegetable-tanned saddle leather valet tray with brass snap corners and custom monogram',
      'Specialty single-estate whole bean espresso tin (250g) from ethical highland growers',
      'Smoked rosemary sea salt almonds in matte black ceramic jar with wooden lid',
      'Machined solid brass EDC pocket key fob with laser-engraved monogram',
      '74% Single-Origin Dominican Republic cocoa bar with roasted cacao nibs',
    ],
    dimensions: '30cm x 22cm x 10cm · Weight 1.8kg',
    images: [
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=900&auto=format&fit=crop',
      corporateNotebooks,
      heroLuxuryGiftBox,
    ],
    occasions: ['Gifts for Him', 'Corporate', 'Milestone', 'Thank You'],
    reviews: [
      {
        id: 'rev-him-1',
        author: 'Alexander Wright',
        location: 'Chicago, IL',
        rating: 5,
        date: 'September 22, 2026',
        title: 'Subtle, masculine, and impeccable quality',
        comment: 'The leather tray sits on my dresser every day and the espresso was top tier. A truly tasteful gift.',
        verified: true,
      },
    ],
  },
  {
    id: 'the-grand-milestone-gala-chest',
    name: 'The Grand Milestone Celebration Chest',
    category: 'Events Special',
    price: 265,
    rating: 4.98,
    reviewCount: 28,
    featured: true,
    bestseller: true,
    tagline: 'Designed for weddings, grand galas, milestone promotions & anniversaries',
    description: 'An imposing monument to celebration. Housed in a brass-hinged solid birch keepsake trunk with velvet cushioning, featuring hand-blown crystal celebration flutes, personalized gold-debossed milestone guestbook, vintage French champagne truffles, and solid brass taper candleholders.',
    includes: [
      'Solid birchwood heirloom celebration trunk with antiqued brass clasps',
      'Pair of hand-blown crystal stem flutes with delicate optic swirl',
      'Personalized gold-foil debossed linen anniversary & milestone guestbook',
      'Master chocolatier Marc de Champagne gold-dusted dark truffles (200g)',
      'Dual solid machined brass fluted taper candleholders with beeswax tapers',
      'Hand-poured beeswax royal monogram seal and deckle-edge letter',
    ],
    dimensions: '38cm x 28cm x 16cm · Weight 3.4kg',
    images: [
      'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=900&auto=format&fit=crop',
      productLuxuryHamper,
      productGiftWrapping,
    ],
    occasions: ['Milestone', 'Wedding', 'Anniversary', 'Events Special'],
    reviews: [
      {
        id: 'rev-event-1',
        author: 'Lord & Lady Ashford',
        location: 'Surrey, UK',
        rating: 5,
        date: 'September 14, 2026',
        title: 'Ordered for our daughter’s wedding evening',
        comment: 'The crystal flutes and brass candleholders were breathtaking. Opening this in their bridal suite was a memory they will never forget.',
        verified: true,
      },
    ],
  },
  {
    id: 'bespoke-wedding-favor-suite',
    name: 'The Bespoke Wedding & Gala Keepsake Suite',
    category: 'Events Special',
    price: 185,
    rating: 4.95,
    reviewCount: 32,
    featured: false,
    bestseller: false,
    tagline: 'Hand-dyed silk ribbon favors, customized wax seals & botanical honey',
    description: 'White-glove event styling suite for luxury celebrations. Includes personalized monogram wax seals, miniature lavender honeycomb jars, artisanal dragees, and gold-foil thank-you cards tailored to your wedding or gala palette.',
    includes: [
      'Customized wax seal die cast with your couple or event crest',
      'Set of artisanal single-origin honeycomb jars with mini olive wood drippers',
      'Hand-torn Italian silk ribbon bows in custom color-matched dye',
      'Gold-edged letterpress event placecards and thank-you cards',
      'Keepsake velvet presentation chest',
    ],
    dimensions: '32cm x 22cm x 12cm · Weight 2.0kg',
    images: [
      productGiftWrapping,
      heroLuxuryGiftBox,
      productLuxuryHamper,
    ],
    occasions: ['Wedding', 'Events Special', 'Milestone', 'Thank You'],
    reviews: [
      {
        id: 'rev-event-2',
        author: 'Vivienne St. Claire',
        location: 'Paris, France',
        rating: 5,
        date: 'August 28, 2026',
        title: 'Perfect for our destination wedding in Provence',
        comment: 'The color matching with our floral arrangements was exact. Our guests were mesmerized by the craftsmanship.',
        verified: true,
      },
    ],
  },
  {
    id: 'the-holiday-solstice-reverie-hamper',
    name: 'The Winter Solstice & Holiday Reverie',
    category: 'Season Greetings',
    price: 195,
    rating: 4.99,
    reviewCount: 48,
    featured: true,
    bestseller: true,
    tagline: 'Cinnamon spiced dark cocoa, gold-leaf spiced honey & pine amber candle',
    description: 'A comforting holiday sanctuary crafted to bring warmth to cold winter nights. Filled with stone-ground mulled spice dark chocolate, single-harvest holiday spiced honey, a crackling cedar and pine amber candle, and hand-woven festive tartan linen napkins.',
    includes: [
      'Hand-poured 240g Cedar, Smoked Pine & Amber holiday soy candle (60hr burn)',
      'Gold-leaf infused holiday spiced wildflower honey jar with wooden dripper',
      '72% Stone-ground dark chocolate bar infused with Ceylon cinnamon & orange zest',
      'Single-estate mulled winter tea blend in collectible brass tin',
      'Pure woven linen holiday dinner napkins with hand-hemmed gold borders (Set of 2)',
      'Festive pine sprig and cranberry wax seal keepsake presentation box',
    ],
    dimensions: '34cm x 24cm x 15cm · Weight 2.7kg',
    images: [
      'https://images.unsplash.com/photo-1512909006721-3d6018887383?q=80&w=900&auto=format&fit=crop',
      heroLuxuryGiftBox,
      productLuxuryHamper,
    ],
    occasions: ['Season Greetings', 'Holiday', 'Birthday', 'Thank You'],
    reviews: [
      {
        id: 'rev-season-1',
        author: 'Charlotte Sterling',
        location: 'Toronto, Canada',
        rating: 5,
        date: 'October 3, 2026',
        title: 'Pure festive enchantment in a box',
        comment: 'The cedar pine candle makes the entire house smell like a luxury alpine chalet. Every item was pure luxury.',
        verified: true,
      },
    ],
  },
  {
    id: 'autumn-harvest-golden-glow-basket',
    name: 'The Golden Harvest Seasonal Hamper',
    category: 'Season Greetings',
    price: 170,
    rating: 4.92,
    reviewCount: 25,
    featured: false,
    bestseller: false,
    tagline: 'Artisanal maple honeycomb, smoked almonds & mulled fruit confiture',
    description: 'Celebrate the changing seasons with warm golden tones and harvest delights. Pure Vermont maple syrup honeycomb, smoked sea salt rosemary almonds, fig and walnut confiture, and warming spiced chai tea in a textured linen box.',
    includes: [
      'Hand-harvested maple honeycomb in Italian embossed glass jar',
      'Artisan fig, walnut & port wine confiture for cheeses',
      'Smoked rosemary sea salt almonds in ceramic keepsake pot',
      'Single-estate whole leaf spiced chai tea tin with brass measuring spoon',
      'Keepsake golden linen storage chest with magnetic closure',
    ],
    dimensions: '30cm x 22cm x 14cm · Weight 2.2kg',
    images: [
      productLuxuryHamper,
      heroLuxuryGiftBox,
      productLuxuryPicnic,
    ],
    occasions: ['Season Greetings', 'Thank You', 'Holiday', 'Milestone'],
    reviews: [
      {
        id: 'rev-season-2',
        author: 'Graham & Alice Pendelton',
        location: 'Dublin, Ireland',
        rating: 5,
        date: 'September 30, 2026',
        title: 'Rich autumnal flavours and gorgeous box',
        comment: 'The fig walnut confiture paired with cheese is unforgettable. Beautifully packaged with dried wheat stalks and gold ribbon.',
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
