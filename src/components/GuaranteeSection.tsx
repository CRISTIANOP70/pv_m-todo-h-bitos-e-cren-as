import { ShieldCheck, Award, Lock, HelpCircle } from 'lucide-react';

export default function GuaranteeSection() {
  return (
    <section className="bg-white py-16 md:py-20 border-b border-slate-100 font-sans relative overflow-hidden">
      {/* Visual background details */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 max-w-4xl relative z-10 text-center">
        
        {/* Core Guarantee Seal representation */}
        <div className="flex justify-center mb-6">
          <div className="relative w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center bg-gradient-to-tr from-emerald-600 to-teal-500 rounded-full shadow-xl shadow-emerald-600/20 border-4 border-emerald-50 animate-bounce animate-duration-[4s]">
            <div className="text-center text-white leading-none">
              <span className="text-[10px] font-bold block uppercase tracking-widest text-emerald-100 font-mono">Garantia</span>
              <strong className="text-2xl sm:text-3xl font-black block mt-1 tracking-tight">7</strong>
              <span className="text-[9px] font-black block uppercase tracking-wider text-emerald-100 mt-1">Dias Livres</span>
            </div>
            
            {/* Embedded check emblem */}
            <div className="absolute bottom-0 right-0 w-8 h-8 rounded-full bg-slate-900 border-2 border-white flex items-center justify-center shadow-lg">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
            </div>
          </div>
        </div>

        {/* Headline */}
        <div className="space-y-4 max-w-2xl mx-auto mb-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-display text-slate-900 tracking-tight leading-tight uppercase">
            Seu Cérebro Blindado ou Seu Dinheiro de Volta
          </h2>
          <div className="h-1 bg-blue-600 w-16 mx-auto rounded" />
        </div>

        {/* Copy text bodies */}
        <div className="space-y-5 text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
          <p>
            Nós confiamos tanto na base neurocientífica e no formato de entrega prática em áudio e PDF que removemos 100% do risco das suas costas e colocamos inteiramente nas nossas.
          </p>
          
          <div className="bg-emerald-500/[0.04] border border-emerald-500/10 p-5 rounded-2xl text-left text-slate-700 text-xs sm:text-sm font-medium leading-relaxed shadow-xs flex gap-3.5 items-start">
            <ShieldCheck className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <strong>Funciona de forma simples:</strong> Você faz sua inscrição promocional de apenas R$ 29,90 hoje. Acessa a área de membros, faz as aulas de introdução, ouve os áudios e baixa seus PDFs. Se em até 7 dias você achar que o conteúdo não agregou valor ou simplesmente não se adaptar ao nosso portal de entrega, basta enviar um único e-mail. Nós devolvemos 100% do seu pagamento de volta. Sem perguntas desagradáveis, sem enrolação e sem contratos ocultos.
            </div>
          </div>

          <p className="text-xs text-slate-400 font-bold tracking-wider uppercase flex items-center justify-center gap-1.5">
            <Lock className="w-3.5 h-3.5 text-slate-400" />
            RESERVA PROTEGIDA POR SISTEMA DE CRIPTOGRAFIA AVANÇADO
          </p>
        </div>

      </div>
    </section>
  );
}
