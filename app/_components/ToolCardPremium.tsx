import type { Tool } from '../_lib/tool-catalog'

const BRAND_GRADIENT: Record<string, string> = {
  'Makita':         'linear-gradient(160deg, #004f73 0%, #0096b8 100%)',
  'Bosch':          'linear-gradient(160deg, #003f80 0%, #0070c0 100%)',
  'HiKOKI':         'linear-gradient(160deg, #1a1a2e 0%, #b22222 100%)',
  'Black+Decker':   'linear-gradient(160deg, #8b4500 0%, #e07b00 100%)',
  'RYOBI':          'linear-gradient(160deg, #1a4a1a 0%, #2e8b2e 100%)',
}

const RANK_CONFIG: Record<number, { label: string; color: string; glow: string }> = {
  1: { label: '1位', color: '#f59e0b', glow: 'rgba(245,158,11,0.3)' },
  2: { label: '2位', color: '#94a3b8', glow: 'rgba(148,163,184,0.2)' },
  3: { label: '3位', color: '#b45309', glow: 'rgba(180,83,9,0.2)' },
}

const LEVEL_LABEL: Record<string, string> = {
  beginner: '初心者向け',
  intermediate: '中級者向け',
  advanced: 'プロ・業務',
}

const LEVEL_COLOR: Record<string, string> = {
  beginner: '#059669',
  intermediate: '#2563eb',
  advanced: '#7c3aed',
}

function MatchBar({ rank }: { rank: number }) {
  const score = Math.max(55, 97 - (rank - 1) * 9)
  const color = rank === 1 ? '#f59e0b' : rank === 2 ? '#94a3b8' : rank === 3 ? '#b45309' : '#60a5fa'
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
      <div style={{ fontSize: 10, color: '#9ca3af', whiteSpace: 'nowrap', fontWeight: 600, letterSpacing: '0.05em' }}>
        マッチ度
      </div>
      <div style={{ flex: 1, height: 4, background: '#f1f5f9', borderRadius: 99, overflow: 'hidden' }}>
        <div style={{ width: `${score}%`, height: '100%', background: color, borderRadius: 99 }} />
      </div>
      <div style={{ fontSize: 11, fontWeight: 700, color, minWidth: 36, textAlign: 'right' }}>
        {score}%
      </div>
    </div>
  )
}

function Stars({ score }: { score: number }) {
  const n = Math.round(score)
  return (
    <span style={{ color: '#f59e0b', fontSize: 13, letterSpacing: '-1px' }}>
      {'★'.repeat(n)}{'☆'.repeat(5 - n)}
    </span>
  )
}

export function ToolCardPremium({
  tool,
  rank,
  aiReason,
}: {
  tool: Tool
  rank: number
  aiReason?: string
}) {
  const rc = RANK_CONFIG[rank] ?? { label: `${rank}位`, color: '#60a5fa', glow: 'rgba(96,165,250,0.2)' }
  const gradient = BRAND_GRADIENT[tool.brand] ?? 'linear-gradient(160deg, #1e293b 0%, #334155 100%)'

  return (
    <article
      style={{
        background: '#fff',
        borderRadius: 16,
        overflow: 'hidden',
        boxShadow: `0 4px 24px rgba(0,0,0,0.07), 0 0 0 1px rgba(0,0,0,0.06)`,
        display: 'flex',
        position: 'relative',
      }}
    >
      {/* 左：ブランドパネル */}
      <div
        style={{
          width: 160,
          minHeight: 220,
          flexShrink: 0,
          background: gradient,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '28px 16px',
          position: 'relative',
          gap: 12,
        }}
      >
        {/* グリッドオーバーレイ */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
            backgroundSize: '20px 20px',
          }}
        />

        {/* 順位バッジ */}
        <div
          style={{
            position: 'absolute',
            top: 12,
            left: 12,
            background: rc.color,
            color: '#fff',
            fontSize: 11,
            fontWeight: 800,
            padding: '3px 8px',
            borderRadius: 6,
            boxShadow: `0 2px 8px ${rc.glow}`,
            letterSpacing: '0.04em',
          }}
        >
          {rc.label}
        </div>

        {/* ブランド名 */}
        <div
          style={{
            position: 'relative',
            color: 'rgba(255,255,255,0.9)',
            fontSize: 18,
            fontWeight: 800,
            letterSpacing: '0.06em',
            textAlign: 'center',
            textShadow: '0 2px 8px rgba(0,0,0,0.3)',
          }}
        >
          {tool.brand}
        </div>

        {/* カテゴリ */}
        <div
          style={{
            position: 'relative',
            background: 'rgba(255,255,255,0.12)',
            border: '1px solid rgba(255,255,255,0.2)',
            color: 'rgba(255,255,255,0.85)',
            fontSize: 10,
            fontWeight: 600,
            padding: '4px 10px',
            borderRadius: 99,
            textAlign: 'center',
            backdropFilter: 'blur(4px)',
          }}
        >
          {tool.category}
        </div>

        {/* 電源・電圧 */}
        <div
          style={{
            position: 'relative',
            color: 'rgba(255,255,255,0.6)',
            fontSize: 11,
            textAlign: 'center',
            fontWeight: 500,
          }}
        >
          {tool.powerSource} · {tool.voltageOrWatt}
        </div>
      </div>

      {/* 右：情報エリア */}
      <div style={{ flex: 1, minWidth: 0, padding: '18px 20px', display: 'flex', flexDirection: 'column', gap: 10 }}>

        {/* ヘッダー行 */}
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 8 }}>
          <div>
            <h2 style={{ fontSize: 15, fontWeight: 700, color: '#111827', lineHeight: 1.3, margin: 0 }}>
              {tool.name}
            </h2>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 4 }}>
              <Stars score={tool.score} />
              <span style={{ fontSize: 12, fontWeight: 700, color: '#374151' }}>{tool.score.toFixed(1)}</span>
            </div>
          </div>
          <div style={{ textAlign: 'right', flexShrink: 0 }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: '#111827' }}>{tool.price}</div>
            <div
              style={{
                marginTop: 4,
                fontSize: 10,
                fontWeight: 600,
                color: LEVEL_COLOR[tool.level],
                background: `${LEVEL_COLOR[tool.level]}15`,
                padding: '2px 8px',
                borderRadius: 99,
                display: 'inline-block',
              }}
            >
              {LEVEL_LABEL[tool.level]}
            </div>
          </div>
        </div>

        {/* マッチ度バー */}
        <MatchBar rank={rank} />

        {/* 特徴リスト */}
        <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 5 }}>
          {tool.points.map((p, i) => (
            <li key={i} style={{ display: 'flex', gap: 8, fontSize: 12, color: '#374151', lineHeight: 1.5 }}>
              <span style={{ color: '#3b82f6', flexShrink: 0, marginTop: 1 }}>›</span>
              {p}
            </li>
          ))}
        </ul>

        {/* AI総評 */}
        <div
          style={{
            background: 'linear-gradient(135deg, #eff6ff 0%, #f0f9ff 100%)',
            border: '1px solid #bfdbfe',
            borderRadius: 10,
            padding: '10px 12px',
            display: 'flex',
            gap: 8,
            alignItems: 'flex-start',
          }}
        >
          <div
            style={{
              background: '#2563eb',
              color: '#fff',
              fontSize: 9,
              fontWeight: 800,
              padding: '2px 6px',
              borderRadius: 4,
              flexShrink: 0,
              marginTop: 1,
              letterSpacing: '0.06em',
            }}
          >
            AI
          </div>
          <p style={{ margin: 0, fontSize: 12, color: '#1e3a5f', lineHeight: 1.6, fontWeight: 500 }}>
            {aiReason ?? tool.verdict}
          </p>
        </div>

        {/* Amazonボタン */}
        <a
          href={`https://www.amazon.co.jp/s?k=${encodeURIComponent(tool.amazonQuery)}&tag=sparkia-22`}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 6,
            padding: '10px 16px',
            background: 'linear-gradient(135deg, #f59e0b 0%, #fbbf24 100%)',
            borderRadius: 8,
            textDecoration: 'none',
            color: '#1a1a1a',
            fontSize: 12,
            fontWeight: 700,
            boxShadow: '0 2px 8px rgba(245,158,11,0.3)',
          }}
        >
          Amazonで価格を見る →
        </a>

      </div>
    </article>
  )
}
