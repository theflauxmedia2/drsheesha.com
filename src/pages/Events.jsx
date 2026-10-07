import { useState } from 'react';
import { motion } from 'framer-motion';
import { photoSrc } from '../data/galleryPhotos';
import { sectionReveal, staggerContainer, staggerChild } from '../utils/motion';
import { eventEnquiryMessage, openWhatsApp } from '../utils/whatsapp';

const EVENT_TILES = [
  {
    title: 'Birthday Celebrations',
    category: 'AMBIANCE',
    index: 19,
    alt: 'Birthday celebration at Dr. Sheesha shisha lounge, Al Karama, Dubai',
  },
  {
    title: 'Corporate & Private Events',
    category: 'AMBIANCE',
    index: 27,
    alt: 'Private group event at Dr. Sheesha lounge in Al Karama',
  },
];

const OCCASIONS = [
  {
    title: 'Birthday Celebrations',
    text: 'Planning a birthday dinner in Al Karama? Tell us your guest count and we will set up a table, suggest sharing platters and make sure the food and sheesha arrive on cue. A birthday celebration lounge in Dubai — and a shisha lounge for birthdays that keeps going long after the candles.',
  },
  {
    title: 'Date Night',
    text: 'Our intimate corners, warm lighting and conversation-friendly music make Dr. Sheesha a relaxed date night lounge in Dubai — the kind of shisha lounge for date night where nobody rushes you. Book a dinner date in Al Karama, share a mezze platter and a Mystic Haze, and take your time.',
  },
  {
    title: 'Group Dinners',
    text: 'From office teams to big friend groups, we are a shisha lounge for groups in Dubai that can seat everyone together. Order biryani, tandoori platters and sizzlers to share for an easy group dinner in Dubai or a friends dinner in Al Karama.',
  },
  {
    title: 'Weekend Nights Out',
    text: 'Fri – Sun lounge sessions, Ladies Night every Wednesday and a live sheesha-making show make us a go-to weekend hangout and late night hangout in Dubai. Doors stay open until 6 AM, so your night out in Al Karama never has to end early.',
  },
];

const EVENT_TYPES = [
  'Birthday Celebration',
  'Group Dinner',
  'Date Night',
  'Corporate Evening',
  'Private Gathering',
  'Other',
];

const Events = () => {
  const [form, setForm] = useState({
    name: '',
    contact: '',
    eventType: EVENT_TYPES[0],
    date: '',
    guests: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    openWhatsApp(eventEnquiryMessage(form));
  };

  return (
    <main className="page" id="main-content">
      <section className="section bg-black">
        <div className="section-inner">
          <motion.div {...sectionReveal}>
            <p className="label-gold" style={{ marginBottom: '1rem' }}>
              Events &amp; Celebrations
            </p>
            <h1 className="h1" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: '1.25rem' }}>
              Birthdays, Date Nights &amp; Group Dinners in Al Karama
            </h1>
            <p style={{ maxWidth: '680px', color: 'var(--smoke-dim)' }}>
              Dr. Sheesha hosts weekly themed nights and celebrations designed to
              elevate your evenings — from relaxed lounge sessions to birthdays,
              group dinners and private gatherings. Whether it&apos;s a night out
              with friends in Dubai or a celebration dinner in Al Karama, we
              handle the table, the food and the sheesha so you can enjoy it.
            </p>
          </motion.div>

          <motion.div
            className="event-tiles"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {EVENT_TILES.map((event) => (
              <motion.article
                key={event.title}
                className="event-tile"
                variants={staggerChild}
                whileHover={{ scale: 1.02 }}
              >
                <img
                  className="event-tile__img"
                  src={photoSrc(event.category, event.index)}
                  alt={event.alt}
                  loading="lazy"
                />
                <div className="event-tile__overlay" aria-hidden="true" />
                <h2>{event.title}</h2>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section bg-charcoal-mid">
        <div className="section-inner">
          <motion.h2
            className="h2"
            style={{ fontSize: '1.5rem', marginBottom: '2.5rem', textAlign: 'center' }}
            {...sectionReveal}
          >
            Every Occasion, Sorted
          </motion.h2>
          <motion.div
            className="philosophy-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {OCCASIONS.map((item) => (
              <motion.article key={item.title} className="philosophy-card" variants={staggerChild}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section bg-charcoal">
        <div className="section-inner">
          <motion.div className="form-section" style={{ maxWidth: '100%' }} {...sectionReveal}>
            <h2 className="h2" style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>
              Private Events & Celebrations
            </h2>
            <p style={{ color: 'var(--smoke-dim)', marginBottom: '2rem', maxWidth: '600px' }}>
              Looking to host a private gathering or need a group table booking
              in Dubai? Our lounge is ideal for birthdays, corporate evenings and
              exclusive celebrations — complete with customized menus and
              personalized service. Send your details below and we&apos;ll confirm
              on WhatsApp.
            </p>

            <form className="form-grid" onSubmit={handleSubmit}>
              <div className="form-grid form-grid--two">
                <div className="form-group">
                  <label htmlFor="event-name">Name</label>
                  <input
                    id="event-name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="event-contact">Phone / Email</label>
                  <input
                    id="event-contact"
                    name="contact"
                    type="text"
                    required
                    value={form.contact}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="form-grid form-grid--two">
                <div className="form-group">
                  <label htmlFor="event-type">Event Type</label>
                  <select
                    id="event-type"
                    name="eventType"
                    value={form.eventType}
                    onChange={handleChange}
                  >
                    {EVENT_TYPES.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="event-date">Date</label>
                  <input
                    id="event-date"
                    name="date"
                    type="date"
                    required
                    value={form.date}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="event-guests">Number of Guests</label>
                <input
                  id="event-guests"
                  name="guests"
                  type="number"
                  min="1"
                  required
                  value={form.guests}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="event-message">Message</label>
                <textarea
                  id="event-message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                />
              </div>
              <motion.button
                type="submit"
                className="btn btn-gold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
              >
                Send via WhatsApp
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Events;
