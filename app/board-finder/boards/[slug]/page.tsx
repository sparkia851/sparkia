import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import { catalog } from '../../../_lib/recommend'
import type { Level } from '../../../_lib/recommend'
import { BoardPhoto } from '../../../_components/BoardPhoto'

export async function generateStaticParams() {
  return catalog.map(b => ({ slug: b.id }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const board = catalog.find(b => b.id === slug)
  if (!board) return { title: 'ボードが見つかりません | Board Finder' }
  return {
    title: `${board.name} | Board Finder`,
    description: board.verdict,
  }
}

const LEVEL: Record<Level, { label: string; color: string }> = {
  beginner:     { label: '初心者向け', color: '#10b981' },
  intermediate: { label: '中級者向け', color: '#3b82f6' },
  advanced:     { label: 'プロ向け',   color: '#8b5cf6' },
}

export default async function BoardDetailPage({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>
  searchParams: Promise<{ q?: string }>
}) {
  const { slug } = await params
  const { q } = await searchParams
  const backHref = q ? `/board-finder/search?q=${encodeURIComponent(q)}` : '/board-finder/search'
  const board = catalog.find(b => b.id === slug)
  if (!board) notFound()

  const lv = LEVEL[board.level]
  const ramStr  = board.ramKb  >= 1024 ? `${board.ramKb  / 1024} MB` : `${board.ramKb}  KB`
  const flashStr = board.flashKb >= 1024 ? `${board.flashKb / 1024} MB` : `${board.flashKb} KB`

  const SPECS = [
    { label: 'MCU',          value: board.mcu },
    { label: 'クロック',     value: `${board.clockMhz} MHz` },
    { label: 'RAM',          value: ramStr },
    { label: 'Flash',        value: flashStr },
    { label: 'デジタルI/O', value: `${board.digitalPins} 本` },
    { label: 'アナログI/O', value: `${board.analogPins} 本` },
    { label: 'フォーム',    value: board.formFactor },
    { label: '価格目安',    value: board.price },
  ]

  return (
    <main style={{ minHeight: '100vh', background: '#060913', color: '#f1f5f9' }}>

      {/* ── hero ── */}
      <div style={{ position: 'relative', width: '100%', height: 'clamp(240px, 40vw, 420px)', overflow: 'hidden', background: '#04060e' }}>
        <BoardPhoto imageUrl={board.imageUrl} name={board.name} formFactor={board.formFactor} fillParent />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(6,9,19,0.38)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 30%, #060913 100%)' }} />

        {/* breadcrumb */}
        <div style={{ position: 'absolute', top: 18, left: 18 }}>
          <Link href={backHref} style={{
            fontSize: 11, fontWeight: 600, letterSpacing: '0.06em',
            color: 'rgba(148,163,184,0.8)', textDecoration: 'none',
            background: 'rgba(0,0,0,0.45)', backdropFilter: 'blur(6px)',
            padding: '6px 14px', borderRadius: 20,
            border: '1px solid rgba(255,255,255,0.08)',
          }}>
            ← 検索結果
          </Link>
        </div>
      </div>

      {/* ── content ── */}
      <div
        className="max-w-2xl mx-auto px-4"
        style={{ paddingBottom: 80, marginTop: -56, position: 'relative', zIndex: 10 }}
      >

        {/* header */}
        <div style={{ marginBottom: 24 }}>
          <span style={{
            fontSize: 10, fontWeight: 700, letterSpacing: '0.08em',
            color: lv.color, background: `${lv.color}18`,
            border: `1px solid ${lv.color}30`,
            padding: '3px 12px', borderRadius: 20,
            display: 'inline-block', marginBottom: 10,
          }}>
            {lv.label}
          </span>
          <h1 style={{
            margin: 0,
            fontSize: 'clamp(22px, 5vw, 34px)',
            fontWeight: 900, letterSpacing: '-0.03em', lineHeight: 1.2,
            color: '#f8fafc',
          }}>
            {board.name}
          </h1>

          {/* score bar */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginTop: 16 }}>
            <span style={{
              fontSize: 38, fontWeight: 900, letterSpacing: '-0.04em',
              color: '#f8fafc', lineHeight: 1, fontVariantNumeric: 'tabular-nums',
            }}>
              {board.score.toFixed(1)}
            </span>
            <div style={{ flex: 1, height: 3, background: 'rgba(255,255,255,0.07)', borderRadius: 99 }}>
              <div style={{
                width: `${(board.score / 5) * 100}%`, height: '100%',
                background: 'linear-gradient(to right, #3b82f6, #818cf8)', borderRadius: 99,
              }} />
            </div>
            <span style={{ fontSize: 14, fontWeight: 700, color: '#475569' }}>{board.price}</span>
          </div>
        </div>

        {/* verdict */}
        <div style={{
          padding: '16px 20px', marginBottom: 28,
          background: '#0d1425', borderRadius: 10,
          border: '1px solid rgba(255,255,255,0.06)',
        }}>
          <p style={{ margin: 0, fontSize: 13, color: '#94a3b8', lineHeight: 1.85 }}>
            {board.verdict}
          </p>
        </div>

        {/* specs grid */}
        <div style={{ marginBottom: 28 }}>
          <p style={{
            fontSize: 9, fontWeight: 700, letterSpacing: '0.14em',
            textTransform: 'uppercase', color: '#1e3a5f', marginBottom: 10,
          }}>
            スペック
          </p>
          <div style={{
            display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1,
            background: 'rgba(255,255,255,0.05)',
            borderRadius: 10, overflow: 'hidden',
            border: '1px solid rgba(255,255,255,0.05)',
          }}>
            {SPECS.map(({ label, value }) => (
              <div key={label} style={{ background: '#0d1425', padding: '13px 16px' }}>
                <p style={{
                  margin: 0, fontSize: 9, fontWeight: 700,
                  color: '#1e3a5f', letterSpacing: '0.1em',
                  textTransform: 'uppercase', marginBottom: 5,
                }}>
                  {label}
                </p>
                <p style={{ margin: 0, fontSize: 13, fontWeight: 600, color: '#cbd5e1' }}>
                  {value}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* connectivity */}
        {board.connectivity.length > 0 && (
          <div style={{ marginBottom: 28 }}>
            <p style={{
              fontSize: 9, fontWeight: 700, letterSpacing: '0.14em',
              textTransform: 'uppercase', color: '#1e3a5f', marginBottom: 10,
            }}>
              接続性
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
              {board.connectivity.map(c => (
                <span key={c} style={{
                  fontSize: 12, fontWeight: 700,
                  color: '#60a5fa', background: 'rgba(96,165,250,0.08)',
                  border: '1px solid rgba(96,165,250,0.2)',
                  padding: '6px 16px', borderRadius: 6,
                }}>
                  {c}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* key points */}
        <div style={{ marginBottom: 36 }}>
          <p style={{
            fontSize: 9, fontWeight: 700, letterSpacing: '0.14em',
            textTransform: 'uppercase', color: '#1e3a5f', marginBottom: 10,
          }}>
            注目ポイント
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {board.points.map((pt, i) => (
              <div key={i} style={{
                display: 'flex', gap: 14, alignItems: 'flex-start',
                padding: '13px 18px', background: '#0d1425',
                borderRadius: 8, border: '1px solid rgba(255,255,255,0.05)',
              }}>
                <span style={{
                  fontSize: 11, fontWeight: 800, color: '#3b82f6',
                  fontFamily: 'ui-monospace, monospace', minWidth: 22, paddingTop: 1,
                  letterSpacing: '0.04em',
                }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p style={{ margin: 0, fontSize: 13, color: '#94a3b8', lineHeight: 1.75 }}>
                  {pt}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA buttons */}
        <div style={{ display: 'flex', gap: 10 }}>
          <a
            href={board.officialUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              flex: 1, textAlign: 'center', fontSize: 13, fontWeight: 600,
              color: '#64748b', border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: 8, padding: '15px 20px', textDecoration: 'none',
              background: 'rgba(255,255,255,0.02)',
            }}
          >
            公式サイト →
          </a>
          <a
            href={`https://www.amazon.co.jp/s?k=${encodeURIComponent(board.name)}&tag=sparkia-22`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              flex: 1, textAlign: 'center', fontSize: 13, fontWeight: 700,
              color: '#111827',
              background: 'linear-gradient(135deg, #f59e0b 0%, #fbbf24 100%)',
              borderRadius: 8, padding: '15px 20px', textDecoration: 'none',
            }}
          >
            Amazon で購入
          </a>
        </div>

      </div>
    </main>
  )
}
