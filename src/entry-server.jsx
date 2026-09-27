import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import { AppShell } from './App.jsx';

export function render(url) {
  const appHtml = renderToString(
    <StaticRouter location={url}>
      <AppShell />
    </StaticRouter>,
  );
  return { appHtml };
}
