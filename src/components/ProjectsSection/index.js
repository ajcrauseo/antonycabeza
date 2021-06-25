// Dependencies
import React, { useState } from 'react';
// Components
import { ButtonLink } from '../ButtonLinkElement';
import {
  ProjectsContainer,
  ProjectsH2,
  CardsWrapper,
  ProjectCard,
  ProjectImage,
  ProjectTitle,
  ProjectDescription,
  WebIcon,
  GitHubIcon,
  ArrowLeft,
  ArrowRight,
  DotWrapper,
  Dot,
} from './ProjectsElements';

// Assets
import project1 from '../../assets/images/project1.png';
import project2 from '../../assets/images/project2.png';
import project3 from '../../assets/images/project3.png';
import project4 from '../../assets/images/project4.png';
import project5 from '../../assets/images/project5.png';

const Projects = () => {
  const [countCard, setCountCard] = useState(1);

  const incrementCountCard = () => {
    if (countCard == 5) {
      return false;
    }

    setCountCard(countCard + 1);

    return countCard;
  };

  const decrementCountCard = () => {
    if (countCard == 1) {
      return false;
    }

    setCountCard(countCard - 1);

    return countCard;
  };

  return (
    <>
      <ProjectsContainer id='proyectos'>
        <ProjectsH2>Proyectos</ProjectsH2>
        <ArrowLeft onClick={decrementCountCard} />

        <CardsWrapper>
          <ProjectCard className='project-1' countCard={countCard}>
            <ProjectImage
              src={project1}
              alt='Imagen del proyecto 1'
            ></ProjectImage>
            <ProjectTitle>Rick and Morty Characters</ProjectTitle>
            <ProjectDescription>
              Single Page Application con JavaScript Vanilla que consume una API
            </ProjectDescription>
            <ButtonLink
              webicon='true'
              href='https://ajcrauseo-rick-and-morty-characters.netlify.app/'
              target='_blank'
            >
              Visitar <WebIcon />
            </ButtonLink>
            <ButtonLink
              githubicon='true'
              href='https://github.com/ajcrauseo/rick-and-morty-characters'
              target='_blank'
            >
              Ver Código <GitHubIcon />
            </ButtonLink>
          </ProjectCard>
          <ProjectCard className='project-2' countCard={countCard}>
            <ProjectImage
              src={project2}
              alt='Imagen del proyecto 2'
            ></ProjectImage>
            <ProjectTitle>EasyBank</ProjectTitle>
            <ProjectDescription>
              Easybank es un proyecto de frontendmentor.io de una landing page
            </ProjectDescription>
            <ButtonLink
              webicon='true'
              href='https://ajcrauseo.github.io/easybank/'
              target='blank'
            >
              Visitar <WebIcon />
            </ButtonLink>
            <ButtonLink
              githubicon='true'
              href='https://github.com/ajcrauseo/easybank'
              target='blank'
            >
              Ver Código <GitHubIcon />
            </ButtonLink>
          </ProjectCard>
          <ProjectCard className='project-3' countCard={countCard}>
            <ProjectImage
              src={project3}
              alt='Imagen del proyecto 3'
            ></ProjectImage>
            <ProjectTitle>To Do List</ProjectTitle>
            <ProjectDescription>
              Lista de cosas que hacer, con lógica en JavaScript
            </ProjectDescription>
            <ButtonLink
              webicon='true'
              href='https://ajcrauseo.github.io/todo-list/'
              target='blank'
            >
              Visitar <WebIcon />
            </ButtonLink>
            <ButtonLink
              githubicon='true'
              href='https://github.com/ajcrauseo/todo-list'
              target='blank'
            >
              Ver Código <GitHubIcon />
            </ButtonLink>
          </ProjectCard>
          <ProjectCard className='project-4' countCard={countCard}>
            <ProjectImage
              src={project4}
              alt='Imagen del proyecto 4'
            ></ProjectImage>
            <ProjectTitle>Rock, Paper and Scissors</ProjectTitle>
            <ProjectDescription>
              Juego con lógica en JavaScript
            </ProjectDescription>
            <ButtonLink
              webicon='true'
              href='http://www.rpsgame.ga/'
              target='blank'
            >
              Visitar <WebIcon />
            </ButtonLink>
            <ButtonLink
              githubicon='true'
              href='https://github.com/ajcrauseo/rock-paper-scissors'
              target='blank'
            >
              Ver Código <GitHubIcon />
            </ButtonLink>
          </ProjectCard>
          <ProjectCard className='project-5' countCard={countCard}>
            <ProjectImage
              src={project5}
              alt='Imagen del proyecto 5'
            ></ProjectImage>
            <ProjectTitle>Batatabit</ProjectTitle>
            <ProjectDescription>
              Landing page de una empresa de criptomonedas (ficticia)
            </ProjectDescription>
            <ButtonLink
              webicon='true'
              href='https://ajcrauseo.github.io/batatabit'
              target='blank'
            >
              Visitar <WebIcon />
            </ButtonLink>
            <ButtonLink
            
            href='https://github.com/ajcrauseo/batatabit'
              target='blank'
            >
              Ver Código <GitHubIcon />
            </ButtonLink>
          </ProjectCard>
        </CardsWrapper>

        <ArrowRight onClick={incrementCountCard} />
        <DotWrapper>
          <Dot countCard={countCard} />
          <Dot countCard={countCard} />
          <Dot countCard={countCard} />
          <Dot countCard={countCard} />
          <Dot countCard={countCard} />
        </DotWrapper>
      </ProjectsContainer>
    </>
  );
};

export default Projects;
