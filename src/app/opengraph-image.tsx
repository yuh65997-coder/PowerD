import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background:
            "radial-gradient(circle at top left, rgba(255,231,179,0.95) 0%, transparent 26%), radial-gradient(circle at top right, rgba(255,226,234,0.95) 0%, transparent 24%), linear-gradient(135deg, #fffdf9 0%, #fff2e8 100%)",
          color: "#4e3d35",
          padding: "52px 56px",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "62%",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <div
              style={{
                width: 18,
                height: 18,
                borderRadius: 999,
                background: "#ff9b54",
              }}
            />
            <div style={{ fontSize: 28, fontWeight: 700 }}>Cat MBTI Quiz</div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            <div style={{ display: "flex", flexDirection: "column", fontSize: 76, fontWeight: 900, lineHeight: 1.06 }}>
              <span>Cat MBTI</span>
              <span>Quiz</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", fontSize: 30, lineHeight: 1.5, color: "#70574b" }}>
              <span>12 playful questions.</span>
              <span>Find your cat-type personality.</span>
            </div>
          </div>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            {["16 cat results", "shareable outcome", "saveable card"].map((item) => (
              <div
                key={item}
                style={{
                  padding: "12px 20px",
                  borderRadius: 999,
                  background: "rgba(255,255,255,0.75)",
                  fontSize: 24,
                  fontWeight: 700,
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div
          style={{
            width: 360,
            height: 470,
            borderRadius: 40,
            background: "linear-gradient(180deg, #ffe7be 0%, #ffd8d2 52%, #e2efff 100%)",
            boxShadow: "0 20px 60px rgba(160, 116, 90, 0.18)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              opacity: 0.28,
              backgroundSize: "58px 58px",
              backgroundImage:
                "radial-gradient(circle at 18px 18px, rgba(255,255,255,0.65) 0 7px, transparent 8px), radial-gradient(circle at 6px 8px, rgba(255,255,255,0.42) 0 3px, transparent 4px), radial-gradient(circle at 30px 8px, rgba(255,255,255,0.42) 0 3px, transparent 4px), radial-gradient(circle at 0px 20px, rgba(255,255,255,0.34) 0 3px, transparent 4px), radial-gradient(circle at 36px 20px, rgba(255,255,255,0.34) 0 3px, transparent 4px)",
            }}
          />
          <div
            style={{
              position: "relative",
              width: 230,
              height: 250,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                position: "absolute",
                left: 44,
                top: 10,
                width: 72,
                height: 72,
                transform: "rotate(-24deg)",
                borderRadius: "18px 42px 16px 38px",
                background: "#ffffff",
              }}
            />
            <div
              style={{
                position: "absolute",
                right: 44,
                top: 10,
                width: 72,
                height: 72,
                transform: "rotate(24deg)",
                borderRadius: "42px 18px 38px 16px",
                background: "#ffffff",
              }}
            />
            <div
              style={{
                position: "absolute",
                left: 20,
                right: 20,
                bottom: 0,
                top: 50,
                borderRadius: "44%",
                background: "#ffffff",
              }}
            />
            <div
              style={{
                position: "absolute",
                left: 70,
                top: 116,
                width: 16,
                height: 16,
                borderRadius: "50%",
                background: "#573f35",
              }}
            />
            <div
              style={{
                position: "absolute",
                right: 70,
                top: 116,
                width: 16,
                height: 16,
                borderRadius: "50%",
                background: "#573f35",
              }}
            />
            <div
              style={{
                position: "absolute",
                left: 98,
                top: 148,
                width: 34,
                height: 20,
                borderRadius: 999,
                background: "#ffb7bf",
              }}
            />
          </div>
        </div>
      </div>
    ),
    size,
  );
}
