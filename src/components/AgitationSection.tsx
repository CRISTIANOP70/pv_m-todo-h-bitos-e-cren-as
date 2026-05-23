import { XCircle, ChevronRight, AlertCircle } from 'lucide-react';

export default function AgitationSection() {
  return (
    <section className="bg-white py-16 md:py-24 border-b border-slate-100 font-sans">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto mb-12">
          <span className="text-[10px] font-black tracking-widest text-blue-600 bg-blue-50 px-2.5 py-1 rounded uppercase">
            A Anatomia da Sabotagem
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-display text-slate-900 tracking-tight leading-tight">
            Se você já tentou criar um hábito e morreu na semana 2...
          </h2>
          <div className="h-1.5 w-16 bg-blue-600 rounded mx-auto" />
        </div>

        {/* Core Agitation Copy block */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-slate-50 rounded-2xl p-6 md:p-10 border border-slate-100 relative overflow-hidden shadow-sm">
          {/* Subtle graphic accent */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-red-100/30 rounded-full blur-2xl pointer-events-none" />

          {/* Scientific quote container */}
          <div className="md:col-span-12 space-y-6">
            <div className="text-slate-700 text-base md:text-lg leading-relaxed space-y-4 font-normal">
              <p>
                Quase todos nós já passamos por isso. Você decide mudar. Compra sapatilhas novas, limpa a despensa, cria o cronograma perfeito de leitura ou decide trabalhar com foco extremo. 
                Sua mente está empolgada. Você sente que, desta vez, tudo será diferente.
              </p>
              
              {/* Highlight scientific fact */}
              <blockquote className="border-l-4 border-blue-600 bg-blue-500/5 px-4 py-3.5 rounded-r-xl text-slate-800 font-medium my-4">
                "Você sabia que mais de <b>40% de tudo o que você executa todos os dias</b> não é fruto de decisões conscientes? Na verdade, é apenas o seu cérebro economizando combustível metabólico (glicose). O grande problema é que, no piloto automático, o cérebro economiza repetindo à exaustão os mesmos caminhos sinápticos que te sabotam."
                <span className="block text-[10px] text-slate-500 tracking-wider font-mono uppercase mt-2">— Dado retirado da Aula de Introdução do Método</span>
              </blockquote>
              
              <p>
                O cérebro é preguiçoso por natureza de sobrevivência darwinista. Ele trabalha para manter você seguro e gastando o mínimo possível de esforço diário. E mudar à força consome glicose demais.
              </p>
            </div>

            {/* Pain list Points */}
            <div className="space-y-3.5 pt-4">
              <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest">Os 3 Sintomas Crônicos do Piloto Automático Fraturado:</h4>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-xl border border-slate-200/60 shadow-xs flex flex-col justify-between">
                  <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center text-red-500 mb-3">
                    <XCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-bold text-sm text-slate-900 mb-1">Começa na Segunda, desiste na Quinta</h5>
                    <p className="text-xs text-slate-500">O ânimo inicial da segunda desaparece logo no primeiro imprevisto ou dia exaustivo.</p>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-xl border border-slate-200/60 shadow-xs flex flex-col justify-between">
                  <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center text-red-500 mb-3">
                    <XCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-bold text-sm text-slate-900 mb-1">Se sente Culpado e Burro</h5>
                    <p className="text-xs text-slate-500">Olha para trás e se pergunta por que não consegue simplesmente manter tarefas básicas.</p>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-xl border border-slate-200/60 shadow-xs flex flex-col justify-between">
                  <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center text-red-500 mb-3">
                    <XCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-bold text-sm text-slate-900 mb-1">Acha que não tem Disciplina</h5>
                    <p className="text-xs text-slate-500">Acredita erroneamente que pessoas de sucesso nasceram com um gene mágico de foco.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Crucial Conversion Transition block */}
            <div className="pt-6 border-t border-slate-200/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <h4 className="text-base font-black text-slate-900 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-blue-600 shrink-0" />
                  <span>A culpa nunca foi sua.</span>
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed max-w-xl">
                  A culpa é do método puramente motivacional baseado em "esforço bruto" que tentaram te forçar. Você estava tentando empurrar uma parede de concreto com força de vontade, em vez de usar a chave biológica do seu cérebro.
                </p>
              </div>
              <div className="shrink-0 flex items-center gap-1.5 font-bold text-xs text-blue-600">
                <span>Ver a Solução Biológica Prática</span>
                <ChevronRight className="w-4 h-4 animate-ping" />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
