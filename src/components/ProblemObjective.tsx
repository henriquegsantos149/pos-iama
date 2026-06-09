import { motion } from 'framer-motion';
import { AlertCircle, TrendingUp } from 'lucide-react';

export default function ProblemObjective() {
  return (
    <section id="problema" className="py-16 md:py-24 relative overflow-hidden bg-[var(--color-brand-dark-light)]">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Dores */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-8"
          >
            <div>
              <div className="flex items-center gap-3 text-[var(--color-brand-primary)] mb-4 font-primary uppercase tracking-[0.2em] font-bold text-sm">
                <AlertCircle className="w-5 h-5" />
                <span>O Diagnóstico do Setor</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4 font-primary uppercase leading-tight text-[var(--color-brand-dark)]">
                As três camadas de gargalo do <span className="text-brand-gradient">profissional ambiental</span>
              </h2>

            </div>

            <div className="space-y-6">
              {/* Operacional */}
              <div className="bg-black/[0.03] border border-black/10 p-6 shape-leaf hover:border-black/20 transition-colors">
                <h3 className="text-lg font-bold text-[var(--color-brand-primary)] uppercase font-primary tracking-wider mb-2">1. Gargalo Operacional (O Mar de PDFs)</h3>
                <p className="text-base text-[var(--color-brand-dark)]/85 leading-relaxed font-secondary">
                  Processar laudos e planilhas de forma manual é lento e ineficiente. Sem automação, o especialista consome seu tempo em digitação e tarefas repetitivas.
                </p>
              </div>

              {/* Econômica */}
              <div className="bg-black/[0.03] border border-black/10 p-6 shape-leaf hover:border-black/20 transition-colors">
                <h3 className="text-lg font-bold text-[var(--color-brand-secondary)] uppercase font-primary tracking-wider mb-2">2. Gargalo Econômico (A Escala de Horas)</h3>
                <p className="text-base text-[var(--color-brand-dark)]/85 leading-relaxed font-secondary">
                  Depender de softwares genéricos ou desenvolvedores caros limita o faturamento. Sem autonomia técnica, o especialista deixa a margem de lucro com intermediários.
                </p>
              </div>

              {/* Estratégica */}
              <div className="bg-black/[0.03] border border-black/10 p-6 shape-leaf hover:border-black/20 transition-colors">
                <h3 className="text-lg font-bold text-[var(--color-brand-accent)] uppercase font-primary tracking-wider mb-2">3. Gargalo Estratégico (Comoditização)</h3>
                <p className="text-base text-[var(--color-brand-dark)]/85 leading-relaxed font-secondary">
                  A inteligência artificial básica já substitui análises rotineiras. A única proteção real é evoluir para arquitetar e automatizar suas próprias soluções de IA.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Objetivo / Big Idea */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 shape-leaf bg-brand-gradient p-1 shadow-2xl sticky top-28"
          >
            <div className="bg-[var(--color-brand-dark)] p-8 md:p-10 shape-leaf h-full flex flex-col justify-between">
              <div>
                <p className="text-2xl md:text-3xl font-extrabold mb-8 font-primary uppercase tracking-wider leading-tight text-brand-gradient">
                  "De quem descreve o problema a quem constrói o sistema."
                </p>

                <div className="space-y-4 text-base text-[var(--color-brand-light)]/85 font-secondary leading-relaxed">
                  <p>
                    A IA eliminou a barreira técnica. Quem vive o problema em campo agora tem o poder de criar o próprio sistema para resolvê-lo.
                  </p>
                  <p>
                    Esta janela de oportunidade é única e não ficará aberta para sempre.
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/5 flex items-center gap-3 text-[var(--color-brand-primary)] font-bold italic font-secondary text-sm">
                <TrendingUp className="w-5 h-5 shrink-0" />
                <span>Essa pós é o seu hedge contra a comoditização da profissão.</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
