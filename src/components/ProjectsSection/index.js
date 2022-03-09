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
  ArrowLeftIcon,
  ArrowLeft,
  ArrowRight,
  ArrowRightIcon,
  DotWrapper,
  Dot,
} from './ProjectsElements';

// Assets
import project1 from '../../assets/images/project1.png';
import project2 from '../../assets/images/project2.png';
import project3 from '../../assets/images/project3.png';
import project4 from '../../assets/images/project4.png';
import project5 from '../../assets/images/project5.png';

const Projects = ({ language }) => {
  const [countCard, setCountCard] = useState(1);

  const incrementCountCard = () => {
    if (countCard == 5) {
      return setCountCard(1);
    }

    setCountCard(countCard + 1);

    return countCard;
  };

  const decrementCountCard = () => {
    if (countCard == 1) {
      return setCountCard(5);
    }

    setCountCard(countCard - 1);

    return countCard;
  };

  return (
    <>
      <ProjectsContainer id='proyectos'>
        <ProjectsH2>{language ? 'Proyectos' : 'Projects'}</ProjectsH2>
        <ArrowLeft onClick={decrementCountCard}>
          <ArrowLeftIcon />
        </ArrowLeft>

        <CardsWrapper>
          {/* ==================== Proyecto 1 ==================== */}

          <ProjectCard className='project-1' countcard={countCard}>
            <ProjectImage
              src={project1}
              alt='Imagen del proyecto 1'
            ></ProjectImage>
            <ProjectTitle>Calendar App</ProjectTitle>
            <ProjectDescription>
              {language
                ? 'Aplicación de eventos en el calendario con el stack MERN'
                : 'Events app in the calendar with the MERN stack'}
            </ProjectDescription>
            <ButtonLink
              webicon='true'
              href='https://ajcrauseo-calendar-app-mern.herokuapp.com/'
              target='_blank'
            >
              {language ? 'Visitar' : 'Website'} <WebIcon />
            </ButtonLink>
            <ButtonLink
              githubicon='true'
              href='https://github.com/ajcrauseo/calendarApp-MERN'
              target='_blank'
            >
              {language ? 'Ver Código' : 'View Code'} <GitHubIcon />
            </ButtonLink>
          </ProjectCard>

          {/* ==================== Proyecto 2 ==================== */}

          <ProjectCard className='project-2' countcard={countCard}>
            <ProjectImage
              src={project2}
              alt='Imagen del proyecto 2'
            ></ProjectImage>
            <ProjectTitle>Toti Store</ProjectTitle>
            <ProjectDescription>
              {language
                ? 'Toti Store - Ecommerce con React.js y Commerce.js'
                : 'Toti Store - Ecommerce with React.js and Commerce.js'}
            </ProjectDescription>
            <ButtonLink
              webicon='true'
              href='https://totistore.netlify.app/'
              target='_blank'
            >
              {language ? 'Visitar' : 'Website'} <WebIcon />
            </ButtonLink>
            <ButtonLink
              githubicon='true'
              href='https://github.com/ajcrauseo/toti-store'
              target='_blank'
            >
              {language ? 'Ver Código' : 'View Code'} <GitHubIcon />
            </ButtonLink>
          </ProjectCard>

          {/* ==================== Proyecto 3 ==================== */}

          <ProjectCard className='project-3' countcard={countCard}>
            <ProjectImage
              src={project3}
              alt='Imagen del proyecto 3'
            ></ProjectImage>
            <ProjectTitle>Rick and Morty Characters</ProjectTitle>
            <ProjectDescription>
              {language
                ? 'Single Page Application con JavaScript Vanilla que consume una API'
                : 'Single Page Application with JavaScript Vanilla'}
            </ProjectDescription>
            <ButtonLink
              webicon='true'
              href='https://ajcrauseo-rick-and-morty-characters.netlify.app/'
              target='blank'
            >
              {language ? 'Visitar' : 'Website'} <WebIcon />
            </ButtonLink>
            <ButtonLink
              githubicon='true'
              href='https://github.com/ajcrauseo/rick-and-morty-characters'
              target='blank'
            >
              {language ? 'Ver Código' : 'View Code'} <GitHubIcon />
            </ButtonLink>
          </ProjectCard>

          {/* ==================== Proyecto 4 ==================== */}

          <ProjectCard className='project-4' countcard={countCard}>
            <ProjectImage
              src={project4}
              alt='Imagen del proyecto 4'
            ></ProjectImage>
            <ProjectTitle>To Do List</ProjectTitle>
            <ProjectDescription>
              {language
                ? 'Lista de cosas que hacer, hecha con JavaScript Vanilla'
                : 'To do List made with JavaScript Vanilla'}
            </ProjectDescription>
            <ButtonLink
              webicon='true'
              href='https://ajcrauseo.github.io/todo-list/'
              target='blank'
            >
              {language ? 'Visitar' : 'Website'} <WebIcon />
            </ButtonLink>
            <ButtonLink
              githubicon='true'
              href='https://github.com/ajcrauseo/todo-list'
              target='blank'
            >
              {language ? 'Ver Código' : 'View Code'} <GitHubIcon />
            </ButtonLink>
          </ProjectCard>

          {/* ==================== Proyecto 5 ==================== */}

          <ProjectCard className='project-5' countcard={countCard}>
            <ProjectImage
              src={project5}
              alt='Imagen del proyecto 5'
            ></ProjectImage>
            <ProjectTitle>EasyBank</ProjectTitle>
            <ProjectDescription>
              {language
                ? 'Easybank es un proyecto de frontendmentor.io de una landing page. Es una página estática'
                : 'Easybank is a frontendmentor.io project about a landing page. Is a static page'}
            </ProjectDescription>
            <ButtonLink
              webicon='true'
              href='https://ajcrauseo.github.io/easybank/'
              target='blank'
            >
              {language ? 'Visitar' : 'Website'} <WebIcon />
            </ButtonLink>
            <ButtonLink
              githubicon='true'
              href='https://github.com/ajcrauseo/easybank'
              target='blank'
            >
              {language ? 'Ver Código' : 'View Code'} <GitHubIcon />
            </ButtonLink>
          </ProjectCard>
        </CardsWrapper>

        <ArrowRight onClick={incrementCountCard}>
          <ArrowRightIcon />
        </ArrowRight>
        <DotWrapper>
          <Dot countcard={countCard} />
          <Dot countcard={countCard} />
          <Dot countcard={countCard} />
          <Dot countcard={countCard} />
          <Dot countcard={countCard} />
        </DotWrapper>
      </ProjectsContainer>
    </>
  );
};

export default Projects;
