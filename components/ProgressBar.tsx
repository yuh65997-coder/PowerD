"use client";

interface ProgressBarProps {
  current: number;
  total: number;
}

export function ProgressBar({ current, total }: ProgressBarProps) {
  const progress = total === 0 ? 0 : Math.round((current / total) * 100);

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between text-sm font-semibold text-ink/70">
        <span>{current} / {total}</span>
        <span>{progress}%</span>
      </div>
      <div className="h-3 overflow-hidden rounded-full bg-white/70 shadow-inner">
        <div
          className="h-full rounded-full bg-gradient-to-r from-[#ffb57d] via-[#ff89a6] to-[#8ab9ff] transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
