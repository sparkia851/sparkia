import type { Metadata } from 'next'
import { HomeClient } from './_components/HomeClient'

export const metadata: Metadata = {
  title: 'Sparkia — 電子工作・IoTのためのAIツール集',
  description: 'マイコンボード選定・電子部品検索など、電子工作・IoT開発を助けるAIツールを提供するプラットフォームです。',
}

export default function HomePage() {
  return <HomeClient />
}
