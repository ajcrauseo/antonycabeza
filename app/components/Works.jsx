'use client';

import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc';

import { styles } from '../styles';
import { github, web2 } from '@/public/assets';

import { projects } from '../constants/constants';
import { fadeIn, textVariant } from '../lib/motion';
import Image from 'next/image';

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  project_link,
}) => {
  return (
    <motion.div variants={fadeIn('up', 'spring', index * 0.5, 0.75)}>
      <Tilt className='bg-tertiary p-5 rounded-2xl min-w-[360px] sm:w-[360px] w-full'>
        <div className='relative w-full h-[230px]'>
          <Image
            src={image.src}
            alt={name}
            width={300}
            height={300}
            className='w-full h-full object-cover rounded-2xl'
          />
          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, '_blank')}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <Image
                src={github}
                alt='Github icon'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
            <div
              onClick={() => window.open(project_link, '_blank')}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer ml-2'
            >
              <Image
                src={web2}
                alt='Web icon'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>
        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>
        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map(({ name, color }) => (
            <p key={name} className={`text-[14px] ${color}`}>
              #{name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <SectionWrapper>
      <span className='hash-span'>&nbsp;</span>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap justify-center gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Works;
