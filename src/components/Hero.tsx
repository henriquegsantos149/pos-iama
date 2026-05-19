import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface HeroProps {
  onOpenModal: (url: string) => void;
}

export default function Hero({ onOpenModal }: HeroProps) {
  const checkoutUrl = "https://sndflw.com/i/AlPWxxjxTZ6edSfzJtaF";

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[var(--color-brand-dark-light)]">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid opacity-70"></div>
      
      {/* Overlay gradient for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0b0c10]/40 to-black/20 opacity-100 pointer-events-none"></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-24 pb-16 text-center flex flex-col items-center">
        
        {/* Badges */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-10 md:gap-16 mb-8 md:mb-12"
        >
          {/* Ambiental Pro */}
          <a 
            href="https://www.ambientalpro.com.br/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block transition-opacity duration-300 hover:opacity-80"
          >
            <img 
              src={`${import.meta.env.BASE_URL}logo-ambientalpro.png`} 
              alt="Ambiental Pro - Engenharia, Tecnologia e Inteligência Artificial Aplicada ao Meio Ambiente" 
              className="h-14 md:h-16 w-auto object-contain"
            />
          </a>

          {/* MEC Seal */}
          <div className="inline-block">
            <img 
              src={`${import.meta.env.BASE_URL}mec-badge.png`} 
              alt="Selo do MEC - Reconhecimento pelo Ministério da Educação" 
              className="h-12 md:h-14 w-auto object-contain"
            />
          </div>
        </motion.div>

        {/* Title */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-2xl sm:text-3xl md:text-[3.25rem] lg:text-[3.75rem] font-bold tracking-tight mb-6 max-w-5xl uppercase leading-tight font-primary"
        >
          Pós-Graduação em <br className="md:block" />
          <span className="inline-block bg-brand-gradient text-[var(--color-brand-dark)] px-3 py-1 md:px-4 md:py-1 mt-2 mb-1 shape-leaf transform -skew-x-6">
            <span className="inline-block skew-x-6">Inteligência Artificial</span>
          </span> <br className="md:block" />
          Aplicada ao Meio Ambiente
        </motion.h1>

        {/* Subtitle */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg md:text-xl text-[var(--color-brand-light)]/70 mb-8 md:mb-10 max-w-3xl leading-relaxed font-secondary"
        >
          Aprenda a arquitetar sistemas de IA e criar soluções automatizadas aplicadas ao setor ambiental. A formação definitiva para liderar o mercado.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col items-center"
        >
          <button
            onClick={() => onOpenModal(checkoutUrl)}
            aria-label="Garanta sua pré-matrícula na Pós-Graduação em Inteligência Artificial Aplicada ao Meio Ambiente e entre no grupo VIP de WhatsApp"
            className="shape-leaf group relative inline-flex items-center justify-center px-8 md:px-12 py-5 bg-brand-gradient text-[var(--color-brand-dark)] font-bold overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_25px_rgba(124,191,57,0.3)] hover:shadow-[0_0_35px_rgba(124,191,57,0.5)] cursor-pointer"
          >
            <span className="relative z-10 transition-colors uppercase tracking-wider font-primary text-lg md:text-xl leading-none">
              Garanta sua Pré-Matrícula
            </span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
          </button>
          <p className="mt-4 text-[var(--color-brand-light)]/60 text-[10px] md:text-xs tracking-widest uppercase font-secondary font-semibold text-center leading-none">
            Entre no grupo VIP de WhatsApp para receber a oferta
          </p>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-4 animate-bounce"
        >
          <ChevronDown className="w-8 h-8 text-[var(--color-brand-secondary)] opacity-70" />
        </motion.div>

      </div>
    </section>
  );
}
