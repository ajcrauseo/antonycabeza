// Dependecies
import React from 'react';
// Components
import FormContact from '../FormContact';
import {
  ContactContainer,
  ContactH2,
  ContactSocialMedia,
  SocialMediaLink,
  ContactLinkedinIcon,
  ContactGithubIcon,
  ContactTwitterIcon,
  ContactInstagramIcon,
  ContactFormWrap,
} from './ContactElements';
const Contact = () => {
  return (
    <>
      <ContactContainer id='contacto'>
        <ContactH2>Contacto</ContactH2>
        <ContactSocialMedia>

          <SocialMediaLink href='https://www.linkedin.com/in/antony-cabeza' target='blank'>
            <ContactLinkedinIcon />
          </SocialMediaLink>

          <SocialMediaLink href='https://github.com/ajcrauseo/' target='blank'>
            <ContactGithubIcon />
          </SocialMediaLink>

          <SocialMediaLink href='https://twitter.com/ajcrauseo' target='blank'>
            <ContactTwitterIcon />
          </SocialMediaLink>

          <SocialMediaLink href='https://www.instagram.com/ajcrauseo/' target='blank'>
            <ContactInstagramIcon />
          </SocialMediaLink>

        </ContactSocialMedia>
        <ContactFormWrap>
          <FormContact />
        </ContactFormWrap>
      </ContactContainer>
    </>
  );
};

export default Contact;
