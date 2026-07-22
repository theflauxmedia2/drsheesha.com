/** Interleave photos by category so the grid mixes drinks, food, shisha, etc. */
export const interleaveGalleryPhotos = (photos) => {
  const buckets = new Map();

  photos.forEach((photo) => {
    if (!buckets.has(photo.category)) buckets.set(photo.category, []);
    buckets.get(photo.category).push(photo);
  });

  const categories = [...buckets.keys()];
  const mixed = [];
  let index = 0;

  while (mixed.length < photos.length) {
    let added = false;

    for (const category of categories) {
      const bucket = buckets.get(category);
      if (bucket[index]) {
        mixed.push(bucket[index]);
        added = true;
      }
    }

    if (!added) break;
    index += 1;
  }

  return mixed;
};

const MASONRY_PATTERN = [
  '',
  'gallery-tile--tall',
  'gallery-tile--wide',
  '',
  'gallery-tile--feature',
  'gallery-tile--tall',
  '',
  'gallery-tile--wide',
  'gallery-tile--tall',
  '',
  'gallery-tile--feature',
  '',
];

export const getMasonryTileClass = (index) =>
  MASONRY_PATTERN[index % MASONRY_PATTERN.length];

const HOME_SLOT_COUNT = 10;

export const getHomeGallerySlotClass = (index) =>
  `home-gallery__slot-${index % HOME_SLOT_COUNT}`;
