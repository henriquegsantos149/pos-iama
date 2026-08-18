import { useState, useEffect, useRef } from 'react';
import Header from './components/Header'
import Hero from './components/Hero'
import ProblemObjective from './components/ProblemObjective'
import Curriculum from './components/Curriculum'
import SkillsResults from './components/SkillsResults'
import PracticalApplications from './components/PracticalApplications'
import TargetAudience from './components/TargetAudience'
import Faculty from './components/Faculty'

import CourseInfo from './components/CourseInfo'
import Pricing from './components/Pricing'
// import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import CallToAction from './components/CallToAction'
import StickyCTA from './components/StickyCTA'
import LeadModal from './components/LeadModal'
import { trackMeta } from './lib/meta'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeUrl, setActiveUrl] = useState('https://pay.voompcreators.com.br/14929');
  const [isWaitingList, setIsWaitingList] = useState(false);
  const viewContentSent = useRef(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const isWaiting = window.location.pathname.includes('/lista-de-espera');
      setIsWaitingList(isWaiting);
      if (isWaiting) {
        document.title = "Lista de Espera | Pós-Graduação em Inteligência Artificial Aplicada ao Meio Ambiente";
        
        // Meta Pixel
        // @ts-ignore
        (function(f: any,b: any,e: any,v: any,n?: any,t?: any,s?: any)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)})(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        (window as any).fbq('init', '1373287802810243');
        (window as any).fbq('track', 'PageView');

        // Google Tag Manager
        // @ts-ignore
        (function(w: any,d: any,s: any,l: any,i: any){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j: any=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;if(f&&f.parentNode){f.parentNode.insertBefore(j,f);}
        })(window,document,'script','dataLayer','GTM-MTZ9NFFN');
      }
    }
  }, []);

  useEffect(() => {
    if (viewContentSent.current) return;
    viewContentSent.current = true;
    trackMeta('ViewContent', {
      customData: {
        content_name: 'Pós IA.MA',
        content_category: isWaitingList ? 'lista-de-espera' : 'pagina-de-vendas',
      },
    });
  }, [isWaitingList]);

  const handleOpenModal = (url: string) => {
    if (url.includes('tinyurl.com') || url.includes('wa.link') || url.includes('whatsapp') || url.includes('api.whatsapp.com')) {
      window.open(url, '_blank');
    } else {
      setActiveUrl(url);
      setIsModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <main className="w-full min-h-screen bg-[var(--color-brand-dark)] text-[var(--color-brand-light)] font-secondary selection:bg-[var(--color-brand-primary)] selection:text-[var(--color-brand-dark)]">
      <Header />
      <Hero onOpenModal={handleOpenModal} isWaitingList={isWaitingList} />
      <ProblemObjective />
      <Curriculum />
      <SkillsResults />
      <PracticalApplications />
      <TargetAudience />
      <Faculty />
      <CourseInfo />
      <Pricing onOpenModal={handleOpenModal} isWaitingList={isWaitingList} />
      {/* <Testimonials /> */}
      <FAQ bgVariant={isWaitingList ? 'dark' : 'light'} />
      <CallToAction onOpenModal={handleOpenModal} isWaitingList={isWaitingList} bgVariant={isWaitingList ? 'light' : 'dark'} />
      
      <StickyCTA onOpenModal={handleOpenModal} isWaitingList={isWaitingList} />

      <LeadModal 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
        checkoutUrl={activeUrl} 
        isWaitingList={isWaitingList}
      />
      
      <footer className="bg-black/60 border-t border-white/5 py-10 text-center text-[var(--color-brand-light)]/40 text-sm">
        <p className="font-secondary tracking-widest uppercase">© {new Date().getFullYear()} Pós-Graduação em Inteligência Artificial Aplicada ao Meio Ambiente (Pós IA.MA). Todos os direitos reservados.</p>
      </footer>
    </main>
  )
}

export default App

