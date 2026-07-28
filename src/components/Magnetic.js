import React, { useRef } from 'react';
import { motion, useSpring } from 'framer-motion';

/**
 * Magnetic hover wrapper: the child gently drifts toward the cursor
 * and springs back on leave. Desktop-only feel; harmless on touch
 * (no mousemove events fire).
 */
const Magnetic = ({ children, strength = 0.25, className = '' }) => {
  const ref = useRef(null);
  const x = useSpring(0, { stiffness: 180, damping: 14, mass: 0.4 });
  const y = useSpring(0, { stiffness: 180, damping: 14, mass: 0.4 });

  const onMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - (rect.left + rect.width / 2)) * strength);
    y.set((e.clientY - (rect.top + rect.height / 2)) * strength);
  };

  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className={`magnetic ${className}`}
      style={{ x, y, display: 'inline-block' }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {children}
    </motion.div>
  );
};

export default Magnetic;
