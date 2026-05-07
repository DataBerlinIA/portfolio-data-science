import React from 'react';
import './Projects.css';

const projectsData = [
  {
    title: 'Heart Disease Prediction',
    description: 'Modelo predictivo de Machine Learning con 95% de precision para estimar probabilidad de enfermedad cardiaca procesando datos clinicos de 500 pacientes.',
    tools: ['Python', 'Polars', 'NumPy', 'Pandas', 'Power BI'],
    metric: 'ML Analytics',
    github: 'https://github.com/DataBerlinIA',
    demo: '#'
  },
  {
    title: 'Dashboard BI - Ah Cacao',
    description: 'Tableros interactivos en Power BI para visualizacion de metricas criticas y KPIs estrategicos, permitiendo interpretacion de datos en tiempo real.',
    tools: ['Power BI', 'DAX', 'SQL', 'ETL'],
    metric: 'Business Intelligence',
    github: '#',
    demo: '#'
  },
  {
    title: 'Sistema de Gestion y Fidelizacion',
    description: 'Arquitectura de datos para gestion de 5,000 clientes con sistema de puntos de compra integrado a ERP Odoo.',
    tools: ['Odoo 18', 'Python', 'PostgreSQL', 'XML'],
    metric: 'Data Architecture',
    github: '#',
    demo: '#'
  },
  {
    title: 'Agentes Inteligentes IA',
    description: 'Automatizacion de flujos de atencion mediante IA logrando reduccion del 80% en tiempos de resolucion.',
    tools: ['n8n', 'AI Agents', 'Odoo', 'APIs'],
    metric: 'AI Automation',
    github: '#',
    demo: '#'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            Mis <span className="italic">Proyectos</span>
          </h2>
          <div className="section-divider">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <p className="section-subtitle">
            Proyectos destacados que demuestran mi experiencia en Data Science y BI.
          </p>
        </div>

        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <div key={index} className="project-card card">
              <div className="project-header">
                <div className="project-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
                  </svg>
                </div>
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noreferrer" aria-label="Ver codigo">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  <a href={project.demo} target="_blank" rel="noreferrer" aria-label="Ver demo">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                      <polyline points="15 3 21 3 21 9"/>
                      <line x1="10" y1="14" x2="21" y2="3"/>
                    </svg>
                  </a>
                </div>
              </div>
              
              <div className="project-content">
                <span className="project-badge">{project.metric}</span>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
              </div>

              <div className="project-tech">
                {project.tools.map((tool, id) => (
                  <span key={id} className="tech-tag">{tool}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
