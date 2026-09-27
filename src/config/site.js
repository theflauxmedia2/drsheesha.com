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
    // 30:00 = 6:00 AM the next day. Google rejects a close time earlier than open.
    closes: '30:00',
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
    instagram: 'https://www.instagram.com/drs.dxb',
    snapchat: 'https://snapchat.com/t/RV32za0P',
    tiktok: 'https://www.tiktok.com/@storiesloungedxb',
    facebook: 'https://www.facebook.com/drs.dxb',
    whatsapp: WHATSAPP_URL,
  },
  logo: '/brand/logo.webp',
  logoWidth: 960,
  logoHeight: 408,
  defaultOgImage: '/og.jpg',
  twitterHandle: '@drs.dxb',
};

export const SOCIAL_PROFILE_URLS = [
  SITE.social.instagram,
  SITE.social.snapchat,
  SITE.social.tiktok,
  SITE.social.facebook,
];

export const ROUTES = [
  { path: '/', changefreq: 'weekly', priority: '1.0' },
  { path: '/about', changefreq: 'monthly', priority: '0.8' },
  { path: '/events', changefreq: 'weekly', priority: '0.8' },
  { path: '/gallery', changefreq: 'weekly', priority: '0.7' },
  { path: '/contact', changefreq: 'monthly', priority: '0.9' },
];
