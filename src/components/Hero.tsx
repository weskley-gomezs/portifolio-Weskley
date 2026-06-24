import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import Tape from './Tape';
import Badge from './Badge';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Capture vertical scroll progress specifically over this Hero container
  const { scrollY } = useScroll();

  // Create parallax scroll transforms for different layers
  const yBg = useTransform(scrollY, [0, 800], [0, 100]);        // Slower background
  const yTitle = useTransform(scrollY, [0, 800], [0, -120]);     // Rapid upwards title
  const yLeftCard = useTransform(scrollY, [0, 800], [0, -50]);    // Moderately fast card
  const yRightCard = useTransform(scrollY, [0, 800], [0, 70]);   // Downward sinking element
  const rStar = useTransform(scrollY, [0, 800], [0, 180]);        // Spinning stamp
  const yDoodle = useTransform(scrollY, [0, 800], [0, -200]);    // Flying arrow/doodle

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-[100vh] lg:min-h-[105vh] flex items-center justify-center pt-24 pb-16 px-4 md:px-8 overflow-hidden bg-sand-base border-b-4 border-dark-pure select-none"
    >
      {/* Decorative Background textures */}
      <div className="absolute inset-0 halftone-dots pointer-events-none" />
      
      {/* Giant Background Watermark Text - Parallax Layer */}
      <motion.div 
        style={{ y: yBg }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 text-[15vw] font-display font-black text-dark-pure/5 leading-none tracking-tighter uppercase whitespace-nowrap pointer-events-none"
      >
        MAIS CLIENTES • 2026
      </motion.div>

      {/* Grid container organizing the chaotic elements */}
      <div className="container mx-auto max-w-7xl relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left Column: Chunky typography & Slogans */}
        <div className="lg:col-span-7 flex flex-col items-start relative">
          
          {/* Decorative stamp on top left */}
          <motion.div 
            style={{ y: yLeftCard }}
            className="absolute -top-16 -left-4 z-20 cursor-grab active:cursor-grabbing draggable-collage-item"
            drag
            dragConstraints={containerRef}
            dragElastic={0.2}
            whileHover={{ scale: 1.1 }}
          >
            <Badge type="stamp" text="★ ACELERAÇÃO DE VENDAS ★" color="#7C3AED" textColor="#7C3AED" rotation={-8} />
          </motion.div>

          {/* Kinetic Titles - moves upward on scroll */}
          <motion.div style={{ y: yTitle }} className="w-full relative z-10 flex flex-col">
            <span className="text-xs md:text-sm font-typewriter font-bold bg-dark-pure text-lime-vibrant px-3 py-1 self-start uppercase mb-4 tracking-wider rotate-[-2deg] shadow-[2px_2px_0px_#0B0B0F] border border-white">
              [ DESIGNER & DESENVOLVEDOR PERSUASIVO ]
            </span>
            
            <h1 className="text-4xl sm:text-7xl xl:text-8xl font-display font-black text-dark-pure tracking-tight leading-[0.9] uppercase">
              SITES FEITOS
              <span className="block text-purple-electric relative">
                PARA GANHAR
                <Tape color="yellow" className="w-32 sm:w-40 md:w-56 -left-4 top-1/2 -translate-y-1/2" rotation={-2} />
              </span>
              CLIENTES.
            </h1>
          </motion.div>

          {/* Slogan details and CTA */}
          <div className="mt-8 relative max-w-xl w-full">
            {/* Interactive draggable sticker label */}
            <motion.div
              drag
              dragConstraints={containerRef}
              className="absolute -top-10 right-4 z-20 cursor-grab active:cursor-grabbing draggable-collage-item scale-75 sm:scale-100"
              whileHover={{ rotate: 5, scale: 1.05 }}
            >
              <Badge type="circle-seal" text="VENDAS DIÁRIAS" color="#FF6B6B" textColor="#0B0B0F" rotation={12} />
            </motion.div>

            <div className="bg-white border-3 border-dark-pure p-4 sm:p-6 shadow-[6px_6px_0px_#0B0B0F] relative rotate-[1deg] lined-paper">
              <p className="font-sans text-sm sm:text-base md:text-lg text-dark-pure leading-relaxed font-semibold">
                Olá, sou o <span className="underline decoration-coral-vibrant decoration-3 font-black">Weskley Gomes</span>. 
                Eu crio sites premium de altíssima performance desenhados especificamente para capturar a atenção de quem quer comprar o seu produto ou serviço e transformá-los em novos clientes reais para a sua empresa.
              </p>
              
              <div className="mt-6 flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
                <a 
                  href="#projects"
                  data-cursor-text="VER TRABALHOS"
                  className="bg-purple-electric hover:bg-dark-pure text-white font-display font-black px-6 py-3.5 border-3 border-dark-pure shadow-[4px_4px_0px_#0B0B0F] hover:shadow-none translate-y-0 hover:translate-x-[4px] hover:translate-y-[4px] transition-all duration-150 uppercase text-xs tracking-wider text-center w-full sm:w-auto"
                >
                  Ver Projetos ⚡
                </a>
                
                <a 
                  href="#contact"
                  data-cursor-text="CONVERSAR"
                  className="bg-lime-vibrant hover:bg-white text-dark-pure font-display font-black px-6 py-3.5 border-3 border-dark-pure shadow-[4px_4px_0px_#0B0B0F] hover:shadow-none translate-y-0 hover:translate-x-[4px] hover:translate-y-[4px] transition-all duration-150 uppercase text-xs tracking-wider text-center w-full sm:w-auto"
                >
                  Falar no WhatsApp ✏️
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Polaroid & Abstract Layers */}
        <div className="lg:col-span-5 relative mt-12 lg:mt-0 flex items-center justify-center min-h-[350px] md:min-h-[450px]">
          
          {/* Sinking element on scroll (Doodle Star) */}
          <motion.div 
            style={{ y: yRightCard, rotate: rStar }}
            className="absolute top-0 right-4 z-20 pointer-events-none"
          >
            <Badge type="starburst" text="DESIGN SELLS" color="#C6FF00" textColor="#0B0B0F" />
          </motion.div>

          {/* Arrow pointing to Polaroid */}
          <motion.div 
            style={{ y: yDoodle }}
            className="absolute -left-12 -bottom-4 z-20 hidden md:block"
          >
            <Badge type="arrow" color="#FF6B6B" rotation={-45} />
          </motion.div>

          {/* Polaroid Card Group - Layered & Draggable */}
          <motion.div
            drag
            dragConstraints={containerRef}
            whileDrag={{ scale: 1.05, zIndex: 40 }}
            whileHover={{ scale: 1.02 }}
            className="w-72 md:w-80 bg-white p-4 pb-8 border-3 border-dark-pure shadow-[10px_10px_0px_#0B0B0F] rotate-[-4deg] relative cursor-grab active:cursor-grabbing z-10 draggable-collage-item"
          >
            {/* Red Tape holding polaroid */}
            <Tape color="coral" className="w-32 -top-5 left-1/2 -translate-x-1/2" rotation={6} />
            
            {/* Visual Frame constructed via raw SVGs to mimic cutout collage */}
            <div className="w-full aspect-square bg-[#ece8df] border-3 border-dark-pure overflow-hidden relative flex items-center justify-center p-6 group">
              <svg viewBox="0 0 100 100" className="w-full h-full filter drop-shadow-[2px_2px_0px_rgba(0,0,0,0.15)] group-hover:scale-105 transition-all duration-350">
                {/* Retro Background Circle */}
                <circle cx="50" cy="50" r="44" fill="#C6FF00" stroke="#0B0B0F" strokeWidth={3} />
                
                {/* Magnet Horseshoe shape attracting elements */}
                <path 
                  d="M 32,72 L 32,48 A 18,18 0 0,1 68,48 L 68,72 L 56,72 L 56,48 A 6,6 0 0,0 44,48 L 44,72 Z" 
                  fill="#FF6B6B" 
                  stroke="#0B0B0F" 
                  strokeWidth={3} 
                />
                {/* Magnet Tips */}
                <rect x="32" y="62" width="12" height="10" fill="#FFFFFF" stroke="#0B0B0F" strokeWidth={3} />
                <rect x="56" y="62" width="12" height="10" fill="#FFFFFF" stroke="#0B0B0F" strokeWidth={3} />
                
                {/* Magnetic field lines */}
                <path d="M 24,40 A 28,28 0 0,1 76,40" fill="none" stroke="#0B0B0F" strokeWidth={2} strokeDasharray="3,3" />
                <path d="M 16,36 A 38,38 0 0,1 84,36" fill="none" stroke="#0B0B0F" strokeWidth={2} strokeDasharray="3,3" />

                {/* Attracted Customer/Smiley icon representing client focus */}
                <circle cx="50" cy="22" r="8" fill="#7C3AED" stroke="#0B0B0F" strokeWidth={2.5} />
                <circle cx="47" cy="20" r="1" fill="#FFFFFF" />
                <circle cx="53" cy="20" r="1" fill="#FFFFFF" />
                <path d="M 46,23 Q 50,26 54,23" fill="none" stroke="#C6FF00" strokeWidth={2} strokeLinecap="round" />

                {/* Stars flying towards magnet */}
                <path d="M 24,20 L 26,24 L 30,25 L 27,28 L 28,32 L 24,30 L 20,32 L 21,28 L 18,25 L 22,24 Z" fill="#FFFFFF" stroke="#0B0B0F" strokeWidth={1.5} />
                <path d="M 76,22 L 78,25 L 82,26 L 79,29 L 80,33 L 76,31 L 72,33 L 73,29 L 70,26 L 74,25 Z" fill="#FFFFFF" stroke="#0B0B0F" strokeWidth={1.5} />

                {/* Spark / force indicator lines */}
                <path d="M 38,32 L 44,40" stroke="#0B0B0F" strokeWidth={2.5} strokeLinecap="round" />
                <path d="M 62,32 L 56,40" stroke="#0B0B0F" strokeWidth={2.5} strokeLinecap="round" />

                {/* Artistic decorative frame */}
                <rect x="5" y="5" width="90" height="90" fill="none" stroke="#0B0B0F" strokeWidth={2} strokeDasharray="4,4" />
              </svg>
              
              {/* Overlay sticker details on hover */}
              <div className="absolute inset-0 bg-dark-pure/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-250 p-4">
                <span className="font-typewriter text-xs text-white text-center leading-normal">
                  "UM DESIGN INTELIGENTE ATRAI OS CLIENTES CERTOS E ACELERA A CONVERSÃO DO SEU NEGÓCIO."
                </span>
              </div>
            </div>

            {/* Polaroid handwritten caption */}
            <div className="mt-4 text-center font-typewriter">
              <span className="text-xs text-dark-pure/60 block mb-1">Foco Total</span>
              <span className="text-sm font-black text-dark-pure uppercase tracking-wide">
                Atração de Clientes 🧲
              </span>
            </div>
          </motion.div>

          {/* Overlapping secondary sticker */}
          <motion.div 
            drag
            dragConstraints={containerRef}
            className="absolute -bottom-6 right-6 z-20 cursor-grab active:cursor-grabbing draggable-collage-item"
            whileHover={{ scale: 1.1, rotate: -5 }}
          >
            <Badge type="do-not-feed" rotation={10} />
          </motion.div>
        </div>

      </div>

      {/* Floating Paper Scrap 1 */}
      <motion.div 
        drag
        dragConstraints={containerRef}
        className="absolute bottom-10 left-12 w-24 h-8 bg-yellow-300 border-2 border-dark-pure rotate-[-12deg] z-0 hidden md:flex items-center justify-center font-typewriter text-[9px] shadow-[2px_2px_0px_#0B0B0F] cursor-grab active:cursor-grabbing draggable-collage-item"
      >
        <span>CONVERSÃO</span>
      </motion.div>

      {/* Floating Paper Scrap 2 */}
      <motion.div 
        drag
        dragConstraints={containerRef}
        className="absolute top-16 right-20 w-28 h-10 bg-purple-200 border-2 border-dark-pure rotate-[15deg] z-0 hidden md:flex items-center justify-center font-mono text-[9px] font-bold shadow-[2px_2px_0px_#0B0B0F] cursor-grab active:cursor-grabbing draggable-collage-item"
      >
        <span>ESTRATÉGIA</span>
      </motion.div>
    </section>
  );
}
