import type { Metadata } from 'next'
import { SearchBox } from '../../_components/SearchBox'
import { ToolResultsClient } from '../../_components/ToolResultsClient'
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
          <ToolResultsClient results={results} query={query} />
        ) : (
          <p className="text-gray-500 text-sm">検索キーワードを入力してください。</p>
        )}
      </div>
    </main>
  )
}
