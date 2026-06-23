import React from 'react';

interface BadgeProps {
  type: 'stamp' | 'starburst' | 'circle-seal' | 'arrow' | 'do-not-feed' | 'handcrafted';
  text?: string;
  color?: string;
  textColor?: string;
  className?: string;
  rotation?: number;
}

export default function Badge({
  type,
  text = 'VISUAL CHAOS',
  color = '#C6FF00', // lime green default
  textColor = '#0B0B0F',
  className = '',
  rotation = 0
}: BadgeProps) {
  const rotationStyle = rotation !== 0 ? { transform: `rotate(${rotation}deg)` } : {};

  if (type === 'stamp') {
    return (
      <div
        className={`inline-block select-none pointer-events-none p-1 md:p-2 border-4 border-dashed border-dark-pure rounded bg-white shadow-md ${className}`}
        style={{
          ...rotationStyle,
          borderColor: textColor,
        }}
      >
        <div 
          className="text-xs md:text-sm font-typewriter uppercase tracking-wider px-2 py-1 text-center font-bold"
          style={{ color: textColor }}
        >
          {text}
        </div>
      </div>
    );
  }

  if (type === 'starburst') {
    return (
      <div
        className={`relative w-24 h-24 md:w-28 md:h-28 flex items-center justify-center select-none ${className}`}
        style={rotationStyle}
      >
        {/* Jagged Starburst Background */}
        <svg
          viewBox="0 0 100 100"
          className="absolute inset-0 w-full h-full animate-spin-slow"
          style={{ fill: color, stroke: textColor, strokeWidth: 3 }}
        >
          <path d="M50 0 L58 15 L74 6 L72 24 L88 20 L80 37 L95 38 L82 50 L95 62 L80 63 L88 80 L72 76 L74 94 L58 85 L50 100 L42 85 L26 94 L28 76 L12 80 L20 63 L5 62 L18 50 L5 38 L20 37 L12 20 L28 24 L26 6 L42 15 Z" />
        </svg>
        <span
          className="absolute text-[9px] md:text-[11px] font-display text-center font-black uppercase tracking-tight leading-none px-2 select-none z-10"
          style={{ color: textColor }}
        >
          {text}
        </span>
      </div>
    );
  }

  if (type === 'circle-seal') {
    return (
      <div
        className={`relative w-20 h-20 md:w-24 md:h-24 flex items-center justify-center select-none rounded-full border-4 border-double shadow-sm ${className}`}
        style={{
          ...rotationStyle,
          backgroundColor: color,
          borderColor: textColor,
        }}
      >
        <div className="absolute inset-1 rounded-full border border-dashed" style={{ borderColor: textColor }} />
        <div className="flex flex-col items-center justify-center text-center p-2 z-10">
          <span className="text-[10px] md:text-xs font-typewriter font-bold" style={{ color: textColor }}>
            ★ ★ ★
          </span>
          <span className="text-[9px] md:text-[10px] font-display font-black leading-none uppercase tracking-wide my-1" style={{ color: textColor }}>
            {text}
          </span>
          <span className="text-[8px] font-mono opacity-85" style={{ color: textColor }}>
            2026.ED
          </span>
        </div>
      </div>
    );
  }

  if (type === 'arrow') {
    return (
      <div className={`w-16 h-16 md:w-20 md:h-20 select-none ${className}`} style={rotationStyle}>
        <svg viewBox="0 0 100 100" className="w-full h-full" style={{ fill: 'none', stroke: color, strokeWidth: 8, strokeLinecap: 'round', strokeLinejoin: 'round' }}>
          {/* Handdrawn look arrow */}
          <path d="M15 85 C 30 75, 45 40, 80 15" />
          <path d="M50 15 L80 15 L80 45" />
          {/* Scribbled details */}
          <path d="M18 88 C 22 86, 26 84, 30 82" strokeWidth={4} opacity={0.6} />
        </svg>
      </div>
    );
  }

  if (type === 'do-not-feed') {
    return (
      <div
        className={`bg-dark-pure text-white p-3 border-2 border-white shadow-xl flex flex-col items-center select-none justify-center rounded-sm max-w-[160px] ${className}`}
        style={rotationStyle}
      >
        <div className="bg-coral-vibrant text-dark-pure font-display font-black text-xs px-2 py-0.5 mb-1 text-center w-full">
          FOCO EM VENDAS
        </div>
        <p className="font-typewriter text-[10px] text-center uppercase tracking-tighter leading-tight text-white/90">
          DESIGN DE ALTA CONVERSÃO & PERFORMANCE
        </p>
      </div>
    );
  }

  // handcrafted stamp
  return (
    <div
      className={`border-3 border-dark-pure py-1 px-3 uppercase text-xs md:text-sm font-display font-black inline-flex items-center gap-1 bg-white shadow-[3px_3px_0px_#0B0B0F] ${className}`}
      style={rotationStyle}
    >
      <span className="w-2.5 h-2.5 rounded-full bg-coral-vibrant" />
      <span>{text}</span>
    </div>
  );
}
