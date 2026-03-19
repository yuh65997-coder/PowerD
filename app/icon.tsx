import { ImageResponse } from "next/og";

export const size = {
  width: 512,
  height: 512,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background:
            "radial-gradient(circle at top left, #ffe7b3 0%, transparent 32%), linear-gradient(180deg, #fffaf2 0%, #ffe9df 100%)",
        }}
      >
        <div
          style={{
            position: "relative",
            display: "flex",
            width: 320,
            height: 320,
            borderRadius: 96,
            background: "#ffffff",
            boxShadow: "0 24px 60px rgba(160, 116, 90, 0.18)",
          }}
        >
          <div
            style={{
              position: "absolute",
              left: 58,
              top: 8,
              width: 84,
              height: 84,
              transform: "rotate(-24deg)",
              borderRadius: "20px 48px 18px 42px",
              background: "#ffffff",
            }}
          />
          <div
            style={{
              position: "absolute",
              right: 58,
              top: 8,
              width: 84,
              height: 84,
              transform: "rotate(24deg)",
              borderRadius: "48px 20px 42px 18px",
              background: "#ffffff",
            }}
          />
          <div
            style={{
              position: "absolute",
              left: 38,
              right: 38,
              top: 52,
              bottom: 28,
              borderRadius: "44%",
              background: "linear-gradient(180deg, #fff 0%, #fff7f0 100%)",
            }}
          />
          <div
            style={{
              position: "absolute",
              left: 108,
              top: 138,
              width: 18,
              height: 18,
              borderRadius: "50%",
              background: "#573f35",
            }}
          />
          <div
            style={{
              position: "absolute",
              right: 108,
              top: 138,
              width: 18,
              height: 18,
              borderRadius: "50%",
              background: "#573f35",
            }}
          />
          <div
            style={{
              position: "absolute",
              left: 140,
              top: 174,
              width: 40,
              height: 22,
              borderRadius: 999,
              background: "#ffb7bf",
            }}
          />
          <div
            style={{
              position: "absolute",
              left: 64,
              top: 182,
              width: 70,
              height: 2,
              background: "#ccb1a6",
            }}
          />
          <div
            style={{
              position: "absolute",
              right: 64,
              top: 182,
              width: 70,
              height: 2,
              background: "#ccb1a6",
            }}
          />
        </div>
      </div>
    ),
    size,
  );
}
