import React from 'react';
import { motion } from 'motion/react';
import Badge from './Badge';
import Tape from './Tape';

export default function About() {
  // Define unfolding polygon paths to simulate paper unfolding
  const clipVariants = {
    hidden: { 
      clipPath: 'polygon(45% 45%, 55% 45%, 55% 55%, 45% 55%)' 
    },
    visible: { 
      clipPath: 'polygon(-5% -5%, 105% -5%, 105% 105%, -5% 105%)',
      transition: { 
        duration: 1.2, 
        ease: [0.76, 0, 0.24, 1], // Custom cubic-bezier for snappy, physical feel
        delay: 0.1
      }
    }
  };

  return (
    <section 
      id="about" 
      className="relative min-h-screen py-24 px-4 md:px-8 bg-dark-pure text-white overflow-hidden border-b-4 border-dark-pure"
    >
      {/* Decorative Blueprint/Graph background Grid */}
      <div className="absolute inset-0 graph-paper opacity-5 pointer-events-none" />
      
      {/* Absolute floating background accents */}
      <div className="absolute top-10 left-10 text-[10vw] font-display font-black text-white/5 uppercase select-none pointer-events-none">
        MANIFESTO
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        
        {/* Kinetic Title */}
        <div className="mb-16">
          <motion.div
            initial={{ x: -80, opacity: 0, rotate: -2 }}
            whileInView={{ x: 0, opacity: 1, rotate: -1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="inline-block"
          >
            <h2 className="text-4xl sm:text-6xl font-display font-black tracking-tight bg-lime-vibrant text-dark-pure px-6 py-3 uppercase border-3 border-white shadow-[6px_6px_0px_rgba(255,107,107,0.8)]">
              MINHA FILOSOFIA 👁️
            </h2>
          </motion.div>
        </div>

        {/* Core Layout: Grid representation of a printed Fanzine spread */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Interactive Clip-path Reveal Graphic */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            
            {/* Visual Guide Label */}
            <div className="absolute -top-6 -left-2 z-20">
              <Badge type="stamp" text="★ RETENÇÃO ★" color="#FF6B6B" textColor="#FF6B6B" rotation={-6} />
            </div>

            {/* Main Outer paper border frame */}
            <div className="w-full aspect-[4/5] max-w-sm bg-coral-vibrant p-3 border-3 border-white shadow-[10px_10px_0px_#7C3AED] relative rotate-[-2deg]">
              
              <Tape color="green" className="w-36 -top-5 left-8" rotation={-12} />

              {/* Clip-Path Reveal Outer Container */}
              <motion.div
                variants={clipVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-150px' }}
                className="w-full h-full bg-sand-base border-2 border-dark-pure overflow-hidden relative flex flex-col justify-between p-6 text-dark-pure"
              >
                {/* Visual paper folds lines mapping */}
                <div className="absolute inset-0 border border-dashed border-dark-pure/15 pointer-events-none" />
                <div className="absolute top-1/2 left-0 right-0 h-px border-t border-dashed border-dark-pure/20 pointer-events-none" />
                <div className="absolute top-0 bottom-0 left-1/2 w-px border-l border-dashed border-dark-pure/20 pointer-events-none" />

                {/* Top of Folder Graphic */}
                <div className="relative z-10 flex justify-between items-start">
                  <span className="font-mono text-xs font-bold bg-dark-pure text-white px-2 py-0.5">ESTRATÉGIA VIVA</span>
                  <span className="text-xs font-typewriter">FOCO DO USUÁRIO</span>
                </div>

                {/* Middle: Weskley Gomes Photo */}
                <div className="relative z-10 flex-1 w-full my-4">
                  <div className="w-full h-full bg-dark-pure border-3 border-dark-pure overflow-hidden relative shadow-[8px_8px_0px_#0B0B0F] rotate-[-1deg]">
                    <img 
                      src="https://i.imgur.com/A7gEFvt.png" 
                      alt="Weskley Gomes" 
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center grayscale-[5%] contrast-[105%]"
                    />
                    {/* Retro dashed line inside to frame it */}
                    <div className="absolute inset-2.5 border border-dashed border-white/30 pointer-events-none" />
                  </div>
                </div>

                {/* Bottom caption of Graphic */}
                <div className="relative z-10">
                  <p className="font-typewriter text-[11px] text-center uppercase tracking-tight leading-none text-dark-pure">
                    "O site certo coloca o cliente qualificado em contato com você. <br/>Mais vendas, menos esforço."
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Secondary absolute sticker underneath frame */}
            <div className="absolute -bottom-6 -right-2 z-20">
              <Badge type="starburst" text="FALTA VENDAS?" color="#7C3AED" textColor="#FFFFFF" rotation={15} />
            </div>
          </div>

          {/* Right Column: Narrative / Manifesto */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Manifesto Statement Cards */}
            <div className="space-y-6">
              
              <div className="relative">
                <span className="font-typewriter text-xs text-lime-vibrant tracking-wider uppercase block mb-1">
                  // GARANTIA DE NOVOS CLIENTES
                </span>
                <h3 className="text-2xl sm:text-3xl font-display font-black text-white leading-tight uppercase">
                  SEU PRODUTO MERECE SER COMPRADO. <br />
                  CRIO <span className="text-coral-vibrant underline decoration-wavy decoration-3">MÁQUINAS DE ATRAÇÃO</span> QUE CONVERTEM VISITANTES EM CLIENTES PAGANTES.
                </h3>
              </div>

              {/* Textured Letter-style sheet */}
              <div className="bg-white text-dark-pure p-6 md:p-8 border-3 border-white shadow-[6px_6px_0px_#C6FF00] rotate-[0.5deg] relative font-sans leading-relaxed">
                <Tape color="yellow" className="w-24 -top-4 -right-2" rotation={5} />
                
                <h4 className="font-display font-black text-lg mb-4 border-b-2 border-dark-pure pb-2 uppercase flex items-center justify-between">
                  <span>SISTEMA DE ATRAÇÃO DE CLIENTES</span>
                  <span className="font-mono text-xs text-dark-pure/50">[DIRETRIZES]</span>
                </h4>

                <div className="space-y-4 font-semibold text-sm md:text-base">
                  <p>
                    <span className="bg-purple-electric text-white px-2 py-0.5 rounded-sm mr-2">01</span>
                    <strong className="uppercase">Paralise a Rolagem (Stop Scroll).</strong> Sites comuns parecem templates repetitivos e frios. Um layout impactante e focado em vendas força o cliente a parar o scroll e ler sua proposta até o fim.
                  </p>
                  <p>
                    <span className="bg-coral-vibrant text-white px-2 py-0.5 rounded-sm mr-2">02</span>
                    <strong className="uppercase">Clareza no Caminho de Venda.</strong> Um site bonito sem estratégia é apenas enfeite. Eu estruturo caminhos e gatilhos que guiam a atenção do visitante direto para o seu WhatsApp ou formulário pronto para comprar.
                  </p>
                  <p>
                    <span className="bg-lime-vibrant text-dark-pure px-2 py-0.5 rounded-sm mr-2">03</span>
                    <strong className="uppercase">Velocidade Extrema & Impacto.</strong> Páginas lentas custam faturamento. Desenvolvo experiências ultraleves e otimizadas que carregam instantaneamente no celular e desktop para capturar 100% dos leads.
                  </p>
                </div>
              </div>

              {/* Typewriter details */}
              <div className="border-2 border-dashed border-white/20 p-4 font-typewriter text-xs text-white/70 space-y-2 rotate-[-1deg]">
                <p>
                  &gt; TECNOLOGIAS: REACT / TAILWIND CSS / MOTION DESIGN DE ALTA PERFORMANCE
                </p>
                <p>
                  &gt; MÉTRICAS EM FOCO: ANALISANDO COMPORTAMENTO DO USUÁRIO, CLIQUES E MAPAS DE CALOR
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
