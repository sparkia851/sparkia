import Anthropic from '@anthropic-ai/sdk'
import { unstable_cache } from 'next/cache'
import { catalog } from './recommend-ew'
import type { EWProduct } from './recommend-ew'

const client = new Anthropic()

const CATALOG_FOR_PROMPT = catalog.map(p => ({
  id: p.id,
  category: p.category,
  name: p.name,
  level: p.level,
  price: p.price,
  tags: p.tags,
  points: p.points,
  connectivity: p.connectivity,
  interface: p.interface,
  measureTarget: p.measureTarget,
}))

const SYSTEM_PROMPT = `あなたは電子工作の部品選択の専門家です。ユーザーの要望を理解し、以下のカタログから最適な商品を最大5件推薦してください。カタログにはマイコン（開発ボード）とセンサーの両方が含まれます。

重要なルール：
- ユーザーが「測りたい・検知したい」ならセンサーを、「作りたい・制御したい」ならマイコンを優先する
- 用途によってはマイコンとセンサーを組み合わせて推薦してよい（ただし5件以内）
- 価格・難易度・用途が合っているものを選ぶ
- 関連性の低い商品は含めない

カタログ:
${JSON.stringify(CATALOG_FOR_PROMPT)}

reasonフィールドは、ユーザーの要望に直接応える形で「○○したいなら、〜だからこれがおすすめ」という自然な口調で2〜3文。堅すぎず、提案している感じで書くこと。

以下のJSONのみで回答（他のテキストは一切含めないこと）:
{"products":[{"id":"product-id","reason":"..."}]}`

export type AIResultEW = EWProduct & { rank: number; aiReason: string }

function normalizeQuery(q: string): string {
  return q.toLowerCase().replace(/[\s　]+/g, ' ').trim()
}

async function _recommendAI(query: string): Promise<AIResultEW[]> {
  const response = await client.messages.create({
    model: 'claude-sonnet-4-6',
    max_tokens: 1024,
    system: SYSTEM_PROMPT,
    messages: [{ role: 'user', content: query }],
  })

  const text = response.content[0].type === 'text' ? response.content[0].text : '{}'
  const parsed = JSON.parse(text) as { products: { id: string; reason: string }[] }

  return parsed.products
    .map((p, i) => {
      const product = catalog.find(c => c.id === p.id)
      if (!product) return null
      return { ...product, rank: i + 1, aiReason: p.reason }
    })
    .filter((p): p is AIResultEW => p !== null)
}

const getCachedRecommendation = unstable_cache(
  (query: string) => _recommendAI(query),
  ['recommend-ai-ew'],
  { revalidate: 86400 },
)

export function recommendAIEW(query: string): Promise<AIResultEW[]> {
  return getCachedRecommendation(normalizeQuery(query))
}
