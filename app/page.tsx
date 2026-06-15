import type { Metadata } from 'next'
import { ServicePageClient } from './_components/ServicePageClient'

export const metadata: Metadata = {
  title: 'Sparkia — EC向けAI商品提案サービス',
  description: 'お客様の用途・予算に合った商品をAIが自動提案する機能を、御社のECサイトに組み込みます。まずは無料でご相談ください。',
  alternates: { canonical: 'https://sparkia.jp' },
}

export default function HomePage() {
  return <ServicePageClient />
}
