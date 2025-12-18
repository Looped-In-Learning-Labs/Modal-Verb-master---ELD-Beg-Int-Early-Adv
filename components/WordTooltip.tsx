
import React, { useState } from 'react';
import { WordBankItem, ModalStyle } from '../types';

interface WordTooltipProps {
  word: WordBankItem;
  colors: ModalStyle;
}

export const WordTooltip: React.FC<WordTooltipProps> = ({ word, colors }) => {
  const [show, setShow] = useState(false);

  return (
    <div 
      className="relative inline-block"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      onTouchStart={() => setShow(true)}
      onTouchEnd={() => setShow(false)}
    >
      <span className={`px-4 py-2 rounded-xl ${colors.bg} ${colors.text} border-2 ${colors.border} cursor-help font-semibold transition-all hover:scale-110 flex items-center gap-2 shadow-sm`}>
        {word.english}
        <i className="fa-solid fa-language opacity-40 text-xs"></i>
      </span>
      {show && (
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-4 py-2 bg-slate-800 text-white text-sm rounded-xl whitespace-nowrap z-50 shadow-2xl border border-slate-700">
          <p className="font-bold text-blue-300">En español:</p>
          <p className="text-base">{word.spanish}</p>
          <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-slate-800"></div>
        </div>
      )}
    </div>
  );
};
