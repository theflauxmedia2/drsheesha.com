import { motion } from 'framer-motion';
import { photoSrc } from '../data/galleryPhotos';
import { sectionReveal, staggerContainer, staggerChild } from '../utils/motion';

const PHILOSOPHY = [
  {
    title: 'Carefully Sourced Flavours',
    text: 'Carefully sourced shisha flavours selected for depth, consistency, and character.',
  },
  {
    title: 'Expert Preparation',
    text: 'Expert preparation and hygiene standards at every session.',
  },
  {
    title: 'Premium Comfort',
    text: 'Comfortable seating and premium service throughout your evening.',
  },
  {
    title: 'Balanced Atmosphere',
    text: 'Balanced music — social, not overpowering — so conversation flows naturally.',
  },
];

const SPACE_IMAGES = [2, 8, 15, 22].map((n) => ({
  src: photoSrc('AMBIANCE', n),
  alt: `Dr. Sheesha ambience — view ${n}`,
}));

const About = () => (
  <main className="page" id="main-content">
    {/* Our Story */}
    <section className="section bg-black">
      <div className="section-inner">
        <motion.div {...sectionReveal}>
          <h1 className="h1" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: '1.5rem' }}>
            Our Story
          </h1>
          <p style={{ maxWidth: '720px', color: 'var(--smoke-dim)' }}>
            Dr. Sheesha was created for shisha connoisseurs who seek more than just
            flavours. Located in the heart of Dubai, our lounge blends traditional
            shisha craftsmanship with a modern lounge atmosphere — offering a
            refined social escape in the heart of Al Karama.
          </p>
        </motion.div>
        <motion.div className="about-hero-image" {...sectionReveal}>
          <img
            className="about-hero-image__photo"
            src={photoSrc('AMBIANCE', 28)}
            alt="Dr. Sheesha lounge interior with premium seating"
            loading="lazy"
          />
        </motion.div>
      </div>
    </section>

    {/* Philosophy */}
    <section className="section bg-charcoal">
      <div className="section-inner">
        <motion.h2
          className="h2"
          style={{ fontSize: '1.5rem', marginBottom: '2.5rem', textAlign: 'center' }}
          {...sectionReveal}
        >
          Crafted with Precision
        </motion.h2>
        <motion.div
          className="philosophy-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {PHILOSOPHY.map((card) => (
            <motion.article key={card.title} className="philosophy-card" variants={staggerChild}>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>

    {/* The Space */}
    <section className="section bg-charcoal-mid">
      <div className="section-inner">
        <motion.div {...sectionReveal}>
          <h2
            className="h2"
            style={{ fontSize: '1.5rem', marginBottom: '1.25rem' }}
          >
            Designed for Evenings That Last
          </h2>
          <p style={{ maxWidth: '640px', color: 'var(--smoke-dim)' }}>
            Our lounge layout offers intimate corners, social tables, and
            welcoming spaces — perfect for casual nights, celebrations, and
            private gatherings.
          </p>
        </motion.div>
        <motion.div
          className="gallery-strip"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {SPACE_IMAGES.map((img) => (
            <motion.img
              key={img.src}
              variants={staggerChild}
              className="gallery-strip__photo"
              src={img.src}
              alt={img.alt}
              loading="lazy"
            />
          ))}
        </motion.div>
      </div>
    </section>
  </main>
);

export default About;
