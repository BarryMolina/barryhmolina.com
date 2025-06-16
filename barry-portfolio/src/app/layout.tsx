import type React from "react";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const metadata: Metadata = {
  title: "Barry Molina - Software Engineer & Problem Solver",
  description:
    "Portfolio of Barry Molina, a passionate software engineer specializing in full-stack development, scalable applications, and modern web technologies.",
  keywords:
    "software engineer, full-stack developer, React, Next.js, TypeScript, portfolio",
  authors: [{ name: "Barry Molina" }],
  openGraph: {
    title: "Barry Molina - Software Engineer",
    description: "Portfolio showcasing projects and technical expertise",
    type: "website",
  },
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable} scroll-smooth`}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}
