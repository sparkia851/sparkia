'use client'

import { useState, useRef } from 'react'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-64px' })
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 22 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}>
      {children}
    </motion.div>
  )
}

const CATEGORIES = ['電動工具・DIY用品', '釣り具・アウトドア', '楽器・音響機器', 'カメラ・映像機器', 'スポーツ用品', 'ファッション・アパレル', 'コスメ・美容', 'ペット用品', 'インテリア・家具', 'その他']
type Status = 'idle' | 'sending' | 'done' | 'error'

function ContactForm() {
  const [name, setName] = useState('')
  const [siteUrl, setSiteUrl] = useState('')
  const [category, setCategory] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<Status>('idle')

  async function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, siteUrl, category, message }),
      })
      setStatus(res.ok ? 'done' : 'error')
    } catch {
      setStatus('error')
    }
  }

  const field: React.CSSProperties = {
    width: '100%',
    background: '#fff',
    border: '1px solid #cbd5e1',
    borderRadius: 4,
    padding: '12px 14px',
    color: '#0f172a',
    fontSize: 14,
    outline: 'none',
    boxSizing: 'border-box',
  }

  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontSize: 11,
    fontWeight: 700,
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    color: '#64748b',
    marginBottom: 8,
  }

  if (status === 'done') {
    return (
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} style={{ textAlign: 'center', padding: '60px 0' }}>
        <div style={{ width: 56, height: 56, borderRadius: '50%', background: '#eff6ff', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', fontSize: 22 }}>✓</div>
        <p style={{ fontSize: 18, fontWeight: 700, color: '#0f172a', marginBottom: 8 }}>送信しました</p>
        <p style={{ fontSize: 13, color: '#64748b', lineHeight: 1.8 }}>内容を確認次第ご連絡します。</p>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
        <div>
          <label style={labelStyle}>お名前 <span style={{ color: '#2563eb' }}>*</span></label>
          <input style={field} type="text" placeholder="田中 太郎" value={name} onChange={e => setName(e.target.value)} required />
        </div>
        <div>
          <label style={labelStyle}>サイト URL</label>
          <input style={field} type="url" placeholder="https://your-shop.jp" value={siteUrl} onChange={e => setSiteUrl(e.target.value)} />
        </div>
      </div>
      <div>
        <label style={labelStyle}>商品カテゴリ <span style={{ color: '#2563eb' }}>*</span></label>
        <select style={{ ...field, appearance: 'none', cursor: 'pointer' }} value={category} onChange={e => setCategory(e.target.value)} required>
          <option value="" disabled>選択してください</option>
          {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
        </select>
      </div>
      <div>
        <label style={labelStyle}>相談内容 <span style={{ color: '#2563eb' }}>*</span></label>
        <textarea style={{ ...field, minHeight: 110, resize: 'vertical', lineHeight: 1.75 }} placeholder="取り扱い商品の概要や、現在の課題などをお書きください。" value={message} onChange={e => setMessage(e.target.value)} required />
      </div>
      {status === 'error' && <p style={{ fontSize: 12, color: '#dc2626', margin: 0 }}>送信に失敗しました。時間をおいて再度お試しください。</p>}
      <button type="submit" disabled={status === 'sending'} style={{ background: status === 'sending' ? '#93c5fd' : '#2563eb', color: '#fff', border: 'none', borderRadius: 2, padding: '15px', fontSize: 13, fontWeight: 700, cursor: status === 'sending' ? 'not-allowed' : 'pointer', letterSpacing: '0.06em' }}>
        {status === 'sending' ? '送信中...' : '無料で相談する'}
      </button>
      <p style={{ fontSize: 11, color: '#94a3b8', textAlign: 'center', margin: 0 }}>費用はかかりません。まずはお気軽にどうぞ。</p>
    </form>
  )
}

export function ServicePageClient() {
  return (
    <div style={{ background: '#fff', color: '#0f172a' }}>

      {/* ── Hero ── */}
      <section style={{ position: 'relative', height: '88vh', minHeight: 520, display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80"
          alt=""
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(100deg, rgba(2,6,23,0.88) 0%, rgba(2,6,23,0.6) 55%, rgba(2,6,23,0.15) 100%)' }} />
        <div style={{ position: 'relative', maxWidth: 1100, margin: '0 auto', padding: '0 clamp(24px,5vw,80px)', width: '100%' }}>
          <motion.div initial={{ opacity: 0, y: 36 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}>
            <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: 28 }}>
              EC Site AI Solution
            </p>
            <h1 style={{ fontSize: 'clamp(34px,5.5vw,66px)', fontWeight: 800, color: '#fff', lineHeight: 1.15, letterSpacing: '-0.03em', margin: '0 0 28px', maxWidth: 580 }}>
              商品選びを、<br />AIに任せる。
            </h1>
            <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', lineHeight: 1.85, maxWidth: 380, marginBottom: 48 }}>
              お客様の用途・予算に合った商品を自動提案する機能を、御社のECサイトに組み込みます。
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <a href="#contact" style={{ display: 'inline-block', fontSize: 12, fontWeight: 700, color: '#fff', background: '#2563eb', padding: '14px 30px', borderRadius: 2, textDecoration: 'none', letterSpacing: '0.06em' }}>
                無料で相談する
              </a>
              <Link href="/board-finder" style={{ display: 'inline-block', fontSize: 12, fontWeight: 700, color: 'rgba(255,255,255,0.75)', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.2)', padding: '14px 30px', borderRadius: 2, textDecoration: 'none', letterSpacing: '0.06em' }}>
                デモを試す →
              </Link>
            </div>
          </motion.div>
        </div>
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 120, background: 'linear-gradient(to top, #fff, transparent)' }} />
      </section>

      {/* ── Lead ── */}
      <section style={{ background: '#fff', padding: '80px 24px 72px' }}>
        <FadeIn>
          <div style={{ maxWidth: 640, margin: '0 auto', textAlign: 'center' }}>
            <p style={{ fontSize: 'clamp(16px,2.2vw,22px)', fontWeight: 300, lineHeight: 1.85, color: '#1e293b', letterSpacing: '-0.01em' }}>
              「どれがいいか分からない」——<br />
              そのお客様の声に、AIがリアルタイムで答えます。
            </p>
            <div style={{ width: 36, height: 2, background: '#2563eb', margin: '36px auto 0' }} />
          </div>
        </FadeIn>
      </section>

      {/* ── Feature 1: text left, image right ── */}
      <section style={{ background: '#f8fafc', padding: '80px 0' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 clamp(24px,5vw,80px)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 'clamp(40px,6vw,96px)', alignItems: 'center' }}>
          <FadeIn>
            <div>
              <p style={{ fontSize: 9, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#2563eb', marginBottom: 18 }}>Feature 01</p>
              <h2 style={{ fontSize: 'clamp(22px,3vw,34px)', fontWeight: 800, letterSpacing: '-0.025em', lineHeight: 1.25, color: '#0f172a', marginBottom: 22 }}>
                AIが商品を<br />自動で提案
              </h2>
              <div style={{ width: 28, height: 2, background: '#e2e8f0', marginBottom: 24 }} />
              <p style={{ fontSize: 14, color: '#475569', lineHeight: 1.9 }}>
                お客様がフリーワードで用途・予算・スキルを入力すると、御社の商品ラインナップの中からAIが最適なものをランキング形式で提示します。
                「定番の質問」への対応を自動化し、サポートコストを削減します。
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div style={{ borderRadius: 4, overflow: 'hidden', aspectRatio: '4/3', background: '#e2e8f0' }}>
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80"
                alt="AI商品提案のイメージ"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Feature 2: image left, text right ── */}
      <section style={{ background: '#fff', padding: '80px 0' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 clamp(24px,5vw,80px)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 'clamp(40px,6vw,96px)', alignItems: 'center' }}>
          <FadeIn delay={0.05}>
            <div style={{ borderRadius: 4, overflow: 'hidden', aspectRatio: '4/3', background: '#e2e8f0' }}>
              <img
                src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80"
                alt="ECサイトへの組み込みイメージ"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </div>
          </FadeIn>
          <FadeIn>
            <div>
              <p style={{ fontSize: 9, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#2563eb', marginBottom: 18 }}>Feature 02</p>
              <h2 style={{ fontSize: 'clamp(22px,3vw,34px)', fontWeight: 800, letterSpacing: '-0.025em', lineHeight: 1.25, color: '#0f172a', marginBottom: 22 }}>
                御社サイトに<br />そのまま組み込む
              </h2>
              <div style={{ width: 28, height: 2, background: '#e2e8f0', marginBottom: 24 }} />
              <p style={{ fontSize: 14, color: '#475569', lineHeight: 1.9 }}>
                既存のECサイトやブログページに追加する形で提供します。
                WordPress・独自サイトどちらにも対応しており、御社のデザインや雰囲気に合わせて調整します。
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Demo CTA ── */}
      <section style={{ background: '#0f172a', padding: '80px 24px' }}>
        <FadeIn>
          <div style={{ maxWidth: 800, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 48, alignItems: 'center' }}>
            <div>
              <p style={{ fontSize: 9, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginBottom: 18 }}>Live Demo</p>
              <h2 style={{ fontSize: 'clamp(22px,3vw,34px)', fontWeight: 800, letterSpacing: '-0.025em', color: '#fff', lineHeight: 1.25, marginBottom: 18 }}>
                まず実際に<br />触ってみてください
              </h2>
              <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', lineHeight: 1.85 }}>
                電子工作用ボードを題材に作ったデモです。フリーワードで検索すると、AIが用途に合った商品を提案します。
              </p>
            </div>
            <div>
              <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 4, padding: '20px 22px' }}>
                <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginBottom: 8 }}>Board Finder Demo</p>
                <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)', lineHeight: 1.7, marginBottom: 18 }}>Arduino・マイコンボード40種の中からAIが提案</p>
                <Link href="/board-finder" style={{ display: 'inline-block', fontSize: 12, fontWeight: 700, color: '#fff', background: '#2563eb', padding: '11px 22px', borderRadius: 2, textDecoration: 'none', letterSpacing: '0.04em' }}>
                  デモを試す →
                </Link>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* ── Contact ── */}
      <section id="contact" style={{ background: '#f8fafc', padding: '80px 24px 100px', borderTop: '1px solid #e2e8f0' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 'clamp(40px,6vw,80px)', alignItems: 'start' }}>
          <FadeIn>
            <div style={{ paddingTop: 4 }}>
              <p style={{ fontSize: 9, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#2563eb', marginBottom: 18 }}>Contact</p>
              <h2 style={{ fontSize: 'clamp(22px,3vw,34px)', fontWeight: 800, letterSpacing: '-0.025em', color: '#0f172a', lineHeight: 1.25, marginBottom: 22 }}>
                無料で<br />相談する
              </h2>
              <div style={{ width: 28, height: 2, background: '#e2e8f0', marginBottom: 28 }} />
              <p style={{ fontSize: 14, color: '#475569', lineHeight: 1.9 }}>
                御社の商品カテゴリに合わせたデモを準備してお見せします。まずは気軽にご連絡ください。費用はかかりません。
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: 4, padding: 'clamp(24px,4vw,40px)', boxShadow: '0 4px 24px rgba(0,0,0,0.05)' }}>
              <ContactForm />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Footer ── */}
      <div style={{ background: '#0f172a', padding: '22px 24px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.2)', margin: 0, letterSpacing: '0.04em' }}>© 2026 Sparkia</p>
      </div>

    </div>
  )
}
