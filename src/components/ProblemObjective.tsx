import { motion } from 'framer-motion';
import { AlertCircle, TrendingUp } from 'lucide-react';

export default function ProblemObjective() {
  return (
    <section id="problema" className="py-16 md:py-24 relative overflow-hidden bg-[var(--color-brand-dark)]">
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
              <h2 className="text-3xl md:text-5xl font-bold mb-4 font-primary uppercase leading-tight">
                As três camadas de gargalo do <span className="text-brand-gradient">profissional ambiental</span>
              </h2>
              <p className="text-[var(--color-brand-light)]/60 font-secondary text-lg">
                O mercado mudou. O modelo tradicional de consultoria e análise ambiental atingiu seu limite técnico e financeiro.
              </p>
            </div>

            <div className="space-y-6">
              {/* Operacional */}
              <div className="bg-white/[0.02] border border-white/5 p-6 shape-leaf hover:border-white/10 transition-colors">
                <h3 className="text-lg font-bold text-[var(--color-brand-primary)] uppercase font-primary tracking-wider mb-2">1. Gargalo Operacional (O Mar de PDFs)</h3>
                <p className="text-base text-[var(--color-brand-light)]/85 leading-relaxed font-secondary">
                  Processar laudos imensos, imagens e planilhas "no braço" é inviável. Sem automação, o especialista vira um mero digitador e o principal gargalo da entrega.
                </p>
              </div>

              {/* Econômica */}
              <div className="bg-white/[0.02] border border-white/5 p-6 shape-leaf hover:border-white/10 transition-colors">
                <h3 className="text-lg font-bold text-[var(--color-brand-secondary)] uppercase font-primary tracking-wider mb-2">2. Gargalo Econômico (A Escala de Horas)</h3>
                <p className="text-base text-[var(--color-brand-light)]/85 leading-relaxed font-secondary">
                  Para faturar mais hoje, depende-se de softwares genéricos ou desenvolvedores caros. Quem entende do problema não sabe criar o sistema, deixando o lucro da escala com intermediários.
                </p>
              </div>

              {/* Estratégica */}
              <div className="bg-white/[0.02] border border-white/5 p-6 shape-leaf hover:border-white/10 transition-colors">
                <h3 className="text-lg font-bold text-[var(--color-brand-accent)] uppercase font-primary tracking-wider mb-2">3. Gargalo Estratégico (Comoditização)</h3>
                <p className="text-base text-[var(--color-brand-light)]/85 leading-relaxed font-secondary">
                  A IA básica está engolindo análises rotineiras. A única proteção real contra a desvalorização profissional é subir de nível: aprender a arquitetar as próprias soluções de IA e automatizar essas análises.
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
                    Por décadas, o profissional ambiental entendeu o problema em campo, mas dependeu de programadores para criar soluções. A IA quebrou essa barreira técnica.
                  </p>
                  <p>
                    Quem conhece o problema de perto agora está na melhor posição para criar o sistema que o resolve. Esta janela de oportunidade única não ficará aberta para sempre.
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
