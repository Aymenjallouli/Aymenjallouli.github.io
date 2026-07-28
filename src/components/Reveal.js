import React from 'react';
import { motion } from 'framer-motion';

/**
 * Scroll-reveal wrapper: fades and rises content into view once.
 * Uses transform/opacity only (no layout shift) and inherits
 * framer-motion's automatic prefers-reduced-motion handling.
 */
const Reveal = ({ children, delay = 0, y = 28, x = 0, once = true, className = '', ...rest }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y, x }}
    whileInView={{ opacity: 1, y: 0, x: 0 }}
    viewport={{ once, amount: 0.2, margin: '0px 0px -60px 0px' }}
    transition={{ duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] }}
    {...rest}
  >
    {children}
  </motion.div>
);

export default Reveal;
