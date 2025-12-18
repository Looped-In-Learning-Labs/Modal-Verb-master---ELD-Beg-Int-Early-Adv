
import React, { useState, useEffect } from 'react';
import { SCENARIOS, MODAL_COLORS } from '../constants';
import { Scenario } from '../types';
import { WordTooltip } from '../components/WordTooltip';
import { speakText, checkSentence } from '../services/geminiService';

interface GameScreenProps {
  playerName: string;
  onGameEnd: (score: number, rounds: number) => void;
}

export const GameScreen: React.FC<GameScreenProps> = ({ playerName, onGameEnd }) => {
  const [gameScenarios, setGameScenarios] = useState<Scenario[]>([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [totalScore, setTotalScore] = useState(0);
  const [phase, setPhase] = useState<'thinking' | 'feedback'>('thinking');
  
  const [studentText, setStudentText] = useState('');
  const [aiFeedback, setAiFeedback] = useState<any>(null);
  const [isCoachLoading, setIsCoachLoading] = useState(false);

  useEffect(() => {
    const shuffled = [...SCENARIOS].sort(() => Math.random() - 0.5).slice(0, 10);
    setGameScenarios(shuffled);
  }, []);

  const currentScenario = gameScenarios[currentIdx];
  const colors = currentScenario ? MODAL_COLORS[currentScenario.modal] : MODAL_COLORS.should;

  useEffect(() => {
    if (currentScenario) {
      speakText(currentScenario.scenario);
    }
  }, [currentIdx]);

  const handleAiCheck = async () => {
    if (!studentText.trim()) return;
    
    setIsCoachLoading(true);
    const feedback = await checkSentence(currentScenario.scenario, currentScenario.modal, studentText);
    setAiFeedback(feedback);
    setIsCoachLoading(false);
    setPhase('feedback');
    
    if (feedback) {
      setTotalScore(prev => prev + feedback.score);
      if (feedback.score >= 8) {
         speakText("Excellent! High score!");
      } else {
         speakText("Good try! Keep learning.");
      }
    }
  };

  const handleNextRound = () => {
    if (currentIdx >= gameScenarios.length - 1) {
      onGameEnd(totalScore, gameScenarios.length);
    } else {
      setCurrentIdx(i => i + 1);
      setPhase('thinking');
      setStudentText('');
      setAiFeedback(null);
    }
  };

  const useFrame = (frame: string) => {
    const starter = frame.replace('___', '').trim();
    setStudentText(starter + ' ');
  };

  if (!currentScenario) return <div className="min-h-screen bg-slate-900 flex items-center justify-center text-white font-bold">Preparing Scenarios...</div>;

  return (
    <div className="min-h-screen bg-slate-900 p-6 flex flex-col items-center">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Side: Progress & Scenario */}
        <div className="lg:col-span-8 space-y-6">
          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 flex justify-between items-center backdrop-blur-md">
            <div>
              <p className="text-slate-400 text-sm uppercase tracking-wider font-bold">Round</p>
              <p className="text-3xl font-black text-white">{currentIdx + 1} / {gameScenarios.length}</p>
            </div>
            
            <div className="text-right">
               <p className="text-slate-400 text-sm uppercase tracking-wider font-bold">Total Score</p>
               <p className="text-3xl font-black text-blue-400">{totalScore}</p>
            </div>
          </div>

          <div className={`${colors.light} border-4 ${colors.border} rounded-[2.5rem] p-8 shadow-2xl relative group`}>
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className={`w-full md:w-48 h-48 ${colors.bg} rounded-[2rem] flex items-center justify-center shadow-lg border-4 border-white flex-shrink-0 relative`}>
                <span className="text-8xl leading-none select-none">{currentScenario.icon}</span>
                <button 
                  onClick={() => speakText(currentScenario.scenario)}
                  className="absolute -bottom-3 -right-3 w-14 h-14 bg-white rounded-full shadow-xl flex items-center justify-center text-blue-600 hover:scale-110 active:scale-90 transition-all border-4 border-slate-100"
                >
                  <i className="fa-solid fa-microphone-lines text-xl"></i>
                </button>
              </div>

              <div className="flex-1 space-y-6">
                <div className="flex items-center gap-3">
                  <span className={`px-5 py-2 rounded-full ${colors.accent} text-white font-black text-xs uppercase tracking-widest`}>
                    GOAL: {currentScenario.modal.toUpperCase()} + "AND"
                  </span>
                  <span className="text-[10px] text-slate-500 font-bold uppercase tracking-tighter">Hover text for translation</span>
                </div>
                
                <div className="relative group/scenario">
                  <h3 className="text-3xl font-extrabold text-slate-800 leading-tight cursor-help transition-colors hover:text-blue-600">
                    {currentScenario.scenario}
                  </h3>
                  <div className="absolute top-full left-0 mt-2 hidden group-hover/scenario:block bg-slate-800 text-white p-4 rounded-xl shadow-2xl z-50 text-base border border-slate-700 max-w-md animate-in fade-in slide-in-from-top-1 duration-200">
                    <p className="font-bold text-blue-300 text-xs mb-1 uppercase">Spanish Translation:</p>
                    <p className="leading-snug">{currentScenario.scenarioSpanish}</p>
                    <div className="absolute -top-2 left-6 w-4 h-4 bg-slate-800 border-t border-l border-slate-700 rotate-45"></div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 pt-2">
                   {currentScenario.sentenceFrames.map((frame, i) => (
                     <div key={i} className="relative group/frame">
                       <button 
                        onClick={() => useFrame(frame.english)}
                        disabled={phase === 'feedback'}
                        className={`px-5 py-3 bg-white border-2 border-slate-200 rounded-2xl text-slate-700 font-bold text-xl shadow-sm flex items-center gap-4 hover:border-blue-400 hover:bg-blue-50 transition-all disabled:opacity-50`}
                       >
                         {frame.english}
                         <i 
                           className="fa-solid fa-volume-high text-slate-400 group-hover/frame:text-blue-500 transition-colors" 
                           onClick={(e) => { e.stopPropagation(); speakText(frame.english); }}
                         ></i>
                       </button>
                       <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 hidden group-hover/frame:block bg-slate-800 text-white px-4 py-2 rounded-xl text-sm whitespace-nowrap z-50 shadow-2xl border border-slate-700">
                          <p className="font-bold text-blue-300 text-xs mb-0.5">Translation:</p>
                          <p className="text-base">{frame.spanish}</p>
                          <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-slate-800"></div>
                       </div>
                     </div>
                   ))}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md">
            <p className="text-slate-400 text-sm font-bold uppercase mb-4 tracking-widest flex items-center gap-2">
              <i className="fa-solid fa-book-open text-blue-400"></i> 
              Word Bank
              <span className="text-[10px] lowercase font-normal opacity-50">(Combine words using "and")</span>
            </p>
            <div className="flex flex-wrap gap-4">
              {currentScenario.wordBank.map((word, i) => (
                <WordTooltip key={i} word={word} colors={colors} />
              ))}
              {/* Added explicit "and" word to the bank for reinforcement */}
              <div className="relative inline-block">
                <span className={`px-4 py-2 rounded-xl bg-slate-700 text-white border-2 border-slate-600 font-bold shadow-sm`}>
                  and
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Coach Box */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-slate-800 border-white/10 rounded-[2rem] border-4 p-6 shadow-2xl">
            <h4 className="text-white text-xl font-black mb-4 flex items-center gap-2">
              <span className="text-2xl">🤖</span> AI English Coach
            </h4>

            {phase === 'thinking' ? (
              <div className="space-y-4">
                <div className="p-3 bg-blue-500/10 border border-blue-500/30 rounded-xl text-xs text-blue-200">
                  <strong>Task:</strong> Use <u>{currentScenario.modal}</u> and <u>and</u> in your sentence for a top score!
                </div>
                <textarea 
                  value={studentText}
                  onChange={(e) => setStudentText(e.target.value)}
                  placeholder="Example: I should help my friend and listen to them..."
                  className="w-full h-48 bg-slate-900 border-2 border-white/10 rounded-2xl p-4 text-white placeholder-slate-600 focus:border-blue-500 outline-none transition-all resize-none text-lg"
                ></textarea>

                <div className="flex gap-2">
                  <button 
                    onClick={handleAiCheck}
                    disabled={isCoachLoading || !studentText.trim()}
                    className="flex-1 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-400 hover:to-indigo-500 disabled:opacity-50 text-white rounded-xl font-black shadow-lg transition-all"
                  >
                    {isCoachLoading ? 'Thinking...' : 'Check My Work'}
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-6 animate-in fade-in duration-500">
                {aiFeedback && (
                  <>
                    <div className="flex justify-between items-center bg-white/5 p-4 rounded-2xl border border-white/10">
                       <span className="text-slate-400 font-bold uppercase text-xs">Score:</span>
                       <span className={`text-4xl font-black ${aiFeedback.score >= 8 ? 'text-emerald-400' : aiFeedback.score >= 5 ? 'text-blue-400' : 'text-amber-400'}`}>
                         {aiFeedback.score}/10
                       </span>
                    </div>

                    <div className="space-y-3">
                      <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
                        <p className="text-white font-bold mb-1 leading-snug">{aiFeedback.feedback}</p>
                        <p className="text-slate-400 text-sm italic">"{aiFeedback.spanishFeedback}"</p>
                      </div>

                      <div className="bg-blue-500/10 p-4 rounded-2xl border border-blue-500/30">
                        <p className="text-blue-300 text-xs font-black uppercase mb-1">Coach's Suggestion:</p>
                        <p className="text-white font-medium">{aiFeedback.suggestion}</p>
                      </div>
                    </div>

                    <button 
                      onClick={handleNextRound}
                      className="w-full py-5 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-black text-xl rounded-2xl shadow-xl hover:scale-[1.02] transition-all"
                    >
                      {currentIdx >= gameScenarios.length - 1 ? 'See Results' : 'Next Question'}
                    </button>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
