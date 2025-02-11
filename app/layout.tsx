import "./globals.css"
import { Inter } from "next/font/google"
import type React from "react"

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter",
})

export const metadata = {
  title: "Visuae - Find the Candidates Your Business Needs",
  description: "Visuae is revolutionizing the way businesses connect with top talent.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link
          rel="icon"
          type="image/png"
          href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo_Fav-ROxN4Yg1bzSVaNoy3NgCxfh9tgJprk.png"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  )
}



import './globals.css'