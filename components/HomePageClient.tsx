"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { getRandomResultType } from "@/lib/mbti";
import { createEmptyQuizState, resetAllStorage, setQuizState, setResultSnapshot } from "@/lib/storage";

export function HomePageClient() {
  const router = useRouter();
  const [isRandomLoading, setIsRandomLoading] = useState(false);

  const startQuiz = () => {
    resetAllStorage();
    const state = createEmptyQuizState();
    state.startedAt = Date.now();
    setQuizState(state);
    router.push("/quiz");
  };

  const randomPreview = () => {
    setIsRandomLoading(true);
    resetAllStorage();

    const type = getRandomResultType();
    setQuizState(createEmptyQuizState());
    setResultSnapshot({
      type,
      elapsedMs: 0,
      completedAt: Date.now(),
      isRandom: true,
    });

    router.push("/result?mode=random");
  };

  return (
    <main className="page-shell min-h-screen px-4 py-8 sm:px-6">
      <div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-6xl flex-col justify-center gap-8">
        <section className="grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="animate-fade-up space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-sm font-semibold text-caramel shadow-sm backdrop-blur">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff9b54]" />
              轻松娱乐向小猫人格测试
            </div>
            <div className="space-y-4">
              <h1 className="text-4xl font-black leading-tight text-ink sm:text-6xl">
                小猫 MBTI 测试器
              </h1>
              <p className="max-w-xl text-lg leading-8 text-ink/75 sm:text-xl">
                测测你是哪一类小猫型人格。12 道轻盈小题，带你找到属于自己的猫系气质、社交节奏和专属宣言。
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={startQuiz}
                className="rounded-full bg-[#ff9b7f] px-6 py-4 text-base font-black text-white shadow-card transition hover:-translate-y-0.5 hover:bg-[#ff8767] active:scale-[0.98]"
              >
                开始测试
              </button>
              <button
                type="button"
                onClick={randomPreview}
                disabled={isRandomLoading}
                className={[
                  "rounded-full border border-[#f2d8c7] bg-white/85 px-6 py-4 text-base font-bold text-ink shadow-sm transition",
                  "hover:-translate-y-0.5 hover:bg-[#fff9f4] active:scale-[0.98]",
                  isRandomLoading ? "cursor-not-allowed opacity-60" : "",
                ].join(" ")}
              >
                随机看看一种小猫人格
              </button>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {[
                "移动端优先，适合随手测",
                "结果页可复制、可分享、可保存图片",
                "娱乐向内容，不作为专业人格评估依据",
              ].map((item) => (
                <div key={item} className="rounded-[1.5rem] bg-white/75 p-4 text-sm leading-6 text-ink shadow-sm backdrop-blur">
                  {item}
                </div>
              ))}
            </div>

            <p className="text-sm leading-6 text-ink/55">
              这是娱乐向测试，不作为专业人格评估依据。适合和朋友一起测，截图分享谁是最会贴贴、最会炸毛、最会脑补的小猫。
            </p>
          </div>

          <div className="animate-fade-up [animation-delay:120ms]">
            <div className="fur-card relative overflow-hidden rounded-[2.5rem] bg-white/85 p-6 shadow-float backdrop-blur sm:p-8">
              <div className="absolute inset-0 bg-paws bg-[length:54px_54px] opacity-30" />
              <div className="relative z-10 space-y-5">
                <div className="rounded-[2rem] bg-gradient-to-br from-[#ffe6be] via-[#ffd8d2] to-[#e2efff] p-6">
                  <div className="mx-auto flex h-[280px] max-w-[280px] items-center justify-center">
                    <div className="relative h-56 w-56 animate-bob">
                      <div className="absolute inset-x-6 bottom-0 h-40 rounded-[45%] bg-white shadow-card" />
                      <div className="absolute left-12 top-4 h-20 w-20 rotate-[-22deg] rounded-[18px_42px_16px_38px] bg-white" />
                      <div className="absolute right-12 top-4 h-20 w-20 rotate-[22deg] rounded-[42px_18px_38px_16px] bg-white" />
                      <div className="absolute left-[3.1rem] top-16 h-4 w-4 rounded-full bg-[#573f35]" />
                      <div className="absolute right-[3.1rem] top-16 h-4 w-4 rounded-full bg-[#573f35]" />
                      <div className="absolute left-[5.4rem] top-24 h-5 w-7 rounded-full bg-[#ffb7bf]" />
                      <div className="absolute left-[2.2rem] top-24 h-px w-12 bg-[#c9a89f]" />
                      <div className="absolute right-[2.2rem] top-24 h-px w-12 bg-[#c9a89f]" />
                      <div className="absolute left-9 bottom-8 h-16 w-8 rounded-full bg-white" />
                      <div className="absolute right-9 bottom-8 h-16 w-8 rounded-full bg-white" />
                      <div className="absolute right-4 top-24 h-24 w-12 rounded-full border-[8px] border-white border-l-transparent border-b-transparent" />
                    </div>
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  <FeaturePill text="12 题轻松完成" />
                  <FeaturePill text="16 种小猫人格" />
                  <FeaturePill text="自动保存进度" />
                  <FeaturePill text="适合截图发朋友圈" />
                </div>

                <Link
                  href="/quiz"
                  className="inline-flex rounded-full px-1 text-sm font-semibold text-caramel underline decoration-dotted underline-offset-4"
                >
                  也可以直接进入测试页
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

function FeaturePill({ text }: { text: string }) {
  return (
    <div className="rounded-[1.25rem] bg-[#fff7f2] px-4 py-3 text-sm font-semibold text-ink shadow-sm">
      {text}
    </div>
  );
}
