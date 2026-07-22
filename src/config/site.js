/** Production site configuration — drsheesha.com */

const WHATSAPP_URL = 'https://wa.me/971566711730';

export const SITE = {
  name: 'Dr. Sheesha',
  legalName: 'Dr. Sheesha Dubai',
  tagline: 'Premium Flavours • Shisha Lounge • Elevated Nights',
  url: 'https://drsheesha.com',
  locale: 'en_AE',
  language: 'en',
  phone: '+971 56 671 1730',
  phoneHref: 'tel:+971566711730',
  whatsapp: WHATSAPP_URL,
  email: 'info@drsheesha.com',
  address: {
    street: "112 Za'abeel St — Al Karama",
    locality: 'Dubai',
    region: 'Dubai',
    country: 'AE',
    countryName: 'United Arab Emirates',
    formatted: "Dr Sheesha, 112 Za'abeel St — Al Karama, Dubai, UAE",
  },
  hours: 'Daily | 12:00 PM – 6:00 AM',
  openingHoursSpecification: {
    dayOfWeek: [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
    ],
    opens: '12:00',
    closes: '06:00',
  },
  geo: {
    latitude: 25.2481,
    longitude: 55.3066,
  },
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Dr+Sheesha+Al+Karama+Dubai',
  mapsEmbedUrl:
    'https://www.google.com/maps?q=25.2481,55.3066&hl=en&z=16&output=embed',
  menuUrl:
    'https://qr.mydigimenu.com/c2764751-64d6-4175-9d56-2d3b67d239d4',
  social: {
    instagram:
      'https://www.instagram.com/drs.dxb?igsh=Nmx1ODc2a2UzcDdt&utm_source=qr',
    snapchat: 'https://snapchat.com/t/RV32za0P',
    tiktok:
      'https://www.tiktok.com/@storiesloungedxb?_r=1&_t=ZS-97hK2YbJ1CZ',
    facebook: 'https://www.facebook.com/drs.dxb',
    whatsapp: WHATSAPP_URL,
  },
  defaultOgImage: '/HERO/001.webp',
  twitterHandle: '@drs.dxb',
};

export const ROUTES = [
  { path: '/', changefreq: 'weekly', priority: '1.0' },
  { path: '/about', changefreq: 'monthly', priority: '0.8' },
  { path: '/events', changefreq: 'weekly', priority: '0.8' },
  { path: '/gallery', changefreq: 'weekly', priority: '0.7' },
  { path: '/contact', changefreq: 'monthly', priority: '0.9' },
];
