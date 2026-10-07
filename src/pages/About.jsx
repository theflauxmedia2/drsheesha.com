import { motion } from 'framer-motion';
import { photoSrc } from '../data/galleryPhotos';
import { sectionReveal, staggerContainer, staggerChild } from '../utils/motion';

const PHILOSOPHY = [
  {
    title: 'Carefully Sourced Flavours',
    text: 'American Starbuzz, German blends and our own Masters Art mixes — selected for depth, consistency and character.',
  },
  {
    title: 'Expert Preparation',
    text: 'Our sheesha masters prepare every head by hand, with strict hygiene standards at every session.',
  },
  {
    title: 'A Real Kitchen',
    text: 'Casual dining done properly — tandoori, biryani, chaat, Asian bowls and pizza, cooked fresh from lunch until late.',
  },
  {
    title: 'Balanced Atmosphere',
    text: 'Comfortable seating, attentive service and music that is social, not overpowering — so conversation flows naturally.',
  },
];

const SPACE_IMAGES = [
  { n: 2, alt: 'Lounge seating for friends and groups at Dr. Sheesha, Al Karama' },
  { n: 8, alt: 'Evening ambience inside the Dr. Sheesha shisha cafe in Dubai' },
  { n: 15, alt: 'Social tables set for group dining at Dr. Sheesha, Al Karama' },
  { n: 22, alt: 'Intimate corner seating at Dr. Sheesha dining lounge, Dubai' },
].map(({ n, alt }) => ({ src: photoSrc('AMBIANCE', n), alt }));

const About = () => (
  <main className="page" id="main-content">
    {/* Our Story */}
    <section className="section bg-black">
      <div className="section-inner">
        <motion.div {...sectionReveal}>
          <p className="label-gold" style={{ marginBottom: '1rem' }}>
            Our Story
          </p>
          <h1 className="h1" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: '1.5rem' }}>
            A Dining Lounge &amp; Hangout in Al Karama
          </h1>
          <p style={{ maxWidth: '720px', color: 'var(--smoke-dim)' }}>
            Dr. Sheesha was created for people who want more than a quick
            sheesha. In the heart of Al Karama, Dubai, our lounge blends
            traditional shisha craftsmanship with a full dine-in kitchen and a
            modern lounge atmosphere — a cafe and lounge where you can eat well,
            unwind and stay late.
          </p>
          <p style={{ maxWidth: '720px', color: 'var(--smoke-dim)', marginTop: '1rem' }}>
            We built it to be one of the easiest hangout places in Al Karama:
            friends meeting after work, colleagues out for lunch, couples on a
            dinner date and big groups taking over the long tables for a night
            out. If you are looking for places to eat in Al Karama, or simply a
            place to chill with good company, there is a seat waiting for you —
            every day from 12 PM to 6 AM.
          </p>
        </motion.div>
        <motion.div className="about-hero-image" {...sectionReveal}>
          <img
            className="about-hero-image__photo"
            src={photoSrc('AMBIANCE', 28)}
            alt="Dr. Sheesha lounge interior with premium seating, Al Karama, Dubai"
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

    {/* Friends & groups */}
    <section className="section bg-black-rich">
      <div className="section-inner">
        <motion.div {...sectionReveal}>
          <h2
            className="h2"
            style={{ fontSize: '1.5rem', marginBottom: '1.25rem' }}
          >
            Made for Friends &amp; Groups
          </h2>
          <p style={{ maxWidth: '720px', color: 'var(--smoke-dim)' }}>
            Dr. Sheesha is a shisha lounge for friends and a shisha cafe for
            groups of every size. Push the tables together for group dining in
            Al Karama, challenge each other to carrom, chess or Jackaroo, and
            order a spread to share — mezze platters, tandoori platters, loaded
            fries and chicken lollipops — while the sheesha keeps coming.
          </p>
          <p style={{ maxWidth: '720px', color: 'var(--smoke-dim)', marginTop: '1rem' }}>
            It&apos;s the lounge for friends in Dubai who would rather talk than
            shout over the music: a relaxed friends hangout in Al Karama on
            weeknights, an easy evening hangout in Dubai after work, and a group
            hangout that easily turns into a long weekend night out.
          </p>
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
            Our lounge layout offers intimate corners for two, social tables for
            friends and roomy spaces for larger groups — perfect for casual
            nights, celebrations and private gatherings. Part restaurant, part
            lounge, it&apos;s a dining lounge in Dubai designed for evenings that
            don&apos;t need to end early.
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
