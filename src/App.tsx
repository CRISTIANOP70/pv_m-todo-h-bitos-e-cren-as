import { useState } from 'react';
import HeroSection from './components/HeroSection';
import AgitationSection from './components/AgitationSection';
import SolutionSection from './components/SolutionSection';
import ValueStack from './components/ValueStack';
import BonusSection from './components/BonusSection';
import TestimonialsSection from './components/TestimonialsSection';
import AuthorSection from './components/AuthorSection';
import GuaranteeSection from './components/GuaranteeSection';
import FaqSection from './components/FaqSection';
import ClosingSection from './components/ClosingSection';
import CheckoutModal from './components/CheckoutModal';
import StickyMobileCTA from './components/StickyMobileCTA';

export default function App() {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const triggerCheckout = () => {
    setIsCheckoutOpen(true);
  };

  return (
    <div className="font-sans antialiased min-h-screen text-slate-850 bg-slate-50 selection:bg-blue-500/15 selection:text-blue-700 pb-[60px] md:pb-0">
      
      {/* 1. HERO SECTION - ACIMA DA DOBRA */}
      <HeroSection onCtaClick={triggerCheckout} />

      {/* 2. SEÇÃO AGITAÇÃO DO PROBLEMA */}
      <AgitationSection />

      {/* 3. SEÇÃO APRESENTAÇÃO DA SOLUÇÃO + MECANISMO ÚNICO */}
      <SolutionSection onCtaClick={triggerCheckout} />

      {/* 4. SEÇÃO O QUE VOCÊ VAI RECEBER - STACK DE VALOR */}
      <ValueStack onCtaClick={triggerCheckout} />

      {/* 5. SEÇÃO DETALHAMENTO DOS BÔNUS - QUEBRA DE OBJEÇÃO + CHECK30 INTERACTIVE APP ACCORDION SIMULATOR */}
      <BonusSection onCtaClick={triggerCheckout} />

      {/* 6. SEÇÃO PROVA SOCIAL - ANTES VS DEPOIS */}
      <TestimonialsSection />

      {/* 7. SEÇÃO SOBRE O AUTOR - AUTORIDADE */}
      <AuthorSection />

      {/* 8. SEÇÃO GARANTIA DE 7 DIAS */}
      <GuaranteeSection />

      {/* 9. SEÇÃO FAQ - QUEBRA DE OBJEÇÕES FINAIS */}
      <FaqSection />

      {/* 10. SEÇÃO FECHAMENTO COM ESCASSEZ + CTA FINAL */}
      <ClosingSection onCtaClick={triggerCheckout} />

      {/* PERSISTENT FLOATING STICKY FOOTER CTA ON MOBILE CLIENTS */}
      <StickyMobileCTA onCtaClick={triggerCheckout} />

      {/* INTERACTIVE SIMULATION SECURE CHECKOUT POPUP GATEWAY */}
      <CheckoutModal isOpen={isCheckoutOpen} onClose={() => setIsCheckoutOpen(false)} />

    </div>
  );
}
