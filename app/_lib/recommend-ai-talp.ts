import Anthropic from '@anthropic-ai/sdk'
import { unstable_cache } from 'next/cache'
import { fetchTalpProducts } from './talp-catalog'
import type { TKProduct } from './talp-catalog'

const client = new Anthropic()

export type AIResultTK = TKProduct & { rank: number; aiReason: string }

// Section headers that begin a redundant bullet/table repeat of earlier spec content
const REDUNDANT_SECTIONS = [' 概要 ', ' 仕様 ', ' 主な特徴 ', ' 特徴 ', ' セット内容 ', ' 内容物 ']

function buildCatalogText(products: TKProduct[]): string {
  return products.map(p => {
    let spec = p.description
    // description starts with the exact product name — remove that echo
    if (spec.startsWith(p.name)) spec = spec.slice(p.name.length).trimStart()
    // Cut before any section that merely repeats earlier content as bullets/table
    const cuts = REDUNDANT_SECTIONS.map(s => spec.indexOf(s)).filter(i => i > 20)
    const cut = cuts.length > 0 ? Math.min(...cuts) : Infinity
    spec = (isFinite(cut) ? spec.slice(0, cut) : spec.slice(0, 260)).trim()
    return `[${p.id}] ${p.name} [${p.tags.join(',')}] ${p.price} — ${spec}`
  }).join('\n')
}

const SYSTEM_INTRO = `あなたは自作キーボードパーツの専門家です。ユーザーの要望を理解し、以下のカタログから最適な商品を最大5件推薦してください。

重要なルール：
- スイッチの種類（リニア・タクタイル・クリッキー・サイレント）、打鍵感、重さ（gf）、素材、ルブ状態を考慮する
- キーキャップはプロファイル（DSA/SA/XDA/Cherry/OEM/KAT）・素材（PBT/ABS）・カラーを考慮する
- 仕様表の数値（アクチュエーションポイント、トラベル、スプリング重量）を根拠として使う
- 「初心者」「入門」ならシンプルで扱いやすいものを優先する
- 価格・用途が合っているものを選ぶ
- 関連性の低い商品は含めない

reasonフィールドは、商品説明文の具体的な仕様・特徴を引用しながら「〜したいなら、〜だからこれがおすすめ」という自然な口調で2〜3文。

以下のJSONのみで回答（他のテキストは一切含めないこと）:
{"products":[{"id":"product-handle","reason":"..."}]}

---カタログ---
`

function normalizeQuery(q: string): string {
  return q.toLowerCase().replace(/[\s　]+/g, ' ').trim()
}

async function _recommendAI(query: string): Promise<AIResultTK[]> {
  const products = await fetchTalpProducts()
  const catalogText = buildCatalogText(products)

  const params = {
    model: 'claude-haiku-4-5-20251001',
    max_tokens: 1024,
    system: [
      {
        type: 'text' as const,
        text: SYSTEM_INTRO + catalogText,
        cache_control: { type: 'ephemeral' as const, ttl: '1h' as const },
      },
    ],
    messages: [{ role: 'user' as const, content: query }],
  }

  let response
  try {
    response = await client.messages.create(params)
  } catch (err: unknown) {
    if ((err as { status?: number })?.status === 429) {
      await new Promise(r => setTimeout(r, 3000))
      response = await client.messages.create(params)
    } else {
      throw err
    }
  }

  const raw = response.content[0].type === 'text' ? response.content[0].text : '{}'
  const match = raw.match(/\{[\s\S]*\}/)
  const parsed = JSON.parse(match ? match[0] : '{}') as { products: { id: string; reason: string }[] }

  return parsed.products
    .map((p, i) => {
      const product = products.find(c => c.id === p.id)
      if (!product) return null
      return { ...product, rank: i + 1, aiReason: p.reason }
    })
    .filter((p): p is AIResultTK => p !== null)
}

const getCachedRecommendation = unstable_cache(
  (query: string) => _recommendAI(query),
  ['recommend-ai-talp'],
  { revalidate: 86400 },
)

export function recommendAITK(query: string): Promise<AIResultTK[]> {
  return getCachedRecommendation(normalizeQuery(query))
}
