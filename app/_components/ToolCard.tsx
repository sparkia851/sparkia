import type { Tool, ToolCategory, Level } from '../_lib/tool-catalog'

const RANK: Record<number, { badge: string; bar: string; label: string }> = {
  1: { badge: 'bg-amber-400 text-white',  bar: 'border-t-4 border-amber-400',  label: '1位' },
  2: { badge: 'bg-slate-400 text-white',  bar: 'border-t-4 border-slate-400',  label: '2位' },
  3: { badge: 'bg-orange-700 text-white', bar: 'border-t-4 border-orange-700', label: '3位' },
}

const LEVEL: Record<Level, { label: string; cls: string }> = {
  beginner:     { label: '初心者向け',   cls: 'text-emerald-700 bg-emerald-50 border-emerald-200' },
  intermediate: { label: '中級者向け',   cls: 'text-blue-700 bg-blue-50 border-blue-200' },
  advanced:     { label: 'プロ・業務',   cls: 'text-violet-700 bg-violet-50 border-violet-200' },
}

const CATEGORY_ICON: Record<ToolCategory, string> = {
  '電動ドライバー':     '🔧',
  'ドリルドライバー':   '🔩',
  'インパクトドライバー': '⚡',
  '丸ノコ':           '🪚',
  'ジグソー':          '🔪',
  'サンダー':          '🟫',
  'グラインダー':      '⚙️',
  'マルチツール':      '🛠️',
}

function Stars({ score }: { score: number }) {
  const n = Math.round(score)
  return (
    <span className="text-amber-400 text-sm tracking-tight" aria-label={`${score}点`}>
      {'★'.repeat(n)}{'☆'.repeat(5 - n)}
    </span>
  )
}

export function ToolCard({ tool, rank, aiReason }: { tool: Tool; rank: number; aiReason?: string }) {
  const r = RANK[rank] ?? { badge: 'bg-blue-600 text-white', bar: 'border-t-4 border-blue-600', label: `${rank}位` }
  const lv = LEVEL[tool.level]

  return (
    <article className={`bg-white rounded-xl border border-gray-200 ${r.bar} shadow-sm overflow-hidden`}>
      <div className="flex">

        {/* 左カラム：カテゴリアイコン + 順位バッジ */}
        <div className="relative shrink-0 w-32 sm:w-40 self-stretch min-h-[160px] bg-gray-50 flex items-center justify-center">
          <span className="text-5xl select-none">{CATEGORY_ICON[tool.category]}</span>
          <div className={`absolute top-2 left-2 px-2 py-0.5 rounded shadow text-xs font-black ${r.badge}`}>
            {r.label}
          </div>
        </div>

        {/* 右カラム */}
        <div className="flex-1 min-w-0 px-4 py-3 space-y-2.5">

          {/* 名前 + レベル */}
          <div className="flex flex-wrap items-start justify-between gap-1.5">
            <h2 className="text-sm font-bold text-gray-900 leading-tight">{tool.name}</h2>
            <span className={`text-[10px] font-medium px-1.5 py-0.5 rounded border whitespace-nowrap ${lv.cls}`}>
              {lv.label}
            </span>
          </div>

          {/* 評価 + 価格 */}
          <div className="flex items-center gap-2">
            <Stars score={tool.score} />
            <span className="text-sm font-bold text-gray-700">{tool.score.toFixed(1)}</span>
            <span className="text-xs text-gray-400 ml-auto">{tool.price}</span>
          </div>

          {/* タグ：カテゴリ・電源 */}
          <div className="flex flex-wrap gap-1">
            <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded border bg-sky-50 text-sky-800 border-sky-200">
              {tool.category}
            </span>
            <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded border bg-gray-50 text-gray-600 border-gray-200">
              {tool.powerSource}
            </span>
            <span className="text-[10px] px-1.5 py-0.5 rounded border border-gray-200 text-gray-500 bg-gray-50">
              {tool.voltageOrWatt}
            </span>
          </div>

          {/* スペックグリッド */}
          <div className="grid grid-cols-3 gap-1 bg-gray-50 rounded px-2 py-1.5 text-center">
            {[
              ['Brand',  tool.brand],
              ['電源',   tool.powerSource],
              ['出力',   tool.voltageOrWatt],
            ].map(([label, val]) => (
              <div key={label} className="flex flex-col">
                <span className="text-[9px] text-gray-400 uppercase tracking-wide">{label}</span>
                <span className="text-[11px] font-semibold text-gray-700 truncate">{val}</span>
              </div>
            ))}
          </div>

          {/* 特徴 3件 */}
          <ul className="space-y-1">
            {tool.points.map((p, i) => (
              <li key={i} className="flex gap-1.5 text-xs text-gray-700 leading-snug">
                <span className="shrink-0 text-blue-500 mt-0.5">•</span>
                {p}
              </li>
            ))}
          </ul>

          {/* 総評 */}
          <div className="flex items-stretch gap-2">
            <div className="flex-1 border-l-4 border-blue-500 bg-blue-50 px-2.5 py-1.5 text-xs font-medium text-gray-800 leading-snug rounded-r">
              {aiReason ? (
                <span>
                  <span className="inline-block mr-1.5 text-[9px] font-bold px-1 py-0.5 rounded bg-blue-600 text-white align-middle">AI</span>
                  {aiReason}
                </span>
              ) : tool.verdict}
            </div>
          </div>

          {/* Amazonリンク */}
          <a
            href={`https://www.amazon.co.jp/s?k=${encodeURIComponent(tool.amazonQuery)}&tag=sparkia-22`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 w-full mt-1 py-1.5 rounded text-xs font-semibold bg-amber-400 hover:bg-amber-500 text-gray-900 transition-colors"
          >
            Amazonで価格を見る
          </a>

        </div>
      </div>
    </article>
  )
}
