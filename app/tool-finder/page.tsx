import type { Metadata } from 'next'
import { ToolFinderLanding } from '../_components/ToolFinderLanding'

export const metadata: Metadata = {
  title: 'Tool Finder — ECサイトにAI商品選定を追加 | Sparkia',
  description: '御社の商品カタログをAIで検索できるページをECサイトに追加。問い合わせ削減・コンバージョン改善を実現します。',
  alternates: { canonical: 'https://sparkia.jp/tool-finder' },
}

export default function ToolFinderPage() {
  return <ToolFinderLanding />
}
