import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Ben Whomsley Portfolio',
  description:
    'Showcase of my design and software engineering projects & and insight into my experience and personal life.',
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
    </html>
  )
}
