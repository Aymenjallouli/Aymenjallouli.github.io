'use client';

import { useEffect, useState } from 'react';

/**
 * Subscribes to a media query and re-renders when it flips.
 *
 * The first render always uses `initial`, on the server and in the browser
 * alike, and the real value arrives from the effect. Reading matchMedia during
 * that first render made phones hydrate different text than the server sent
 * (the "hover" vs "tap" caption), and React answers a mismatch by throwing the
 * server HTML away and re-rendering the whole page.
 */
export default function useMedia(query, initial = false) {
  const [matches, setMatches] = useState(initial);

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return undefined;
    const mql = window.matchMedia(query);
    const onChange = (e) => setMatches(e.matches);
    setMatches(mql.matches);
    // Safari < 14 only has the deprecated listener API.
    if (mql.addEventListener) mql.addEventListener('change', onChange);
    else mql.addListener(onChange);
    return () => {
      if (mql.removeEventListener) mql.removeEventListener('change', onChange);
      else mql.removeListener(onChange);
    };
  }, [query]);

  return matches;
}

export const useReducedMotion = () => useMedia('(prefers-reduced-motion: reduce)');
export const useCanHover = () => useMedia('(hover: hover) and (pointer: fine)', true);
