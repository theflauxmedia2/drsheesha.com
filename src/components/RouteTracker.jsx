import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Send a Google Ads page_view on client-side route changes (the initial load is sent by gtag config in index.html).
 * GA4 is left out: its enhanced measurement already tracks history changes, so sending to it here would double count.
 */
const RouteTracker = () => {
  const { pathname, search } = useLocation();
  const isFirst = useRef(true);

  useEffect(() => {
    if (isFirst.current) {
      isFirst.current = false;
      return;
    }
    if (typeof window.gtag !== 'function') return;
    window.gtag('event', 'page_view', {
      send_to: 'AW-16943669412',
      page_location: window.location.href,
      page_path: pathname + search,
      page_title: document.title,
    });
  }, [pathname, search]);

  return null;
};

export default RouteTracker;
