import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const alt = `${siteConfig.name} — ${siteConfig.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "#000000",
          backgroundImage:
            "radial-gradient(circle at 25% 20%, rgba(59,130,246,0.25), transparent 45%), radial-gradient(circle at 80% 70%, rgba(139,92,246,0.25), transparent 45%)",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            color: "#8b8d95",
            fontSize: 26,
            fontFamily: "monospace",
          }}
        >
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: 999,
              background: "linear-gradient(120deg,#3b82f6,#22d3ee)",
            }}
          />
          vishal.yadav
        </div>
        <div
          style={{
            marginTop: 32,
            fontSize: 84,
            fontWeight: 700,
            color: "white",
            lineHeight: 1.05,
            letterSpacing: -2,
            display: "flex",
          }}
        >
          Data Analyst
        </div>
        <div
          style={{
            fontSize: 84,
            fontWeight: 700,
            lineHeight: 1.05,
            letterSpacing: -2,
            backgroundImage: "linear-gradient(120deg,#60a5fa,#a78bfa,#67e8f9)",
            backgroundClip: "text",
            color: "transparent",
            display: "flex",
          }}
        >
          Data Science Enthusiast
        </div>
        <div style={{ marginTop: 36, fontSize: 30, color: "#aaaab2", maxWidth: 900, display: "flex" }}>
          {siteConfig.description}
        </div>
      </div>
    ),
    { ...size }
  );
}
