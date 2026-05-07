import React from 'react';
import './Tools.css';

const toolsData = [
  { name: 'Power BI', abbr: 'PBI', percentage: 90, color: '#F2C811' },
  { name: 'Python', abbr: 'Py', percentage: 85, color: '#3776AB' },
  { name: 'PostgreSQL', abbr: 'SQL', percentage: 88, color: '#336791' },
  { name: 'Supabase', abbr: 'Sb', percentage: 80, color: '#3ECF8E' },
  { name: 'Pandas', abbr: 'Pd', percentage: 85, color: '#150458' },
  { name: 'Jupyter', abbr: 'Jp', percentage: 82, color: '#F37626' },
  { name: 'Git', abbr: 'Git', percentage: 78, color: '#F05032' },
  { name: 'Looker', abbr: 'Lk', percentage: 75, color: '#4285F4' },
];

const CircularProgress = ({ percentage, abbr, color }) => {
  const radius = 36;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="circular-progress">
      <svg width="90" height="90" viewBox="0 0 90 90">
        <circle
          cx="45"
          cy="45"
          r={radius}
          fill="none"
          stroke="var(--border-color)"
          strokeWidth="6"
        />
        <circle
          cx="45"
          cy="45"
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth="6"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          transform="rotate(-90 45 45)"
          className="progress-circle"
        />
      </svg>
      <div className="circular-progress-content">
        <span className="circular-abbr" style={{ color }}>{abbr}</span>
        <span className="circular-percentage">{percentage}%</span>
      </div>
    </div>
  );
};

const Tools = () => {
  return (
    <section id="tools" className="tools">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            Mis <span className="italic">Herramientas</span>
          </h2>
          <div className="section-divider">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <p className="section-subtitle">
            El software y plataformas que uso diariamente para transformar datos en insights.
          </p>
        </div>

        <div className="tools-grid card">
          {toolsData.map((tool, index) => (
            <div key={index} className="tool-item">
              <CircularProgress 
                percentage={tool.percentage} 
                abbr={tool.abbr} 
                color={tool.color}
              />
              <span className="tool-name">{tool.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tools;
