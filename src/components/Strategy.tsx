import React, { useRef } from 'react';
import { motion, useScroll, useVelocity, useSpring, useTransform } from 'motion/react';
import Tape from './Tape';
import Badge from './Badge';

export default function Strategy() {
  const containerRef = useRef<HTMLDivElement>(null);

  // --- INFINITE MARQUEE WITH SCROLL VELOCITY ---
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 300
  });

  const marqueeOffset1 = useTransform(smoothVelocity, [-3000, 3000], [-350, 350]);
  const marqueeOffset2 = useTransform(smoothVelocity, [-3000, 3000], [350, -350]);

  return (
    <section 
      id="strategy" 
      ref={containerRef}
      className="relative py-12 bg-sand-base border-b-4 border-dark-pure overflow-hidden select-none"
    >
      {/* Decorative Blueprint elements */}
      <div className="absolute inset-0 halftone-dots pointer-events-none" />

      {/* --- INFINITE SPEEDING MARQUEE SECTIONS --- */}
      <div className="relative mb-10 flex flex-col gap-4 overflow-hidden py-4 select-none">
        
        {/* Ribbon 1: Moving Left */}
        <div className="bg-purple-electric border-y-3 border-dark-pure py-4 rotate-[1.5deg] relative z-10 shadow-[0_4px_10px_rgba(124,58,237,0.3)] overflow-hidden">
          <motion.div 
            style={{ x: marqueeOffset1 }}
            className="flex whitespace-nowrap gap-12 font-display text-2xl md:text-4xl text-white font-black uppercase"
          >
            {Array.from({ length: 6 }).map((_, i) => (
              <span key={i} className="flex gap-12 items-center">
                <span>SITES QUE VENDEM</span> <span className="text-lime-vibrant">✦</span>
                <span>DESIGN DE IMPACTO</span> <span className="text-coral-vibrant">✦</span>
                <span>TAXA DE CONVERSÃO</span> <span className="text-white">✦</span>
                <span>SEO AVANÇADO</span> <span className="text-lime-vibrant">✦</span>
                <span>ANÁLISE DE MÉTRICAS</span> <span className="text-coral-vibrant">✦</span>
              </span>
            ))}
          </motion.div>
        </div>

        {/* Ribbon 2: Moving Right */}
        <div className="bg-lime-vibrant border-y-3 border-dark-pure py-4 rotate-[-1.5deg] relative z-10 shadow-[0_4px_10px_rgba(198,255,0,0.3)] overflow-hidden">
          <motion.div 
            style={{ x: marqueeOffset2 }}
            className="flex whitespace-nowrap gap-12 font-display text-2xl md:text-4xl text-dark-pure font-black uppercase"
          >
            {Array.from({ length: 6 }).map((_, i) => (
              <span key={i} className="flex gap-12 items-center">
                <span>LANDING PAGES</span> <span className="text-purple-electric">✦</span>
                <span>GATILHOS MENTAIS</span> <span className="text-coral-vibrant">✦</span>
                <span>CARREGAMENTO ULTRA-RÁPIDO</span> <span className="text-white">✦</span>
                <span>CRIAÇÃO DE VALOR</span> <span className="text-purple-electric">✦</span>
                <span>ESTRATÉGIA COMERCIAL</span> <span className="text-coral-vibrant">✦</span>
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* --- PREMIUM STRATEGIC DIFFERENTIALS BENTO GRID --- */}
      <div className="container mx-auto max-w-7xl px-4 md:px-8 relative z-20">
        
        {/* Section Header */}
        <div className="mb-12 text-center lg:text-left">
          <span className="font-typewriter text-xs text-purple-electric uppercase tracking-widest">ESTRATÉGIA DE VENDAS</span>
          <h3 className="text-4xl sm:text-6xl font-display font-black text-dark-pure uppercase tracking-tight">
            ESTRUTURA DE ALTA CONVERSÃO
          </h3>
          <p className="font-sans font-semibold text-base text-dark-pure/70 max-w-xl mt-3">
            Chega de sites institucionais frios. Conheça as engrenagens e diferenciais estratégicos que transformam visitantes casuais em clientes qualificados.
          </p>
        </div>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Card 1: Copywriting (4 cols on lg) */}
          <div className="lg:col-span-4 bg-white border-3 border-dark-pure p-6 shadow-[6px_6px_0px_#0B0B0F] relative rotate-[-1deg] flex flex-col justify-between min-h-[250px]">
            <Tape color="yellow" className="w-24 -top-4 left-6" rotation={-6} />
            <div>
              <span className="font-mono text-[10px] text-dark-pure/50 font-bold block mb-1">MÉTODO 01</span>
              <h4 className="font-display font-black text-2xl text-dark-pure uppercase leading-none mb-3">
                COPYWRITING PERSUASIVO ✍️
              </h4>
              <p className="font-sans text-xs md:text-sm text-dark-pure/80 leading-relaxed">
                Toda palavra importa. A estrutura do seu site é escrita focando nas principais dores, desejos e quebras de objeções do seu público-alvo, estimulando a tomada de decisão rápida.
              </p>
            </div>
            <div className="mt-4 border-t border-dashed border-dark-pure/20 pt-3 flex justify-between items-center text-[10px] font-mono text-dark-pure/50">
              <span>ESTRUTURA COMPORTAMENTAL</span>
              <span>VALOR MÁXIMO</span>
            </div>
          </div>

          {/* Card 2: Ultra Fast (8 cols on lg) */}
          <div className="lg:col-span-8 bg-lime-vibrant border-3 border-dark-pure p-6 shadow-[6px_6px_0px_#0B0B0F] relative rotate-[1deg] flex flex-col justify-between min-h-[250px]">
            <Tape color="coral" className="w-28 -top-4 right-12" rotation={4} />
            <div>
              <div className="flex justify-between items-start mb-1">
                <span className="font-mono text-[10px] text-dark-pure/60 font-bold">MÉTODO 02</span>
                <span className="bg-dark-pure text-lime-vibrant font-display font-black text-[9px] px-2 py-0.5 rounded uppercase">VELOCIDADE MÁXIMA</span>
              </div>
              <h4 className="font-display font-black text-2xl sm:text-3xl text-dark-pure uppercase leading-none mb-4">
                CARREGAMENTO EM MENOS DE 1 SEGUNDO ⚡
              </h4>
              <p className="font-sans text-xs md:text-sm text-dark-pure/90 leading-relaxed max-w-2xl">
                Seu site otimizado no nível máximo para passar nos testes mais rigorosos do Google Core Web Vitals. Isso significa que as suas campanhas de tráfego pago (Google Ads, Meta Ads) gastam menos por clique e retêm o máximo de visitantes possíveis, melhorando drasticamente o seu ROI.
              </p>
            </div>
            <div className="mt-4 border-t border-dashed border-dark-pure/30 pt-3 flex justify-between items-center text-[10px] font-mono text-dark-pure/60">
              <span>RASTREAMENTO & DESEMPENHO</span>
              <span>CARGA ULTRA-RÁPIDA</span>
            </div>
          </div>

          {/* Card 3: Exclusive Design (6 cols on lg) */}
          <div className="lg:col-span-6 bg-purple-electric text-white border-3 border-dark-pure p-6 shadow-[6px_6px_0px_#FF6B6B] relative rotate-[-0.5deg] flex flex-col justify-between min-h-[250px]">
            <Tape color="green" className="w-24 -top-4 left-1/3" rotation={-3} />
            <div>
              <span className="font-mono text-[10px] text-white/60 font-bold block mb-1">MÉTODO 03</span>
              <h4 className="font-display font-black text-2xl text-white uppercase leading-none mb-3">
                DESIGN AUTORAL E PREMIUM 👁️
              </h4>
              <p className="font-sans text-xs md:text-sm text-white/90 leading-relaxed">
                Chega de templates genéricos e engessados. Desenvolvemos interfaces autênticas e totalmente customizadas para a sua marca se destacar da concorrência e passar credibilidade imediata ao primeiro olhar.
              </p>
            </div>
            <div className="mt-4 border-t border-dashed border-white/20 pt-3 flex justify-between items-center text-[10px] font-mono text-white/50">
              <span>IDENTIDADE AUTÊNTICA</span>
              <span>ALTO IMPACTO VISUAL</span>
            </div>
          </div>

          {/* Card 4: Web Analytics & Conversion (6 cols on lg) */}
          <div className="lg:col-span-6 bg-white border-3 border-dark-pure p-6 shadow-[6px_6px_0px_#0B0B0F] relative rotate-[0.5deg] flex flex-col justify-between min-h-[250px] lined-paper">
            <div>
              <div className="flex justify-between items-start mb-1">
                <span className="font-mono text-[10px] text-dark-pure/50 font-bold">MÉTODO 04</span>
                <Badge type="stamp" text="CONVERSÃO" textColor="#FF6B6B" rotation={4} className="scale-75 -mt-2 -mr-3" />
              </div>
              <h4 className="font-display font-black text-2xl text-dark-pure uppercase leading-none mb-3">
                MÉTRICAS E RASTREAMENTO INTELIGENTE 📊
              </h4>
              <p className="font-sans text-xs md:text-sm text-dark-pure/80 leading-relaxed">
                Integração nativa com Pixel do Facebook, Google Tag Manager, APIs de Conversão e webhooks. Metrifique cada ação realizada pelo visitante para analisar perfeitamente o comportamento e otimizar suas vendas.
              </p>
            </div>
            <div className="mt-4 border-t border-dashed border-dark-pure/20 pt-3 flex justify-between items-center text-[10px] font-mono text-dark-pure/50">
              <span>GOOGLE ANALYTICS & META</span>
              <span>RASTREIO DE RESULTADO</span>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}
