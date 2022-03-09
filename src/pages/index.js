// Dependencies
import React, { useState } from 'react';
// Components
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import HeroSection from '../components/HeroSection';
import About from '../components/AboutSection';
import Projects from '../components/ProjectsSection';
import Contact from '../components/ContactSection';
import Footer from '../components/Footer';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const changeLanguage = () => {
    setLanguage((prevState) => !prevState);
  };

  return (
    <>
      <Sidebar
        isOpen={isOpen}
        toggle={toggle}
        changeLanguage={changeLanguage}
        language={language}
      />
      <Navbar
        toggle={toggle}
        changeLanguage={changeLanguage}
        language={language}
      />
      <HeroSection language={language} />
      <About language={language} />
      <Projects language={language} />
      <Contact language={language} />
      <Footer />
    </>
  );
};

export default Home;
