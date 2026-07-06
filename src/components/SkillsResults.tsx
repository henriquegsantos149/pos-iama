import { Database, Eye, Brain, Network, TrendingUp, Map as MapIcon } from 'lucide-react';
import { motion } from 'framer-motion';

const skills = [
  {
    icon: Database,
    title: "Engenharia de Dados & RAG",
    desc: "Estruturação e organização de dados de laudos e licenças para alimentar modelos de linguagem (LLMs)."
  },
  {
    icon: Eye,
    title: "Visão Computacional",
    desc: "Processamento e classificação automatizada de imagens de drones e satélites para uso do solo e fauna."
  },
  {
    icon: Brain,
    title: "Agentes Cognitivos",
    desc: "Criação e orquestração de fluxos complexos de tomada de decisão autônoma com agentes de IA."
  },
  {
    icon: Network,
    title: "IoT e Sensores",
    desc: "Coleta e telemetria contínua de dados ambientais em tempo real acoplados a modelos analíticos."
  },
  {
    icon: TrendingUp,
    title: "Modelos Preditivos",
    desc: "Modelagem estatística preditiva aplicada a cenários climáticos, desmatamento e recursos hídricos."
  },
  {
    icon: MapIcon,
    title: "Dashboards Geográficos",
    desc: "Integração espacial e visualização de dados analisados em geoportais dinâmicos para tomada de decisão."
  }
];

export default function SkillsResults() {
  return (
    <section className="py-16 md:py-24 bg-[var(--color-brand-dark-light)] relative overflow-hidden">
      {/* background grid */}
      <div className="absolute inset-0 bg-grid opacity-[0.05]"></div>
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 font-primary uppercase tracking-wide text-[var(--color-brand-dark)]">
            Habilidades e <span className="text-brand-gradient">Resultados Esperados</span>
          </h2>
          <p className="text-[var(--color-brand-dark)]/70 max-w-2xl mx-auto font-secondary">Desenvolva as competências mais valorizadas pelo mercado de geotecnologias.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-8 shape-leaf bg-white border border-black/10 hover:border-[var(--color-brand-primary)]/40 transition-colors shadow-md"
            >
              <div className="w-12 h-12 shape-leaf bg-black/5 flex items-center justify-center mb-6 group-hover:bg-[var(--color-brand-primary)]/10 transition-all duration-300">
                <skill.icon className="w-6 h-6 text-[var(--color-brand-dark)] group-hover:text-[var(--color-brand-secondary)] transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold mb-3 font-primary uppercase tracking-wide text-[var(--color-brand-dark)] group-hover:text-[var(--color-brand-primary)] transition-colors">
                {skill.title}
              </h3>
              <p className="text-[var(--color-brand-dark)]/70 font-secondary leading-relaxed">
                {skill.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
