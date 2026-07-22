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
    alt: 'Birthday celebration at Dr. Sheesha',
  },
  {
    title: 'Corporate & Private Events',
    category: 'AMBIANCE',
    index: 27,
    alt: 'Private corporate event at Dr. Sheesha lounge',
  },
];

const EVENT_TYPES = [
  'Birthday Celebration',
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
    <main className="page">
      <section className="section bg-black">
        <div className="section-inner">
          <motion.div {...sectionReveal}>
            <h1 className="h1" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: '1.25rem' }}>
              Events & Entertainment
            </h1>
            <p style={{ maxWidth: '640px', color: 'var(--smoke-dim)' }}>
              Dr. Sheesha hosts weekly themed nights and special events designed
              to elevate your evenings — from relaxed lounge sessions to private
              celebrations and gatherings.
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
                <h3>{event.title}</h3>
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
              Looking to host a private gathering? Our lounge is ideal for
              birthdays, corporate evenings, and exclusive celebrations — complete
              with customized menus and personalized service.
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
