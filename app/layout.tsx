import type { Metadata } from 'next'
import { Header } from './_components/Header'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Sparkia — 電気系セレクトツール',
    template: '%s | Sparkia',
  },
  description:
    '要件や用途を入力するだけで最適なマイコンをおすすめ度つきランキングでご提案。Sparkiaは電気系エンジニア・学生のための選択支援サービスです。',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className="bg-gray-50 text-gray-900 antialiased min-h-screen flex flex-col">
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
