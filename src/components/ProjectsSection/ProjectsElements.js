import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
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
`;

export const ProjectsH1 = styled.h1`
  margin: 60px 0;
  text-align: center;
  font-size: 32px;
  grid-area: title;
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
  height: 70vh;
  padding: 20px 15px;
  margin: 0 10px;

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

  &.project-${props => props.countCard} {
    display: grid;
  }

  @media screen and (min-width: 768px) {
    padding: 20px;
    grid-template-areas:
      'image title title'
      'image description description'
      'image btn-web btn-github';
  }
`;

export const ProjectImage = styled.img`
  width: 240px;
  height: auto;
  grid-area: image;
`;

export const ProjectTitle = styled.h3`
  font-size: 22px;
  font-weight: 600;
  margin: 10px 0;
  text-align: center;
  grid-area: title;
`;

export const ProjectDescription = styled.p`
  font-size: 18px;
  padding: 0 20px 0 28px;
  margin: 10px 0;
  grid-area: description;
  justify-self: center;
`;

export const ProjectButton = styled(LinkR)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  width: 200px;
  padding: 8px 32px;
  margin: 10px 0;
  background-color: #004191;
  color: #efefef;
  font-size: 18px;
  font-weight: 600;
  border-radius: 50px;

  grid-area: ${({ webicon }) => (webicon ? 'btn-web' : 'btn-github')};
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
  grid-area: dot;
`;

export const Dot = styled(BsDot)`
  font-size: 40px;
  height: 100%;
  transition: 0.3s ease-in-out;
  &:nth-child(${props => props.countCard}) {
    color: #004191;
  }
`;
