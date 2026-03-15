import React from 'react';
import './Projects.css';

const projectsData = [
  {
    title: 'Heart Disease Prediction (ML)',
    description: 'Desarrollo de un modelo predictivo de Machine Learning en Python para estimar la probabilidad de enfermedad cardíaca a partir de datos clínicos, incluyendo limpieza y visualización de datos.',
    tools: ['Python', 'Polars', 'NumPy', 'Pandas', 'Altair'],
    metric: 'Análisis Predictivo',
    github: '#',
    demo: '#'
  },
  {
    title: 'Sistema de Gestión y Puntos en Odoo',
    description: 'Aplicación Full Stack para el registro y gestión de clientes de Ah Cacao, con sistema de asignación de puntos de compra utilizando C# e integración de base de datos.',
    tools: ['Odoo 18/19', 'C#', 'OWL', 'XML'],
    metric: '+ Fidelización',
    github: '#',
    demo: '#'
  },
  {
    title: 'Agentes Inteligentes de Servicio',
    description: 'Automatizaciones desarrolladas en Odoo para la mejora de atención al cliente, integrando flujos de trabajo avanzados mediante la plataforma n8n.',
    tools: ['Odoo 19', 'n8n', 'Automatización'],
    metric: 'Agentes IA',
    github: '#',
    demo: '#'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title"><span>03.</span> Proyectos Destacados</h2>
        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <div key={index} className="project-card glass-panel">
              <div className="project-content">
                <div className="project-header">
                  <div className="folder-icon text-gradient">📁</div>
                  <div className="project-links">
                    <a href={project.github} target="_blank" rel="noreferrer" title="Ver Código">⌨️</a>
                    <a href={project.demo} target="_blank" rel="noreferrer" title="Ver Demo">🚀</a>
                  </div>
                </div>
                <h3 className="project-title">
                  {project.title}
                  {project.metric && <span className="project-metric-badge">{project.metric}</span>}
                </h3>
                <p className="project-description">{project.description}</p>
                <ul className="project-tech-list">
                  {project.tools.map((tool, id) => (
                    <li key={id}>{tool}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
