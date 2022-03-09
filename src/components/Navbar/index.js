// Dependencies
import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { Link as LinkS } from 'react-scroll';
// Components
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
  LanguageButton,
} from './NavbarElements';
// Assets
import Logo from '../../assets/images/antony-cabeza-logo-bnw.png';

const Navbar = ({ toggle, language, changeLanguage }) => {
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
          <LinkS to='home' smooth={true} duration={500} spy={true}>
            <NavLogo src={Logo} alt='Logo Antony Cabeza' />
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
                offset={-80}
              >
                {language ? 'Acerca de mí' : 'About me'}
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to='proyectos'
                smooth={true}
                duration={500}
                spy={true}
                offset={-80}
              >
                {language ? 'Proyectos' : 'Projects'}
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to='contacto'
                smooth={true}
                duration={500}
                spy={true}
                offset={-80}
              >
                {language ? 'Contacto' : 'Contact'}
              </NavLinks>
            </NavItem>
            <NavItem>
              <LanguageButton type='button' onClick={changeLanguage}>
                {language ? 'Cambiar idioma' : 'Change language'}
                <span>{language ? '🇬🇧' : '🇪🇸'}</span>
              </LanguageButton>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink
              href={
                language
                  ? 'https://drive.google.com/file/d/1aPLHsP105nZLRoPrt6VB3y_cWi7iCaIh/view?usp=sharing'
                  : 'https://drive.google.com/file/d/15iELytdO1ans6Bi8P8X1X9qepurwBCJE/view?usp=sharing '
              }
              target='blank'
            >
              {language ? 'Descargar CV' : 'Download CV'}
            </NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
