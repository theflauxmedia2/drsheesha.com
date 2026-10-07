import { useState } from 'react';
import { motion } from 'framer-motion';
import { SITE } from '../config/site';
import SocialLinks from '../components/SocialLinks';
import { sectionReveal } from '../utils/motion';
import { openWhatsApp, reservationMessage } from '../utils/whatsapp';

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    guests: '',
    notes: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    openWhatsApp(reservationMessage(form));
  };

  return (
    <main className="page" id="main-content">
      <section className="section bg-charcoal">
        <div className="section-inner">
          <motion.div {...sectionReveal} style={{ marginBottom: '2.5rem' }}>
            <h1
              className="h1"
              style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: '1.25rem' }}
            >
              Reserve a Table at Dr. Sheesha, Al Karama
            </h1>
            <p style={{ maxWidth: '680px', color: 'var(--smoke-dim)' }}>
              Restaurant table booking in Al Karama takes seconds at Dr. Sheesha:
              fill in the form and your request opens straight in WhatsApp.
              Whether it&apos;s a lunch table, a dinner reservation for two or a
              shisha lounge table booking in Dubai for the whole group, we&apos;ll
              confirm it quickly — every day, from 12 PM to 6 AM.
            </p>
          </motion.div>

          <div className="contact-layout">
            <motion.div {...sectionReveal}>
              <form className="form-grid" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="res-name">Name</label>
                  <input
                    id="res-name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="res-phone">Phone</label>
                  <input
                    id="res-phone"
                    name="phone"
                    type="tel"
                    required
                    value={form.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-grid form-grid--two">
                  <div className="form-group">
                    <label htmlFor="res-date">Date</label>
                    <input
                      id="res-date"
                      name="date"
                      type="date"
                      required
                      value={form.date}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="res-time">Time</label>
                    <input
                      id="res-time"
                      name="time"
                      type="time"
                      required
                      value={form.time}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="res-guests">Guests</label>
                  <input
                    id="res-guests"
                    name="guests"
                    type="number"
                    min="1"
                    required
                    value={form.guests}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="res-notes">Notes</label>
                  <textarea
                    id="res-notes"
                    name="notes"
                    value={form.notes}
                    onChange={handleChange}
                  />
                </div>
                <motion.button
                  type="submit"
                  className="btn btn-gold"
                  style={{ width: '100%' }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.96 }}
                >
                  Send via WhatsApp
                </motion.button>
              </form>
            </motion.div>

            <motion.aside {...sectionReveal}>
              <div className="contact-info__block">
                <div className="gold-line-icon" />
                <h2>Find Us</h2>
                <p>
                  <a
                    href={SITE.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {SITE.address.formatted}
                  </a>
                </p>
              </div>
              <div className="contact-info__block">
                <div className="gold-line-icon" />
                <h2>WhatsApp</h2>
                <p>
                  <a
                    href={SITE.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {SITE.phone}
                  </a>
                </p>
              </div>
              <div className="contact-info__block">
                <div className="gold-line-icon" />
                <h2>Hours</h2>
                <p>{SITE.hours}</p>
                <p style={{ marginTop: '0.5rem' }}>
                  Dine-in lunch, dinner and late-night food until 6 AM — a late
                  night restaurant in Al Karama and a lounge open late in Dubai
                  for when the night is still going.
                </p>
              </div>
            </motion.aside>
          </div>
        </div>
      </section>

      <div className="map-embed">
        <iframe
          title="Dr. Sheesha location — Al Karama, Dubai"
          src={SITE.mapsEmbedUrl}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>

      <div className="bg-black">
        <SocialLinks labeled />
      </div>
    </main>
  );
};

export default Contact;
