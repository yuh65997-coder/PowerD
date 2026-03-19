"use client";

import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

import { questions } from "@/data/questions";
import { calculateMBTIType } from "@/lib/mbti";
import {
  createEmptyQuizState,
  getQuizState,
  setQuizState,
  setResultSnapshot,
} from "@/lib/storage";
import { AnswerValue, QuizState } from "@/types/quiz";
import { ProgressBar } from "./ProgressBar";
import { QuestionCard } from "./QuestionCard";

export function QuizPageClient() {
  const router = useRouter();
  const [state, setState] = useState<QuizState>(createEmptyQuizState());
  const [hydrated, setHydrated] = useState(false);
  const [timerNow, setTimerNow] = useState(Date.now());

  useEffect(() => {
    const stored = getQuizState();

    if (stored) {
      setState({
        ...stored,
        startedAt: stored.startedAt ?? Date.now(),
      });
    } else {
      const fresh = createEmptyQuizState();
      fresh.startedAt = Date.now();
      setState(fresh);
      setQuizState(fresh);
    }

    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;

    const interval = window.setInterval(() => {
      setTimerNow(Date.now());
    }, 1000);

    return () => window.clearInterval(interval);
  }, [hydrated]);

  const currentQuestion = questions[state.currentIndex];
  const answeredCount = useMemo(() => Object.keys(state.answers).length, [state.answers]);

  const elapsedMs = useMemo(() => {
    if (!state.startedAt) return state.elapsedMs;
    return state.elapsedMs + (timerNow - state.startedAt);
  }, [state.elapsedMs, state.startedAt, timerNow]);

  const persistState = (nextState: QuizState) => {
    setState(nextState);
    setQuizState(nextState);
  };

  const finishQuiz = (nextAnswers: Record<number, AnswerValue>, totalElapsedMs: number) => {
    const type = calculateMBTIType(nextAnswers);
    const completedAt = Date.now();

    const completedState: QuizState = {
      answers: nextAnswers,
      currentIndex: questions.length - 1,
      startedAt: null,
      completedAt,
      elapsedMs: totalElapsedMs,
    };

    persistState(completedState);
    setResultSnapshot({ type, elapsedMs: totalElapsedMs, completedAt });
    router.push("/result");
  };

  const handleAnswer = (value: AnswerValue) => {
    if (!currentQuestion) return;

    const nextAnswers = { ...state.answers, [currentQuestion.id]: value };
    const totalElapsedMs = elapsedMs;
    const isLastQuestion = state.currentIndex === questions.length - 1;

    if (isLastQuestion) {
      finishQuiz(nextAnswers, totalElapsedMs);
      return;
    }

    const nextState: QuizState = {
      ...state,
      answers: nextAnswers,
      currentIndex: Math.min(state.currentIndex + 1, questions.length - 1),
      elapsedMs: totalElapsedMs,
      startedAt: Date.now(),
    };

    persistState(nextState);
  };

  const handlePrev = () => {
    if (state.currentIndex === 0) return;

    const nextState: QuizState = {
      ...state,
      currentIndex: state.currentIndex - 1,
      elapsedMs,
      startedAt: Date.now(),
    };

    persistState(nextState);
  };

  if (!hydrated) {
    return (
      <main className="page-shell flex min-h-screen items-center justify-center px-4">
        <div className="rounded-[2rem] bg-white/80 px-6 py-5 text-sm font-semibold text-ink shadow-card">
          正在把你的猫爪进度悄悄找回来...
        </div>
      </main>
    );
  }

  if (!currentQuestion) {
    return (
      <main className="page-shell flex min-h-screen items-center justify-center px-4">
        <div className="max-w-md rounded-[2rem] bg-white/90 p-6 text-center shadow-card">
          <p className="text-lg font-bold text-ink">题目找不到了，先回首页重新开始吧。</p>
          <button
            type="button"
            onClick={() => router.push("/")}
            className="mt-4 rounded-full bg-[#ff9b7f] px-5 py-3 font-bold text-white transition hover:bg-[#ff8767] active:scale-[0.98]"
          >
            回到首页
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="page-shell min-h-screen px-4 py-6 sm:px-6 sm:py-8">
      <div className="mx-auto max-w-3xl space-y-6">
        <div className="animate-fade-up rounded-[2rem] bg-white/80 p-5 shadow-card backdrop-blur">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-caramel">Cat MBTI Quiz</p>
              <h1 className="mt-2 text-2xl font-black text-ink sm:text-3xl">找到你的猫系人格</h1>
            </div>
            <div className="rounded-full bg-cream px-4 py-2 text-sm font-semibold text-caramel">
              已答 {answeredCount} 题
            </div>
          </div>

          <div className="mt-5 grid gap-4 sm:grid-cols-[1fr_auto] sm:items-end">
            <ProgressBar current={answeredCount} total={questions.length} />
            <div className="rounded-[1.25rem] bg-[#fff7f0] px-4 py-3 text-sm font-semibold text-ink">
              当前题号 {state.currentIndex + 1} / {questions.length}
              <br />
              测试用时 {Math.floor(elapsedMs / 60000)}分{String(Math.floor((elapsedMs % 60000) / 1000)).padStart(2, "0")}秒
            </div>
          </div>
        </div>

        <QuestionCard
          question={currentQuestion}
          currentAnswer={state.answers[currentQuestion.id]}
          onAnswer={handleAnswer}
          onPrev={handlePrev}
          canGoPrev={state.currentIndex > 0}
        />
      </div>
    </main>
  );
}
