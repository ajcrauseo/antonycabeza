'use client';

import { motion } from 'framer-motion';

const MOTION_TAGS = {
  div: motion.div,
  p: motion.p,
  span: motion.span,
  section: motion.section,
};

// Envoltura mínima para que los Server Components puedan usar animaciones
// sin tener que convertirse en Client Components completos.
const MotionDiv = ({ as = 'div', children, ...props }) => {
  const Component = MOTION_TAGS[as] || motion.div;

  return <Component {...props}>{children}</Component>;
};

export default MotionDiv;
