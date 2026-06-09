import { motion } from 'framer-motion';
import { Users, GraduationCap, CheckCircle } from 'lucide-react';

const targets = [
  {
    title: "O Gargalo da Operação",
    desc: "Realiza análises e rotinas ambientais no dia a dia, mas sente que atingiu o limite de produtividade física na elaboração e entrega de relatórios."
  },
  {
    title: "O Consultor Limitado",
    desc: "Dono de pequena consultoria preso no modelo de homem-hora que deseja empacotar serviços repetíveis em sistemas escaláveis."
  },
  {
    title: "O Geotecnólogo Estratégico",
    desc: "Sabe que classificação básica de imagens orbitais virou commodity e quer subir um nível arquitetando sistemas de IA."
  },
  {
    title: "O Analista Sobrecarregado",
    desc: "Afogado no processamento manual de laudos e PDFs em empresas ou órgãos públicos, sabendo que a TI nunca priorizará suas demandas."
  }
];

export default function TargetAudience() {
  return (
    <section className="py-16 md:py-24 bg-[var(--color-brand-dark-light)] border-y border-black/5 relative overflow-hidden">
      {/* Decorative gradient blur */}
      <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-brand-gradient opacity-[0.05] blur-[80px]"></div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        <motion.div
           initial={{ opacity: 0, x: -20 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 text-[var(--color-brand-secondary)] mb-6 font-primary uppercase tracking-widest font-bold text-sm">
            <Users className="w-5 h-5" />
            <span>Perfil do Aluno</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 font-primary uppercase leading-tight text-[var(--color-brand-dark)]">
            Para quem é esta <span className="text-brand-gradient">Pós-Graduação?</span>
          </h2>
          <div className="space-y-4 mt-8">
            {targets.map((item, i) => (
              <div key={i} className="bg-black/[0.03] border border-black/10 p-5 shape-leaf group hover:border-[var(--color-brand-primary)]/40 transition-all">
                <div className="flex items-center gap-3 mb-2">
                  <CheckCircle className="w-5 h-5 text-[var(--color-brand-primary)] shrink-0 group-hover:scale-110 transition-transform" />
                  <h4 className="font-bold text-[var(--color-brand-dark)] uppercase font-primary tracking-wide text-base">{item.title}</h4>
                </div>
                <p className="text-base text-[var(--color-brand-dark)]/85 font-secondary pl-8 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-brand-gradient p-1 shape-leaf"
        >
          <div className="bg-[var(--color-brand-dark)] p-10 shape-leaf h-full">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 shape-leaf bg-white/5 flex items-center justify-center text-[var(--color-brand-primary)]">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold font-primary uppercase tracking-wide text-brand-gradient">Pré-requisitos</h3>
            </div>
            
            <p className="text-lg text-[var(--color-brand-light)]/85 mb-8 font-secondary leading-relaxed">
              Para ingressar nesta Pós-Graduação e obter a certificação de especialista, o único requisito obrigatório é:
            </p>

            <div className="bg-white/5 border border-white/10 p-6 shape-leaf border-l-4 border-l-[var(--color-brand-primary)]">
              <p className="text-xl font-bold text-[var(--color-brand-light)] font-primary uppercase tracking-wide">
                Diploma de Ensino Superior
              </p>
            </div>

            <p className="mt-8 text-base text-[var(--color-brand-light)]/75 italic leading-relaxed">
              * Ideal para biólogos, engenheiros, geógrafos, geólogos e demais profissionais ambientais que querem dominar a construção de soluções e IA aplicadas ao setor.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
