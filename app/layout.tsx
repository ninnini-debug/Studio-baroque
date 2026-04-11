import type { Metadata } from 'next'
import { Cormorant_Garamond, Allura, Pinyon_Script, Cinzel } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { GalleryFrame } from '@/components/gallery-frame'
import { ScrollToTop } from '@/components/scroll-to-top'
import { StickyNav } from '@/components/sticky-nav'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
});

const allura = Allura({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-calligraphy",
});

const pinyon = Pinyon_Script({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-logo",
})

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-display",
})

export const metadata: Metadata = {
  title: 'Studio Baroque | Nail Artistry by Nina',
  description: 'Bespoke nail artistry in West London. Where classical elegance meets modern beauty. Acrylics, gel, and custom nail art by Nina.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${cormorant.variable} ${allura.variable} ${pinyon.variable} ${cinzel.variable} font-sans antialiased bg-[#050808]`}>
        <StickyNav />
        <GalleryFrame />
        <ScrollToTop />
        <div className="main-content">
          {children}
        </div>
        <Analytics />
      </body>
    </html>
  )
}
