import { ResultProfile } from "@/types/quiz";

interface CatBadgeProps {
  profile: ResultProfile;
}

export function CatBadge({ profile }: CatBadgeProps) {
  return (
    <div
      className="fur-card cat-ears relative overflow-hidden rounded-[2rem] px-6 py-7 shadow-card"
      style={{ backgroundColor: profile.palette.background, color: profile.palette.text }}
    >
      <div
        className="absolute inset-0 opacity-55"
        style={{
          backgroundImage:
            "radial-gradient(circle at 22% 26%, rgba(255,255,255,0.85) 0 15%, transparent 16%), radial-gradient(circle at 78% 18%, rgba(255,255,255,0.65) 0 10%, transparent 11%), radial-gradient(circle at 72% 70%, rgba(255,255,255,0.5) 0 12%, transparent 13%)",
        }}
      />
      <div className="relative z-10 flex min-h-[220px] flex-col justify-between">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.28em] opacity-70">{profile.type}</p>
            <h3 className="mt-2 text-2xl font-black">{profile.catName}</h3>
            <p className="mt-2 inline-flex rounded-full bg-white/65 px-3 py-1 text-sm font-semibold">
              {profile.shortTag}
            </p>
          </div>
          <div className="relative h-24 w-24 animate-bob">
            <div
              className="absolute left-2 top-5 h-16 w-20 rounded-[45%] shadow-sm"
              style={{ backgroundColor: profile.palette.accent }}
            />
            <div
              className="absolute left-4 top-1 h-8 w-8 rotate-[-28deg] rounded-[8px_20px_8px_20px]"
              style={{ backgroundColor: profile.palette.accent }}
            />
            <div
              className="absolute right-2 top-1 h-8 w-8 rotate-[28deg] rounded-[20px_8px_20px_8px]"
              style={{ backgroundColor: profile.palette.accent }}
            />
            <div className="absolute left-7 top-10 h-2.5 w-2.5 rounded-full bg-white/90" />
            <div className="absolute right-7 top-10 h-2.5 w-2.5 rounded-full bg-white/90" />
            <div className="absolute left-10 top-[3.55rem] h-2.5 w-4 rounded-full bg-white/90" />
            <div className="absolute left-2 top-16 h-10 w-4 rounded-full bg-white/60" />
          </div>
        </div>
        <div className="space-y-3">
          <p className="text-sm leading-6">{profile.oneLiner}</p>
          <div className="flex flex-wrap gap-2">
            {profile.keywords.map((keyword) => (
              <span
                key={keyword}
                className="rounded-full border border-white/60 bg-white/55 px-3 py-1 text-xs font-semibold"
              >
                #{keyword}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
