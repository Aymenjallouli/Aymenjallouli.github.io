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

const stroke = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: '1.8',
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': 'true',
  focusable: 'false',
};

export const WhatsAppIcon = ({ size = 20 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden="true" focusable="false">
    <path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.3-.8.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.4-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6l.4-.5c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.7-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.3zM12 21.8c-1.8 0-3.5-.5-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4A9.8 9.8 0 1 1 12 21.8zm8.4-18.2A11.8 11.8 0 0 0 1.7 17.9L0 24l6.3-1.7a11.8 11.8 0 0 0 5.7 1.4c6.5 0 11.8-5.3 11.8-11.8 0-3.2-1.2-6.1-3.4-8.3z" />
  </svg>
);

export const BriefcaseIcon = ({ size = 16 }) => (
  <svg {...stroke} width={size} height={size} strokeWidth="2">
    <rect x="3" y="7" width="18" height="13" rx="2" />
    <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 13h18" />
  </svg>
);

export const ClockIcon = ({ size = 15 }) => (
  <svg {...stroke} width={size} height={size} strokeWidth="2">
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
);

export const CheckIcon = ({ size = 14 }) => (
  <svg {...stroke} width={size} height={size} strokeWidth="2.6">
    <path d="M5 12.5l4.2 4.2L19 7" />
  </svg>
);

/** One glyph per entry in lib/pricing.js SERVICES. */
const SERVICE_PATHS = {
  vitrine: (
    <>
      <rect x="3" y="4" width="18" height="14" rx="2" />
      <path d="M3 8h18M7 21h10M12 18v3" />
    </>
  ),
  ecommerce: (
    <>
      <path d="M5 8h14l-1.2 11a2 2 0 0 1-2 1.8H8.2a2 2 0 0 1-2-1.8L5 8z" />
      <path d="M9 11V7a3 3 0 0 1 6 0v4" />
    </>
  ),
  webapp: (
    <>
      <rect x="3" y="3" width="7" height="9" rx="1.5" />
      <rect x="14" y="3" width="7" height="5" rx="1.5" />
      <rect x="14" y="12" width="7" height="9" rx="1.5" />
      <rect x="3" y="16" width="7" height="5" rx="1.5" />
    </>
  ),
  mobile: (
    <>
      <rect x="6" y="2.5" width="12" height="19" rx="2.5" />
      <path d="M10.5 18.5h3" />
    </>
  ),
  video: (
    <>
      <rect x="2.5" y="6" width="13" height="12" rx="2" />
      <path d="M15.5 10.5l6-3.5v10l-6-3.5" />
    </>
  ),
  care: (
    <>
      <path d="M12 3l8 3v5.5c0 4.6-3.3 8.6-8 9.5-4.7-.9-8-4.9-8-9.5V6l8-3z" />
      <path d="M8.5 12l2.5 2.5 4.5-5" />
    </>
  ),
};

export const ServiceIcon = ({ id, size = 24 }) => (
  <svg {...stroke} width={size} height={size}>
    {SERVICE_PATHS[id]}
  </svg>
);
