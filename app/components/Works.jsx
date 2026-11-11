import Image from 'next/image';

import { MotionDiv, SectionWrapper, TiltCard } from '../hoc';
import ProjectLinks from './ProjectLinks';

import { styles } from '../styles';

import { projects } from '../constants/constants';
import { fadeIn, textVariant } from '../lib/motion';

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
    <MotionDiv variants={fadeIn('up', 'spring', index * 0.5, 0.75)}>
      <TiltCard className='bg-tertiary p-5 rounded-2xl min-w-[360px] sm:w-[360px] w-full'>
        <div className='relative w-full h-[230px]'>
          <Image
            src={image}
            alt={`Screenshot of ${name}`}
            fill
            sizes='(min-width: 640px) 320px, 100vw'
            className='object-cover rounded-2xl'
          />
          <ProjectLinks
            name={name}
            source_code_link={source_code_link}
            project_link={project_link}
          />
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
      </TiltCard>
    </MotionDiv>
  );
};

const Works = () => {
  return (
    <SectionWrapper id='work'>
      <MotionDiv variants={textVariant()}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </MotionDiv>

      <div className='w-full flex'>
        <MotionDiv
          as='p'
          variants={fadeIn('', '', 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          The following projects showcase my ability to bridge the gap between
          engineering and real-world software solutions. From robust backend
          architectures to dynamic frontends, these examples reflect my
          problem-solving mindset and my experience building scalable
          applications. Each project is briefly described and includes links to
          code repositories and live demos.
        </MotionDiv>
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
