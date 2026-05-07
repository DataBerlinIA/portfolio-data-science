import React from 'react';
import './Education.css';

const educationData = [
  {
    degree: 'Ingenieria en Sistemas de Computo',
    institution: 'Universidad del Sur',
    location: 'Playa del Carmen, MX',
    period: 'Sept. 2022 - Abril 2025',
    description: 'Especializacion en arquitectura de software, gestion de bases de datos y optimizacion de procesos.',
    icon: '🎓'
  },
  {
    degree: 'Especializacion en Ciencia de Datos y BI',
    institution: 'Codigo Facilito',
    location: 'Remoto',
    period: 'Finalizado: Dic. 2024',
    description: 'Formacion intensiva en analisis de datos, Power BI, DAX, SQL y Python para ciencia de datos.',
    icon: '📊'
  },
  {
    degree: 'Licenciatura en Educacion Primaria',
    institution: 'CREN',
    location: 'Bacalar, MX',
    period: 'Ago. 2013 - Ago. 2017',
    description: 'Formacion en pedagogia, gestion de grupos y metodologias de aprendizaje.',
    icon: '📚'
  }
];

const Education = () => {
  return (
    <section id="education" className="education">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            Mi <span className="italic">Educacion</span>
          </h2>
          <div className="section-divider">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div className="education-grid">
          {educationData.map((edu, index) => (
            <div key={index} className="education-card card">
              <div className="education-icon">{edu.icon}</div>
              <div className="education-content">
                <h3 className="education-degree">{edu.degree}</h3>
                <p className="education-institution">{edu.institution}</p>
                <div className="education-meta">
                  <span className="education-location">{edu.location}</span>
                  <span className="education-period">{edu.period}</span>
                </div>
                <p className="education-description">{edu.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
