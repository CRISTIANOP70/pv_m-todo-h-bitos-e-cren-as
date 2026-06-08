import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldAlert, CreditCard, AlertTriangle } from 'lucide-react';

interface StickyMobileCtaProps {
  onCtaClick: () => void;
}

export default function StickyMobileCTA({ onCtaClick }: StickyMobileCtaProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollY / Math.max(docHeight, 1)) * 100;
      
      // Show sticker if scrolled more than 22% of the page
      if (scrollPercent > 22) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-slate-200/80 shadow-[0_-8px_24px_rgba(15,23,42,0.08)] px-4 py-3 md:hidden flex items-center justify-between"
        >
          <div className="flex flex-col">
            <div className="flex items-center gap-1">
              <span className="text-[10px] font-black font-display text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded leading-none uppercase">
                OFERTA ÚNICA
              </span>
            </div>
            <div className="flex items-baseline gap-1 mt-1">
              <span className="text-base font-black text-slate-900 leading-none">R$ 29,90</span>
              <span className="text-[10px] text-slate-400 line-through">R$ 445</span>
            </div>
          </div>

          <button
            onClick={onCtaClick}
            className="flex-1 max-w-[210px] bg-orange-600 active:bg-orange-700 hover:bg-orange-500 text-white font-black text-xs uppercase h-11 px-3 rounded-xl flex items-center justify-center gap-1.5 shadow-lg shadow-orange-600/10 active:scale-98 transition-all cursor-pointer select-none"
          >
            <span>ATIVAR POR R$ 29,90</span>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
