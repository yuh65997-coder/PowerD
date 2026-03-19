import type { Metadata } from "next";

import { QuizPageClient } from "@/components/QuizPageClient";

export const metadata: Metadata = {
  title: "开始测试 | 小猫 MBTI 测试器",
  description: "回答 12 道轻松有趣的小猫题目，生成你的专属小猫人格结果。",
  openGraph: {
    title: "开始测试 | 小猫 MBTI 测试器",
    description: "边答边自动保存进度，随时回来继续测。",
  },
};

export default function QuizPage() {
  return <QuizPageClient />;
}
