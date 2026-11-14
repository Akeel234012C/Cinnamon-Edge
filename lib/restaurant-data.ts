export type MenuCategory =
  | 'Starters'
  | 'Hoppers'
  | 'Kottu'
  | 'Fried Rice'
  | 'Noodles'
  | 'Devilled'
  | 'Drinks'
  | 'Milkshakes'
  | 'Desserts';

export interface MenuItem {
  id: string;
  name: string;
  category: MenuCategory;
  priceAud: number;
  description: string;
  dietary?: string;
  isVerified: boolean;
}

export interface SignatureDish {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  priceDisplay: string;
  verifiedPriceNote: string;
  targetCategory: MenuCategory;
  imagePath: string;
  imageAlt: string;
}

export type GalleryCategory =
  | 'All'
  | 'Sri Lankan food'
  | 'Kottu preparation'
  | 'Hoppers'
  | 'Rice and curry'
  | 'Café atmosphere'
  | 'Restaurant dining';

export interface GalleryItem {
  id: string;
  title: string;
  category: Exclude<GalleryCategory, 'All'>;
  caption: string;
  imagePath: string;
  aspectClass: 'aspect-[16/10]' | 'aspect-[4/3]';
}

export interface RestaurantConfig {
  businessName: string;
  businessType: string;
  streetAddress: string;
  suburb: string;
  state: string;
  postcode: string;
  country: string;
  fullAddress: string;
  phoneDisplay: string;
  phoneHref: string;
  googleMapsUrl: string;
  googleMapsEmbedUrl: string;
  uberEatsUrl: string;
  bookingPlatformUrl: string;
  googleReviewsUrl: string;
  googleRatingDisplay: string;
  openingHoursText: string;
  customMenuItems: MenuItem[];
}

export const GENERATED_IMAGES = {
  heroFeast: '/src/assets/images/hero_sri_lankan_feast_1794638285552.jpg',
  kottuRoti: '/src/assets/images/dish_kottu_roti_1794638286224.jpg',
  hoppers: '/src/assets/images/dish_traditional_hoppers_1794638289106.jpg',
  friedRice: '/src/assets/images/dish_special_fried_rice_1794638290937.jpg',
  starters: '/src/assets/images/dish_sri_lankan_starters_1794638291033.jpg',
} as const;

export const MENU_CATEGORIES: MenuCategory[] = [
  'Starters',
  'Hoppers',
  'Kottu',
  'Fried Rice',
  'Noodles',
  'Devilled',
  'Drinks',
  'Milkshakes',
  'Desserts',
];

export const GALLERY_CATEGORIES: GalleryCategory[] = [
  'All',
  'Sri Lankan food',
  'Kottu preparation',
  'Hoppers',
  'Rice and curry',
  'Café atmosphere',
  'Restaurant dining',
];

export const DEFAULT_RESTAURANT_CONFIG: RestaurantConfig = {
  businessName: 'Cinnamon Edge',
  businessType: 'Sri Lankan Café & Restaurant',
  streetAddress: 'Shop 6/742 Creek Road',
  suburb: 'Mount Gravatt East',
  state: 'QLD',
  postcode: '4122',
  country: 'Australia',
  fullAddress: 'Shop 6/742 Creek Road, Mount Gravatt East, QLD 4122, Australia',
  phoneDisplay: '+61 415 735 617',
  phoneHref: 'tel:+61415735617',
  googleMapsUrl: 'https://maps.app.goo.gl/ceQtifPvpuMjhWCP7',
  googleMapsEmbedUrl:
    'https://maps.google.com/maps?q=Shop%206/742%20Creek%20Road,%20Mount%20Gravatt%20East%20QLD%204122,%20Australia&t=&z=16&ie=UTF8&iwloc=&output=embed',
  uberEatsUrl: 'https://www.ubereats.com/au',
  bookingPlatformUrl: '',
  googleReviewsUrl: 'https://maps.app.goo.gl/ceQtifPvpuMjhWCP7',
  googleRatingDisplay: 'Verified Google Business Profile · Mount Gravatt East',
  openingHoursText: 'Please contact us for current opening hours.',
  customMenuItems: [],
};

export function hasExternalBookingPlatform(url?: string): boolean {
  if (!url) return false;
  const trimmed = url.trim();
  return trimmed.startsWith('http://') || trimmed.startsWith('https://');
}

export const INITIAL_VERIFIED_MENU_ITEMS: MenuItem[] = [
  // STARTERS
  {
    id: 'starter-fish-rolls',
    name: 'Fish Rolls (2 pcs)',
    category: 'Starters',
    priceAud: 11.5,
    description:
      'Crisp golden crumbed rolls filled with spiced Sri Lankan fish, potato, and aromatic herbs.',
    isVerified: true,
  },
  {
    id: 'starter-chicken-rolls',
    name: 'Chicken Rolls (2 pcs)',
    category: 'Starters',
    priceAud: 11.5,
    description:
      'Traditional Sri Lankan savoury crepes filled with seasoned chicken and potato, crumbed and fried until golden.',
    isVerified: true,
  },
  {
    id: 'starter-mutton-roll',
    name: 'Mutton Roll',
    category: 'Starters',
    priceAud: 15.0,
    description:
      'Richly spiced slow-cooked mutton and potato encased in a crisp golden breadcrumb crust.',
    isVerified: true,
  },
  {
    id: 'starter-veg-samosas',
    name: 'Vegetable Samosas (4 pcs)',
    category: 'Starters',
    priceAud: 10.0,
    description:
      'Crisp pastry triangles filled with fragrant spiced vegetables, served hot.',
    dietary: 'Vegetarian',
    isVerified: true,
  },

  // HOPPERS
  {
    id: 'hoppers-3-plain',
    name: '3 Plain Hoppers',
    category: 'Hoppers',
    priceAud: 18.9,
    description:
      'Three traditional bowl-shaped fermented rice and coconut milk pancakes with crisp lacy edges and soft centres.',
    dietary: 'Vegetarian · Gluten-Friendly',
    isVerified: true,
  },
  {
    id: 'hoppers-2-plain-2-egg',
    name: '2 Plain Hoppers + 2 Egg Hoppers',
    category: 'Hoppers',
    priceAud: 25.5,
    description:
      'A classic combination of two plain hoppers and two golden hoppers baked with whole farm eggs in the centre.',
    isVerified: true,
  },

  // KOTTU
  {
    id: 'kottu-chicken-cheese',
    name: 'Chicken & Cheese Kottu',
    category: 'Kottu',
    priceAud: 30.9,
    description:
      'Chopped godamba roti wok-tossed on the hot griddle with tender spiced chicken, melted cheese, fresh vegetables, and rich curry gravy.',
    isVerified: true,
  },
  {
    id: 'kottu-chicken-string-hoppers',
    name: 'Chicken String Hoppers Kottu',
    category: 'Kottu',
    priceAud: 31.9,
    description:
      'Delicate steamed rice noodle nests tossed with spiced chicken, aromatic curry leaves, vegetables, and signature Sri Lankan spices.',
    isVerified: true,
  },
  {
    id: 'kottu-vegetable',
    name: 'Vegetable Kottu',
    category: 'Kottu',
    priceAud: 24.9,
    description:
      'Freshly chopped flatbread stir-fried with seasonal garden vegetables, aromatic spices, and savoury vegetable curry sauce.',
    dietary: 'Vegetarian',
    isVerified: true,
  },

  // FRIED RICE
  {
    id: 'rice-cinnamon-edge-special',
    name: 'Cinnamon Edge Special Fried Rice',
    category: 'Fried Rice',
    priceAud: 36.9,
    description:
      'Our house signature wok-tossed fragrant basmati rice with king prawns, seasoned chicken, egg ribbons, spring onions, and house accompaniments.',
    isVerified: true,
  },
  {
    id: 'rice-chicken',
    name: 'Chicken Fried Rice',
    category: 'Fried Rice',
    priceAud: 27.9,
    description:
      'Aromatic Sri Lankan-style wok-fried basmati rice tossed with tender spiced chicken, egg, carrots, and leeks.',
    isVerified: true,
  },
  {
    id: 'rice-vegetable',
    name: 'Vegetable Fried Rice',
    category: 'Fried Rice',
    priceAud: 24.9,
    description:
      'Fragrant basmati rice stir-fried with crisp seasonal vegetables, spring onions, and delicate island seasoning.',
    dietary: 'Vegetarian',
    isVerified: true,
  },
  {
    id: 'rice-egg',
    name: 'Egg Fried Rice',
    category: 'Fried Rice',
    priceAud: 26.9,
    description:
      'Wok-tossed basmati rice with fluffy golden egg ribbons, julienned vegetables, and aromatic Sri Lankan spices.',
    dietary: 'Vegetarian',
    isVerified: true,
  },
  {
    id: 'rice-pork',
    name: 'Pork Fried Rice',
    category: 'Fried Rice',
    priceAud: 29.9,
    description:
      'Savoury Sri Lankan fried rice wok-tossed with seasoned tender pork pieces, egg, leeks, and cracked black pepper.',
    isVerified: true,
  },
  {
    id: 'rice-prawns',
    name: 'Prawns Fried Rice',
    category: 'Fried Rice',
    priceAud: 31.9,
    description:
      'Fragrant basmati rice stir-fried with succulent prawns, egg, spring onions, and coastal Sri Lankan aromatics.',
    isVerified: true,
  },
];

export const SIGNATURE_DISHES: SignatureDish[] = [
  {
    id: 'sig-kottu',
    name: 'Sri Lankan Kottu',
    subtitle: 'Traditional Griddle Favourite',
    description:
      'Freshly chopped flatbread, aromatic vegetables, and rich roasted curry spices tossed together on a sizzling iron griddle.',
    priceDisplay: 'From $24.90',
    verifiedPriceNote: 'Verified menu range ($24.90 – $31.90 AUD)',
    targetCategory: 'Kottu',
    imagePath: GENERATED_IMAGES.kottuRoti,
    imageAlt: 'Authentic Sri Lankan Kottu Roti plated on dark ceramic',
  },
  {
    id: 'sig-hoppers',
    name: 'Traditional Hoppers',
    subtitle: 'Crisp Bowl-Shaped Appa',
    description:
      'Delicate fermented rice and coconut milk hoppers with crisp lacy edges and soft centres, available plain or baked with egg.',
    priceDisplay: 'From $18.90',
    verifiedPriceNote: '3 Plain ($18.90) · 2 Plain + 2 Egg ($25.50)',
    targetCategory: 'Hoppers',
    imagePath: GENERATED_IMAGES.hoppers,
    imageAlt: 'Traditional Sri Lankan egg and plain hoppers with sambols',
  },
  {
    id: 'sig-chicken-cheese-kottu',
    name: 'Chicken & Cheese Kottu',
    subtitle: 'Rich & Indulgent House Classic',
    description:
      'Tender spiced chicken and ribbons of godamba roti folded with melted cheese, fresh leeks, carrots, and signature curry gravy.',
    priceDisplay: '$30.90',
    verifiedPriceNote: 'Verified public price (AUD)',
    targetCategory: 'Kottu',
    imagePath: GENERATED_IMAGES.kottuRoti,
    imageAlt: 'Chicken and Cheese Kottu with melted cheese and curry leaves',
  },
  {
    id: 'sig-rice-curry',
    name: 'Sri Lankan Rice & Curry',
    subtitle: 'Homestyle Island Feast',
    description:
      'Fragrant rice paired with traditional slow-simmered Sri Lankan curries, sambols, and vibrant island condiments.',
    priceDisplay: 'Enquire In-Store',
    verifiedPriceNote: 'Daily selection · Contact us for availability',
    targetCategory: 'Fried Rice',
    imagePath: GENERATED_IMAGES.heroFeast,
    imageAlt: 'Traditional Sri Lankan Rice and Curry clay pot feast',
  },
  {
    id: 'sig-special-fried-rice',
    name: 'Cinnamon Edge Special Fried Rice',
    subtitle: 'Chef’s Signature Wok Creation',
    description:
      'Our flagship Sri Lankan fried rice wok-tossed with prawns, seasoned chicken, golden egg, and aromatic island spices.',
    priceDisplay: '$36.90',
    verifiedPriceNote: 'Verified public price (AUD)',
    targetCategory: 'Fried Rice',
    imagePath: GENERATED_IMAGES.friedRice,
    imageAlt: 'Cinnamon Edge Special Fried Rice with king prawns and chicken',
  },
  {
    id: 'sig-starters',
    name: 'Sri Lankan Starters',
    subtitle: 'Golden Short Eats & Savoury Rolls',
    description:
      'Hand-rolled crispy fish rolls, mutton rolls, chicken rolls, and flaky vegetable samosas crafted for sharing.',
    priceDisplay: 'From $10.00',
    verifiedPriceNote: 'Samosas ($10.00) · Rolls ($11.50 – $15.00)',
    targetCategory: 'Starters',
    imagePath: GENERATED_IMAGES.starters,
    imageAlt: 'Crispy Sri Lankan fish rolls, mutton rolls and vegetable samosas',
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Traditional Island Feast & Clay Pot Curries',
    category: 'Sri Lankan food',
    caption:
      'Slow-simmered curries, golden hoppers, fragrant saffron rice, and house-ground sambols.',
    imagePath: GENERATED_IMAGES.heroFeast,
    aspectClass: 'aspect-[16/10]',
  },
  {
    id: 'gal-2',
    title: 'Wok & Griddle Kottu Preparation',
    category: 'Kottu preparation',
    caption:
      'Hand-chopped godamba roti ribbons tossed with spiced chicken, melted cheese, and fresh curry leaves.',
    imagePath: GENERATED_IMAGES.kottuRoti,
    aspectClass: 'aspect-[4/3]',
  },
  {
    id: 'gal-3',
    title: 'Crisp Lacy Egg & Plain Hoppers',
    category: 'Hoppers',
    caption:
      'Freshly pan-baked fermented rice and coconut milk hoppers served with fiery lunu miris and pol sambol.',
    imagePath: GENERATED_IMAGES.hoppers,
    aspectClass: 'aspect-[4/3]',
  },
  {
    id: 'gal-4',
    title: 'Homestyle Rice & Curry Table Spread',
    category: 'Rice and curry',
    caption:
      'Authentic Sri Lankan rice and curry accompaniments crafted with roasted Ceylon spices.',
    imagePath: GENERATED_IMAGES.heroFeast,
    aspectClass: 'aspect-[4/3]',
  },
  {
    id: 'gal-5',
    title: 'Sri Lankan Short Eats & Café Atmosphere',
    category: 'Café atmosphere',
    caption:
      'Golden crumbed fish rolls, mutton rolls, and crisp vegetable samosas in a warm, welcoming setting.',
    imagePath: GENERATED_IMAGES.starters,
    aspectClass: 'aspect-[4/3]',
  },
  {
    id: 'gal-6',
    title: 'Evening Restaurant Dining & Signature Fried Rice',
    category: 'Restaurant dining',
    caption:
      'Cinnamon Edge Special Fried Rice plated for relaxed evening dining in Mount Gravatt East.',
    imagePath: GENERATED_IMAGES.friedRice,
    aspectClass: 'aspect-[16/10]',
  },
];

export const UNCONFIRMED_CATEGORY_DESCRIPTIONS: Record<
  Exclude<MenuCategory, 'Starters' | 'Hoppers' | 'Kottu' | 'Fried Rice'>,
  string
> = {
  Noodles:
    'Sri Lankan wok-tossed noodles and string hopper dishes. Public menu items and AUD prices for this category are awaiting restaurant confirmation.',
  Devilled:
    'Sweet, tangy, and fiery wok-tossed Sri Lankan devilled specialties with capsicum and caramelized onion. Items and prices awaiting confirmation.',
  Drinks:
    'Barista coffee, Ceylon teas, and refreshing cold beverages. Full drink list and pricing awaiting restaurant confirmation.',
  Milkshakes:
    'Creamy house milkshakes and chilled café blends. Flavours and pricing awaiting restaurant confirmation.',
  Desserts:
    'Traditional Sri Lankan sweets and café desserts. Current selection and pricing awaiting restaurant confirmation.',
};

export function formatAudPrice(price: number): string {
  if (!Number.isFinite(price) || price < 0) {
    return '$0.00';
  }
  return `$${price.toFixed(2)}`;
}

export function getCombinedMenuItems(customItems: MenuItem[] = []): MenuItem[] {
  return [...INITIAL_VERIFIED_MENU_ITEMS, ...customItems];
}

export function filterMenuByCategory(
  items: MenuItem[],
  category: MenuCategory,
  searchQuery = ''
): MenuItem[] {
  const normalizedQuery = searchQuery.trim().toLowerCase();
  return items.filter((item) => {
    const matchesCategory = item.category === category;
    if (!matchesCategory) return false;
    if (!normalizedQuery) return true;
    return (
      item.name.toLowerCase().includes(normalizedQuery) ||
      item.description.toLowerCase().includes(normalizedQuery) ||
      (item.dietary && item.dietary.toLowerCase().includes(normalizedQuery))
    );
  });
}

export function filterGalleryByCategory(
  items: GalleryItem[],
  category: GalleryCategory
): GalleryItem[] {
  if (category === 'All') {
    return items;
  }
  return items.filter((item) => item.category === category);
}

export function validateNewMenuItemInput(input: {
  name: string;
  priceText: string;
  category: MenuCategory;
  description: string;
}): { valid: true; item: MenuItem } | { valid: false; error: string } {
  const trimmedName = input.name.trim();
  if (!trimmedName) {
    return { valid: false, error: 'Please enter a dish name.' };
  }
  const parsedPrice = Number.parseFloat(input.priceText);
  if (!Number.isFinite(parsedPrice) || parsedPrice <= 0) {
    return { valid: false, error: 'Please enter a valid AUD price greater than 0.' };
  }
  const trimmedDesc =
    input.description.trim() ||
    `Freshly prepared ${trimmedName} at Cinnamon Edge.`;

  return {
    valid: true,
    item: {
      id: `custom-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
      name: trimmedName,
      category: input.category,
      priceAud: Math.round(parsedPrice * 100) / 100,
      description: trimmedDesc,
      isVerified: false,
    },
  };
}
