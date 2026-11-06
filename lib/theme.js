/**
 * Two complete looks over the same markup: "pro" (clean, corporate — the
 * default) and "spidey" (the comic-book edition).
 *
 * The active theme lives in a `data-theme` attribute on <html>. The server
 * always renders the default; THEME_SCRIPT runs in <head> before first paint
 * and swaps in a returning visitor's saved choice, so neither theme ever
 * flashes the other. Everything visual hangs off that attribute in CSS — no
 * React state, which is what keeps hydration identical for both.
 */
export const THEME_KEY = 'aj-theme';
export const DEFAULT_THEME = 'pro';
export const THEMES = ['pro', 'spidey'];

export const THEME_SCRIPT = `(function(){try{var t=localStorage.getItem('${THEME_KEY}');if(t==='pro'||t==='spidey')document.documentElement.setAttribute('data-theme',t)}catch(e){}})();`;

export const getTheme = () =>
  (typeof document !== 'undefined' && document.documentElement.getAttribute('data-theme')) || DEFAULT_THEME;

/**
 * Switches theme and remembers it. Where the browser supports View
 * Transitions, the new theme grows out of `origin` (the toggle button) as an
 * expanding circle; everywhere else, and for reduced-motion users, it is an
 * instant swap.
 */
export function setTheme(next, origin) {
  const root = document.documentElement;
  const apply = () => {
    root.setAttribute('data-theme', next);
    try {
      localStorage.setItem(THEME_KEY, next);
    } catch (e) {
      /* private mode — the switch still works for this page view */
    }
  };

  const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!document.startViewTransition || reduce) {
    apply();
    return;
  }

  const r = origin && origin.getBoundingClientRect();
  const x = r ? r.left + r.width / 2 : window.innerWidth / 2;
  const y = r ? r.top + r.height / 2 : 0;
  const end = Math.hypot(Math.max(x, window.innerWidth - x), Math.max(y, window.innerHeight - y));

  const vt = document.startViewTransition(apply);
  vt.ready
    .then(() => {
      root.animate(
        { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${end}px at ${x}px ${y}px)`] },
        { duration: 720, easing: 'cubic-bezier(0.65, 0, 0.35, 1)', pseudoElement: '::view-transition-new(root)' }
      );
    })
    .catch(() => {});
}
