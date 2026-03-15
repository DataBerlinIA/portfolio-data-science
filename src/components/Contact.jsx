import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container contact-container">
        <h2 className="section-title"><span>04.</span> ¿Qué sigue?</h2>
        <h3 className="contact-heading">Ponte en Contacto</h3>
        <p className="contact-description">
          Actualmente estoy en búsqueda de oportunidades como <strong>Desarrollador Full Stack</strong> o <strong>Data Analyst/Scientist</strong>. 
          Ya sea que tengas una vacante, un proyecto interesante o simplemente quieras hablar sobre tecnología, mi bandeja de entrada está abierta.
        </p>
        <a href="mailto:babeltranavila@gmail.com" className="btn btn-primary contact-btn">Saludar 👋</a>
        
        <div className="social-links">
          <a href="https://www.linkedin.com/in/berlinbeltranavila/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://github.com/DataBerlinIA" target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
