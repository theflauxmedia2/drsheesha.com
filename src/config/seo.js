import { SITE } from './site';

const defaultDescription =
  'Dr. Sheesha — premium shisha lounge in Al Karama, Dubai. Reserve via WhatsApp. Open daily 12 PM – 6 AM.';

/** Per-route SEO metadata */
export const PAGE_SEO = {
  '/': {
    title: 'Dr. Sheesha Dubai | Premium Shisha Lounge in Al Karama',
    description:
      'Dr. Sheesha — premium shisha lounge in Al Karama, Dubai. Exotic flavours, food, drinks & table reservations via WhatsApp. Open daily 12 PM – 6 AM.',
    keywords:
      'shisha lounge Dubai, hookah bar Al Karama, Dr Sheesha, premium shisha Dubai, shisha restaurant UAE, ladies night Dubai',
    breadcrumb: 'Home',
  },
  '/about': {
    title: 'Our Story | Dr. Sheesha Dubai',
    description:
      'Discover Dr. Sheesha — a premium shisha lounge in Al Karama, Dubai blending traditional craftsmanship with modern lounge ambience.',
    keywords:
      'about Dr Sheesha, shisha lounge story Dubai, premium hookah Al Karama',
    breadcrumb: 'About',
  },
  '/events': {
    title: 'Events & Private Bookings | Dr. Sheesha Dubai',
    description:
      'Host birthdays, ladies night, corporate evenings & private events at Dr. Sheesha — premium shisha lounge in Al Karama, Dubai.',
    keywords:
      'shisha lounge events Dubai, private lounge events Al Karama, ladies night Dubai, birthday lounge Dubai',
    breadcrumb: 'Events',
  },
  '/gallery': {
    title: 'Gallery | Dr. Sheesha Dubai',
    description:
      'Browse photos of Dr. Sheesha — lounge ambience, premium shisha, cocktails, food & nights out in Al Karama, Dubai.',
    keywords:
      'Dr Sheesha photos, shisha lounge gallery Dubai, hookah lounge images Al Karama',
    breadcrumb: 'Gallery',
  },
  '/contact': {
    title: 'Reserve a Table | Dr. Sheesha Dubai',
    description:
      'Book your table at Dr. Sheesha via WhatsApp +971 56 671 1730. 112 Za\'abeel St, Al Karama, Dubai. Open daily 12 PM – 6 AM.',
    keywords:
      'reserve shisha lounge Dubai, Dr Sheesha booking WhatsApp, Al Karama shisha contact',
    breadcrumb: 'Contact',
  },
};

export const getPageSeo = (pathname) =>
  PAGE_SEO[pathname] ?? {
    title: `${SITE.name} Dubai | Premium Shisha Lounge`,
    description: defaultDescription,
    keywords: 'shisha lounge Dubai, Dr Sheesha, Al Karama hookah',
    breadcrumb: 'Page',
  };

export const absoluteUrl = (path = '') =>
  `${SITE.url}${path.startsWith('/') ? path : `/${path}`}`;

export const absoluteImage = (path) => absoluteUrl(path);
