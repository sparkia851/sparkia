import type { Metadata } from 'next'
import Script from 'next/script'
import { Header } from './_components/Header'
import './globals.css'

const GA_ID = 'G-NMD0Z6C6E6'

const siteUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : 'http://localhost:3000'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  verification: { google: 'w3LGT5qvdOZkD3p_W1w8HRaxO_cBZNmhxR9iuuVtwv4' },
  title: {
    default: 'Board Finder — マイコンボード選びで迷わない | Sparkia',
    template: '%s | Sparkia',
  },
  description:
    '「Wi-Fi対応にしたい」「入門向けで安いもの」など用途を入れるだけで最適なマイコンをランキング提案。Arduino・Raspberry Pi Pico・ESP32・M5Stack など全25種に対応。無料で使えます。',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className="bg-gray-50 text-gray-900 antialiased min-h-screen flex flex-col">
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
        <Script id="ga-init" strategy="afterInteractive">{`
          window.dataLayer=window.dataLayer||[];
          function gtag(){dataLayer.push(arguments);}
          gtag('js',new Date());
          gtag('config','${GA_ID}');
        `}</Script>
        <Header />
        <div className="flex-1">{children}</div>
        <footer className="border-t border-gray-200 bg-white mt-auto">
          <div className="max-w-5xl mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-400">
            <span>© 2026 Sparkia. All rights reserved.</span>
            <span>電気系エンジニアのための選択支援サービス</span>
          </div>
        </footer>
      </body>
    </html>
  )
}
