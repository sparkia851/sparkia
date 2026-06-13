import type { Metadata } from 'next'
import Script from 'next/script'
import { Space_Grotesk, Noto_Sans_JP } from 'next/font/google'
import { Header } from './_components/Header'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
})

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  variable: '--font-jp',
  display: 'swap',
})

const GA_ID = 'G-NMD0Z6C6E6'

export const metadata: Metadata = {
  metadataBase: new URL('https://sparkia.jp'),
  verification: { google: ['w3LGT5qvdOZkD3p_W1w8HRaxO_cBZNmhxR9iuuVtwv4', '7kM56nxLqzaP0AGAurulqJPIk3pMVm0kjtdOGfzpaqI'] },
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
      <body
        className={`${spaceGrotesk.variable} ${notoSansJP.variable} antialiased min-h-screen flex flex-col`}
        style={{ background: '#05070f', color: '#f1f5f9', fontFamily: 'var(--font-jp), sans-serif' }}
      >
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
        <Script id="ga-init" strategy="afterInteractive">{`
          window.dataLayer=window.dataLayer||[];
          function gtag(){dataLayer.push(arguments);}
          gtag('js',new Date());
          gtag('config','${GA_ID}');
        `}</Script>
        <Header />
        <div className="flex-1">{children}</div>
        <footer className="mt-auto" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <div className="max-w-5xl mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs" style={{ color: '#334155' }}>
            <span>© 2026 Sparkia. All rights reserved.</span>
            <span>電気系エンジニアのための選択支援サービス</span>
          </div>
        </footer>
      </body>
    </html>
  )
}
