import React from 'react';
import './Hero.css';

const Hero = () => {
  // Generate random dots for the background effect
  const dots = Array.from({ length: 40 }).map((_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    animationDelay: `${Math.random() * 10}s`,
    animationDuration: `${10 + Math.random() * 20}s`,
    width: `${1 + Math.random() * 3}px`,
    height: `${1 + Math.random() * 3}px`,
  }));

  return (
    <section id="home" className="hero">
      <div className="data-grid-dots">
        {dots.map(dot => (
          <div 
            key={dot.id} 
            className="data-dot" 
            style={{
              left: dot.left,
              animationDelay: dot.animationDelay,
              animationDuration: dot.animationDuration,
              width: dot.width,
              height: dot.height
            }}
          />
        ))}
      </div>
      <div className="container hero-container">
        <div className="hero-content">
          <p className="hero-greeting">Hola, mi nombre es</p>
          <h1 className="hero-name">Berlin Beltran.</h1>
          <h2 className="hero-title">Ingeniero Full Stack & <span className="text-gradient">Data Scientist.</span></h2>
          <p className="hero-description">
            Construyo <strong>sistemas empresariales robustos</strong> y los poténcio con <strong>Inteligencia Artificial</strong>. 
            Combino mi experiencia en arquitecturas complejas (Odoo, C#, .NET) con modelos de Machine Learning (Python) para transformar problemas técnicos en soluciones que escalan y generan impacto real.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">Ver mis Proyectos</a>
            <a href="/cv_alex_beltran.pdf" className="btn btn-secondary">Descargar CV</a>
          </div>
        </div>
        <div className="hero-graphic">
          <div className="data-node">
            <div className="core"></div>
            <div className="orbit orbit-1"></div>
            <div className="orbit orbit-2"></div>
            <div className="orbit orbit-3"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
