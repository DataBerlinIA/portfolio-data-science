import React from 'react';
import './Tools.css';

const toolsData = [
  { name: 'Google AI Studio', abbr: 'AI', percentage: 90, color: '#4285F4' },
  { name: 'Vercel', abbr: 'Vc', percentage: 88, color: '#000000' },
  { name: 'Supabase', abbr: 'Sb', percentage: 85, color: '#3ECF8E' },
  { name: 'PostgreSQL', abbr: 'SQL', percentage: 88, color: '#336791' },
  { name: 'Python', abbr: 'Py', percentage: 85, color: '#3776AB' },
  { name: 'Power BI', abbr: 'PBI', percentage: 90, color: '#F2C811' },
  { name: 'Excel Advanced', abbr: 'Ex', percentage: 85, color: '#217346' },
  { name: 'Odoo', abbr: 'Od', percentage: 80, color: '#714B67' },
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
            My <span className="italic">Tools</span>
          </h2>
          <div className="section-divider">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <p className="section-subtitle">
            Software and platforms I use daily to build AI-powered solutions and data insights.
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
