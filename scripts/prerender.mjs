import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createServer } from 'vite';
import { renderHeadHtml } from '../src/config/documentHead.js';
import { ROUTES } from '../src/config/site.js';


const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');

const applyHead = (template, pathname, appHtml) => {
  const head = renderHeadHtml(pathname);
  let html = template.replace(
    /<!--seo:start-->[\s\S]*?<!--seo:end-->/,
    `<!--seo:start-->\n${head}\n    <!--seo:end-->`,
  );
  html = html.replace(
    '<div id="root"></div>',
    `<div id="root">${appHtml}</div>`,
  );
  return html;
};

const writeRoute = async (template, render, pathname) => {
  const { appHtml } = await render(pathname);
  const page = applyHead(template, pathname, appHtml);
  const file =
    pathname === '/'
      ? path.join(dist, 'index.html')
      : path.join(dist, pathname.replace(/^\//, ''), 'index.html');
  await mkdir(path.dirname(file), { recursive: true });
  await writeFile(file, page);
  console.log(`prerendered ${pathname}`);
};

const vite = await createServer({
  root,
  server: { middlewareMode: true },
  appType: 'custom',
  logLevel: 'error',
});

try {
  const { render } = await vite.ssrLoadModule('/src/entry-server.jsx');
  const template = await readFile(path.join(dist, 'index.html'), 'utf8');

  if (!template.includes('<!--seo:start-->') || !template.includes('<div id="root"></div>')) {
    throw new Error('Built index.html is missing prerender markers.');
  }

  for (const route of ROUTES) {
    await writeRoute(template, render, route.path);
  }

  const { appHtml } = await render('/404');
  await writeFile(
    path.join(dist, '404.html'),
    applyHead(template, '/404', appHtml),
  );
  console.log('prerendered /404');
} finally {
  await vite.close();
}
