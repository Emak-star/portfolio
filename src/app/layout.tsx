import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Emaks — Frontend Developer',
  description:
    'Frontend developer building fast, beautiful web apps with React, TypeScript, Tailwind CSS and AI integrations. Available for freelance.',
  openGraph: {
    title: 'Emaks — Frontend Developer',
    description:
      'Frontend developer building fast, beautiful web apps with React, TypeScript, Tailwind and AI integrations.',
    url: 'https://emaks.dev',
    siteName: 'Emaks',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Emaks — Frontend Developer',
    description: 'Frontend developer · React · TypeScript · Tailwind · AI integrations',
  },
  metadataBase: new URL('https://emaks.dev'),
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
