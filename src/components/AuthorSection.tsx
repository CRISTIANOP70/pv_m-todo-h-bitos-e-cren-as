import { ShieldCheck, Award, BookOpen, Brain, GraduationCap } from 'lucide-react';
import authorPhoto from '../assets/images/image.png';

export default function AuthorSection() {
  return (
    <section className="bg-slate-50 py-16 md:py-24 border-b border-slate-100 font-sans">
      <div className="container mx-auto px-4 max-w-5xl">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto mb-14">
          <span className="text-[10px] font-black tracking-widest text-blue-600 bg-blue-50 px-2.5 py-1 rounded uppercase">
            Sua Mentoria Comportamental
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-display text-slate-900 tracking-tight leading-tight">
            Quem vai te guiar nessa reprogramação
          </h2>
          <div className="h-1 bg-blue-600 w-16 mx-auto rounded" />
        </div>

        {/* Detailed Bio layout split layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14 items-center">
          
          {/* Author Portrait (Left side desktop) */}
          <div className="md:col-span-4 flex justify-center">
            <div className="relative group max-w-xs">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 to-transparent rounded-2xl blur-xl" />
              <div className="relative p-1.5 bg-white border border-slate-200 shadow-lg rounded-2xl overflow-hidden group-hover:scale-[1.01] hover:shadow-xl transition-all">
                <img
                  src={authorPhoto}
                  alt="Demétrio Pinheiro — Mentor de Reprogramação Mental"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto rounded-xl object-cover aspect-[4/5] object-center bg-slate-900"
                />
                
                {/* Visual Label underneath photo */}
                <div className="bg-slate-900 text-white p-3 text-center rounded-b-xl leading-none">
                  <h4 className="font-extrabold text-sm tracking-tight">Demétrio Pinheiro</h4>
                  <p className="text-[10px] text-blue-400 mt-1 font-mono uppercase font-semibold">Hipnoterapeuta & Mentor</p>
                </div>
              </div>
            </div>
          </div>

          {/* Author Copy and Journey (Right side desktop) */}
          <div className="md:col-span-8 space-y-6 text-center md:text-left text-slate-700 text-sm sm:text-base leading-relaxed">
            
            <p className="font-bold text-slate-900 text-base font-display">
              "Se você sente que está travado em um ciclo eterno de procrastinação, ansiedade ou autossabotagem, o verdadeiro culpado não é o seu caráter ou falta de força de vontade: é o piloto automático que o seu cérebro instalou."
            </p>

            <div className="space-y-4 font-normal text-slate-600">
              <p>
                Como <b>hipnoterapeuta e especialista em comportamento humano</b>, dedico minha carreira a decodificar os mecanismos invisíveis que regem nossas decisões inconscientes. Meu trabalho é focado em desconstruir o "piloto automático" ineficiente do cérebro, quebrar crenças limitadoras e desenhar sistemas práticos baseados em <b>biologia comportamental</b> e <b>neurociência aplicada</b>.
              </p>
              
              <p>
                O cérebro busca sempre poupar energia e buscar recompensas imediatas rápidas. Sem os filtros corretos de adaptação sináptica, você se torna refém desse mecanismo milenar.
              </p>

              <p>
                Desenvolvi e empacotei técnicas científicas de reprogramação mental e reprogramação neural rápida para aplicar diretamente no seu dia a dia. Chega de tentativas exaustivas que falham em poucos dias. O resultado da reprogramação biológica é duradouro, silencioso e definitivo, guiando você de volta ao controle absoluto das suas ações diárias.
              </p>
            </div>

            {/* Core credentials bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 text-left">
              <div className="flex items-start gap-2">
                <Brain className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <h5 className="font-bold text-xs text-slate-900 uppercase">Neurociências & Hipnoterapia</h5>
                  <p className="text-xs text-slate-500 font-normal">Foco no controle do subconsciente, eliminação de âncoras limitadoras e hábitos duradouros.</p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <Award className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <h5 className="font-bold text-xs text-slate-900 uppercase">Sistemas Comportamentais Práticos</h5>
                  <p className="text-xs text-slate-500 font-normal">Uma abordagem que substitui a força de vontade por biologia pura e aplicada.</p>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Divider and Certification Badges to increase Authority and Conversion */}
        <div className="border-t border-slate-200/60 mt-14 pt-10">
          <p className="text-center text-[10px] sm:text-xs font-extrabold text-slate-400 uppercase tracking-widest mb-6">
            Certificações & Validações do Autor
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            
            {/* Cert 1 */}
            <div className="flex items-center gap-3 bg-white p-4 rounded-xl border border-slate-200/50 shadow-xs hover:border-blue-200/80 transition-all duration-300">
              <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                <Brain className="w-5 h-5" />
              </div>
              <div className="space-y-0.5 text-left">
                <span className="block text-xs font-extrabold text-slate-800 leading-tight">Autoridade em Neurociência</span>
                <span className="block text-[10px] text-slate-500">Mapeamento e Modulação Sináptica</span>
              </div>
            </div>

            {/* Cert 2 */}
            <div className="flex items-center gap-3 bg-white p-4 rounded-xl border border-slate-200/50 shadow-xs hover:border-emerald-200/80 transition-all duration-300">
              <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <div className="space-y-0.5 text-left">
                <span className="block text-xs font-extrabold text-slate-800 leading-tight">Membro da Sociedade de Hipnoterapia</span>
                <span className="block text-[10px] text-slate-500">Regressão e Reprogramação Rápida</span>
              </div>
            </div>

            {/* Cert 3 */}
            <div className="flex items-center gap-3 bg-white p-4 rounded-xl border border-slate-200/50 shadow-xs hover:border-amber-200/80 transition-all duration-300">
              <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-600 shrink-0">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div className="space-y-0.5 text-left">
                <span className="block text-xs font-extrabold text-slate-800 leading-tight">Biologia Comportamental</span>
                <span className="block text-[10px] text-slate-500">Especialização em Hábitos & Rotinas</span>
              </div>
            </div>

            {/* Cert 4 */}
            <div className="flex items-center gap-3 bg-white p-4 rounded-xl border border-slate-200/50 shadow-xs hover:border-indigo-200/80 transition-all duration-300">
              <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="space-y-0.5 text-left">
                <span className="block text-xs font-extrabold text-slate-800 leading-tight">Prática Baseada em Evidências</span>
                <span className="block text-[10px] text-slate-500">Técnicas Cientificamente Validadas</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
