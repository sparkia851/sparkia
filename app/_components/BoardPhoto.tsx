'use client'

import Image from 'next/image'
import { useState } from 'react'
import type { FormFactor } from '../_lib/recommend'

const FAMILY_BG: Record<FormFactor, string> = {
  Standard: 'linear-gradient(135deg,#1a3a1e 0%,#2d5a33 100%)',
  Nano:     'linear-gradient(135deg,#0c2e3a 0%,#1a5068 100%)',
  Mega:     'linear-gradient(135deg,#3a1a0a 0%,#6b3015 100%)',
  MKR:      'linear-gradient(135deg,#1e0a3a 0%,#3d1470 100%)',
  Portenta: 'linear-gradient(135deg,#2a1a00 0%,#5a3800 100%)',
  GIGA:     'linear-gradient(135deg,#1a0a3a 0%,#2e1060 100%)',
  Pico:     'linear-gradient(135deg,#3a0a0a 0%,#7a1f1f 100%)',
  DevKit:   'linear-gradient(135deg,#0a1a3a 0%,#1a3d6b 100%)',
  M5Stack:  'linear-gradient(135deg,#1a1a1a 0%,#3a3a3a 100%)',
}

export function BoardPhoto({
  imageUrl,
  name,
  formFactor,
  fillParent = false,
}: {
  imageUrl: string
  name: string
  formFactor: FormFactor
  fillParent?: boolean
}) {
  const [error, setError] = useState(false)

  return (
    <div
      className={`relative w-full overflow-hidden bg-gray-100 ${fillParent ? 'h-full' : 'rounded-t-lg'}`}
      style={fillParent ? undefined : { aspectRatio: '16/9' }}
    >
      {imageUrl && !error ? (
        <Image
          src={imageUrl}
          alt={name}
          fill
          sizes="(max-width: 768px) 100vw, 720px"
          className="object-contain p-4 bg-white"
          onError={() => setError(true)}
          unoptimized
        />
      ) : (
        <div
          className="absolute inset-0 flex flex-col items-center justify-center gap-2"
          style={{ background: FAMILY_BG[formFactor] }}
        >
          <span className="text-white/30 text-5xl font-black tracking-tighter">{formFactor}</span>
          <span className="text-white/20 text-xs font-mono uppercase tracking-widest">{name}</span>
        </div>
      )}
    </div>
  )
}
