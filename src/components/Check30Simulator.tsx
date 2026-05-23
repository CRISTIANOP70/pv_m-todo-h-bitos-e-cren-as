import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Check, Award, Trophy, Info, Flame } from 'lucide-react';

export default function Check30Simulator() {
  const [xp, setXp] = useState(380);
  const [level, setLevel] = useState(4);
  const [streak, setStreak] = useState(14);
  const [feedback, setFeedback] = useState<string | null>(null);
  
  const [habits, setHabits] = useState([
    { id: 1, name: "Leitura Concentrada (10 min)", done: false, xpAward: 50, category: "Mente" },
    { id: 2, name: 'Técnica "Estou Me Tornando"', done: false, xpAward: 80, category: "Identidade" },
    { id: 3, name: "Atividade Física Angular", done: false, xpAward: 60, category: "Fisiologia" }
  ]);

  const handleToggleHabit = (id: number) => {
    setHabits(prev => prev.map(h => {
      if (h.id === id) {
        const nextDone = !h.done;
        
        if (nextDone) {
          // Play sound or show popup
          const xpGained = h.xpAward;
          const nextXP = xp + xpGained;
          let levelUp = false;
          let nextLevel = level;
          
          if (nextXP >= 500) {
            levelUp = true;
            nextLevel = level + 1;
            setXp(nextXP - 500);
            setLevel(nextLevel);
          } else {
            setXp(nextXP);
          }

          setStreak(prev => prev + 1);
          setFeedback(levelUp 
            ? `🎉 EVOLUÇÃO NEURAL! Você subiu para o Nível ${nextLevel}!` 
            : `⚡ +${xpGained} XP! Sinapse fortalecida com sucesso!`
          );
          
          setTimeout(() => setFeedback(null), 3500);
        } else {
          setXp(prev => Math.max(0, prev - h.xpAward));
          setStreak(prev => Math.max(0, prev - 1));
        }

        return { ...h, done: nextDone };
      }
      return h;
    }));
  };

  const percentProgress = Math.round((habits.filter(h => h.done).length / habits.length) * 100);

  return (
    <div className="bg-slate-900 leading-normal text-slate-100 rounded-3xl p-5 border border-slate-800 shadow-xl max-w-sm mx-auto font-sans relative overflow-hidden">
      {/* Background radial gradient */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-orange-600/10 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-emerald-600/10 rounded-full blur-2xl pointer-events-none" />

      {/* App Header style */}
      <div className="flex items-center justify-between pb-4 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-orange-600 flex items-center justify-center text-white shadow-lg shadow-orange-600/25">
            <Trophy className="w-4 h-4" />
          </div>
          <div>
            <h4 className="text-xs font-black tracking-wide font-display text-white uppercase">App Check30</h4>
            <p className="text-[9px] text-slate-400 font-mono">REPUTAÇÃO NEURAL</p>
          </div>
        </div>

        {/* Streak Flame Container */}
        <div className="flex items-center gap-1 bg-amber-500/10 text-amber-400 px-2 py-0.5 rounded-full border border-amber-500/20 text-[10px] font-black">
          <Flame className="w-3.5 h-3.5 text-orange-500 animate-bounce fill-orange-500" />
          <span>{streak} DIAS</span>
        </div>
      </div>

      {/* Gamification Stats Area */}
      <div className="py-4 space-y-3">
        {/* Experience Level Progress Bar */}
        <div className="space-y-1">
          <div className="flex justify-between text-[10px] font-bold">
            <span className="text-orange-400 uppercase tracking-wider">Mente Nível {level}</span>
            <span className="text-slate-400 font-mono">{xp}/500 XP para Nível {level + 1}</span>
          </div>
          <div className="h-2.5 w-full bg-slate-800 rounded-full overflow-hidden p-0.5">
            <div 
              className="h-full bg-gradient-to-r from-orange-500 to-amber-400 rounded-full transition-all duration-500"
              style={{ width: `${(xp / 500) * 100}%` }}
            />
          </div>
        </div>

        {/* Level Tag description */}
        <div className="flex items-center gap-1.5 text-[9px] text-slate-400 bg-slate-950/40 p-2 rounded-lg decoration-none">
          <Trophy className="w-3.5 h-3.5 text-amber-500 shrink-0" />
          <span>
            {level === 4 && "Título Atual: Aprendiz de Hábitos. Células cerebrais se adaptando..."}
            {level > 4 && "Título Atual: Sinapse Blindada! Você dominou o piloto automático!"}
          </span>
        </div>
      </div>

      {/* Habits Checklist Selector */}
      <div className="space-y-2.5 my-1">
        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Hábitos de Hoje</p>
        
        <div className="space-y-2">
          {habits.map((habit) => (
            <div 
              key={habit.id}
              onClick={() => handleToggleHabit(habit.id)}
              className={`flex items-center justify-between p-3 rounded-xl border transition-all cursor-pointer select-none group ${habit.done ? 'bg-slate-800/80 border-emerald-500/50 hover:bg-slate-800' : 'bg-slate-950/50 border-slate-800 hover:border-slate-700 hover:bg-slate-950'}`}
            >
              <div className="flex items-center gap-2.5">
                {/* Custom glowing check button */}
                <div className={`w-5 h-5 rounded-md flex items-center justify-center border transition-all ${habit.done ? 'bg-emerald-500 border-emerald-500 text-white' : 'border-slate-700 group-hover:border-orange-500'}`}>
                  {habit.done && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                </div>
                <div>
                  <p className={`text-xs font-semibold ${habit.done ? 'text-slate-400 line-through' : 'text-slate-100'}`}>{habit.name}</p>
                  <span className="text-[8px] text-slate-500 uppercase tracking-widest font-mono">{habit.category}</span>
                </div>
              </div>
              <div className="text-right">
                <span className={`text-[10px] font-mono font-bold ${habit.done ? 'text-emerald-500' : 'text-orange-400'}`}>
                  +{habit.xpAward} XP
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive feedback banners */}
      <div className="h-10 flex items-center justify-center pt-2">
        <AnimatePresence mode="wait">
          {feedback ? (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-[10px] font-bold text-center bg-emerald-500/10 text-emerald-400 border border-emerald-500/25 py-1 px-3 rounded-full uppercase"
            >
              {feedback}
            </motion.div>
          ) : percentProgress === 100 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-[10px] font-bold text-amber-400 text-center uppercase tracking-wider flex items-center gap-1"
            >
              <Award className="w-3 text-amber-400 animate-spin" />
              <span>ROTEIRO DIÁRIO 100% FEITO! SUPERAÇÃO ABSOLUTA!</span>
            </motion.div>
          ) : (
            <p className="text-[9px] text-slate-500 flex items-center gap-1 select-none">
              <Info className="w-3 h-3 text-slate-600" />
              <span>Clique nos hábitos acima para simular a conclusão.</span>
            </p>
          )}
        </AnimatePresence>
      </div>

      {/* Outer Vercel redirect link */}
      <div className="mt-2 text-center">
        <a 
          href="https://check30-pink.vercel.app" 
          target="_blank" 
          rel="noreferrer" 
          className="text-[10px] font-medium text-slate-500 hover:text-orange-400 underline transition-colors"
        >
          Ir para a página externa do App Check30 ↗
        </a>
      </div>
    </div>
  );
}
