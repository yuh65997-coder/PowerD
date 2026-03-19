import { Question } from "@/types/quiz";

export const questions: Question[] = [
  {
    id: 1,
    dimension: "EI",
    prompt: "周末突然空下来，你更像哪只猫？",
    options: [
      { key: "A", text: "缩进角落自己回血", letter: "I" },
      { key: "B", text: "立刻约人出门撒欢", letter: "E" },
    ],
  },
  {
    id: 2,
    dimension: "SN",
    prompt: "看到一个纸箱，你会先做什么？",
    options: [
      { key: "A", text: "研究尺寸和落脚点", letter: "S" },
      { key: "B", text: "幻想它是宇宙飞船", letter: "N" },
    ],
  },
  {
    id: 3,
    dimension: "TF",
    prompt: "朋友深夜发来一串省略号，你第一反应是？",
    options: [
      { key: "A", text: "先分析发生了什么", letter: "T" },
      { key: "B", text: "先抱抱再慢慢聊", letter: "F" },
    ],
  },
  {
    id: 4,
    dimension: "JP",
    prompt: "旅行前一晚，你的行李像哪种猫窝？",
    options: [
      { key: "A", text: "清单排好整整齐齐", letter: "J" },
      { key: "B", text: "临出门再一把塞满", letter: "P" },
    ],
  },
  {
    id: 5,
    dimension: "EI",
    prompt: "聚会进行到一半，你的电量通常会？",
    options: [
      { key: "A", text: "越聊越兴奋发光", letter: "E" },
      { key: "B", text: "开始想念安静猫窝", letter: "I" },
    ],
  },
  {
    id: 6,
    dimension: "SN",
    prompt: "接到新任务时，你更依赖哪种猫脑回路？",
    options: [
      { key: "A", text: "先看规则和现成方法", letter: "S" },
      { key: "B", text: "先想有没有新玩法", letter: "N" },
    ],
  },
  {
    id: 7,
    dimension: "TF",
    prompt: "和人意见不同时，你更像？",
    options: [
      { key: "A", text: "摆事实讲逻辑喵", letter: "T" },
      { key: "B", text: "先顾及气氛和心情", letter: "F" },
    ],
  },
  {
    id: 8,
    dimension: "JP",
    prompt: "一天突然被空出来，你会怎么过？",
    options: [
      { key: "A", text: "按计划补完待办", letter: "J" },
      { key: "B", text: "跟灵感走到哪算哪", letter: "P" },
    ],
  },
  {
    id: 9,
    dimension: "EI",
    prompt: "到了新环境，你通常是哪种小猫？",
    options: [
      { key: "A", text: "先观察熟了再出动", letter: "I" },
      { key: "B", text: "主动到处打招呼", letter: "E" },
    ],
  },
  {
    id: 10,
    dimension: "SN",
    prompt: "别人讲故事时，你最容易被什么抓住？",
    options: [
      { key: "A", text: "细节真实不真实", letter: "S" },
      { key: "B", text: "背后还有什么隐喻", letter: "N" },
    ],
  },
  {
    id: 11,
    dimension: "TF",
    prompt: "做决定时，你更相信哪根猫胡须？",
    options: [
      { key: "A", text: "哪边更合理有效", letter: "T" },
      { key: "B", text: "哪边更让人舒服", letter: "F" },
    ],
  },
  {
    id: 12,
    dimension: "JP",
    prompt: "截止日期快到了，你会进入哪种状态？",
    options: [
      { key: "A", text: "按节奏稳稳收尾", letter: "J" },
      { key: "B", text: "最后冲刺灵感爆棚", letter: "P" },
    ],
  },
];
