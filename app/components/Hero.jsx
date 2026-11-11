import Image from 'next/image';

import ScrollCTA from './ScrollCTA';
import SocialLinks from './SocialLinks';

import { styles } from '../styles';
import { MotionDiv } from '../hoc';

import antonyCabezaPhoto from '@public/assets/foto-perfil-2026.png';
import { TechStack } from '.';

const Hero = () => {
  return (
    <section
      id='home'
      className='relative w-full min-h-screen mx-auto flex flex-col overflow-x-hidden lg:h-screen lg:justify-center'
    >
      {/* Desplazamiento corto: el contenido queda dentro del viewport desde el
          HTML del servidor, así no se retrasa el LCP esperando la hidratación. */}
      <MotionDiv
        initial={{ y: -40 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`${styles.paddingX} pt-[120px] w-full flex flex-col items-center gap-6 lg:flex-row-reverse lg:justify-evenly lg:pt-0`}
      >
        <Image
          src={antonyCabezaPhoto}
          alt='Antony Cabeza'
          priority
          sizes='(min-width: 1280px) 420px, (min-width: 1024px) 380px, (min-width: 768px) 300px, 240px'
          className='w-[240px] h-[240px] md:w-[300px] md:h-[300px] lg:w-[380px] lg:h-[380px] xl:w-[420px] xl:h-[420px]'
        />
        {/* Presentacion */}
        <div className='flex gap-6 items-start'>
          {/* Diseño linea morada */}
          <div className='flex flex-col justify-center items-center'>
            <div className='w-5 h-5 rounded-full bg-accent'></div>
            <div className='w-1 h-40 blue-gradient'></div>
          </div>
          {/* Hero Copy */}
          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>
              Electronics Technician | CS Student at UBA
              <br />
              <span className='text-accent'>Full Stack Developer</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              Hi, I&apos;m <span className='text-accent'>Antony Cabeza</span>{' '}
              <br className='sm:block hidden' />
              Passionate about engineering, artificial intelligence, and automation
            </p>
            {/* Links a RRSS */}
            <SocialLinks
              className='flex gap-5 mt-8'
              iconClassName='w-8 h-8 md:w-10 md:h-10'
            />
          </div>
        </div>
      </MotionDiv>
      <TechStack />
      <ScrollCTA />
    </section>
  );
};

export default Hero;
