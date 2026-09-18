import React from 'react';
import Header from './Header';

export default function About() {
  return (
    <div className="min-h-screen bg-[var(--color-brand-dark)] text-[var(--color-brand-light)] font-secondary">
      <Header />
      <main className="max-w-4xl mx-auto py-20 px-6">
        <h1 className="text-4xl md:text-6xl font-primary mb-8 text-[var(--color-brand-primary)]">Sobre a Ambiental Pro</h1>
        
        <div className="space-y-6 text-lg text-white/80 leading-relaxed">
          <p>
            A Ambiental Pro é uma instituição inovadora dedicada a transformar o setor ambiental por meio da tecnologia. 
            Nossa missão é equipar profissionais com as ferramentas mais avançadas de Inteligência Artificial, capacitando-os a resolver 
            os maiores desafios ecológicos e climáticos do nosso tempo.
          </p>
          <p>
            Fundada por especialistas em meio ambiente e tecnologia, nós reconhecemos que a lacuna entre a engenharia ambiental tradicional 
            e a ciência de dados moderna estava atrasando o progresso. Por isso, criamos o Pós IA.MA (Inteligência Artificial Aplicada ao Meio Ambiente), 
            o primeiro programa de pós-graduação 100% focado na intersecção entre ecologia e IA.
          </p>
          <p>
            Em parceria com a prestigiada Faculdade Anhanguera, oferecemos um currículo chancelado pelo MEC que combina rigor acadêmico com 
            aplicação prática no mundo real. Nossos alunos aprendem desde Python e Machine Learning até Sensoriamento Remoto e Visão Computacional, 
            garantindo que saiam preparados para liderar projetos inovadores de sustentabilidade e ESG corporativo.
          </p>
          <p>
            Nossa equipe é formada por profissionais com décadas de experiência no setor corporativo, governamental e acadêmico. 
            Acreditamos que, ao democratizar o acesso ao conhecimento tecnológico avançado, podemos catalisar uma nova geração de 
            soluções ambientais sustentáveis, precisas e escaláveis, essenciais para o futuro do nosso planeta.
          </p>
        </div>
      </main>
      
      <footer className="bg-black/60 border-t border-white/5 py-10 text-center text-[var(--color-brand-light)]/40 text-sm mt-20">
        <div className="flex justify-center mb-6">
          <img src="/logo-ambientalpro.webp" alt="Ambiental Pro" className="h-10 w-auto opacity-50 hover:opacity-100 transition-opacity" />
        </div>
        <p className="font-secondary tracking-widest uppercase">© {new Date().getFullYear()} Ambiental Pro. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
