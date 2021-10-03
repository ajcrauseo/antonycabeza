import React from 'react';

import { ButtonScroll } from '../ButtonScrollElement';
import {
  AboutContainer,
  AboutH2,
  AboutDescriptionWrap,
  AboutImage,
  AboutDescription,
} from './AboutElements';

import fotoPerfil from '../../assets/images/foto-perfil-antony-cabeza.png';

const About = () => {
  return (
    <>
      <AboutContainer id='acerca'>
        <AboutH2>Acerca de mí</AboutH2>
        <AboutDescriptionWrap>
          <AboutImage src={fotoPerfil} alt='Antony Cabeza' />
          <AboutDescription>
            Hola, me llamo Antony J. Cabeza Rauseo, soy Desarrollador Web
            especializado en JavaScript, específicamente con el stack MERN
            (MongoDB, Express, React y NodeJS). Soy una persona autodidacta y
            con gran curiosidad por el desarrollo de software y la tecnología en
            general. Recientemente me certifiqué en la Escuela de JavaScript en
            Platzi.
          </AboutDescription>
          <ButtonScroll
            primary='true'
            btn_about='true'
            to='contacto'
            smooth={true}
            duration={500}
            spy={true}
            offset={-80}
          >
            Contáctame
          </ButtonScroll>
        </AboutDescriptionWrap>
      </AboutContainer>
    </>
  );
};

export default About;
