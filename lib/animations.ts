// Shared fast-fade motion variants. Kept quick (150-300ms) with a higher
// baseline opacity so content reads as present, not "still loading".
export const fadeUp = {
  hidden: { opacity: 0.5, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.25, ease: "easeOut" as const },
  },
};

export const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

export const staggerItem = {
  hidden: { opacity: 0.5, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.2, ease: "easeOut" as const },
  },
};

export const pillContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.04,
      delayChildren: 0.1,
    },
  },
};

export const pillItem = {
  hidden: { opacity: 0.4, scale: 0.9 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.15 } },
};

export const cardHover = {
  scale: 1.02,
  y: -4,
};

export const cardHoverTransition = {
  type: "spring" as const,
  stiffness: 300,
  damping: 20,
};
