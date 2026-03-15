import React from 'react';
import './Skills.css';

const skillsData = [
  { category: 'Lenguajes & Backend', items: ['Python', 'C#', 'SQL', 'Node.js', 'XML'] },
  { category: 'Frontend & Web', items: ['OWL (Odoo)', 'HTML/CSS', 'JavaScript', 'Bootstrap'] },
  { category: 'Data & Machine Learning', items: ['Pandas', 'NumPy', 'Polars', 'Altair', 'Matplotlib', 'Jupyter'] },
  { category: 'Plataformas & Herramientas', items: ['Odoo 18/19', 'n8n (Automatización)', 'Git'] },
];

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title"><span>02.</span> Mis Habilidades</h2>
        <div className="skills-grid">
          {skillsData.map((skillGroup, index) => (
            <div key={index} className="skill-card glass-panel">
              <h3 className="skill-category">{skillGroup.category}</h3>
              <div className="skill-tags">
                {skillGroup.items.map((item, id) => (
                  <span key={id} className="skill-tag">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
