import React from 'react';
import './BonfireKnight.css';

const BonfireKnight = () => {
  return (
    <div className="bonfire-scene">
      {/* Bonfire with coiled sword */}
      <div className="bonfire">
        {/* Coiled sword */}
        <svg className="coiled-sword" viewBox="0 0 40 60" fill="none">
          <path d="M20 0L20 45" stroke="#4a4a4a" strokeWidth="2"/>
          <path d="M15 8L20 3L25 8" stroke="#4a4a4a" strokeWidth="2" fill="none"/>
          <path d="M12 45C12 45 16 40 20 40C24 40 28 45 28 45" stroke="#4a4a4a" strokeWidth="2" fill="none"/>
          <ellipse cx="20" cy="48" rx="12" ry="4" fill="#3d3d3d"/>
        </svg>
        
        {/* Fire layers */}
        <div className="fire">
          <div className="flame flame-1"></div>
          <div className="flame flame-2"></div>
          <div className="flame flame-3"></div>
        </div>
        
        {/* Embers */}
        <div className="bonfire-embers">
          {[...Array(5)].map((_, i) => (
            <div key={i} className={`ember ember-${i + 1}`}></div>
          ))}
        </div>
      </div>

      {/* Solaire of Astora */}
      <div className="solaire-container">
        <img 
          src="/images/solaire.png" 
          alt="Solaire of Astora - Praise the Sun" 
          className="solaire-image"
        />
      </div>

      {/* Perseverancia en codigo */}
      <p className="bonfire-quote">
        <span className="code-style">{'{ perseverancia }'}</span>
      </p>
    </div>
  );
};

export default BonfireKnight;
