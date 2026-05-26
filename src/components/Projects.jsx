import React from 'react';
import './Projects.css';

const projectsData = [
  {
    title: 'Autonomous AI Operational Ecosystem',
    description: 'Built autonomous AI Agents integrated with Google AI Studio and managed through a cloud serverless architecture with Supabase and PostgreSQL to optimize operational enterprise tasks.',
    tools: ['Google AI Studio', 'Supabase', 'AI Agents', 'Claude Code'],
    metric: 'AI ENGINEERING',
    github: 'https://github.com/DataBerlinIA',
    demo: '#'
  },
  {
    title: 'Full-Stack Cloud Architecture — Ah Cacao',
    description: 'Designed and deployed a high-performance web application hosted on Vercel to manage and analyze consumer behavior for a 5,000-client database, fully synchronized with Odoo ERP.',
    tools: ['Vercel', 'Odoo', 'PostgreSQL', 'JavaScript'],
    metric: 'CLOUD DEV',
    github: '#',
    demo: '#'
  },
  {
    title: 'Predictive Clinical Health Framework',
    description: 'Architected an end-to-end intelligent data framework that achieved a 95% accuracy rate in predicting heart disease risks, utilizing Python for advanced ETL processes and Machine Learning modeling.',
    tools: ['Python', 'Machine Learning', 'Polars', 'Pandas'],
    metric: 'DATA SCIENCE',
    github: 'https://github.com/DataBerlinIA',
    demo: '#'
  },
  {
    title: 'Enterprise Intelligence Ecosystem',
    description: 'Engineered robust interactive analytical pipelines in Power BI with complex DAX logic for real-time strategic metric tracking and automated reporting via Looker Studio.',
    tools: ['Power BI', 'DAX', 'Looker Studio', 'Excel Advanced'],
    metric: 'BUSINESS INTELLIGENCE',
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
            My <span className="italic">Projects</span>
          </h2>
          <div className="section-divider">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <p className="section-subtitle">
            Featured projects showcasing my expertise in AI Engineering, Full-Stack Development, and Data Science.
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
