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
    title: "IA Generativa na Elaboração de Estudos Ambientais",
    objective: "Utilizar modelos generativos avançados (LLMs) para otimizar e apoiar a elaboração de laudos, relatórios técnicos e estudos de impacto ambiental.",
    practicalFocus: "Engenharia de prompts para relatórios; Automatização na redação técnica de estudos de impacto (EIA/RIMA); Análise assistida por LLMs de conformidade jurídica.",
    faculty: "Especialistas Convidados"
  },
  {
    title: "Internet das Coisas (IoT) e Redes de Sensores em Tempo Real",
    objective: "Projetar redes de sensores e sistemas de telemetria para coleta e captação contínua de dados ambientais em tempo real.",
    practicalFocus: "Coleta contínua de dados de qualidade de ar e água; Redes de sensores; Protocolos de comunicação e telemetria ambiental em tempo real.",
    faculty: "Especialistas Convidados"
  },
  {
    title: "IA e Visão Computacional na Análise Geoespacial",
    objective: "Processar dados espaciais e imagens aéreas ou de satélite com algoritmos de Deep Learning para identificar padrões e alterações na cobertura terrestre.",
    practicalFocus: "Identificação automática de desmatamento; Classificação avançada de uso do solo com deep learning; Drones e processamento de imagens orbitais.",
    faculty: "@NeloreTech"
  },
  {
    title: "Modelos Preditivos para Sistemas Naturais",
    objective: "Construir modelos de alta precisão para simular desmatamento, comportamento de fauna e riscos de mudanças climáticas.",
    practicalFocus: "Desenvolvimento de modelos preditivos aplicados ao desmatamento, comportamento de fauna e cenários de mudanças climáticas.",
    faculty: "Especialistas Convidados"
  },
  {
    title: "Conceitos gerais e principais abordagens de desenvolvimento do software",
    objective: "Dominar os princípios da engenharia de software, ciclos de vida de sistemas e as diferentes abordagens e metodologias de desenvolvimento.",
    practicalFocus: "Metodologias ágeis e tradicionais; Ciclo de vida e qualidade de software; Conceitos fundamentais de arquitetura e documentação de sistemas.",
    faculty: "Especialistas Convidados"
  },
  {
    title: "Desenvolvimento de Sistemas com Agentes Autônomos",
    objective: "Projetar e construir sistemas baseados em múltiplos agentes de IA que tomam decisões, cooperam e automatizam fluxos operacionais complexos.",
    practicalFocus: "Arquitetura e orquestração de múltiplos agentes; Frameworks modernos para agentes autônomos; Integração de LLMs a ferramentas externas.",
    faculty: "Henrique Gonzalez"
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
    title: "Teste e Inspeção de Software: Técnicas e Automatização",
    objective: "Aprender e aplicar técnicas de teste e inspeção de código para garantir a qualidade, confiabilidade e estabilidade de sistemas baseados em IA.",
    practicalFocus: "Automação de testes de unidade e integração; Estratégias de testes para sistemas complexos; Inspeção estática de código e pipelines de CI/CD.",
    faculty: "Especialistas Convidados"
  },
  {
    title: "Análise e modelagem de negócios (BABOK/Product Owner)",
    objective: "Alinhar o desenvolvimento de soluções de software aos objetivos estratégicos de negócios utilizando guias de melhores práticas como o BABOK.",
    practicalFocus: "Papel do Product Owner em projetos de tecnologia; Técnicas de modelagem de processos e análise de requisitos; Gestão ágil de backlog e valor de entrega.",
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
          <p className="text-lg md:text-xl text-[var(--color-brand-light)]/85 max-w-2xl mx-auto font-secondary">12 temas fundamentais desenhados para conectar a teoria ambiental ao desenvolvimento de IA de ponta.</p>
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
