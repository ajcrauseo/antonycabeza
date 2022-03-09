// Dependencies
import React from 'react';
// Components
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
  SidebarLanguageBtn,
} from './SidebarElements';

const Sidebar = ({ isOpen, toggle, language, changeLanguage }) => {
  return (
    <>
      <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
          <CloseIcon />
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
            <SidebarLink
              to='acerca'
              onClick={toggle}
              smooth={true}
              duration={500}
              spy={true}
              offset={-80}
            >
              {language ? 'Acerca de mí' : 'About me'}
            </SidebarLink>
            <SidebarLink
              to='proyectos'
              onClick={toggle}
              smooth={true}
              duration={500}
              spy={true}
              offset={-80}
            >
              {language ? 'Proyectos' : 'Projects'}
            </SidebarLink>
            <SidebarLink
              to='contacto'
              onClick={toggle}
              smooth={true}
              duration={500}
              spy={true}
              offset={-80}
            >
              {language ? 'Contacto' : 'Contact'}
            </SidebarLink>
            <SidebarLanguageBtn type='button' onClick={changeLanguage}>
              {language ? 'Cambiar idioma' : 'Change language'}
              <span>{language ? '🇬🇧' : '🇪🇸'}</span>
            </SidebarLanguageBtn>
          </SidebarMenu>
        </SidebarWrapper>
        <SideBtnWrap>
          <SidebarRoute
            href='https://drive.google.com/file/d/1aPLHsP105nZLRoPrt6VB3y_cWi7iCaIh/view?usp=sharing'
            target='blank'
            onClick={toggle}
          >
            {language ? 'Descargar CV' : 'Download CV'}
          </SidebarRoute>
        </SideBtnWrap>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
