// src/app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css"; // Correct relative import path

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Arief Novanda Z - Software Developer Portfolio",
  description: "Arief Novanda Z's professional portfolio showcasing software development experience, skills, and projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className={`${geistSans.variable} ${geistMono.variable} antialiased bg-neutral-900 text-neutral-300 font-mono`}>
          {children}
        </div>
      </body>
    </html>
  );
}