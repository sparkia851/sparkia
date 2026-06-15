'use client'

import { useState, useRef } from 'react'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'

function FadeUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}>
      {children}
    </motion.div>
  )
}

const METALLIC = {
  background: 'linear-gradient(135deg, #e2e8f0 0%, #ffffff 40%, #94a3b8 70%, #e2e8f0 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
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

  const field = {
    width: '100%',
    background: 'rgba(255,255,255,0.03)',
    border: '1px solid rgba(255,255,255,0.09)',
    borderRadius: 8,
    padding: '12px 14px',
    color: '#f1f5f9',
    fontSize: 14,
    outline: 'none',
    boxSizing: 'border-box' as const,
  }

  if (status === 'done') {
    return (
      <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} style={{ textAlign: 'center', padding: '56px 0' }}>
        <div style={{ fontSize: 36, marginBottom: 20 }}>✅</div>
        <p style={{ fontSize: 17, fontWeight: 800, color: '#f8fafc', marginBottom: 10 }}>送信しました</p>
        <p style={{ fontSize: 13, color: '#475569', lineHeight: 1.8 }}>内容を確認次第ご連絡します。</p>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
        <div>
          <label style={{ display: 'block', fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', color: '#334155', marginBottom: 6, textTransform: 'uppercase' as const }}>お名前 <span style={{ color: '#3b82f6' }}>*</span></label>
          <input style={field} type="text" placeholder="田中 太郎" value={name} onChange={e => setName(e.target.value)} required />
        </div>
        <div>
          <label style={{ display: 'block', fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', color: '#334155', marginBottom: 6, textTransform: 'uppercase' as const }}>サイト URL</label>
          <input style={field} type="url" placeholder="https://your-shop.jp" value={siteUrl} onChange={e => setSiteUrl(e.target.value)} />
        </div>
      </div>
      <div>
        <label style={{ display: 'block', fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', color: '#334155', marginBottom: 6, textTransform: 'uppercase' as const }}>商品カテゴリ <span style={{ color: '#3b82f6' }}>*</span></label>
        <select style={{ ...field, appearance: 'none', cursor: 'pointer' }} value={category} onChange={e => setCategory(e.target.value)} required>
          <option value="" disabled>選択してください</option>
          {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
        </select>
      </div>
      <div>
        <label style={{ display: 'block', fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', color: '#334155', marginBottom: 6, textTransform: 'uppercase' as const }}>気になること・相談内容 <span style={{ color: '#3b82f6' }}>*</span></label>
        <textarea style={{ ...field, minHeight: 100, resize: 'vertical', lineHeight: 1.7 }} placeholder="取り扱い商品の概要や、現在の課題などをお書きください。" value={message} onChange={e => setMessage(e.target.value)} required />
      </div>
      {status === 'error' && <p style={{ fontSize: 12, color: '#ef4444', margin: 0 }}>送信に失敗しました。時間をおいて再度お試しください。</p>}
      <button type="submit" disabled={status === 'sending'} style={{ background: status === 'sending' ? 'rgba(37,99,235,0.4)' : 'linear-gradient(135deg,#1d4ed8,#3b82f6)', color: '#fff', border: 'none', borderRadius: 8, padding: '15px', fontSize: 14, fontWeight: 700, cursor: status === 'sending' ? 'not-allowed' : 'pointer', marginTop: 6, letterSpacing: '0.02em' }}>
        {status === 'sending' ? '送信中...' : '相談してみる →'}
      </button>
    </form>
  )
}

export default function ServicePage() {
  return (
    <main style={{ minHeight: '100vh', background: '#060913', color: '#f1f5f9' }}>

      {/* ── Hero ── */}
      <section style={{ position: 'relative', overflow: 'hidden', padding: 'clamp(80px,13vw,140px) 24px 100px', textAlign: 'center' }}>
        <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: 800, height: 500, background: 'radial-gradient(ellipse, rgba(59,130,246,0.08) 0%, transparent 65%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(59,130,246,0.022) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.022) 1px, transparent 1px)', backgroundSize: '54px 54px', pointerEvents: 'none' }} />

        <div style={{ position: 'relative', maxWidth: 640, margin: '0 auto' }}>
          <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
            <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#1e3a5f', display: 'block', marginBottom: 26 }}>
              EC向け AI商品提案
            </span>
            <h1 style={{ fontSize: 'clamp(28px, 5.5vw, 52px)', fontWeight: 900, letterSpacing: '-0.035em', lineHeight: 1.12, margin: '0 0 26px', ...METALLIC }}>
              「どれを選べばいい？」を<br />AIが答える機能を、<br />あなたのECサイトへ。
            </h1>
            <p style={{ fontSize: 15, color: '#475569', lineHeight: 1.9, maxWidth: 480, margin: '0 auto 48px' }}>
              お客様が用途・予算・スキルを入力すると、御社の商品からAIが最適なものを提案。
              まずはお気軽にご相談ください。
            </p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/board-finder" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 13, fontWeight: 700, color: '#94a3b8', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', padding: '12px 22px', borderRadius: 8, textDecoration: 'none' }}>
                デモを見る →
              </Link>
              <a href="#contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 13, fontWeight: 700, color: '#fff', background: 'linear-gradient(135deg,#1d4ed8,#3b82f6)', padding: '12px 22px', borderRadius: 8, textDecoration: 'none' }}>
                無料で相談する
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── What it is ── */}
      <section style={{ padding: '72px 24px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <FadeUp>
            <p style={{ fontSize: 9, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#1e3a5f', textAlign: 'center', marginBottom: 10 }}>What you get</p>
            <h2 style={{ fontSize: 'clamp(18px,2.8vw,28px)', fontWeight: 900, letterSpacing: '-0.025em', textAlign: 'center', marginBottom: 48 }}>できること</h2>
          </FadeUp>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 12 }}>
            {[
              { icon: '🔍', title: 'AI商品提案', body: 'お客様の使い方・予算・経験に合わせて、御社の商品ラインナップからAIが最適なものを選んで提示します。' },
              { icon: '💬', title: '問い合わせ削減', body: '「どれがいいですか？」という定番の質問にAIが自動で対応。サポートの手間を減らせます。' },
              { icon: '🎨', title: 'サイトに合わせて設置', body: '既存のECサイトやブログに組み込む形で提供します。デザインは御社のイメージに合わせて調整します。' },
            ].map((item, i) => (
              <FadeUp key={item.title} delay={i * 0.07}>
                <div style={{ background: '#0d1425', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 12, padding: '24px 20px' }}>
                  <p style={{ fontSize: 24, marginBottom: 14 }}>{item.icon}</p>
                  <p style={{ fontSize: 13, fontWeight: 700, color: '#f1f5f9', marginBottom: 8 }}>{item.title}</p>
                  <p style={{ fontSize: 12, color: '#475569', lineHeight: 1.85, margin: 0 }}>{item.body}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── Demo callout ── */}
      <section style={{ padding: '64px 24px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <FadeUp>
          <div style={{ maxWidth: 600, margin: '0 auto', background: 'linear-gradient(135deg, #0d1a2e, #0a1220)', border: '1px solid rgba(59,130,246,0.15)', borderRadius: 16, padding: 'clamp(28px,5vw,48px)', textAlign: 'center' }}>
            <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#3b82f6', marginBottom: 16 }}>Live Demo</p>
            <h3 style={{ fontSize: 'clamp(16px,2.5vw,22px)', fontWeight: 900, letterSpacing: '-0.02em', color: '#f1f5f9', marginBottom: 14 }}>
              まず実際に触ってみてください
            </h3>
            <p style={{ fontSize: 13, color: '#475569', lineHeight: 1.85, marginBottom: 28 }}>
              電子工作用ボードを題材に作ったデモです。<br />
              フリーワードで検索すると、AIが用途に合った商品を提案します。
            </p>
            <Link href="/board-finder" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, fontSize: 13, fontWeight: 700, color: '#fff', background: 'rgba(59,130,246,0.15)', border: '1px solid rgba(59,130,246,0.3)', padding: '13px 28px', borderRadius: 8, textDecoration: 'none' }}>
              デモを試す →
            </Link>
          </div>
        </FadeUp>
      </section>

      {/* ── Contact ── */}
      <section id="contact" style={{ padding: '72px 24px 100px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ maxWidth: 540, margin: '0 auto' }}>
          <FadeUp>
            <p style={{ fontSize: 9, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#1e3a5f', textAlign: 'center', marginBottom: 10 }}>Contact</p>
            <h2 style={{ fontSize: 'clamp(20px,3vw,30px)', fontWeight: 900, letterSpacing: '-0.025em', textAlign: 'center', marginBottom: 12 }}>無料で相談する</h2>
            <p style={{ fontSize: 13, color: '#475569', textAlign: 'center', lineHeight: 1.9, marginBottom: 36 }}>
              御社の商品カテゴリに合わせたデモを準備してお見せします。<br />
              まずは気軽に連絡ください。費用はかかりません。
            </p>
          </FadeUp>
          <FadeUp delay={0.06}>
            <div style={{ background: '#0d1425', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 16, padding: '28px 24px' }}>
              <ContactForm />
            </div>
          </FadeUp>
        </div>
      </section>

    </main>
  )
}
