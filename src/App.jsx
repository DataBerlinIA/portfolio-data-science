import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Tools from './components/Tools';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Tools />
        <Projects />
        <Contact />
      </main>
      <footer className="footer">
        <div className="container footer-container">
          <p>&copy; {new Date().getFullYear()} Berlin Beltran. Transformando datos en decisiones.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
