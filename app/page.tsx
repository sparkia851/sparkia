import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Sparkia — 電子工作・IoTのためのAIツール集',
  description: 'マイコンボード選定・電子部品検索など、電子工作・IoT開発を助けるAIツールを提供するプラットフォームです。',
}

const SERVICES = [
  {
    href: '/board-finder',
    label: 'Board Finder',
    description: '要件を入力するだけで最適なマイコンボードをAIが選定。Arduino・Pico・ESP32など25種対応。',
    badge: '公開中',
    badgeColor: 'bg-green-100 text-green-700',
  },
]

export default function HomePage() {
  return (
    <main className="pcb-bg min-h-screen">
      <div className="max-w-3xl mx-auto px-4 py-16">

        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-3">Sparkia</h1>
          <p className="text-gray-500 text-sm">電子工作・IoT開発を助けるAIツール集</p>
        </div>

        <div className="grid gap-4">
          {SERVICES.map(s => (
            <Link
              key={s.href}
              href={s.href}
              className="block bg-white border border-gray-200 rounded-xl px-6 py-5 shadow-sm hover:border-blue-400 hover:shadow-md transition-all"
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="font-bold text-gray-900">{s.label}</span>
                <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${s.badgeColor}`}>
                  {s.badge}
                </span>
              </div>
              <p className="text-xs text-gray-500 leading-relaxed">{s.description}</p>
            </Link>
          ))}
        </div>

      </div>
    </main>
  )
}
