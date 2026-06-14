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

export default function ContactPage() {
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
    background: '#0a0f1e',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: 8,
    padding: '12px 14px',
    color: '#f1f5f9',
    fontSize: 14,
    outline: 'none',
    boxSizing: 'border-box' as const,
  }

  const labelStyle = {
    display: 'block',
    fontSize: 11,
    fontWeight: 700,
    letterSpacing: '0.08em',
    color: '#475569',
    marginBottom: 8,
    textTransform: 'uppercase' as const,
  }

  return (
    <main style={{ minHeight: '100vh', background: '#060913', padding: '60px 16px 80px' }}>
      <div style={{ maxWidth: 520, margin: '0 auto' }}>

        <Link href="/tool-finder" style={{ fontSize: 11, color: '#334155', textDecoration: 'none', letterSpacing: '0.06em' }}>
          ← Tool Finder
        </Link>

        <div style={{ marginTop: 32, marginBottom: 40 }}>
          <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#1e3a5f', marginBottom: 10 }}>
            Contact
          </p>
          <h1 style={{ fontSize: 'clamp(24px, 5vw, 32px)', fontWeight: 900, letterSpacing: '-0.03em', color: '#f8fafc', margin: 0, marginBottom: 12 }}>
            導入を相談する
          </h1>
          <p style={{ fontSize: 13, color: '#475569', lineHeight: 1.8, margin: 0 }}>
            御社の商品カテゴリに合わせたデモをお見せします。<br />
            まずはお気軽にご相談ください。費用はかかりません。
          </p>
        </div>

        {status === 'done' ? (
          <div style={{ background: '#0d1425', border: '1px solid rgba(59,130,246,0.2)', borderRadius: 12, padding: '40px 32px', textAlign: 'center' }}>
            <p style={{ fontSize: 28, marginBottom: 16 }}>✅</p>
            <p style={{ fontSize: 16, fontWeight: 700, color: '#f1f5f9', marginBottom: 8 }}>送信しました</p>
            <p style={{ fontSize: 13, color: '#475569', lineHeight: 1.7 }}>
              内容を確認次第、LINE にてご連絡します。<br />通常1〜2営業日以内にお返事します。
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>

            <div>
              <label style={labelStyle}>お名前 <span style={{ color: '#3b82f6' }}>*</span></label>
              <input
                style={inputStyle}
                type="text"
                placeholder="田中 太郎"
                value={name}
                onChange={e => setName(e.target.value)}
                required
              />
            </div>

            <div>
              <label style={labelStyle}>サイト URL <span style={{ color: '#475569', fontWeight: 400, textTransform: 'none', letterSpacing: 0 }}>(任意)</span></label>
              <input
                style={inputStyle}
                type="url"
                placeholder="https://your-shop.jp"
                value={siteUrl}
                onChange={e => setSiteUrl(e.target.value)}
              />
            </div>

            <div>
              <label style={labelStyle}>商品カテゴリ <span style={{ color: '#3b82f6' }}>*</span></label>
              <select
                style={{ ...inputStyle, appearance: 'none', cursor: 'pointer' }}
                value={category}
                onChange={e => setCategory(e.target.value)}
                required
              >
                <option value="" disabled>選択してください</option>
                {CATEGORIES.map(c => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>

            <div>
              <label style={labelStyle}>相談内容 <span style={{ color: '#3b82f6' }}>*</span></label>
              <textarea
                style={{ ...inputStyle, minHeight: 120, resize: 'vertical', lineHeight: 1.7 }}
                placeholder="取り扱っている商品の概要や、現在の課題などを教えてください。"
                value={message}
                onChange={e => setMessage(e.target.value)}
                required
              />
            </div>

            {status === 'error' && (
              <p style={{ fontSize: 12, color: '#ef4444', margin: 0 }}>
                送信に失敗しました。時間をおいて再度お試しください。
              </p>
            )}

            <button
              type="submit"
              disabled={status === 'sending'}
              style={{
                background: status === 'sending' ? 'rgba(59,130,246,0.4)' : 'linear-gradient(135deg, #2563eb, #3b82f6)',
                color: '#fff',
                border: 'none',
                borderRadius: 8,
                padding: '15px',
                fontSize: 14,
                fontWeight: 700,
                cursor: status === 'sending' ? 'not-allowed' : 'pointer',
                marginTop: 4,
              }}
            >
              {status === 'sending' ? '送信中...' : '送信する →'}
            </button>

          </form>
        )}
      </div>
    </main>
  )
}
