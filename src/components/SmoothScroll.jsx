import { createContext, useContext, useEffect, useRef, useState } from 'react';
import Lenis from 'lenis';

const SmoothScrollContext = createContext({
  lenis: { current: null },
  reducedMotion: false,
});

export const useLenis = () => useContext(SmoothScrollContext);

/**
 * Premium inertia scrolling via Lenis.
 * Disabled when prefers-reduced-motion is set.
 */
const SmoothScroll = ({ children }) => {
  const lenisRef = useRef(null);
  const [reducedMotion, setReducedMotion] = useState(
    () =>
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  );

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');

    const startLenis = () => {
      if (lenisRef.current || mq.matches) return;

      const lenis = new Lenis({
        duration: 1.15,
        easing: (t) => Math.min(1, 1.001 - 2 ** (-10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 0.88,
        touchMultiplier: 1.05,
        infinite: false,
      });

      lenisRef.current = lenis;

      let rafId;
      const raf = (time) => {
        lenis.raf(time);
        rafId = requestAnimationFrame(raf);
      };
      rafId = requestAnimationFrame(raf);

      document.documentElement.classList.add('lenis');

      return () => {
        cancelAnimationFrame(rafId);
        lenis.destroy();
        lenisRef.current = null;
        document.documentElement.classList.remove('lenis');
      };
    };

    let cleanup = startLenis();

    const onChange = (e) => {
      setReducedMotion(e.matches);
      if (e.matches) {
        cleanup?.();
        cleanup = undefined;
      } else {
        cleanup = startLenis();
      }
    };

    mq.addEventListener('change', onChange);

    return () => {
      mq.removeEventListener('change', onChange);
      cleanup?.();
    };
  }, []);

  return (
    <SmoothScrollContext.Provider value={{ lenis: lenisRef, reducedMotion }}>
      {children}
    </SmoothScrollContext.Provider>
  );
};

export default SmoothScroll;
