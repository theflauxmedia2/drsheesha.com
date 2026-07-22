/** Shared motion variants — transform + opacity only (GPU-friendly, no blur) */

const premiumEase = [0.22, 1, 0.36, 1];

export const sectionReveal = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-40px' },
  transition: { duration: 0.65, ease: premiumEase },
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.04 },
  },
};

export const staggerChild = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: premiumEase },
  },
};

export const premiumReveal = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
  transition: { duration: 0.65, ease: premiumEase },
};

export const premiumStagger = {
  container: {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.08, delayChildren: 0.04 },
    },
  },
  item: {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: premiumEase },
    },
  },
};

export const heroStagger = {
  variants: {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
  },
};

export const heroItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: premiumEase },
  },
};
