import { motion } from 'framer-motion';
import { Verified, University, Code, Fingerprint, ShieldCheck, Hammer } from 'lucide-react';

const differencials = [
  {
    title: "Fim da Terceirização",
    description: "Pare de depender de programadores caros ou de ferramentas genéricas. O intervalo entre identificar o problema e ter o sistema rodando agora é de você e poucos dias.",
    icon: Hammer
  },
  {
    title: "Método Construtivo",
    description: "Você vai sair construindo, não apenas assistindo. O aprendizado é 100% focado no desenvolvimento ativo de soluções práticas.",
    icon: Code
  },
  {
    title: "Portfólio de Soluções",
    description: "Sem TCC teórico para engavetar. O entregável de conclusão da sua pós-graduação é um portfólio completo de sistemas de IA rodando.",
    icon: Verified
  },
  {
    title: "DNA Ambiental Pro",
    description: "Aprenda e domine o mesmo processo de construção de software e agentes de IA que já roda e entrega resultados na Ambiental Pro.",
    icon: Fingerprint
  },
  {
    title: "Chancela Anhanguera",
    description: "Especialização certificada de peso com validade nacional, chancelada pela Anhanguera.",
    icon: University
  },
  {
    title: "Hedge de Carreira",
    description: "A IA genérica absorverá a análise de rotina. Saber arquitetar sistemas inteligentes de IA sobre conhecimento ambiental é o que protege seu valor.",
    icon: ShieldCheck
  }
];

export default function Differentials() {
  return (
    <section className="py-16 md:py-24 bg-[var(--color-brand-dark)] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-primary uppercase tracking-wide">
            Por que escolher <span className="text-brand-gradient">esta Pós?</span>
          </h2>
          <p className="text-[var(--color-brand-light)]/70 max-w-2xl mx-auto">Diferenciais que garantem que seu investimento se transforme em autoridade no mercado.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {differencials.map((diff, index) => {
            const Icon = diff.icon;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="shape-leaf bg-white/5 p-8 border border-white/10 hover:border-[var(--color-brand-secondary)]/30 transition-all flex flex-col items-start gap-5 group relative overflow-hidden"
              >
                {/* corner gradient touch */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-brand-gradient opacity-10 rounded-full blur-[30px] group-hover:opacity-30 transition-opacity"></div>
                
                <div className="w-16 h-16 shape-leaf bg-white/5 border border-white/10 flex items-center justify-center text-[var(--color-brand-primary)] group-hover:scale-110 group-hover:bg-brand-gradient group-hover:text-white transition-all duration-500">
                  <Icon className="w-8 h-8 group-hover:text-white transition-colors duration-500" />
                </div>
                <div className="relative z-10 mt-2">
                  <h3 className="text-2xl font-bold text-[var(--color-brand-light)] mb-3 font-primary uppercase tracking-wide">{diff.title}</h3>
                  <p className="text-[var(--color-brand-light)]/60 leading-relaxed font-secondary">{diff.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
