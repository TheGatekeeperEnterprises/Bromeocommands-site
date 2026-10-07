import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BromeoLIVE Commands",
  description: "Commands, kanaalpunten en bits voor BromeoLIVE."
};

// Bezoekersstatistieken van BromeoMonitor (zonder cookies, geen IP-adressen opgeslagen). De key is openbaar.
const BROMEO_ANALYTICS_KEY = "bma_vdr3ai25og9ufzz7cyd4";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl">
      <head>
        <script defer data-key={BROMEO_ANALYTICS_KEY} src="https://monitor.bromeo.live/api/v1/a/s.js" />
      </head>
      <body className="bg-hero">{children}</body>
    </html>
  );
}
