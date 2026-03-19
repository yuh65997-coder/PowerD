import type { Metadata } from "next";

import { HomePageClient } from "@/components/HomePageClient";

export const metadata: Metadata = {
  title: "小猫 MBTI 测试器",
  description: "轻松可爱的 12 题小猫人格测试，测测你是哪种猫系 MBTI。",
  openGraph: {
    title: "小猫 MBTI 测试器",
    description: "测测你是哪一类小猫型人格，适合截图分享。",
  },
};

export default function HomePage() {
  return <HomePageClient />;
}
