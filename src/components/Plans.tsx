import React from 'react';
import { motion } from 'motion/react';
import Tape from './Tape';
import Badge from './Badge';

interface PlanDeliverable {
  text: string;
}

interface Plan {
  id: string;
  category: string;
  badge: string;
  title: string;
  description: string;
  priceType: 'fixed' | 'ondemand';
  originalPrice?: string;
  price?: string;
  priceSub?: string;
  priceNote?: string;
  deliverables: string[];
  buttonText: string;
  whatsappText: string;
  color: string;
  badgeBg: string;
}

const PLANS_DATA: Plan[] = [
  {
    id: 'site-institucional',
    category: 'CATEGORY [81]',
    badge: 'DESTAQUE',
    title: 'SITE INSTITUCIONAL',
    description: 'Presença digital premium para marcas de destaque e empresas inovadoras que buscam consolidação de autoridade, credibilidade corporativa e prospecção constante.',
    priceType: 'fixed',
    originalPrice: 'R$ 997',
    price: 'R$ 697',
    priceSub: 'TAXA ÚNICA',
    priceNote: '*SEM TAXAS MENSAIS OCULTAS OU DEPENDÊNCIAS',
    deliverables: [
      'Website completo e profissional multi-páginas',
      'Otimização extrema para buscas orgânicas do Google',
      'Integrações dedicadas com WhatsApp e CRMs',
      'Adaptabilidade técnica a celulares e tablets',
      'Design sofisticado, sob medida e moderno',
      'Painel intuitivo de atualização de conteúdos (opcional)'
    ],
    buttonText: 'SOLICITAR MEU SITE PROFISSIONAL',
    whatsappText: 'Olá Weskley! Tenho interesse no Site Institucional profissional de R$ 697.',
    color: '#7C3AED', // electric purple
    badgeBg: '#FF6B6B' // coral
  },
  {
    id: 'landing-page',
    category: 'CATEGORY [82]',
    badge: 'ALTA CONVERSÃO',
    title: 'LANDING PAGE DE ALTA CONVERSÃO',
    description: 'Estruturas otimizadas e táticas focadas em um único resultado: transformar cliques de campanhas pagas de visitantes em contatos diretos comerciais no seu WhatsApp.',
    priceType: 'fixed',
    originalPrice: 'R$ 499',
    price: 'R$ 397',
    priceSub: 'TAXA ÚNICA',
    priceNote: '*SEM TAXAS MENSAIS OCULTAS OU DEPENDÊNCIAS',
    deliverables: [
      'Redação persuasiva de elite (Copywriting refinado)',
      'Carregamento cirúrgico com nota máxima no PageSpeed Google',
      'Conexão direta de mensagens otimizadas de WhatsApp',
      'Formulários inteligentes de captura imediata de leads',
      'Estudo de retenção visual e fluidez no funil',
      'Instalação e testes de rastreamento (Pixel Meta, Google Analytics)'
    ],
    buttonText: 'SOLICITAR MINHA LANDING PAGE',
    whatsappText: 'Olá Weskley! Tenho interesse na Landing Page de Alta Conversão de R$ 397.',
    color: '#C6FF00', // lime-vibrant
    badgeBg: '#7C3AED' // electric purple
  },
  {
    id: 'sistema-personalizado',
    category: 'CATEGORY [83]',
    badge: 'CORPORATIVO',
    title: 'SISTEMAS WEB E SAAS PERSONALIZADOS',
    description: 'Sistemas corporativos robustos desenhados end-to-end para as necessidades da sua operação: CRMs próprios, automação de dados e painéis administrativos ultra-velozes.',
    priceType: 'ondemand',
    price: 'Sob Demanda',
    priceSub: 'ESCOPO PLANEJADO APÓS BRIEFING COM O ENGENHEIRO CORPORATIVO',
    deliverables: [
      'Automações eficientes substituindo ferramentas manuais e planilhas',
      'Distribuição de cargos e níveis de acesso (RBAC)',
      'Acesso total a integrações bilaterais de APIs',
      'Dashboard de alta segurança de proteção de dados',
      'Gráficos customizados interativos e controle estatístico',
      'Soluções serverless estáveis de custo zero de manutenção em nuvem'
    ],
    buttonText: 'SOLICITAR ORÇAMENTO PERSONALIZADO',
    whatsappText: 'Olá Weskley! Gostaria de fazer um orçamento para um Sistema Web ou SaaS personalizado.',
    color: '#FF6B6B', // coral
    badgeBg: '#C6FF00' // lime green
  }
];

export default function Plans() {
  return (
    <section 
      id="plans" 
      className="relative py-24 bg-dark-pure text-white overflow-hidden border-b-4 border-dark-pure"
    >
      {/* Blueprint lines / grids inside dark layout to match the zine feel */}
      <div className="absolute inset-0 halftone-dots opacity-20 pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-electric via-coral-vibrant to-lime-vibrant" />

      <div className="container mx-auto max-w-7xl px-4 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-20 text-center">
          <span className="font-typewriter text-xs text-lime-vibrant uppercase tracking-widest block mb-2">
            // ESTRUTURA DE INVESTIMENTO
          </span>
          <h2 className="text-4xl sm:text-6xl font-display font-black text-white uppercase tracking-tight">
            NOSSOS PLANOS DE ACELERAÇÃO
          </h2>
          <p className="font-sans font-semibold text-base text-white/70 max-w-xl mx-auto mt-4 leading-relaxed">
            Escolha a ferramenta certa para o seu momento de mercado. Sem taxas surpresas, sem enrolação. Sites criados para colocar novos clientes no seu bolso.
          </p>
          <div className="w-24 h-1 bg-lime-vibrant mx-auto mt-6" />
        </div>

        {/* Vertical Stack of Beautiful Dark Panels */}
        <div className="space-y-12 max-w-6xl mx-auto">
          {PLANS_DATA.map((plan, index) => {
            const encodedText = encodeURIComponent(plan.whatsappText);
            const whatsappUrl = `https://wa.me/5561996507712?text=${encodedText}`;

            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-[#0d0d12] border-2 border-white/10 hover:border-white/30 p-8 lg:p-12 shadow-[12px_12px_0px_rgba(0,0,0,0.4)] transition-all duration-300"
              >
                {/* Visual Accent Corner Tape or Stickers */}
                {index === 0 && (
                  <Tape color="coral" className="w-28 -top-4 right-12 hidden lg:block" rotation={4} />
                )}
                {index === 1 && (
                  <Tape color="green" className="w-28 -top-4 left-1/4 hidden lg:block" rotation={-3} />
                )}

                {/* Main Content Split: Info left, pricing card right */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  
                  {/* Left Column: Details & Deliverables */}
                  <div className="lg:col-span-7 space-y-6">
                    
                    {/* Category Label */}
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs text-lime-vibrant font-bold tracking-wider">
                        {plan.category}
                      </span>
                      <span 
                        className="text-[10px] font-display font-black px-2.5 py-1 rounded text-dark-pure"
                        style={{ backgroundColor: plan.color }}
                      >
                        {plan.badge}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black tracking-tight leading-none uppercase group-hover:text-lime-vibrant transition-colors duration-200">
                      {plan.title}
                    </h3>

                    {/* Description */}
                    <p className="font-sans text-sm md:text-base text-white/70 leading-relaxed font-semibold">
                      {plan.description}
                    </p>

                    {/* Deliverables List Grid */}
                    <div className="pt-4 border-t border-white/10">
                      <span className="font-mono text-[10px] text-white/40 block mb-4 tracking-wider uppercase">
                        ENTREGÁVEIS TÉCNICOS CORES:
                      </span>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3.5">
                        {plan.deliverables.map((item, dIdx) => (
                          <div key={dIdx} className="flex items-start gap-2.5">
                            <span className="text-lime-vibrant mt-0.5 text-sm select-none">✓</span>
                            <span className="font-sans text-xs sm:text-sm text-white/80 font-medium leading-snug">
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>

                  {/* Right Column: High-Impact Pricing Card & Call To Action */}
                  <div className="lg:col-span-5 h-full flex items-center justify-center">
                    <div className="w-full bg-[#13131a] border-2 border-white/10 p-6 sm:p-8 relative flex flex-col justify-between min-h-[280px]">
                      
                      {/* Grid background on the value structure card */}
                      <div className="absolute inset-0 graph-paper opacity-[0.03] pointer-events-none" />
                      
                      <div>
                        {/* Header of card */}
                        <div className="flex justify-between items-center mb-6 select-none">
                          <span className="font-mono text-[10px] text-white/40 tracking-wider">ESTRUTURA DE VALORES</span>
                          <span className="text-[9px] font-typewriter text-white/50 bg-white/5 px-1.5 py-0.5 rounded">2026.ED</span>
                        </div>

                        {/* Price Details */}
                        {plan.priceType === 'fixed' ? (
                          <div className="space-y-1">
                            {plan.originalPrice && (
                              <span className="font-sans text-xs text-white/40 line-through block font-medium">
                                Original: {plan.originalPrice}
                              </span>
                            )}
                            <div className="flex items-baseline gap-2">
                              <span className="font-display font-black text-xs text-white/80">R$</span>
                              <span className="font-display font-black text-4xl sm:text-5xl text-white tracking-tight">
                                {plan.price?.replace('R$', '').trim()}
                              </span>
                              
                              {plan.priceSub && (
                                <span className="bg-lime-vibrant text-dark-pure font-display font-black text-[9px] px-1.5 py-0.5 rounded ml-2 select-none uppercase tracking-wider">
                                  {plan.priceSub}
                                </span>
                              )}
                            </div>
                            
                            {plan.priceNote && (
                              <span className="font-mono text-[9px] text-white/40 block pt-1">
                                {plan.priceNote}
                              </span>
                            )}
                          </div>
                        ) : (
                          <div className="space-y-2">
                            <span className="font-display font-black text-3xl sm:text-4xl text-white block uppercase">
                              {plan.price}
                            </span>
                            <span className="font-typewriter text-[9px] leading-relaxed text-white/40 block uppercase">
                              {plan.priceSub}
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Giant Action Button */}
                      <div className="mt-8 space-y-3">
                        <a 
                          href={whatsappUrl}
                          target="_blank"
                          rel="noreferrer"
                          data-cursor-text="BORA!"
                          className="w-full bg-white hover:bg-lime-vibrant text-dark-pure hover:text-dark-pure font-display font-black py-4 border-2 border-dark-pure shadow-[4px_4px_0px_rgba(255,255,255,0.1)] hover:shadow-none translate-y-0 hover:translate-x-[4px] hover:translate-y-[4px] transition-all duration-150 uppercase text-xs tracking-wider flex items-center justify-center gap-2 select-none"
                        >
                          <span>{plan.buttonText}</span>
                          <span className="text-sm font-bold">↗</span>
                        </a>

                        <div className="text-center">
                          <span className="font-typewriter text-[9px] text-white/30 uppercase tracking-widest block">
                            ATENDIMENTO IMEDIATO • EM ATÉ DUAS HORAS
                          </span>
                        </div>
                      </div>

                    </div>
                  </div>

                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
