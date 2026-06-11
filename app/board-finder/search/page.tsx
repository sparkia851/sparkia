import type { Metadata } from 'next'
import { SearchBox } from '../../_components/SearchBox'
import { RankingCard } from '../../_components/RankingCard'
import { recommend } from '../../_lib/recommend'
import { recommendAI } from '../../_lib/recommend-ai'

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>
}): Promise<Metadata> {
  const { q } = await searchParams
  return {
    title: q ? `「${q}」の検索結果 | Board Finder` : 'Board Finder | Sparkia',
  }
}

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>
}) {
  const { q } = await searchParams
  const query = typeof q === 'string' ? q.trim() : ''

  const aiResults = query ? await recommendAI(query).catch(() => null) : null
  const results = aiResults ?? recommend(query)

  return (
    <main className="pcb-bg min-h-screen">
      <div className="max-w-3xl mx-auto px-4 py-8">
      <div className="mb-6">
        <SearchBox defaultValue={query} compact searchPath="/board-finder/search" />
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
            {results.map(mc => (
              <RankingCard
                key={mc.id}
                mc={mc}
                rank={mc.rank}
                aiReason={'aiReason' in mc ? String(mc.aiReason) : undefined}
              />
            ))}
          </div>

          <p className="mt-8 text-xs text-gray-400 text-center leading-relaxed">
            ※ 掲載スペック・価格は参考値です。最新情報は各ボードの公式ページをご確認ください。<br />
            ※ 本ツールはプロトタイプ版です。対応ボードは順次拡充予定。
          </p>
        </>
      ) : (
        <p className="text-gray-500 text-sm">検索キーワードを入力してください。</p>
      )}
      </div>
    </main>
  )
}
