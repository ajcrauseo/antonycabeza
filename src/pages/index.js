// Dependencies
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
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

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    <Helmet>
      <title>Antony Cabeza</title>
      <meta name="description" content="Antony Cabeza portafolio" />
    </Helmet>

      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
