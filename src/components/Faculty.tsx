import { motion } from 'framer-motion';

const base = import.meta.env.BASE_URL;

const facultyMembers = [
  {
    name: "Henrique Gonzalez",
    title: "ENGENHEIRO AMBIENTAL (UFRJ)",
    image: `${base}faculty/henrique.png`,
    resume: "Experiência sólida na área ambiental, focado em geoprocessamento e soluções tecnológicas."
  },
  {
    name: "Victor Valente Silvestre",
    title: "ENGENHEIRO AMBIENTAL E PESQUISADOR",
    image: `${base}faculty/victor.png`,
    resume: "Especialista em licenciamento ambiental e IA generativa aplicada ao setor ambiental, com mais de 17 anos de experiência."
  },
  {
    name: "Tatiana Pará",
    title: "ENGENHEIRA AGRÔNOMA E PROFESSORA DO IFPA",
    image: `${base}faculty/tatiana.png`,
    resume: "Atua com geotecnologias, geoprocessamento com IA e inclusão digital na Amazônia."
  },
  {
    name: "Vinícius Ragghianti",
    title: "ENGENHEIRO AMBIENTAL E SANITARISTA",
    image: `${base}faculty/vinicius.png`,
    resume: "Especialista em saneamento, gestão de projetos e IA generativa aplicada à engenharia."
  }
];

export default function Faculty() {
  return (
    <section id="professores" className="py-16 md:py-24 bg-[var(--color-brand-dark-light)] relative overflow-hidden border-t border-white/5">
      {/* Decorative subtle gradient glow */}
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-brand-gradient opacity-[0.03] blur-[80px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 font-primary uppercase tracking-wide leading-tight">
            Conheça alguns de{" "}
            <span className="inline-block bg-brand-gradient text-[var(--color-brand-dark)] px-4 py-1.5 mt-2 mb-1 shape-leaf transform -skew-x-6 font-extrabold shadow-md">
              <span className="inline-block transform skew-x-6 tracking-wider">Nossos Professores</span>
            </span>
          </h2>
          <p className="text-[var(--color-brand-light)]/70 max-w-2xl mx-auto font-secondary mt-6 text-base md:text-lg">
            Aprenda com especialistas de mercado e acadêmicos renomados nas melhores instituições do país.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {facultyMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="shape-leaf bg-white/[0.03] border border-white/10 overflow-hidden hover:border-[var(--color-brand-primary)]/50 hover:shadow-[0_0_30px_rgba(124,191,57,0.15)] transition-all duration-300 group flex flex-col shadow-lg shadow-black/40"
            >
              {/* Grayscale hover Image Container */}
              <div className="h-72 overflow-hidden relative shrink-0">
                <img
                  src={member.image}
                  alt={`${member.name} – Professor da Pós-Graduação`}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 ease-in-out"
                />
              </div>

              {/* Text details */}
              <div className="p-6 flex-1 flex flex-col justify-start">
                <div className="min-h-[105px] sm:min-h-[110px] md:min-h-[120px] lg:min-h-[135px] xl:min-h-[125px] flex flex-col justify-start">
                  <h3 className="text-lg md:text-xl xl:text-2xl font-bold text-[var(--color-brand-light)] mb-1 font-primary tracking-wide leading-tight group-hover:text-[var(--color-brand-primary)] transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-xs md:text-[13px] text-[var(--color-brand-primary)] font-bold uppercase tracking-wider leading-relaxed font-primary mt-1">
                    {member.title}
                  </p>
                </div>
                
                <div className="border-t border-white/10 pt-4 mt-2">
                  <p className="text-sm text-[var(--color-brand-light)]/70 leading-relaxed font-secondary">
                    {member.resume}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

