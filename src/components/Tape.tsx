import React from 'react';

interface TapeProps {
  color?: 'yellow' | 'coral' | 'green' | 'blue';
  className?: string;
  rotation?: number; // degrees
}

export default function Tape({ color = 'yellow', className = '', rotation = -4 }: TapeProps) {
  const colorMap = {
    yellow: 'bg-yellow-300/60 shadow-[0_2px_4px_rgba(234,179,8,0.15)] border-y border-yellow-400/20',
    coral: 'bg-coral-vibrant/60 shadow-[0_2px_4px_rgba(239,68,68,0.15)] border-y border-coral-vibrant/20',
    green: 'bg-lime-vibrant/60 shadow-[0_2px_4px_rgba(132,204,22,0.15)] border-y border-lime-vibrant/20',
    blue: 'bg-blue-400/60 shadow-[0_2px_4px_rgba(59,130,246,0.15)] border-y border-blue-500/20'
  };

  return (
    <div
      className={`absolute z-30 pointer-events-none select-none h-8 md:h-10 backdrop-blur-[0.5px] ${colorMap[color]} ${className}`}
      style={{
        transform: `rotate(${rotation}deg)`,
        // Generates realistic ragged tape ends using CSS clip-path
        clipPath: 'polygon(0% 12%, 4% 0%, 10% 8%, 15% 2%, 21% 10%, 25% 1%, 32% 9%, 38% 0%, 45% 11%, 50% 3%, 56% 12%, 62% 2%, 68% 10%, 74% 0%, 81% 9%, 87% 3%, 92% 11%, 97% 1%, 100% 10%, 100% 90%, 96% 99%, 91% 89%, 85% 97%, 79% 88%, 73% 98%, 68% 89%, 61% 99%, 55% 91%, 49% 98%, 42% 88%, 36% 97%, 30% 90%, 23% 99%, 17% 88%, 11% 97%, 6% 91%, 0% 100%)',
      }}
    />
  );
}
