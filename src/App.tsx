import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import InteractiveRobot from './components/InteractiveRobot';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Strategy from './components/Strategy';
import Plans from './components/Plans';
import Contact from './components/Contact';

export default function App() {
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    // Check user's native system preference for reduced motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsReducedMotion(mediaQuery.matches);
    
    const changeListener = (e: MediaQueryListEvent) => {
      setIsReducedMotion(e.matches);
    };
    
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', changeListener);
    } else if (mediaQuery.addListener) {
      mediaQuery.addListener(changeListener);
    }

    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener('change', changeListener);
      } else if (mediaQuery.removeListener) {
        mediaQuery.removeListener(changeListener);
      }
    };
  }, []);

  return (
    <div className={`relative min-h-screen bg-sand-base selection:bg-lime-vibrant selection:text-dark-pure overflow-x-hidden ${isReducedMotion ? 'reduced-motion-active' : ''}`}>
      
      {/* 1. Subtle global paper grain texture overlay */}
      <div className="paper-grain" />

      {/* Main Portfolio Sections */}
      <main className="relative">
        <Hero />
        <About />
        <Projects />
        <Strategy />
        <Plans />
        <Contact />
      </main>

      {/* Interactive 3D Robot Buddy */}
      <InteractiveRobot />

      {/* Floating Accessibility Control Widget (Manually toggle Reduced Motion) */}
      <div className="fixed bottom-4 left-4 z-40 select-none">
        <button
          onClick={() => setIsReducedMotion(!isReducedMotion)}
          data-cursor-text={isReducedMotion ? 'LIGAR' : 'DESLIGAR'}
          className={`cursor-pointer border-2 border-dark-pure px-3 py-2 text-[10px] font-display font-black shadow-[3px_3px_0px_#0B0B0F] hover:shadow-none transition-all uppercase flex items-center gap-1.5 ${
            isReducedMotion 
              ? 'bg-coral-vibrant text-white rotate-[-2deg]' 
              : 'bg-white text-dark-pure hover:bg-lime-vibrant rotate-[1deg]'
          }`}
        >
          <span className="relative flex h-2 w-2">
            <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${isReducedMotion ? 'bg-white' : 'bg-purple-electric'}`}></span>
            <span className={`relative inline-flex rounded-full h-2 w-2 ${isReducedMotion ? 'bg-white' : 'bg-purple-electric'}`}></span>
          </span>
          <span>{isReducedMotion ? 'Animações: Off 🔇' : 'Animações: On ⚡'}</span>
        </button>
      </div>
    </div>
  );
}
