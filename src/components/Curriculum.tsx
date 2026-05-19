import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const modules = [
  {
    title: "Fundamentos de Inteligência Artificial e Machine Learning",
    objective: "Compreender os algoritmos e modelos matemáticos preditivos fundamentais da IA e do Aprendizado de Máquina.",
    practicalFocus: "Definições e abordagens; Conceitos e algoritmos fundamentais; Estrutura, treinamento e aplicações; Evolução computacional e otimização.",
    faculty: "Victor Silvestre e Vinicius Ragghianti"
  },
  {
    title: "Arquitetura de Dados Ambientais",
    objective: "Processar e estruturar grandes volumes de documentos (PDFs, laudos e licenças) para alimentar fluxos RAG e LLMs.",
    practicalFocus: "Gestão de documentos, licenças e textos jurídicos; Estruturação de bancos de dados para suporte a modelos de linguagem (LLMs) e Recuperação Aumentada por Geração (RAG).",
    faculty: "Victor Sacramento"
  },
  {
    title: "Internet das Coisas (IoT) e Redes de Sensores em Tempo Real",
    objective: "Projetar redes de sensores e sistemas de telemetria para coleta e captação contínua de dados ambientais em tempo real.",
    practicalFocus: "Coleta contínua de dados de qualidade de ar e água; Redes de sensores; Protocolos de comunicação e telemetria ambiental em tempo real.",
    faculty: "Especialistas Convidados"
  },
  {
    title: "Visão Computacional Aplicada ao Meio Ambiente",
    objective: "Automatizar o processamento visual de dados ambientais com deep learning em imagens de satélite, radar e drones.",
    practicalFocus: "Identificação automática de espécies; Classificação de uso do solo; Detecção de padrões em imagens orbitais e de drones.",
    faculty: "@NeloreTech"
  },
  {
    title: "Modelos Preditivos para Sistemas Naturais",
    objective: "Construir modelos de alta precisão para simular desmatamento, comportamento de fauna e riscos de mudanças climáticas.",
    practicalFocus: "Desenvolvimento de modelos preditivos aplicados ao desmatamento, comportamento de fauna e cenários de mudanças climáticas.",
    faculty: "Especialistas Convidados"
  },
  {
    title: "Desenvolvimento de Software Orientado a IA (AI-Driven Dev)",
    objective: "Criar, programar e implantar suas próprias ferramentas e soluções ambientais usando IA acelerada (AI-Driven Dev).",
    practicalFocus: "Uso de ferramentas e agentes de IA para criação acelerada de soluções customizadas; Prototipagem rápida de ferramentas ambientais.",
    faculty: "Henrique Gonzalez"
  },
  {
    title: "Arquitetura de Agentes Autônomos e Cognitivos",
    objective: "Orquestrar múltiplos agentes autônomos e LLMs para automatizar análises complexas e tomada de decisão independente.",
    practicalFocus: "Lógica de raciocínio e execução de tarefas por IA; Orquestração de agentes para fluxos complexos de tomada de decisão.",
    faculty: "Henrique Gonzalez"
  },
  {
    title: "Interoperabilidade e Ecossistemas de Dashboards e Geoportais",
    objective: "Integrar APIs e bancos de dados espaciais para criar dashboards interativos e geoportais ambientais interoperáveis.",
    practicalFocus: "Centralização de camadas geográficas; Comunicação entre sistemas (APIs); Integração de documentação técnica com bases espaciais.",
    faculty: "Victor Sacramento"
  },
  {
    title: "Gêmeos Digitais de Ecossistemas (Digital Twins)",
    objective: "Criar réplicas virtuais (Gêmeos Digitais) de bacias e áreas protegidas para simular impactos e intervenções ambientais.",
    practicalFocus: "Criação de réplicas virtuais de bacias hidrográficas e áreas protegidas; Simulação de impactos e testes de cenários antes da intervenção real.",
    faculty: "Especialistas Convidados"
  },
  {
    title: "Ética, Privacidade e Segurança de Dados",
    objective: "Implementar governança de dados ambientais em conformidade com a LGPD e boas práticas de segurança cibernética.",
    practicalFocus: "Legislação e regulamentação de proteção de dados (LGPD); Ferramentas e Bibliotecas Open Source para detecção de anomalias e segurança cibernética.",
    faculty: "Especialistas Convidados"
  },
  {
    title: "Gestão de Projetos Tecnológicos de Alto Impacto",
    objective: "Liderar projetos de tecnologia ambiental aplicando metodologias ágeis e análise de viabilidade econômico-financeira.",
    practicalFocus: "Metodologias ágeis aplicadas ao desenvolvimento de soluções ambientais; Gestão de equipes multidisciplinares e viabilidade de projetos tech.",
    faculty: "Especialistas Convidados"
  }
];

export default function Curriculum() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="curriculo" className="py-16 md:py-24 bg-[var(--color-brand-dark-light)] relative overflow-hidden">
      {/* background grid again for continuity */}
      <div className="absolute inset-0 bg-grid opacity-[0.05]"></div>
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 font-primary uppercase tracking-wide">
            Eixos <span className="inline-block bg-brand-gradient text-[var(--color-brand-dark)] px-3 py-1 mt-2 mb-1 shape-leaf transform -skew-x-6"><span className="inline-block transform skew-x-6">Temáticos</span></span>
          </h2>
          <p className="text-lg md:text-xl text-[var(--color-brand-light)]/85 max-w-2xl mx-auto font-secondary">11 temas fundamentais desenhados para conectar a teoria ambiental ao desenvolvimento de IA de ponta.</p>
        </div>

        <div className="space-y-4">
          {modules.map((mod, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index}
                className={`shape-leaf bg-white/[0.03] backdrop-blur-sm border transition-all duration-300 ${isOpen ? 'border-[var(--color-brand-primary)] shadow-[0_0_25px_rgba(124,191,57,0.2)]' : 'border-white/10 hover:border-[var(--color-brand-accent)]/40 shadow-lg shadow-black/40'}`}
              >
                <button 
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left group"
                >
                  <div className="flex items-center gap-6">
                    <div className={`w-12 h-12 shape-leaf flex items-center justify-center font-bold font-impact text-xl transition-all duration-300 ${isOpen ? 'bg-brand-gradient text-[var(--color-brand-dark)] shadow-[0_0_15px_rgba(22,140,64,0.4)]' : 'bg-white/5 text-[var(--color-brand-light)]/40 group-hover:bg-white/10'}`}>
                      {(index + 1).toString().padStart(2, '0')}
                    </div>
                    <h3 className={`text-xl font-bold font-primary uppercase tracking-wide transition-colors duration-300 ${isOpen ? 'text-[var(--color-brand-primary)]' : 'text-[var(--color-brand-light)]'}`}>
                      {mod.title}
                    </h3>
                  </div>
                  <ChevronDown className={`w-6 h-6 transition-transform duration-300 ${isOpen ? 'rotate-180 text-[var(--color-brand-primary)]' : 'text-[var(--color-brand-light)]/40'}`} />
                </button>
                
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="px-8 pb-8 pt-0 md:pl-26 space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-primary)] mt-2.5 shrink-0" />
                      <p className="text-[var(--color-brand-light)]/80 text-base md:text-lg font-secondary">
                        <strong className="text-[var(--color-brand-primary)] uppercase text-sm tracking-widest block mb-1">Objetivo</strong>
                        {mod.objective}
                      </p>
                    </div>

                    {false && mod.faculty && (
                      <div className="flex items-start gap-4">
                        <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-secondary)] mt-2.5 shrink-0" />
                        <p className="text-[var(--color-brand-light)]/80 text-base md:text-lg font-secondary">
                          <strong className="text-[var(--color-brand-secondary)] uppercase text-xs tracking-widest block mb-1">Docentes Confirmados</strong>
                          {mod.faculty}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
