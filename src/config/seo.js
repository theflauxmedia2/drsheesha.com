import { SITE } from './site.js';

/** Per-route SEO metadata */
export const PAGE_SEO = {
  '/': {
    title: 'Dr. Sheesha | Shisha Lounge & Restaurant in Al Karama, Dubai',
    description:
      'Dr. Sheesha is a shisha lounge and restaurant in Al Karama, Dubai — 40+ sheesha flavours, tandoori, biryani and late-night dining. Open daily till 6 AM.',
    keywords:
      'dr sheesha dubai, dr sheesha al karama, dr sheesha karama, dr sheesha restaurant dubai, dr sheesha lounge dubai, dr sheesha cafe dubai, dr sheesha menu dubai, shisha lounge al karama, shisha lounge karama dubai, shisha lounge dubai, sheesha lounge dubai, shisha cafe al karama, shisha restaurant al karama, shisha with food dubai, dinner and shisha dubai, restaurants in al karama dubai, late night lounge al karama',
    breadcrumb: 'Home',
  },
  '/about': {
    title: 'About Dr. Sheesha | Dining Lounge & Hangout in Al Karama',
    description:
      'Dr. Sheesha is a shisha cafe and dining lounge in Al Karama, Dubai, made for friends and groups — casual dining, board games, mocktails and sheesha till 6 AM.',
    keywords:
      'places to eat in al karama, hangout places in al karama, places to chill in al karama, friends hangout in al karama, group hangout in al karama, casual dining al karama, group dining al karama, lounge for friends in dubai, shisha lounge for friends dubai, shisha cafe for groups dubai, cafe and lounge dubai, lounge restaurant dubai, dining lounge dubai',
    breadcrumb: 'About',
  },
  '/events': {
    title: 'Birthdays, Date Nights & Group Dinners | Dr. Sheesha Karama',
    description:
      'Celebrate birthdays, date nights, group dinners and weekend nights out at Dr. Sheesha, a shisha lounge in Al Karama, Dubai. Book your table via WhatsApp.',
    keywords:
      'birthday dinner al karama, birthday celebration lounge dubai, shisha lounge for birthdays dubai, date night lounge dubai, dinner date al karama, shisha lounge for date night dubai, group dinner dubai, shisha lounge for groups dubai, celebration dinner al karama, night out in al karama, night out with friends dubai, weekend night out al karama, weekend hangout dubai, late night hangout dubai, group table booking dubai',
    breadcrumb: 'Events',
  },
  '/gallery': {
    title: 'Photos of Dr. Sheesha | Shisha, Food & Drinks in Al Karama',
    description:
      'See inside Dr. Sheesha, a shisha cafe in Al Karama, Dubai — the lounge, signature sheesha, tandoori and Indian dishes, mojitos, shakes and late nights.',
    keywords:
      'dr sheesha photos, shisha cafe dubai, sheesha cafe dubai, food and drinks al karama, dinner lounge al karama, shisha places in dubai, sheesha places in dubai, food and shisha dubai',
    breadcrumb: 'Gallery',
  },
  '/contact': {
    title: 'Reserve a Table at Dr. Sheesha | Al Karama, Dubai Booking',
    description:
      'Book a table at Dr. Sheesha, Al Karama — WhatsApp +971 56 671 1730. Lunch, dinner and late-night shisha reservations every day, 12 PM to 6 AM.',
    keywords:
      'dr sheesha table booking, dr sheesha reservations dubai, reserve a table al karama, restaurant reservation al karama, restaurant table booking al karama, dinner reservation al karama, lounge reservation dubai, book a shisha lounge dubai, shisha lounge table booking dubai, late night restaurant al karama, late night dining dubai, restaurant open late al karama',
    breadcrumb: 'Contact',
  },
};

const INDEXABLE_ROBOTS = 'index, follow, max-image-preview:large';

export const normalizePath = (pathname = '/') => {
  if (!pathname || pathname === '/') return '/';
  const clean = pathname.split('?')[0].split('#')[0].replace(/\/+$/, '');
  return clean || '/';
};

export const getPageSeo = (pathname) => {
  const path = normalizePath(pathname);
  const page = PAGE_SEO[path];
  if (page) {
    return { ...page, robots: INDEXABLE_ROBOTS, indexable: true };
  }
  return {
    title: `Page not found | ${SITE.name} Dubai`,
    description:
      'This page does not exist. Visit Dr. Sheesha, the premium shisha lounge in Al Karama, Dubai, or reserve a table via WhatsApp.',
    keywords: '',
    breadcrumb: 'Not found',
    robots: 'noindex, follow',
    indexable: false,
  };
};

export const absoluteUrl = (path = '') =>
  `${SITE.url}${path.startsWith('/') ? path : `/${path}`}`;

export const absoluteImage = (path) => absoluteUrl(path);
