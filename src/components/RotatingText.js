import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';

/**
 * Cycles through a list of words with a vertical roll animation.
 * Falls back to a simple crossfade when reduced motion is preferred.
 */
const RotatingText = ({ words = [], interval = 2600, className = '' }) => {
  const [index, setIndex] = useState(0);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (words.length < 2) return undefined;
    const id = setInterval(() => setIndex((i) => (i + 1) % words.length), interval);
    return () => clearInterval(id);
  }, [words.length, interval]);

  const variants = reduced
    ? {
        enter: { opacity: 0 },
        center: { opacity: 1 },
        exit: { opacity: 0 },
      }
    : {
        enter: { y: '105%', opacity: 0 },
        center: { y: 0, opacity: 1 },
        exit: { y: '-105%', opacity: 0 },
      };

  return (
    <span className={`rotating-text ${className}`} aria-live="polite">
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={index}
          className="rotating-text-word"
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};

export default RotatingText;
