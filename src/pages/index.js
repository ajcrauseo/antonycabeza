// Dependencies
import React, { useState } from 'react';
// Components
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import HeroSection from '../components/HeroSection';
import About from '../components/AboutSection';
import Projects from '../components/ProjectsSection';
import Contact from '../components/ContactSection';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <About />
      <Projects />
      <Contact />
    </>
  );
};

export default Home;
