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
} from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
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
              exact={true}
              offset={-80}
            >
              Acerca de mí
            </SidebarLink>
            <SidebarLink
              to='proyectos'
              onClick={toggle}
              smooth={true}
              duration={500}
              spy={true}
              exact={true}
              offset={-80}
            >
              Proyectos
            </SidebarLink>
            <SidebarLink
              to='contacto'
              onClick={toggle}
              smooth={true}
              duration={500}
              spy={true}
              exact={true}
              offset={-80}
            >
              Contacto
            </SidebarLink>
          </SidebarMenu>
        </SidebarWrapper>
        <SideBtnWrap>
          <SidebarRoute to='/' onClick={toggle}>
            Descargar CV
          </SidebarRoute>
        </SideBtnWrap>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
