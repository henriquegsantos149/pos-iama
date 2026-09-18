import React from 'react';
import Header from './Header';

export default function Contact() {
  return (
    <div className="min-h-screen bg-[var(--color-brand-dark)] text-[var(--color-brand-light)] font-secondary">
      <Header />
      <main className="max-w-4xl mx-auto py-20 px-6">
        <h1 className="text-4xl md:text-6xl font-primary mb-8 text-[var(--color-brand-primary)]">Entre em Contato</h1>
        
        <div className="space-y-6 text-lg text-white/80 leading-relaxed mb-12">
          <p>
            Estamos sempre disponíveis para esclarecer dúvidas sobre o programa de Pós-Graduação IA.MA, 
            discutir potenciais parcerias corporativas, ou ajudar novos alunos em seu processo de matrícula. 
            Nosso suporte é dedicado a garantir que você tenha a melhor experiência possível.
          </p>
          <p>
            Você pode entrar em contato com nossa equipe de atendimento através de diversos canais. 
            Para questões rápidas, recomendamos fortemente o uso do nosso WhatsApp oficial, onde nossa 
            equipe costuma responder em até 2 horas úteis. Para questões mais longas, parcerias institucionais 
            ou documentações, por favor, envie um e-mail detalhado.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white/5 p-8 border border-white/10 rounded-xl">
            <h2 className="text-2xl font-primary text-white mb-4">Informações de Contato</h2>
            <ul className="space-y-4">
              <li>
                <strong className="text-[var(--color-brand-primary)] block">E-mail:</strong>
                <a href="mailto:contato@ambientalpro.com.br" className="hover:text-white transition-colors">contato@ambientalpro.com.br</a>
              </li>
              <li>
                <strong className="text-[var(--color-brand-primary)] block">WhatsApp:</strong>
                <a href="https://wa.me/5511999999999" className="hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">+55 (11) 99999-9999</a>
              </li>
              <li>
                <strong className="text-[var(--color-brand-primary)] block">Endereço Principal:</strong>
                <address className="not-italic text-white/70">
                  Rua Exemplo, 123<br />
                  Bairro Inovação, São Paulo - SP<br />
                  CEP: 01000-000<br />
                  Brasil
                </address>
              </li>
            </ul>
          </div>
          
          <div className="bg-white/5 p-8 border border-white/10 rounded-xl">
            <h2 className="text-2xl font-primary text-white mb-4">Horário de Atendimento</h2>
            <p className="mb-4">
              Nossa equipe administrativa e de suporte ao aluno funciona nos seguintes horários (Horário de Brasília):
            </p>
            <ul className="space-y-2 text-white/70">
              <li><strong>Segunda a Sexta:</strong> 09h00 às 18h00</li>
              <li><strong>Sábados, Domingos e Feriados:</strong> Fechado (Respostas via e-mail no próximo dia útil)</li>
            </ul>
          </div>
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
