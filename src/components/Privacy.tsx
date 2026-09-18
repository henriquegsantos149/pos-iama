import React from 'react';
import Header from './Header';

export default function Privacy() {
  return (
    <div className="min-h-screen bg-[var(--color-brand-dark)] text-[var(--color-brand-light)] font-secondary">
      <Header />
      <main className="max-w-4xl mx-auto py-20 px-6">
        <h1 className="text-4xl md:text-6xl font-primary mb-8 text-[var(--color-brand-primary)]">Política de Privacidade</h1>
        
        <div className="space-y-6 text-lg text-white/80 leading-relaxed">
          <p>
            A sua privacidade e a segurança dos seus dados pessoais são de extrema importância para a Ambiental Pro. 
            Esta Política de Privacidade descreve de forma clara e transparente como coletamos, utilizamos, armazenamos 
            e protegemos as informações fornecidas por você ao interagir com nosso site, se inscrever na lista de espera, 
            ou realizar a matrícula no programa Pós IA.MA.
          </p>
          
          <h2 className="text-2xl font-primary text-white mt-8 mb-4">1. Coleta de Informações</h2>
          <p>
            Coletamos informações pessoais apenas quando estritamente necessário e sempre com o seu consentimento explícito. 
            Isso inclui dados básicos de identificação e contato, como nome completo, endereço de e-mail e número de telefone 
            (WhatsApp), preenchidos voluntariamente através de nossos formulários de cadastro, modais de interesse e listas de espera.
            Além disso, utilizamos tecnologias padrão da indústria, como cookies e pixels de rastreamento (ex: Meta Pixel, Google Tag Manager), 
            para entender como os usuários navegam em nosso site e para otimizar nossas campanhas educacionais.
          </p>

          <h2 className="text-2xl font-primary text-white mt-8 mb-4">2. Uso dos Dados</h2>
          <p>
            Os dados coletados são utilizados exclusivamente com as seguintes finalidades:
            comunicar aberturas de novas turmas e vagas limitadas;
            enviar materiais educativos e informativos sobre Inteligência Artificial e Meio Ambiente;
            processar matrículas e viabilizar o acesso acadêmico ao curso chancelado pela Anhanguera;
            personalizar a sua experiência de navegação e fornecer um suporte ao cliente eficiente.
            A Ambiental Pro não vende, aluga ou cede suas informações pessoais para terceiros não afiliados, exceto quando 
            necessário para o processamento de pagamentos ou quando exigido por lei.
          </p>

          <h2 className="text-2xl font-primary text-white mt-8 mb-4">3. Segurança e Direitos do Usuário</h2>
          <p>
            Implementamos medidas de segurança técnicas e organizacionais rigorosas para proteger seus dados contra acesso não 
            autorizado, alteração, divulgação ou destruição. De acordo com a Lei Geral de Proteção de Dados (LGPD), você tem 
            o direito de solicitar o acesso, a correção, a portabilidade ou a exclusão dos seus dados pessoais a qualquer momento. 
            Para exercer esses direitos, ou se tiver qualquer dúvida sobre nossas práticas de privacidade, por favor, entre em contato 
            conosco através do e-mail: <strong>contato@ambientalpro.com.br</strong>.
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
