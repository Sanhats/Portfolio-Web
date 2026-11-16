import React from 'react';
import { Element } from 'react-scroll';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import InnovativeNav from './components/InnovativeNav';
import LanguageSelector from './components/LanguageSelector';

const App = () => {
  return (
    <main className="site-canvas relative">
      <LanguageSelector />
      <InnovativeNav />
      <Element name="home" className="scroll-target">
        <Home />
      </Element>
      <Element name="about" className="scroll-target">
        <About />
      </Element>
      <Element name="skills" className="scroll-target">
        <Skills />
      </Element>
      <Element name="experience" className="scroll-target">
        <Experience />
      </Element>
      <Element name="contact" className="scroll-target">
        <Contact />
      </Element>
    </main>
  );
};

export default App;

