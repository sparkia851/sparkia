'use client'
import type { ArduinoBoard, Level } from '../_lib/recommend'
import { BoardPhoto } from './BoardPhoto'

const RANK: Record<number, { color: string; label: string; shadow: string }> = {
  1: { color: '#f59e0b', label: '01', shadow: '0 0 0 1px rgba(245,158,11,0.2), 0 8px 32px rgba(0,0,0,0.4)' },
  2: { color: '#6b7280', label: '02', shadow: '0 4px 20px rgba(0,0,0,0.3)' },
  3: { color: '#92400e', label: '03', shadow: '0 4px 20px rgba(0,0,0,0.3)' },
}

const LEVEL: Record<Level, { label: string; color: string }> = {
  beginner:     { label: '初心者', color: '#10b981' },
  intermediate: { label: '中級',  color: '#3b82f6' },
  advanced:     { label: 'プロ',  color: '#8b5cf6' },
}

function RankBadge({ label, color }: { label: string; color: string }) {
  return (
    <div style={{
      position: 'absolute',
      top: 10,
      left: 12,
      color,
      fontSize: 11,
      fontWeight: 800,
      letterSpacing: '0.1em',
      fontFamily: 'ui-monospace, monospace',
      textShadow: '0 1px 4px rgba(0,0,0,0.6)',
    }}>
      {label}
    </div>
  )
}

export function RankingCard({ mc, rank, aiReason, query }: { mc: ArduinoBoard; rank: number; aiReason?: string; query?: string }) {
  const r = RANK[rank] ?? { color: '#3b82f6', label: `0${rank}`, shadow: '0 4px 20px rgba(0,0,0,0.3)' }
  const lv = LEVEL[mc.level]
  const verdict = aiReason ?? mc.verdict

  const specs = [
    mc.mcu.split(/[\s(+]/)[0],
    `${mc.clockMhz}MHz`,
    `RAM ${mc.ramKb >= 1024 ? `${mc.ramKb / 1024}MB` : `${mc.ramKb}KB`}`,
    `Flash ${mc.flashKb >= 1024 ? `${mc.flashKb / 1024}MB` : `${mc.flashKb}KB`}`,
  ]

  return (
    <article style={{
      background: '#0d1425',
      border: '1px solid rgba(255,255,255,0.07)',
      borderRadius: 10,
      overflow: 'hidden',
      boxShadow: r.shadow,
    }}>
      {/* rank accent line */}
      <div style={{ height: 2, background: r.color, opacity: rank === 1 ? 1 : 0.45 }} />

      <div className="flex flex-col sm:flex-row">

        {/* mobile image — full width */}
        <div className="sm:hidden relative" style={{ aspectRatio: '16/9' }}>
          <BoardPhoto imageUrl={mc.imageUrl} name={mc.name} formFactor={mc.formFactor} fillParent />
          <RankBadge label={r.label} color={r.color} />
        </div>

        {/* desktop image — fixed side panel */}
        <div className="hidden sm:block relative shrink-0" style={{ width: 200, minHeight: 180, alignSelf: 'stretch' }}>
          <BoardPhoto imageUrl={mc.imageUrl} name={mc.name} formFactor={mc.formFactor} fillParent />
          <RankBadge label={r.label} color={r.color} />
        </div>

        {/* info */}
        <div style={{ flex: 1, minWidth: 0, padding: '16px 20px', display: 'flex', flexDirection: 'column', gap: 11 }}>

          {/* name + level */}
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 10 }}>
            <h2 style={{ margin: 0, fontSize: 15, fontWeight: 700, color: '#f1f5f9', lineHeight: 1.3 }}>
              {mc.name}
            </h2>
            <span style={{
              fontSize: 10,
              fontWeight: 600,
              color: lv.color,
              background: `${lv.color}18`,
              padding: '2px 8px',
              borderRadius: 4,
              flexShrink: 0,
              letterSpacing: '0.03em',
            }}>
              {lv.label}
            </span>
          </div>

          {/* score + price */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <span style={{ fontSize: 22, fontWeight: 800, color: '#f8fafc', letterSpacing: '-0.03em', lineHeight: 1 }}>
              {mc.score.toFixed(1)}
            </span>
            <div style={{ flex: 1, height: 2, background: 'rgba(255,255,255,0.07)', borderRadius: 99 }}>
              <div style={{ width: `${(mc.score / 5) * 100}%`, height: '100%', background: r.color, borderRadius: 99 }} />
            </div>
            <span style={{ fontSize: 12, color: '#475569', fontWeight: 600 }}>{mc.price}</span>
          </div>

          {/* verdict — no label, just prose */}
          <p style={{ margin: 0, fontSize: 13, color: '#94a3b8', lineHeight: 1.7 }}>
            {verdict}
          </p>

          {/* connectivity */}
          {mc.connectivity.length > 0 && (
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5 }}>
              {mc.connectivity.map(c => (
                <span key={c} style={{
                  fontSize: 10,
                  fontWeight: 600,
                  color: '#60a5fa',
                  background: 'rgba(96,165,250,0.09)',
                  border: '1px solid rgba(96,165,250,0.18)',
                  padding: '2px 8px',
                  borderRadius: 4,
                }}>
                  {c}
                </span>
              ))}
              <span style={{
                fontSize: 10,
                color: '#475569',
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.07)',
                padding: '2px 8px',
                borderRadius: 4,
              }}>
                {mc.formFactor}
              </span>
            </div>
          )}

          {/* specs */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, fontSize: 11, color: '#475569' }}>
            {specs.map((s, i) => <span key={i}>{s}</span>)}
          </div>

          {/* buttons */}
          <div style={{ display: 'flex', gap: 8, marginTop: 2 }}>
            <a
              href={`/board-finder/boards/${mc.id}${query ? `?q=${encodeURIComponent(query)}` : ''}`}
              style={{
                fontSize: 11,
                fontWeight: 600,
                color: '#64748b',
                border: '1px solid rgba(255,255,255,0.09)',
                borderRadius: 6,
                padding: '7px 14px',
                textDecoration: 'none',
                background: 'rgba(255,255,255,0.02)',
              }}
            >
              詳細
            </a>
            <a
              href={mc.officialUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => (window as any).gtag?.('event', 'official_link_click', { item_id: mc.id, item_name: mc.name, rank })}
              style={{
                fontSize: 11,
                fontWeight: 600,
                color: '#64748b',
                border: '1px solid rgba(255,255,255,0.09)',
                borderRadius: 6,
                padding: '7px 14px',
                textDecoration: 'none',
                background: 'rgba(255,255,255,0.02)',
              }}
            >
              公式 →
            </a>
            <a
              href={`https://www.amazon.co.jp/s?k=${encodeURIComponent(mc.name)}&tag=sparkia-22`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => (window as any).gtag?.('event', 'amazon_link_click', { item_id: mc.id, item_name: mc.name, rank })}
              style={{
                flex: 1,
                fontSize: 12,
                fontWeight: 700,
                color: '#111827',
                background: 'linear-gradient(135deg, #f59e0b 0%, #fbbf24 100%)',
                borderRadius: 6,
                padding: '7px 14px',
                textDecoration: 'none',
                textAlign: 'center',
              }}
            >
              Amazon で見る
            </a>
          </div>

        </div>
      </div>
    </article>
  )
}
