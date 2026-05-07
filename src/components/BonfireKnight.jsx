import React from 'react';
import './BonfireKnight.css';

const BonfireKnight = () => {
  return (
    <div className="bonfire-scene">
      {/* Top row: Solaire + Bonfire side by side */}
      <div className="bonfire-row">
        {/* Solaire of Astora */}
        <img 
          src="/images/solaire.png" 
          alt="Solaire of Astora - Praise the Sun" 
          className="solaire-image"
        />
        
        {/* Bonfire to the right */}
        <div className="bonfire">
          {/* Coiled sword */}
          <svg className="coiled-sword" viewBox="0 0 40 70" fill="none">
            <ellipse cx="20" cy="65" rx="18" ry="5" fill="#3d3d3d"/>
            <path d="M20 8L20 55" stroke="#5a5a5a" strokeWidth="3"/>
            <path d="M12 18L20 8L28 18" stroke="#5a5a5a" strokeWidth="2.5" fill="none"/>
            <circle cx="20" cy="8" r="4" fill="#6a6a6a"/>
          </svg>
          
          {/* Fire layers */}
          <div className="fire">
            <div className="flame flame-1"></div>
            <div className="flame flame-2"></div>
            <div className="flame flame-3"></div>
          </div>
          
          {/* Embers */}
          <div className="bonfire-embers">
            {[...Array(6)].map((_, i) => (
              <div key={i} className={`ember ember-${i + 1}`}></div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Text below */}
      <span className="motto-text">perseverancia en el codigo</span>
    </div>
  );
};

export default BonfireKnight;
