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
          <AboutImage src={fotoPerfil} />
          <AboutDescription>
            Hola, me llamo Antony J. Cabeza Rauseo, soy Desarrollador Frontend,
            tengo 20 años. Soy una persona autodidacta y con gran curiosidad por
            el Desarrollo de Software y la tecnología en general. Actualmente
            estoy cursando la Escuela de Desarrollo Web y la Escuela de
            JavaScript en Platzi. Cuento con amplios conocimientos de JavaScript
            en general, especializado en React y Node.js.
          </AboutDescription> 
          <ButtonScroll primary='true' btn_about='true' to='contacto'>
            Contáctame
          </ButtonScroll>
        </AboutDescriptionWrap>
      </AboutContainer>
    </>
  );
};

export default About;
