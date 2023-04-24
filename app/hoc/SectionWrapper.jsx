'use client';

import { motion } from 'framer-motion';
import { styles } from '../styles';
import { staggerContainer } from '../lib/motion';

const SectionWrapper = ({ children, id }) => {
  return (
    <motion.section
      variants={staggerContainer()}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      id={id}
    >
      {children}
    </motion.section>
  );
};

export default SectionWrapper;
