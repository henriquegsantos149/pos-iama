import { motion } from 'framer-motion';

const apps = [
  {
    image: `${import.meta.env.BASE_URL}applications/enviroasset_dashboard.webp`,
    title: "Monitoramento de Licenciamentos",
    desc: "Sistemas inteligentes que varrem portais públicos, extraem prazos críticos de licenças e disparam alertas automáticos para o time."
  },
  {
    image: `${import.meta.env.BASE_URL}applications/agente_pareceres_holograma.webp`,
    title: "Agente de Pareceres e RAG",
    desc: "Plataformas que varrem dezenas de laudos e PDFs ambientais estruturando os dados e rascunhando pareceres em poucos segundos."
  },
  {
    image: `${import.meta.env.BASE_URL}applications/app_iot.webp`,
    title: "Telemetria de Sensores IoT",
    desc: "Sistemas de alertas em tempo real alimentados por sensores de qualidade do ar e da água integrados diretamente na nuvem."
  },
  {
    image: `${import.meta.env.BASE_URL}applications/app_cv.webp`,
    title: "Visão Computacional Orbital",
    desc: "Processamento automático de dados de satélites e drones para classificação de solo e monitoramento de ativos florestais."
  },
  {
    image: `${import.meta.env.BASE_URL}applications/gemeos_digitais.webp`,
    title: "Simulação de Gêmeos Digitais",
    desc: "Réplicas virtuais de bacias hidrográficas e áreas protegidas para rodar simulações de impacto e testes antes de intervenções reais."
  },
  {
    image: `${import.meta.env.BASE_URL}applications/app_geoportal.webp`,
    title: "Geoportais & APIs de IA",
    desc: "Desenvolvimento de dashboards dinâmicos integrando mapas geográficos tradicionais com modelos analíticos preditivos."
  }
];

export default function PracticalApplications() {
  return (
    <section className="py-16 md:py-24 bg-[var(--color-brand-dark-light)] relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 font-primary uppercase tracking-wide">
              Aplicações <span className="text-brand-gradient">Práticas</span>
            </h2>
            <p className="text-[var(--color-brand-light)]/70">Onde e como você poderá aplicar seu conhecimento no dia a dia profissional.</p>
          </div>
          <div className="h-px flex-1 bg-white/10 mb-4 hidden md:block"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {apps.map((app, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex flex-col bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-[var(--color-brand-primary)] hover:bg-white/10 transition-all duration-300 shadow-lg"
            >
              <div className="relative h-48 sm:h-56 w-full overflow-hidden bg-black/20">
                <img 
                  src={app.image} 
                  alt={app.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100" 
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-brand-dark)]/80 to-transparent"></div>
              </div>
              <div className="p-6 md:p-8 flex flex-col flex-1">
                <h3 className="text-lg md:text-xl font-bold mb-3 font-primary uppercase tracking-wide group-hover:text-[var(--color-brand-secondary)] transition-colors">
                  {app.title}
                </h3>
                <p className="text-[var(--color-brand-light)]/60 font-secondary text-sm md:text-base leading-relaxed">
                  {app.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
