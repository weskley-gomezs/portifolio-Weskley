import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Bot, Sparkles, X, PhoneCall, ArrowRight, RotateCcw, AlertTriangle } from 'lucide-react';

type RobotState = 'neutral' | 'chatting' | 'analyzing' | 'recommending' | 'success' | 'happy' | 'sad';

interface NicheStrategy {
  niche: string;
  painPoint: string;
  strategy: string;
  actionPlan: string;
  recommendedPlan: string;
  price: string;
  whatsappMessage: string;
}

const STRATEGIES: Record<string, NicheStrategy> = {
  health: {
    niche: '🩺 CLÍNICA / SAÚDE & ESTÉTICA',
    painPoint: 'Pacientes agendando consultas esporádicas ou dependência excessiva de indicações passivas.',
    strategy: 'Landing Page de Alta Conversão cirúrgica acoplada a campanhas de tráfego local (Meta Ads/Google Ads). Mostre sua especialidade, ambiente, depoimentos de pacientes e botão direto para o agendamento rápido no WhatsApp.',
    actionPlan: 'Instalação de Pixel de Rastreamento + Script de Conversão Imediata + Seção de Provas Sociais com alto contraste visual.',
    recommendedPlan: 'Landing Page de Alta Conversão',
    price: 'R$ 397 (Taxa Única)',
    whatsappMessage: 'Olá Weskley! Fiz o diagnóstico com seu assistente virtual e ele me recomendou a Landing Page de Alta Conversão para meu consultório/clínica de saúde. Quero saber como começar!'
  },
  legal: {
    niche: '⚖️ ADVOCACIA & ESCRITÓRIOS DE VALOR',
    painPoint: 'Dificuldade de fechar contratos de honorários robustos devido a falta de autoridade visual digital.',
    strategy: 'Site Institucional Premium Multi-páginas focado em posicionamento corporativo. Otimização extrema para busca orgânica do Google (SEO) para capturar o cliente exatamente no momento em que ele pesquisa pela solução do problema jurídico.',
    actionPlan: 'Arquitetura de páginas dedicadas a cada especialidade jurídica + Otimização de Performance Técnica (nota máxima de velocidade) + CTAs elegantes direcionando para consulta prévia.',
    recommendedPlan: 'Site Institucional Premium',
    price: 'R$ 697 (Taxa Única)',
    whatsappMessage: 'Olá Weskley! Concluí o diagnóstico do assistente virtual. Preciso de um Site Institucional Premium para meu escritório de advocacia para consolidar autoridade e capturar leads no Google. Gostaria de conversar.'
  },
  services: {
    niche: '🏡 SERVIÇOS / CONSTRUÇÃO & REFORMAS',
    painPoint: 'Concorrentes vencendo no preço porque seu negócio não transmite o valor real do seu serviço.',
    strategy: 'Portfólio interativo de alta velocidade e Landing Page focada em conversão. O cliente precisa ver seus projetos executados com fotos de antes/depois impactantes e calcular um orçamento prévio em poucos cliques.',
    actionPlan: 'Otimização visual móvel (90% dos acessos são celulares) + Galeria de alta performance que não pesa no carregamento + Formulário rápido de pré-orçamento.',
    recommendedPlan: 'Landing Page de Alta Conversão',
    price: 'R$ 397 (Taxa Única)',
    whatsappMessage: 'Olá Weskley! Fiz o teste com o assistente inteligente W-8D e gostaria do projeto de Landing Page de Alta Conversão para destacar meus serviços locais e portfólio. Vamos planejar?'
  },
  other: {
    niche: '💼 OUTROS NEGÓCIOS / SAAS / INFOPRODUTOS',
    painPoint: 'Sistemas prontos lentos ou processos internos manuais consumindo tempo valioso de vendas.',
    strategy: 'Desenvolvimento Sob Demanda ou Funil de Vendas de Alta Tecnologia. Um sistema web ou SaaS com painel administrativo ultra-veloz, focado em automatizar a captura, distribuição de leads ou criar uma ferramenta única para seu nicho.',
    actionPlan: 'Mapeamento de jornada de dados + Integrações bilaterais de APIs + Interface limpa, intuitiva e sem manutenção mensal cara.',
    recommendedPlan: 'Sistemas Web e SaaS Personalizados',
    price: 'Sob Demanda (Escopo Planejado)',
    whatsappMessage: 'Olá Weskley! Estive conversando com seu assistente robô W-8D. Tenho uma demanda especial de Sistema Personalizado / SaaS ou Funil sob medida. Gostaria de agendar um briefing!'
  }
};

export default function InteractiveRobot() {
  const [isOpen, setIsOpen] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHoveringButton, setIsHoveringButton] = useState(false);
  const [isExitIntent, setIsExitIntent] = useState(false);
  
  const [chatStep, setChatStep] = useState<'intro' | 'niche-select' | 'result'>('intro');
  const [selectedNiche, setSelectedNiche] = useState<keyof typeof STRATEGIES | null>(null);
  const [userObjective, setUserObjective] = useState<string>('');
  
  const robotRef = useRef<HTMLDivElement>(null);

  // 1. Mouse coordinates relative to window center for smooth 3D tilting and eye movement tracking
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1; // range -1 to 1
      const y = (e.clientY / window.innerHeight) * 2 - 1; // range -1 to 1
      setMousePos({ x, y });

      // Exit intent detection based on cursor moving near the top of viewport (e.g. going to address bar)
      if (e.clientY < 18) {
        setIsExitIntent(true);
      } else {
        setIsExitIntent(false);
      }
    };

    const handleMouseLeave = () => {
      setIsExitIntent(true);
    };

    const handleMouseEnter = () => {
      setIsExitIntent(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  // 2. Global listener to detect when user is hovering any interactive elements (buttons, links, textareas, inputs)
  useEffect(() => {
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (target && target.closest('button, a, input, select, textarea, [role="button"]')) {
        setIsHoveringButton(true);
      } else {
        setIsHoveringButton(false);
      }
    };

    window.addEventListener('mouseover', handleMouseOver);
    return () => {
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  // 3. Determine overall state based on priority:
  // Exit Intent (Sad) > Chat Open State > Button Hover (Joyful) > Neutral Scanning
  let robotState: RobotState = 'neutral';
  if (isExitIntent) {
    robotState = 'sad';
  } else if (isOpen) {
    if (chatStep === 'intro') {
      robotState = 'chatting';
    } else if (chatStep === 'niche-select') {
      robotState = 'analyzing';
    } else if (chatStep === 'result') {
      robotState = 'recommending';
    }
  } else if (isHoveringButton) {
    robotState = 'happy';
  }

  const handleSelectObjective = (objective: string, nextStep: 'niche-select' | 'result') => {
    setUserObjective(objective);
    if (objective === 'authority') {
      setSelectedNiche('legal');
      setChatStep('result');
    } else if (objective === 'saas') {
      setSelectedNiche('other');
      setChatStep('result');
    } else {
      setChatStep('niche-select');
    }
  };

  const handleSelectNiche = (nicheKey: keyof typeof STRATEGIES) => {
    setSelectedNiche(nicheKey);
    setChatStep('result');
  };

  const resetChat = () => {
    setSelectedNiche(null);
    setUserObjective('');
    setChatStep('intro');
  };

  // 3D Isometric rotation math
  const rotationY = mousePos.x * 25; // rotation range -25deg to 25deg
  const rotationX = -mousePos.y * 15; // rotation range -15deg to 15deg

  // Eye movement offsets inside the visor screen (max 4.5px offset)
  const eyeOffsetX = mousePos.x * 4.5;
  const eyeOffsetY = mousePos.y * 3.5;

  return (
    <div ref={robotRef} className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end pointer-events-none">
      
      {/* 1. Holographic Conversation & Diagnostic Interface */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ type: 'spring', damping: 20 }}
            className="w-[92vw] sm:w-[420px] max-h-[78vh] sm:max-h-[82vh] mb-4 sm:mb-5 bg-[#0d0d12] border-2 border-white/20 shadow-[6px_6px_0px_#0B0B0F] sm:shadow-[10px_10px_0px_#0B0B0F] pointer-events-auto flex flex-col overflow-hidden relative"
          >
            {/* Cyber Grid Overlay background */}
            <div className="absolute inset-0 graph-paper opacity-[0.04] pointer-events-none" />
            
            {/* Top Bar / Status */}
            <div className="bg-[#13131a] border-b-2 border-white/10 px-4 py-3 flex items-center justify-between select-none">
              <div className="flex items-center gap-2">
                <span className="flex h-2.5 w-2.5 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-vibrant opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-lime-vibrant"></span>
                </span>
                <span className="font-mono text-[10px] text-white/50 tracking-widest uppercase">
                  W-8D CORE // CONVERSÃO ONLINE
                </span>
              </div>
              
              <button 
                onClick={() => setIsOpen(false)}
                className="text-white/40 hover:text-white p-1 hover:bg-white/5 rounded transition-colors"
                title="Fechar assistente"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Main Interactive Diagnostic Area */}
            <div className="p-5 overflow-y-auto custom-scrollbar flex-1 space-y-4 max-h-[420px]">
              
              {/* Robot Speech Bubble */}
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded bg-gradient-to-tr from-purple-electric to-lime-vibrant flex items-center justify-center border border-white/10 shrink-0">
                  <Bot className="w-4 h-4 text-dark-pure" />
                </div>
                <div className="bg-[#171722] border border-white/10 p-3.5 rounded-r-xl rounded-bl-xl max-w-[85%] relative">
                  <div className="absolute top-2 -left-1.5 w-3 h-3 bg-[#171722] border-l border-b border-white/10 rotate-45" />
                  
                  {chatStep === 'intro' && (
                    <div className="space-y-2">
                      <p className="font-typewriter text-xs text-lime-vibrant">// DIAGNÓSTICO ATIVO</p>
                      <p className="font-sans font-semibold text-xs text-white/90 leading-relaxed">
                        Saudações! Sou o <span className="text-lime-vibrant font-bold">Oli Assistente</span>. Fui programado pelo Weskley para encontrar o caminho mais rápido para você atrair novos clientes na internet.
                      </p>
                      <p className="font-sans font-medium text-xs text-white/60 leading-relaxed">
                        Qual é o seu principal objetivo estratégico hoje?
                      </p>
                    </div>
                  )}

                  {chatStep === 'niche-select' && (
                    <div className="space-y-2">
                      <p className="font-typewriter text-xs text-coral-vibrant">// SELEÇÃO DE NICHO EM ANDAMENTO</p>
                      <p className="font-sans font-semibold text-xs text-white/90 leading-relaxed">
                        Excelente! Para desenharmos o funil ideal, qual é o nicho de atuação do seu negócio?
                      </p>
                    </div>
                  )}

                  {chatStep === 'result' && selectedNiche && (
                    <div className="space-y-3">
                      <p className="font-typewriter text-[10px] text-lime-vibrant bg-white/5 px-2 py-1 rounded inline-block">
                        ✓ DIAGNÓSTICO ESTRUTURADO COM SUCESSO
                      </p>
                      <div className="border-l-2 border-lime-vibrant pl-2.5 space-y-1">
                        <span className="font-mono text-[9px] text-white/40 block">SETOR ANALISADO</span>
                        <h4 className="font-display font-black text-sm text-white tracking-tight uppercase leading-none">
                          {STRATEGIES[selectedNiche].niche}
                        </h4>
                      </div>
                      
                      <div className="space-y-2 text-[11px] leading-relaxed">
                        <p className="font-sans font-medium text-white/60">
                          <strong className="text-coral-vibrant uppercase block text-[9px] font-mono tracking-wider mb-0.5">⚠️ Gargalo de Conversão:</strong>
                          {STRATEGIES[selectedNiche].painPoint}
                        </p>
                        <p className="font-sans font-medium text-white/80 bg-[#1e1e2d] p-2.5 rounded border border-white/5">
                          <strong className="text-lime-vibrant uppercase block text-[9px] font-mono tracking-wider mb-0.5">💡 Solução Recomendada:</strong>
                          {STRATEGIES[selectedNiche].strategy}
                        </p>
                        <p className="font-sans text-[10px] text-white/50">
                          <strong className="text-white/70 block text-[9px] font-mono tracking-wider mb-0.5">⚙️ Plano de Ação Técnico:</strong>
                          {STRATEGIES[selectedNiche].actionPlan}
                        </p>
                      </div>

                      <div className="pt-2 border-t border-white/10 mt-3 flex items-center justify-between">
                        <div>
                          <span className="text-[9px] font-mono text-white/40 uppercase block">Modelo Sugerido</span>
                          <span className="font-display font-black text-xs text-white uppercase">{STRATEGIES[selectedNiche].recommendedPlan}</span>
                        </div>
                        <div className="text-right">
                          <span className="text-[9px] font-mono text-white/40 uppercase block">Valor</span>
                          <span className="font-display font-black text-xs text-lime-vibrant">{STRATEGIES[selectedNiche].price}</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* User Option Buttons */}
              <div className="pl-11 space-y-2 pt-2">
                {chatStep === 'intro' && (
                  <div className="flex flex-col gap-2">
                    <button
                      onClick={() => handleSelectObjective('leads', 'niche-select')}
                      className="w-full text-left bg-[#13131a] hover:bg-lime-vibrant text-white hover:text-dark-pure border border-white/10 hover:border-lime-vibrant p-3 rounded font-sans font-semibold text-xs transition-all duration-200 flex items-center justify-between group"
                    >
                      <span>🔥 Atrair novos clientes no WhatsApp / Telefone</span>
                      <ArrowRight className="w-3.5 h-3.5 opacity-40 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    </button>
                    
                    <button
                      onClick={() => handleSelectObjective('authority', 'result')}
                      className="w-full text-left bg-[#13131a] hover:bg-[#7C3AED] text-white hover:text-white border border-white/10 hover:border-[#7C3AED] p-3 rounded font-sans font-semibold text-xs transition-all duration-200 flex items-center justify-between group"
                    >
                      <span>💎 Consolidar autoridade & credibilidade de marca</span>
                      <ArrowRight className="w-3.5 h-3.5 opacity-40 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    </button>

                    <button
                      onClick={() => handleSelectObjective('saas', 'result')}
                      className="w-full text-left bg-[#13131a] hover:bg-coral-vibrant text-white hover:text-dark-pure border border-white/10 hover:border-coral-vibrant p-3 rounded font-sans font-semibold text-xs transition-all duration-200 flex items-center justify-between group"
                    >
                      <span>⚙️ Automatizar processos internos ou Criar um App</span>
                      <ArrowRight className="w-3.5 h-3.5 opacity-40 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    </button>
                  </div>
                )}

                {chatStep === 'niche-select' && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <button
                      onClick={() => handleSelectNiche('health')}
                      className="text-left bg-[#13131a] hover:bg-lime-vibrant text-white hover:text-dark-pure border border-white/10 p-2.5 rounded font-sans font-semibold text-xs transition-all"
                    >
                      🩺 Clínica / Saúde
                    </button>
                    <button
                      onClick={() => handleSelectNiche('legal')}
                      className="text-left bg-[#13131a] hover:bg-lime-vibrant text-white hover:text-dark-pure border border-white/10 p-2.5 rounded font-sans font-semibold text-xs transition-all"
                    >
                      ⚖️ Advocacia / Escritório
                    </button>
                    <button
                      onClick={() => handleSelectNiche('services')}
                      className="text-left bg-[#13131a] hover:bg-lime-vibrant text-white hover:text-dark-pure border border-white/10 p-2.5 rounded font-sans font-semibold text-xs transition-all"
                    >
                      🏡 Serviços / Reformas
                    </button>
                    <button
                      onClick={() => handleSelectNiche('other')}
                      className="text-left bg-[#13131a] hover:bg-lime-vibrant text-white hover:text-dark-pure border border-white/10 p-2.5 rounded font-sans font-semibold text-xs transition-all"
                    >
                      💼 Outro Segmento
                    </button>
                  </div>
                )}

                {chatStep === 'result' && selectedNiche && (
                  <div className="space-y-3 pt-2">
                    <a
                      href={`https://wa.me/5561996507712?text=${encodeURIComponent(STRATEGIES[selectedNiche].whatsappMessage)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-[#C6FF00] text-dark-pure hover:bg-white font-display font-black py-3.5 border-2 border-dark-pure shadow-[4px_4px_0px_rgba(255,255,255,0.15)] flex items-center justify-center gap-2 select-none uppercase text-xs tracking-wider transition-colors duration-150"
                    >
                      <PhoneCall className="w-4 h-4 shrink-0" />
                      <span>FECHAR ESTA ESTRATÉGIA NO WHATS</span>
                    </a>
                    
                    <button
                      onClick={resetChat}
                      className="w-full bg-transparent hover:bg-white/5 text-white/60 hover:text-white border border-white/10 py-2.5 rounded font-sans font-semibold text-xs transition-all flex items-center justify-center gap-1.5"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>Refazer Diagnóstico</span>
                    </button>
                  </div>
                )}
              </div>

            </div>

            {/* Micro footer information */}
            <div className="bg-[#0a0a0f] border-t border-white/10 p-2.5 text-center select-none">
              <p className="font-typewriter text-[8px] text-white/30 tracking-widest uppercase">
                ALGORITMO DE VENDAS DESENVOLVIDO POR WESKLEY GOMES © 2026
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. Visual Masterpiece: 8D Isometric Orbital Companion Core */}
      <div className="flex flex-col items-end">
        
        {/* Holographic Floating Speech Balloon when exiting */}
        <AnimatePresence>
          {isExitIntent && (
            <motion.div
              initial={{ opacity: 0, y: 15, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="mb-3 mr-4 bg-[#FF6B6B] border-2 border-dark-pure text-dark-pure p-3.5 shadow-[5px_5px_0px_#000] pointer-events-auto max-w-[260px] relative select-none rotate-[-1.5deg]"
            >
              <div className="absolute bottom-[-9px] right-8 w-4 h-4 bg-[#FF6B6B] border-r-2 border-b-2 border-dark-pure rotate-45" />
              <div className="flex items-center gap-1.5 mb-1 text-dark-pure font-display font-black text-[10px] tracking-wider uppercase">
                <AlertTriangle className="w-3.5 h-3.5 animate-bounce shrink-0" />
                <span>NÃO VÁ EMBORA! 🥺</span>
              </div>
              <p className="font-sans font-bold text-[10.5px] leading-normal text-dark-pure">
                Seu negócio merece um design de elite para faturar alto. Vamos criar seu site hoje! Deixe sua mensagem ou me chame no WhatsApp.
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Regular Interactive Welcome Badge */}
        <AnimatePresence>
          {!isOpen && !isExitIntent && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="mb-2 bg-dark-pure text-white border-2 border-white px-2.5 py-1.5 shadow-[3px_3px_0px_#C6FF00] sm:shadow-[4px_4px_0px_#C6FF00] pointer-events-auto cursor-pointer flex items-center gap-2 select-none"
              onClick={() => setIsOpen(true)}
              whileHover={{ scale: 1.05 }}
            >
              <span className="flex h-1.5 w-1.5 rounded-full bg-lime-vibrant" />
              <span className="font-typewriter text-[8px] sm:text-[9px] uppercase tracking-wider font-bold whitespace-nowrap">
                {isHoveringButton ? "UAU! ME CLICA AGORA! ⚡" : "ASSISTENTE VIRTUAL ⚡"}
              </span>
              <Sparkles className="w-3 h-3 text-lime-vibrant animate-pulse" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* The Hovering Robotic Drone with 3D Mouse parallax tilting and exit-intent scaling up */}
        <motion.div
          className="pointer-events-auto cursor-pointer relative select-none"
          onClick={() => setIsOpen(!isOpen)}
          style={{ perspective: '1000px' }}
          whileHover={{ y: -6 }}
          animate={{
            y: [-3, 3, -3],
            // Grow to scale 1.8x on exit-intent
            scale: isExitIntent ? 1.8 : 1.0,
            transition: {
              y: {
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              },
              scale: {
                type: "spring",
                stiffness: 100,
                damping: 12
              }
            }
          }}
        >
          {/* Main 3D Perspective Box */}
          <motion.div
            style={{
              transformStyle: 'preserve-3d',
              rotateY: rotationY,
              rotateX: rotationX,
            }}
            transition={{ type: 'spring', stiffness: 100, damping: 15 }}
            className="w-28 h-36 relative flex flex-col items-center justify-end"
          >
            {/* Oli's Head (Cabeça - Sleek White & Grey Capsule) */}
            <div 
              style={{ transformStyle: 'preserve-3d', translateZ: '10px' }}
              className="w-28 h-[80px] bg-gradient-to-b from-white via-neutral-50 to-neutral-200 border-2 border-[#13131a] rounded-[38px] relative shadow-lg flex items-center justify-center transition-transform duration-200"
            >
              {/* Top Cap (Centered grey plate on top of head, from the image) */}
              <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-10 h-2 bg-neutral-300 border border-t-0 border-[#13131a] rounded-t-md" />

              {/* Ears on the sides of the head (Grey Cylinders, from the image) */}
              <div className="absolute -left-2.5 top-[24px] w-3 h-8 bg-neutral-400 border-2 border-r-0 border-[#13131a] rounded-l-md" />
              <div className="absolute -right-2.5 top-[24px] w-3 h-8 bg-neutral-400 border-2 border-l-0 border-[#13131a] rounded-r-md" />

              {/* Black Visor Screen Mask (Large friendly dark shield, matching the image) */}
              <div 
                className="w-[90px] h-[56px] bg-[#0c121d] border-2 border-[#1e293b] rounded-[22px] relative flex items-center justify-center overflow-hidden shadow-[inset_0_2px_8px_rgba(0,0,0,0.8)]"
              >
                {/* Screen background glow */}
                <div className={`absolute inset-0 opacity-25 transition-colors duration-300 ${
                  robotState === 'sad' ? 'bg-[#FF4D4D]' :
                  robotState === 'happy' ? 'bg-[#38BDF8]' :
                  robotState === 'recommending' ? 'bg-[#a78bfa]' :
                  robotState === 'analyzing' ? 'bg-[#FF6B6B]' :
                  robotState === 'chatting' ? 'bg-[#38BDF8]' :
                  'bg-[#38BDF8]/20'
                }`} />

                {/* CRT Glass Reflection shine */}
                <div className="absolute top-1 left-2 w-12 h-3 bg-white/10 rounded-full blur-[0.5px]" />

                {/* Cyber Eyes SVG (following cursor coords & featuring the signature cute mouth) */}
                <svg viewBox="0 0 50 40" className="w-[72px] h-[44px] relative z-10">
                  {robotState === 'sad' && (
                    <g>
                      {/* Downcast curved sad eyes */}
                      <path d="M12,18 Q16,21 20,18" fill="none" stroke="#38BDF8" strokeWidth="4.5" strokeLinecap="round" />
                      <path d="M30,18 Q34,21 38,18" fill="none" stroke="#38BDF8" strokeWidth="4.5" strokeLinecap="round" />
                      
                      {/* Sad mouth */}
                      <path d="M21,29 Q25,26 29,29" fill="none" stroke="#38BDF8" strokeWidth="3" strokeLinecap="round" />

                      {/* Animated Neon dripping tears */}
                      <motion.circle 
                        cx="16" 
                        cy="24" 
                        r="2" 
                        fill="#38BDF8" 
                        animate={{ y: [0, 8, 0], opacity: [0, 1, 0] }} 
                        transition={{ repeat: Infinity, duration: 1.5, ease: 'easeIn' }} 
                      />
                      <motion.circle 
                        cx="34" 
                        cy="24" 
                        r="2" 
                        fill="#38BDF8" 
                        animate={{ y: [0, 8, 0], opacity: [0, 1, 0] }} 
                        transition={{ repeat: Infinity, duration: 1.5, delay: 0.7, ease: 'easeIn' }} 
                      />
                    </g>
                  )}

                  {robotState === 'happy' && (
                    <g>
                      {/* High arch happy eyes */}
                      <path d="M11,19 Q16,11 21,19" fill="none" stroke="#38BDF8" strokeWidth="5" strokeLinecap="round" />
                      <path d="M29,19 Q34,11 39,19" fill="none" stroke="#38BDF8" strokeWidth="5" strokeLinecap="round" />
                      
                      {/* Big happy smiling mouth */}
                      <path d="M20,25 Q25,31 30,25" fill="none" stroke="#38BDF8" strokeWidth="4.5" strokeLinecap="round" />
                    </g>
                  )}

                  {robotState === 'neutral' && (
                    <g>
                      {/* Sleek rounded-horizontal cyan capsule eyes that track the cursor */}
                      <ellipse cx={16 + eyeOffsetX} cy={18 + eyeOffsetY} rx="5" ry="4" fill="#38BDF8" />
                      <ellipse cx={34 + eyeOffsetX} cy={18 + eyeOffsetY} rx="5" ry="4" fill="#38BDF8" />
                      
                      {/* Cute bright cyan smile mouth exactly like the image! */}
                      <path d="M21,26 Q25,30 29,26" fill="none" stroke="#38BDF8" strokeWidth="3.5" strokeLinecap="round" />
                    </g>
                  )}

                  {robotState === 'chatting' && (
                    <g>
                      {/* Expressive round eyes tracking cursor */}
                      <ellipse cx={16 + eyeOffsetX} cy={18 + eyeOffsetY} rx="5" ry="5" fill="#38BDF8" />
                      <ellipse cx={34 + eyeOffsetX} cy={18 + eyeOffsetY} rx="5" ry="5" fill="#38BDF8" />
                      
                      {/* Animated talking mouth shape (scales up and down) */}
                      <motion.path 
                        d="M21,27 Q25,31 29,27" 
                        fill="none" 
                        stroke="#38BDF8" 
                        strokeWidth="3.5" 
                        strokeLinecap="round"
                        animate={{ scaleY: [1, 1.6, 1], y: [0, -1, 0] }}
                        transition={{ duration: 0.3, repeat: Infinity }}
                      />
                    </g>
                  )}

                  {robotState === 'analyzing' && (
                    <g>
                      {/* Scanning rectangular calculating eyes */}
                      <rect x={11 + eyeOffsetX * 0.7} y="15" width="9" height="5" rx="1.5" fill="#FF6B6B" />
                      <rect x={30 + eyeOffsetX * 0.7} y="15" width="9" height="5" rx="1.5" fill="#FF6B6B" />
                      
                      {/* Flat mouth */}
                      <line x1="20" y1="27" x2="30" y2="27" stroke="#FF6B6B" strokeWidth="3" strokeLinecap="round" />
                    </g>
                  )}

                  {robotState === 'recommending' && (
                    <g>
                      {/* Wink + cheerful smile */}
                      <path d="M11,18 Q16,11 21,18" fill="none" stroke="#38BDF8" strokeWidth="5.5" strokeLinecap="round" />
                      <path d="M29,18 Q34,22 39,18" fill="none" stroke="#38BDF8" strokeWidth="4.5" strokeLinecap="round" />
                      
                      {/* Cute open smile */}
                      <path d="M20,26 Q25,32 30,26" fill="none" stroke="#38BDF8" strokeWidth="4" strokeLinecap="round" />
                    </g>
                  )}
                </svg>
              </div>
            </div>

            {/* Neck Joint (Pescoço - Simple grey connection cylinder matching the image) */}
            <div className="w-7 h-2.5 bg-neutral-400 border-x border-[#13131a] relative z-10 -mt-1" />

            {/* Oli's Body (Corpo - Smooth white capsule shape with a mechanical seam) */}
            <div 
              style={{ transformStyle: 'preserve-3d' }}
              className="w-[102px] h-[104px] bg-gradient-to-b from-white via-neutral-100 to-neutral-200 border-2 border-[#13131a] rounded-[48px_48px_52px_52px] relative shadow-lg flex flex-col items-center pt-3 -mt-1"
            >
              {/* Highlight shine on body left shoulder (from the image) */}
              <div className="absolute top-2 left-3 w-6 h-12 bg-white/60 rounded-full blur-[1px] pointer-events-none rotate-[20deg]" />

              {/* Horizontal mechanical seam across lower body (Matches the sewing-like line on the image body) */}
              <div className="absolute bottom-[40px] left-0 right-0 h-[1.5px] bg-[#13131a]/15 flex justify-center">
                {/* Small central notch in the seam line */}
                <div className="w-14 h-2.5 border-b border-x border-[#13131a]/15 rounded-b-sm -mt-[1.5px]" />
              </div>

              {/* Waving/Moving Arms (Independent floating capsules, from the image) */}
              
              {/* Left Arm (Viewer's Left - Raised wave capsule arm) */}
              <motion.div 
                className="absolute -left-6 top-[20px] w-[18px] h-[48px] origin-bottom-right z-20"
                style={{ transformStyle: 'preserve-3d' }}
                animate={
                  robotState === 'happy' || robotState === 'chatting' || robotState === 'recommending'
                    ? { rotate: [-15, -45, -15, -45, -15], y: [0, -2, 0] } // friendly waving
                    : { rotate: [-20, -26, -20] } // relaxed upward float
                }
                transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
              >
                {/* Smooth white/grey arm capsule matching the image shape */}
                <div className="w-full h-full bg-gradient-to-b from-white via-neutral-150 to-neutral-200 border-2 border-[#13131a] rounded-full shadow-sm" />
              </motion.div>

              {/* Right Arm (Viewer's Right - Comfortable hanging capsule arm) */}
              <motion.div 
                className="absolute -right-6 top-[20px] w-[18px] h-[48px] origin-top-left z-20"
                style={{ transformStyle: 'preserve-3d' }}
                animate={
                  robotState === 'analyzing'
                    ? { rotate: [10, 25, 10], y: [0, 2, 0] }
                    : { rotate: [5, 12, 5], y: [0, 1, 0] }
                }
                transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
              >
                {/* Smooth white/grey arm capsule matching the image shape */}
                <div className="w-full h-full bg-gradient-to-b from-white via-neutral-150 to-neutral-200 border-2 border-[#13131a] rounded-full shadow-sm" />
              </motion.div>

              {/* Printed "Oli" branding name on left breast (Viewer's right side, subtle and high-tech) */}
              <div className="absolute right-4.5 top-[32px] font-sans font-black text-[11px] tracking-wide text-dark-pure/60 select-none z-10 italic">
                Oli
              </div>

              {/* Center belly button microphone point (Crescent/curve line from the image) */}
              <div className="w-3 h-1.5 border-b-2 border-r border-dark-pure/40 rounded-b-full absolute bottom-8 left-1/2 -translate-x-1/2 z-10" />

            </div>
          </motion.div>

          {/* Holographic light cone beaming up from the projector */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, scaleY: 0 }}
                animate={{ opacity: 0.12, scaleY: 1 }}
                exit={{ opacity: 0, scaleY: 0 }}
                style={{ originY: 1 }}
                className="absolute bottom-28 left-1/2 -translate-x-1/2 w-48 h-32 bg-gradient-to-t from-[#79D2C4] to-transparent clip-path-pyramid pointer-events-none"
              />
            )}
          </AnimatePresence>

          {/* Real-time Isometric Floating Shadow */}
          <div className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-14 h-2 bg-dark-pure/20 rounded-full blur-[1px] pointer-events-none" />
        </motion.div>

      </div>

    </div>
  );
}
