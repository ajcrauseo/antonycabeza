import React from 'react';

import {FooterContainer, FooterLogo, FooterTitle} from './FooterElements';

import logoImage from '../../assets/images/antony-cabeza-logo-bnw.png';

const Footer = () => {
  return ( 
    <>
    <FooterContainer>
      <FooterLogo src={logoImage} alt='Logo Antony Cabeza'/>
      <FooterTitle>© 2021 Antony Cabeza</FooterTitle>
    </FooterContainer>
    </>
   );
}
 
export default Footer;