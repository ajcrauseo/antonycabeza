import styled from 'styled-components';
// Icons
import {
  FaGithub,
  FaGlobe,
  FaChevronLeft,
  FaChevronRight,
} from 'react-icons/fa';
import { BsDot } from 'react-icons/bs';

export const ProjectsContainer = styled.section`
  height: 90vh;
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
  padding: 0 10px;
  overflow-x: hidden;
  display: grid;
  place-items: center;
  grid-template-areas:
    'title title title'
    'left card right'
    '. dot .';
  background-color: #0d0d0d;
  color: #efefef;
`;

export const ProjectsH2 = styled.h2`
  text-align: center;
  font-size: 28px;
  grid-area: title;
  align-self: end;
  @media screen and (min-width: 768px) {
    font-size: 32px;
  }
`;

export const CardsWrapper = styled.div`
  display: flex;
  flex-direction: initial;
  width: 90%;
  height: auto;
  margin-bottom: 40px;
  grid-area: card;
`;

export const ProjectCard = styled.article`
  width: 100%;
  max-width: 750px;
  min-height: 65vh;
  /* height: 100%; */
  padding: 20px 15px;
  margin: 10px auto 0;

  display: none;
  grid-template-areas:
    'image'
    'title'
    'description'
    'btn-web'
    'btn-github';
  place-items: center;

  background: rgba(239, 239, 239, 0.05);
  border-radius: 10px;

  transition: 0.3s ease;

  &.project-${(props) => props.countcard} {
    display: grid;
  }

  @media screen and (min-width: 768px) {
    padding: 20px;
    height: 60vh;
    grid-template-areas:
      'image image'
      'title title'
      'description description'
      'btn-web btn-github';
  }

  @media screen and (min-width: 950px) {
    padding: 20px;
    height: 60vh;
    min-width: 720px;
    grid-template-areas:
      'image title title'
      'image description description'
      'image btn-web btn-github';
  }
`;

export const ProjectImage = styled.img`
  width: 170px;
  height: auto;
  grid-area: image;
  @media screen and (min-width: 400px) {
    width: 240px;
  }
  @media screen and (min-width: 950px) {
    width: 280px;
  }
`;

export const ProjectTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  margin: 5px 0;
  text-align: center;
  grid-area: title;

  @media screen and (min-width: 321px) {
    margin: 10px 0;
    font-size: 22px;
  }
  @media screen and (min-width: 768px) {
    font-size: 32px;
  }
`;

export const ProjectDescription = styled.p`
  font-size: 14px;
  padding: 0 20px 0 28px;
  margin: 5px 0;
  grid-area: description;
  justify-self: center;

  @media screen and (min-width: 321px) {
    font-size: 16px;
  }

  @media screen and (min-width: 400px) {
    font-size: 18px;
    margin: 10px 0;
  }
  @media screen and (min-width: 768px) {
    padding-left: 40px;
  }
`;

export const WebIcon = styled(FaGlobe)`
  margin-left: 8px;
  font-size: 20px;
`;

export const GitHubIcon = styled(FaGithub)`
  margin-left: 8px;
  font-size: 20px;
`;

export const ArrowLeft = styled.div`
  grid-area: left;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

export const ArrowRight = styled.div`
  grid-area: right;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  cursor: pointer;
  justify-self: center;
`;

export const ArrowLeftIcon = styled(FaChevronLeft)`
  font-size: 20px;
  height: 100%;
  @media screen and (min-width: 1024px) {
    font-size: 26px;
  }
  `;

export const ArrowRightIcon = styled(FaChevronRight)`
  font-size: 20px;
  height: 100%;
  @media screen and (min-width: 1024px) {
    font-size: 26px;
  }
`;

export const DotWrapper = styled.div`
  margin-top: -50px;
  align-self: start;
  grid-area: dot;
  @media screen and (min-width: 321px) {
    margin-top: -30px;
  }
`;

export const Dot = styled(BsDot)`
  font-size: 40px;
  height: 100%;
  transition: 0.3s ease-in-out;
  &:nth-child(${(props) => props.countcard}) {
    color: #004191;
  }
`;
