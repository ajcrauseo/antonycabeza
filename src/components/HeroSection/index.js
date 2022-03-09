// Dependencies
import React, { useState } from 'react';
// Components
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from './HeroElements';
import { ButtonScroll } from '../ButtonScrollElement';
// Assets
import Video from '../../assets/videos/background-hero-editado3.mp4';

const Hero = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer id='home'>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
      </HeroBg>
      <HeroContent>
        <HeroH1>Antony J. Cabeza Rauseo</HeroH1>
        <HeroP>Desarrollador JavaScript con React.js y Node.js</HeroP>
        <HeroBtnWrapper>
          <ButtonScroll
            to='acerca'
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary='true'
            smooth={true}
            duration={500}
            spy={true}
            offset={-80}
          >
            Conocer más {hover ? <ArrowForward /> : <ArrowRight />}
          </ButtonScroll>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
