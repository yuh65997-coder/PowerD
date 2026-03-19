import { questions } from "@/data/questions";
import { resultProfiles } from "@/data/results";
import { AnswerValue, MBTILetter, ResultProfile } from "@/types/quiz";

type ScoreMap = Record<MBTILetter, number>;

const tieBreakers: Record<"EI" | "SN" | "TF" | "JP", MBTILetter> = {
  EI: "I",
  SN: "N",
  TF: "F",
  JP: "P",
};

export const calculateScores = (answers: Record<number, AnswerValue>): ScoreMap => {
  const scores: ScoreMap = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };

  // Each answer directly increments one MBTI letter, which keeps the rules easy to edit.
  questions.forEach((question) => {
    const answer = answers[question.id];
    const selectedOption = question.options.find((option) => option.key === answer);

    if (selectedOption) {
      scores[selectedOption.letter] += 1;
    }
  });

  return scores;
};

const resolveDimension = (scores: ScoreMap, left: MBTILetter, right: MBTILetter, dimension: "EI" | "SN" | "TF" | "JP") => {
  if (scores[left] === scores[right]) {
    return tieBreakers[dimension];
  }

  return scores[left] > scores[right] ? left : right;
};

export const calculateMBTIType = (answers: Record<number, AnswerValue>) => {
  const scores = calculateScores(answers);

  // Tie-breaking follows the product requirement defaults: I / N / F / P.
  return [
    resolveDimension(scores, "E", "I", "EI"),
    resolveDimension(scores, "S", "N", "SN"),
    resolveDimension(scores, "T", "F", "TF"),
    resolveDimension(scores, "J", "P", "JP"),
  ].join("");
};

export const getResultProfile = (type: string): ResultProfile | null => {
  return resultProfiles[type] ?? null;
};

export const getRandomResultType = (): string => {
  const types = Object.keys(resultProfiles);
  return types[Math.floor(Math.random() * types.length)];
};

export const formatDuration = (elapsedMs: number) => {
  const totalSeconds = Math.max(0, Math.round(elapsedMs / 1000));
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  return `${minutes}分${seconds.toString().padStart(2, "0")}秒`;
};

export const buildResultCopy = (profile: ResultProfile, elapsedMs: number) => {
  return [
    `我的小猫 MBTI 类型是 ${profile.type} · ${profile.catName}`,
    "",
    `一句话总结：${profile.oneLiner}`,
    `性格特点：${profile.traits}`,
    `社交方式：${profile.socialStyle}`,
    `恋爱 / 友情：${profile.relationshipStyle}`,
    `工作学习状态：${profile.workStyle}`,
    `情绪触发点：${profile.triggers}`,
    `小猫宣言：${profile.declaration}`,
    `关键词：${profile.keywords.join(" / ")}`,
    `测试用时：${formatDuration(elapsedMs)}`,
    "",
    "来测测你是哪一类小猫型人格吧。",
  ].join("\n");
};
