import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#060810',
          width: '100%',
          height: '100%',
          display: 'flex',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* グリッド背景 */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'linear-gradient(rgba(96,165,250,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(96,165,250,0.05) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
            display: 'flex',
          }}
        />

        {/* 左上グロー */}
        <div
          style={{
            position: 'absolute',
            top: -160,
            left: -80,
            width: 560,
            height: 560,
            background: 'radial-gradient(circle, rgba(59,130,246,0.18) 0%, transparent 65%)',
            display: 'flex',
          }}
        />

        {/* 右下グロー */}
        <div
          style={{
            position: 'absolute',
            bottom: -120,
            right: -60,
            width: 420,
            height: 420,
            background: 'radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 65%)',
            display: 'flex',
          }}
        />

        {/* 左エリア */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '64px 80px',
            width: 720,
            position: 'relative',
          }}
        >
          {/* ブランドバッジ */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              marginBottom: 40,
            }}
          >
            <div
              style={{
                display: 'flex',
                background: 'rgba(96,165,250,0.12)',
                border: '1px solid rgba(96,165,250,0.35)',
                borderRadius: 8,
                padding: '6px 16px',
              }}
            >
              <span style={{ color: '#60a5fa', fontSize: 16, fontWeight: 700, letterSpacing: '0.14em' }}>
                SPARKIA
              </span>
            </div>
            <span style={{ color: 'rgba(148,163,184,0.5)', fontSize: 16 }}>/</span>
            <span style={{ color: 'rgba(148,163,184,0.7)', fontSize: 16, fontWeight: 600, letterSpacing: '0.1em' }}>
              BOARD FINDER
            </span>
          </div>

          {/* メインタイトル */}
          <div
            style={{
              display: 'flex',
              fontSize: 58,
              fontWeight: 800,
              color: 'white',
              lineHeight: 1.15,
              marginBottom: 22,
              letterSpacing: '-0.02em',
            }}
          >
            マイコンボード選びを、
          </div>
          <div
            style={{
              display: 'flex',
              fontSize: 58,
              fontWeight: 800,
              color: '#60a5fa',
              lineHeight: 1.15,
              marginBottom: 36,
              letterSpacing: '-0.02em',
            }}
          >
            AIが解決。
          </div>

          {/* サブテキスト */}
          <div
            style={{
              display: 'flex',
              fontSize: 22,
              color: '#64748b',
              marginBottom: 48,
              lineHeight: 1.5,
            }}
          >
            要件をテキストで入力するだけ。ランキング形式で即提案。
          </div>

          {/* タグ行 */}
          <div style={{ display: 'flex', gap: 14 }}>
            {['40種対応', '完全無料', 'AI選定'].map((tag) => (
              <div
                key={tag}
                style={{
                  display: 'flex',
                  background: 'rgba(96,165,250,0.1)',
                  border: '1px solid rgba(96,165,250,0.3)',
                  borderRadius: 999,
                  padding: '9px 22px',
                  color: '#93c5fd',
                  fontSize: 19,
                  fontWeight: 600,
                }}
              >
                {tag}
              </div>
            ))}
          </div>
        </div>

        {/* 右エリア — ボード名リスト */}
        <div
          style={{
            position: 'absolute',
            right: 0,
            top: 0,
            bottom: 0,
            width: 440,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            justifyContent: 'center',
            padding: '0 72px 0 0',
            gap: 14,
          }}
        >
          {[
            { name: 'Arduino Uno', label: '入門定番' },
            { name: 'ESP32-C3 SuperMini', label: '超小型 IoT' },
            { name: 'Raspberry Pi Pico W', label: 'Python / WiFi' },
            { name: 'M5Stack Core2', label: '画面付き' },
            { name: 'Teensy 4.1', label: '高性能 USB' },
          ].map((b) => (
            <div
              key={b.name}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.09)',
                borderRadius: 10,
                padding: '10px 18px',
              }}
            >
              <span style={{ color: '#e2e8f0', fontSize: 18, fontWeight: 600 }}>{b.name}</span>
              <span style={{ color: '#475569', fontSize: 14 }}>{b.label}</span>
            </div>
          ))}
          <div style={{ display: 'flex', color: 'rgba(96,165,250,0.2)', fontSize: 13, marginTop: 6, letterSpacing: '0.05em' }}>
            + 35 more boards
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
