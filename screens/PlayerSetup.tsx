
import React, { useState } from 'react';

interface PlayerSetupProps {
  onBegin: (name: string) => void;
}

export const PlayerSetup: React.FC<PlayerSetupProps> = ({ onBegin }) => {
  const [name, setName] = useState('');

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-6">
      <div className="max-w-lg w-full bg-white/5 border border-white/10 backdrop-blur-xl rounded-[2.5rem] p-10 shadow-2xl">
        <h2 className="text-4xl font-black text-white text-center mb-2">Ready to Practice?</h2>
        <p className="text-slate-400 text-center mb-10 text-lg">Enter your name / Ingresa tu nombre</p>

        <div className="space-y-8">
          <div className="group">
            <label className="block text-slate-300 mb-3 font-semibold text-lg flex justify-between">
              <span>Your Name</span>
              <span className="text-sm opacity-50 font-normal">Tu nombre</span>
            </label>
            <div className="relative">
              <span className="absolute left-5 top-1/2 -translate-y-1/2 text-3xl">👋</span>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Type here..."
                className="w-full pl-16 pr-6 py-5 rounded-2xl bg-white/5 border-2 border-white/10 text-white text-xl focus:border-blue-500 focus:bg-white/10 transition-all outline-none"
                onKeyDown={(e) => e.key === 'Enter' && name && onBegin(name)}
              />
            </div>
          </div>
        </div>

        <button
          onClick={() => onBegin(name || 'Student')}
          disabled={!name}
          className="w-full mt-12 py-5 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-2xl font-black rounded-2xl hover:scale-[1.02] disabled:opacity-50 disabled:hover:scale-100 transition-all shadow-xl"
        >
          Start Practice!
        </button>
      </div>
    </div>
  );
};
