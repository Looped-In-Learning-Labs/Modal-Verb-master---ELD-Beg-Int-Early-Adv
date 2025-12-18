
export type ModalType = 'should' | 'could' | 'would';

export interface WordBankItem {
  english: string;
  spanish: string;
}

export interface SentenceFrame {
  english: string;
  spanish: string;
}

export interface Scenario {
  id: number;
  scenario: string;
  scenarioSpanish: string;
  modal: ModalType;
  sentenceFrames: SentenceFrame[];
  wordBank: WordBankItem[];
  icon: string;
}

export interface ModalStyle {
  bg: string;
  border: string;
  text: string;
  accent: string;
  light: string;
  ring: string;
}

export interface GameState {
  screen: 'start' | 'setup' | 'game' | 'end';
  player: { name: string };
  score: number;
  totalPossible: number;
}
