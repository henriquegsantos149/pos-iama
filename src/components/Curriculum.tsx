import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const modules = [
  {
    title: "Fundamentos de Inteligência Artificial e Machine Learning",
    objective: "Capacitar o profissional a compreender o funcionamento matemático e os algoritmos fundamentais da IA e do Aprendizado de Máquina, dominando as bases conceituais para a correta aplicação de modelos preditivos.",
    practicalFocus: "Definições e abordagens; Conceitos e algoritmos fundamentais; Estrutura, treinamento e aplicações; Evolução computacional e otimização.",
    faculty: "Victor Silvestre e Vinicius Ragghianti"
  },
  {
    title: "Arquitetura de Dados Ambientais (Não Estruturados)",
    objective: "Ensinar técnicas avançadas de processamento e estruturação de grandes volumes de documentos textuais (PDFs, laudos, licenças) em bases de dados prontas para alimentar fluxos RAG e LLMs corporativas.",
    practicalFocus: "Gestão de documentos, licenças e textos jurídicos; Estruturação de bancos de dados para suporte a modelos de linguagem (LLMs) e Recuperação Aumentada por Geração (RAG).",
    faculty: "Victor Sacramento"
  },
  {
    title: "Internet das Coisas (IoT) e Redes de Sensores em Tempo Real",
    objective: "Habilitar o aluno a projetar e implementar sistemas de captação contínua de dados ambientais em tempo real (qualidade do ar, água e solo) usando sensores, telemetria e fluxos de dados contínuos para inteligência artificial.",
    practicalFocus: "Coleta contínua de dados de qualidade de ar e água; Redes de sensores; Protocolos de comunicação e telemetria ambiental em tempo real.",
    faculty: "Especialistas Convidados"
  },
  {
    title: "Visão Computacional Aplicada ao Meio Ambiente",
    objective: "Desenvolver a competência de automatizar o processamento visual de ativos naturais, aplicando algoritmos de deep learning para identificação automática de espécies e mapeamento dinâmico de uso do solo por imagens orbitais e de drones.",
    practicalFocus: "Identificação automática de espécies; Classificação de uso do solo; Detecção de padrões em imagens orbitais e de drones.",
    faculty: "@NeloreTech"
  },
  {
    title: "Modelos Preditivos para Sistemas Naturais",
    objective: "Capacitar o aluno a construir e validar modelos preditivos de alta precisão para simulação de desmatamento, comportamento da fauna e cenários de riscos das mudanças climáticas, saindo de diagnósticos estáticos para prognósticos de precisão.",
    practicalFocus: "Desenvolvimento de modelos preditivos aplicados ao desmatamento, comportamento de fauna e cenários de mudanças climáticas.",
    faculty: "Especialistas Convidados"
  },
  {
    title: "Desenvolvimento de Software Orientado a IA (AI-Driven Dev)",
    objective: "Capacitar o profissional a utilizar ferramentas modernas de codificação assistida por inteligência artificial (AI-Driven Dev) para prototipar, codificar e implantar suas próprias ferramentas ambientais em tempo recorde.",
    practicalFocus: "Uso de ferramentas e agentes de IA (como Claude Code e Antigravity) para criação acelerada de soluções customizadas; Prototipagem rápida de ferramentas ambientais.",
    faculty: "Henrique Gonzalez"
  },
  {
    title: "Arquitetura de Agentes Autônomos e Cognitivos",
    objective: "Ensinar a arquitetura e a orquestração de múltiplos agentes autônomos e LLMs para automatizar fluxos complexos de análise de dados, relatórios e tomada de decisão de maneira independente.",
    practicalFocus: "Lógica de raciocínio e execução de tarefas por IA; Orquestração de agentes para fluxos complexos de tomada de decisão.",
    faculty: "Henrique Gonzalez"
  },
  {
    title: "Interoperabilidade e Ecossistemas de Dashboards e Geoportais",
    objective: "Capacitar o aluno a integrar diferentes APIs, documentações técnicas e bases de dados espaciais para criar geoportais e dashboards de alto impacto visual, garantindo a interoperabilidade de sistemas complexos.",
    practicalFocus: "Centralização de camadas geográficas; Comunicação entre sistemas (APIs); Integração de documentação técnica com bases espaciais.",
    faculty: "Victor Sacramento"
  },
  {
    title: "Gêmeos Digitais de Ecossistemas (Digital Twins)",
    objective: "Introduzir as metodologias de criação de réplicas virtuais (Gêmeos Digitais) de bacias hidrográficas e áreas protegidas para simular cenários operacionais e prever impactos ambientais antes de intervenções físicas.",
    practicalFocus: "Criação de réplicas virtuais de bacias hidrográficas e áreas protegidas; Simulação de impactos e testes de cenários antes da intervenção real.",
    faculty: "Especialistas Convidados"
  },
  {
    title: "Ética, Privacidade e Segurança de Dados",
    objective: "Garantir a conformidade legal de projetos tecnológicos com a LGPD e implementar políticas robustas de privacidade, governança de dados e segurança da informação no tratamento de dados sensíveis.",
    practicalFocus: "Legislação e regulamentação de proteção de dados (LGPD); Ferramentas e Bibliotecas Open Source para detecção de anomalias e segurança cibernética.",
    faculty: "Especialistas Convidados"
  },
  {
    title: "Gestão de Projetos Tecnológicos de Alto Impacto",
    objective: "Formar líderes capazes de gerenciar projetos de tecnologia de alto impacto, aplicando metodologias ágeis e de viabilidade econômico-financeira para soluções tech voltadas ao mercado ambiental corporativo.",
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
            Conteúdo <span className="inline-block bg-brand-gradient text-[var(--color-brand-dark)] px-3 py-1 mt-2 mb-1 shape-leaf transform -skew-x-6"><span className="inline-block transform skew-x-6">Programático</span></span>
          </h2>
          <p className="text-lg md:text-xl text-[var(--color-brand-light)]/85 max-w-2xl mx-auto font-secondary">11 módulos desenhados para conectar a teoria ambiental ao desenvolvimento de IA de ponta.</p>
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
                    <div className="flex items-start gap-4">
                      <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-accent)] mt-2.5 shrink-0" />
                      <p className="text-[var(--color-brand-light)]/80 text-base md:text-lg font-secondary">
                        <strong className="text-[var(--color-brand-accent)] uppercase text-sm tracking-widest block mb-1">O que será abordado</strong>
                        {mod.practicalFocus}
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
