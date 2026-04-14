import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OpenClaw — Your Personal AI Assistant",
  description: "Deploy your own AI assistant in 5 minutes. Connect to WhatsApp, Telegram, Discord. Powered by Claude, GPT, Gemini, or local models.",
  keywords: ["OpenClaw", "AI assistant", "deploy AI", "WhatsApp AI", "Telegram bot", "AI automation", "personal AI"],
  openGraph: {
    title: "OpenClaw — Your Personal AI Assistant",
    description: "Deploy your own AI assistant in 5 minutes. Free & open source.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}