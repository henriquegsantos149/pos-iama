import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface CallToActionProps {
  onOpenModal: (url: string) => void;
}

export default function CallToAction({ onOpenModal }: CallToActionProps) {
  const checkoutUrl = "https://tinyurl.com/pedagogicoambpro";

  return (
    <section id="inscreva-se" className="py-16 md:py-24 relative overflow-hidden bg-[var(--color-brand-dark-light)] border-t border-black/5">
      
      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
        
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="shape-leaf bg-[var(--color-brand-dark)] border border-white/10 p-12 md:p-20 shadow-2xl relative overflow-hidden"
        >
          {/* subtle glowing lines to represent "tech" limits */}
          <div className="absolute top-0 left-0 w-full height-[2px] bg-brand-gradient opacity-50"></div>
          


          <h2 className="text-3xl md:text-6xl font-bold mb-6 text-[var(--color-brand-light)] relative z-10 font-primary uppercase tracking-wide leading-tight">
            Pronto para dar o <br/>
            <span className="inline-block bg-brand-gradient text-[var(--color-brand-dark)] px-4 py-2 mt-3 shape-leaf transform -skew-x-6"><span className="inline-block transform skew-x-6">Próximo Passo?</span></span>
          </h2>
          
          <p className="text-xl text-[var(--color-brand-light)]/70 mb-12 max-w-3xl mx-auto relative z-10 font-secondary mt-6">
            Junte-se à próxima turma e torne-se um especialista em Inteligência Artificial Aplicada ao Meio Ambiente.
          </p>
          
          <div className="relative z-10 flex justify-center">
              <button
                onClick={() => onOpenModal(checkoutUrl)}
                aria-label="Mais informações pelo WhatsApp"
                className="shape-leaf group relative inline-flex items-center justify-center gap-3 px-10 py-5 bg-brand-gradient text-[var(--color-brand-dark)] font-bold text-lg overflow-hidden transition-transform hover:scale-105 active:scale-95 w-full sm:w-auto shadow-[0_0_30px_rgba(124,191,57,0.4)] cursor-pointer"
              >
              <span className="relative z-10 flex items-center gap-2 uppercase tracking-wide font-primary">
                Mais informações pelo WhatsApp
                <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
            </button>
          </div>

        </motion.div>
        
      </div>
    </section>
  );
}
