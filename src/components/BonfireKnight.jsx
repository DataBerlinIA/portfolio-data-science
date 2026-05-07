import React from 'react';
import './BonfireKnight.css';

const BonfireKnight = () => {
  return (
    <div className="bonfire-scene">
      {/* Ambient glow */}
      <div className="bonfire-glow"></div>
      
      {/* Floating embers */}
      <div className="embers">
        {[...Array(8)].map((_, i) => (
          <div key={i} className={`ember ember-${i + 1}`}></div>
        ))}
      </div>

      <svg 
        viewBox="0 0 200 160" 
        className="bonfire-svg"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Ground/Base */}
        <ellipse cx="100" cy="145" rx="70" ry="8" fill="#1a1a2e" opacity="0.5"/>
        
        {/* Bonfire Sword (coiled sword) */}
        <g className="coiled-sword">
          <path d="M100 60 L100 130" stroke="#4a4a5a" strokeWidth="3" strokeLinecap="round"/>
          <path d="M100 60 L95 70 L100 65 L105 70 Z" fill="#5a5a6a"/>
          {/* Sword spiral */}
          <path d="M97 80 Q90 85 97 90 Q104 95 97 100 Q90 105 97 110" 
                stroke="#4a4a5a" strokeWidth="2" fill="none"/>
        </g>

        {/* Fire - Multiple layers with animation */}
        <g className="fire-group">
          {/* Outer glow */}
          <ellipse cx="100" cy="100" rx="25" ry="10" className="fire-glow"/>
          
          {/* Fire base */}
          <g className="fire-base">
            <path className="flame flame-1" d="M85 120 Q75 100 85 80 Q90 90 95 75 Q100 95 100 85 Q100 100 105 75 Q110 90 115 80 Q125 100 115 120 Z" />
            <path className="flame flame-2" d="M88 118 Q80 100 90 85 Q95 95 100 80 Q105 95 110 85 Q120 100 112 118 Z" />
            <path className="flame flame-3" d="M92 115 Q87 100 95 90 Q100 100 105 90 Q113 100 108 115 Z" />
          </g>
          
          {/* Inner bright core */}
          <ellipse cx="100" cy="112" rx="12" ry="6" className="fire-core"/>
        </g>

        {/* Logs/Wood */}
        <g className="fire-logs">
          <path d="M75 125 L90 115 L92 120 L77 128 Z" fill="#3d2817"/>
          <path d="M125 125 L110 115 L108 120 L123 128 Z" fill="#3d2817"/>
          <path d="M85 130 L115 130 L112 135 L88 135 Z" fill="#2d1810"/>
        </g>

        {/* Knight sitting */}
        <g className="knight">
          {/* Cape/Cloak flowing */}
          <path className="knight-cape" d="M45 145 Q35 130 40 115 Q45 105 55 100 L60 105 Q50 115 48 130 Q47 140 50 145 Z" />
          
          {/* Body/Armor */}
          <path d="M50 145 L55 115 Q60 100 70 105 L72 145 Z" fill="#2a3441"/>
          
          {/* Shoulder armor */}
          <ellipse cx="62" cy="105" rx="8" ry="5" fill="#3a4451"/>
          
          {/* Helmet */}
          <g className="knight-head">
            <path d="M55 95 Q55 80 65 78 Q75 80 75 95 Q75 102 65 105 Q55 102 55 95 Z" fill="#3a4451"/>
            {/* Helmet visor slit */}
            <path d="M58 88 L72 88" stroke="#1a1a2e" strokeWidth="2"/>
            {/* Helmet plume/crest */}
            <path d="M65 78 Q65 70 70 68 Q68 75 65 78" fill="#4a5461"/>
          </g>
          
          {/* Arm resting on knee */}
          <path d="M70 105 Q80 115 78 125 L75 125 Q75 118 68 110 Z" fill="#2a3441"/>
          
          {/* Gauntlet */}
          <ellipse cx="77" cy="127" rx="4" ry="3" fill="#3a4451"/>
          
          {/* Legs crossed */}
          <path d="M55 140 Q65 130 75 140 L80 145 L50 145 Z" fill="#252d38"/>
          
          {/* Knight's sword on ground */}
          <g className="knight-sword">
            <path d="M82 145 L120 125" stroke="#5a6570" strokeWidth="2"/>
            <path d="M120 125 L122 122 L125 125 L122 128 Z" fill="#5a6570"/>
            <path d="M82 145 L80 147 L84 147 Z" fill="#4a5460"/>
          </g>
        </g>

        {/* Subtle light reflection on knight */}
        <g className="knight-glow">
          <ellipse cx="65" cy="110" rx="15" ry="20" fill="url(#fireLight)" opacity="0.3"/>
        </g>

        {/* Gradient definitions */}
        <defs>
          <radialGradient id="fireLight" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ff6b35" stopOpacity="0.4"/>
            <stop offset="100%" stopColor="#ff6b35" stopOpacity="0"/>
          </radialGradient>
          
          <linearGradient id="flameGradient1" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#ff4500"/>
            <stop offset="50%" stopColor="#ff6b35"/>
            <stop offset="100%" stopColor="#ffd93d"/>
          </linearGradient>
          
          <linearGradient id="flameGradient2" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#ff6b35"/>
            <stop offset="100%" stopColor="#ffeb3b"/>
          </linearGradient>
          
          <linearGradient id="flameGradient3" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#ffd93d"/>
            <stop offset="100%" stopColor="#fff9c4"/>
          </linearGradient>
        </defs>
      </svg>

      {/* Quote */}
      <p className="bonfire-quote">Sin importar los intentos...</p>
    </div>
  );
};

export default BonfireKnight;
