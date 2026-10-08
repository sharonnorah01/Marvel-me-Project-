/**
 * Image helper utility providing robust CDN fallbacks
 * Ensures images load reliably in local dev, AI Studio, GitHub, and Netlify deployments.
 */

export const LUXURY_FALLBACK_IMAGES = {
  hero: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=1200&auto=format&fit=crop',
  hamper: 'https://images.unsplash.com/photo-1577998474517-7eeeed4e448a?q=80&w=1200&auto=format&fit=crop',
  picnic: 'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?q=80&w=1200&auto=format&fit=crop',
  wrapping: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=1200&auto=format&fit=crop',
  surprise: 'https://images.unsplash.com/photo-1513201099705-a9746e1e201f?q=80&w=1200&auto=format&fit=crop',
  corporate: '/images/notebook-1.jpg',
  giftsForMe: '/images/gifts_for_me.jpg',
  lifestyle: 'https://images.unsplash.com/photo-1512909006721-3d6018887383?q=80&w=1200&auto=format&fit=crop',
};

export function handleImageFallback(
  event: React.SyntheticEvent<HTMLImageElement, Event>,
  categoryOrType?: string
) {
  const target = event.currentTarget;
  const currentSrc = target.src || '';

  // Determine appropriate fallback based on category or name
  let fallback = LUXURY_FALLBACK_IMAGES.hero;
  const lower = (categoryOrType || '').toLowerCase();

  if (lower.includes('gifts-for-me') || lower.includes('gifts for me') || lower.includes('solitude')) {
    fallback = LUXURY_FALLBACK_IMAGES.giftsForMe;
  } else if (lower.includes('corporate') || lower.includes('notebook')) {
    fallback = LUXURY_FALLBACK_IMAGES.corporate;
  } else if (lower.includes('hamper') || lower.includes('reverie')) {
    fallback = LUXURY_FALLBACK_IMAGES.hamper;
  } else if (lower.includes('picnic')) {
    fallback = LUXURY_FALLBACK_IMAGES.picnic;
  } else if (lower.includes('wrapping') || (lower.includes('atelier') && !lower.includes('corporate'))) {
    fallback = LUXURY_FALLBACK_IMAGES.wrapping;
  } else if (lower.includes('surprise') || lower.includes('noir') || lower.includes('voucher')) {
    fallback = LUXURY_FALLBACK_IMAGES.surprise;
  }

  // Prevent infinite error looping
  if (target.dataset.hasFailedFallback === 'true') {
    return;
  }

  if (currentSrc.includes('gifts_for_me') && !currentSrc.includes('/images/gifts_for_me.jpg')) {
    target.src = '/images/gifts_for_me.jpg';
    target.dataset.hasTriedLocal = 'true';
    return;
  }

  // If local /public path hasn't been tried yet and current is bundled, try /images/...
  if (currentSrc.includes('hero_luxury') && !currentSrc.includes('/images/hero_luxury_gift_box.jpg')) {
    target.src = '/images/hero_luxury_gift_box.jpg';
    target.dataset.hasTriedLocal = 'true';
    return;
  }

  if ((currentSrc.includes('corporate_notebooks') || currentSrc.includes('notebook-1')) && !currentSrc.includes('/images/notebook-1.jpg')) {
    target.src = '/images/notebook-1.jpg';
    target.dataset.hasTriedLocal = 'true';
    return;
  }

  // Final guaranteed fallback to high-resolution curated CDN image
  target.dataset.hasFailedFallback = 'true';
  target.src = fallback;
}
