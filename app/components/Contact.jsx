'use client';

import { motion } from 'framer-motion';

import { SectionWrapper } from '../hoc';
import { EarthCanvas } from './canvas';

import { slideIn } from '../lib/motion';
import { ContactForm } from '.';

const Contact = ({
  EMAIL_JS_SERVICE_ID,
  EMAIL_JS_TEMPLATE_ID,
  EMAIL_JS_PUBLIC_KEY,
}) => {
  return (
    <SectionWrapper>
      <span className='hash-span' id='contact'>
        &nbsp;
      </span>
      <div className='xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden'>
        <ContactForm
          EMAIL_JS_SERVICE_ID={EMAIL_JS_SERVICE_ID}
          EMAIL_JS_TEMPLATE_ID={EMAIL_JS_TEMPLATE_ID}
          EMAIL_JS_PUBLIC_KEY={EMAIL_JS_PUBLIC_KEY}
        />

        <motion.div
          variants={slideIn('right', 'tween', 0.2, 1)}
          className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
        >
          <EarthCanvas />
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default Contact;
