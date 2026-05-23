import { Zap, ShieldAlert, BookOpen, CheckCircle2, Award } from 'lucide-react';
import { BONUSES_DATA } from '../data';
import Check30Simulator from './Check30Simulator';

interface BonusSectionProps {
  onCtaClick: () => void;
}

export default function BonusSection({ onCtaClick }: BonusSectionProps) {
  // Separate standard card bonuses from gamified bonus 4
  const standardBonuses = BONUSES_DATA.filter(b => b.id !== 4);
  const appBonus = BONUSES_DATA.find(b => b.id === 4);

  return (
    <section className="bg-slate-50 py-16 md:py-24 border-b border-b-slate-100 font-sans">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto mb-14">
          <span className="text-[10px] font-black tracking-widest text-blue-600 bg-blue-50 px-2.5 py-1 rounded uppercase">
            Bônus Exclusivos de Aceleração
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-display text-slate-900 tracking-tight leading-tight">
            Para acelerar e garantir seus resultados sem atritos:
          </h2>
          <div className="h-1 bg-blue-600 w-16 mx-auto rounded" />
        </div>

        {/* 3 Standard Bonuses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {standardBonuses.map((bonus) => (
            <div 
              key={bonus.id} 
              className="bg-white border border-slate-200/60 rounded-3xl p-5 shadow-xs flex flex-col justify-between relative overflow-hidden"
            >
              {/* Premium top accent */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-blue-600/10" />

              <div className="space-y-4">
                {/* Header indicators */}
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-black font-display text-white bg-slate-900 px-2.5 py-1 rounded">
                    {bonus.badge}
                  </span>
                  <span className="text-[10px] text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-500/10">
                    MOCKUP INCLUÍDO
                  </span>
                </div>

                {/* Styled illustration representational mockup for PDF digital guides */}
                <div className="bg-slate-50 border border-slate-100 rounded-xl p-4 flex items-center justify-center h-28 relative group">
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 to-transparent rounded-xl" />
                  
                  {bonus.id === 1 && (
                    <div className="relative flex flex-col items-center">
                      <Zap className="w-10 h-10 text-blue-500 animate-pulse" />
                      <span className="text-[8px] font-mono font-bold text-slate-400 uppercase mt-1">Ebook + Áudio MP3</span>
                    </div>
                  )}

                  {bonus.id === 2 && (
                    <div className="relative flex flex-col items-center">
                      <ShieldAlert className="w-10 h-10 text-red-500 animate-bounce" />
                      <span className="text-[8px] font-mono font-bold text-slate-400 uppercase mt-1">Treinamento Avançado PDF</span>
                    </div>
                  )}

                  {bonus.id === 3 && (
                    <div className="relative flex flex-col items-center">
                      <BookOpen className="w-10 h-10 text-emerald-600" />
                      <span className="text-[8px] font-mono font-bold text-slate-400 uppercase mt-1">Trilhas de Rastreamento Impresso</span>
                    </div>
                  )}
                </div>

                <div className="space-y-1">
                  <h4 className="font-extrabold text-sm text-slate-900 leading-tight">
                    {bonus.title}
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed font-normal">
                    {bonus.benefit}
                  </p>
                </div>

                {/* Objection crusher information */}
                <div className="space-y-2 pt-3 border-t border-slate-100 text-xs">
                  <div>
                    <span className="text-[9px] uppercase font-bold text-slate-400 tracking-wider block">Para quem é:</span>
                    <p className="text-slate-600 font-medium leading-normal">{bonus.targetAudience}</p>
                  </div>
                  <div className="bg-blue-500/5 border border-blue-500/10 rounded-lg p-2 mt-1">
                    <span className="text-[9px] uppercase font-bold text-blue-700 tracking-wider block">🚫 Resolve a objeção:</span>
                    <p className="text-slate-800 font-semibold italic">"{bonus.resolvedObjection}"</p>
                  </div>
                </div>
              </div>

              {/* Price footer alignment */}
              <div className="pt-4 mt-4 border-t border-slate-100 flex justify-between items-baseline text-xs">
                <span className="text-slate-400 font-medium">Valor se vendido separadamente:</span>
                <strong className="text-slate-500 font-mono line-through">R$ {bonus.value},00</strong>
              </div>
            </div>
          ))}
        </div>

        {/* Highlight Bonus 4: App Check30 Container */}
        {appBonus && (
          <div className="bg-slate-950 text-white rounded-3xl p-6 md:p-10 border border-slate-800 shadow-xl max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column values and objection */}
              <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
                  <span className="text-[10px] font-black tracking-widest text-slate-900 bg-amber-400 px-2.5 py-1 rounded uppercase font-display">
                    {appBonus.badge}
                  </span>
                  <span className="text-[10px] font-bold text-amber-400 bg-amber-400/10 border border-amber-400/20 px-2.5 py-1 rounded uppercase font-mono">
                    Acesso Gratuito Vitalício
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-black font-display tracking-tight text-white uppercase">
                    {appBonus.title}
                  </h3>
                  <p className="text-xs font-semibold text-slate-400 font-mono leading-none">
                    VALOR UNITÁRIO: <span className="line-through">R$ 97,00</span> • GRÁTIS NESTA OFERTA!
                  </p>
                </div>

                <p className="text-slate-300 text-xs md:text-sm leading-relaxed max-w-xl">
                  {appBonus.benefit} Nós criamos este aplicativo gamificado para que acompanhar seus rituais diários seja tão prazeroso e viciante quanto deslizar o feed do Instagram.
                </p>

                {/* Objection details */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs pt-2 text-left">
                  <div className="bg-slate-900 p-3.5 rounded-xl border border-slate-800">
                    <span className="text-[9px] uppercase font-bold text-slate-400 tracking-wider block">👥 Para quem é:</span>
                    <p className="text-slate-300 font-medium leading-relaxed">{appBonus.targetAudience}</p>
                  </div>
                  <div className="bg-emerald-500/10 border border-emerald-500/20 p-3.5 rounded-xl">
                    <span className="text-[9px] uppercase font-bold text-emerald-400 tracking-wider block">🚫 Resolve a objeção:</span>
                    <p className="text-slate-100 font-bold italic">"{appBonus.resolvedObjection}"</p>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="button"
                    onClick={onCtaClick}
                    className="w-full sm:w-auto px-6 h-12 bg-blue-600 hover:bg-blue-500 text-white font-black text-xs uppercase rounded-xl flex items-center justify-center gap-2 shadow-lg transition-all animate-pulse"
                  >
                    <span>Quero os 4 Bônus Inclusos por R$ 29,90</span>
                  </button>
                </div>
              </div>

              {/* Right Column Interactive Simulator container */}
              <div className="lg:col-span-5 flex justify-center">
                <Check30Simulator />
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
