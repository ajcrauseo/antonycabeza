'use client';

import { Link as ScrollLink } from 'react-scroll';

import React, { useState } from 'react';

import { styles } from '../styles';
import { navLinks } from '../constants/constants';
import { logo, menu, close } from '@/public/assets';
import Image from 'next/image';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <ScrollLink
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive('');
            setToggle(false);
            window.scrollTo(0, 0);
          }}
        >
          <Image src={logo} alt='logo' className='w-9 h-9 object-contain' />
          <p className='text-white text-[18px] font-bold cursor-pointer flex'>
            Antony Cabeza &nbsp;
            <span className='sm:block hidden'>|&nbsp; Frontend Developer</span>
          </p>
        </ScrollLink>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
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
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <Image
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain cursor-pointer'
            onClick={() => {
              setToggle(!toggle);
            }}
          />

          <div
            className={`${
              !toggle ? 'hidden' : 'flex'
            } p-6 bg-tertiary absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl `}
          >
            <ul className='list-none flex flex-col justify-end items-start gap-4'>
              {navLinks.map(({ id, title }) => (
                <li
                  key={id}
                  className={`${
                    active === title ? 'text-white' : 'text-secondary'
                  } font-medium cursor-pointer text-[16px]`}
                >
                  <ScrollLink
                    activeClass='active'
                    to={id}
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
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
