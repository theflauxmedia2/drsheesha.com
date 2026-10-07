import { SITE } from './site.js';
import { absoluteImage, getPageSeo, normalizePath } from './seo.js';
import { buildJsonLd } from './schema.js';

const esc = (value) =>
  String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');

export const getDocumentMeta = (pathname) => {
  const path = normalizePath(pathname);
  const seo = getPageSeo(path);
  const canonical = `${SITE.url}${path === '/' ? '/' : path}`;
  return {
    path,
    seo,
    canonical,
    title: seo.title,
    description: seo.description,
    image: absoluteImage(SITE.defaultOgImage),
    imageAlt: `${SITE.name} — shisha lounge and restaurant in Al Karama, Dubai`,
    robots: seo.robots,
    jsonLd: buildJsonLd(path),
  };
};

export const renderHeadHtml = (pathname) => {
  const meta = getDocumentMeta(pathname);
  const json = JSON.stringify(meta.jsonLd).replaceAll('<', '\\u003c');
  const lines = [
    `<title>${esc(meta.title)}</title>`,
    `<meta name="description" content="${esc(meta.description)}" />`,
  ];

  if (meta.seo.keywords) {
    lines.push(`<meta name="keywords" content="${esc(meta.seo.keywords)}" />`);
  }

  lines.push(
    `<meta name="author" content="${esc(SITE.legalName)}" />`,
    `<meta name="robots" content="${esc(meta.robots)}" />`,
    `<meta name="googlebot" content="${esc(meta.robots)}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="${esc(SITE.name)}" />`,
    ...(meta.seo.indexable
      ? [`<meta property="og:url" content="${esc(meta.canonical)}" />`]
      : []),
    `<meta property="og:title" content="${esc(meta.title)}" />`,
    `<meta property="og:description" content="${esc(meta.description)}" />`,
    `<meta property="og:image" content="${esc(meta.image)}" />`,
    `<meta property="og:image:type" content="image/jpeg" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta property="og:image:alt" content="${esc(meta.imageAlt)}" />`,
    `<meta property="og:locale" content="${esc(SITE.locale)}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:site" content="${esc(SITE.twitterHandle)}" />`,
    `<meta name="twitter:title" content="${esc(meta.title)}" />`,
    `<meta name="twitter:description" content="${esc(meta.description)}" />`,
    `<meta name="twitter:image" content="${esc(meta.image)}" />`,
    `<meta name="twitter:image:alt" content="${esc(meta.imageAlt)}" />`,
    `<meta name="geo.region" content="AE-DU" />`,
    `<meta name="geo.placename" content="Dubai" />`,
    `<meta name="ICBM" content="${SITE.geo.latitude}, ${SITE.geo.longitude}" />`,
    `<link rel="alternate" type="text/plain" href="/llms.txt" title="LLMs.txt" />`,
    `<script id="ldjson" type="application/ld+json">${json}</script>`,
  );

  if (meta.seo.indexable) {
    lines.push(`<link rel="canonical" href="${esc(meta.canonical)}" />`);
  }

  if (meta.path === '/') {
    lines.unshift(
      `<link rel="preload" as="image" href="/HERO/001.webp" fetchpriority="high" />`,
    );
  }

  return lines.map((line) => `    ${line}`).join('\n');
};
