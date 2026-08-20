import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { GoogleAnalytics } from '@next/third-parties/google'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

const title = 'Ben Whomsley — Senior JavaScript Engineer'
const description =
  'Senior JavaScript Engineer with 10+ years in industry. Portfolio of professional and personal front-end projects, experience, and contact details.'

export const metadata: Metadata = {
  metadataBase: new URL('https://whomsley.dev'),
  title,
  description,
  openGraph: {
    title,
    description,
    type: 'website',
    // TODO: replace with a dedicated 1200x630 social share image
    images: ['/images/projects/studentbeans.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/images/projects/studentbeans.png'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <head>
        <meta
          name='theme-color'
          content='#0a0a0a'
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased w-full`}
      >
        {children}
      </body>
      <GoogleAnalytics gaId="G-GHLPXS0R0S" />
    </html>
  )
}
