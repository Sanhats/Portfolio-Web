import React from 'react';
import { Element } from 'react-scroll';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import ImmersiveBackground from './components/ImmersiveBackground';
import InnovativeNav from './components/InnovativeNav';
import LanguageSelector from './components/LanguageSelector';

const App = () => {
  return (
    <div className="bg-[#0a192f] relative">
      <ImmersiveBackground />
      <LanguageSelector />
      <InnovativeNav />
      <Element name="home">
        <Home />
      </Element>
      <Element name="about">
        <About />
      </Element>
      <Element name="skills">
        <Skills />
      </Element>
      <Element name="experience">
        <Experience />
      </Element>
      <Element name="contact">
        <Contact />
      </Element>
    </div>
  );
};

export default App;

