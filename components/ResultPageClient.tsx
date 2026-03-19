"use client";

import { toPng } from "html-to-image";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";

import { buildResultCopy, getRandomResultType, getResultProfile } from "@/lib/mbti";
import { getResultSnapshot, resetAllStorage, setResultSnapshot } from "@/lib/storage";
import { ResultSnapshot } from "@/types/quiz";
import { ResultCard } from "./ResultCard";

export function ResultPageClient() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const cardRef = useRef<HTMLDivElement>(null);

  const [snapshot, setSnapshot] = useState<ResultSnapshot | null>(null);
  const [copied, setCopied] = useState(false);
  const [linkCopied, setLinkCopied] = useState(false);
  const [exporting, setExporting] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const storedSnapshot = getResultSnapshot();
    const queryType = searchParams.get("type");

    if (storedSnapshot) {
      setSnapshot(storedSnapshot);
      setHydrated(true);
      return;
    }

    // Shared links can rebuild a lightweight result view from the type query string.
    if (queryType) {
      const profileFromQuery = getResultProfile(queryType);
      if (profileFromQuery) {
        const rebuiltSnapshot: ResultSnapshot = {
          type: queryType,
          elapsedMs: 0,
          completedAt: Date.now(),
          isRandom: true,
        };
        setResultSnapshot(rebuiltSnapshot);
        setSnapshot(rebuiltSnapshot);
        setHydrated(true);
        return;
      }
    }

    if (!storedSnapshot && !queryType) {
      router.replace("/");
      return;
    }

    router.replace("/");
  }, [router, searchParams]);

  const profile = useMemo(() => {
    if (!snapshot) return null;
    return getResultProfile(snapshot.type);
  }, [snapshot]);

  useEffect(() => {
    if (!snapshot || !profile) return;

    const queryType = searchParams.get("type");
    if (queryType !== snapshot.type) {
      const url = new URL(window.location.href);
      url.searchParams.set("type", snapshot.type);
      if (snapshot.isRandom) {
        url.searchParams.set("mode", "random");
      }
      window.history.replaceState({}, "", url.toString());
    }
  }, [profile, searchParams, snapshot]);

  const handleRestart = () => {
    resetAllStorage();
    router.push("/");
  };

  const handleCopy = async () => {
    if (!profile || !snapshot) return;

    await navigator.clipboard.writeText(buildResultCopy(profile, snapshot.elapsedMs));
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  const handleShare = async () => {
    if (!profile || !snapshot) return;

    const shareData = {
      title: `我的小猫人格是 ${profile.type} · ${profile.catName}`,
      text: buildResultCopy(profile, snapshot.elapsedMs),
      url: `${window.location.origin}/result?type=${profile.type}`,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
        return;
      } catch {
        // Ignore cancellation and fall back to copy link.
      }
    }

    await navigator.clipboard.writeText(shareData.url);
    setLinkCopied(true);
    window.setTimeout(() => setLinkCopied(false), 1800);
  };

  const handleExport = async () => {
    if (!cardRef.current || !profile) return;

    try {
      setExporting(true);
      const dataUrl = await toPng(cardRef.current, {
        cacheBust: true,
        pixelRatio: 2,
      });
      const link = document.createElement("a");
      link.download = `cat-mbti-${profile.type.toLowerCase()}.png`;
      link.href = dataUrl;
      link.click();
    } finally {
      setExporting(false);
    }
  };

  const handleRefreshRandom = () => {
    const nextType = getRandomResultType();
    const nextSnapshot = {
      type: nextType,
      elapsedMs: 0,
      completedAt: Date.now(),
      isRandom: true,
    } satisfies ResultSnapshot;

    setResultSnapshot(nextSnapshot);
    setSnapshot(nextSnapshot);
  };

  if (!hydrated || !snapshot || !profile) {
    return (
      <main className="page-shell flex min-h-screen items-center justify-center px-4">
        <div className="rounded-[2rem] bg-white/85 px-6 py-5 text-sm font-semibold text-ink shadow-card">
          正在整理你的小猫人格卡片...
        </div>
      </main>
    );
  }

  return (
    <main className="page-shell min-h-screen px-4 py-6 sm:px-6 sm:py-8">
      <div className="mx-auto max-w-5xl space-y-6">
        <section className="animate-fade-up rounded-[2rem] bg-white/80 p-5 shadow-card backdrop-blur">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-caramel">Result</p>
              <h1 className="mt-2 text-2xl font-black text-ink sm:text-4xl">
                你是 {profile.type} · {profile.catName}
              </h1>
              <p className="mt-2 text-sm leading-6 text-ink/70">
                {snapshot.isRandom ? "这是随机抽到的一种小猫人格预览。" : "你的测试已经完成，快看看这只小猫是不是你。"}
              </p>
            </div>
            <div className="rounded-[1.25rem] bg-[#fff5ec] px-4 py-3 text-sm font-semibold text-caramel">
              {profile.shortTag}
            </div>
          </div>
        </section>

        <ResultCard ref={cardRef} profile={profile} elapsedMs={snapshot.elapsedMs} />

        <section className="animate-fade-up rounded-[2rem] bg-white/85 p-5 shadow-card backdrop-blur [animation-delay:80ms]">
          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={handleRestart}
              className="rounded-full bg-[#ff9b7f] px-5 py-3 text-sm font-black text-white transition hover:bg-[#ff8767] active:scale-[0.98]"
            >
              重新测试
            </button>
            <button
              type="button"
              onClick={handleCopy}
              className="rounded-full border border-[#f0d7c8] bg-white px-5 py-3 text-sm font-bold text-ink transition hover:bg-[#fff9f4] active:scale-[0.98]"
            >
              {copied ? "结果文案已复制" : "复制结果文案"}
            </button>
            <button
              type="button"
              onClick={handleExport}
              disabled={exporting}
              className={[
                "rounded-full border border-[#f0d7c8] bg-white px-5 py-3 text-sm font-bold text-ink transition hover:bg-[#fff9f4] active:scale-[0.98]",
                exporting ? "cursor-not-allowed opacity-60" : "",
              ].join(" ")}
            >
              {exporting ? "正在保存图片..." : "保存结果卡片"}
            </button>
            <button
              type="button"
              onClick={handleShare}
              className="rounded-full border border-[#f0d7c8] bg-white px-5 py-3 text-sm font-bold text-ink transition hover:bg-[#fff9f4] active:scale-[0.98]"
            >
              {linkCopied ? "链接已复制" : "分享"}
            </button>
            {snapshot.isRandom ? (
              <button
                type="button"
                onClick={handleRefreshRandom}
                className="rounded-full border border-[#d8e6ff] bg-[#f3f8ff] px-5 py-3 text-sm font-bold text-[#4f7ad4] transition hover:bg-[#eaf2ff] active:scale-[0.98]"
              >
                再看看这只猫
              </button>
            ) : null}
          </div>
        </section>
      </div>
    </main>
  );
}
