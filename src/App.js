import React, { Suspense } from 'react';
import { Element } from 'react-scroll';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Work from './components/Work';
import Contact from './components/Contact';
import InteractiveBackground from './components/InteractiveBackground';
import FloatingActionButton from './components/FloatingActionButton';

const App = () => {
  return (
    <div className="bg-[#0a192f] relative">
      <InteractiveBackground />
      <Navbar />
      <Element name="home">
        <Home />
      </Element>
      <Element name="about">
        <About />
      </Element>
      <Element name="skills">
        <Skills />
      </Element>
      <Element name="work">
        <Work />
      </Element>
      <Element name="contact">
        <Contact />
      </Element>
      <FloatingActionButton />
    </div>
  );
};

export default App;

