"use client";

import { Question, AnswerValue } from "@/types/quiz";

interface QuestionCardProps {
  question: Question;
  currentAnswer?: AnswerValue;
  onAnswer: (value: AnswerValue) => void;
  onPrev: () => void;
  canGoPrev: boolean;
}

export function QuestionCard({ question, currentAnswer, onAnswer, onPrev, canGoPrev }: QuestionCardProps) {
  return (
    <section className="fur-card animate-fade-up rounded-[2rem] bg-white/85 p-6 shadow-card backdrop-blur">
      <div className="mb-4 inline-flex rounded-full bg-cream px-3 py-1 text-xs font-bold tracking-[0.24em] text-caramel">
        {question.dimension}
      </div>
      <h2 className="text-2xl font-black leading-tight text-ink sm:text-[2rem]">{question.prompt}</h2>
      <p className="mt-3 text-sm leading-6 text-ink/65">
        选一个最像你的反应，点了就会自动跳下一题。
      </p>

      <div className="mt-7 space-y-4">
        {question.options.map((option) => {
          const selected = currentAnswer === option.key;

          return (
            <button
              key={option.key}
              type="button"
              onClick={() => onAnswer(option.key)}
              className={[
                "group w-full rounded-[1.75rem] border px-5 py-4 text-left transition duration-200",
                "hover:-translate-y-0.5 hover:shadow-card active:translate-y-0 active:scale-[0.99]",
                "focus:outline-none focus:ring-4 focus:ring-[#ffd7c6]/70",
                selected
                  ? "border-[#ff9db5] bg-rose shadow-card"
                  : "border-[#f0e2d8] bg-[#fffdf9] hover:border-[#ffc9a9]",
              ].join(" ")}
            >
              <div className="flex items-center gap-4">
                <span
                  className={[
                    "flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-black",
                    selected ? "bg-white text-[#ff6f97]" : "bg-cream text-caramel group-hover:bg-butter",
                  ].join(" ")}
                >
                  {option.key}
                </span>
                <span className="text-base font-semibold leading-6 text-ink">{option.text}</span>
              </div>
            </button>
          );
        })}
      </div>

      <div className="mt-6 flex items-center justify-between gap-3">
        <button
          type="button"
          onClick={onPrev}
          disabled={!canGoPrev}
          className={[
            "rounded-full px-4 py-2 text-sm font-semibold transition",
            canGoPrev
              ? "bg-cream text-ink hover:bg-butter active:scale-[0.98]"
              : "cursor-not-allowed bg-[#f6f1eb] text-ink/35",
          ].join(" ")}
        >
          上一题
        </button>
        <div className="rounded-full bg-[#fff4ec] px-4 py-2 text-sm font-semibold text-caramel">
          选择后自动前进
        </div>
      </div>
    </section>
  );
}
