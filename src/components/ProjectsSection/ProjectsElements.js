import styled from 'styled-components';
// Icons
import {
  FaGithub,
  FaGlobe,
  FaChevronLeft,
  FaChevronRight,
} from 'react-icons/fa';
import { BsDot } from 'react-icons/bs';

// let countCard = 2;

export const ProjectsContainer = styled.section`
  height: auto;
  width: 100%;
  padding: 0 10px 30px;
  overflow-x: hidden;
  display: grid;
  place-items: center;
  grid-template-areas:
    'title title title'
    'left card right'
    '. dot .';
  background-color: #0d0d0d;
  color: #efefef;
  @media screen and (min-width: 1024px) {
    height: 95vh;
  }
`;

export const ProjectsH1 = styled.h1`
  margin: 60px 0;
  text-align: center;
  font-size: 32px;
  grid-area: title;
  @media screen and (min-width: 768px) {
    margin: 40px 0;
  }
`;

export const CardsWrapper = styled.div`
  display: flex;
  flex-direction: initial;
  width: 75vw;
  height: auto;
  margin-bottom: 40px;
  overflow-x: scroll;
  grid-area: card;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ProjectCard = styled.article`
  width: 100%;
  max-width: 750px;
  height: 75vh;
  padding: 20px 15px;
  margin: 0 auto;

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

  &.project-${(props) => props.countCard} {
    display: grid;
  }

  @media screen and (min-width: 950px) {
    padding: 20px;
    height: 60vh;
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
  font-size: 18px;
  font-weight: 600;
  margin: 5px 0;
  text-align: center;
  grid-area: title;

  @media screen and (min-width: 400px) {
    margin: 10px 0;
    font-size: 22px;
  }
  @media screen and (min-width: 768px) {
    font-size: 32px;
  }
`;

export const ProjectDescription = styled.p`
  font-size: 16px;
  padding: 0 20px 0 28px;
  margin: 5px 0;
  grid-area: description;
  justify-self: center;

  @media screen and (min-width: 400px) {
    font-size: 18px;
    margin: 10px 0;
  }
  @media screen and (min-width: 768px) {
    padding-left: 40px;
  }
`;

export const ProjectButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  width: 90%;
  max-width: 200px; 
  padding: 8px 32px;
  margin: 10px 2px;
  background-color: #004191;
  color: #efefef;
  font-size: 16px;
  font-weight: 600;
  border-radius: 50px;
  transition: all 0.2s ease-in-out;

  grid-area: ${({ webicon }) => (webicon ? 'btn-web' : 'btn-github')};

  &:hover {
    background: #efefef;
    color: #0d0d0d;
  }

  @media screen and (min-width: 400px) {
    font-size: 18px;
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

export const ArrowLeft = styled(FaChevronLeft)`
  font-size: 20px;
  grid-area: left;
  height: 100%;
  cursor: pointer;
`;

export const ArrowRight = styled(FaChevronRight)`
  font-size: 20px;
  grid-area: right;
  height: 100%;
  cursor: pointer;
`;

export const DotWrapper = styled.div`
  margin-top: -30px;
  grid-area: dot;
`;

export const Dot = styled(BsDot)`
  font-size: 40px;
  height: 100%;
  transition: 0.3s ease-in-out;
  &:nth-child(${(props) => props.countCard}) {
    color: #004191;
  }
`;
