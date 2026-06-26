'use client'

import { useRouter } from 'next/navigation'
import { useState, useRef } from 'react'
import Image from 'next/image'
import { motion, useInView, useScroll, useTransform, useSpring } from 'framer-motion'
import type { TKProduct } from '../_lib/talp-catalog'

// ── Design tokens ────────────────────────────────────────────────────────────
const SERIF = 'var(--font-serif-jp), serif'
const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1]

const HERO_PHOTO =
  'https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=1200&q=85&auto=format&fit=crop'

// ── Static editorial data ─────────────────────────────────────────────────────
const HOW_IT_WORKS = {
  query: '静かにタイピングしたい',
  rank: '01',
  tags: ['サイレントリニア', '5ピン', 'ルブ済'],
  name: 'GATERON Oil King Pink サイレントリニア キースイッチ',
  reason:
    'POMステム＋サイレント構造で押下・戻り時の衝撃音を抑え、45±15gfの軽い操作感と滑らかなリニアフィールを両立。ファクトリールブ済みなので開封してすぐ使えます。',
  price: '¥550',
  imageUrl: 'https://cdn.shopify.com/s/files/1/0755/3581/0772/files/oilkingpink-1.jpg',
  resultHref:
    '/talpkeyboard/search?q=%E9%9D%99%E3%81%8B%E3%81%AB%E3%82%BF%E3%82%A4%E3%83%94%E3%83%B3%E3%82%B0%E3%81%97%E3%81%9F%E3%81%84',
}

const EDITORS_PICK = {
  name: 'GATERON Oil King Pink',
  subName: 'サイレントリニア キースイッチ',
  description:
    'POMステム＋サイレント構造で衝撃音を抑え、45±15gfの軽い操作感を両立。静音性を優先するなら現時点で最も選びやすい一台です。',
  price: '¥550',
  imageUrl: 'https://cdn.shopify.com/s/files/1/0755/3581/0772/files/oilkingpink-1.jpg',
  shopUrl: 'https://shop.talpkeyboard.com',
}

const ALSO_POPULAR = [
  {
    name: 'Oil King Purple',
    sub: 'サイレントタクタイル · 5ピン',
    price: '¥550',
    imageUrl: 'https://cdn.shopify.com/s/files/1/0755/3581/0772/files/oilkingpurple-1.jpg',
  },
  {
    name: 'Keygeek M3',
    sub: 'リニア · 45g · 5ピン',
    price: '¥405',
    imageUrl: 'https://cdn.shopify.com/s/files/1/0755/3581/0772/files/keygeek-m3-1.jpg',
  },
  {
    name: 'Milky Yellow Pro',
    sub: 'リニア · 50g · 5ピン',
    price: '¥250',
    imageUrl:
      'https://cdn.shopify.com/s/files/1/0755/3581/0772/files/gateron-milky-yellow-1.jpg',
  },
  {
    name: 'Cherry MX Black Clear-Top',
    sub: 'リニア · 重め · 5ピン',
    price: '¥495',
    imageUrl:
      'https://cdn.shopify.com/s/files/1/0755/3581/0772/files/mx-blackcleartop-1.jpg',
  },
]

// ── Reveal helper ─────────────────────────────────────────────────────────────
function Reveal({
  children,
  delay = 0,
  direction = 'up',
}: {
  children: React.ReactNode
  delay?: number
  direction?: 'up' | 'left' | 'right' | 'scale'
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  if (direction === 'left')
    return (
      <motion.div ref={ref} initial={{ opacity: 0, x: -60 }} animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }} transition={{ duration: 0.8, delay, ease: EASE }}>
        {children}
      </motion.div>
    )
  if (direction === 'right')
    return (
      <motion.div ref={ref} initial={{ opacity: 0, x: 60 }} animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 60 }} transition={{ duration: 0.8, delay, ease: EASE }}>
        {children}
      </motion.div>
    )
  if (direction === 'scale')
    return (
      <motion.div ref={ref} initial={{ opacity: 0, scale: 0.88, y: 32 }} animate={inView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.88, y: 32 }} transition={{ duration: 0.75, delay, ease: EASE }}>
        {children}
      </motion.div>
    )
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 80, rotate: 1.5 }} animate={inView ? { opacity: 1, y: 0, rotate: 0 } : { opacity: 0, y: 80, rotate: 1.5 }} transition={{ duration: 0.75, delay, ease: EASE }}>
      {children}
    </motion.div>
  )
}

// ── Lineup strip card ─────────────────────────────────────────────────────────
function StripCard({ product }: { product: TKProduct }) {
  return (
    <div style={{ flexShrink: 0, width: 136 }}>
      <div
        style={{
          position: 'relative',
          width: 136,
          height: 136,
          background: '#f6f4f0',
          borderRadius: 3,
          overflow: 'hidden',
        }}
      >
        {product.imageUrl && (
          <Image
            src={product.imageUrl}
            alt={product.name}
            fill
            style={{ objectFit: 'contain', padding: 12 }}
            sizes="136px"
          />
        )}
      </div>
      <p
        style={{
          margin: '8px 0 2px',
          fontSize: 10,
          fontWeight: 500,
          color: '#16140f',
          lineHeight: 1.5,
        }}
      >
        {product.name.length > 26 ? product.name.slice(0, 26) + '…' : product.name}
      </p>
      <p style={{ margin: 0, fontSize: 10, color: '#b08d57' }}>{product.price}</p>
    </div>
  )
}

// ── Main component ────────────────────────────────────────────────────────────
export function TKTopClient({ products }: { products: TKProduct[] }) {
  const router = useRouter()
  const [query, setQuery] = useState('')
  const heroInputRef = useRef<HTMLInputElement>(null)

  // Global scroll
  const { scrollY, scrollYProgress } = useScroll()
  const photoY = useTransform(scrollY, [0, 680], [0, 140])

  // Nav scroll progress bar
  const progressSpring = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 })

  // EDITOR'S PICK image zoom on scroll
  const pickImageContainerRef = useRef(null)
  const { scrollYProgress: pickImageProgress } = useScroll({
    target: pickImageContainerRef,
    offset: ['start end', 'end start'],
  })
  const pickScale = useTransform(pickImageProgress, [0, 1], [1.0, 1.18])

  // LINEUP counter-drift
  const lineupRef = useRef<HTMLElement>(null)
  const { scrollYProgress: lineupProgress } = useScroll({
    target: lineupRef,
    offset: ['start end', 'end start'],
  })
  const switchesX = useTransform(lineupProgress, [0, 1], [64, -64])
  const keycapsX = useTransform(lineupProgress, [0, 1], [-64, 64])

  // EDITOR'S PICK / ALSO POPULAR in-view
  const pickRef = useRef(null)
  const pickInView = useInView(pickRef, { once: true, margin: '-80px' })
  const popularRef = useRef(null)
  const popularInView = useInView(popularRef, { once: true, margin: '-80px' })

  function handleSubmit(e: { preventDefault(): void }) {
    e.preventDefault()
    const q = query.trim()
    if (q) router.push(`/talpkeyboard/search?q=${encodeURIComponent(q)}`)
  }

  const switches = products.filter(p => p.category === 'キースイッチ')
  const keycaps  = products.filter(p => p.category === 'キーキャップ')

  return (
    <main style={{ background: '#ffffff', color: '#16140f', fontFamily: 'var(--font-jp), sans-serif' }}>

      {/* ── NAV ──────────────────────────────────────────────────────────── */}
      <nav className="tk-nav" style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        height: 64,
        background: 'rgba(255,255,255,0.94)',
        backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)',
        borderBottom: '1px solid #ededed',
        display: 'flex', alignItems: 'center',
        padding: '0 52px', justifyContent: 'space-between',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.2em', color: '#16140f' }}>
            TALP KEYBOARD
          </span>
          <span style={{ display: 'inline-block', width: 1, height: 14, background: '#ededed' }} />
          <span style={{ fontSize: 11, color: '#aaa' }}>AI 商品提案</span>
        </div>
        <span style={{ fontSize: 10, color: '#c4c4c4', letterSpacing: '0.12em' }}>
          POWERED BY SPARKIA
        </span>
        {/* Scroll progress bar */}
        <motion.div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: 2,
            background: '#b08d57',
            scaleX: progressSpring,
            transformOrigin: 'left',
          }}
        />
      </nav>

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="tk-hero-section" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: 680, paddingTop: 64 }}>
        {/* Left: text + form */}
        <motion.div
          className="tk-hero-text"
          initial={{ opacity: 0, x: -60, rotate: -1 }}
          animate={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.05 }}
          style={{ padding: '88px 60px 88px 72px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
        >
          <p style={{ margin: '0 0 30px', fontSize: 10, fontWeight: 600, letterSpacing: '0.32em', color: '#b08d57', textTransform: 'uppercase' }}>
            TALP KEYBOARD × SPARKIA AI
          </p>
          <h1 className="tk-h1" style={{ margin: '0 0 18px', fontFamily: SERIF, fontSize: 50, fontWeight: 500, lineHeight: 1.32, letterSpacing: '0.01em', color: '#16140f' }}>
            言葉で伝えると、<br />仕様まで読んで<br />選んでくれる。
          </h1>
          <p style={{ margin: '0 0 40px', fontSize: 13, color: '#8a8a8a', lineHeight: 2.1, letterSpacing: '0.03em', maxWidth: 380 }}>
            162商品の説明文を、AIがそのまま読み解いて提案。あなたの言葉に、最適な一台を。
          </p>
          <form
            onSubmit={handleSubmit}
            style={{ display: 'flex', border: '1px solid #16140f', borderRadius: 2, overflow: 'hidden', maxWidth: 440 }}
          >
            <input
              ref={heroInputRef}
              type="text"
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="例：静音で軽めのリニアスイッチがほしい"
              style={{
                flex: 1, padding: '16px 18px', fontSize: 13,
                color: '#16140f', background: '#ffffff',
                border: 'none', outline: 'none', letterSpacing: '0.02em',
                fontFamily: 'var(--font-jp), sans-serif',
              }}
            />
            <button type="submit" style={{
              background: '#16140f', color: '#ffffff',
              border: 'none', padding: '0 26px',
              fontSize: 12, fontWeight: 600, letterSpacing: '0.12em',
              cursor: 'pointer', whiteSpace: 'nowrap',
              fontFamily: 'var(--font-jp), sans-serif',
            }}>
              提案する
            </button>
          </form>
          <p style={{ margin: '22px 0 0', fontSize: 11, color: '#c8bfb0', letterSpacing: '0.14em' }}>
            SILENT · LINEAR · TACTILE · ARTISAN
          </p>
        </motion.div>

        {/* Right: photo with parallax */}
        <motion.div
          className="tk-hero-photo"
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: EASE, delay: 0.15 }}
          style={{ background: '#1a1a1a', overflow: 'hidden', position: 'relative' }}
        >
          <motion.div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, y: photoY }}>
            <Image
              src={HERO_PHOTO}
              alt="TALP KEYBOARD"
              fill
              style={{ objectFit: 'cover' }}
              priority
              sizes="50vw"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* ── METADATA STRIP ───────────────────────────────────────────────── */}
      <Reveal>
        <div className="tk-meta-strip" style={{
          display: 'flex', alignItems: 'center', gap: 48,
          padding: '22px 52px',
          borderTop: '1px solid #ededed', borderBottom: '1px solid #ededed',
        }}>
          <div>
            <span style={{ fontFamily: SERIF, fontSize: 20, fontWeight: 500, color: '#16140f' }}>
              {products.length || 162}
            </span>
            <span style={{ fontSize: 11, color: '#a5a5a5', letterSpacing: '0.04em', marginLeft: 6 }}>商品</span>
          </div>
          <span style={{ display: 'inline-block', width: 1, height: 14, background: '#e6e6e6' }} />
          <div>
            <span style={{ fontFamily: SERIF, fontSize: 20, fontWeight: 500, color: '#16140f' }}>3</span>
            <span style={{ fontSize: 11, color: '#a5a5a5', letterSpacing: '0.04em', marginLeft: 6 }}>カテゴリ</span>
          </div>
          <span style={{ display: 'inline-block', width: 1, height: 14, background: '#e6e6e6' }} />
          <span style={{ fontSize: 11, color: '#a5a5a5', letterSpacing: '0.04em' }}>仕様まで読んで選定します</span>
        </div>
      </Reveal>

      {/* ── HOW IT WORKS ─────────────────────────────────────────────────── */}
      <section className="tk-hiw-section" style={{ padding: '96px 52px', background: '#f9f8f6' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <Reveal>
            <p style={{ margin: '0 0 22px', fontSize: 10, fontWeight: 600, letterSpacing: '0.3em', color: '#b08d57', textTransform: 'uppercase' }}>
              HOW IT WORKS
            </p>
            <h2 style={{ margin: '0 0 16px', fontFamily: SERIF, fontSize: 38, fontWeight: 500, lineHeight: 1.3, color: '#16140f' }}>
              162商品の説明文を、<br />全部読んで選んでいます。
            </h2>
            <p style={{ margin: '0 0 48px', fontSize: 13, color: '#8a8a8a', lineHeight: 2.1, maxWidth: 520 }}>
              スイッチのPOMステムやアクチュエーション荷重、ルブの有無まで——TALPが商品ページに書いている仕様を、AIがそのまま読んで判断します。
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <p style={{ margin: '0 0 16px', fontSize: 12, color: '#8a8a8a' }}>
              —「<strong style={{ color: '#16140f', fontWeight: 600 }}>{HOW_IT_WORKS.query}</strong>」と入力すると
            </p>

            <div className="tk-hiw-card" style={{
              display: 'grid', gridTemplateColumns: '160px 1fr',
              border: '1px solid #e8e8e8', borderLeft: '3px solid #b08d57',
              borderRadius: 4, overflow: 'hidden',
            }}>
              <div style={{ background: '#f6f4f0', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20 }}>
                {/* Floating product image */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
                  style={{ position: 'relative', width: 120, height: 120 }}
                >
                  <Image
                    src={HOW_IT_WORKS.imageUrl}
                    alt={HOW_IT_WORKS.name}
                    fill
                    style={{ objectFit: 'contain' }}
                    sizes="120px"
                  />
                </motion.div>
              </div>
              <div style={{ padding: '26px 30px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                  <span style={{ fontFamily: SERIF, fontSize: 22, fontWeight: 500, color: '#b08d57' }}>
                    {HOW_IT_WORKS.rank}
                  </span>
                  <div style={{ display: 'flex', gap: 5 }}>
                    {HOW_IT_WORKS.tags.map(tag => (
                      <span key={tag} style={{ fontSize: 10, border: '1px solid #e0d8cc', borderRadius: 100, padding: '2px 9px', color: '#a09080' }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <h3 style={{ margin: '0 0 10px', fontFamily: SERIF, fontSize: 15, fontWeight: 500, color: '#16140f', lineHeight: 1.5 }}>
                  {HOW_IT_WORKS.name}
                </h3>
                <p style={{ margin: '0 0 16px', fontSize: 13, color: '#555', lineHeight: 2 }}>
                  {HOW_IT_WORKS.reason}
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                  <span style={{ fontFamily: SERIF, fontSize: 16, color: '#16140f' }}>{HOW_IT_WORKS.price}</span>
                  <a
                    href={HOW_IT_WORKS.resultHref}
                    style={{ fontSize: 11, fontWeight: 600, color: '#ffffff', background: '#16140f', borderRadius: 2, padding: '7px 16px', textDecoration: 'none', letterSpacing: '0.04em' }}
                  >
                    ショップで購入 →
                  </a>
                </div>
              </div>
            </div>

            <p style={{ margin: '14px 0 0', fontSize: 11, color: '#a5a5a5' }}>
              太字はTALPの商品説明から読み取った仕様です。{' '}
              <a href={HOW_IT_WORKS.resultHref} style={{ color: '#b08d57', textDecoration: 'none' }}>
                この結果を見る →
              </a>
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── EDITOR'S PICK + ALSO POPULAR ─────────────────────────────────── */}
      <section className="tk-split-section" style={{ display: 'grid', gridTemplateColumns: '1.25fr 1fr', borderTop: '1px solid #ededed' }}>
        {/* Left */}
        <motion.div
          ref={pickRef}
          className="tk-split-left"
          initial={{ opacity: 0, x: -60 }}
          animate={pickInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.85, ease: EASE }}
          style={{ borderRight: '1px solid #ededed' }}
        >
          <div className="tk-split-pad" style={{ padding: '72px 52px' }}>
            <p style={{ margin: '0 0 28px', fontSize: 10, fontWeight: 600, letterSpacing: '0.28em', color: '#b08d57', textTransform: 'uppercase' }}>
              EDITOR&apos;S PICK
            </p>
            {/* Image with scroll-zoom */}
            <div
              ref={pickImageContainerRef}
              style={{ position: 'relative', aspectRatio: '16/10', background: '#f6f4f0', borderRadius: 3, marginBottom: 24, overflow: 'hidden' }}
            >
              <motion.div style={{ position: 'absolute', inset: 0, scale: pickScale }}>
                <Image
                  src={EDITORS_PICK.imageUrl}
                  alt={EDITORS_PICK.name}
                  fill
                  style={{ objectFit: 'contain', padding: 24 }}
                  sizes="(max-width:1200px) 55vw, 700px"
                />
              </motion.div>
            </div>
            <h3 style={{ margin: '0 0 4px', fontFamily: SERIF, fontSize: 26, fontWeight: 500, color: '#16140f', lineHeight: 1.3 }}>
              {EDITORS_PICK.name}
            </h3>
            <p style={{ margin: '0 0 16px', fontSize: 13, color: '#a5a5a5' }}>{EDITORS_PICK.subName}</p>
            <p style={{ margin: '0 0 24px', fontSize: 13, color: '#8a8a8a', lineHeight: 2.1 }}>
              {EDITORS_PICK.description}
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
              <span style={{ fontFamily: SERIF, fontSize: 20, color: '#16140f' }}>{EDITORS_PICK.price}</span>
              <a
                href={EDITORS_PICK.shopUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: 11, fontWeight: 600, color: '#ffffff', background: '#16140f', borderRadius: 2, padding: '9px 20px', textDecoration: 'none', letterSpacing: '0.04em' }}
              >
                購入する →
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right */}
        <motion.div
          ref={popularRef}
          initial={{ opacity: 0, x: 60 }}
          animate={popularInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.85, ease: EASE, delay: 0.08 }}
        >
          <div className="tk-split-pad" style={{ padding: '72px 52px' }}>
            <p style={{ margin: '0 0 24px', fontSize: 10, fontWeight: 600, letterSpacing: '0.28em', color: '#b08d57', textTransform: 'uppercase' }}>
              ALSO POPULAR
            </p>
            {ALSO_POPULAR.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: 36 }}
                animate={popularInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.65, delay: 0.1 + i * 0.09, ease: EASE }}
                style={{ display: 'flex', alignItems: 'center', gap: 18, padding: '18px 0', borderBottom: '1px solid #f0ece4' }}
              >
                <div style={{ position: 'relative', width: 68, height: 68, background: '#f6f4f0', borderRadius: 2, flexShrink: 0, overflow: 'hidden' }}>
                  <Image
                    src={item.imageUrl}
                    alt={item.name}
                    fill
                    style={{ objectFit: 'contain', padding: 6 }}
                    sizes="68px"
                  />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <p style={{ margin: '0 0 3px', fontFamily: SERIF, fontSize: 13, color: '#16140f', lineHeight: 1.4 }}>{item.name}</p>
                  <p style={{ margin: 0, fontSize: 11, color: '#a5a5a5' }}>{item.sub}</p>
                </div>
                <span style={{ fontFamily: SERIF, fontSize: 13, color: '#b08d57', flexShrink: 0 }}>{item.price}</span>
              </motion.div>
            ))}
            <a
              href="/talpkeyboard/search?q=%E3%82%AD%E3%83%BC%E3%82%B9%E3%82%A4%E3%83%83%E3%83%81"
              style={{ display: 'inline-block', marginTop: 24, fontSize: 11, color: '#b08d57', textDecoration: 'none', letterSpacing: '0.08em' }}
            >
              VIEW ALL SWITCHES →
            </a>
          </div>
        </motion.div>
      </section>

      {/* ── LINEUP ───────────────────────────────────────────────────────── */}
      <section ref={lineupRef} className="tk-lineup-section" style={{ borderTop: '1px solid #ededed', padding: '84px 52px' }}>
        <Reveal>
          <div className="tk-lineup-header" style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 48 }}>
            <div>
              <p style={{ margin: '0 0 14px', fontSize: 10, fontWeight: 600, letterSpacing: '0.3em', color: '#b08d57', textTransform: 'uppercase' }}>
                LINEUP
              </p>
              <h2 style={{ margin: 0, fontFamily: SERIF, fontSize: 38, fontWeight: 500, lineHeight: 1.3, color: '#16140f' }}>
                TALP在庫を<br />リアルタイムで参照。
              </h2>
            </div>
            <p className="tk-lineup-tagline" style={{ margin: '40px 0 0', fontSize: 13, color: '#8a8a8a', lineHeight: 1.9, maxWidth: 240, textAlign: 'right' }}>
              キースイッチ・キーキャップ・パーツ、<br />{products.length}商品すべてが選定対象です。
            </p>
          </div>
        </Reveal>

        {switches.length > 0 && (
          <Reveal delay={0.05}>
            <div style={{ marginBottom: 48 }}>
              <p style={{ margin: '0 0 18px', fontSize: 11, color: '#a5a5a5', letterSpacing: '0.04em' }}>
                キースイッチ <span style={{ color: '#16140f', fontWeight: 600 }}>{switches.length}</span>種
              </p>
              {/* Counter-drift wrapper — switches drift left as you scroll down */}
              <motion.div style={{ x: switchesX }}>
                <div className="scrollbar-hide" style={{ display: 'flex', gap: 14, overflowX: 'auto', paddingBottom: 4 }}>
                  {switches.map(p => <StripCard key={p.id} product={p} />)}
                </div>
              </motion.div>
            </div>
          </Reveal>
        )}

        {keycaps.length > 0 && (
          <Reveal delay={0.1}>
            <div>
              <p style={{ margin: '0 0 18px', fontSize: 11, color: '#a5a5a5', letterSpacing: '0.04em' }}>
                キーキャップ <span style={{ color: '#16140f', fontWeight: 600 }}>{keycaps.length}</span>種
              </p>
              {/* Counter-drift wrapper — keycaps drift right as you scroll down */}
              <motion.div style={{ x: keycapsX }}>
                <div className="scrollbar-hide" style={{ display: 'flex', gap: 14, overflowX: 'auto', paddingBottom: 4 }}>
                  {keycaps.map(p => <StripCard key={p.id} product={p} />)}
                </div>
              </motion.div>
            </div>
          </Reveal>
        )}
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section className="tk-cta-section" style={{ padding: '112px 52px', textAlign: 'center', background: '#f9f8f6' }}>
        <Reveal>
          <p style={{ margin: '0 0 20px', fontSize: 10, fontWeight: 600, letterSpacing: '0.3em', color: '#b08d57', textTransform: 'uppercase' }}>
            TRY IT NOW
          </p>
          <h2 className="tk-h2-cta" style={{ margin: '0 0 12px', fontFamily: SERIF, fontSize: 46, fontWeight: 500, lineHeight: 1.3, color: '#16140f' }}>
            自分の言葉で、<br />探してみる。
          </h2>
          <p style={{ margin: '0 0 36px', fontSize: 13, color: '#8a8a8a', lineHeight: 2 }}>
            どんな言葉でも大丈夫です。
          </p>
          <button
            type="button"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' })
              setTimeout(() => heroInputRef.current?.focus(), 600)
            }}
            style={{
              background: '#16140f', color: '#ffffff',
              border: 'none', borderRadius: 2,
              padding: '18px 52px', fontSize: 13,
              fontWeight: 600, letterSpacing: '0.12em',
              cursor: 'pointer', textTransform: 'uppercase',
              fontFamily: 'var(--font-jp), sans-serif',
            }}
          >
            AIに提案してもらう
          </button>
        </Reveal>
      </section>

      {/* ── FOOTER ───────────────────────────────────────────────────────── */}
      <footer className="tk-footer" style={{
        borderTop: '1px solid #ededed',
        padding: '28px 52px',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      }}>
        <span style={{ fontSize: 10, color: '#ccc' }}>
          掲載価格・在庫は変動する場合があります。最新情報はTALP KEYBOARDのショップページをご確認ください。
        </span>
        <span style={{ fontSize: 10, color: '#ccc', letterSpacing: '0.08em' }}>
          TALP KEYBOARD AI 商品提案 POWERED BY SPARKIA
        </span>
      </footer>

    </main>
  )
}
