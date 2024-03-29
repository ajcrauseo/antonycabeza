'use client';

import Image from 'next/image';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants/constants';
import { fadeIn, textVariant } from '../lib/motion';

import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className='md:w-[250px] w-full'>
      <motion.div
        variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <Image
            width={64}
            height={64}
            src={icon}
            alt={title}
            className='object-contain'
          />
          <h3 className='text-white text-[20px] font-bold text-center'>
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <SectionWrapper>
      <span className='hash-span' id='about'>
        &nbsp;
      </span>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I{"'"}m a skilled software developer with experience in TypeScript and
        JavaScript, and expertise in frameworks like React with Next and
        Node.js. I{"'"}m a quick learner and collaborate closely with clients to
        create efficient, scalable, and user-friendly solutions that solve
        real-world problems. Let{"'"}s work together to bring your ideas to
        life!
      </motion.p>

      <div className='mt-20 flex flex-wrap justify-center gap-10 2xl:mb-20'>
        {services.map((service, index) => (
          <ServiceCard
            key={service.title}
            index={index}
            title={service.title}
            icon={service.icon}
          />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default About;
