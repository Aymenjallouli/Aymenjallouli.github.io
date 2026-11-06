'use client';

import { Fragment } from 'react';
import { useLanguage } from '@/lib/LanguageContext';

/** `Selected *work*` → "Selected " + <em>work</em> — the accent-serif words. */
const emphasize = (text) =>
  text.split('*').map((part, i) =>
    i % 2 ? (
      <em key={i} className="pro-em">
        {part}
      </em>
    ) : (
      <Fragment key={i}>{part}</Fragment>
    )
  );

/**
 * Renders both themes' versions side by side; CSS shows the one matching
 * <html data-theme>. Both are in the server HTML, so a theme switch (or a
 * returning visitor's saved theme) never waits on React to swap the text.
 */
export const Dual = ({ spidey, pro }) =>
  spidey === pro ? (
    <>{spidey}</>
  ) : (
    <>
      <span className="th-s">{spidey}</span>
      <span className="th-p">{pro}</span>
    </>
  );

/** Theme-aware translation: the comic copy and its pro counterpart. */
export default function TT({ k }) {
  const { t, tp } = useLanguage();
  const comic = t(k);
  const pro = tp(k);
  if (comic === pro) return comic;
  return <Dual spidey={comic} pro={emphasize(pro)} />;
}
