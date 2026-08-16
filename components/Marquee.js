import React from 'react';

/** Tilted scrolling band of comic onomatopoeia + stack keywords. */
const Marquee = ({ text, variant = 'red' }) => (
  <div className={`band band--${variant}`} aria-hidden="true">
    <div className="band__track">
      <span>{text}&nbsp;</span>
      <span>{text}&nbsp;</span>
    </div>
  </div>
);

export default Marquee;
