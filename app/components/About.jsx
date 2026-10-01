import Image from 'next/image';

import { styles } from '../styles';
import { services } from '../constants/constants';
import { fadeIn, textVariant } from '../lib/motion';

import { MotionDiv, SectionWrapper, TiltCard } from '../hoc';

const TILT_OPTIONS = {
  max: 45,
  scale: 1,
  speed: 450,
};

const ServiceCard = ({ index, title, icon }) => {
  return (
    <TiltCard options={TILT_OPTIONS} className='md:w-[250px] w-full'>
      <MotionDiv
        variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
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
      </MotionDiv>
    </TiltCard>
  );
};

const About = () => {
  return (
    <SectionWrapper id='about'>
      <MotionDiv variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </MotionDiv>
      <MotionDiv
        as='p'
        variants={fadeIn('', '', 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I am a technology enthusiast and a Computer Science student at UBA.
        My technical background allows me to approach software development with a
        logical and problem-solving mindset. I specialize in Full Stack development (Next.js, Node.js, Python),
        and I am currently deepening my knowledge in software architecture, artificial intelligence, data analysis,
        and process automation. Let&apos;s work together to bring your ideas to life!
      </MotionDiv>

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
