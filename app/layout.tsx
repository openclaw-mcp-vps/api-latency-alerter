import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'API Latency Alerter — Slack alerts when your API response times spike',
  description: 'Monitor API endpoints from multiple global locations, detect latency spikes above custom thresholds, and get instant Slack/Discord alerts with performance graphs.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="111ef8b4-bc46-4c6b-a5a6-8ed1899db351"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
