import type { Metadata } from 'next'
import { TKTopClient } from '../_components/TKTopClient'
import { fetchTalpProducts } from '../_lib/talp-catalog'

export const metadata: Metadata = {
  title: 'AI 商品提案 | TALP KEYBOARD',
  description: 'キースイッチ・キーキャップ選びに迷ったら。TALP KEYBOARDのラインナップからAIが最適な商品を提案します。',
}

export default async function TalpKeyboardPage() {
  const products = await fetchTalpProducts()
  return <TKTopClient products={products} />
}
