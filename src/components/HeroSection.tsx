import { ShieldCheck, ArrowRight, CheckCircle } from 'lucide-react';

interface HeroSectionProps {
  onCtaClick: () => void;
}

export default function HeroSection({ onCtaClick }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden bg-slate-50 border-b border-slate-100 font-sans py-12 md:py-20 lg:py-24">
      {/* Mesh grid backgrounds */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1.5px,transparent_1.5px)] [background-size:24px_24px] opacity-60" />
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-blue-100/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-indigo-50/45 rounded-full blur-3xl pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 max-w-7xl">
        {/* Dynamic header notification badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-1.5 bg-slate-900 text-white text-[11px] font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-sm">
            <span className="w-2 h-2 rounded-full bg-blue-500" />
            <span>EXCLUSIVO: Método Científico de Reprogramação Mental de Demétrio Pinheiro</span>
          </div>
        </div>

        {/* Centered Advertising Copy (Single Column) */}
        <div className="max-w-4xl mx-auto text-center space-y-6">
          
          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black font-display text-slate-900 tracking-tight leading-[1.1] max-w-3xl mx-auto">
            Você <span className="text-blue-600 underline decoration-blue-600/30">não é preguiçoso</span>. Seu cérebro só está rodando no <span className="text-slate-950 font-black">piloto automático errado</span>.
          </h1>

          {/* Subheadline */}
          <p className="text-slate-600 text-base sm:text-lg md:text-xl font-normal leading-relaxed max-w-2xl mx-auto bg-white/40 p-2 rounded">
            Desconstrua o circuito da autossabotagem e instale novos padrões de comportamento direto na mente subconsciente. Um método guiado de 30 dias baseado em hipnoterapia, neurociência aplicada e biologia comportamental pura.
          </p>

          {/* Bullets feature preview */}
          <div className="hidden sm:grid grid-cols-2 gap-4 text-xs sm:text-sm font-semibold text-slate-700 py-3 px-6 bg-white/60 rounded-2xl border border-slate-200/50 max-w-xl mx-auto text-left">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4.5 h-4.5 text-emerald-500 shrink-0" />
              <span>Formatos Práticos: Áudio + PDF</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4.5 h-4.5 text-emerald-500 shrink-0" />
              <span>Método Vitalício Simples</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4.5 h-4.5 text-emerald-500 shrink-0" />
              <span>App Check30 Vitalício</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4.5 h-4.5 text-emerald-500 shrink-0" />
              <span>Apenas 5-12 minutos por dia</span>
            </div>
          </div>

          {/* Main Action Buttons */}
          <div className="space-y-4 pt-2">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                type="button"
                onClick={onCtaClick}
                className="w-full sm:w-auto px-10 h-14 bg-blue-600 hover:bg-blue-500 text-white font-black text-sm uppercase rounded-xl flex items-center justify-center gap-2.5 shadow-xl shadow-blue-600/20 active:scale-[0.98] transition-all cursor-pointer group"
              >
                <span>Quero Desligar Meu Piloto Automático por R$ 29,90</span>
                <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Microcopy specifications */}
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-slate-500">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-4.5 h-4.5 text-emerald-600" />
                Satisfação com 7 dias de Garantia
              </span>
              <span className="text-slate-300 hidden sm:inline">•</span>
              <span>Pagamento Único, Sem Mensalidades</span>
              <span className="text-slate-300 hidden sm:inline">•</span>
              <span>Acesso Imediato</span>
            </div>
          </div>

          {/* Rapid Social Proof indicator */}
          <div className="pt-6 border-t border-slate-200/50 flex flex-col sm:flex-row items-center gap-3 justify-center max-w-xl mx-auto">
            <div className="flex -space-x-2 justify-center">
              <img referrerPolicy="no-referrer" className="w-8 h-8 rounded-full border-2 border-white ring-1 ring-slate-100" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=50&h=50&fit=crop" alt="User feedback" />
              <img referrerPolicy="no-referrer" className="w-8 h-8 rounded-full border-2 border-white ring-1 ring-slate-100" src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=50&h=50&fit=crop" alt="User feedback" />
              <img referrerPolicy="no-referrer" className="w-8 h-8 rounded-full border-2 border-white ring-1 ring-slate-100" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=50&h=50&fit=crop" alt="User feedback" />
              <img referrerPolicy="no-referrer" className="w-8 h-8 rounded-full border-2 border-white ring-1 ring-slate-100" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=50&h=50&fit=crop" alt="User feedback" />
            </div>
            <div className="text-center sm:text-left space-y-0.5">
              <div className="flex items-center justify-center sm:justify-start gap-1 bg-blue-50 px-2.5 py-0.5 rounded-md border border-blue-100/50 text-[11px] font-bold text-blue-700 mx-auto sm:mx-0 w-fit">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
                <span>Método Validado • 98.7% de Aprovados</span>
              </div>
              <p className="text-xs text-slate-500 font-semibold">Mais de 1.250 mentes reprogramadas com sucesso nas últimas semanas</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
