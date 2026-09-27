import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import GalleryTile from '../components/GalleryTile';
import HeroSlider from '../components/HeroSlider';
import { SITE } from '../config/site';
import { HOME_GALLERY_PREVIEW, photoSrc } from '../data/galleryPhotos';
import { getHomeGallerySlotClass } from '../utils/galleryLayout';
import { heroStagger, heroItem, sectionReveal, staggerContainer, staggerChild } from '../utils/motion';
import { RESERVATION_PROMPT, whatsappUrl } from '../utils/whatsapp';

const PILLARS = [
  {
    title: 'Premium Flavours',
    text: 'Premium blends, exotic infusions, and expert preparation for every palate.',
  },
  {
    title: 'Lounge Ambience',
    text: 'Sophisticated seating, inviting interiors, and relaxed luxury.',
  },
  {
    title: 'Food & Drinks',
    text: 'Craft cocktails, mocktails, and light bites to complement every session.',
  },
];

const HIGHLIGHTS = [
  { name: 'Happy Hour Specials', time: 'Daily | 11 AM – 7 PM' },
  { name: 'Weekend Lounge Sessions', time: 'Fri – Sun | All evening' },
  { name: 'Ladies Night', time: 'Every Wednesday' },
  { name: 'Lunch Combo Offers', time: 'Daily | During Lunch' },
];

const Home = () => {
  const heroRef = useRef(null);
  const galleryRef = useRef(null);
  const galleryInView = useInView(galleryRef, { once: true, margin: '-60px' });

  return (
  <main className="page page--home" id="main-content">
    {/* Hero — no top padding; full viewport */}
    <section ref={heroRef} className="hero">
      <HeroSlider heroRef={heroRef} />
      <motion.div
        className="hero__content"
        initial={false}
        animate="visible"
        variants={heroStagger.variants}
      >
        <motion.p className="label-gold label-with-lines" variants={heroItem}>
          Al Karama, Dubai
        </motion.p>
        <motion.h1 variants={heroItem}>Dr. Sheesha</motion.h1>
        <motion.p className="hero__sub" variants={heroItem}>
          {SITE.tagline}
        </motion.p>
        <motion.p className="hero__copy" variants={heroItem}>
          Experience the art of shisha in a refined lounge setting — where
          handcrafted flavours, music, and warm ambience come together for
          unforgettable evenings.
        </motion.p>
        <motion.div className="hero__ctas" variants={heroItem}>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }}>
            <a
              href={whatsappUrl(RESERVATION_PROMPT)}
              className="btn btn-gold"
              target="_blank"
              rel="noopener noreferrer"
            >
              Reserve Your Table
            </a>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }}>
            <a
              href={SITE.menuUrl}
              className="btn btn-outline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Explore Menu
            </a>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }}>
            <a
              href={SITE.social.instagram}
              className="btn btn-outline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Follow Us
            </a>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>

    {/* Experience snapshot */}
    <section className="section bg-charcoal">
      <div className="section-inner">
        <motion.div
          className="pillars"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {PILLARS.map((pillar) => (
            <motion.article
              key={pillar.title}
              className="pillar"
              variants={staggerChild}
            >
              <div className="gold-line-icon" />
              <h2>{pillar.title}</h2>
              <p>{pillar.text}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>

    {/* Brand statement */}
    <section className="section bg-black-rich">
      <div className="section-inner brand-split">
        <motion.div
          className="brand-split__text"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2>Where Shisha Becomes an Experience</h2>
          <p>
            Dr. Sheesha is more than a lounge — it&apos;s a destination designed
            for those who appreciate quality, ambience, and social moments. From
            sunset conversations to late-night gatherings, every visit is crafted
            with attention to flavour, comfort, and atmosphere.
          </p>
        </motion.div>
        <motion.div
          className="brand-split__image"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        >
          <img
            className="brand-split__photo"
            src={photoSrc('AMBIANCE', 6)}
            alt="Dr. Sheesha lounge ambience"
            loading="lazy"
          />
        </motion.div>
      </div>
    </section>

    {/* Weekly highlights */}
    <section className="section bg-charcoal-mid">
      <div className="section-inner">
        <motion.div className="section-header section-centered" {...sectionReveal}>
          <h2>What&apos;s On at Dr. Sheesha</h2>
        </motion.div>
        <motion.div
          className="highlights-scroll highlights-scroll--centered"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
        >
          {HIGHLIGHTS.map((item) => (
            <motion.article
              key={item.name}
              className="highlight-card"
              variants={staggerChild}
            >
              <h3>{item.name}</h3>
              <p>{item.time}</p>
            </motion.article>
          ))}
        </motion.div>
        <motion.div style={{ marginTop: '2rem', textAlign: 'center' }} {...sectionReveal}>
          <Link to="/events" className="btn btn-outline">
            View Events
          </Link>
        </motion.div>
      </div>
    </section>

    {/* Gallery preview */}
    <section className="section bg-black">
      <div className="section-inner">
        <motion.div className="section-centered" {...sectionReveal}>
          <p className="label-gold" style={{ marginBottom: '1rem' }}>
            The Experience
          </p>
          <h2
            className="h2"
            style={{ fontSize: 'clamp(1.75rem, 4vw, 2.25rem)', marginBottom: '0.5rem' }}
          >
            Moments at Dr. Sheesha
          </h2>
          <p style={{ color: 'var(--smoke-dim)', fontSize: '0.95rem' }}>
            Ambience, shisha, drinks, food, and unforgettable evenings.
          </p>
        </motion.div>

        <div
          ref={galleryRef}
          className={`home-gallery ${galleryInView ? 'home-gallery--revealed' : ''}`}
        >
          {HOME_GALLERY_PREVIEW.map((photo, i) => (
            <GalleryTile
              key={photo.id}
              photo={photo}
              lazy
              className={getHomeGallerySlotClass(i)}
              style={{ '--tile-index': i }}
            />
          ))}
        </div>

        <motion.div
          style={{ marginTop: '2.5rem', textAlign: 'center' }}
          {...sectionReveal}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }}>
            <Link to="/gallery" className="btn btn-outline">
              View Full Gallery
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>

    {/* Final CTA */}
    <section className="section bg-black-rich final-cta">
      <motion.div className="section-inner" {...sectionReveal}>
        <h2>Reserve Your Table Tonight</h2>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }}>
          <a
            href={whatsappUrl(RESERVATION_PROMPT)}
            className="btn btn-gold btn-shimmer"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book Now
          </a>
        </motion.div>
      </motion.div>
    </section>
  </main>
  );
};

export default Home;
