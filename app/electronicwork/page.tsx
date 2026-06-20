import type { Metadata } from 'next'
import { EWTopClient } from '../_components/EWTopClient'

export const metadata: Metadata = {
  title: 'AI 商品提案 | 電子工作ステーション',
  description: 'やりたいことを入力するだけ。電子工作ステーションのマイコン・センサーラインナップからAIが最適な商品を提案します。',
}

export default function ElectronicWorkPage() {
  return <EWTopClient />
}
