import React, { useState } from 'react';
import { motion } from 'motion/react';
import Tape from './Tape';
import Badge from './Badge';

export default function Contact() {
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    phone: '', 
    niche: '', 
    objective: '' 
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [validationError, setValidationError] = useState<string | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.niche || !formData.objective) {
      setValidationError("Por favor, preencha todos os campos obrigatórios marcados com *.");
      return;
    }
    
    setValidationError(null);
    setStatus('loading');
    
    try {
      const response = await fetch("https://formsubmit.co/ajax/weskleygomez@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          "Nome": formData.name,
          "Telefone / WhatsApp": formData.phone,
          "Nicho de Atuação": formData.niche,
          "E-mail de Contato": formData.email || "Não informado",
          "O Que Quer Fazer": formData.objective,
          "_subject": `🔥 Novo Lead: ${formData.name} (${formData.niche})`
        })
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', niche: '', objective: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  return (
    <section 
      id="contact" 
      className="relative min-h-screen py-24 px-4 md:px-8 bg-dark-pure text-white overflow-hidden"
    >
      {/* Halftone dots texture */}
      <div className="absolute inset-0 halftone-dots opacity-10 pointer-events-none" />

      {/* Floating big background elements */}
      <div className="absolute bottom-10 right-10 text-[12vw] font-display font-black text-white/5 uppercase select-none pointer-events-none leading-none">
        ZINE_MAIL
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        
        {/* Header block with rotation */}
        <div className="mb-16 text-center">
          <motion.div
            initial={{ rotate: -2, scale: 0.95 }}
            whileInView={{ rotate: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block bg-coral-vibrant text-dark-pure border-3 border-white px-6 py-4 shadow-[8px_8px_0px_#7C3AED] select-none"
          >
            <span className="font-typewriter text-xs uppercase font-bold text-white bg-dark-pure px-2 py-0.5">// VAMOS CONSEGUIR MAIS CLIENTES JUNTOS?</span>
            <h3 className="text-4xl sm:text-6xl font-display font-black tracking-tight uppercase leading-none mt-1">
              FALE COMIGO AGORA 🔌
            </h3>
          </motion.div>
        </div>

        {/* Form and info split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch max-w-5xl mx-auto">
          
          {/* Left Block: Creative Details / Postal Stamps */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            
            <div className="bg-white text-dark-pure p-6 border-3 border-white shadow-[6px_6px_0px_#C6FF00] rotate-[-1.5deg] relative flex-grow flex flex-col justify-between lined-paper select-none">
              <Tape color="yellow" className="w-24 -top-4 left-6" rotation={-6} />
              
              <div className="space-y-4">
                <h4 className="font-display font-black text-lg border-b-2 border-dark-pure pb-1 uppercase">
                  ESCRITÓRIO COMERCIAL
                </h4>
                <p className="font-typewriter text-xs leading-normal">
                  WESKLEY GOMES <br />
                  BRASÍLIA - DF, BRASIL <br />
                  LAT: -15.7938 | LNG: -47.8827 <br />
                  FOCO: ATRAIR CLIENTES & VENDER
                </p>
                <p className="font-sans text-xs font-semibold leading-relaxed text-dark-pure/70">
                  Precisa de um site de alta conversão para tráfego pago, quer redefinir a presença digital do seu negócio ou quer criar um funil de vendas irresistível? Envie uma mensagem!
                </p>
              </div>

              {/* Postal Stamp Badge visuals stacked inside left card */}
              <div className="flex flex-wrap gap-3 mt-8 pt-4 border-t-2 border-dashed border-dark-pure/10">
                <Badge type="stamp" text="ALTA CONVERSÃO" textColor="#7C3AED" rotation={5} />
                <Badge type="circle-seal" text="VENDAS" color="#C6FF00" textColor="#0B0B0F" rotation={-10} className="scale-75" />
              </div>
            </div>

            {/* Quick social stamps */}
            <div className="bg-purple-electric text-white p-6 border-3 border-white shadow-[6px_6px_0px_#FF6B6B] rotate-[1.5deg] relative select-none">
              <span className="font-mono text-xs uppercase text-lime-vibrant block mb-2 font-bold">// CANAIS_DIRETOS:</span>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-display font-black text-xs uppercase">
                <a 
                  href="https://wa.me/5561996507712" 
                  target="_blank" 
                  rel="noreferrer"
                  data-cursor-text="WHATSAPP"
                  className="bg-dark-pure hover:bg-white hover:text-dark-pure border-2 border-white px-3 py-2.5 text-center shadow-[2px_2px_0px_rgba(255,255,255,0.2)] transition-colors duration-150 flex items-center justify-center gap-1.5"
                >
                  🟢 WHATSAPP
                </a>
                <a 
                  href="https://www.instagram.com/weskley_gomezs/" 
                  target="_blank" 
                  rel="noreferrer"
                  data-cursor-text="INSTAGRAM"
                  className="bg-dark-pure hover:bg-white hover:text-dark-pure border-2 border-white px-3 py-2.5 text-center shadow-[2px_2px_0px_rgba(255,255,255,0.2)] transition-colors duration-150 flex items-center justify-center gap-1.5"
                >
                  📸 INSTAGRAM
                </a>
                <a 
                  href="mailto:weskleygomez@gmail.com"
                  data-cursor-text="EMAIL"
                  className="bg-dark-pure hover:bg-white hover:text-dark-pure border-2 border-white px-3 py-2.5 text-center shadow-[2px_2px_0px_rgba(255,255,255,0.2)] transition-colors duration-150 col-span-1 sm:col-span-2 flex items-center justify-center gap-1.5"
                >
                  📨 EMAIL: weskleygomez@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Right Block: Fanzine Enveloped Contact form */}
          <div className="lg:col-span-7 bg-white text-dark-pure p-6 md:p-8 border-3 border-dark-pure shadow-[10px_10px_0px_#7C3AED] relative flex flex-col justify-between">
            <Tape color="coral" className="w-36 -top-5 right-12" rotation={-8} />
            
            {/* Stamp on envelope */}
            <div className="absolute top-4 right-4 hidden sm:block select-none pointer-events-none">
              <div className="w-16 h-20 border-4 border-dashed border-dark-pure/30 rounded p-1 flex flex-col justify-between items-center bg-sand-base rotate-[8deg]">
                <span className="text-[7px] font-mono font-black text-dark-pure/40">AIR_MAIL</span>
                <span className="text-xl">📫</span>
                <span className="text-[7px] font-mono font-black text-dark-pure/40">2026.ED</span>
              </div>
            </div>

            <div className="mb-6 select-none">
              <span className="font-typewriter text-xs text-dark-pure/50 font-bold">CONTACT_SYSTEM_v1.5</span>
              <h4 className="font-display font-black text-2xl text-dark-pure uppercase leading-none mt-1">
                ENVELOPE DE MENSAGEM
              </h4>
            </div>

            {status === 'success' ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex-grow flex flex-col items-center justify-center text-center p-8 bg-lime-vibrant border-3 border-dark-pure select-none rotate-[-1deg]"
              >
                <span className="text-5xl mb-4">🚀</span>
                <h5 className="font-display font-black text-xl text-dark-pure uppercase">MENSAGEM ENVIADA!</h5>
                <p className="font-sans font-semibold text-xs text-dark-pure/80 max-w-sm mt-2 leading-relaxed">
                  Seu formulário foi enviado com sucesso diretamente para o e-mail do Weskley Gomes (weskleygomez@gmail.com). Ele entrará em contato em breve!
                </p>
                <p className="font-typewriter text-[10px] text-dark-pure/60 mt-4 max-w-xs">
                  *Nota: Se for o primeiro envio, verifique sua caixa de entrada para ativação do FormSubmit.
                </p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="mt-6 font-display font-black text-xs uppercase px-4 py-2 border-2 border-dark-pure bg-white hover:bg-sand-base transition-colors"
                >
                  Enviar Outra Mensagem
                </button>
              </motion.div>
            ) : status === 'error' ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex-grow flex flex-col items-center justify-center text-center p-8 bg-[#FF6B6B] text-white border-3 border-dark-pure select-none rotate-[1deg]"
              >
                <span className="text-5xl mb-4">⚠️</span>
                <h5 className="font-display font-black text-xl text-dark-pure uppercase">OPS! ERRO NO ENVIO</h5>
                <p className="font-sans font-semibold text-xs text-dark-pure max-w-sm mt-2 leading-relaxed">
                  Não conseguimos enviar a mensagem via satélite agora. Gostaria de tentar novamente ou me chamar diretamente no WhatsApp?
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <button 
                    onClick={() => setStatus('idle')}
                    className="font-display font-black text-xs uppercase px-4 py-2 border-2 border-dark-pure bg-white text-dark-pure hover:bg-sand-base transition-colors"
                  >
                    Tentar Novamente
                  </button>
                  <a 
                    href="https://wa.me/5561996507712?text=Olá Weskley, tentei usar o formulário mas deu erro. Gostaria de falar com você!"
                    target="_blank"
                    rel="noreferrer"
                    className="font-display font-black text-xs uppercase px-4 py-2 border-2 border-dark-pure bg-[#C6FF00] text-dark-pure hover:bg-white transition-colors"
                  >
                    Chamar no WhatsApp
                  </a>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 flex-grow flex flex-col justify-between">
                <div className="space-y-4">
                  
                  {validationError && (
                    <motion.div 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-red-100 text-red-700 border-2 border-red-500 p-3.5 font-sans font-bold text-xs flex items-center gap-2"
                    >
                      <span className="text-sm">⚠️</span>
                      <span>{validationError}</span>
                    </motion.div>
                  )}
                  
                  {/* Name field */}
                  <div>
                    <label htmlFor="name" className="block font-display font-black text-xs text-dark-pure uppercase mb-1">
                      COMO DEVO CHAMAR VOCÊ? <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="EX: SEU NOME OU EMPRESA"
                      className="w-full bg-sand-base/40 hover:bg-sand-base/70 focus:bg-sand-base border-2 border-dark-pure px-4 py-2.5 font-typewriter text-sm placeholder:text-dark-pure/30 focus:outline-none transition-all"
                    />
                  </div>

                  {/* Phone field */}
                  <div>
                    <label htmlFor="phone" className="block font-display font-black text-xs text-dark-pure uppercase mb-1">
                      TELEFONE OU WHATSAPP COM DDD <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="phone"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="EX: (61) 99999-9999"
                      className="w-full bg-sand-base/40 hover:bg-sand-base/70 focus:bg-sand-base border-2 border-dark-pure px-4 py-2.5 font-typewriter text-sm placeholder:text-dark-pure/30 focus:outline-none transition-all"
                    />
                  </div>

                  {/* Niche field */}
                  <div>
                    <label htmlFor="niche" className="block font-display font-black text-xs text-dark-pure uppercase mb-1">
                      SEU NICHO DE ATUAÇÃO / SETOR <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="niche"
                      required
                      value={formData.niche}
                      onChange={(e) => setFormData({ ...formData, niche: e.target.value })}
                      placeholder="EX: CLÍNICA DE ESTÉTICA, ADVOCACIA, SAAS..."
                      className="w-full bg-sand-base/40 hover:bg-sand-base/70 focus:bg-sand-base border-2 border-dark-pure px-4 py-2.5 font-typewriter text-sm placeholder:text-dark-pure/30 focus:outline-none transition-all"
                    />
                  </div>

                  {/* Email field */}
                  <div>
                    <label htmlFor="email" className="block font-display font-black text-xs text-dark-pure uppercase mb-1">
                      SEU E-MAIL (OPCIONAL)
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="EX: CONTATO@SEUNEGOCIO.COM"
                      className="w-full bg-sand-base/40 hover:bg-sand-base/70 focus:bg-sand-base border-2 border-dark-pure px-4 py-2.5 font-typewriter text-sm placeholder:text-dark-pure/30 focus:outline-none transition-all"
                    />
                  </div>

                  {/* Objective (message) field */}
                  <div>
                    <label htmlFor="objective" className="block font-display font-black text-xs text-dark-pure uppercase mb-1">
                      O QUE VOCÊ QUER FAZER? <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="objective"
                      required
                      rows={4}
                      value={formData.objective}
                      onChange={(e) => setFormData({ ...formData, objective: e.target.value })}
                      placeholder="EX: PRECISO DE UMA LANDING PAGE CONVERSIVA PARA ANÚNCIOS OU DE UM SITE INSTITUCIONAL COMPLETO..."
                      className="w-full bg-sand-base/40 hover:bg-sand-base/70 focus:bg-sand-base border-2 border-dark-pure px-4 py-2.5 font-typewriter text-sm placeholder:text-dark-pure/30 focus:outline-none transition-all resize-none"
                    />
                  </div>
                </div>

                {/* GIANT HOVER REACTIVE SUBMIT BUTTON */}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    data-cursor-text="BORA!"
                    className={`cursor-pointer w-full bg-purple-electric text-white font-display font-black py-5 border-3 border-dark-pure shadow-[6px_6px_0px_#0B0B0F] uppercase tracking-wider text-center flex items-center justify-center gap-2 select-none ${
                      status === 'loading' ? 'opacity-85 cursor-not-allowed' : ''
                    } ${
                      isHovered && status !== 'loading' ? 'animate-shake bg-coral-vibrant text-dark-pure' : 'translate-y-0'
                    }`}
                  >
                    {status === 'loading' ? (
                      <span>⚡ ENVIANDO MENSAGEM... ⚡</span>
                    ) : (
                      <span>{isHovered ? '⚠️ ENVIAR FORMULÁRIO! ⚠️' : 'FALAR COM WESKLEY GOMES ⚡'}</span>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>

        {/* Footer info brand */}
        <div className="mt-24 border-t-2 border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between font-mono text-[10px] text-white/50 select-none">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <span className="w-2.5 h-2.5 rounded-full bg-lime-vibrant animate-pulse" />
            <span>SISTEMA DE COLAGEM COMPILADO EM 2026</span>
          </div>
          <p className="text-center md:text-right uppercase">
            DESENVOLVIDO COM REACT, MOTION & MUITO SUOR. NADA DE TEMPLATES SAAS LIMPINHOS.
          </p>
        </div>

      </div>
    </section>
  );
}
