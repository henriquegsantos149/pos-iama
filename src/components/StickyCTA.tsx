import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface StickyCTAProps {
  onOpenModal: (url: string) => void;
}

export default function StickyCTA({ onOpenModal }: StickyCTAProps) {
  const checkoutUrl = "https://pay.voompcreators.com.br/14929";
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Exibe o Sticky CTA logo no início da rolagem (a partir de 150px)
      if (window.scrollY > 150) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Executa no carregamento inicial para caso a página comece com scroll
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 pointer-events-none">
          <motion.button
            onClick={() => onOpenModal(checkoutUrl)}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="pointer-events-auto flex items-center gap-3 bg-brand-gradient text-[var(--color-brand-dark)] px-4 py-3 md:px-6 md:py-4 shape-leaf shadow-[0_10px_30px_rgba(88,174,105,0.4)] transition-all hover:brightness-110 cursor-pointer"
          >
            <div className="relative z-10 flex items-center">
              <span className="font-primary font-extrabold uppercase tracking-wider text-xs sm:text-sm md:text-base leading-tight">
                Matricule-se agora
              </span>
            </div>
          </motion.button>
        </div>
      )}
    </AnimatePresence>
  );
}
