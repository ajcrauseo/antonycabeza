'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { AnimatePresence, motion } from 'framer-motion';

import { styles } from '../styles';
import { navLinks } from '../constants/constants';
import { logo, menu, close } from '@/public/assets';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    if (!toggle) return;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setToggle(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [toggle]);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        {/* Logo Antony Cabeza */}
        <ScrollLink
          to='home'
          href='#home'
          className='flex items-center gap-2'
          onClick={() => {
            setActive('');
            setToggle(false);
            window.scrollTo(0, 0);
          }}
        >
          <Image src={logo} alt='Antony Cabeza logo' className='w-9 h-9 object-contain' />
          <p className='text-white text-[18px] font-bold cursor-pointer flex'>
            Antony Cabeza &nbsp;
            {/* <span className='lg:block hidden'>|&nbsp; Frontend Developer</span> */}
          </p>
        </ScrollLink>
        {/* Links en Desktop */}
        <ul className='list-none hidden md:flex flex-row gap-10'>
          {navLinks.map(({ id, title }) => (
            <li
              key={id}
              className={`${
                active === title ? 'text-white' : 'text-secondary'
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => {
                setActive(title);
              }}
            >
              <ScrollLink
                activeClass='active'
                to={id}
                href={`#${id}`}
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                {title}
              </ScrollLink>
            </li>
          ))}
        </ul>
        {/* Mobile Navigation Bar */}
        <div className='md:hidden flex flex-1 justify-end items-center'>
          {/* Iconos menu y close */}

          <button
            type='button'
            onClick={() => {
              setToggle(!toggle);
            }}
            aria-label='Open navigation menu'
            aria-expanded={toggle}
            aria-controls='mobile-navigation'
            className='cursor-pointer'
          >
            <Image src={menu} alt='' className='w-[28px] h-[28px] object-contain' />
          </button>

          <AnimatePresence>
            {toggle && (
              <motion.nav
                id='mobile-navigation'
                aria-label='Mobile navigation'
                className={`flex flex-col p-6 bg-tertiary absolute top-0 right-0 w-screen h-screen z-10`}
                initial={{ x: '-100%' }}
                animate={{ x: '0' }}
                exit={{ x: '-100%' }}
                transition={{
                  type: 'tween',
                }}
              >
                <button
                  type='button'
                  onClick={() => {
                    setToggle(!toggle);
                  }}
                  aria-label='Close navigation menu'
                  className='self-end cursor-pointer'
                >
                  <Image src={close} alt='' className='w-[28px] h-[28px] object-contain' />
                </button>
                {/* Links en Mobile */}
                <ul className='w-full h-full list-none py-6 flex flex-col justify-center items-center gap-20'>
                  {navLinks.map(({ id, title }) => (
                    <li
                      key={id}
                      className={`text-secondary active:text-white font-medium cursor-pointer text-2xl`}
                    >
                      <ScrollLink
                        activeClass='active'
                        to={id}
                        href={`#${id}`}
                        spy={true}
                        smooth={true}
                        offset={50}
                        duration={500}
                        onClick={() => {
                          setToggle(!toggle);
                          setActive(title);
                        }}
                      >
                        {title}
                      </ScrollLink>
                    </li>
                  ))}
                </ul>
              </motion.nav>
            )}
          </AnimatePresence>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
