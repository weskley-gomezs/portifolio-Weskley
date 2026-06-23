import React from 'react';
import { motion } from 'motion/react';
import Tape from './Tape';
import Badge from './Badge';
import { Project } from '../types';

const PROJECTS_DATA: Project[] = [
  {
    id: 'colegio-reacao',
    title: 'COLÉGIO REAÇÃO',
    category: 'WEBSITE INSTITUCIONAL',
    description: 'Portal educacional moderno projetado estrategicamente para reter a atenção de pais e impulsionar a captação de matrículas.',
    details: [
      'Estrutura visual focada em credibilidade e conversão rápida',
      'Desempenho mobile impecável para navegação rápida de pais',
      'Design limpo com chamadas persuasivas para agendamento de visitas'
    ],
    tags: ['SEO Otimizado', 'Foco em Vendas', 'Experiência Premium', 'Captação de Leads'],
    color: '#C6FF00', // lime green
    tapeColor: 'yellow',
    rotation: -2,
    imageSeed: 'reacao',
    link: 'https://colegioreacao.com',
    image: 'https://i.imgur.com/rI06lYO.png'
  },
  {
    id: 'dl-paper',
    title: 'DL PAPER',
    category: 'LANDING PAGE DE IMPACTO',
    description: 'Experiência visual ousada e altamente interativa para posicionamento de marca premium e atração de leads qualificados.',
    details: [
      'Copywriting altamente focado no desejo de compra do cliente',
      'Animações cinéticas fluidas de alta retenção visual',
      'Otimização máxima de carregamento para tráfego pago'
    ],
    tags: ['Alta Retenção', 'Carregamento Rápido', 'Design Exclusivo', 'Conversão (CRO)'],
    color: '#7C3AED', // electric purple
    tapeColor: 'green',
    rotation: 2,
    imageSeed: 'dlpaper',
    link: 'https://dl-paper.vercel.app/',
    image: 'https://i.imgur.com/7QmNOK3.png'
  }
];

export default function Projects() {
  return (
    <section 
      id="projects" 
      className="relative pt-16 pb-6 bg-sand-base border-b-4 border-dark-pure overflow-hidden select-none"
    >
      {/* Decorative Blueprint elements */}
      <div className="absolute inset-0 halftone-dots pointer-events-none" />

      <div className="container mx-auto max-w-7xl px-4 md:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="mb-12 text-center">
          <span className="font-typewriter text-xs text-purple-electric uppercase tracking-widest">PORTFÓLIO DE IMPACTO</span>
          <h3 className="text-4xl sm:text-6xl font-display font-black text-dark-pure uppercase tracking-tight mt-1">
            CASOS DE SUCESSO
          </h3>
          <p className="font-sans font-semibold text-base text-dark-pure/70 max-w-xl mx-auto mt-3">
            Projetos reais desenhados estrategicamente do zero para gerar valor, credibilidade e impulsionar vendas imediatas.
          </p>
          <div className="w-24 h-1 bg-dark-pure mx-auto mt-4" />
        </div>

        {/* Dynamic Collage Grid - 3 Columns (1 Intro Card, 2 Project Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 items-stretch justify-center max-w-6xl mx-auto">
          
          {/* Intro Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white border-3 border-dark-pure p-8 shadow-[8px_8px_0px_#0B0B0F] rotate-[-1deg] relative flex flex-col justify-between lined-paper min-h-[400px]"
          >
            <Tape color="coral" className="w-28 -top-4 -left-4" rotation={-8} />
            <div>
              <span className="font-typewriter text-xs text-coral-vibrant font-bold block mb-2">ALTA CONVERSÃO</span>
              <h3 className="text-3xl sm:text-4xl font-display font-black text-dark-pure uppercase tracking-tight leading-none mb-4">
                SITES QUE <br />
                VENDEM.
              </h3>
              <p className="font-sans font-semibold text-sm leading-relaxed text-dark-pure/80">
                Chega de sites institucionais frios. Eu crio experiências de conversão visualmente fascinantes e programadas com foco cirúrgico em atrair e convencer clientes todos os dias.
              </p>
            </div>
            
            <div className="mt-6 pt-4 border-t border-dashed border-dark-pure/20 flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <Badge type="stamp" text="ALTO DESEMPENHO" color="#C6FF00" textColor="#0B0B0F" rotation={3} className="text-[9px]" />
              </div>
              <span className="font-mono text-[9px] text-dark-pure/50 uppercase">FEITO PARA ESCALAR NEGÓCIOS</span>
            </div>
          </motion.div>

          {/* Project Cards */}
          {PROJECTS_DATA.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30, rotate: project.rotation * 0.8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, rotate: project.rotation * 1.2 }}
              className="relative flex flex-col"
            >
              {/* Visual Adhesive Tape */}
              <Tape 
                color={project.tapeColor as any} 
                className={`w-36 -top-5 ${idx === 0 ? 'left-6' : 'right-6'}`} 
                rotation={idx === 0 ? -6 : 8} 
              />

              {/* Main Card Frame */}
              <div className="w-full h-full bg-white p-6 pb-8 border-3 border-dark-pure shadow-[8px_8px_0px_#0B0B0F] flex flex-col justify-between">
                
                <div>
                  {/* Category Stamp & Title */}
                  <div className="flex justify-between items-start gap-2 mb-6">
                    <div>
                      <span className="font-mono text-[10px] uppercase text-dark-pure/50 font-bold">PROJETO 0{idx + 1}</span>
                      <h4 className="text-2xl font-display font-black tracking-tight text-dark-pure uppercase leading-none mt-1">
                        {project.title}
                      </h4>
                    </div>
                    <Badge type="stamp" text={project.category} color={project.color} textColor="#0B0B0F" rotation={-4} className="text-[8px]" />
                  </div>

                  {/* Image or SVG Representation Visual Container */}
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="block w-full h-44 bg-dark-pure border-2 border-dark-pure overflow-hidden relative mb-5 group cursor-pointer"
                  >
                    {project.image ? (
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover object-top grayscale-[5%] contrast-[105%] group-hover:scale-105 transition-all duration-350"
                      />
                    ) : (
                      <svg viewBox="0 0 100 100" className="w-full h-full" style={{ backgroundColor: project.color }}>
                        <path d="M0,0 L100,100 M100,0 L0,100" stroke="rgba(0,0,0,0.06)" strokeWidth={3} />
                        
                        {project.id === 'colegio-reacao' && (
                          <>
                            <rect x="25" y="35" width="50" height="40" fill="none" stroke="#0B0B0F" strokeWidth={3} />
                            <polygon points="50,15 90,35 10,35" fill="#7C3AED" stroke="#0B0B0F" strokeWidth={3} />
                            <circle cx="50" cy="55" r="10" fill="#FF6B6B" stroke="#0B0B0F" strokeWidth={2} />
                            <text x="45" y="60" fontFamily="sans-serif" fontSize="14" fontWeight="black" fill="#0B0B0F">R</text>
                          </>
                        )}

                        {project.id === 'dl-paper' && (
                          <>
                            <rect x="22" y="18" width="45" height="55" fill="#FF6B6B" stroke="#0B0B0F" strokeWidth={3} transform="rotate(-6, 50, 50)" />
                            <rect x="33" y="23" width="45" height="55" fill="#C6FF00" stroke="#0B0B0F" strokeWidth={3} transform="rotate(6, 55, 55)" />
                            <text x="40" y="55" fontFamily="sans-serif" fontSize="14" fontWeight="black" fill="#0B0B0F">DL</text>
                          </>
                        )}
                      </svg>
                    )}

                    {/* Retro dashed line inside to frame it */}
                    <div className="absolute inset-2 border border-dashed border-white/30 pointer-events-none" />

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-dark-pure/85 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                      <span className="font-typewriter text-xs text-white text-center leading-normal uppercase">
                        Visitar site ao vivo 🚀
                      </span>
                    </div>
                  </a>

                  {/* Description & Execution details */}
                  <p className="font-sans font-bold text-sm text-dark-pure leading-relaxed mb-4">
                    {project.description}
                  </p>

                  <div className="bg-sand-base/60 p-4 border-2 border-dashed border-dark-pure/20 rounded-sm font-typewriter text-xs text-dark-pure/80">
                    <span className="block font-black uppercase mb-1.5">Dossiê de Execução:</span>
                    <ul className="list-disc pl-4 space-y-1">
                      {project.details.map((detail, dIdx) => (
                        <li key={dIdx}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footer tags and link */}
                <div className="flex flex-col gap-3 mt-5 pt-3 border-t border-dashed border-dark-pure/10">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-[9px] font-mono font-black bg-dark-pure text-white px-2 py-0.5 rounded-sm">
                        #{tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex justify-between items-center mt-1">
                    <span className="text-[10px] font-mono text-dark-pure/40 uppercase">LINK CONFIRMADO</span>
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-xs font-display font-black text-purple-electric hover:underline inline-flex items-center gap-1"
                    >
                      Ver Site 🔗
                    </a>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}
