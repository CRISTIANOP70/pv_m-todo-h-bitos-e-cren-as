import { ShieldCheck, MessageSquare, Quote, Heart } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data';

export default function TestimonialsSection() {
  return (
    <section className="bg-white py-16 md:py-24 border-b border-slate-100 font-sans">
      <div className="container mx-auto px-4 max-w-5xl">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-14">
          <span className="text-[10px] font-black tracking-widest text-blue-600 bg-blue-50 px-2.5 py-1 rounded uppercase">
            Transformações Reais
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-display text-slate-900 tracking-tight leading-tight">
            Eles desligaram o piloto automático de sabotagem
          </h2>
          <p className="text-slate-500 text-sm max-w-lg mx-auto">
            Veja a história de pessoas comuns que entenderam a biologia cerebral e instalaram novos hábitos sem sofrimento.
          </p>
          <div className="h-1 bg-blue-600 w-16 mx-auto rounded" />
        </div>

        {/* Testimonials Grid layouts */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS_DATA.map((t, idx) => (
            <div 
              key={idx} 
              className="bg-slate-50 border border-slate-200/50 rounded-3xl p-6 shadow-xs flex flex-col justify-between relative group hover:border-slate-300 transition-all hover:shadow-md"
            >
              {/* Quotes icon background accent */}
              <Quote className="absolute right-6 top-6 w-14 h-14 text-slate-200/40 pointer-events-none group-hover:scale-105 transition-transform" />

              <div className="space-y-4 relative z-10">
                {/* Profile header strip */}
                <div className="flex items-center gap-3">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    referrerPolicy="no-referrer"
                    className="w-11 h-11 rounded-full border-2 border-white ring-1 ring-slate-200 object-cover"
                  />
                  <div>
                    <h4 className="text-xs font-black text-slate-950 leading-tight">{t.name}, {t.age} anos</h4>
                    <span className="text-[10px] text-slate-500 font-medium">{t.role}</span>
                  </div>
                </div>

                {/* Verification Header */}
                <div className="flex items-center gap-1.5 text-[10px] text-blue-700 font-bold bg-blue-100/30 px-2.5 py-1 rounded border border-blue-100/50 w-max">
                  <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
                  <span>Depoimento Registrado • Aluno Ativo</span>
                </div>

                {/* Split Dor vs Transformante */}
                <div className="space-y-3 pt-2 text-xs leading-relaxed">
                  
                  {/* ANTES: La Dor */}
                  <div className="bg-red-500/5 border border-red-500/10 p-3 rounded-xl">
                    <span className="text-[9px] font-black text-red-700 uppercase tracking-widest block mb-0.5">🔴 ANTES (A Sabotagem):</span>
                    <p className="text-slate-700 italic select-none">"{t.before}"</p>
                  </div>

                  {/* DEPOIS: A Transmuta */}
                  <div className="bg-emerald-500/5 border border-emerald-500/10 p-3 rounded-xl">
                    <span className="text-[9px] font-black text-emerald-700 uppercase tracking-widest block mb-0.5">🟢 DEPOIS (O Hábito Blindado):</span>
                    <p className="text-slate-800 font-semibold">"{(() => {
                      const highlights = [
                        'Consegui fixar a leitura diária e atividade física constante há 4 meses',
                        'App Check30 gamificou minha consistência',
                        'Meu foco triplicou e emagreci 4kg'
                      ];
                      let text = t.after;
                      const match = highlights.find(h => text.includes(h));
                      if (match) {
                        const parts = text.split(match);
                        return <>{parts[0]}<mark style={{ background: '#FEF08A', padding: '2px 4px', fontWeight: 700, borderRadius: '4px' }}>{match}</mark>{parts[1]}</>;
                      }
                      return text;
                    })()}"</p>
                  </div>

                  {/* Complete detailed Story context */}
                  <div className="pt-2">
                    <p className="text-slate-600 text-xs leading-relaxed">
                      {t.story}
                    </p>
                  </div>

                </div>
              </div>

              {/* Tag stamp */}
              <div className="pt-4 mt-4 border-t border-slate-200/60 flex items-center gap-1.5 text-[10px] text-emerald-600 font-bold">
                <Heart className="w-3.5 h-3.5 fill-emerald-500 text-emerald-500/50" />
                <span>Aluno Verificado Método H&C</span>
              </div>
            </div>
          ))}
        </div>

        {/* WhatsApp style group rapid social proof helper */}
        <div className="mt-10 bg-emerald-50 border border-emerald-100/60 p-4 rounded-2xl flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left text-xs text-emerald-900 justify-between max-w-3xl mx-auto">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-md shrink-0">
              <MessageSquare className="w-4 h-4" />
            </div>
            <div>
              <p className="font-extrabold text-sm text-slate-900 leading-tight">Grupo Secreto de Conexão Neural</p>
              <p className="text-slate-600 text-[11px] font-medium leading-none mt-1">Mais de 1.250 debates ativos sobre a Aula 3 e Aula 6</p>
            </div>
          </div>
          <span className="text-[10px] font-black tracking-widest uppercase text-emerald-700 bg-emerald-100 px-3 py-1.5 rounded-lg shrink-0">
            FÓRUM 100% MODERADO
          </span>
        </div>

      </div>
    </section>
  );
}
