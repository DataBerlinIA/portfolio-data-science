import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      {/* Decorative sparkles */}
      <div className="hero-sparkle sparkle-1">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" fill="currentColor"/>
        </svg>
      </div>
      <div className="hero-sparkle sparkle-2">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
          <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" fill="currentColor"/>
        </svg>
      </div>
      
      <div className="container hero-container">
        {/* Data Icon */}
        <div className="hero-icon">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
            <polyline points="7.5 4.21 12 6.81 16.5 4.21"/>
            <polyline points="7.5 19.79 7.5 14.6 3 12"/>
            <polyline points="21 12 16.5 14.6 16.5 19.79"/>
            <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
            <line x1="12" y1="22.08" x2="12" y2="12"/>
          </svg>
          <span className="icon-dot"></span>
        </div>

        <h1 className="hero-name">
          Berlin <span className="text-italic">Beltran</span>
        </h1>
        
        <p className="hero-roles">
          Data Scientist <span className="separator">*</span> BI Developer <span className="separator">*</span> AI Engineer
        </p>
        
        <p className="hero-description">
          Ingeniero de Sistemas especializado en Business Intelligence, Automatizacion e IA. 
          Transformo datos en decisiones estrategicas mediante Power BI, Python y Machine Learning.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">
            Explorar portafolio
          </a>
          <a href="#tools" className="btn btn-secondary">
            Stack creativo
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
