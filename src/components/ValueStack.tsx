import { CheckCircle, ArrowRight, ShieldCheck } from 'lucide-react';
import { MODULES_DATA } from '../data';

interface ValueStackProps {
  onCtaClick: () => void;
}

export default function ValueStack({ onCtaClick }: ValueStackProps) {
  return (
    <section className="bg-white py-16 md:py-24 border-b border-slate-100 font-sans">
      <div className="container mx-auto px-4 max-w-5xl">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-14">
          <span className="text-[10px] font-black tracking-widest text-blue-600 bg-blue-50 px-2.5 py-1 rounded uppercase">
            Conteúdo Programático Completo
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-display text-slate-900 tracking-tight leading-tight">
            Dentro do Método Hábitos e Crenças você recebe acesso imediato a:
          </h2>
          <div className="h-1 bg-blue-600 w-16 mx-auto rounded" />
        </div>

        {/* Modules accordion/cards visual list */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Detailed Lesson Curriculum (Left side desktop) */}
          <div className="md:col-span-7 space-y-6">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Estrutura de Acesso Imediato:</h3>
            
            {MODULES_DATA.map((mod) => (
              <div 
                key={mod.id} 
                className="bg-slate-50 border border-slate-200/50 rounded-2xl p-5 hover:border-slate-300 transition-all shadow-xs"
              >
                <div className="flex items-center justify-between pb-3 border-b border-slate-200/60 mb-3.5">
                  <span className="text-[10px] font-black font-display text-blue-700 bg-blue-100/60 px-2.5 py-0.5 rounded leading-none uppercase">
                    {mod.number}
                  </span>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-wide">Áudio Terapêutico + Material de Integração</p>
                </div>

                <h4 className="font-extrabold text-sm md:text-base text-slate-950 mb-3 font-display">
                  {mod.title}
                </h4>

                <div className="space-y-4">
                  {mod.lessons.map((lesson, idx) => (
                    <div key={idx} className="space-y-1">
                      <div className="flex items-start gap-2 text-slate-800">
                        <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span className="text-xs font-bold">{lesson.title}</span>
                      </div>
                      <p className="text-xs text-slate-500 pl-6 leading-relaxed">
                        {lesson.benefit}
                      </p>
                      <span className="inline-block text-[9px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded pl-2.5 ml-6">
                        📎 Disponível para Download: {lesson.format}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Pricing anchor card (Right side desktop) */}
          <div className="md:col-span-5 md:sticky md:top-8 bg-slate-950 text-white rounded-3xl p-6 md:p-8 border border-slate-800 shadow-xl space-y-6">
            <div className="text-center pb-4 border-b border-slate-800 space-y-1">
              <span className="text-[9px] font-black text-amber-400 bg-amber-400/10 px-2.5 py-1 rounded tracking-widest uppercase">
                Pacote Completo + 4 Bônus
              </span>
              <h4 className="font-bold text-sm text-slate-400 mt-2">Valor do Treinamento</h4>
            </div>

            {/* Custom stylized table */}
            <div className="space-y-3 font-mono text-xs text-slate-300">
              <div className="flex justify-between pb-1.5 border-b border-slate-900">
                <span className="text-slate-400">Método Completo 7 Aulas</span>
                <strong>R$ 197,00</strong>
              </div>
              <div className="flex justify-between pb-1.5 border-b border-slate-900">
                <span className="text-slate-400">BÔNUS 1: Kit Emergência Recaída</span>
                <strong>R$ 47,00</strong>
              </div>
              <div className="flex justify-between pb-1.5 border-b border-slate-900">
                <span className="text-slate-400">BÔNUS 2: Treinamento Secreto</span>
                <strong>R$ 67,00</strong>
              </div>
              <div className="flex justify-between pb-1.5 border-b border-slate-900">
                <span className="text-slate-300 font-semibold font-sans">BÔNUS 3: Diário Impresso (PDF)</span>
                <strong>R$ 37,00</strong>
              </div>
              <div className="flex justify-between pb-3 border-b-2 border-slate-800">
                <span className="text-slate-300 font-semibold font-sans">BÔNUS 4: App Check30 Premium</span>
                <strong>R$ 97,00</strong>
              </div>

              {/* Aggregated sums representation */}
              <div className="flex justify-between pt-1.5 font-bold font-sans text-xs text-slate-500 uppercase">
                <span>VALOR REAL TOTAL</span>
                <span className="line-through">R$ 445,00</span>
              </div>
              
              {/* Highlight promo line */}
              <div className="flex justify-between items-center bg-blue-600/10 p-3.5 rounded-xl border border-blue-500/20 my-3 font-sans">
                <div className="space-y-0.5">
                  <span className="text-[9px] font-black text-blue-400 uppercase tracking-wider block">O preço hoje é apenas:</span>
                  <strong className="text-2xl font-black text-white block tracking-tight leading-none">R$ 29,90</strong>
                  <span className="text-[10px] text-emerald-400 font-bold block">Economia imediata de R$ 415,10!</span>
                </div>
                <div className="bg-blue-600 text-white rounded-lg p-1.5 text-center text-xs leading-none font-black shrink-0">
                  <span>93%</span>
                  <span className="block text-[8px] font-semibold mt-0.5">OFF</span>
                </div>
              </div>
            </div>

            {/* Direct Stack CTA Button */}
            <div className="pt-2">
              <button
                type="button"
                onClick={onCtaClick}
                className="w-full bg-blue-600 hover:bg-blue-500 text-white font-black h-14 uppercase rounded-2xl flex items-center justify-center gap-2 shadow-lg shadow-blue-600/10 focus:outline-none transition-all active:scale-98 cursor-pointer text-xs"
              >
                <span>QUERO REPROGRAMAR MEU CÓDIGO EMOCIONAL →</span>
              </button>
              
              <div className="flex items-center justify-center gap-1.5 mt-3 text-[10px] text-slate-500 font-semibold">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Compra 100% Segura • Risco Zero</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
