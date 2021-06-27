import styled from 'styled-components';
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa';

export const ContactContainer = styled.section`
  width: 100%;
  max-width: 950px;
  height: 88vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 768px) {
    /* justify-content: center; */
  }
`;

export const ContactH2 = styled.h2`
  padding: 20px 0;
  margin: 0 auto;
  text-align: center;
  font-size: 28px;
  grid-area: title;
  align-self: end;
  @media screen and (min-width: 768px) {
    font-size: 32px;
  }
`;

export const ContactSocialMedia = styled.div`
  width: 90%;
  max-width: 750px;
  margin: 0 auto 20px;
  padding: 10px 50px;
  border-radius: 50px;
  display: flex;
  justify-content: space-around;
  background-image: linear-gradient(
    to right,
    #004191,
    #003779,
    #002c62,
    #00224c,
    #001836
  );
`;

export const SocialMediaLink = styled.a`
  text-decoration: none;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

export const ContactLinkedinIcon = styled(FaLinkedin)`
  font-size: 30px;
  color: #efefef;
`;

export const ContactGithubIcon = styled(FaGithub)`
  font-size: 30px;
  color: #efefef;
`;

export const ContactTwitterIcon = styled(FaTwitter)`
  font-size: 30px;
  color: #efefef;
`;

export const ContactInstagramIcon = styled(FaInstagram)`
  font-size: 30px;
  color: #efefef;
`;

export const ContactFormWrap = styled.div`
  display: flex;
  width: 100%;
`;
