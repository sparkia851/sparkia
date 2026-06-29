import Anthropic from '@anthropic-ai/sdk'
import { unstable_cache } from 'next/cache'
import { catalog } from './recommend'
import type { ArduinoBoard } from './recommend'

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY_BOARD })

const CATALOG_FOR_PROMPT = catalog.map(b => ({
  id: b.id,
  name: b.name,
  connectivity: b.connectivity,
  formFactor: b.formFactor,
  level: b.level,
  price: b.price,
  tags: b.tags,
  points: b.points,
}))

const SYSTEM_PROMPT = `あなたはマイコンボード選択の専門家です。ユーザーの要望を理解し、以下のカタログから最適なボードを最大5件推薦してください。

重要なルール：
- 「Xの代替」「Xじゃない」「X以外」という表現があればXに該当するボードを除外する
- 「ラズパイ」「Raspberry Pi」はformFactorが"Pico"のボード（RPi Picoシリーズ）を指す
- 抽象的な用途から必要スペックを推測する（例：「天気予報時計を作りたい」→WiFi接続＋ディスプレイ表示が必要）
- 関連性の低いボードは含めない

カタログ:
${JSON.stringify(CATALOG_FOR_PROMPT)}

reasonフィールドは、ユーザーの要望に直接応える形で「○○したいなら、〜だからこれがおすすめ」という自然な口調で2〜3文。堅すぎず、提案している感じで書くこと。

以下のJSONのみで回答（他のテキストは一切含めないこと）:
{"boards":[{"id":"board-id","reason":"..."}]}`

export type AIResult = ArduinoBoard & { rank: number; aiReason: string }

function normalizeQuery(q: string): string {
  return q.toLowerCase().replace(/[\s　]+/g, ' ').trim()
}

async function _recommendAI(query: string): Promise<AIResult[]> {
  const response = await client.messages.create({
    model: 'claude-sonnet-4-6',
    max_tokens: 1024,
    system: SYSTEM_PROMPT,
    messages: [{ role: 'user', content: query }],
  })

  const text = response.content[0].type === 'text' ? response.content[0].text : '{}'
  const parsed = JSON.parse(text) as { boards: { id: string; reason: string }[] }

  return parsed.boards
    .map((b, i) => {
      const board = catalog.find(c => c.id === b.id)
      if (!board) return null
      return { ...board, rank: i + 1, aiReason: b.reason }
    })
    .filter((b): b is AIResult => b !== null)
}

const getCachedRecommendation = unstable_cache(
  (query: string) => _recommendAI(query),
  ['recommend-ai'],
  { revalidate: 86400 },
)

export function recommendAI(query: string): Promise<AIResult[]> {
  return getCachedRecommendation(normalizeQuery(query))
}
