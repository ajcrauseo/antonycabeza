import Image from 'next/image';
import Link from 'next/link';

import { BsLinkedin, BsGithub } from 'react-icons/bs';

import ScrollCTA from './ScrollCTA';

import { styles } from '../styles';
import { footerLinks } from '../constants/constants';

import antonyCabezaPhoto from '@public/assets/foto-me.png';
import { TechStack } from '.';

const Hero = () => {
  return (
    <section id='home' className='relative w-full h-screen mx-auto flex flex-col overflow-hidden lg:justify-center'>
      <div
        className={`${styles.paddingX} pt-[120px] w-full flex flex-col items-center gap-6 lg:flex-row-reverse lg:justify-evenly lg:pt-0`}
      >
        <Image
          src={antonyCabezaPhoto}
          alt='Antony Cabeza'
          className='w-[240px] h-[240px] md:w-[300px] md:h-[300px] lg:w-[380px] lg:h-[380px] xl:w-[420px]  xl:h-[420px]'
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
              Frontend Developer
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              Hi I&apos;m <span className='text-accent'>Antony Cabeza</span>{' '}
              <br className='sm:block hidden' />
              Frontend Developer with React
            </p>
            {/* Links a RRSS */}
            <div className='flex gap-5 mt-8'>
              <Link
                href={footerLinks[0].url}
                target='_blank'
                className='transition duration-150 ease-out hover:ease-in hover:text-accent'
              >
                <BsLinkedin className='w-8 h-8 md:w-10 md:h-10' />
              </Link>
              <Link
                href={footerLinks[1].url}
                target='_blank'
                className='transition duration-150 ease-out hover:ease-in hover:text-accent'
              >
                <BsGithub className='w-8 h-8 md:w-10 md:h-10' />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <TechStack />
      <ScrollCTA />
    </section>
  );
};

export default Hero;
