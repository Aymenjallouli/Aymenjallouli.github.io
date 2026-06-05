import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

/**
 * Mouse-reactive 3D tilt wrapper.
 * Applies perspective rotateX/rotateY toward the cursor and exposes a
 * radial "glare" highlight that follows the pointer for an immersive feel.
 *
 * Props:
 *  - className: extra classes for the inner card
 *  - max: max tilt in degrees (default 12)
 *  - glare: show the moving highlight (default true)
 *  - ...rest: passed to the inner motion.div (e.g. variants, whileHover)
 */
const TiltCard = ({ children, className = '', max = 12, glare = true, ...rest }) => {
  const ref = useRef(null);

  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const springCfg = { stiffness: 220, damping: 22, mass: 0.6 };
  const rotateX = useSpring(useTransform(y, [0, 1], [max, -max]), springCfg);
  const rotateY = useSpring(useTransform(x, [0, 1], [-max, max]), springCfg);

  const glareX = useTransform(x, [0, 1], ['0%', '100%']);
  const glareY = useTransform(y, [0, 1], ['0%', '100%']);
  const glareBackground = useTransform(
    [glareX, glareY],
    ([gx, gy]) =>
      `radial-gradient(220px circle at ${gx} ${gy}, rgba(255,255,255,0.16), transparent 65%)`
  );

  const handleMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width);
    y.set((e.clientY - rect.top) / rect.height);
  };

  const handleLeave = () => {
    x.set(0.5);
    y.set(0.5);
  };

  return (
    <motion.div
      ref={ref}
      className={`tilt-card ${className}`}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      {...rest}
    >
      {glare && (
        <motion.span
          className="tilt-glare"
          aria-hidden="true"
          style={{ background: glareBackground }}
        />
      )}
      {children}
    </motion.div>
  );
};

export default TiltCard;
