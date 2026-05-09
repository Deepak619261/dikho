import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Noto_Sans_Devanagari } from 'next/font/google'
import './globals.css'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
})

const notoSansDevanagari = Noto_Sans_Devanagari({
  variable: '--font-noto-devanagari',
  subsets: ['devanagari'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Dikho — Google pe Dikho. Customers tak Pahuncho.',
  description: 'WhatsApp se apna free business website banao. Google pe dikhna shuru karo.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${notoSansDevanagari.variable} antialiased`}>
        {children}
      </body>
    </html>
  )
}
