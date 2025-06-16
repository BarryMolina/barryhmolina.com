import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Barry Molina - Software Engineer & Problem Solver",
  description:
    "Portfolio of Barry Molina, a passionate software engineer specializing in full-stack development, scalable applications, and modern web technologies.",
  keywords: "software engineer, full-stack developer, React, Next.js, TypeScript, portfolio",
  authors: [{ name: "Barry Molina" }],
  openGraph: {
    title: "Barry Molina - Software Engineer",
    description: "Portfolio showcasing projects and technical expertise",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  )
}
