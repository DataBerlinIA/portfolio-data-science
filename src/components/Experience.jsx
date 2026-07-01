import React from 'react';
import './Experience.css';

const experienceData = [
  {
    role: 'AI Engineer & Full-Stack Data Scientist',
    company: 'Ah Cacao',
    period: 'Jan 2025 - Dec 2025',
    type: 'Full-time',
    highlights: [
      'Designed a Supabase + PostgreSQL backend architecture to manage and analyze behavior for a 5,000-client database with high referential integrity.',
      'Built and deployed web apps integrated with Google AI Studio (Gemini) on Vercel, enabling real-time market analysis for internal teams.',
      'Automated operational workflows with autonomous AI Agents and Claude Code, reducing support resolution time by 80%.',
      'Engineered Odoo ERP solutions (OWL/XML), optimizing ERP event synchronization into analytical data warehouses.',
    ],
    tags: ['AI Agents', 'Supabase', 'Gemini', 'Vercel', 'Odoo ERP'],
  },
  {
    role: 'Data Scientist & BI Engineer',
    company: 'Predictive Health Ecosystem — Clinical Project',
    period: 'May 2024 - Dec 2024',
    type: 'Project',
    highlights: [
      'Designed a cardiovascular risk prediction system with 95% accuracy, processing clinical records from 500+ patients.',
      'Ran ETL pipelines in Python (Pandas & Polars) within Jupyter, optimizing data cleaning and feature engineering ahead of modeling.',
      'Built interactive Power BI dashboards with advanced DAX so medical staff could explore ML results intuitively.',
    ],
    tags: ['Python', 'Machine Learning', 'Power BI', 'DAX'],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            My <span className="italic">Experience</span>
          </h2>
          <div className="section-divider">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <p className="section-subtitle">
            Building end-to-end AI products with measurable business impact, from prototype to production.
          </p>
        </div>

        <div className="timeline">
          {experienceData.map((job, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker">
                <span className="timeline-dot"></span>
                {index !== experienceData.length - 1 && <span className="timeline-line"></span>}
              </div>

              <div className="timeline-card card">
                <div className="timeline-card-header">
                  <div>
                    <h3 className="timeline-role">{job.role}</h3>
                    <p className="timeline-company">{job.company}</p>
                  </div>
                  <div className="timeline-meta">
                    <span className="timeline-type">{job.type}</span>
                    <span className="timeline-period">{job.period}</span>
                  </div>
                </div>

                <ul className="timeline-highlights">
                  {job.highlights.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>

                <div className="timeline-tags">
                  {job.tags.map((tag, i) => (
                    <span key={i} className="tech-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
