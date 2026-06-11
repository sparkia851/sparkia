import type { Metadata } from 'next'
import { ToolFinderLanding } from '../_components/ToolFinderLanding'

export const metadata: Metadata = {
  title: 'Tool Finder — AIで工具を選ぶ、あなたのサイトに | Sparkia',
  description: '電動工具AI選定ウィジェット。アフィリエイトブログに埋め込むだけで読者が最適な工具を自分で選べる。',
  alternates: { canonical: 'https://sparkia.jp/tool-finder' },
}

export default function ToolFinderPage() {
  return <ToolFinderLanding />
}
