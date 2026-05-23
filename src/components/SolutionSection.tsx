import { Brain, Heart, Layers, ArrowRight, ShieldCheck } from 'lucide-react';
import mockupBundle from '../assets/images/mockup_bundle_habitos_1779495122688.png';

interface SolutionSectionProps {
  onCtaClick: () => void;
}

export default function SolutionSection({ onCtaClick }: SolutionSectionProps) {
  return (
    <section className="bg-slate-50 py-16 md:py-24 border-b border-slate-100 font-sans">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-14 md:mb-18">
          <span className="text-[10px] font-black tracking-widest text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded uppercase">
            A Chave Neural Científica
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-slate-900 tracking-tight leading-tight">
            Apresentando o Método Hábitos e Crenças
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto font-medium">
            O único ecossistema focado no hardware basal do cérebro, estruturado sob 3 pilares absolutos de sustentação comportamental.
          </p>
          <div className="h-1 bg-emerald-500 w-16 mx-auto rounded" />
        </div>

        {/* Highlight Differential container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Mockup visual display (Left Column desktop) */}
          <div className="lg:col-span-5 flex justify-center order-2 lg:order-1">
            <div className="relative group max-w-sm sm:max-w-md">
              {/* Background soft glowing blue rings */}
              <div className="absolute inset-x-0 -top-4 -bottom-4 bg-blue-100/30 rounded-full blur-3xl pointer-events-none scale-95 transition-all" />
              
              <div className="relative p-2 bg-white rounded-3xl border border-slate-200/60 shadow-xl transition-all group-hover:scale-101 hover:shadow-2xl">
                <img
                  src={mockupBundle}
                  alt="Mockup do Método Hábitos e Crenças"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto rounded-2xl select-none object-contain"
                />
                
                {/* Floating details badge over mockup */}
                <div className="absolute -bottom-4 -right-4 bg-slate-900 text-white rounded-xl p-3 border border-slate-800 shadow-xl flex items-center gap-2 max-w-[200px]">
                  <Brain className="w-8 h-8 text-blue-500 shrink-0 animate-pulse animate-duration-[3s]" />
                  <div className="text-left leading-none">
                    <span className="text-[9px] text-slate-400 font-bold block uppercase tracking-widest font-mono">Lote Atual</span>
                    <strong className="text-sm font-black tracking-tight text-white block mt-0.5">R$ 29,90 À VISTA</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Pillars and descriptions (Right Column desktop) */}
          <div className="lg:col-span-7 space-y-8 order-1 lg:order-2 text-center lg:text-left">
            <div className="space-y-3">
              <h3 className="text-lg font-black text-slate-900 font-display uppercase tracking-widest">
                Enquanto outros cursos focam em motivação vazia, aqui você instala o hábito no hardware do cérebro.
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed max-w-xl mx-auto lg:mx-0">
                A motivação gasta neurotransmissores rápidos que acabam em poucas horas. Nosso treinamento é projetado para criar automação sináptica repetitiva e duradoura através de três pilares:
              </p>
            </div>

            {/* Pillar Grid list */}
            <div className="space-y-5 max-w-xl mx-auto lg:mx-0">
              
              {/* Pillar 1 */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 bg-white p-4 rounded-xl border border-slate-200/60 shadow-xs text-center sm:text-left">
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 text-blue-600 flex items-center justify-center shrink-0">
                  <Brain className="w-5 h-5" />
                </div>
                <div className="space-y-0.5">
                  <h4 className="text-sm font-black text-slate-900 uppercase">1. Neuroplasticidade Ativa</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Ativação direcionada de novas conexões sinápticas através de micro-dosagens práticas de 5 minutos, estimulando a adaptação física celular na raiz.
                  </p>
                </div>
              </div>

              {/* Pillar 2 */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 bg-white p-4 rounded-xl border border-slate-200/60 shadow-xs text-center sm:text-left">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0">
                  <Heart className="w-5 h-5" />
                </div>
                <div className="space-y-0.5">
                  <h4 className="text-sm font-black text-slate-900 uppercase">2. Reprogramação de Identidade</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Uso da técnica "Estou me tornando" baseada na teoria do Autoconceito de Identidade para mudar o que você sente sobre quem você é antes de agir.
                  </p>
                </div>
              </div>

              {/* Pillar 3 */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 bg-white p-4 rounded-xl border border-slate-200/60 shadow-xs text-center sm:text-left">
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 text-blue-600 flex items-center justify-center shrink-0">
                  <Layers className="w-5 h-5" />
                </div>
                <div className="space-y-0.5">
                  <h4 className="text-sm font-black text-slate-900 uppercase">3. Arquitetura de Ambiente</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Modelagem física e digital do seu entorno para reduzir a fricção social dos hábitos desejados e aumentar drasticamente os hábitos sabotadores.
                  </p>
                </div>
              </div>

            </div>

            {/* Quick CTA button link inside presentation */}
            <div className="pt-4 flex flex-col sm:flex-row items-center gap-3 justify-center lg:justify-start">
              <button
                type="button"
                onClick={onCtaClick}
                className="w-full sm:w-auto px-6 h-12 bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-xs uppercase rounded-lg flex items-center justify-center gap-1.5 shadow-md active:scale-98 transition-all cursor-pointer"
              >
                <span>Garantir Vaga Promocional por R$ 29,90</span>
                <ArrowRight className="w-4 h-4 text-blue-500" />
              </button>
              <div className="flex items-center gap-1 text-[11px] font-semibold text-slate-400">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                <span>Risco Zero. 7 dias de teste livre.</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
