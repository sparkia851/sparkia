import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Suspense } from 'react'
import { TKRankingCard } from '../../_components/TKRankingCard'
import { TKSearchTracker } from '../../_components/TKSearchTracker'
import { TKShopLink } from '../../_components/TKShopLink'
import { recommendAITK } from '../../_lib/recommend-ai-talp'
import type { AIResultTK } from '../../_lib/recommend-ai-talp'

const SERIF = 'var(--font-serif-jp), serif'

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>
}): Promise<Metadata> {
  const { q } = await searchParams
  return {
    title: q
      ? `「${q}」の提案結果 | TALP KEYBOARD AI提案`
      : 'AI 商品提案 | TALP KEYBOARD',
  }
}

// ── Results skeleton (shown while AI is computing) ────────────────────────────
function ResultsSkeleton() {
  return (
    <>
      <p style={{ margin: '12px 52px 0', fontSize: 11, color: '#bbb' }}>
        AIが仕様を読んで選定中… 少しお待ちください
      </p>
      <style>{`
        @keyframes tk-shimmer {
          0%, 100% { opacity: 0.4; }
          50%       { opacity: 0.85; }
        }
      `}</style>

      {/* Hero card skeleton */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          borderTop: '1px solid #ededed',
          borderBottom: '1px solid #ededed',
          minHeight: 340,
          marginTop: 40,
        }}
      >
        <div
          style={{
            background: '#f9f8f6',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            animation: 'tk-shimmer 1.8s ease-in-out infinite',
          }}
        >
          <div
            style={{ width: 160, height: 160, background: '#ede9e0', borderRadius: 3 }}
          />
        </div>
        <div
          style={{
            padding: '52px 52px 52px 48px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: 14,
          }}
        >
          <div style={{ display: 'flex', gap: 8 }}>
            <div style={{ width: 90, height: 26, background: '#f5f2ee', borderRadius: 100, animation: 'tk-shimmer 1.5s ease-in-out infinite' }} />
            <div style={{ width: 58, height: 26, background: '#f5f2ee', borderRadius: 100, animation: 'tk-shimmer 1.5s ease-in-out infinite 0.08s' }} />
          </div>
          <div style={{ width: '72%', height: 28, background: '#f0ece4', borderRadius: 2, animation: 'tk-shimmer 1.5s ease-in-out infinite 0.14s' }} />
          <div style={{ width: '88%', height: 13, background: '#f5f2ee', borderRadius: 2, animation: 'tk-shimmer 1.5s ease-in-out infinite 0.18s' }} />
          <div style={{ width: '72%', height: 13, background: '#f5f2ee', borderRadius: 2, animation: 'tk-shimmer 1.5s ease-in-out infinite 0.22s' }} />
          <div style={{ width: '60%', height: 13, background: '#f5f2ee', borderRadius: 2, animation: 'tk-shimmer 1.5s ease-in-out infinite 0.26s' }} />
        </div>
      </div>

      {/* Card list skeletons */}
      <div style={{ padding: '0 52px 80px' }}>
        <div style={{ width: 180, height: 9, background: '#f0ece4', borderRadius: 2, margin: '44px 0 20px', animation: 'tk-shimmer 1.5s ease-in-out infinite' }} />
        {[0, 0.07, 0.14, 0.21].map((d, i) => (
          <div
            key={i}
            style={{
              display: 'grid',
              gridTemplateColumns: '140px 1fr',
              border: '1px solid #efefef',
              borderRadius: 4,
              overflow: 'hidden',
              marginBottom: 14,
              animation: `tk-shimmer 1.5s ease-in-out infinite ${d}s`,
            }}
          >
            <div style={{ minHeight: 120, background: '#f9f8f6' }} />
            <div style={{ padding: '24px 28px', display: 'flex', flexDirection: 'column', gap: 12 }}>
              <div style={{ width: '52%', height: 16, background: '#f0ece4', borderRadius: 2 }} />
              <div style={{ width: '84%', height: 12, background: '#f5f2ee', borderRadius: 2 }} />
              <div style={{ width: '68%', height: 12, background: '#f5f2ee', borderRadius: 2 }} />
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

// ── Hero card ─────────────────────────────────────────────────────────────────
function HeroCard({ hero }: { hero: AIResultTK }) {
  return (
    <div
      className="tk-sh"
      style={{
        borderTop: '1px solid #ededed',
        borderBottom: '1px solid #ededed',
        minHeight: 340,
        marginTop: 40,
      }}
    >
      <div
        className="anim-hero-img tk-sh-img"
        style={{
          background: '#f6f4f0',
          padding: 52,
        }}
      >
        {hero.imageUrl ? (
          <div style={{ position: 'relative', width: 220, height: 220 }}>
            <Image
              src={hero.imageUrl}
              alt={hero.name}
              fill
              style={{
                objectFit: 'contain',
                filter: 'drop-shadow(0 20px 32px rgba(0,0,0,0.13))',
              }}
              sizes="220px"
              priority
            />
          </div>
        ) : (
          <div style={{ width: 220, height: 220, background: '#e8e4dc' }} />
        )}
      </div>

      <div
        className="anim-hero-body tk-sh-body"
        style={{
          padding: '52px 52px 52px 48px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <div style={{ display: 'flex', gap: 7, marginBottom: 16, flexWrap: 'wrap', alignItems: 'center' }}>
          <span
            style={{
              fontFamily: SERIF,
              fontSize: 13,
              color: '#b08d57',
              border: '1px solid #e0d8cc',
              borderRadius: 100,
              padding: '4px 14px',
            }}
          >
            Best Match
          </span>
          {hero.tags.slice(0, 3).map(tag => (
            <span
              key={tag}
              style={{
                fontSize: 9,
                border: '1px solid #e0d8cc',
                borderRadius: 100,
                padding: '2px 10px',
                color: '#a09080',
              }}
            >
              {tag}
            </span>
          ))}
        </div>
        <h2
          style={{
            margin: '0 0 6px',
            fontFamily: SERIF,
            fontSize: 24,
            fontWeight: 600,
            lineHeight: 1.45,
            color: '#16140f',
          }}
        >
          {hero.name}
        </h2>
        <p style={{ margin: '0 0 24px', fontSize: 13, color: '#555', lineHeight: 2.05 }}>
          {hero.aiReason}
        </p>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <span style={{ fontFamily: SERIF, fontSize: 24, color: '#16140f' }}>
            {hero.price}
          </span>
          <TKShopLink
            href={hero.shopUrl}
            productId={hero.id}
            productName={hero.name}
            rank={1}
            style={{
              fontSize: 12,
              fontWeight: 600,
              color: '#ffffff',
              background: '#16140f',
              borderRadius: 2,
              padding: '11px 24px',
              textDecoration: 'none',
              letterSpacing: '0.04em',
            }}
          >
            ショップで購入 →
          </TKShopLink>
        </div>
      </div>
    </div>
  )
}

// ── AI results (async — suspended until Claude responds) ──────────────────────
async function AIResults({ query }: { query: string }) {
  const results = await recommendAITK(query).catch(() => null)
  const hero = results?.[0] ?? null
  const rest = results?.slice(1) ?? []

  if (!results || results.length === 0) {
    return (
      <p style={{ padding: '48px 52px', fontSize: 14, color: '#a5a5a5' }}>
        該当する商品が見つかりませんでした。別のキーワードをお試しください。
      </p>
    )
  }

  return (
    <>
      {hero && <HeroCard hero={hero} />}

      {rest.length > 0 && (
        <div className="tk-sr" style={{ padding: '0 52px 100px' }}>
          <p
            style={{
              margin: '44px 0 20px',
              fontSize: 10,
              fontWeight: 600,
              letterSpacing: '0.28em',
              color: '#b08d57',
              textTransform: 'uppercase',
            }}
          >
            OTHER RECOMMENDATIONS
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {rest.map(p => (
              <TKRankingCard key={p.id} product={p} rank={p.rank} aiReason={p.aiReason} />
            ))}
          </div>
        </div>
      )}
    </>
  )
}

// ── Page (renders immediately — AI results are suspended) ─────────────────────
export default async function TKSearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>
}) {
  const { q } = await searchParams
  const query = typeof q === 'string' ? q.trim() : ''

  return (
    <main
      style={{
        background: '#ffffff',
        color: '#16140f',
        minHeight: '100vh',
        fontFamily: 'var(--font-jp), sans-serif',
      }}
    >
      <style>{`
        .tk-sh { display: grid; grid-template-columns: 1fr 1fr; }
        .tk-sh-img { display: flex; align-items: center; justify-content: center; }
        @media (max-width: 768px) {
          .tk-sh       { grid-template-columns: 1fr !important; }
          .tk-sh-img   { display: none !important; }
          .tk-sh-body  { padding: 32px 20px 36px !important; }
          .tk-sq       { padding: 40px 20px 0 !important; }
          .tk-sr       { padding: 0 20px 80px !important; }
          .tk-sf       { flex-direction: column !important; gap: 8px; padding: 28px 20px !important; text-align: center; }
          .tk-snav     { padding: 0 20px !important; }
        }
      `}</style>
      {/* ── NAV ──────────────────────────────────────────────────────────── */}
      <nav
        className="tk-snav"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          height: 64,
          background: 'rgba(255,255,255,0.94)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderBottom: '1px solid #ededed',
          display: 'flex',
          alignItems: 'center',
          padding: '0 52px',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <Link
            href="/talpkeyboard"
            style={{
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: '0.2em',
              color: '#16140f',
              textDecoration: 'none',
            }}
          >
            TALP KEYBOARD
          </Link>
          <span style={{ display: 'inline-block', width: 1, height: 14, background: '#ededed' }} />
          <span style={{ fontSize: 11, color: '#aaa' }}>AI 商品提案</span>
        </div>
        <Link
          href="/talpkeyboard"
          style={{ fontSize: 11, color: '#b08d57', textDecoration: 'none', letterSpacing: '0.04em' }}
        >
          ← トップに戻る
        </Link>
      </nav>

      {/* ── Content ──────────────────────────────────────────────────────── */}
      <div style={{ paddingTop: 64 }}>

        {/* Fires GA4 search event */}
        {query && <TKSearchTracker query={query} />}

        {/* Query header — rendered immediately */}
        <div className="anim-query tk-sq" style={{ padding: '60px 52px 0' }}>
          <p
            style={{
              margin: '0 0 14px',
              fontSize: 10,
              fontWeight: 600,
              letterSpacing: '0.3em',
              color: '#b08d57',
              textTransform: 'uppercase',
            }}
          >
            AI RECOMMENDATION
          </p>
          <h1
            style={{
              margin: 0,
              fontFamily: SERIF,
              fontSize: 'clamp(28px,4vw,40px)',
              fontWeight: 500,
              color: '#16140f',
              lineHeight: 1.3,
            }}
          >
            「{query}」
          </h1>
          <p style={{ margin: '10px 0 0', fontSize: 11, color: '#999' }}>
            ※ AIによる提案のため、内容に誤りが含まれる場合があります
          </p>
        </div>

        {/* Results — suspended until Claude responds */}
        {query ? (
          <Suspense fallback={<ResultsSkeleton />}>
            <AIResults query={query} />
          </Suspense>
        ) : null}

        {/* Footer */}
        <footer
          className="tk-sf"
          style={{
            borderTop: '1px solid #ededed',
            padding: '28px 52px',
            display: 'flex',
            flexDirection: 'column',
            gap: 10,
          }}
        >
          <p style={{ margin: 0, fontSize: 9, color: '#ccc', lineHeight: 1.7, textAlign: 'center' }}>
            本機能は試験提供中のため、システム障害、外部サービスの仕様変更、利用集中、運用コストの増加その他の事情により、予告なく一時停止または提供を終了する場合があります。
          </p>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 8 }}>
            <span style={{ fontSize: 10, color: '#ccc' }}>
              掲載価格・在庫は変動する場合があります。最新情報はTALP KEYBOARDのショップページをご確認ください。
            </span>
            <span style={{ fontSize: 10, color: '#ccc', letterSpacing: '0.08em' }}>
              TALP KEYBOARD AI 商品提案 POWERED BY SPARKIA
            </span>
          </div>
        </footer>

      </div>
    </main>
  )
}
