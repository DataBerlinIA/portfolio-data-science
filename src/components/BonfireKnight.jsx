import React from 'react';
import './BonfireKnight.css';

const BonfireKnight = () => {
  return (
    <div className="bonfire-scene">
      {/* Ambient glow */}
      <div className="bonfire-glow"></div>
      
      {/* Floating embers/particles */}
      <div className="embers">
        {[...Array(8)].map((_, i) => (
          <div key={i} className={`ember ember-${i + 1}`}></div>
        ))}
      </div>

      {/* Solaire of Astora - Praise the Sun */}
      <div className="solaire-container">
        <img 
          src="/images/solaire.png" 
          alt="Solaire of Astora - Praise the Sun" 
          className="solaire-image"
        />
      </div>

      {/* Perseverancia */}
      <p className="bonfire-quote">
        <span className="code-style">{'{ perseverancia }'}</span>
      </p>
    </div>
  );
};

export default BonfireKnight;
