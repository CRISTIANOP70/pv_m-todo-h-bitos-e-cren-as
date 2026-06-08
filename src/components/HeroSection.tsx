import { ShieldCheck, ArrowRight, CheckCircle } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

interface HeroSectionProps {
  onCtaClick: () => void;
}

export default function HeroSection({ onCtaClick }: HeroSectionProps) {
  const [timeLeft, setTimeLeft] = useState(15 * 60);
  const [vagas, setVagas] = useState(37);
  const vagasRef = useRef(vagas);
  vagasRef.current = vagas;

  useEffect(() => {
    const stored = sessionStorage.getItem('hero_timer_start');
    if (stored) {
      const elapsed = Math.floor((Date.now() - parseInt(stored)) / 1000);
      const remaining = Math.max(0, 15 * 60 - elapsed);
      setTimeLeft(remaining);
    } else {
      sessionStorage.setItem('hero_timer_start', Date.now().toString());
    }

    const interval = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          sessionStorage.setItem('hero_timer_start', Date.now().toString());
          setVagas(v => (v > 12 ? v - Math.floor(Math.random() * 3) - 1 : v));
          return 15 * 60;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const minutes = Math.floor(timeLeft / 60).toString().padStart(2, '0');
  const seconds = (timeLeft % 60).toString().padStart(2, '0');

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
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black font-display text-slate-900 tracking-tight leading-[1.15] max-w-3xl mx-auto">
            Talvez você não esteja sem disciplina... <span className="text-blue-600 underline decoration-blue-600/30">esteja emocionalmente esgotada</span>.
          </h1>

          {/* Subheadline */}
          <p className="text-slate-600 text-base sm:text-lg md:text-xl font-normal leading-relaxed max-w-2xl mx-auto bg-white/40 p-2 rounded">
            Descubra como reprogramar as crenças invisíveis do subconsciente que sabotam sua consistência, alimentam a ansiedade e geram procrastinação.
          </p>

          {/* VSL Video Container */}
          <div className="relative w-full max-w-3xl mx-auto aspect-video bg-slate-900 rounded-2xl shadow-2xl overflow-hidden ring-1 ring-slate-900/10 my-8 group cursor-pointer">
            <img 
              src="https://images.unsplash.com/photo-1573164713988-8665fc963095?w=1200&h=675&fit=crop&q=80" 
              alt="Apresentação do Método" 
              className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-blue-600/90 rounded-full flex items-center justify-center backdrop-blur-sm shadow-[0_0_40px_rgba(37,99,235,0.4)] group-hover:scale-110 transition-transform duration-300">
                <div className="w-0 h-0 border-y-[10px] sm:border-y-[12px] border-y-transparent border-l-[16px] sm:border-l-[20px] border-l-white ml-1.5 sm:ml-2"></div>
              </div>
            </div>
            <div className="absolute top-4 left-4 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 text-white text-xs font-semibold flex items-center gap-2">
               <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
               Assista ao vídeo para desbloquear o método
            </div>
          </div>

          {/* Bullets feature preview */}
          <div className="hidden sm:grid grid-cols-2 gap-4 text-xs sm:text-sm font-semibold text-slate-700 py-3 px-6 bg-white/60 rounded-2xl border border-slate-200/50 max-w-xl mx-auto text-left">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4.5 h-4.5 text-emerald-500 shrink-0" />
              <span>Formato Terapêutico: Áudio + Manual</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4.5 h-4.5 text-emerald-500 shrink-0" />
              <span>Acesso Vitalício Garantido</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4.5 h-4.5 text-emerald-500 shrink-0" />
              <span>App Gamificado Check30 Premium</span>
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
                className="w-full sm:w-auto px-10 h-14 bg-orange-600 hover:bg-orange-500 text-white font-black text-sm uppercase rounded-xl flex items-center justify-center gap-2.5 shadow-xl shadow-orange-600/20 active:scale-[0.98] transition-all cursor-pointer group animate-pulse-subtle"
              >
                <span>QUERO MUDAR MEU PADRÃO EMOCIONAL →</span>
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

            {/* Escassez acima da dobra */}
            <div className="flex items-center justify-center gap-2 mt-3 bg-red-500/10 border border-red-500/20 px-3 py-1.5 rounded-lg">
              <svg className="w-4 h-4 text-red-500 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
              </svg>
              <span className="text-xs font-bold text-red-600">
                ÚLTIMAS <span className="tabular-nums">{vagas}</span> VAGAS COM BÔNUS | Preço sobe pra R$ 67 em: <span className="font-mono tabular-nums">{minutes}:{seconds}</span>
              </span>
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
