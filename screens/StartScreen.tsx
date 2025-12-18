
import React from 'react';

export const StartScreen: React.FC<{ onStart: () => void }> = ({ onStart }) => {
  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-xl w-full relative z-10">
        <div className="bg-white/5 backdrop-blur-md rounded-[2.5rem] p-12 text-center border border-white/10 shadow-2xl">
          <div className="flex justify-center gap-6 mb-12">
            <div className="w-20 h-20 rounded-3xl bg-blue-500 flex items-center justify-center rotate-12 shadow-xl shadow-blue-500/30">
              <span className="text-white font-black text-2xl">?</span>
            </div>
            <div className="w-20 h-20 rounded-3xl bg-emerald-500 flex items-center justify-center -rotate-6 shadow-xl shadow-emerald-500/30">
              <span className="text-white font-black text-2xl">!</span>
            </div>
            <div className="w-20 h-20 rounded-3xl bg-purple-500 flex items-center justify-center rotate-3 shadow-xl shadow-purple-500/30">
              <span className="text-white font-black text-2xl">and</span>
            </div>
          </div>

          <h1 className="text-6xl font-black text-white mb-4 tracking-tighter">
            Modal Master
          </h1>
          <p className="text-2xl text-slate-300 mb-8 font-medium">Independent Grammar Challenge</p>
          
          <div className="grid grid-cols-1 gap-3 mb-12">
            <div className="flex items-center gap-4 bg-white/5 border border-white/10 p-4 rounded-2xl">
               <span className="text-emerald-400 font-black text-2xl">10</span>
               <div className="text-left">
                  <p className="text-white font-bold">Points per round</p>
                  <p className="text-slate-400 text-sm italic">Puntos por ronda</p>
               </div>
            </div>
            <div className="flex items-center gap-4 bg-blue-500/10 border border-blue-500/20 p-4 rounded-2xl">
              <span className="bg-blue-500 text-white px-3 py-1 rounded-lg font-bold">Task</span>
              <div className="text-left text-sm">
                <p className="text-white">Use a <b>Modal Verb</b> + the word <b>"and"</b></p>
                <p className="text-slate-300">Usa un verbo modal y la palabra "and"</p>
              </div>
            </div>
          </div>

          <button
            onClick={onStart}
            className="w-full py-6 bg-gradient-to-r from-blue-600 via-emerald-600 to-purple-600 text-white text-2xl font-black rounded-3xl hover:scale-[1.02] active:scale-[0.98] transition-all shadow-2xl shadow-blue-500/20"
          >
            Begin Practice
          </button>
        </div>
      </div>
    </div>
  );
};
