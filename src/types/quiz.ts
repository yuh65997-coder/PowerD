export type MBTILetter = "E" | "I" | "S" | "N" | "T" | "F" | "J" | "P";

export type DimensionKey = "EI" | "SN" | "TF" | "JP";

export type AnswerValue = "A" | "B";

export interface QuestionOption {
  key: AnswerValue;
  text: string;
  letter: MBTILetter;
}

export interface Question {
  id: number;
  dimension: DimensionKey;
  prompt: string;
  options: [QuestionOption, QuestionOption];
}

export interface ResultProfile {
  type: string;
  catName: string;
  shortTag: string;
  oneLiner: string;
  description: string;
  traits: string;
  socialStyle: string;
  relationshipStyle: string;
  workStyle: string;
  triggers: string;
  declaration: string;
  keywords: string[];
  palette: {
    background: string;
    accent: string;
    secondary: string;
    text: string;
  };
  bestMatch: string;
  bestMatchReason: string;
}

export interface QuizState {
  answers: Record<number, AnswerValue>;
  currentIndex: number;
  startedAt: number | null;
  completedAt: number | null;
  elapsedMs: number;
}

export interface ResultSnapshot {
  type: string;
  elapsedMs: number;
  completedAt: number;
  isRandom?: boolean;
}
