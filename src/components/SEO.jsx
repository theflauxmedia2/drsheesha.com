import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { SITE } from '../config/site';
import { getDocumentMeta } from '../config/documentHead';

const setMeta = (key, value, attr = 'name') => {
  let el = document.querySelector(`meta[${attr}="${key}"]`);
  if (!value) {
    el?.remove();
    return;
  }
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', value);
};

const setLink = (rel, href) => {
  let el = document.querySelector(`link[rel="${rel}"]`);
  if (!href) {
    el?.remove();
    return;
  }
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
};

const setJsonLd = (data) => {
  let el = document.getElementById('ldjson');
  if (!el) {
    el = document.createElement('script');
    el.id = 'ldjson';
    el.type = 'application/ld+json';
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data);
};

const setHeroPreload = (enabled) => {
  const selector = 'link[rel="preload"][as="image"]';
  const existing = document.head.querySelector(selector);
  if (!enabled) {
    existing?.remove();
    return;
  }
  if (existing) return;
  const link = document.createElement('link');
  link.rel = 'preload';
  link.as = 'image';
  link.href = '/HERO/001.webp';
  link.setAttribute('fetchpriority', 'high');
  document.head.appendChild(link);
};

/**
 * Keeps the document head in sync after client-side navigation.
 * The production build also stamps this head into each route's HTML.
 */
const SEO = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const meta = getDocumentMeta(pathname);
    document.title = meta.title;
    document.documentElement.lang = SITE.language;

    setMeta('description', meta.description);
    setMeta('keywords', meta.seo.keywords);
    setMeta('author', SITE.legalName);
    setMeta('robots', meta.robots);
    setMeta('googlebot', meta.robots);
    setLink('canonical', meta.seo.indexable ? meta.canonical : '');

    setMeta('og:type', 'website', 'property');
    setMeta('og:site_name', SITE.name, 'property');
    setMeta('og:title', meta.title, 'property');
    setMeta('og:description', meta.description, 'property');
    setMeta('og:url', meta.seo.indexable ? meta.canonical : '', 'property');
    setMeta('og:image', meta.image, 'property');
    setMeta('og:image:type', 'image/jpeg', 'property');
    setMeta('og:image:width', '1200', 'property');
    setMeta('og:image:height', '630', 'property');
    setMeta('og:image:alt', meta.imageAlt, 'property');
    setMeta('og:locale', SITE.locale, 'property');

    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:site', SITE.twitterHandle);
    setMeta('twitter:title', meta.title);
    setMeta('twitter:description', meta.description);
    setMeta('twitter:image', meta.image);
    setMeta('twitter:image:alt', meta.imageAlt);

    setMeta('geo.region', 'AE-DU');
    setMeta('geo.placename', 'Dubai');
    setMeta('ICBM', `${SITE.geo.latitude}, ${SITE.geo.longitude}`);

    setJsonLd(meta.jsonLd);
    setHeroPreload(meta.path === '/');
  }, [pathname]);

  return null;
};

export default SEO;
