'use client';

import { Link as ScrollLink } from 'react-scroll';
import { motion } from 'framer-motion';

const ScrollCTA = () => {
  return (
    <div className='hidden absolute bottom-6 w-full md:flex justify-center items-center'>
      <ScrollLink
        activeClass='active'
        to='about'
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
      >
        <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
          <motion.div
            animate={{ y: [0, 24, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: 'loop',
            }}
            className='w-3 h-3 rounded-full bg-secondary mb-1'
          />
        </div>
      </ScrollLink>
    </div>
  );
};

export default ScrollCTA;
