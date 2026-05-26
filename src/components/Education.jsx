import React from 'react';
import './Education.css';

const educationData = [
  {
    degree: 'B.S. in Computer Systems Engineering',
    institution: 'Universidad del Sur',
    location: 'Playa del Carmen, MX',
    period: 'Sept. 2022 - April 2025',
    description: 'Specialization in software architecture, database management, and process optimization.',
    icon: '🎓'
  },
  {
    degree: 'Data Science & BI Specialization',
    institution: 'Codigo Facilito',
    location: 'Remote',
    period: 'Completed: Dec. 2024',
    description: 'Intensive training in data analysis, Power BI, DAX, SQL, and Python for data science.',
    icon: '📊'
  },
  {
    degree: 'B.A. in Primary Education',
    institution: 'CREN',
    location: 'Bacalar, MX',
    period: 'Aug. 2013 - Aug. 2017',
    description: 'Background in pedagogy, group management, and learning methodologies.',
    icon: '📚'
  }
];

const Education = () => {
  return (
    <section id="education" className="education">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            My <span className="italic">Education</span>
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
