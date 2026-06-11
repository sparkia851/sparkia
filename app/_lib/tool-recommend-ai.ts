import Anthropic from '@anthropic-ai/sdk'
import { toolCatalog } from './tool-catalog'
import type { Tool } from './tool-catalog'

const client = new Anthropic()

const CATALOG_FOR_PROMPT = toolCatalog.map(t => ({
  id: t.id,
  name: t.name,
  brand: t.brand,
  category: t.category,
  powerSource: t.powerSource,
  voltageOrWatt: t.voltageOrWatt,
  level: t.level,
  price: t.price,
  tags: t.tags,
  points: t.points,
}))

const SYSTEM_PROMPT = `あなたは電動工具選択の専門家です。ユーザーの要望を理解し、以下のカタログから最適な工具を最大5件推薦してください。

重要なルール：
- 初心者・入門向けの要望にはlevelがbeginnerのものを優先する
- 屋外・現場作業にはコードレス（バッテリー式）を優先する
- 予算が明示された場合はそれに合わせる
- 関連性の低い工具は含めない

カタログ:
${JSON.stringify(CATALOG_FOR_PROMPT)}

reasonフィールドは、ユーザーの要望に直接応える形で「○○したいなら、〜だからこれがおすすめ」という自然な口調で2〜3文。

以下のJSONのみで回答（他のテキストは一切含めないこと）:
{"tools":[{"id":"tool-id","reason":"..."}]}`

export type AIToolResult = Tool & { rank: number; aiReason: string }

export async function recommendToolAI(query: string): Promise<AIToolResult[]> {
  const response = await client.messages.create({
    model: 'claude-sonnet-4-6',
    max_tokens: 1024,
    system: SYSTEM_PROMPT,
    messages: [{ role: 'user', content: query }],
  })

  const text = response.content[0].type === 'text' ? response.content[0].text : '{}'
  const parsed = JSON.parse(text) as { tools: { id: string; reason: string }[] }

  return parsed.tools
    .map((t, i) => {
      const tool = toolCatalog.find(c => c.id === t.id)
      if (!tool) return null
      return { ...tool, rank: i + 1, aiReason: t.reason }
    })
    .filter((t): t is AIToolResult => t !== null)
}
