
import React from 'react';

interface EndScreenProps {
  playerName: string;
  score: number;
  totalPossible: number;
  onRestart: () => void;
}

export const EndScreen: React.FC<EndScreenProps> = ({ playerName, score, totalPossible, onRestart }) => {
  const percentage = Math.round((score / totalPossible) * 100);
  
  const getMessage = () => {
    if (percentage >= 90) return "Master of Modals! 🏆";
    if (percentage >= 70) return "Great Job! Keep Practicing. 🌟";
    if (percentage >= 50) return "Good Effort! You're Learning. 👍";
    return "Keep Trying! Practice makes perfect. 🔄";
  };

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-6">
      <div className="max-w-2xl w-full bg-white/5 border border-white/10 backdrop-blur-2xl rounded-[3rem] p-12 text-center shadow-2xl">
        <div className="text-8xl mb-6 animate-bounce">
          {percentage >= 70 ? '🎉' : '📚'}
        </div>

        <h2 className="text-5xl font-black text-white mb-2">Practice Complete!</h2>
        <p className="text-2xl text-slate-400 mb-10">{playerName}, you did a great job today.</p>

        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 mb-10">
           <div className="flex flex-col items-center gap-4">
              <div className="relative w-48 h-48 flex items-center justify-center">
                <svg className="w-full h-full transform -rotate-90">
                  <circle
                    cx="96" cy="96" r="80"
                    stroke="currentColor" strokeWidth="12" fill="transparent"
                    className="text-slate-800"
                  />
                  <circle
                    cx="96" cy="96" r="80"
                    stroke="currentColor" strokeWidth="12" fill="transparent"
                    strokeDasharray={2 * Math.PI * 80}
                    strokeDashoffset={2 * Math.PI * 80 * (1 - percentage / 100)}
                    className="text-blue-500 transition-all duration-1000 ease-out"
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-5xl font-black text-white">{percentage}%</span>
                  <span className="text-xs text-slate-500 uppercase font-bold tracking-widest">Score</span>
                </div>
              </div>
              
              <div className="mt-4">
                <p className="text-slate-400 font-bold mb-1">Points Earned:</p>
                <p className="text-4xl font-black text-white">{score} / {totalPossible}</p>
              </div>
           </div>
        </div>

        <div className="mb-12">
          <div className="inline-block px-10 py-5 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl shadow-xl">
            <p className="text-2xl font-black text-white">{getMessage()}</p>
          </div>
        </div>

        <button
          onClick={onRestart}
          className="w-full py-6 bg-white text-slate-900 text-2xl font-black rounded-3xl hover:bg-slate-100 transition-all shadow-xl hover:scale-[1.02]"
        >
          New Session
        </button>
      </div>
    </div>
  );
};
