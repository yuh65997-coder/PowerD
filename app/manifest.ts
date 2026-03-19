import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "小猫 MBTI 测试器",
    short_name: "Cat MBTI Quiz",
    description: "12 道轻松有趣的小猫人格题目，测测你是哪一类小猫型人格。",
    start_url: "/",
    display: "standalone",
    background_color: "#fffaf2",
    theme_color: "#ff9b7f",
    icons: [
      {
        src: "/icon",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
