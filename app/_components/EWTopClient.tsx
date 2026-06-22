'use client'

import { useRouter } from 'next/navigation'
import { useState, useRef } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { catalog } from '../_lib/recommend-ew'

const HERO_PHOTO = 'https://images.unsplash.com/photo-1577962144759-8dec6b55c952?fm=jpg&q=85&w=1600&auto=format&fit=crop'

const EXAMPLES = [
  '温度と湿度を測りたい',
  'WiFiでデータを送りたい',
  '人が来たら通知したい',
  '植物の水やりを自動化したい',
  'CO2濃度を監視したい',
  '距離を測ってロボットに使いたい',
]

const MAIKON  = catalog.filter(p => p.category === 'マイコン')
const SENSOR  = catalog.filter(p => p.category === 'センサー')

const AI_ROWS = [
  { label: '用途',     value: '初心者〜上級',      sub: 'Lチカ入門からAIエッジ推論・カメラ映像処理まで幅広い用途に対応' },
  { label: '接続',     value: '8 種',               sub: 'WiFi · BLE · I2C · SPI · 1-Wire · UART · アナログ · デジタル' },
  { label: '価格帯',   value: '¥40〜¥35,500',       sub: 'タッチセンサー40円からRaspberry Pi 5まで。予算に合った提案が可能' },
  { label: 'カテゴリ', value: 'マイコン + センサー', sub: '開発ボード20種・センサー20種、合計40商品からAIが選定' },
  { label: '難易度',   value: '3 段階',              sub: '初心者向け・中級者向け・上級者向けを明示して推薦' },
]

function FadeUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

function ProductStrip({ products }: { products: typeof catalog }) {
  return (
    <div style={{ display: 'flex', gap: 10, overflowX: 'auto', paddingBottom: 4 }}
      className="scrollbar-hide"
    >
      {products.map(p => (
        <div key={p.id} style={{ flexShrink: 0, width: 140 }}>
          <div style={{ position: 'relative', width: 140, height: 100, borderRadius: 6, overflow: 'hidden', background: '#ede8e0' }}>
            <Image src={p.imageUrl} alt={p.name} fill style={{ objectFit: 'cover' }} sizes="140px" />
          </div>
          <p style={{ margin: '7px 0 2px', fontSize: 10, fontWeight: 700, color: '#1c1410', lineHeight: 1.35, letterSpacing: '0.01em' }}>
            {p.name.length > 22 ? p.name.slice(0, 22) + '…' : p.name}
          </p>
          <p style={{ margin: 0, fontSize: 10, color: '#b5a090' }}>{p.price}</p>
        </div>
      ))}
    </div>
  )
}

export function EWTopClient() {
  const router = useRouter()
  const [value, setValue] = useState('')

  function handleSubmit(e: { preventDefault(): void }) {
    e.preventDefault()
    const q = value.trim()
    if (q) router.push(`/electronicwork/search?q=${encodeURIComponent(q)}`)
  }

  function handleExample(ex: string) {
    setValue(ex)
    router.push(`/electronicwork/search?q=${encodeURIComponent(ex)}`)
  }

  return (
    <main style={{ background: '#f5f0e8', color: '#1c1410' }}>

      {/* ══ HERO ══════════════════════════════════════════════ */}
      <section style={{ position: 'relative', height: '88vh', minHeight: 560 }}>

        <Image
          src={HERO_PHOTO}
          alt=""
          fill
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          priority
          sizes="100vw"
        />

        {/* gradient: light top → dark warm bottom */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to bottom, rgba(18,10,4,0.08) 0%, rgba(18,10,4,0.82) 100%)',
        }} />

        {/* content */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0,
          padding: 'clamp(32px, 5vw, 56px) clamp(24px, 7vw, 96px)',
        }}>
          <motion.p
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            style={{ margin: '0 0 18px', fontSize: 10, fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)' }}
          >
            電子工作ステーション&ensp;/&ensp;AI 商品提案
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            style={{ margin: '0 0 14px', fontSize: 'clamp(36px, 5.5vw, 66px)', fontWeight: 900, letterSpacing: '-0.025em', lineHeight: 1.1, color: '#ffffff' }}
          >
            何を作りたいですか？
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            style={{ margin: '0 0 28px', fontSize: 'clamp(13px, 1.4vw, 15px)', color: 'rgba(255,255,255,0.65)', lineHeight: 1.8, letterSpacing: '0.03em' }}
          >
            やりたいことを入力するだけ。ショップの商品からAIが最適な部品を提案します。
          </motion.p>

          {/* search — frosted glass style */}
          <motion.form
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            onSubmit={handleSubmit}
            style={{ display: 'flex', gap: 8, maxWidth: 580, marginBottom: 18 }}
          >
            <input
              type="text"
              value={value}
              onChange={e => setValue(e.target.value)}
              placeholder="例：温度を測りたい、人が来たら知らせたい..."
              style={{
                flex: 1, minWidth: 0,
                border: '1px solid rgba(255,255,255,0.22)',
                borderRadius: 6,
                padding: '14px 18px',
                fontSize: 14,
                color: '#ffffff',
                background: 'rgba(255,255,255,0.12)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                outline: 'none',
                letterSpacing: '0.02em',
              }}
            />
            <button
              type="submit"
              style={{
                flexShrink: 0,
                background: '#ffffff',
                color: '#1c1410',
                fontWeight: 700,
                fontSize: 14,
                letterSpacing: '0.05em',
                border: 'none',
                borderRadius: 6,
                padding: '14px 28px',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
              }}
            >
              提案する
            </button>
          </motion.form>

          {/* example pills on photo */}
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.75 }}
            style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}
          >
            {EXAMPLES.map(ex => (
              <button
                key={ex}
                type="button"
                onClick={() => handleExample(ex)}
                style={{
                  fontSize: 11,
                  color: 'rgba(255,255,255,0.6)',
                  background: 'rgba(255,255,255,0.08)',
                  border: '1px solid rgba(255,255,255,0.18)',
                  borderRadius: 4,
                  padding: '5px 12px',
                  cursor: 'pointer',
                  backdropFilter: 'blur(8px)',
                  WebkitBackdropFilter: 'blur(8px)',
                  letterSpacing: '0.02em',
                  transition: 'background 0.15s, color 0.15s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.18)'
                  e.currentTarget.style.color = 'rgba(255,255,255,0.9)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.08)'
                  e.currentTarget.style.color = 'rgba(255,255,255,0.6)'
                }}
              >
                {ex}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══ CATALOG ═══════════════════════════════════════════ */}
      <section className="ew-section-cream" style={{ padding: 'clamp(60px,8vw,100px) clamp(24px,7vw,96px)' }}>
        <FadeUp>
          <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#b5a090', marginBottom: 16 }}>
            Lineup
          </p>
          <h2 style={{ margin: '0 0 10px', fontSize: 'clamp(26px,4vw,40px)', fontWeight: 900, letterSpacing: '-0.03em', color: '#1c1410', fontFamily: 'var(--font-serif-jp), serif' }}>
            全40種。マイコンとセンサーを網羅。
          </h2>
          <p style={{ margin: '0 0 52px', fontSize: 14, color: '#7a6e64', lineHeight: 1.85, maxWidth: 520, letterSpacing: '0.02em' }}>
            Arduino · ESP32 · Raspberry Pi · XIAO から温度・人感・CO2センサーまで。<br />
            電子工作に必要な部品をラインナップ。
          </p>
        </FadeUp>

        {/* マイコン strip */}
        <FadeUp delay={0.1}>
          <div style={{ marginBottom: 44 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 18 }}>
              <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.06em', color: '#b5722a', border: '1px solid #e8d4b8', borderRadius: 4, padding: '3px 10px' }}>
                マイコン
              </span>
              <span style={{ fontSize: 12, color: '#b5a090' }}>20種</span>
            </div>
            <ProductStrip products={MAIKON} />
          </div>
        </FadeUp>

        {/* センサー strip */}
        <FadeUp delay={0.15}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 18 }}>
              <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.06em', color: '#4d7c5a', border: '1px solid #c8dfd0', borderRadius: 4, padding: '3px 10px' }}>
                センサー
              </span>
              <span style={{ fontSize: 12, color: '#b5a090' }}>20種</span>
            </div>
            <ProductStrip products={SENSOR} />
          </div>
        </FadeUp>
      </section>

      {/* ══ AI CRITERIA ═══════════════════════════════════════ */}
      <section className="ew-section-white" style={{ padding: 'clamp(60px,8vw,100px) clamp(24px,7vw,96px)' }}>
        <FadeUp>
          <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#b5a090', marginBottom: 16 }}>
            Selection
          </p>
          <h2 style={{ margin: '0 0 10px', fontSize: 'clamp(26px,4vw,40px)', fontWeight: 900, letterSpacing: '-0.03em', color: '#1c1410', fontFamily: 'var(--font-serif-jp), serif' }}>
            AIが選ぶ5つの軸。
          </h2>
          <p style={{ margin: '0 0 52px', fontSize: 14, color: '#7a6e64', lineHeight: 1.85, maxWidth: 480, letterSpacing: '0.02em' }}>
            「とりあえず安いやつ」で後から仕様不足に気づく失敗をなくすため、<br />
            AIは用途・接続・価格・カテゴリ・難易度を一括で評価する。
          </p>
        </FadeUp>

        <div style={{ borderTop: '1px solid #f0ebe2' }}>
          {AI_ROWS.map((row, i) => (
            <FadeUp key={row.label} delay={i * 0.07}>
              <div style={{
                display: 'flex', alignItems: 'baseline',
                gap: '0 32px', padding: '24px 0',
                borderBottom: '1px solid #f0ebe2',
                flexWrap: 'wrap',
              }}>
                <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#c8bba8', flex: '0 0 72px', paddingTop: 4 }}>
                  {row.label}
                </span>
                <span style={{ fontSize: 'clamp(20px,3.5vw,32px)', fontWeight: 700, letterSpacing: '-0.02em', color: '#1c1410', flex: '0 0 auto', lineHeight: 1, fontFamily: 'var(--font-serif-jp), serif' }}>
                  {row.value}
                </span>
                <span style={{ fontSize: 13, color: '#7a6e64', flex: '1 1 200px', alignSelf: 'center', lineHeight: 1.7, letterSpacing: '0.02em' }}>
                  {row.sub}
                </span>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* ══ BOTTOM CTA ════════════════════════════════════════ */}
      <section className="ew-section-cream" style={{ padding: 'clamp(60px,8vw,100px) clamp(24px,7vw,96px)', textAlign: 'center' }}>
        <FadeUp>
          <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#b5a090', marginBottom: 20 }}>
            40 products · AI‑powered
          </p>
          <h2 style={{ margin: '0 0 12px', fontSize: 'clamp(24px,3.8vw,38px)', fontWeight: 900, letterSpacing: '-0.03em', color: '#1c1410', fontFamily: 'var(--font-serif-jp), serif' }}>
            あなたのプロジェクトに合った<br />部品を見つける
          </h2>
          <p style={{ margin: '0 0 36px', fontSize: 14, color: '#7a6e64', lineHeight: 1.85, letterSpacing: '0.02em' }}>
            用途・予算・接続要件——どんな条件でも即絞り込める。
          </p>
          <form
            onSubmit={handleSubmit}
            style={{ display: 'flex', gap: 8, maxWidth: 560, margin: '0 auto' }}
          >
            <input
              type="text"
              value={value}
              onChange={e => setValue(e.target.value)}
              placeholder="例：温度を測りたい..."
              style={{
                flex: 1, minWidth: 0,
                border: '1.5px solid #e2d8ca',
                borderRadius: 6,
                padding: '14px 18px',
                fontSize: 14,
                color: '#1c1410',
                background: '#ffffff',
                outline: 'none',
                letterSpacing: '0.02em',
                transition: 'border-color 0.15s',
              }}
              onFocus={e => { e.currentTarget.style.borderColor = '#b5722a' }}
              onBlur={e => { e.currentTarget.style.borderColor = '#e2d8ca' }}
            />
            <button
              type="submit"
              style={{
                flexShrink: 0,
                background: '#b5722a',
                color: '#ffffff',
                fontWeight: 700,
                fontSize: 14,
                letterSpacing: '0.06em',
                border: 'none',
                borderRadius: 6,
                padding: '14px 28px',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
              }}
            >
              提案する
            </button>
          </form>
        </FadeUp>
      </section>

      {/* ══ FOOTER ════════════════════════════════════════════ */}
      <footer style={{
        borderTop: '1px solid #e2d8ca',
        padding: '22px clamp(24px,7vw,96px)',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8,
      }}>
        <p style={{ margin: 0, fontSize: 11, color: '#b5a090', letterSpacing: '0.04em' }}>
          AI 提案機能 Powered by{' '}
          <a href="https://sparkia.jp" target="_blank" rel="noopener noreferrer" style={{ color: '#b5722a', textDecoration: 'none' }}>
            Sparkia
          </a>
        </p>
        <p style={{ margin: 0, fontSize: 10, color: '#c8bba8', letterSpacing: '0.02em' }}>
          掲載価格・在庫は変動する場合があります
        </p>
      </footer>

    </main>
  )
}
