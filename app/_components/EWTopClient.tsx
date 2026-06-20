'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

const EXAMPLES = [
  '温度と湿度を測りたい',
  'WiFiでデータを送りたい',
  '人が来たら通知したい',
  '植物の水やりを自動化したい',
  'CO2濃度を監視したい',
  '距離を測ってロボットに使いたい',
]

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
    <main style={{ minHeight: '100vh', background: '#fafaf8', color: '#111827' }}>

      {/* ── hero ── */}
      <section style={{
        background: 'linear-gradient(160deg, #fff7ed 0%, #fafaf8 60%)',
        borderBottom: '1px solid #f3f4f6',
        padding: 'clamp(56px, 10vw, 96px) 20px clamp(48px, 8vw, 80px)',
        textAlign: 'center',
      }}>
        {/* shop badge */}
        <div style={{ marginBottom: 24 }}>
          <span style={{
            display: 'inline-block',
            fontSize: 11, fontWeight: 700, letterSpacing: '0.08em',
            color: '#f97316', background: '#fff7ed',
            border: '1px solid #fed7aa',
            padding: '5px 16px', borderRadius: 20,
          }}>
            電子工作ステーション × AI 商品提案
          </span>
        </div>

        {/* headline */}
        <h1 style={{
          margin: '0 0 16px',
          fontSize: 'clamp(28px, 6vw, 52px)',
          fontWeight: 900,
          letterSpacing: '-0.03em',
          lineHeight: 1.15,
          color: '#111827',
        }}>
          何を作りたいですか？
        </h1>
        <p style={{
          margin: '0 0 40px',
          fontSize: 'clamp(14px, 2.5vw, 18px)',
          color: '#6b7280',
          lineHeight: 1.7,
          maxWidth: 560,
          marginLeft: 'auto',
          marginRight: 'auto',
        }}>
          やりたいことをそのまま入力してください。<br />
          ショップの商品からAIが最適な部品を提案します。
        </p>

        {/* search form */}
        <div style={{ maxWidth: 600, margin: '0 auto' }}>
          <form onSubmit={handleSubmit} style={{ display: 'flex', gap: 10 }}>
            <input
              type="text"
              value={value}
              onChange={e => setValue(e.target.value)}
              placeholder="例：温度を測りたい、人が来たら知らせたい..."
              style={{
                flex: 1, minWidth: 0,
                border: '2px solid #e5e7eb',
                borderRadius: 10,
                padding: '14px 18px',
                fontSize: 15,
                color: '#111827',
                background: '#ffffff',
                outline: 'none',
                transition: 'border-color 0.15s',
              }}
              onFocus={e => { e.currentTarget.style.borderColor = '#f97316' }}
              onBlur={e => { e.currentTarget.style.borderColor = '#e5e7eb' }}
            />
            <button
              type="submit"
              style={{
                flexShrink: 0,
                background: '#f97316',
                color: '#ffffff',
                fontWeight: 700,
                fontSize: 15,
                border: 'none',
                borderRadius: 10,
                padding: '14px 24px',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
              }}
            >
              提案する
            </button>
          </form>

          {/* example pills */}
          <div style={{ marginTop: 16, display: 'flex', flexWrap: 'wrap', gap: 8, justifyContent: 'center' }}>
            {EXAMPLES.map(ex => (
              <button
                key={ex}
                type="button"
                onClick={() => handleExample(ex)}
                style={{
                  fontSize: 12, fontWeight: 500,
                  color: '#6b7280',
                  background: '#ffffff',
                  border: '1px solid #e5e7eb',
                  borderRadius: 20,
                  padding: '6px 14px',
                  cursor: 'pointer',
                  transition: 'all 0.15s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = '#f97316'
                  e.currentTarget.style.color = '#f97316'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = '#e5e7eb'
                  e.currentTarget.style.color = '#6b7280'
                }}
              >
                {ex}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── category overview ── */}
      <section style={{
        maxWidth: 800,
        margin: '0 auto',
        padding: 'clamp(40px, 6vw, 64px) 20px',
      }}>
        <p style={{
          textAlign: 'center',
          fontSize: 11, fontWeight: 700, letterSpacing: '0.12em',
          color: '#9ca3af', textTransform: 'uppercase', marginBottom: 24,
        }}>
          対応カテゴリ
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 16 }}>

          {/* マイコン card */}
          <div style={{
            background: '#ffffff', border: '1px solid #e5e7eb',
            borderRadius: 12, padding: '24px 28px',
            borderTop: '3px solid #f97316',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
              <span style={{
                fontSize: 11, fontWeight: 700, letterSpacing: '0.06em',
                color: '#f97316', background: '#fff7ed',
                border: '1px solid #fed7aa',
                padding: '3px 12px', borderRadius: 4,
              }}>
                マイコン
              </span>
              <span style={{ fontSize: 13, color: '#9ca3af' }}>20種</span>
            </div>
            <h3 style={{ margin: '0 0 8px', fontSize: 16, fontWeight: 700, color: '#111827' }}>
              開発ボード
            </h3>
            <p style={{ margin: 0, fontSize: 13, color: '#6b7280', lineHeight: 1.7 }}>
              Arduino・ESP32・Raspberry Pi・XIAOなど。WiFi・BLE・カメラ・ディスプレイ付きも揃えています。
            </p>
          </div>

          {/* センサー card */}
          <div style={{
            background: '#ffffff', border: '1px solid #e5e7eb',
            borderRadius: 12, padding: '24px 28px',
            borderTop: '3px solid #16a34a',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
              <span style={{
                fontSize: 11, fontWeight: 700, letterSpacing: '0.06em',
                color: '#16a34a', background: '#f0fdf4',
                border: '1px solid #bbf7d0',
                padding: '3px 12px', borderRadius: 4,
              }}>
                センサー
              </span>
              <span style={{ fontSize: 13, color: '#9ca3af' }}>20種</span>
            </div>
            <h3 style={{ margin: '0 0 8px', fontSize: 16, fontWeight: 700, color: '#111827' }}>
              センサー類
            </h3>
            <p style={{ margin: 0, fontSize: 13, color: '#6b7280', lineHeight: 1.7 }}>
              温湿度・気圧・CO2・距離・人感・ガス・光・音・タッチ・土壌・RFIDなど多彩なセンサーを在庫。
            </p>
          </div>

        </div>
      </section>

      {/* ── how it works ── */}
      <section style={{
        background: '#f9fafb',
        borderTop: '1px solid #f3f4f6',
        borderBottom: '1px solid #f3f4f6',
        padding: 'clamp(40px, 6vw, 64px) 20px',
      }}>
        <div style={{ maxWidth: 640, margin: '0 auto', textAlign: 'center' }}>
          <p style={{
            fontSize: 11, fontWeight: 700, letterSpacing: '0.12em',
            color: '#9ca3af', textTransform: 'uppercase', marginBottom: 24,
          }}>
            使い方
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {[
              ['01', 'やりたいことを入力', '「温度を測りたい」「人が来たら通知したい」など自然な言葉でOK'],
              ['02', 'AIが最適な商品を提案', 'ショップのラインナップからあなたのプロジェクトに最適な商品を選びます'],
              ['03', 'ショップで購入', '提案された商品をそのまま電子工作ステーションで購入できます'],
            ].map(([num, title, desc]) => (
              <div key={num} style={{
                display: 'flex', gap: 20, alignItems: 'flex-start',
                textAlign: 'left',
                background: '#ffffff', borderRadius: 10,
                border: '1px solid #e5e7eb',
                padding: '18px 22px',
              }}>
                <span style={{
                  fontSize: 13, fontWeight: 800, color: '#f97316',
                  fontFamily: 'ui-monospace, monospace',
                  minWidth: 26, paddingTop: 1,
                }}>
                  {num}
                </span>
                <div>
                  <p style={{ margin: '0 0 4px', fontSize: 14, fontWeight: 700, color: '#111827' }}>{title}</p>
                  <p style={{ margin: 0, fontSize: 13, color: '#6b7280', lineHeight: 1.6 }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── footer ── */}
      <footer style={{
        textAlign: 'center',
        padding: '32px 20px',
        fontSize: 11,
        color: '#9ca3af',
        lineHeight: 2,
      }}>
        <p style={{ margin: '0 0 4px' }}>
          AI提案機能 Powered by{' '}
          <a href="https://sparkia.jp" target="_blank" rel="noopener noreferrer"
            style={{ color: '#f97316', textDecoration: 'none', fontWeight: 600 }}>
            Sparkia
          </a>
        </p>
        <p style={{ margin: 0 }}>
          掲載価格・在庫は変動する場合があります。最新情報はショップページをご確認ください。
        </p>
      </footer>

    </main>
  )
}
