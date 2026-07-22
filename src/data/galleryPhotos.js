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

export const buildPhoto = (category, index) => ({
  id: `${category}-${index}`,
  src: photoSrc(category, index),
  category,
  label: CATEGORY_LABELS[category],
  alt: `${CATEGORY_LABELS[category]} at Dr. Sheesha shisha lounge, Al Karama Dubai`,
});

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
