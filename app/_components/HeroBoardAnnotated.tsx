'use client'
import { useState } from 'react'
import Image from 'next/image'

// dot: 写真内の部品位置 (%)
// lineEnd: 線の終端 (写真外へ延ばす場合は 0以下 or 100以上も可)
// labelStyle: ラベルボックスの絶対位置
const CALLOUTS = [
  {
    id: 'digital',
    text: '14 デジタルI/O',
    sub: 'うち 6本 PWM 対応',
    dot:      { x: 57, y: 10 },
    lineEnd:  { x: 101, y:  8 },
    labelStyle: { top: '3%', left: '103%' } as React.CSSProperties,
  },
  {
    id: 'usb',
    text: 'USB Type-B',
    sub: '書込み & シリアル通信',
    dot:      { x: 13, y: 28 },
    lineEnd:  { x: 101, y: 22 },
    labelStyle: { top: '17%', left: '103%' } as React.CSSProperties,
  },
  {
    id: 'usb-ic',
    text: 'USB インターフェース',
    sub: 'ATmega16U2 · シリアル変換',
    dot:      { x: 38, y: 37 },
    lineEnd:  { x: 101, y: 37 },
    labelStyle: { top: '32%', left: '103%' } as React.CSSProperties,
  },
  {
    id: 'mcu',
    text: 'ATmega328P',
    sub: '16 MHz · 2 KB SRAM',
    dot:      { x: 68, y: 65 },
    lineEnd:  { x: 101, y: 53 },
    labelStyle: { top: '48%', left: '103%' } as React.CSSProperties,
  },
] as const

export function HeroBoardAnnotated() {
  const [error, setError] = useState(false)
  if (error) return null

  return (
    <div
      className="relative w-full aspect-[4/3] select-none"
      style={{ overflow: 'visible' }}
    >
      <Image
        src="/api/board-image?slug=arduino-uno-rev3"
        alt="Arduino Uno Rev3"
        fill
        className="object-contain drop-shadow-2xl"
        onError={() => setError(true)}
        unoptimized
      />

      {/* 注釈線（写真外まで延長可） */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ overflow: 'visible' }}
      >
        {CALLOUTS.map((c) => (
          <line
            key={c.id}
            x1={`${c.dot.x}%`}     y1={`${c.dot.y}%`}
            x2={`${c.lineEnd.x}%`} y2={`${c.lineEnd.y}%`}
            stroke="#60a5fa"
            strokeWidth="1"
            strokeDasharray="4 3"
            opacity="0.7"
          />
        ))}
      </svg>

      {/* 点とラベル */}
      {CALLOUTS.map((c) => (
        <div key={c.id} className="pointer-events-none">
          {/* 青点 */}
          <span
            className="absolute w-2.5 h-2.5 rounded-full bg-blue-400 ring-4 ring-blue-400/30 -translate-x-1/2 -translate-y-1/2 z-10"
            style={{ left: `${c.dot.x}%`, top: `${c.dot.y}%` }}
          />
          {/* ラベル（写真外に出てもOK） */}
          <div className="absolute z-10" style={c.labelStyle}>
            <div className="bg-gray-900/90 border border-blue-800/50 rounded-md px-2 py-1 shadow-lg whitespace-nowrap">
              <p className="text-white text-[11px] font-semibold leading-tight">{c.text}</p>
              <p className="text-blue-300 text-[9px] leading-tight mt-0.5">{c.sub}</p>
            </div>
          </div>
        </div>
      ))}

      {/* ボード名バッジ */}
      <div className="absolute bottom-1.5 right-2 pointer-events-none z-10">
        <span className="bg-gray-900/70 border border-gray-700 rounded px-2 py-0.5 text-gray-400 text-[9px] font-mono">
          Arduino Uno Rev3
        </span>
      </div>
    </div>
  )
}
