import type { Metadata } from 'next'
import { SearchBox } from '../../_components/SearchBox'
import { ToolCard } from '../../_components/ToolCard'
import { recommendToolAI } from '../../_lib/tool-recommend-ai'

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>
}): Promise<Metadata> {
  const { q } = await searchParams
  return {
    title: q ? `「${q}」の検索結果 | Tool Finder` : 'Tool Finder | Sparkia',
  }
}

export default async function ToolSearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>
}) {
  const { q } = await searchParams
  const query = typeof q === 'string' ? q.trim() : ''

  const results = query ? await recommendToolAI(query).catch(() => []) : []

  return (
    <main className="pcb-bg min-h-screen">
      <div className="max-w-3xl mx-auto px-4 py-8">
        <div className="mb-6">
          <SearchBox defaultValue={query} compact searchPath="/tool-finder/search" />
        </div>

        {query ? (
          <>
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm text-gray-500">
                「<span className="font-semibold text-gray-800">{query}</span>」の検索結果
                <span className="ml-2 text-gray-400">— {results.length}件</span>
              </p>
            </div>

            <div className="space-y-4">
              {results.map(tool => (
                <ToolCard
                  key={tool.id}
                  tool={tool}
                  rank={tool.rank}
                  aiReason={tool.aiReason}
                />
              ))}
            </div>

            <p className="mt-8 text-xs text-gray-400 text-center leading-relaxed">
              ※ 掲載スペック・価格は参考値です。最新情報はAmazonの商品ページをご確認ください。
            </p>
          </>
        ) : (
          <p className="text-gray-500 text-sm">検索キーワードを入力してください。</p>
        )}
      </div>
    </main>
  )
}
