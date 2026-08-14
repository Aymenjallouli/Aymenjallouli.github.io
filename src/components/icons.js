import React from 'react';

/** The little spider glyph used in the logo mark, threads and footer. */
export const SpiderMark = ({ size = 24 }) => (
  <svg
    viewBox="0 0 64 64"
    width={size}
    height={size}
    fill="currentColor"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    aria-hidden="true"
    focusable="false"
  >
    <ellipse cx="32" cy="30" rx="5" ry="9" stroke="none" />
    <circle cx="32" cy="18.5" r="3.5" stroke="none" />
    <path d="M28 24 L14 14 L10 4" fill="none" />
    <path d="M27 29 L10 26 L4 18" fill="none" />
    <path d="M27 33 L12 38 L6 50" fill="none" />
    <path d="M29 37 L20 50 L22 60" fill="none" />
    <path d="M36 24 L50 14 L54 4" fill="none" />
    <path d="M37 29 L54 26 L60 18" fill="none" />
    <path d="M37 33 L52 38 L58 50" fill="none" />
    <path d="M35 37 L44 50 L42 60" fill="none" />
  </svg>
);

const WEB_ARC = 'M60 0 Q50.8 10.1 55.4 23 Q43 28.8 42.4 42.4 Q28.8 43 23 55.4 Q10.1 50.8 0 60';

/** Radiating corner web — anchored at the SVG's top-left origin. */
export const WebCorner = ({ className = '' }) => (
  <svg viewBox="0 0 260 260" className={className} stroke="#9FB6FF" strokeWidth="1.5" fill="none" aria-hidden="true" focusable="false">
    <path d="M0 0 L250 0 M0 0 L231 96 M0 0 L177 177 M0 0 L96 231 M0 0 L0 250" />
    {[1, 1.75, 2.5, 3.25, 4].map((s) => (
      <g key={s} transform={s === 1 ? undefined : `scale(${s})`}>
        <path d={WEB_ARC} vectorEffect="non-scaling-stroke" />
      </g>
    ))}
  </svg>
);

export const MailIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" focusable="false">
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M3 7l9 6 9-6" />
  </svg>
);

export const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" focusable="false">
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.4 2.1L8 9.7a16 16 0 0 0 6.3 6.3l1.3-1.3a2 2 0 0 1 2.1-.4c.8.3 1.7.5 2.6.6a2 2 0 0 1 1.7 2z" />
  </svg>
);

export const PinIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" focusable="false">
    <path d="M12 21s-7-6.1-7-11a7 7 0 0 1 14 0c0 4.9-7 11-7 11z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
);
