import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Course Hub",
  description: "Interactive course launchpad — Blockchain, Generative AI, Context Engineering",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
