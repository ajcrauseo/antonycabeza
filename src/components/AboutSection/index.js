import React from 'react';

import { ButtonScroll } from '../ButtonScrollElement';
import {
  AboutContainer,
  AboutH2,
  AboutDescriptionWrap,
  AboutImage,
  AboutDescription,
  AboutLink,
} from './AboutElements';

import fotoPerfil from '../../assets/images/foto-perfil-antony-cabeza.png';

const About = ({ language }) => {
  return (
    <>
      <AboutContainer id='acerca'>
        <AboutH2>{language ? 'Acerca de mí' : 'About me'}</AboutH2>
        <AboutDescriptionWrap>
          <AboutImage src={fotoPerfil} alt='Antony Cabeza' />
          <AboutDescription>
            {language
              ? `Hola, me llamo Antony J. Cabeza Rauseo, soy Desarrollador Web
            especializado en JavaScript, específicamente con el stack MERN
            (MongoDB, Express, React y NodeJS). Soy una persona autodidacta y
            con gran curiosidad por el desarrollo de software y la tecnología en
            general. He conseguido certificarme en la`
              : `Hello, my name is Antony J. Cabeza Rauseo, I am a Web Developer specialized in JavaScript, specifically with the MERN stack (MongoDB, Express, React and NodeJS). I am a self-taught person with great curiosity about software development and technology in general. I have managed to get certified in the`}{' '}
            <AboutLink
              href='https://platzi.com/escuela-javascript/'
              target='_blank'
            >
              {language
                ? 'Escuela de JavaScript de Platzi'
                : 'Platzi JavaScript School'}
            </AboutLink>
            {language
              ? ` , así como diferentes cursos afines al desarrollo de software, tales
            como: Git, SCRUM, Bases de Datos, Webpack, entre otros.`
              : `, as well as different courses related to software development, such as: Git, SCRUM, Databases, Webpack, among others.`}
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
            {language ? 'Contáctame' : 'Contact me'}
          </ButtonScroll>
        </AboutDescriptionWrap>
      </AboutContainer>
    </>
  );
};

export default About;
