import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "yellowgram — pin the surface, ship with receipts",
  description:
    "Small, sharp tools for global agent/MCP teams. SurfacePin OSS now; planned setup and kits next.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
