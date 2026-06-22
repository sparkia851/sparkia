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
    <main className="ew-section-cream" style={{ minHeight: '100vh' }}>
      <div style={{ maxWidth: 720, margin: '0 auto', padding: '0 20px 80px' }}>

        {/* header */}
        <div style={{
          padding: '24px 0 20px',
          marginBottom: 36,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottom: '1px solid #e2d8ca',
        }}>
          <Link href="/electronicwork" style={{
            fontSize: 12,
            color: '#b5a090',
            textDecoration: 'none',
            letterSpacing: '0.04em',
          }}>
            ← 戻る
          </Link>
          <span style={{
            fontSize: 10,
            fontWeight: 700,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: '#c8bba8',
          }}>
            電子工作ステーション&ensp;/&ensp;AI 提案
          </span>
        </div>

        {query ? (
          <>
            {/* query label */}
            <div style={{ marginBottom: 28 }}>
              <p style={{ margin: '0 0 6px', fontSize: 10, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#c8bba8' }}>
                AI Recommendation
              </p>
              <h1 style={{
                margin: 0,
                fontSize: 'clamp(20px,4vw,28px)',
                fontWeight: 700,
                color: '#1c1410',
                letterSpacing: '-0.02em',
                lineHeight: 1.3,
                fontFamily: 'var(--font-serif-jp), serif',
              }}>
                「{query}」
              </h1>
              <p style={{ margin: '8px 0 0', fontSize: 12, color: '#b5a090', letterSpacing: '0.02em' }}>
                {results.length}件の提案
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
              marginTop: 36,
              fontSize: 11,
              textAlign: 'center',
              color: '#c8bba8',
              lineHeight: 1.8,
              letterSpacing: '0.02em',
            }}>
              掲載価格・在庫は変動する場合があります。<br />
              最新情報は電子工作ステーションのショップページをご確認ください。
            </p>
          </>
        ) : (
          <p style={{ fontSize: 14, color: '#b5a090' }}>
            検索キーワードを入力してください。
          </p>
        )}

      </div>
    </main>
  )
}
