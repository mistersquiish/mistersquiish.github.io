import React, { useState, useEffect } from 'react';
import Hero from './Hero/Hero';
import About from './About/About';
import Experiences from './Experiences/Experiences';
import Projects from './Projects/Projects';
import Footer from './Footer/Footer';

import { PortfolioProvider } from '../context/context';

import { heroData, aboutData, experiencesData, projectsData, footerData } from '../mock/data';

function App() {
  const [hero, setHero] = useState({});
  const [about, setAbout] = useState({});
  const [experiences, setExperiences] = useState([]);
  const [projects, setProjects] = useState([]);
  const [footer, setFooter] = useState({});

  useEffect(() => {
    setHero({ ...heroData });
    setAbout({ ...aboutData });
    setExperiences([ ...experiencesData ]);
    setProjects([...projectsData]);
    setFooter({ ...footerData });
  }, []);

  return (
    <PortfolioProvider value={{ hero, about, experiences, projects, footer }}>
      <Hero />
      <About />
      <Experiences />
      <Projects />
      <Footer footerMessage="Lottie image from pixeltrue.com"/>
    </PortfolioProvider>
  );
}

export default App;
