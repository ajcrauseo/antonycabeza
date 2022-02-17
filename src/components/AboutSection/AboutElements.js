import styled from 'styled-components';

export const AboutContainer = styled.section`
  width: 100%;
  max-width: 950px;
  height: 88vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 768px) {
    justify-content: center;
  }
`;

export const AboutH2 = styled.h2`
  padding: 10px 0 20px;
  margin: 0 auto;
  text-align: center;
  font-size: 28px;
  grid-area: title;
  align-self: end;
  @media screen and (min-width: 768px) {
    font-size: 32px;
    /* margin-top: 40px; */
  }
`;

export const AboutDescriptionWrap = styled.article`
  height: auto;
  width: 100%;
  display: grid;
  place-items: center;
  grid-template-areas:
    'image'
    'description'
    'btn';
  @media screen and (min-width: 768px) {
    grid-template-areas:
      'image description description'
      'image description description'
      'image . btn';
  }
`;

export const AboutImage = styled.img`
  width: 50%;
  max-width: 300px;
  border-radius: 100%;
  grid-area: image;
  @media screen and (min-width: 768px) {
    margin-top: 50px;
    width: 90%;
  }
`;

export const AboutDescription = styled.p`
  padding: 15px 10px;
  font-size: 14px;
  grid-area: description;

  @media screen and (min-width: 321px) {
    font-size: 16px;
  }

  @media screen and (min-width: 400px) {
    font-size: 20px;
    padding: 20px 15px;
  }
  @media screen and (min-width: 768px) {
    margin-top: 50px;
    padding-left: 30px;
  }
`;

export const AboutLink = styled.a`
  color: #0A5DC4;
`;
