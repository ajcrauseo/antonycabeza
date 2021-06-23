// Dependencies
import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { Link as LinkS } from 'react-scroll';
// Components
import {
  Nav,
  NavbarContainer,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';
// Assets
import '../../assets/styles/components/Navbar.scss';
import Logo from '../../assets/images/antony-cabeza-logo-bnw.png';

const Navbar = ({ toggle }) => {
  // let transparency = window.scrollY;

  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, []);

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <LinkS
            to='home'
            smooth={true}
            duration={500}
            spy={true}
            exact={true}
            className='NavLogo'
          >
            <img src={Logo} alt='Logo Antony Cabeza' className='NavLogo--img' />
          </LinkS>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks
                to='acerca'
                smooth={true}
                duration={500}
                spy={true}
                exact={true}
                offset={-80}
              >
                Acerca de mí
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to='proyectos'
                smooth={true}
                duration={500}
                spy={true}
                exact={true}
                offset={-80}
              >
                Proyectos
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to='contacto'
                smooth={true}
                duration={500}
                spy={true}
                exact={true}
                offset={-80}
              >
                Contacto
              </NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to='/'>Descargar CV</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
