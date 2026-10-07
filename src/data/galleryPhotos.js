/** Photo manifest — paths match /public/photos/{CATEGORY}/{###}.webp */

export const CATEGORY_COUNTS = {
  AMBIANCE: 36,
  DRINKS: 83,
  FOODS: 101,
  SHEESHA: 19,
};

export const CATEGORY_LABELS = {
  AMBIANCE: 'Ambience',
  DRINKS: 'Drinks',
  FOODS: 'Food',
  SHEESHA: 'Shisha',
};

export const GALLERY_FILTERS = [
  { id: 'ALL', label: 'All' },
  { id: 'AMBIANCE', label: 'Ambience' },
  { id: 'SHEESHA', label: 'Shisha' },
  { id: 'DRINKS', label: 'Drinks' },
  { id: 'FOODS', label: 'Food' },
];

const pad = (n) => String(n).padStart(3, '0');

export const photoSrc = (category, index) =>
  `/photos/${category}/${pad(index)}.webp`;

/** Rotating alt descriptions per category so tiles don't share one string */
const CATEGORY_ALTS = {
  AMBIANCE: [
    'Lounge seating at Dr. Sheesha, Al Karama, Dubai',
    'Evening ambience at Dr. Sheesha shisha lounge in Dubai',
    'Interior of the Dr. Sheesha shisha cafe in Al Karama',
    'Dining lounge tables at Dr. Sheesha, Dubai',
    'Late-night lounge atmosphere at Dr. Sheesha, Al Karama',
  ],
  SHEESHA: [
    'Premium sheesha served at Dr. Sheesha, Al Karama',
    'Fresh sheesha at Dr. Sheesha shisha lounge, Dubai',
    'Signature sheesha flavour at Dr. Sheesha, Dubai',
    'Sheesha prepared by the Dr. Sheesha team in Al Karama',
  ],
  DRINKS: [
    'Mocktail served at Dr. Sheesha, Al Karama',
    'Specialty drink at the Dr. Sheesha shisha cafe, Dubai',
    'Chilled drink at Dr. Sheesha lounge, Al Karama',
    'Drinks to pair with sheesha at Dr. Sheesha, Dubai',
  ],
  FOODS: [
    'Dish from the Dr. Sheesha menu, Al Karama',
    'Food and shisha at Dr. Sheesha restaurant, Dubai',
    'Dinner plate at Dr. Sheesha dining lounge, Al Karama',
    'Sharing plate at Dr. Sheesha, Dubai',
    'Late-night food at Dr. Sheesha, Al Karama',
  ],
};

export const buildPhoto = (category, index) => {
  const alts = CATEGORY_ALTS[category];
  return {
    id: `${category}-${index}`,
    src: photoSrc(category, index),
    category,
    label: CATEGORY_LABELS[category],
    alt: alts[(index - 1) % alts.length],
  };
};

export const buildCategoryPhotos = (category) =>
  Array.from({ length: CATEGORY_COUNTS[category] }, (_, i) =>
    buildPhoto(category, i + 1),
  );

export const ALL_GALLERY_PHOTOS = Object.keys(CATEGORY_COUNTS).flatMap(
  buildCategoryPhotos,
);

/** Curated mix for the home page preview grid */
export const HOME_GALLERY_PREVIEW = [
  { category: 'AMBIANCE', index: 1 },
  { category: 'AMBIANCE', index: 12 },
  { category: 'SHEESHA', index: 1 },
  { category: 'SHEESHA', index: 8 },
  { category: 'DRINKS', index: 5 },
  { category: 'DRINKS', index: 24 },
  { category: 'FOODS', index: 10 },
  { category: 'FOODS', index: 35 },
  { category: 'AMBIANCE', index: 3 },
  { category: 'AMBIANCE', index: 28 },
].map(({ category, index }) => buildPhoto(category, index));
