import type { Metadata } from "next"
import { EB_Garamond, Inter } from "next/font/google"

import "./globals.css"

const inter = Inter({ subsets: ["latin"] })
const eb_garamond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-heading",
})

export const metadata: Metadata = {
  title: "Crack CSIT",
  description:
    "Crack CSIT is a platform offering resources to help students excel in CSIT semester exams.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${eb_garamond.variable} flex min-h-screen flex-col text-zinc-800 antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
