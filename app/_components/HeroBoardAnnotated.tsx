'use client'
import { useState } from 'react'
import Image from 'next/image'

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
    <div className="w-full select-none">
      {/* 画像 + 注釈（相対コンテナ） */}
      <div
        className="relative w-full aspect-[4/3]"
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

        {/* 注釈線（デスクトップのみ） */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none hidden md:block"
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

        {/* 青点（常時） + ラベル（デスクトップのみ） */}
        {CALLOUTS.map((c) => (
          <div key={c.id} className="pointer-events-none">
            <span
              className="absolute w-2.5 h-2.5 rounded-full bg-blue-400 ring-4 ring-blue-400/30 -translate-x-1/2 -translate-y-1/2 z-10"
              style={{ left: `${c.dot.x}%`, top: `${c.dot.y}%` }}
            />
            <div className="absolute z-10 hidden md:block" style={c.labelStyle}>
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

      {/* 注釈リスト（スマホのみ） */}
      <div className="md:hidden mt-3 grid grid-cols-2 gap-1.5">
        {CALLOUTS.map((c) => (
          <div key={c.id} className="flex items-start gap-1.5 bg-gray-900/80 border border-blue-800/40 rounded-md px-2 py-1.5">
            <span className="mt-1 w-2 h-2 rounded-full bg-blue-400 shrink-0" />
            <div>
              <p className="text-white text-[11px] font-semibold leading-tight">{c.text}</p>
              <p className="text-blue-300 text-[9px] leading-tight mt-0.5">{c.sub}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
