import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aniruddha Adak | Portfolio",
  description: "Ultra-modern animated portfolio showcasing projects and skills",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
