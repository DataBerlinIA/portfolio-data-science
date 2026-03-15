import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title"><span>01.</span> Sobre Mí</h2>
        <div className="about-content glass-panel">
          <div className="about-text">
            <p>
              Hola, soy Berlin. Soy un <strong>Ingeniero en Sistemas Computacionales</strong> y me apasiona el ciclo completo 
              del desarrollo de software, desde el análisis y diseño, hasta el desarrollo y la implementación en producción.
            </p>
            <p>
              Actualmente tengo experiencia desarrollando aplicaciones empresariales Full Stack utilizando  
              tecnologías como <strong>Odoo, C#, XML, y OWL</strong>. Además de mi perfil como desarrollador, me he adentrado 
              en el mundo de la Ciencia de Datos, construyendo modelos predictivos de <strong>Machine Learning</strong> en Python 
              para resolver problemas complejos, como la predicción de enfermedades a partir de datos clínicos.
            </p>
            <p>
              Creo en el poder del trabajo en equipo, la comunicación asertiva y el aprendizaje continuo. 
              Mi objetivo es seguir construyendo sistemas eficientes o entrenando modelos que aporten 
              verdadero valor a los usuarios y las empresas.
            </p>
          </div>
          <div className="about-image-container">
            <div className="about-image-placeholder">
              <span>{`{ Berlin }`}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
