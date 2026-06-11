import type { Metadata } from 'next'
import { SearchBox } from '../_components/SearchBox'

export const metadata: Metadata = {
  title: 'Tool Finder — 電動工具AI選定ツール',
  description: '要件を入力するだけで最適な電動工具をAIが選定。マキタ・ボッシュ・HiKOKIなど20種から即絞り込み。',
  alternates: { canonical: 'https://sparkia.jp/tool-finder' },
}

const QUERY_EXAMPLES = [
  { label: 'DIY入門',         q: 'DIY初心者、棚を作りたい' },
  { label: 'ネジ締め',        q: '木材にネジを締めたい、コードレス' },
  { label: '穴あけ',          q: '壁に穴を開けたい、初めて' },
  { label: '木材カット',      q: '木材をまっすぐ切りたい' },
  { label: '研磨・仕上げ',    q: '木材を研磨して塗装したい' },
  { label: 'プロ・現場',      q: '現場で毎日使えるインパクト' },
]

export default function ToolFinderPage() {
  return (
    <main>
      <section className="bg-gray-950 text-white relative">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "url('/pcb-pattern-dark.svg')",
            backgroundSize: '240px 240px',
          }}
        />
        <div className="relative max-w-5xl mx-auto px-4 py-12 md:py-16">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-widest uppercase text-blue-400 mb-4">
              Tool Finder
            </p>
            <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight mb-3">
              「要件を入力」するだけで<br />
              <span className="text-blue-400">最適な電動工具</span>を選べる
            </h1>
            <p className="text-gray-400 text-sm mb-8">
              初心者向け・プロ向け・用途別に、マキタ・ボッシュ・HiKOKIなどからAIがランキング提案。
            </p>
            <SearchBox searchPath="/tool-finder/search" />
          </div>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 py-10">
        <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-4">よく使われる検索</p>
        <div className="flex flex-wrap gap-2">
          {QUERY_EXAMPLES.map(ex => (
            <a
              key={ex.q}
              href={`/tool-finder/search?q=${encodeURIComponent(ex.q)}`}
              className="px-4 py-2 rounded-full border border-gray-200 bg-white text-sm text-gray-700 hover:border-blue-400 hover:text-blue-700 hover:bg-blue-50 transition-colors"
            >
              {ex.label}
            </a>
          ))}
        </div>
      </section>
    </main>
  )
}
