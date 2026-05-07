import React from 'react';
import './BonfireKnight.css';

const BonfireKnight = () => {
  return (
    <div className="bonfire-scene">
      {/* Subtle background code text */}
      <span className="bg-code">perseverancia</span>
      
      {/* Solaire of Astora */}
      <img 
        src="/images/solaire.png" 
        alt="Solaire of Astora - Praise the Sun" 
        className="solaire-image"
      />
      
      {/* Bonfire below Solaire */}
      <div className="bonfire">
        {/* Coiled sword */}
        <svg className="coiled-sword" viewBox="0 0 40 60" fill="none">
          <path d="M20 5L20 45" stroke="#5a5a5a" strokeWidth="2.5"/>
          <path d="M14 12L20 5L26 12" stroke="#5a5a5a" strokeWidth="2" fill="none"/>
          <circle cx="20" cy="5" r="3" fill="#6a6a6a"/>
          <ellipse cx="20" cy="50" rx="15" ry="5" fill="#4a4a4a"/>
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
  );
};

export default BonfireKnight;
