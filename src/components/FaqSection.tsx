import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQ_DATA } from '../data';

export default function FaqSection() {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleFaq = (id: number) => {
    setOpenId(prev => (prev === id ? null : id));
  };

  return (
    <section className="bg-slate-50 py-16 md:py-24 border-b border-slate-100 font-sans">
      <div className="container mx-auto px-4 max-w-4xl">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto mb-14">
          <span className="text-[10px] font-black tracking-widest text-blue-600 bg-blue-50 px-2.5 py-1 rounded uppercase">
            Perguntas Frequentes
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-display text-slate-900 tracking-tight leading-tight">
            Ainda sobrou alguma dúvida?
          </h2>
          <p className="text-slate-500 text-sm max-w-md mx-auto">
            Separamos as principais respostas sobre o funcionamento e entrega do método para clarear sua decisão.
          </p>
          <div className="h-1 bg-blue-600 w-16 mx-auto rounded" />
        </div>

        {/* Dynamic Accordion list */}
        <div className="space-y-3.5 max-w-3xl mx-auto">
          {FAQ_DATA.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div 
                key={faq.id} 
                className="bg-white border border-slate-200/60 rounded-2xl overflow-hidden shadow-xs hover:border-slate-300 transition-all"
              >
                {/* Trigger Button */}
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full px-5 py-4.5 flex items-center justify-between text-left gap-4 font-bold text-slate-900 text-xs sm:text-sm hover:bg-slate-50/50 cursor-pointer transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle className="w-4.5 h-4.5 text-blue-500 shrink-0 select-none pointer-events-none" />
                    <span>{faq.question}</span>
                  </div>
                  <ChevronDown 
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-blue-500' : ''}`}
                  />
                </button>

                {/* Animated Collapsible answer */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                    >
                      <div className="px-5 pb-5 pt-1 text-xs sm:text-sm leading-relaxed text-slate-600 border-t border-slate-100 bg-slate-50/30">
                        <p>{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Dynamic support caption */}
        <div className="mt-12 text-center text-xs text-slate-400 font-semibold leading-relaxed">
          <p>Precisando de alguma ajuda diferenciada? Entre em contato com our time de atendimento:</p>
          <a 
            href="mailto:servicosiatool@gmail.com" 
            className="text-blue-600 hover:text-blue-500 font-black underline mt-1.5 inline-block text-[11px]"
          >
            servicosiatool@gmail.com
          </a>
        </div>

      </div>
    </section>
  );
}
