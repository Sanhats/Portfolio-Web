import React from 'react';
import { Element } from 'react-scroll';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Work from './components/Work';
import Contact from './components/Contact';
import ImmersiveBackground from './components/ImmersiveBackground';
import InnovativeNav from './components/InnovativeNav';

const App = () => {
  return (
    <div className="bg-[#0a192f] relative">
      <ImmersiveBackground />
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
      <Element name="work">
        <Work />
      </Element>
      <Element name="contact">
        <Contact />
      </Element>
    </div>
  );
};

export default App;

