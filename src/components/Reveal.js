import React, { useEffect, useRef, useState } from 'react';

/**
 * Wrapper that fades + lifts its content in on first scroll into view.
 *
 * Uses IntersectionObserver + a CSS class rather than `animation-timeline:
 * view()` (Chrome-only) so the reveal behaves identically in every browser.
 *
 * It stays a plain wrapper on purpose: the reveal owns `transform` on this
 * element, so the child keeps its own tilt and hover transforms without the
 * two fighting over the same property.
 */
const Reveal = ({ className = '', delay = 0, children, ...rest }) => {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    if (typeof IntersectionObserver === 'undefined') {
      setShown(true);
      return undefined;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const classes = ['rv', shown ? 'is-in' : '', className].filter(Boolean).join(' ');

  return (
    <div ref={ref} className={classes} style={delay ? { transitionDelay: `${delay}ms` } : undefined} {...rest}>
      {children}
    </div>
  );
};

export default Reveal;
