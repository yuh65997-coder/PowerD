"use client";

import { forwardRef } from "react";

import { buildResultCopy, formatDuration } from "@/lib/mbti";
import { ResultProfile } from "@/types/quiz";
import { CatBadge } from "./CatBadge";

interface ResultCardProps {
  profile: ResultProfile;
  elapsedMs: number;
}

export const ResultCard = forwardRef<HTMLDivElement, ResultCardProps>(function ResultCard(
  { profile, elapsedMs },
  ref,
) {
  const fullCopy = buildResultCopy(profile, elapsedMs);

  return (
    <div
      ref={ref}
      className="fur-card overflow-hidden rounded-[2rem] bg-white p-6 shadow-float sm:p-8"
      style={{
        backgroundImage:
          "radial-gradient(circle at top right, rgba(255, 235, 245, 0.95), transparent 24%), linear-gradient(180deg, #ffffff 0%, #fffaf3 100%)",
      }}
    >
      <div className="space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-caramel">Cat MBTI Quiz</p>
            <h2 className="mt-2 text-3xl font-black text-ink sm:text-4xl">{profile.type}</h2>
          </div>
          <div className="rounded-full bg-cream px-4 py-2 text-sm font-semibold text-caramel">
            测试用时 {formatDuration(elapsedMs)}
          </div>
        </div>

        <CatBadge profile={profile} />

        <div className="grid gap-4 sm:grid-cols-2">
          <InfoBubble title="一句话总结" content={profile.oneLiner} />
          <InfoBubble title="性格特点" content={profile.traits} />
          <InfoBubble title="社交方式" content={profile.socialStyle} />
          <InfoBubble title="恋爱 / 友情" content={profile.relationshipStyle} />
          <InfoBubble title="工作学习状态" content={profile.workStyle} />
          <InfoBubble title="情绪触发点" content={profile.triggers} />
        </div>

        <section
          className="rounded-[1.75rem] px-5 py-5"
          style={{ backgroundColor: profile.palette.secondary }}
        >
          <p className="text-sm font-bold uppercase tracking-[0.24em]" style={{ color: profile.palette.text }}>
            小猫宣言
          </p>
          <p className="mt-3 text-xl font-black leading-8" style={{ color: profile.palette.text }}>
            “{profile.declaration}”
          </p>
        </section>

        <section className="rounded-[1.75rem] bg-[#fff7f2] px-5 py-5 text-sm leading-7 text-ink">
          <p className="font-bold text-caramel">完整人格描述</p>
          <p className="mt-3">{profile.description}</p>
        </section>

        <section className="rounded-[1.75rem] bg-[#f8fbff] px-5 py-5 text-sm leading-7 text-ink">
          <p className="font-bold text-[#6185c9]">和朋友最配的猫型人格</p>
          <p className="mt-2 text-lg font-black">
            {profile.bestMatch} · {profile.bestMatchReason}
          </p>
        </section>

        <section className="rounded-[1.75rem] border border-dashed border-[#f0d6c7] px-5 py-5">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-caramel">分享文案预览</p>
          <pre className="soft-scrollbar mt-3 overflow-x-auto whitespace-pre-wrap text-sm leading-6 text-ink">
            {fullCopy}
          </pre>
        </section>
      </div>
    </div>
  );
});

function InfoBubble({ title, content }: { title: string; content: string }) {
  return (
    <div className="rounded-[1.5rem] bg-[#fffdf9] p-4 shadow-sm">
      <p className="text-sm font-bold text-caramel">{title}</p>
      <p className="mt-2 text-sm leading-6 text-ink">{content}</p>
    </div>
  );
}
