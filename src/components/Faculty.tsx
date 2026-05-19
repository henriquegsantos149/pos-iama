import { motion } from 'framer-motion';
import { User, Terminal } from 'lucide-react';

const base = import.meta.env.BASE_URL;

const facultyMembers = [
  {
    name: "Henrique Gonzalez",
    title: "Co-fundador da Ambiental Pro",
    image: `${base}faculty/henrique.png`,
    isPlaceholder: false,
    resume: "Engenheiro Ambiental na UFRJ com intercâmbio na University of Technology de Sydney, Austrália. Especialista em Geotecnologias, já tendo ministrado formações para mais de 70.000 profissionais."
  },
  {
    name: "Victor Sacramento",
    title: "Engenheiro de Dados & Geotecnólogo",
    isPlaceholder: true,
    resume: "Especialista em arquitetura de dados geográficos e estruturação de dados não estruturados para IA. Pioneiro em fluxos RAG voltados ao licenciamento."
  },
  {
    name: "Victor Silvestre",
    title: "Especialista em Machine Learning",
    isPlaceholder: true,
    resume: "Doutorando e pesquisador em inteligência artificial, focado em conceitos, treinamento e otimização de modelos preditivos e classificação supervisionada."
  },
  {
    name: "Vinicius Ragghianti",
    title: "Especialista em IA Aplicada",
    isPlaceholder: true,
    resume: "Especialista em arquitetura de redes neurais artificiais e aplicações práticas de machine learning no processamento de dados físicos e ambientais."
  },
  {
    name: "NeloreTech",
    title: "Especialistas em Visão Computacional",
    isPlaceholder: true,
    isOrg: true,
    resume: "Empresa parceira especialista na implementação de visão computacional de alta performance para detecção e classificação automática de espécies e uso do solo."
  }
];

export default function Faculty() {
  return (
    <section id="professores" className="py-16 md:py-24 bg-[var(--color-brand-dark-light)] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 font-primary uppercase tracking-wide">
            Conheça alguns de <span className="inline-block bg-brand-gradient text-[var(--color-brand-dark)] px-3 py-1 mt-2 mb-1 shape-leaf transform -skew-x-6"><span className="inline-block transform skew-x-6">nossos professores</span></span>
          </h2>
          <p className="text-[var(--color-brand-light)]/70 max-w-2xl mx-auto font-secondary">Aprenda com quem constrói e lidera soluções tecnológicas voltadas ao mercado ambiental.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {facultyMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="shape-leaf bg-white/[0.03] backdrop-blur-sm border border-white/10 overflow-hidden hover:border-[var(--color-brand-primary)]/50 transition-all group hover:shadow-[0_0_30px_rgba(124,191,57,0.15)] flex flex-col shadow-lg shadow-black/40"
            >
              {/* Image container must also follow the shape or part of it */}
              <div className="h-64 overflow-hidden relative shrink-0">
                {member.isPlaceholder ? (
                  <div className="w-full h-full bg-gradient-to-br from-[var(--color-brand-dark)] to-[var(--color-brand-accent)]/20 flex flex-col items-center justify-center relative group-hover:scale-105 transition-transform duration-500 overflow-hidden">
                    {/* Sleek cyber grid overlay */}
                    <div className="absolute inset-0 bg-grid opacity-10"></div>
                    {/* Glowing neon green user silhouette */}
                    <div className="w-24 h-24 rounded-full border-2 border-[var(--color-brand-primary)]/40 bg-[var(--color-brand-dark)]/80 flex items-center justify-center relative z-10 shadow-[0_0_20px_rgba(124,191,57,0.2)]">
                      {member.isOrg ? (
                        <Terminal className="w-12 h-12 text-[var(--color-brand-primary)] animate-pulse" />
                      ) : (
                        <User className="w-12 h-12 text-[var(--color-brand-primary)]" />
                      )}
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 bg-black/80 border border-white/5 py-1.5 px-3 rounded text-center z-10">
                      <span className="text-[10px] text-[var(--color-brand-primary)] uppercase tracking-[0.2em] font-bold">
                        {member.isOrg ? "Parceiro" : "Docente Convidado"}
                      </span>
                    </div>
                  </div>
                ) : (
                  <img
                    src={member.image}
                    alt={`${member.name} – Professor da Pós-Graduação em Inteligência Artificial Aplicada ao Meio Ambiente`}
                    className="w-full h-full object-cover grayscale-0 md:grayscale opacity-100 md:opacity-90 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                  />
                )}
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-[var(--color-brand-light)] mb-1 font-primary group-hover:text-[var(--color-brand-primary)] transition-colors">{member.name}</h3>
                  <p className="text-sm text-[var(--color-brand-secondary)] mb-4 font-semibold uppercase tracking-wider">{member.title}</p>
                </div>
                <p className="text-sm text-[var(--color-brand-light)]/60 leading-relaxed border-t border-white/10 pt-4 font-secondary">{member.resume}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
