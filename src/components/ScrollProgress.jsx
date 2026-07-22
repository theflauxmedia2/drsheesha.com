import { useEffect, useState } from 'react';
import { useLenis } from './SmoothScroll';

/** Thin gold progress bar — tracks scroll depth (Lenis + native fallback) */
const ScrollProgress = () => {
  const ctx = useLenis();
  const [progress, setProgress] = useState(0);
  const reducedMotion = ctx?.reducedMotion ?? false;

  useEffect(() => {
    if (reducedMotion) return undefined;

    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(window.scrollY / max, 1) : 0);
    };

    update();

    const lenisInstance = ctx?.lenis?.current;
    if (lenisInstance) {
      lenisInstance.on('scroll', update);
      return () => lenisInstance.off('scroll', update);
    }

    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, [ctx?.lenis, reducedMotion]);

  if (reducedMotion) return null;

  return (
    <div className="scroll-progress" aria-hidden="true">
      <div
        className="scroll-progress__bar"
        style={{ transform: `scaleX(${progress})` }}
      />
    </div>
  );
};

export default ScrollProgress;
