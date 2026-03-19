import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://cat-mbti-quiz.local"),
  title: "小猫 MBTI 测试器 | Cat MBTI Quiz",
  description: "12 道轻松有趣的小猫人格题目，测测你是哪一类小猫型人格，支持复制结果、分享和保存卡片。",
  applicationName: "小猫 MBTI 测试器",
  keywords: ["小猫 MBTI", "MBTI 测试", "猫咪人格测试", "Cat MBTI Quiz", "娱乐测试"],
  openGraph: {
    title: "小猫 MBTI 测试器",
    description: "测测你是哪一类小猫型人格，找到你的专属猫系宣言。",
    type: "website",
    locale: "zh_CN",
    siteName: "小猫 MBTI 测试器",
  },
  twitter: {
    card: "summary_large_image",
    title: "小猫 MBTI 测试器",
    description: "测测你是哪一类小猫型人格，找到你的专属猫系宣言。",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body
        className="text-ink"
        style={{
          fontFamily:
            '"Nunito", "Hiragino Sans GB", "PingFang SC", "Microsoft YaHei", sans-serif',
        }}
      >
        {children}
      </body>
    </html>
  );
}
