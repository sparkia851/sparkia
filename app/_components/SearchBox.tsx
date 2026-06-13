'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

const EXAMPLES = [
  'Lチカや入門に使いたい',
  'Wi-Fiでデータを送りたい',
  'USBキーボードとして動かしたい',
  'LoRaで長距離通信したい',
  '小型・省スペースで使いたい',
  'IMUセンサーと機械学習',
]

export function SearchBox({
  defaultValue = '',
  compact = false,
  searchPath = '/search',
  dark = false,
}: {
  defaultValue?: string
  compact?: boolean
  searchPath?: string
  dark?: boolean
}) {
  const router = useRouter()
  const [value, setValue] = useState(defaultValue)

  return (
    <div className={compact ? '' : 'w-full'}>
      <form onSubmit={e => {
        e.preventDefault()
        const q = value.trim()
        if (q) router.push(`${searchPath}?q=${encodeURIComponent(q)}`)
      }} className="flex gap-2">
        <input
          type="text"
          value={value}
          onChange={e => setValue(e.target.value)}
          placeholder="例：Wi-Fi対応、Lチカ入門、USBキーボード、省スペース..."
          className={`flex-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${compact ? 'px-3 py-2 text-sm' : 'px-4 py-3 text-base'} ${dark ? 'bg-white/5 border-white/10 text-gray-100 placeholder:text-gray-500' : 'bg-white border-gray-300 text-gray-900 placeholder:text-gray-400'}`}
        />
        <button
          type="submit"
          className={`shrink-0 bg-blue-700 text-white font-medium rounded-md hover:bg-blue-800 active:bg-blue-900 transition-colors ${compact ? 'px-4 py-2 text-sm' : 'px-6 py-3 text-base'}`}
        >
          検索
        </button>
      </form>
      {!compact && (
        <div className="mt-3 flex flex-wrap gap-2">
          {EXAMPLES.map(ex => (
            <button
              key={ex}
              type="button"
              onClick={() => {
                setValue(ex)
                router.push(`${searchPath}?q=${encodeURIComponent(ex)}`)
              }}
              className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${dark ? 'border-white/10 text-slate-500 hover:text-gray-100 hover:border-white/20 bg-white/[0.03]' : 'border-gray-300 text-gray-600 hover:border-blue-400 hover:text-blue-700 bg-white'}`}
            >
              {ex}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
