import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled glass-panel' : ''}`}>
      <div className="container nav-container">
        <div className="logo text-gradient">&lt;Data/&gt;</div>
        <ul className="nav-links">
          <li><a href="#home">Inicio</a></li>
          <li><a href="#about">Perfil</a></li>
          <li><a href="#experience">Experiencia</a></li>
          <li><a href="#skills">Stack</a></li>
          <li><a href="#projects">Resultados</a></li>
          <li><a href="#contact" className="btn btn-primary nav-btn">Contacto</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
