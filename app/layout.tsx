import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Allura, Pinyon_Script, Cinzel } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { GalleryFrame } from '@/components/gallery-frame'
import { ScrollToTop } from '@/components/scroll-to-top'
import { SiteFooter } from '@/components/site-footer'
import { StickyNav } from '@/components/sticky-nav'
import { SITE_DESCRIPTION, SITE_NAME, SITE_TITLE, SITE_URL } from '@/lib/site'
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

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    'nail art',
    'nail studio',
    'West London nails',
    'acrylic nails',
    'gel nails',
    'bespoke nail artistry',
    'Studio Baroque',
  ],
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: '/',
    siteName: SITE_NAME,
    locale: 'en_GB',
    type: 'website',
    images: [
      {
        url: '/nail%20art%203.jpg',
        width: 1200,
        height: 1600,
        alt: 'Studio Baroque bespoke nail art',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ['/nail%20art%203.jpg'],
  },
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
      <body className={`${cormorant.variable} ${allura.variable} ${pinyon.variable} ${cinzel.variable} font-sans antialiased`}>
        <StickyNav />
        <GalleryFrame />
        <ScrollToTop />
        <div className="main-content">
          {children}
          <SiteFooter />
        </div>
        <Analytics />
      </body>
    </html>
  )
}
