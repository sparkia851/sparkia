'use client'

import { useState } from 'react'
import Link from 'next/link'

const CATEGORIES = [
  '電動工具・DIY用品',
  '釣り具・アウトドア',
  '楽器・音響機器',
  'カメラ・映像機器',
  'スポーツ用品',
  'ファッション・アパレル',
  'コスメ・美容',
  'ペット用品',
  'インテリア・家具',
  'その他',
]

type Status = 'idle' | 'sending' | 'done' | 'error'

function ContactForm() {
  const [name, setName] = useState('')
  const [siteUrl, setSiteUrl] = useState('')
  const [category, setCategory] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<Status>('idle')

  async function handleSubmit(e: React.FormEvent) {
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

  const inputStyle = {
    width: '100%',
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: 8,
    padding: '12px 14px',
    color: '#f1f5f9',
    fontSize: 14,
    outline: 'none',
    boxSizing: 'border-box' as const,
  }

  if (status === 'done') {
    return (
      <div style={{ textAlign: 'center', padding: '48px 0' }}>
        <p style={{ fontSize: 32, marginBottom: 16 }}>✅</p>
        <p style={{ fontSize: 18, fontWeight: 700, color: '#f1f5f9', marginBottom: 10 }}>送信しました</p>
        <p style={{ fontSize: 13, color: '#475569', lineHeight: 1.8 }}>
          内容を確認次第ご連絡します。<br />通常1〜2営業日以内にお返事します。
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label style={{ display: 'block', fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', color: '#475569', marginBottom: 8, textTransform: 'uppercase' as const }}>
            お名前 <span style={{ color: '#3b82f6' }}>*</span>
          </label>
          <input style={inputStyle} type="text" placeholder="田中 太郎" value={name} onChange={e => setName(e.target.value)} required />
        </div>
        <div>
          <label style={{ display: 'block', fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', color: '#475569', marginBottom: 8, textTransform: 'uppercase' as const }}>
            サイト URL <span style={{ color: '#334155', fontWeight: 400 }}>(任意)</span>
          </label>
          <input style={inputStyle} type="url" placeholder="https://your-shop.jp" value={siteUrl} onChange={e => setSiteUrl(e.target.value)} />
        </div>
      </div>

      <div>
        <label style={{ display: 'block', fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', color: '#475569', marginBottom: 8, textTransform: 'uppercase' as const }}>
          商品カテゴリ <span style={{ color: '#3b82f6' }}>*</span>
        </label>
        <select style={{ ...inputStyle, appearance: 'none', cursor: 'pointer' }} value={category} onChange={e => setCategory(e.target.value)} required>
          <option value="" disabled>選択してください</option>
          {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
        </select>
      </div>

      <div>
        <label style={{ display: 'block', fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', color: '#475569', marginBottom: 8, textTransform: 'uppercase' as const }}>
          相談内容 <span style={{ color: '#3b82f6' }}>*</span>
        </label>
        <textarea
          style={{ ...inputStyle, minHeight: 110, resize: 'vertical', lineHeight: 1.7 }}
          placeholder="取り扱い商品の概要や、現在の課題などをお書きください。"
          value={message}
          onChange={e => setMessage(e.target.value)}
          required
        />
      </div>

      {status === 'error' && (
        <p style={{ fontSize: 12, color: '#ef4444', margin: 0 }}>送信に失敗しました。時間をおいて再度お試しください。</p>
      )}

      <button
        type="submit"
        disabled={status === 'sending'}
        style={{
          background: status === 'sending' ? 'rgba(59,130,246,0.4)' : 'linear-gradient(135deg, #2563eb, #3b82f6)',
          color: '#fff', border: 'none', borderRadius: 8,
          padding: '15px', fontSize: 14, fontWeight: 700,
          cursor: status === 'sending' ? 'not-allowed' : 'pointer',
        }}
      >
        {status === 'sending' ? '送信中...' : '無料で相談する →'}
      </button>
    </form>
  )
}

const STEPS = [
  { num: '01', title: '商品データを渡す', desc: '取り扱い商品のリスト（CSV・スプレッドシートなど）を共有するだけ。最大200商品まで対応。' },
  { num: '02', title: 'AIが検索ページを構築', desc: 'お客様が用途・予算・スキルを入力すると、御社の商品の中からAIが最適なものを提案するページを作ります。' },
  { num: '03', title: 'ECサイトに設置', desc: '既存のサイトデザインに合わせてカスタマイズして組み込みます。WordPressでも独自サイトでも対応可能。' },
]

const FEATURES = [
  { icon: '🗂️', title: '商品カタログのAI化', desc: '商品データを読み込み、用途・スキル・予算などの軸で絞り込めるAIを構築します。' },
  { icon: '🎨', title: 'デザインカスタマイズ', desc: '御社サイトの雰囲気に合わせてUIを調整。既存ページへの追加も対応します。' },
  { icon: '🔄', title: '月次メンテナンス', desc: '商品の追加・変更・削除に対応。問い合わせ傾向のレポートも月1回お届けします。' },
]

export default function ServicePage() {
  return (
    <main style={{ minHeight: '100vh', background: '#060913', color: '#f1f5f9' }}>

      {/* ── Hero ── */}
      <section style={{ position: 'relative', overflow: 'hidden', padding: 'clamp(64px, 10vw, 120px) 24px 80px' }}>
        <div style={{ position: 'absolute', top: '10%', left: '50%', transform: 'translateX(-50%)', width: 600, height: 400, background: 'radial-gradient(ellipse, rgba(59,130,246,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: 640, margin: '0 auto', textAlign: 'center', position: 'relative' }}>
          <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#1e3a5f', display: 'block', marginBottom: 20 }}>
            EC向け AI商品選定サービス
          </span>
          <h1 style={{ fontSize: 'clamp(28px, 5vw, 48px)', fontWeight: 900, letterSpacing: '-0.03em', lineHeight: 1.15, margin: '0 0 20px', color: '#f8fafc' }}>
            「どれを選べばいい？」を<br />
            <span style={{ color: '#3b82f6' }}>AIが自動で答えます。</span>
          </h1>
          <p style={{ fontSize: 15, color: '#64748b', lineHeight: 1.8, margin: '0 0 40px', maxWidth: 480, marginLeft: 'auto', marginRight: 'auto' }}>
            御社の商品カタログを学習したAIが、お客様の用途・予算・スキルに合った商品をランキング形式で提案。
            問い合わせ対応の工数を削減し、購入率を改善します。
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/board-finder" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.12)', color: '#e2e8f0', padding: '13px 28px', borderRadius: 8, fontWeight: 600, fontSize: 14, textDecoration: 'none' }}>
              デモを試す →
            </Link>
            <a href="#contact" style={{ background: 'linear-gradient(135deg, #2563eb, #3b82f6)', color: '#fff', padding: '13px 28px', borderRadius: 8, fontWeight: 700, fontSize: 14, textDecoration: 'none' }}>
              無料で相談する
            </a>
          </div>
        </div>
      </section>

      {/* ── 仕組み ── */}
      <section style={{ padding: '80px 24px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <p style={{ fontSize: 9, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#1e3a5f', marginBottom: 12, textAlign: 'center' }}>How it works</p>
          <h2 style={{ fontSize: 'clamp(20px, 3vw, 28px)', fontWeight: 900, textAlign: 'center', marginBottom: 48, letterSpacing: '-0.02em' }}>導入の流れ</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {STEPS.map(s => (
              <div key={s.num} style={{ background: '#0d1425', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 12, padding: '24px 20px' }}>
                <p style={{ fontSize: 11, fontWeight: 800, color: '#3b82f6', fontFamily: 'ui-monospace, monospace', letterSpacing: '0.06em', marginBottom: 12 }}>{s.num}</p>
                <p style={{ fontSize: 14, fontWeight: 700, color: '#f1f5f9', marginBottom: 10 }}>{s.title}</p>
                <p style={{ fontSize: 12, color: '#475569', lineHeight: 1.75, margin: 0 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 提供内容 ── */}
      <section style={{ padding: '80px 24px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <p style={{ fontSize: 9, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#1e3a5f', marginBottom: 12, textAlign: 'center' }}>What&apos;s included</p>
          <h2 style={{ fontSize: 'clamp(20px, 3vw, 28px)', fontWeight: 900, textAlign: 'center', marginBottom: 48, letterSpacing: '-0.02em' }}>提供内容</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {FEATURES.map(f => (
              <div key={f.title} style={{ background: '#0d1425', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 12, padding: '24px 20px' }}>
                <p style={{ fontSize: 28, marginBottom: 12 }}>{f.icon}</p>
                <p style={{ fontSize: 14, fontWeight: 700, color: '#f1f5f9', marginBottom: 8 }}>{f.title}</p>
                <p style={{ fontSize: 12, color: '#475569', lineHeight: 1.75, margin: 0 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 料金 ── */}
      <section style={{ padding: '80px 24px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ maxWidth: 480, margin: '0 auto' }}>
          <p style={{ fontSize: 9, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#1e3a5f', marginBottom: 12, textAlign: 'center' }}>Pricing</p>
          <h2 style={{ fontSize: 'clamp(20px, 3vw, 28px)', fontWeight: 900, textAlign: 'center', marginBottom: 40, letterSpacing: '-0.02em' }}>料金</h2>
          <div style={{ background: '#0d1425', border: '1px solid rgba(59,130,246,0.2)', borderRadius: 16, overflow: 'hidden' }}>
            <div style={{ background: 'linear-gradient(135deg, #1d4ed8, #2563eb)', padding: '28px 32px' }}>
              <p style={{ fontSize: 11, fontWeight: 600, color: 'rgba(255,255,255,0.6)', letterSpacing: '0.1em', marginBottom: 8 }}>STANDARD</p>
              <p style={{ fontSize: 32, fontWeight: 900, color: '#fff', margin: 0 }}>
                初期 80,000円
                <span style={{ fontSize: 15, fontWeight: 400, opacity: 0.7 }}> + 月額 10,000円</span>
              </p>
              <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)', marginTop: 8, margin: 0 }}>初月は初期費用のみ。翌月より月額課金開始。</p>
            </div>
            <div style={{ padding: '24px 32px' }}>
              {[
                '商品カタログのAI化（最大200商品）',
                'サイトデザインに合わせたカスタマイズ',
                '既存ECページへの組み込み対応',
                '月1回の商品データ更新・メンテナンス',
                '問い合わせ傾向レポート（月次）',
              ].map(item => (
                <div key={item} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', marginBottom: 14 }}>
                  <div style={{ width: 18, height: 18, borderRadius: '50%', background: 'rgba(59,130,246,0.15)', border: '1px solid rgba(59,130,246,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1 }}>
                    <span style={{ fontSize: 9, color: '#3b82f6', fontWeight: 700 }}>✓</span>
                  </div>
                  <span style={{ fontSize: 13, color: '#94a3b8', lineHeight: 1.5 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Contact ── */}
      <section id="contact" style={{ padding: '80px 24px 100px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ maxWidth: 560, margin: '0 auto' }}>
          <p style={{ fontSize: 9, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#1e3a5f', marginBottom: 12, textAlign: 'center' }}>Contact</p>
          <h2 style={{ fontSize: 'clamp(20px, 3vw, 28px)', fontWeight: 900, textAlign: 'center', marginBottom: 12, letterSpacing: '-0.02em' }}>無料で相談する</h2>
          <p style={{ fontSize: 13, color: '#475569', textAlign: 'center', marginBottom: 40, lineHeight: 1.8 }}>
            御社の商品カテゴリに合わせたデモをお見せします。<br />費用はかかりません。
          </p>
          <ContactForm />
        </div>
      </section>

    </main>
  )
}
