import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "yellowgram — small software, sharp edges";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const runtime = "nodejs";

export default async function OpenGraphImage() {
  const [sans, mono] = await Promise.all([
    readFile(join(process.cwd(), "src/fonts/IBMPlexSans-Medium.ttf")),
    readFile(join(process.cwd(), "src/fonts/IBMPlexMono-Regular.ttf")),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: "#05070b",
          color: "#e8eaee",
        }}
      >
        <div style={{ display: "flex", height: 6, width: "100%", background: "#a7b6c6" }} />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            justifyContent: "space-between",
            padding: "64px 80px 72px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <svg width="22" height="22" viewBox="1.7 1.7 12.6 12.6" fill="none">
              <path
                d="M8 2.55 13.4 7.1V13.45H9.55V9.25H6.45V13.45H2.6V7.1L8 2.55Z"
                stroke="#e8eaee"
                strokeWidth="1.05"
              />
            </svg>
            <div
              style={{
                display: "flex",
                fontFamily: "IBM Plex Mono",
                fontSize: 22,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "#a7b6c6",
              }}
            >
              yellowgram
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontFamily: "IBM Plex Sans",
              fontSize: 84,
              lineHeight: 1.02,
              letterSpacing: "-0.045em",
              fontWeight: 500,
            }}
          >
            <div style={{ display: "flex" }}>small software,</div>
            <div style={{ display: "flex" }}>sharp edges</div>
          </div>
          <div
            style={{
              display: "flex",
              fontFamily: "IBM Plex Mono",
              fontSize: 22,
              color: "#8d95a1",
            }}
          >
            www.yellowgram.dev
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "IBM Plex Sans", data: sans, weight: 500, style: "normal" },
        { name: "IBM Plex Mono", data: mono, weight: 400, style: "normal" },
      ],
    },
  );
}
