import styled from 'styled-components';
import { Link as LinkS } from 'react-scroll';

export const Nav = styled.nav`
  background: ${({ scrollNav }) => (scrollNav ? '#000' : 'transparent')};
  height: 80px;
  margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  transition: 0.8s all ease;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

export const NavLogo = styled.img`
  margin-top: calc(50% - 8px);
  height: 50px;
  width: auto;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #efefef;
  }
`;
export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;
export const NavLinks = styled(LinkS)`
  color: #efefef;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  &:hover {
    color: #fff;
    border-bottom: 3px solid #004191;
    transition: 0.2s ease-in-out;
  }
  &.active {
    border-bottom: 3px solid #004191;
    transition: 0.2s ease-in-out;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled.a`
  border-radius: 50px;
  background-color: #004191;
  white-space: nowrap;
  padding: 10px 22px;
  outline: none;
  border: none;
  text-decoration: none;
  color: #efefef;
  font-weight: 600;
  font-size: 16px;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background-color: #efefef;
    color: #004191;
  }
`;

export const LanguageButton = styled.button`
  color: #efefef;
  font-size: 16px;
  font-family: 'Open Sans', sans-serif;
  background-color: transparent;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  &:hover {
    color: #fff;
    border-bottom: 3px solid #004191;
    transition: 0.2s ease-in-out;
  }
  &.active {
    border-bottom: 3px solid #004191;
    transition: 0.2s ease-in-out;
  }

  & span {
    margin-left: 8px;
  }
`
