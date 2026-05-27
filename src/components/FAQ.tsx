import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    q: "Preciso saber programar para ingressar no curso?",
    a: "Não. A pós foi estruturada para quem está começando do zero. Você aprenderá os fundamentos de lógica e, principalmente, como usar assistentes e agentes de Inteligência Artificial modernos para acelerar e guiar a codificação das suas ferramentas."
  },
  {
    q: "O que é o entregável de conclusão de curso?",
    a: "Diga adeus ao TCC acadêmico comum. O nosso modelo foca em portfólio. Ao final da pós, o seu projeto de conclusão será um portfólio de sistemas funcionais (leitores de PDFs, mapas inteligentes, dashboards de telemetria) rodando em produção."
  },
  {
    q: "Como funcionam as aulas e a prática?",
    a: "O curso é 100% online (EAD). As aulas ficam gravadas e acessíveis na nossa plataforma 24 horas por dia, 7 dias por semana. Você pode assistir e praticar no seu próprio ritmo, conciliando com sua rotina de trabalho."
  },
  {
    q: "Quais tecnologias eu vou dominar?",
    a: "Você aprenderá a integrar bancos de dados não estruturados com modelos de linguagem (RAG), processamento de imagens orbitais via visão computacional, telemetria contínua com sensores IoT e a publicação de dashboards dinâmicos integrados com IAs."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-16 md:py-24 bg-[var(--color-brand-dark-light)] border-t border-white/5">
      <div className="max-w-4xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="w-12 h-12 shape-leaf bg-brand-gradient flex items-center justify-center text-[var(--color-brand-dark)]">
              <HelpCircle className="w-6 h-6" />
            </div>
          </div>
          <h2 className="text-3xl font-bold mb-4 font-primary uppercase tracking-wide">
            Perguntas <span className="text-brand-gradient">Frequentes</span>
          </h2>
          <p className="text-[var(--color-brand-light)]/70">Tire suas dúvidas sobre a metodologia, certificação e acesso.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="shape-leaf bg-white/5 border border-white/5 overflow-hidden transition-all duration-300 hover:border-white/20">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full px-8 py-6 flex items-center justify-between gap-4 text-left"
                >
                  <span className={`font-bold font-primary uppercase tracking-wide transition-colors ${isOpen ? 'text-[var(--color-brand-primary)]' : 'text-[var(--color-brand-light)]'}`}>
                    {faq.q}
                  </span>
                  <ChevronDown className={`w-5 h-5 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-[var(--color-brand-primary)]' : 'text-[var(--color-brand-light)]/40'}`} />
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-8 pb-8 text-[var(--color-brand-light)]/70 font-secondary leading-relaxed border-t border-white/5 pt-4">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
