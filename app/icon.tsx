import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          background: '#0a0f1e',
          borderRadius: 6,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <svg
          viewBox="25 95 82 75"
          width={22}
          height={22}
          style={{ fill: 'white' }}
        >
          <path d="m 31.068293,141.97614 21.668997,7.48315 14.33163,-11.28382 -17.59467,-0.0108 27.39835,-7.57459 6.05966,-29.25953 z" />
          <path d="m 84.91944,112.54853 5.10354,17.56781 -8.62323,2.27249 z" />
          <path d="m 57.24361,150.80338 43.28333,14.88947 -9.8686,-33.19832 z" />
        </svg>
      </div>
    ),
    { ...size }
  )
}
