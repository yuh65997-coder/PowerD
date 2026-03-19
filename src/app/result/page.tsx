import type { Metadata } from "next";
import { Suspense } from "react";

import { ResultPageClient } from "@/components/ResultPageClient";

export const metadata: Metadata = {
  title: "测试结果 | 小猫 MBTI 测试器",
  description: "查看你的小猫人格类型、性格特点、宣言与最配猫型人格。",
  openGraph: {
    title: "测试结果 | 小猫 MBTI 测试器",
    description: "你的猫系人格结果卡片已经出炉，快来分享吧。",
  },
};

export default function ResultPage() {
  return (
    <Suspense fallback={null}>
      <ResultPageClient />
    </Suspense>
  );
}
