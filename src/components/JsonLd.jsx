import { useLocation } from 'react-router-dom';
import { SITE } from '../config/site';
import { absoluteImage, absoluteUrl, getPageSeo } from '../config/seo';
import { SOCIAL_PROFILE_URLS } from '../data/socialLinks';
import { RESERVATION_PROMPT, whatsappUrl } from '../utils/whatsapp';

const restaurantSchema = {
  '@type': 'Restaurant',
  '@id': `${SITE.url}/#restaurant`,
  name: SITE.name,
  alternateName: SITE.legalName,
  description:
    'Premium shisha lounge in Al Karama, Dubai — exotic flavours, food, drinks, events, and WhatsApp table reservations.',
  url: SITE.url,
  image: absoluteImage(SITE.defaultOgImage),
  logo: absoluteImage('/Dr_Sheesha_Dubai_Logo.png'),
  telephone: SITE.phoneHref.replace('tel:', ''),
  email: SITE.email,
  priceRange: '$$',
  servesCuisine: ['Middle Eastern', 'International', 'Lounge'],
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
  openingHoursSpecification: SITE.openingHoursSpecification.dayOfWeek.map(
    (day) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: day,
      opens: SITE.openingHoursSpecification.opens,
      closes: SITE.openingHoursSpecification.closes,
    }),
  ),
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
  url: SITE.url,
  description: restaurantSchema.description,
  publisher: { '@id': `${SITE.url}/#restaurant` },
  inLanguage: SITE.language,
};

const JsonLd = () => {
  const { pathname } = useLocation();
  const seo = getPageSeo(pathname);
  const pageUrl = absoluteUrl(pathname === '/' ? '/' : pathname);

  const webPageSchema = {
    '@type': 'WebPage',
    '@id': `${pageUrl}#webpage`,
    url: pageUrl,
    name: seo.title,
    description: seo.description,
    isPartOf: { '@id': `${SITE.url}/#website` },
    about: { '@id': `${SITE.url}/#restaurant` },
    inLanguage: SITE.language,
  };

  const graph = [
    { '@context': 'https://schema.org', ...websiteSchema },
    { '@context': 'https://schema.org', ...restaurantSchema },
    { '@context': 'https://schema.org', ...webPageSchema },
  ];

  if (pathname !== '/') {
    graph.push({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: SITE.url,
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

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
};

export default JsonLd;
