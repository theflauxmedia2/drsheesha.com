import { SITE, SOCIAL_PROFILE_URLS } from './site.js';
import { absoluteImage, absoluteUrl, getPageSeo, normalizePath } from './seo.js';
import { RESERVATION_PROMPT, whatsappUrl } from '../utils/whatsapp.js';

const homeUrl = absoluteUrl('/');

const restaurantSchema = {
  '@type': 'Restaurant',
  '@id': `${SITE.url}/#restaurant`,
  name: SITE.name,
  alternateName: SITE.legalName,
  description:
    'Premium shisha lounge in Al Karama, Dubai — exotic flavours, food, drinks, events, and WhatsApp table reservations.',
  url: homeUrl,
  image: absoluteImage(SITE.defaultOgImage),
  logo: {
    '@type': 'ImageObject',
    url: absoluteImage(SITE.logo),
    width: SITE.logoWidth,
    height: SITE.logoHeight,
  },
  telephone: SITE.phoneHref.replace('tel:', ''),
  email: SITE.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: SITE.address.street,
    addressLocality: SITE.address.locality,
    addressRegion: SITE.address.region,
    addressCountry: SITE.address.country,
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: SITE.geo.latitude,
    longitude: SITE.geo.longitude,
  },
  hasMap: SITE.mapsUrl,
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: SITE.openingHoursSpecification.dayOfWeek,
      opens: SITE.openingHoursSpecification.opens,
      closes: SITE.openingHoursSpecification.closes,
    },
  ],
  acceptsReservations: true,
  sameAs: SOCIAL_PROFILE_URLS,
  hasMenu: SITE.menuUrl,
  potentialAction: {
    '@type': 'ReserveAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: whatsappUrl(RESERVATION_PROMPT),
      actionPlatform: [
        'http://schema.org/DesktopWebPlatform',
        'http://schema.org/MobileWebPlatform',
      ],
    },
    result: {
      '@type': 'Reservation',
      name: 'Table Reservation',
    },
  },
};

const websiteSchema = {
  '@type': 'WebSite',
  '@id': `${SITE.url}/#website`,
  name: SITE.name,
  url: homeUrl,
  description: restaurantSchema.description,
  publisher: { '@id': `${SITE.url}/#restaurant` },
  inLanguage: SITE.language,
};

export const buildJsonLd = (pathname) => {
  const path = normalizePath(pathname);
  const seo = getPageSeo(path);
  const pageUrl = absoluteUrl(path === '/' ? '/' : path);

  const graph = [websiteSchema, restaurantSchema];

  if (seo.indexable) {
    graph.push({
      '@type': 'WebPage',
      '@id': `${pageUrl}#webpage`,
      url: pageUrl,
      name: seo.title,
      description: seo.description,
      isPartOf: { '@id': `${SITE.url}/#website` },
      about: { '@id': `${SITE.url}/#restaurant` },
      inLanguage: SITE.language,
      primaryImageOfPage: absoluteImage(SITE.defaultOgImage),
    });
  }

  if (seo.indexable && path !== '/') {
    graph.push({
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: homeUrl,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: seo.breadcrumb,
          item: pageUrl,
        },
      ],
    });
  }

  return {
    '@context': 'https://schema.org',
    '@graph': graph,
  };
};
