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

        {/* Oscar de Astora - Elite Knight Armor */}
        <g className="knight">
          {/* Cape/Cloak flowing - blue tint like Astora */}
          <path className="knight-cape" d="M42 148 Q30 130 35 110 Q40 95 52 92 L58 98 Q45 108 43 125 Q42 138 45 148 Z" />
          
          {/* Body/Elite Knight Armor - silver/steel color */}
          <path d="M48 148 L52 110 Q58 95 68 100 L72 148 Z" fill="#6b7280"/>
          
          {/* Chest plate detail */}
          <path d="M54 115 L66 115 L64 130 L56 130 Z" fill="#9ca3af" opacity="0.5"/>
          
          {/* Shoulder pauldrons - larger elite style */}
          <ellipse cx="58" cy="100" rx="10" ry="6" fill="#9ca3af"/>
          <path d="M48 98 Q52 94 58 96" stroke="#6b7280" strokeWidth="1" fill="none"/>
          
          {/* Oscar's Elite Knight Helmet */}
          <g className="knight-head">
            {/* Helmet base */}
            <path d="M50 92 Q48 78 60 72 Q72 78 70 92 Q70 100 60 103 Q50 100 50 92 Z" fill="#9ca3af"/>
            {/* Helmet face plate */}
            <path d="M52 85 Q52 78 60 76 Q68 78 68 85 Q68 92 60 95 Q52 92 52 85 Z" fill="#6b7280"/>
            {/* Visor slits - cross pattern like Elite Knight */}
            <path d="M54 84 L66 84" stroke="#1f2937" strokeWidth="1.5"/>
            <path d="M56 81 L56 88" stroke="#1f2937" strokeWidth="1"/>
            <path d="M64 81 L64 88" stroke="#1f2937" strokeWidth="1"/>
            {/* Helmet ridge/crest */}
            <path d="M60 72 L60 68 Q62 65 60 62" stroke="#9ca3af" strokeWidth="2" fill="none"/>
            {/* Helmet side plates */}
            <path d="M50 88 L47 92 L50 95" stroke="#6b7280" strokeWidth="1.5" fill="none"/>
            <path d="M70 88 L73 92 L70 95" stroke="#6b7280" strokeWidth="1.5" fill="none"/>
          </g>
          
          {/* Arm resting on knee - gauntlet detail */}
          <path d="M68 100 Q78 112 76 124 L72 124 Q73 115 66 106 Z" fill="#6b7280"/>
          
          {/* Gauntlet with finger detail */}
          <path d="M72 124 Q78 122 80 126 Q80 130 74 130 Q70 128 72 124 Z" fill="#9ca3af"/>
          
          {/* Legs - armored greaves */}
          <path d="M52 140 Q60 132 72 140 L78 148 L48 148 Z" fill="#4b5563"/>
          {/* Knee armor */}
          <ellipse cx="62" cy="138" rx="6" ry="4" fill="#6b7280"/>
          
          {/* Oscar's Astora Straight Sword on ground */}
          <g className="knight-sword">
            {/* Blade */}
            <path d="M82 148 L125 120" stroke="#d1d5db" strokeWidth="2.5"/>
            {/* Sword edge highlight */}
            <path d="M84 146 L123 121" stroke="#f3f4f6" strokeWidth="1" opacity="0.6"/>
            {/* Crossguard */}
            <path d="M80 148 L78 145 L84 143 L86 146 Z" fill="#d97706"/>
            {/* Pommel */}
            <circle cx="78" cy="150" r="2" fill="#d97706"/>
            {/* Blade tip */}
            <path d="M125 120 L128 117 L126 121 Z" fill="#d1d5db"/>
          </g>
          
          {/* Crest Shield on back - Astora's signature */}
          <g className="astora-shield">
            <ellipse cx="45" cy="115" rx="8" ry="12" fill="#1e40af" stroke="#9ca3af" strokeWidth="1"/>
            {/* Shield emblem - sun pattern */}
            <circle cx="45" cy="113" r="4" fill="#fbbf24" opacity="0.8"/>
            <path d="M45 107 L45 104 M45 119 L45 122 M39 113 L36 113 M51 113 L54 113" 
                  stroke="#fbbf24" strokeWidth="1" opacity="0.6"/>
          </g>
        </g>

        {/* Subtle light reflection on knight */}
        <g className="knight-glow">
          <ellipse cx="62" cy="110" rx="18" ry="22" fill="url(#fireLight)" opacity="0.4"/>
        </g>

        {/* Gradient definitions */}
        <defs>
          <radialGradient id="fireLight" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ff6b35" stopOpacity="0.5"/>
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

      {/* Quote - Perseverance theme */}
      <p className="bonfire-quote">Perseverancia</p>
    </div>
  );
};

export default BonfireKnight;
