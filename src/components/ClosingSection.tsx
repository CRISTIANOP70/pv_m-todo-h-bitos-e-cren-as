import { useState, useEffect } from 'react';
import { ArrowRight, ShieldCheck, Clock, Lock, CheckCircle2, ChevronRight, Activity, Award } from 'lucide-react';

interface ClosingSectionProps {
  onCtaClick: () => void;
}

export default function ClosingSection({ onCtaClick }: ClosingSectionProps) {
  const [timeLeft, setTimeLeft] = useState(15 * 60); // 15 minutes ticker

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          // Reset to 15m to keep scarcity flowing smoothly without crashing
          return 15 * 60;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatMinutes = Math.floor(timeLeft / 60);
  const formatSeconds = timeLeft % 60;

  return (
    <section className="bg-slate-900 text-white py-16 md:py-24 border-t-4 border-blue-600 font-sans relative overflow-hidden">
      {/* Visual glowing geometric circles */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 max-w-4xl relative z-10 text-center space-y-8">
        
        {/* Scarcity Countdown ticker */}
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-3 bg-red-600/10 border border-red-500/20 px-5 py-2.5 rounded-2xl">
            <Clock className="w-5 h-5 text-red-500 animate-pulse shrink-0" />
            <div className="text-left font-mono leading-none">
              <span className="text-[9px] text-red-400 font-bold block uppercase tracking-wider">Oportunidade Expira em:</span>
              <strong className="text-lg sm:text-xl font-black text-red-500 mt-0.5">
                {formatMinutes < 10 ? '0' : ''}{formatMinutes}:{formatSeconds < 10 ? '0' : ''}{formatSeconds}
              </strong>
            </div>
            <span className="text-slate-800 self-stretch w-px bg-slate-800 mx-1Hidden sm:block" />
            <span className="text-[10px] text-slate-300 font-bold tracking-tight shrink-0 hidden sm:inline">Lote Promocional Disponível</span>
          </div>
        </div>

        {/* Headlines */}
        <div className="space-y-3.5 max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-black font-display tracking-tight leading-tight uppercase">
            Essa oferta pode sair do ar a qualquer momento
          </h2>
          <p className="text-slate-300 text-base sm:text-lg max-w-xl mx-auto font-medium">
            Por R$ 29,90 você não está comprando apenas um curso digital. Você está adquirindo o direito definitivo de parar de se sabotar pelos próximos 30 anos.
          </p>
        </div>

        {/* Value stack summary box */}
        <div className="bg-slate-950 border border-slate-800/80 p-5 md:p-8 rounded-3xl max-w-2xl mx-auto text-left space-y-4">
          <h4 className="text-xs font-black tracking-widest text-blue-500 uppercase font-display">Tudo o que você receberá imediatamente:</h4>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>Conexão Completa: Método 7 Aulas <span className="text-slate-500 font-mono italic">(R$ 197)</span></span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>Bônus 1: Kit Emergência Recaída <span className="text-slate-500 font-mono italic">(R$ 47)</span></span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>Bônus 2: Treinamento Secreto Dia 21 <span className="text-slate-500 font-mono italic">(R$ 67)</span></span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>Bônus 3: Diário Rastreável Impresso <span className="text-slate-500 font-mono italic">(R$ 37)</span></span>
            </div>
            <div className="flex items-center gap-2 col-span-1 sm:col-span-2">
              <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
              <strong className="text-amber-400">Bônus 4: Acesso Vitalício do App Check30 <span className="text-slate-500 font-mono font-normal italic">(R$ 97)</span></strong>
            </div>
          </div>

          <div className="h-px bg-slate-900 pt-1" />
          
          <div className="flex justify-between items-baseline text-xs sm:text-sm">
            <span className="text-slate-400 font-medium font-sans">Valor Acumulado do Kit:</span>
            <span className="text-slate-400 line-through font-mono">R$ 445,00</span>
          </div>

          <div className="flex justify-between items-baseline pt-1">
            <span className="text-sm font-bold text-slate-100">Inscrição de Adesão Hoje:</span>
            <strong className="text-2xl sm:text-3xl font-black text-white font-mono leading-none">R$ 29,90 <span className="text-xs font-normal text-slate-400 font-sans block text-right leading-none mt-1">ÚNICO PAGAMENTO</span></strong>
          </div>
        </div>

        {/* Large CTA Button */}
        <div className="pt-2 max-w-md mx-auto space-y-4">
          <button
            type="button"
            onClick={onCtaClick}
            className="w-full h-16 bg-blue-600 hover:bg-blue-500 text-white font-black text-sm uppercase rounded-2xl flex items-center justify-center gap-2 shadow-xl shadow-blue-600/10 active:scale-[0.98] transition-all cursor-pointer select-none group"
          >
            <CheckCircle2 className="w-5 h-5 text-blue-300 animate-pulse shrink-0" />
            <span>Ativar Minha Reprogramação Agora por R$ 29,90</span>
            <ChevronRight className="w-4 h-4 text-white group-hover:translate-x-1 duration-150" />
          </button>

          {/* Verification labels */}
          <div className="flex flex-wrap justify-center items-center gap-4 text-[10px] font-bold text-slate-400">
            <span className="flex items-center gap-1">
              <Lock className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
              Compra Segura SSL
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-slate-800" />
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
              Privacidade Garantida
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-slate-800" />
            <span className="flex items-center gap-1">
              <Award className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
              Homologado pela Hotmart/Pagar.me
            </span>
          </div>
        </div>

        {/* Institutional signature footer stamp */}
        <div className="pt-12 border-t border-slate-800 text-[10px] text-slate-500 space-y-1 block font-semibold leading-relaxed">
          <p>© 2026 Método Hábitos e Crenças • Reprogramação Neural em 30 Dias. Todos os direitos reservados.</p>
          <p>O acompanhamento e leitura da ciência de hábitos não substituem orientações psicológicas ou clínicas. Resultados variam individualmente.</p>
        </div>

      </div>
    </section>
  );
}
