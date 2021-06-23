import React, { useState } from 'react';

import {
  ProjectsContainer,
  ProjectsH1,
  CardsWrapper,
  ProjectCard,
  ProjectImage,
  ProjectTitle,
  ProjectDescription,
  ProjectButton,
  WebIcon,
  GitHubIcon,
  ArrowLeft,
  ArrowRight,
  DotWrapper,
  Dot,
} from './ProjectsElements';

import project1 from '../../assets/images/project1.png';

const Projects = () => {
  const [countCard, setCountCard] = useState(1);

  const incrementCountCard = () => {
    if (countCard == 3) {
      return false;
    }

    setCountCard(countCard + 1);

    return countCard;
  };

  const decrementCountCard = () => {
    if (countCard == 0) {
      return false;
    }

    setCountCard(countCard - 1);

    return countCard;
  };

  return (
    <>
      <ProjectsContainer>
        <ProjectsH1>Proyectos</ProjectsH1>
        <ArrowLeft onClick={decrementCountCard} />

        <CardsWrapper>
          <ProjectCard className='project-1' countCard={countCard}>
            <ProjectImage
              src={project1}
              alt='Imagen del proyecto 1'
            ></ProjectImage>
            <ProjectTitle>Proyecto 1</ProjectTitle>
            <ProjectDescription>
              Lorem ipsum dolor sit amet consectetur, adipis elit. Numquam,
              sedepe saepe.
            </ProjectDescription>
            <ProjectButton webicon='true' to='/'>
              Visitar <WebIcon />
            </ProjectButton>
            <ProjectButton to='/'>
              Ver Código <GitHubIcon />
            </ProjectButton>
          </ProjectCard>
          <ProjectCard className='project-2' countCard={countCard}>
            <ProjectImage
              src={project1}
              alt='Imagen del proyecto 1'
            ></ProjectImage>
            <ProjectTitle>Proyecto 2</ProjectTitle>
            <ProjectDescription>
              Lorem ipsum dolor sit amet consectetur, adipis elit. Numquam,
              sedepe saepe.
            </ProjectDescription>
            <ProjectButton webicon='true' to='/'>
              Visitar <WebIcon />
            </ProjectButton>
            <ProjectButton to='/'>
              Ver Código <GitHubIcon />
            </ProjectButton>
          </ProjectCard>
          <ProjectCard className='project-3' countCard={countCard}>
            <ProjectImage
              src={project1}
              alt='Imagen del proyecto 1'
            ></ProjectImage>
            <ProjectTitle>Proyecto 3</ProjectTitle>
            <ProjectDescription>
              Lorem ipsum dolor sit amet consectetur, adipis elit. Numquam,
              sedepe saepe.
            </ProjectDescription>
            <ProjectButton webicon='true' to='/'>
              Visitar <WebIcon />
            </ProjectButton>
            <ProjectButton to='/'>
              Ver Código <GitHubIcon />
            </ProjectButton>
          </ProjectCard>
        </CardsWrapper>

        <ArrowRight onClick={incrementCountCard} />
        <DotWrapper>
          <Dot countCard={countCard}/>
          <Dot countCard={countCard}/>
          <Dot countCard={countCard}/>
        </DotWrapper>
      </ProjectsContainer>
    </>
  );
};

export default Projects;
