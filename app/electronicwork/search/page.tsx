import type { Metadata } from 'next'
import Link from 'next/link'
import { EWRankingCard } from '../../_components/EWRankingCard'
import { recommend } from '../../_lib/recommend-ew'
import { recommendAIEW } from '../../_lib/recommend-ai-ew'

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>
}): Promise<Metadata> {
  const { q } = await searchParams
  return {
    title: q
      ? `「${q}」の提案結果 | 電子工作ステーション AI提案`
      : 'AI 商品提案 | 電子工作ステーション',
  }
}

export default async function EWSearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>
}) {
  const { q } = await searchParams
  const query = typeof q === 'string' ? q.trim() : ''

  const aiResults = query ? await recommendAIEW(query).catch(() => null) : null
  const results = aiResults ?? recommend(query)

  return (
    <main style={{ minHeight: '100vh', background: '#fafaf8' }}>
      <div style={{ maxWidth: 720, margin: '0 auto', padding: '0 16px 80px' }}>

        {/* header */}
        <div style={{
          padding: '20px 0 16px',
          borderBottom: '1px solid #f3f4f6',
          marginBottom: 24,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 12,
        }}>
          <Link
            href="/electronicwork"
            style={{
              fontSize: 12, fontWeight: 600,
              color: '#f97316', textDecoration: 'none',
              display: 'flex', alignItems: 'center', gap: 4,
              flexShrink: 0,
            }}
          >
            ← 戻る
          </Link>
          <span style={{
            fontSize: 11, fontWeight: 700, letterSpacing: '0.06em',
            color: '#f97316', background: '#fff7ed',
            border: '1px solid #fed7aa',
            padding: '3px 12px', borderRadius: 20,
            flexShrink: 0,
          }}>
            電子工作ステーション × AI 提案
          </span>
        </div>

        {query ? (
          <>
            {/* query display */}
            <div style={{ marginBottom: 20 }}>
              <p style={{ margin: 0, fontSize: 14, color: '#6b7280' }}>
                「<span style={{ fontWeight: 700, color: '#111827' }}>{query}</span>」
                <span style={{ marginLeft: 6 }}>に最適な商品 — {results.length}件</span>
              </p>
            </div>

            {/* results */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {results.map(p => (
                <EWRankingCard
                  key={p.id}
                  product={p}
                  rank={p.rank}
                  aiReason={'aiReason' in p ? String((p as { aiReason: string }).aiReason) : undefined}
                />
              ))}
            </div>

            {/* disclaimer */}
            <p style={{
              marginTop: 32, fontSize: 11, textAlign: 'center',
              color: '#9ca3af', lineHeight: 1.8,
            }}>
              ※ 掲載価格・在庫は変動する場合があります。<br />
              最新情報は電子工作ステーションのショップページをご確認ください。
            </p>
          </>
        ) : (
          <p style={{ fontSize: 14, color: '#6b7280' }}>
            検索キーワードを入力してください。
          </p>
        )}

      </div>
    </main>
  )
}
