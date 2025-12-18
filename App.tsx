
import React, { useState } from 'react';
import { StartScreen } from './screens/StartScreen';
import { PlayerSetup } from './screens/PlayerSetup';
import { GameScreen } from './screens/GameScreen';
import { EndScreen } from './screens/EndScreen';
import { GameState } from './types';

export default function App() {
  const [state, setState] = useState<GameState>({
    screen: 'start',
    player: { name: '' },
    score: 0,
    totalPossible: 0
  });

  const handleStart = () => setState(s => ({ ...s, screen: 'setup' }));

  const handleBegin = (name: string) => {
    setState(s => ({
      ...s,
      screen: 'game',
      player: { name },
      score: 0
    }));
  };

  const handleGameEnd = (finalScore: number, rounds: number) => {
    setState(s => ({
      ...s,
      screen: 'end',
      score: finalScore,
      totalPossible: rounds * 10
    }));
  };

  const handleRestart = () => {
    setState({
      screen: 'start',
      player: { name: '' },
      score: 0,
      totalPossible: 0
    });
  };

  switch (state.screen) {
    case 'start':
      return <StartScreen onStart={handleStart} />;
    case 'setup':
      return <PlayerSetup onBegin={handleBegin} />;
    case 'game':
      return (
        <GameScreen 
          playerName={state.player.name}
          onGameEnd={handleGameEnd}
        />
      );
    case 'end':
      return (
        <EndScreen 
          playerName={state.player.name}
          score={state.score}
          totalPossible={state.totalPossible}
          onRestart={handleRestart}
        />
      );
    default:
      return null;
  }
}
