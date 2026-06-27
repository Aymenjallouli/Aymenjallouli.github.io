import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Scrolls the window back to the top on every route change.
 * `behavior: 'instant'` overrides the global `scroll-behavior: smooth`
 * so navigation jumps to the top instead of animating.
 */
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
