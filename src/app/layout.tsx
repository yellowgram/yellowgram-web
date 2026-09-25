import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "yellowgram — receipts for agent software",
  description:
    "Small, sharp tools for global product and platform teams. SurfacePin OSS now; more on the horizon.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
