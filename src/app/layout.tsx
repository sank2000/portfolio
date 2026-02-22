import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Personal portfolio website',
  manifest: '/ico/site.webmanifest',
  icons: {
    icon: [
      { url: '/ico/favicon.ico' },
      { url: '/ico/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/ico/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: [{ url: '/ico/apple-touch-icon.png', sizes: '180x180' }],
    shortcut: ['/ico/favicon.ico'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  )
}
