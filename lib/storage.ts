import { QuizState, ResultSnapshot } from "@/types/quiz";

const QUIZ_STATE_KEY = "cat-mbti-quiz-state";
const RESULT_KEY = "cat-mbti-result";

export const createEmptyQuizState = (): QuizState => ({
  answers: {},
  currentIndex: 0,
  startedAt: null,
  completedAt: null,
  elapsedMs: 0,
});

const isBrowser = () => typeof window !== "undefined";

export const getQuizState = (): QuizState | null => {
  if (!isBrowser()) return null;

  try {
    const value = window.localStorage.getItem(QUIZ_STATE_KEY);
    return value ? (JSON.parse(value) as QuizState) : null;
  } catch {
    return null;
  }
};

export const setQuizState = (state: QuizState) => {
  if (!isBrowser()) return;
  window.localStorage.setItem(QUIZ_STATE_KEY, JSON.stringify(state));
};

export const clearQuizState = () => {
  if (!isBrowser()) return;
  window.localStorage.removeItem(QUIZ_STATE_KEY);
};

export const getResultSnapshot = (): ResultSnapshot | null => {
  if (!isBrowser()) return null;

  try {
    const value = window.localStorage.getItem(RESULT_KEY);
    return value ? (JSON.parse(value) as ResultSnapshot) : null;
  } catch {
    return null;
  }
};

export const setResultSnapshot = (snapshot: ResultSnapshot) => {
  if (!isBrowser()) return;
  window.localStorage.setItem(RESULT_KEY, JSON.stringify(snapshot));
};

export const clearResultSnapshot = () => {
  if (!isBrowser()) return;
  window.localStorage.removeItem(RESULT_KEY);
};

export const resetAllStorage = () => {
  clearQuizState();
  clearResultSnapshot();
};
