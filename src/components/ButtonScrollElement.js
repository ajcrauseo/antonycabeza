import styled from 'styled-components';
import { Link } from 'react-scroll';

export const ButtonScroll = styled(Link)`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? '#004191' : '#0d0d0d')};
  white-space: nowrap;

  padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
  color: ${({ darkFont }) => (darkFont ? '#0d0d0d' : '#efefef')};
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  font-weight: 600;

  // About Section
  grid-area: ${({ btn_about }) => (btn_about ? 'btn' : 'initial')};
  @media screen and (min-width: 768px) {
    margin-right: ${({ btn_about }) => (btn_about ? '25px' : 0)};
  }

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? '#efefef' : '#004191')};
    color: ${({ primary }) => (primary ? '#0d0d0d' : '#efefef')};
  }
`;
