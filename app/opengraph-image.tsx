import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0a0f1e',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: '80px 100px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* 背景のグリッド装飾 */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'linear-gradient(rgba(96,165,250,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(96,165,250,0.05) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        {/* Board Finder バッジ */}
        <div
          style={{
            display: 'flex',
            background: 'rgba(96,165,250,0.15)',
            border: '1px solid rgba(96,165,250,0.4)',
            borderRadius: '999px',
            padding: '8px 24px',
            marginBottom: '32px',
          }}
        >
          <span style={{ color: '#60a5fa', fontSize: 22, fontWeight: 600, letterSpacing: '0.1em' }}>
            BOARD FINDER
          </span>
        </div>

        {/* Sparkia ロゴ */}
        <div
          style={{
            fontSize: 96,
            fontWeight: 800,
            fontStyle: 'italic',
            color: 'white',
            lineHeight: 1,
            marginBottom: '28px',
            letterSpacing: '-0.02em',
          }}
        >
          Sparkia
        </div>

        {/* キャッチコピー */}
        <div
          style={{
            fontSize: 36,
            color: '#94a3b8',
            fontWeight: 400,
            lineHeight: 1.4,
            maxWidth: '700px',
          }}
        >
          Find your perfect microcontroller board in seconds.
        </div>

        {/* 対応ボード数 */}
        <div
          style={{
            display: 'flex',
            marginTop: '48px',
            gap: '32px',
          }}
        >
          {['Arduino', 'Raspberry Pi Pico', 'ESP32', 'M5Stack'].map((b) => (
            <div
              key={b}
              style={{
                background: 'rgba(255,255,255,0.07)',
                border: '1px solid rgba(255,255,255,0.12)',
                borderRadius: '8px',
                padding: '10px 20px',
                color: '#cbd5e1',
                fontSize: 20,
              }}
            >
              {b}
            </div>
          ))}
        </div>

        {/* 右側の装飾 */}
        <div
          style={{
            position: 'absolute',
            right: 80,
            top: '50%',
            transform: 'translateY(-50%)',
            fontSize: 200,
            color: 'rgba(96,165,250,0.08)',
            fontWeight: 800,
            fontStyle: 'italic',
          }}
        >
          25
        </div>
      </div>
    ),
    { ...size }
  )
}
