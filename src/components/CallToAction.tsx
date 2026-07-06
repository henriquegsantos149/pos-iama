import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface CallToActionProps {
  onOpenModal: (url: string) => void;
  isWaitingList?: boolean;
  bgVariant?: 'light' | 'dark';
}

export default function CallToAction({ onOpenModal, isWaitingList = false, bgVariant = 'dark' }: CallToActionProps) {
  const checkoutUrl = "https://pay.voompcreators.com.br/14929";
  const whatsappUrl = "https://tinyurl.com/pedagogicoambpro";
  const bgClass = bgVariant === 'light' ? 'bg-[var(--color-brand-dark-light)]' : 'bg-[var(--color-brand-dark)]';
  const textClass = bgVariant === 'light' ? 'text-[var(--color-brand-dark)]' : 'text-[var(--color-brand-light)]';
  const textMutedClass = bgVariant === 'light' ? 'text-[var(--color-brand-dark)]/70' : 'text-[var(--color-brand-light)]/70';
  const boxClass = bgVariant === 'light' ? 'bg-black/5 border border-black/10' : 'bg-white/5 border border-white/10';
  const whatsappBtnClass = bgVariant === 'light' ? 'bg-black/5 hover:bg-black/10 text-[var(--color-brand-dark)] border border-black/25 hover:border-black/40' : 'bg-white/5 hover:bg-white/10 text-[var(--color-brand-light)] border border-white/25 hover:border-white/40';

  return (
    <section id="inscreva-se" className={`py-16 md:py-24 relative overflow-hidden ${bgClass} border-t border-white/5`}>
      
      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
        
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true, amount: 0.15 }}
           transition={{ duration: 0.6 }}
           className={`shape-leaf p-12 md:p-20 shadow-2xl relative overflow-hidden backdrop-blur-sm ${boxClass}`}
         >
          <h2 className={`text-3xl md:text-6xl font-bold mb-6 relative z-10 font-primary uppercase tracking-wide leading-tight ${textClass}`}>
            Pronto para dar o <br/>
            <span className="inline-block bg-brand-gradient text-[var(--color-brand-dark)] px-4 py-2 mt-3 shape-leaf transform -skew-x-6"><span className="inline-block transform skew-x-6">Próximo Passo?</span></span>
          </h2>
          
          <p className={`text-xl mb-12 max-w-3xl mx-auto relative z-10 font-secondary mt-6 ${textMutedClass}`}>
            {isWaitingList 
              ? 'Entre na lista de espera e garanta prioridade na abertura de novas vagas para a Pós IA.MA.' 
              : 'Junte-se à próxima turma e torne-se um especialista em Inteligência Artificial Aplicada ao Meio Ambiente.'}
          </p>
          
          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Botão de Matrícula (Primário) */}
            <button
              onClick={() => onOpenModal(checkoutUrl)}
              aria-label={isWaitingList ? "Entrar na Lista de Espera" : "Matricule-se agora"}
              className="shape-leaf inline-flex items-center justify-center gap-3 px-10 py-5 bg-brand-gradient text-[var(--color-brand-dark)] font-bold text-lg transition-all hover:scale-105 hover:brightness-110 active:scale-95 w-full sm:w-auto shadow-[0_0_30px_rgba(124,191,57,0.4)] cursor-pointer group"
            >
              <span className="flex items-center gap-2 uppercase tracking-wide font-primary">
                {isWaitingList ? 'Quero me inscrever' : 'Matricule-se agora'}
                <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
              </span>
            </button>

            {/* Botão de WhatsApp (Secundário) */}
            <button
              onClick={() => onOpenModal(whatsappUrl)}
              aria-label="Falar no WhatsApp"
              className={`shape-leaf inline-flex items-center justify-center gap-3 px-10 py-5 font-bold text-lg transition-all hover:scale-105 active:scale-95 w-full sm:w-auto cursor-pointer ${whatsappBtnClass}`}
            >
              <span className="flex items-center gap-2 uppercase tracking-wide font-primary">
                Falar no WhatsApp
              </span>
            </button>
          </div>



        </motion.div>
        
      </div>
    </section>
  );
}
