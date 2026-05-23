import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'TrendAlert — Real-Time Niche Trend Alerts for Creators',
  description: 'Monitor Google Trends, social media, and competitor content. Get instant alerts when your niche goes viral so you can publish first.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="bbe49658-f022-48b0-9689-cf64c3557f17"></script>
      </head>
      <body>{children}</body>
    </html>
  )
}
