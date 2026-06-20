import Image from 'next/image'
import type { EWProduct, Level } from '../_lib/recommend-ew'

const RANK_COLORS: Record<number, string> = {
  1: '#f97316',
  2: '#64748b',
  3: '#92400e',
}

const LEVEL: Record<Level, { label: string; color: string; bg: string }> = {
  beginner:     { label: '初心者向け', color: '#16a34a', bg: '#f0fdf4' },
  intermediate: { label: '中級者向け', color: '#2563eb', bg: '#eff6ff' },
  advanced:     { label: '上級者向け', color: '#7c3aed', bg: '#f5f3ff' },
}

const CATEGORY_STYLE = {
  マイコン: { color: '#f97316', bg: '#fff7ed', border: '#fed7aa' },
  センサー: { color: '#16a34a', bg: '#f0fdf4', border: '#bbf7d0' },
}

function ProductImage({ imageUrl, name }: { imageUrl: string; name: string }) {
  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', background: '#f8f7f5' }}>
      <Image
        src={imageUrl}
        alt={name}
        fill
        style={{ objectFit: 'cover' }}
        sizes="(max-width: 640px) 100vw, 200px"
        onError={e => {
          const t = e.currentTarget
          t.style.display = 'none'
          const p = t.parentElement
          if (p) p.style.background = '#f0ede8'
        }}
      />
    </div>
  )
}

export function EWRankingCard({
  product,
  rank,
  aiReason,
}: {
  product: EWProduct
  rank: number
  aiReason?: string
}) {
  const rankColor = RANK_COLORS[rank] ?? '#94a3b8'
  const lv = LEVEL[product.level]
  const catStyle = CATEGORY_STYLE[product.category]
  const verdict = aiReason ?? product.verdict

  return (
    <article style={{
      background: '#ffffff',
      border: '1px solid #e5e7eb',
      borderRadius: 12,
      overflow: 'hidden',
      boxShadow: rank === 1
        ? '0 0 0 2px #fed7aa, 0 4px 24px rgba(249,115,22,0.08)'
        : '0 1px 4px rgba(0,0,0,0.06)',
    }}>
      {/* rank accent line */}
      <div style={{ height: 3, background: rankColor, opacity: rank === 1 ? 1 : 0.5 }} />

      <div className="flex flex-col sm:flex-row">

        {/* mobile image */}
        <div className="sm:hidden relative" style={{ aspectRatio: '16/9' }}>
          <ProductImage imageUrl={product.imageUrl} name={product.name} />
          <div style={{
            position: 'absolute', top: 10, left: 12,
            fontSize: 11, fontWeight: 800, letterSpacing: '0.1em',
            color: rankColor, fontFamily: 'ui-monospace, monospace',
            textShadow: '0 1px 3px rgba(255,255,255,0.8)',
          }}>
            {String(rank).padStart(2, '0')}
          </div>
        </div>

        {/* desktop image */}
        <div className="hidden sm:block relative shrink-0" style={{ width: 180, minHeight: 160, alignSelf: 'stretch' }}>
          <ProductImage imageUrl={product.imageUrl} name={product.name} />
          <div style={{
            position: 'absolute', top: 10, left: 12,
            fontSize: 11, fontWeight: 800, letterSpacing: '0.1em',
            color: rankColor, fontFamily: 'ui-monospace, monospace',
            textShadow: '0 1px 3px rgba(255,255,255,0.8)',
          }}>
            {String(rank).padStart(2, '0')}
          </div>
        </div>

        {/* info */}
        <div style={{ flex: 1, minWidth: 0, padding: '16px 18px', display: 'flex', flexDirection: 'column', gap: 10 }}>

          {/* badges row */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, alignItems: 'center' }}>
            <span style={{
              fontSize: 10, fontWeight: 700, letterSpacing: '0.04em',
              color: catStyle.color, background: catStyle.bg,
              border: `1px solid ${catStyle.border}`,
              padding: '2px 9px', borderRadius: 4,
            }}>
              {product.category}
            </span>
            <span style={{
              fontSize: 10, fontWeight: 600,
              color: lv.color, background: lv.bg,
              padding: '2px 9px', borderRadius: 4,
            }}>
              {lv.label}
            </span>
          </div>

          {/* name */}
          <h2 style={{ margin: 0, fontSize: 15, fontWeight: 700, color: '#111827', lineHeight: 1.35 }}>
            {product.name}
          </h2>

          {/* score bar + price */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <span style={{
              fontSize: 20, fontWeight: 800, color: '#111827',
              letterSpacing: '-0.03em', lineHeight: 1,
              fontVariantNumeric: 'tabular-nums',
            }}>
              {product.score.toFixed(1)}
            </span>
            <div style={{ flex: 1, height: 3, background: '#f3f4f6', borderRadius: 99 }}>
              <div style={{
                width: `${(product.score / 5) * 100}%`,
                height: '100%', background: rankColor, borderRadius: 99,
                opacity: rank === 1 ? 1 : 0.7,
              }} />
            </div>
            <span style={{ fontSize: 13, fontWeight: 700, color: '#374151' }}>{product.price}</span>
          </div>

          {/* verdict */}
          <p style={{ margin: 0, fontSize: 13, color: '#4b5563', lineHeight: 1.7 }}>
            {verdict}
          </p>

          {/* interface / connectivity chips */}
          {(product.interface?.length || product.connectivity?.length) ? (
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5 }}>
              {product.interface?.map(i => (
                <span key={i} style={{
                  fontSize: 10, fontWeight: 600,
                  color: '#16a34a', background: '#f0fdf4',
                  border: '1px solid #bbf7d0',
                  padding: '2px 8px', borderRadius: 4,
                }}>
                  {i}
                </span>
              ))}
              {product.connectivity?.map(c => (
                <span key={c} style={{
                  fontSize: 10, fontWeight: 600,
                  color: '#2563eb', background: '#eff6ff',
                  border: '1px solid #bfdbfe',
                  padding: '2px 8px', borderRadius: 4,
                }}>
                  {c}
                </span>
              ))}
            </div>
          ) : null}

          {/* CTA */}
          <div style={{ display: 'flex', gap: 8, marginTop: 2 }}>
            <a
              href={product.shopUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                flex: 1, textAlign: 'center',
                fontSize: 12, fontWeight: 700,
                color: '#ffffff',
                background: '#f97316',
                borderRadius: 8, padding: '9px 16px',
                textDecoration: 'none',
                transition: 'background 0.15s',
              }}
            >
              ショップで購入 →
            </a>
          </div>

        </div>
      </div>
    </article>
  )
}
