import React from 'react';
import '../styles/AnimatedBackground.css';

/**
 * Fixed, full-viewport immersive backdrop:
 *  - animated aurora gradient mesh
 *  - slow floating glow orbs
 *  - subtle grid + noise overlay
 * Sits behind all content (pointer-events: none).
 */
const AnimatedBackground = () => {
  return (
    <div className="aurora-bg" aria-hidden="true">
      <div className="aurora-mesh" />
      <span className="aurora-orb orb-1" />
      <span className="aurora-orb orb-2" />
      <span className="aurora-orb orb-3" />
      <div className="aurora-grid" />
      <div className="aurora-noise" />
    </div>
  );
};

export default AnimatedBackground;
