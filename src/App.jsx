import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Add loader removal logic like original main.js
    const loader = document.getElementById('loaderWrapper');
    if (loader) {
      setTimeout(() => {
        loader.classList.add('hidden');
        setTimeout(() => {
          loader.style.display = 'none';
          document.body.style.opacity = '1';
        }, 600);
      }, 1000); // Give it a second for effect
    } else {
      document.body.style.opacity = '1';
    }
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <div className="section-sep"></div>
      <About />
      <div className="section-sep"></div>
      <Skills />
      <div className="section-sep"></div>
      <Projects />
      <div className="section-sep"></div>
      <Experience />
      <div className="section-sep"></div>
      <Achievements />
      <Certifications />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
