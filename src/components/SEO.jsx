import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { SITE } from '../config/site';
import { absoluteImage, absoluteUrl, getPageSeo } from '../config/seo';

const setMeta = (key, value, attr = 'name') => {
  if (!value) return;
  let el = document.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', value);
};

const setLink = (rel, href) => {
  if (!href) return;
  let el = document.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
};

/**
 * Updates document head per route — titles, meta, Open Graph, Twitter, canonical.
 */
const SEO = () => {
  const { pathname } = useLocation();
  const seo = getPageSeo(pathname);
  const canonical = absoluteUrl(pathname === '/' ? '/' : pathname);
  const ogImage = absoluteImage(SITE.defaultOgImage);
  const title = seo.title;
  const description = seo.description;

  useEffect(() => {
    document.title = title;
    document.documentElement.lang = SITE.language;

    setMeta('description', description);
    setMeta('keywords', seo.keywords);
    setMeta('author', SITE.legalName);
    setMeta('robots', 'index, follow, max-image-preview:large');
    setMeta('googlebot', 'index, follow');
    setMeta('theme-color', '#050505');

    setLink('canonical', canonical);

    setMeta('og:type', 'website', 'property');
    setMeta('og:site_name', SITE.name, 'property');
    setMeta('og:title', title, 'property');
    setMeta('og:description', description, 'property');
    setMeta('og:url', canonical, 'property');
    setMeta('og:image', ogImage, 'property');
    setMeta('og:image:width', '1200', 'property');
    setMeta('og:image:height', '630', 'property');
    setMeta('og:image:alt', `${SITE.name} — premium shisha lounge in Al Karama, Dubai`, 'property');
    setMeta('og:locale', SITE.locale, 'property');

    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:site', SITE.twitterHandle);
    setMeta('twitter:title', title);
    setMeta('twitter:description', description);
    setMeta('twitter:image', ogImage);
    setMeta('twitter:image:alt', `${SITE.name} — premium shisha lounge in Al Karama, Dubai`);

    setMeta('geo.region', 'AE-DU');
    setMeta('geo.placename', 'Dubai');
    setMeta('ICBM', `${SITE.geo.latitude}, ${SITE.geo.longitude}`);
  }, [title, description, seo.keywords, canonical, ogImage]);

  return null;
};

export default SEO;
