import { motion } from 'framer-motion';
import { Clock, BookOpen, MonitorPlay, Award } from 'lucide-react';

export default function CourseInfo() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="relative py-16 md:py-24 bg-[var(--color-brand-dark-light)] border-y border-black/5">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-primary uppercase tracking-wide text-[var(--color-brand-dark)]">
            Sobre o <span className="text-brand-gradient">Curso</span>
          </h2>
          <p className="text-[var(--color-brand-dark)]/70 max-w-2xl mx-auto font-secondary">Tudo que você precisa saber sobre a estrutura técnica e operacional da Pós-Graduação.</p>
        </div>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px", amount: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {/* Card: Título */}
          <motion.div variants={item} className="shape-leaf bg-white border border-black/10 p-8 hover:border-[var(--color-brand-primary)]/50 transition-all group relative overflow-hidden shadow-lg shadow-black/10">
            <div className="absolute top-0 right-0 w-24 h-24 bg-brand-gradient opacity-10 rounded-full blur-[40px] group-hover:opacity-30 transition-opacity"></div>
            <div className="w-14 h-14 shape-leaf bg-black/5 flex items-center justify-center mb-6 border border-black/10 group-hover:border-[var(--color-brand-primary)]/50 transition-colors">
              <Award className="w-7 h-7 text-[var(--color-brand-primary)]" />
            </div>
            <h3 className="text-lg font-semibold text-[var(--color-brand-dark)] mb-2 font-primary uppercase">Título</h3>
            <p className="text-xl font-impact tracking-wider text-brand-gradient leading-tight">Especialista em Inteligência Artificial Aplicada ao Meio Ambiente</p>
          </motion.div>

          {/* Card 1 */}
          <motion.div variants={item} className="shape-leaf bg-white border border-black/10 p-8 hover:border-[var(--color-brand-primary)]/50 transition-all group relative overflow-hidden shadow-lg shadow-black/10">
            <div className="absolute top-0 right-0 w-24 h-24 bg-brand-gradient opacity-10 rounded-full blur-[40px] group-hover:opacity-30 transition-opacity"></div>
            <div className="w-14 h-14 shape-leaf bg-black/5 flex items-center justify-center mb-6 border border-black/10 group-hover:border-[var(--color-brand-primary)]/50 transition-colors">
              <Clock className="w-7 h-7 text-[var(--color-brand-primary)]" />
            </div>
            <h3 className="text-lg font-semibold text-[var(--color-brand-dark)] mb-2 font-primary uppercase">Duração</h3>
            <p className="text-4xl font-impact tracking-wider text-brand-gradient">12 meses</p>
          </motion.div>

          {/* Card 2 */}
          <motion.div variants={item} className="shape-leaf bg-white border border-black/10 p-8 hover:border-[var(--color-brand-secondary)]/50 transition-all group relative overflow-hidden shadow-lg shadow-black/10">
            <div className="absolute top-0 right-0 w-24 h-24 bg-brand-gradient opacity-10 rounded-full blur-[40px] group-hover:opacity-30 transition-opacity"></div>
            <div className="w-14 h-14 shape-leaf bg-black/5 flex items-center justify-center mb-6 border border-black/10 group-hover:border-[var(--color-brand-secondary)]/50 transition-colors">
              <BookOpen className="w-7 h-7 text-[var(--color-brand-secondary)]" />
            </div>
            <h3 className="text-lg font-semibold text-[var(--color-brand-dark)] mb-2 font-primary uppercase">Carga Horária</h3>
            <p className="text-4xl font-impact tracking-wider text-brand-gradient">440h</p>
          </motion.div>

          {/* Card 3 */}
          <motion.div variants={item} className="shape-leaf bg-white border border-black/10 p-8 hover:border-[var(--color-brand-accent)]/50 transition-all group relative overflow-hidden shadow-lg shadow-black/10">
            <div className="absolute top-0 right-0 w-24 h-24 bg-brand-gradient opacity-10 rounded-full blur-[40px] group-hover:opacity-30 transition-opacity"></div>
            <div className="w-14 h-14 shape-leaf bg-black/5 flex items-center justify-center mb-6 border border-black/10 group-hover:border-[var(--color-brand-accent)]/50 transition-colors">
              <MonitorPlay className="w-7 h-7 text-[var(--color-brand-accent)]" />
            </div>
            <h3 className="text-lg font-semibold text-[var(--color-brand-dark)] mb-2 font-primary uppercase">Modalidade</h3>
            <p className="text-3xl font-impact tracking-wider text-brand-gradient leading-tight">100% EAD<br /><span className="text-sm font-secondary tracking-normal text-[var(--color-brand-dark)]/60 uppercase">Aulas Gravadas</span></p>
          </motion.div>
        </motion.div>

        {/* Footer info area: Chancela and Parceiros */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Card Anhanguera */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-3 col-span-1 shape-leaf bg-white border border-black/10 p-8 flex flex-col md:flex-row items-center gap-6 relative overflow-hidden shadow-lg shadow-black/10"
          >
            {/* subtle glow */}
            <div className="absolute top-1/2 left-10 -translate-y-1/2 w-32 h-32 bg-brand-gradient opacity-[0.08] blur-[50px] pointer-events-none"></div>

            <div className="flex-shrink-0 w-36 h-36 shape-leaf bg-black/5 border border-black/10 flex items-center justify-center relative z-10 p-4">
              <img 
                src={`${import.meta.env.BASE_URL}logo-anhanguera.webp`} 
                alt="Anhanguera - Selo e Chancela de Excelência de Ensino Superior da Pós-Graduação" 
                className="max-h-26 md:max-h-28 w-auto object-contain"
                loading="lazy"
              />
            </div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-2 text-[var(--color-brand-dark)] font-primary uppercase tracking-wide">Chancela Anhanguera</h3>
              <p className="text-[var(--color-brand-dark)]/70 text-base leading-relaxed">Mais de 25 anos de tradição em ensino superior, com excelência reconhecida em seus cursos de graduação e pós-graduação. Um diploma de peso para sua carreira.</p>
            </div>
          </motion.div>

          {/* Card MEC */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="lg:col-span-1 col-span-1 shape-leaf bg-white border border-black/10 p-8 flex flex-col justify-center items-center gap-4 relative overflow-hidden shadow-lg shadow-black/10 text-center hover:border-[var(--color-brand-secondary)]/50 transition-colors group"
          >
            {/* subtle glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-brand-gradient opacity-[0.08] blur-[50px] pointer-events-none"></div>

            <div className="relative z-10">
              <h3 className="text-base md:text-lg font-bold text-[var(--color-brand-dark)] font-primary uppercase tracking-wide">Nota 5 no MEC</h3>
            </div>

            <div className="relative z-10">
              <img 
                src={`${import.meta.env.BASE_URL}mec-badge.webp`} 
                alt="Selo do MEC - Reconhecimento pelo Ministério da Educação com Nota Máxima" 
                className="h-20 md:h-24 w-auto object-contain"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
