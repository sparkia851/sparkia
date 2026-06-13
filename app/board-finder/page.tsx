import type { Metadata } from 'next'
import { BFTopClient } from '../_components/BFTopClient'

export const metadata: Metadata = {
  title: 'Board Finder — マイコンボードAI選定ツール',
  description: '要件を入力するだけで最適なマイコンボードをAIが選定。Arduino・ESP32・Raspberry Pi Picoなど40種から即絞り込み。無料で使えるマイコン検索ツール。',
  alternates: { canonical: 'https://sparkia.jp/board-finder' },
}

export default function BoardFinderPage() {
  return <BFTopClient />
}
