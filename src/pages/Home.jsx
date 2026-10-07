import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import GalleryTile from '../components/GalleryTile';
import HeroSlider from '../components/HeroSlider';
import { SITE } from '../config/site';
import { HOME_FAQS } from '../data/faqs';
import { HOME_GALLERY_PREVIEW, photoSrc } from '../data/galleryPhotos';
import { getHomeGallerySlotClass } from '../utils/galleryLayout';
import { heroStagger, heroItem, sectionReveal, staggerContainer, staggerChild } from '../utils/motion';
import { RESERVATION_PROMPT, whatsappUrl } from '../utils/whatsapp';

const PILLARS = [
  {
    title: 'Premium Sheesha',
    text: '40+ sheesha flavours — American Starbuzz, German blends and our own Masters Art mixes — prepared fresh by our sheesha masters.',
  },
  {
    title: 'Lounge Ambience',
    text: 'Plush seating, warm lighting and a relaxed social vibe — one of the easiest places to chill in Al Karama.',
  },
  {
    title: 'Food & Drinks',
    text: 'Tandoori grills, biryani, chaat, pizza and mezze, with mocktails, mojitos, milkshakes and specialty coffee.',
  },
];

const MENU_HIGHLIGHTS = [
  {
    title: 'Signature Sheesha',
    text: 'Mystic Haze, Tropical Delight, Blue Mist, Lady Killer, Double Apple Mint — plus a live sheesha-making show with your choice of flavours.',
  },
  {
    title: 'From the Clay Oven',
    text: 'Classic chicken tikka, old-skool paneer tikka, tandoori prawns, Pathani chicken and fresh garlic or cheese-stuffed naan.',
  },
  {
    title: 'Biryani & Curries',
    text: 'Chicken and mutton biryani, Dhaba butter chicken, mutton rogan josh, paneer makhani and slow-cooked Punjabi dal makhani.',
  },
  {
    title: 'Chaat & Small Bites',
    text: 'Delhi-style dahi puri, ragda samosa, avocado papdi chaat, truffle parmesan fries, pistachio falafel and a full mezze platter.',
  },
  {
    title: 'Asian, Pizza & Pasta',
    text: 'Dragon chicken, chicken lollipop, Indo-style Hakka noodles, tandoori tadka pizza, pesto pasta and loaded burgers.',
  },
  {
    title: 'Drinks & Desserts',
    text: 'Mojitos, Lotus and Ferrero Rocher shakes, Spanish latte, kadak chai and Moroccan tea, finished with cheese or Nutella konafa.',
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
          Open Daily · 12 PM – 6 AM
        </motion.p>
        <motion.h1 variants={heroItem}>
          Dr. Sheesha
          <span className="hero__h1-sub">Shisha Lounge &amp; Restaurant in Al Karama, Dubai</span>
        </motion.h1>
        <motion.p className="hero__sub" variants={heroItem}>
          {SITE.tagline}
        </motion.p>
        <motion.p className="hero__copy" variants={heroItem}>
          Premium sheesha, tandoori grills and late-night dining in the heart
          of Al Karama — where great food, 40+ flavours and warm lounge
          ambience come together from lunch until 6 AM.
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
            Dr. Sheesha is more than a shisha cafe — it&apos;s a lounge and
            restaurant in Al Karama designed for people who appreciate quality,
            ambience and good company. From lunch with colleagues to sunset
            conversations and late-night gatherings with friends, every visit is
            crafted with attention to flavour, comfort and atmosphere.
          </p>
          <p>
            Exploring restaurants, cafes and lounges in Al Karama, Dubai? Here
            you can pair your favourite sheesha with a proper dinner, settle in
            for a game of carrom or chess, and stay as long as the night lasts —
            a shisha lounge just a short drive from Bur Dubai.
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
            alt="Warm lounge seating at Dr. Sheesha, a shisha lounge in Al Karama, Dubai"
            loading="lazy"
          />
        </motion.div>
      </div>
    </section>

    {/* Menu highlights */}
    <section className="section bg-black" aria-labelledby="home-menu-heading">
      <div className="section-inner">
        <motion.div className="section-header section-centered" {...sectionReveal}>
          <p className="label-gold" style={{ marginBottom: '1rem' }}>
            The Dr. Sheesha Menu
          </p>
          <h2 id="home-menu-heading">Food, Shisha &amp; Late Nights in Al Karama</h2>
          <p className="section-lede">
            Looking for shisha with food in Dubai? Our kitchen serves dine-in
            lunch, dinner and late-night food until 6 AM — Indian classics,
            Asian favourites, Italian comfort food and Arabic mezze, all made to
            share over a sheesha.
          </p>
        </motion.div>
        <motion.div
          className="menu-grid menu-grid--three"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
        >
          {MENU_HIGHLIGHTS.map((item) => (
            <motion.article key={item.title} className="menu-item" variants={staggerChild}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </motion.article>
          ))}
        </motion.div>
        <motion.div style={{ marginTop: '2.5rem', textAlign: 'center' }} {...sectionReveal}>
          <a
            href={SITE.menuUrl}
            className="btn btn-outline"
            target="_blank"
            rel="noopener noreferrer"
          >
            See the Full Dr. Sheesha Menu
          </a>
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
            Plan a Birthday or Group Night
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
            Ambience, sheesha, drinks, food and unforgettable evenings at our
            Al Karama lounge.
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
              See Photos of the Lounge
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>

    {/* FAQ — mirrored in FAQPage JSON-LD */}
    <section className="section bg-charcoal" aria-labelledby="home-faq-heading">
      <div className="section-inner">
        <motion.div className="section-header section-centered" {...sectionReveal}>
          <h2 id="home-faq-heading">Good to Know Before You Visit</h2>
        </motion.div>
        <motion.div
          className="faq-list"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
        >
          {HOME_FAQS.map((faq) => (
            <motion.article key={faq.question} className="philosophy-card" variants={staggerChild}>
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>

    {/* Final CTA */}
    <section className="section bg-black-rich final-cta">
      <motion.div className="section-inner" {...sectionReveal}>
        <h2>Reserve Your Table Tonight</h2>
        <p className="section-lede" style={{ marginBottom: '2rem' }}>
          Lunch, dinner or a late-night sheesha — reserve a table in Al Karama
          in seconds on WhatsApp, or{' '}
          <Link to="/contact">book through our reservations page</Link>.
        </p>
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
