import Header from './components/Header'
import Hero from './components/Hero'
import ProblemObjective from './components/ProblemObjective'
import Curriculum from './components/Curriculum'
import SkillsResults from './components/SkillsResults'
import PracticalApplications from './components/PracticalApplications'
import TargetAudience from './components/TargetAudience'

import CourseInfo from './components/CourseInfo'
// import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import CallToAction from './components/CallToAction'
import StickyCTA from './components/StickyCTA'
import LeadModal from './components/LeadModal'

function App() {
  const isModalOpen = false;
  const checkoutUrl = '';

  const handleOpenModal = (url: string) => {
    // Redireciona diretamente para o link de checkout (SendFlow) em uma nova aba
    window.open(url, '_blank');
  };

  const handleCloseModal = () => {
    // Modal is temporarily disabled
  };

  return (
    <main className="w-full min-h-screen bg-[var(--color-brand-dark)] text-[var(--color-brand-light)] font-secondary selection:bg-[var(--color-brand-primary)] selection:text-[var(--color-brand-dark)]">
      <Header />
      <Hero onOpenModal={handleOpenModal} />
      <ProblemObjective />
      <Curriculum />
      <SkillsResults />
      <PracticalApplications />
      <TargetAudience />
      <CourseInfo />
      {/* <Testimonials /> */}
      <FAQ />
      <CallToAction onOpenModal={handleOpenModal} />
      
      <StickyCTA onOpenModal={handleOpenModal} />

      <LeadModal 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
        checkoutUrl={checkoutUrl} 
      />
      
      <footer className="bg-black/60 border-t border-white/5 py-10 text-center text-[var(--color-brand-light)]/40 text-sm">
        <p className="font-secondary tracking-widest uppercase">© {new Date().getFullYear()} Pós-Graduação em Inteligência Artificial Aplicada ao Meio Ambiente (Pós IA.MA). Todos os direitos reservados.</p>
      </footer>
    </main>
  )
}

export default App
