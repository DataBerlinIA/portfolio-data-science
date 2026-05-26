import React from 'react';
import BonfireKnight from './BonfireKnight';
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
        {/* Dark Souls Bonfire Knight */}
        <BonfireKnight />

        <h1 className="hero-name">
          Berlin <span className="text-italic">Beltran</span>
        </h1>
        
        <p className="hero-roles">
          AI Engineer <span className="separator">•</span> Full-Stack Developer <span className="separator">•</span> Data Scientist
        </p>
        
        <p className="hero-description">
          Computer Systems Engineer specializing in Artificial Intelligence, Data Science, and Full-Stack Development. 
          Dedicated to architecting autonomous AI systems, intelligent agentic workflows, and deploying modern cloud solutions.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">
            Explore Portfolio
          </a>
          <a href="#tools" className="btn btn-secondary">
            Tech Stack
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
