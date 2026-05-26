import React from 'react';
import './Skills.css';

const skillsData = [
  { name: 'AI Agents & Automation', percentage: 90 },
  { name: 'Full-Stack Dev (Vercel & Supabase)', percentage: 85 },
  { name: 'Google AI Studio & LLMs', percentage: 88 },
  { name: 'Python (Pandas, Polars, NumPy)', percentage: 85 },
  { name: 'Power BI DAX & Advanced BI', percentage: 90 },
  { name: 'PostgreSQL & Databases', percentage: 88 },
  { name: 'Odoo ERP (OWL, XML)', percentage: 78 },
];

const radarSkills = [
  { name: 'AI Agents', value: 90 },
  { name: 'Full-Stack Dev', value: 85 },
  { name: 'AI Web Apps', value: 88 },
  { name: 'Data Science', value: 85 },
  { name: 'Advanced BI', value: 90 },
  { name: 'Databases', value: 88 },
];

const SkillBar = ({ name, percentage }) => (
  <div className="skill-bar-item">
    <div className="skill-bar-header">
      <span className="skill-bar-name">{name}</span>
      <span className="skill-bar-percentage">{percentage}%</span>
    </div>
    <div className="skill-bar-track">
      <div 
        className="skill-bar-fill" 
        style={{ width: `${percentage}%` }}
      />
    </div>
  </div>
);

const RadarChart = ({ skills }) => {
  const centerX = 150;
  const centerY = 150;
  const maxRadius = 100;
  const levels = 5;

  // Generate polygon points for a skill set
  const generatePolygonPoints = (values, radius) => {
    const angleStep = (2 * Math.PI) / values.length;
    return values.map((skill, i) => {
      const angle = i * angleStep - Math.PI / 2;
      const r = (skill.value / 100) * radius;
      return {
        x: centerX + r * Math.cos(angle),
        y: centerY + r * Math.sin(angle),
      };
    });
  };

  const dataPoints = generatePolygonPoints(skills, maxRadius);
  const polygonPath = dataPoints.map((p, i) => 
    `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`
  ).join(' ') + ' Z';

  // Generate grid lines
  const gridLevels = Array.from({ length: levels }, (_, i) => {
    const radius = ((i + 1) / levels) * maxRadius;
    const points = skills.map((_, j) => {
      const angle = (j * 2 * Math.PI) / skills.length - Math.PI / 2;
      return {
        x: centerX + radius * Math.cos(angle),
        y: centerY + radius * Math.sin(angle),
      };
    });
    return points.map((p, j) => 
      `${j === 0 ? 'M' : 'L'} ${p.x} ${p.y}`
    ).join(' ') + ' Z';
  });

  // Generate axis lines and labels
  const axisLines = skills.map((skill, i) => {
    const angle = (i * 2 * Math.PI) / skills.length - Math.PI / 2;
    const endX = centerX + maxRadius * Math.cos(angle);
    const endY = centerY + maxRadius * Math.sin(angle);
    const labelX = centerX + (maxRadius + 25) * Math.cos(angle);
    const labelY = centerY + (maxRadius + 25) * Math.sin(angle);
    return { x1: centerX, y1: centerY, x2: endX, y2: endY, labelX, labelY, name: skill.name };
  });

  return (
    <div className="radar-chart-container">
      <svg viewBox="0 0 300 300" className="radar-chart">
        {/* Grid */}
        {gridLevels.map((path, i) => (
          <path
            key={i}
            d={path}
            fill="none"
            stroke="var(--border-color)"
            strokeWidth="1"
            opacity={0.5}
          />
        ))}
        
        {/* Axis lines */}
        {axisLines.map((line, i) => (
          <line
            key={i}
            x1={line.x1}
            y1={line.y1}
            x2={line.x2}
            y2={line.y2}
            stroke="var(--border-color)"
            strokeWidth="1"
            opacity={0.5}
          />
        ))}

        {/* Data polygon */}
        <path
          d={polygonPath}
          fill="rgba(13, 148, 136, 0.2)"
          stroke="var(--accent-teal)"
          strokeWidth="2"
        />

        {/* Data points */}
        {dataPoints.map((point, i) => (
          <circle
            key={i}
            cx={point.x}
            cy={point.y}
            r="4"
            fill="var(--accent-teal)"
          />
        ))}

        {/* Labels */}
        {axisLines.map((line, i) => (
          <text
            key={i}
            x={line.labelX}
            y={line.labelY}
            textAnchor="middle"
            dominantBaseline="middle"
            className="radar-label"
          >
            {line.name}
          </text>
        ))}
      </svg>
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            My <span className="italic">Skills</span>
          </h2>
          <div className="section-divider">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div className="skills-content">
          <div className="skills-bars card">
            <div className="skills-card-header">
              <span className="sparkle-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" fill="currentColor"/>
                </svg>
              </span>
              <h3>Skills Proficiency</h3>
            </div>
            <div className="skills-bars-list">
              {skillsData.map((skill, index) => (
                <SkillBar key={index} name={skill.name} percentage={skill.percentage} />
              ))}
            </div>
          </div>

          <div className="skills-radar card">
            <div className="skills-card-header">
              <span className="sparkle-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" fill="currentColor"/>
                </svg>
              </span>
              <h3>Skills Radar</h3>
            </div>
            <RadarChart skills={radarSkills} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
