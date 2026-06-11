import type { ArduinoBoard, Connectivity, Level } from '../_lib/recommend'
import { BoardPhoto } from './BoardPhoto'

const RANK: Record<number, { badge: string; bar: string; label: string }> = {
  1: { badge: 'bg-amber-400 text-white',   bar: 'border-t-4 border-amber-400',  label: '1位' },
  2: { badge: 'bg-slate-400 text-white',   bar: 'border-t-4 border-slate-400',  label: '2位' },
  3: { badge: 'bg-orange-700 text-white',  bar: 'border-t-4 border-orange-700', label: '3位' },
}

const CONN_STYLE: Record<Connectivity, string> = {
  WiFi:      'bg-sky-100 text-sky-800 border-sky-200',
  BLE:       'bg-violet-100 text-violet-800 border-violet-200',
  LoRa:      'bg-emerald-100 text-emerald-800 border-emerald-200',
  'NB-IoT':  'bg-orange-100 text-orange-800 border-orange-200',
  'USB-HID': 'bg-rose-100 text-rose-800 border-rose-200',
  'LTE-M':   'bg-purple-100 text-purple-800 border-purple-200',
  Zigbee:    'bg-yellow-100 text-yellow-800 border-yellow-200',
}

const LEVEL: Record<Level, { label: string; cls: string }> = {
  beginner:     { label: '初心者向け',   cls: 'text-emerald-700 bg-emerald-50 border-emerald-200' },
  intermediate: { label: '中級者向け',   cls: 'text-blue-700 bg-blue-50 border-blue-200' },
  advanced:     { label: '上級者・業務', cls: 'text-violet-700 bg-violet-50 border-violet-200' },
}

function Stars({ score }: { score: number }) {
  const n = Math.round(score)
  return (
    <span className="text-amber-400 text-sm tracking-tight" aria-label={`${score}点`}>
      {'★'.repeat(n)}{'☆'.repeat(5 - n)}
    </span>
  )
}

export function RankingCard({ mc, rank, aiReason }: { mc: ArduinoBoard; rank: number; aiReason?: string }) {
  const r = RANK[rank] ?? { badge: 'bg-blue-600 text-white', bar: 'border-t-4 border-blue-600', label: `${rank}位` }
  const lv = LEVEL[mc.level]

  return (
    <article className={`bg-white rounded-xl border border-gray-200 ${r.bar} shadow-sm overflow-hidden`}>
      <div className="flex">

        {/* 左カラム：写真 + 順位バッジ */}
        <div className="relative shrink-0 w-32 sm:w-40 self-stretch min-h-[160px]">
          <BoardPhoto imageUrl={mc.imageUrl} name={mc.name} formFactor={mc.formFactor} fillParent />
          <div className={`absolute top-2 left-2 px-2 py-0.5 rounded shadow text-xs font-black ${r.badge}`}>
            {r.label}
          </div>
        </div>

        {/* 右カラム：情報 */}
        <div className="flex-1 min-w-0 px-4 py-3 space-y-2.5">

          {/* 名前 + レベル */}
          <div className="flex flex-wrap items-start justify-between gap-1.5">
            <h2 className="text-sm font-bold text-gray-900 leading-tight">{mc.name}</h2>
            <span className={`text-[10px] font-medium px-1.5 py-0.5 rounded border whitespace-nowrap ${lv.cls}`}>
              {lv.label}
            </span>
          </div>

          {/* 評価 + 価格 */}
          <div className="flex items-center gap-2">
            <Stars score={mc.score} />
            <span className="text-sm font-bold text-gray-700">{mc.score.toFixed(1)}</span>
            <span className="text-xs text-gray-400 ml-auto">{mc.price}</span>
          </div>

          {/* 接続・フォームファクタ */}
          <div className="flex flex-wrap gap-1">
            {mc.connectivity.map(c => (
              <span key={c} className={`text-[10px] font-semibold px-1.5 py-0.5 rounded border ${CONN_STYLE[c]}`}>
                {c}
              </span>
            ))}
            <span className="text-[10px] px-1.5 py-0.5 rounded border border-gray-200 text-gray-500 bg-gray-50">
              {mc.formFactor}
            </span>
          </div>

          {/* スペック */}
          <div className="grid grid-cols-5 gap-1 bg-gray-50 rounded px-2 py-1.5 text-center">
            {[
              ['MCU',   mc.mcu.split(/[\s+]/)[0]],
              ['Clock', `${mc.clockMhz}MHz`],
              ['RAM',   mc.ramKb   >= 1024 ? `${mc.ramKb   / 1024}MB` : `${mc.ramKb}KB`],
              ['Flash', mc.flashKb >= 1024 ? `${mc.flashKb / 1024}MB` : `${mc.flashKb}KB`],
              ['Pins',  `${mc.digitalPins}/${mc.analogPins}`],
            ].map(([label, val]) => (
              <div key={label} className="flex flex-col">
                <span className="text-[9px] text-gray-400 uppercase tracking-wide">{label}</span>
                <span className="text-[11px] font-semibold text-gray-700 truncate">{val}</span>
              </div>
            ))}
          </div>

          {/* 特徴 3件 */}
          <ul className="space-y-1">
            {mc.points.map((p, i) => (
              <li key={i} className="flex gap-1.5 text-xs text-gray-700 leading-snug">
                <span className="shrink-0 text-blue-500 mt-0.5">•</span>
                {p}
              </li>
            ))}
          </ul>

          {/* 総評 + 公式リンク */}
          <div className="flex items-stretch gap-2">
            <div className="flex-1 border-l-4 border-blue-500 bg-blue-50 px-2.5 py-1.5 text-xs font-medium text-gray-800 leading-snug rounded-r">
              {aiReason ? (
                <span>
                  <span className="inline-block mr-1.5 text-[9px] font-bold px-1 py-0.5 rounded bg-blue-600 text-white align-middle">AI</span>
                  {aiReason}
                </span>
              ) : mc.verdict}
            </div>
            <a
              href={mc.officialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 flex items-center text-xs font-semibold text-blue-700 border border-blue-200 rounded px-3 hover:bg-blue-50 transition-colors"
            >
              公式→
            </a>
          </div>

          {/* Amazonリンク */}
          <a
            href={`https://www.amazon.co.jp/s?k=${encodeURIComponent(mc.name)}&tag=sparkia-22`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 w-full mt-1 py-1.5 rounded text-xs font-semibold bg-amber-400 hover:bg-amber-500 text-gray-900 transition-colors"
          >
            <span>Amazonで価格を見る</span>
          </a>

        </div>
      </div>
    </article>
  )
}
