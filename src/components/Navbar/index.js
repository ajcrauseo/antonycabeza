// Dependencies
import React from 'react';
import { FaBars } from 'react-icons/fa';
import { Link as LinkR } from 'react-router-dom';
// Components
import {
  Nav,
  NavbarContainer,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink
} from './NavbarElements';
// Assets
import '../../assets/styles/components/Navbar.scss';
import Logo from '../../assets/images/antony-cabeza-logo-bnw.png';

const Navbar = ({toggle}) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <LinkR to='/' className='NavLogo'>
            <img src={Logo} alt='Logo Antony Cabeza' className='NavLogo--img' />
          </LinkR>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to='acerca'>Acerca de mí</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='proyectos'>Proyectos</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='contacto'>Contacto</NavLinks>
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
