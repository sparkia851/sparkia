import type { Metadata } from 'next'
import { headers } from 'next/headers'
import { TKTopClient } from '../_components/TKTopClient'
import { fetchTalpProducts } from '../_lib/talp-catalog'

export const metadata: Metadata = {
  title: 'AI 商品提案 | TALP KEYBOARD',
  description: 'キースイッチ・キーキャップ選びに迷ったら。TALP KEYBOARDのラインナップからAIが最適な商品を提案します。',
}

export default async function TalpKeyboardPage() {
  const [products, headersList] = await Promise.all([fetchTalpProducts(), headers()])
  const ua = headersList.get('user-agent') ?? ''
  const isMobileHint = /iPhone|iPod|Android|Mobile|BlackBerry|IEMobile/i.test(ua)
  return <TKTopClient products={products} isMobileHint={isMobileHint} />
}
