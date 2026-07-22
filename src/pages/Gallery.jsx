import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GalleryTile from '../components/GalleryTile';
import {
  ALL_GALLERY_PHOTOS,
  GALLERY_FILTERS,
  CATEGORY_COUNTS,
} from '../data/galleryPhotos';
import {
  getMasonryTileClass,
  interleaveGalleryPhotos,
} from '../utils/galleryLayout';
import { sectionReveal } from '../utils/motion';

const Gallery = () => {
  const [filter, setFilter] = useState('ALL');

  const photos = useMemo(() => {
    const list =
      filter === 'ALL'
        ? interleaveGalleryPhotos(ALL_GALLERY_PHOTOS)
        : ALL_GALLERY_PHOTOS.filter((p) => p.category === filter);

    return list.map((photo, index) => ({
      photo,
      layoutClass: getMasonryTileClass(index),
    }));
  }, [filter]);

  const totalCount = ALL_GALLERY_PHOTOS.length;

  return (
    <main className="page">
      <section className="section bg-charcoal gallery-section">
        <div className="section-inner">
          <motion.div className="section-centered" {...sectionReveal}>
            <h1 className="h1" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}>
              Moments at Dr. Sheesha
            </h1>
            <p
              style={{
                marginTop: '1rem',
                color: 'var(--smoke-dim)',
                fontSize: '0.95rem',
              }}
            >
              {totalCount} photographs across ambience, shisha, drinks, and food.
            </p>
            <div className="gold-divider" />
          </motion.div>

          <motion.div
            className="gallery-filters"
            {...sectionReveal}
            style={{ marginTop: '2.5rem' }}
          >
            {GALLERY_FILTERS.map(({ id, label }) => (
              <button
                key={id}
                type="button"
                className={`gallery-filter ${filter === id ? 'active' : ''}`}
                onClick={() => setFilter(id)}
              >
                {label}
                {id !== 'ALL' && (
                  <span className="gallery-filter__count">
                    {CATEGORY_COUNTS[id]}
                  </span>
                )}
              </button>
            ))}
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              className="masonry masonry--photos"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
            >
              {photos.map(({ photo, layoutClass }, index) => (
                <GalleryTile
                  key={photo.id}
                  photo={photo}
                  lazy
                  className={layoutClass}
                  style={{ '--tile-index': index }}
                />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </main>
  );
};

export default Gallery;
