import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';
import { Link as LinkS } from 'react-scroll';

export const SidebarContainer = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100%;
  height: 100%;
  padding: 10px;
  background: #0d0d0d;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
  top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`;

export const CloseIcon = styled(FaTimes)`
  color: #efefef;
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const SidebarWrapper = styled.div`
  color: #efefef;
  padding-top: 20px;
`;

export const SidebarMenu = styled.ul`
  padding-top: 40px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(5, 100px);
  text-align: center;
  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(5, 80px);
  }
`;

export const SidebarLink = styled(LinkS)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  color: #efefef;
  cursor: pointer;

  &:hover {
    color: #004191;
    transition: 0.2s ease-in-out;
  }
`;

export const SidebarLanguageBtn = styled.button`
  color: #efefef;
  font-size: 16px;
  font-family: 'Open Sans', sans-serif;
  background-color: transparent;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  color: #efefef;
  cursor: pointer;

  &:hover {
    color: #004191;
    transition: 0.2s ease-in-out;
  }

  & span {
    margin-left: 8px;
  }
`;

export const SideBtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const SidebarRoute = styled.a`
  border-radius: 50px;
  background-color: #004191;
  white-space: nowrap;
  padding: 16px 64px;
  color: #efefef;
  font-size: 16px;
  font-weight: 600;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background-color: #efefef;
    color: #004191;
  }
`;
