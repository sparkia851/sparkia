'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'

function FadeIn({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

function BrowserMockup() {
  return (
    <div
      style={{
        background: '#1e1e2e',
        borderRadius: 12,
        overflow: 'hidden',
        boxShadow: '0 32px 64px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.08)',
        maxWidth: 680,
        width: '100%',
      }}
    >
      {/* ブラウザバー */}
      <div style={{ background: '#2a2a3e', padding: '10px 16px', display: 'flex', alignItems: 'center', gap: 10 }}>
        <div style={{ display: 'flex', gap: 6 }}>
          {['#ff5f57', '#ffbd2e', '#28c840'].map(c => (
            <div key={c} style={{ width: 10, height: 10, borderRadius: '50%', background: c }} />
          ))}
        </div>
        <div style={{
          flex: 1,
          background: 'rgba(255,255,255,0.08)',
          borderRadius: 6,
          padding: '4px 12px',
          fontSize: 11,
          color: 'rgba(255,255,255,0.4)',
          textAlign: 'center',
        }}>
          あなたのサイト.jp / 電動工具レビュー
        </div>
      </div>

      {/* ページ内容 */}
      <div style={{ background: '#f8fafc', padding: '20px 24px' }}>
        {/* ブログっぽいヘッダー */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16, paddingBottom: 12, borderBottom: '1px solid #e2e8f0' }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: '#1e293b' }}>DIY工具レビュー.jp</div>
          <div style={{ display: 'flex', gap: 16, fontSize: 11, color: '#64748b' }}>
            <span>ホーム</span><span>レビュー</span><span>ランキング</span>
          </div>
        </div>

        {/* 記事タイトル */}
        <div style={{ fontSize: 16, fontWeight: 700, color: '#1e293b', marginBottom: 8 }}>
          【2026年版】電動工具 初心者おすすめランキング
        </div>
        <div style={{ fontSize: 11, color: '#94a3b8', marginBottom: 16 }}>
          2026.06.12 · 読了時間 8分
        </div>
        <div style={{ fontSize: 11, color: '#475569', lineHeight: 1.7, marginBottom: 20 }}>
          電動工具を初めて買うとき、どれを選べばいいか迷いますよね。ドリル・インパクト・丸ノコ…
          種類が多すぎて選べない方のために、AIがあなたの用途から最適な工具を提案します。
        </div>

        {/* ウィジェット */}
        <div
          style={{
            background: '#fff',
            border: '2px solid #3b82f6',
            borderRadius: 10,
            padding: '16px',
            position: 'relative',
            boxShadow: '0 4px 16px rgba(59,130,246,0.12)',
          }}
        >
          {/* ウィジェットラベル */}
          <div
            style={{
              position: 'absolute',
              top: -10,
              left: 16,
              background: '#3b82f6',
              color: '#fff',
              fontSize: 9,
              fontWeight: 700,
              padding: '2px 8px',
              borderRadius: 99,
              letterSpacing: '0.08em',
            }}
          >
            AI 工具セレクター（埋め込みウィジェット）
          </div>
          <div style={{ fontSize: 12, fontWeight: 600, color: '#1e293b', marginBottom: 8 }}>
            あなたに最適な工具を見つける
          </div>
          <div style={{ display: 'flex', gap: 6 }}>
            <div style={{
              flex: 1,
              border: '1px solid #cbd5e1',
              borderRadius: 6,
              padding: '7px 10px',
              fontSize: 11,
              color: '#94a3b8',
              background: '#f8fafc',
            }}>
              例：DIY初心者、棚を作りたい
            </div>
            <div style={{
              background: '#1d4ed8',
              color: '#fff',
              fontSize: 11,
              fontWeight: 600,
              padding: '7px 14px',
              borderRadius: 6,
            }}>
              検索
            </div>
          </div>
        </div>

        {/* 結果プレビュー（ぼかし） */}
        <div style={{ marginTop: 12, position: 'relative' }}>
          <div style={{ filter: 'blur(3px)', opacity: 0.5 }}>
            {[
              { rank: '1位', name: 'Makita DF333DSHX', score: '★★★★★', price: '約10,000円', badge: '#f59e0b' },
              { rank: '2位', name: 'Bosch EasyDrill 1200', score: '★★★★☆', price: '約7,000円', badge: '#94a3b8' },
            ].map(item => (
              <div key={item.rank} style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                padding: '8px 10px',
                background: '#fff',
                border: '1px solid #e2e8f0',
                borderRadius: 8,
                marginBottom: 6,
              }}>
                <div style={{ background: item.badge, color: '#fff', fontSize: 9, fontWeight: 800, padding: '2px 6px', borderRadius: 4 }}>
                  {item.rank}
                </div>
                <div style={{ flex: 1, fontSize: 11, fontWeight: 600, color: '#1e293b' }}>{item.name}</div>
                <div style={{ fontSize: 10, color: '#f59e0b' }}>{item.score}</div>
                <div style={{ fontSize: 10, color: '#64748b' }}>{item.price}</div>
                <div style={{ fontSize: 9, background: '#fef3c7', color: '#92400e', padding: '2px 6px', borderRadius: 4, fontWeight: 600 }}>
                  Amazon →
                </div>
              </div>
            ))}
          </div>
          {/* オーバーレイ：あなたのアフィリエイトタグ */}
          <div style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <div style={{
              background: 'rgba(30,41,59,0.92)',
              color: '#fff',
              fontSize: 11,
              fontWeight: 600,
              padding: '8px 16px',
              borderRadius: 8,
              backdropFilter: 'blur(4px)',
              textAlign: 'center',
              lineHeight: 1.6,
            }}>
              Amazonリンクには<br />
              <span style={{ color: '#fbbf24' }}>あなたのアフィリエイトタグ</span>が入ります
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function ToolFinderLanding() {
  return (
    <main>
      {/* Hero */}
      <section style={{ background: '#060810', color: '#fff', position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'linear-gradient(rgba(96,165,250,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(96,165,250,0.04) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }} />
        <div style={{
          position: 'absolute', top: '-30%', left: '30%',
          width: 600, height: 600,
          background: 'radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 65%)',
          pointerEvents: 'none',
        }} />
        <div className="max-w-5xl mx-auto px-4 py-16 md:py-24" style={{ position: 'relative' }}>
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div style={{
              display: 'inline-block',
              background: 'rgba(96,165,250,0.12)',
              border: '1px solid rgba(96,165,250,0.3)',
              color: '#60a5fa',
              fontSize: 11,
              fontWeight: 700,
              padding: '4px 14px',
              borderRadius: 99,
              letterSpacing: '0.1em',
              marginBottom: 24,
            }}>
              TOOL FINDER — 埋め込みAIウィジェット
            </div>
            <h1 className="text-3xl sm:text-5xl font-black leading-tight mb-6" style={{ letterSpacing: '-0.02em' }}>
              読者に工具を選ばせる。<br />
              <span style={{ color: '#60a5fa' }}>AIが、あなたのサイトで動く。</span>
            </h1>
            <p style={{ color: '#94a3b8', fontSize: 16, lineHeight: 1.7, maxWidth: 520, marginBottom: 36 }}>
              工具レビューブログに埋め込むだけ。読者が自分で最適な工具を見つけ、
              <span style={{ color: '#e2e8f0', fontWeight: 600 }}>あなたのアフィリエイトタグ</span>から購入する。
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <Link
                href="/tool-finder/search?q=DIY初心者、棚を作りたい"
                style={{
                  background: '#2563eb',
                  color: '#fff',
                  padding: '12px 28px',
                  borderRadius: 8,
                  fontWeight: 700,
                  fontSize: 14,
                  textDecoration: 'none',
                  display: 'inline-block',
                }}
              >
                デモを試す →
              </Link>
              <a
                href="https://twitter.com/sparkia_jp"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  color: '#e2e8f0',
                  padding: '12px 28px',
                  borderRadius: 8,
                  fontWeight: 600,
                  fontSize: 14,
                  textDecoration: 'none',
                  display: 'inline-block',
                }}
              >
                導入を相談する
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ブラウザモックアップ */}
      <section style={{ background: '#0f172a', padding: '64px 16px' }}>
        <FadeIn className="flex flex-col items-center">
          <p style={{ color: '#60a5fa', fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', marginBottom: 12, textAlign: 'center' }}>
            YOUR SITE — 導入イメージ
          </p>
          <h2 style={{ color: '#f1f5f9', fontSize: 24, fontWeight: 800, textAlign: 'center', marginBottom: 40 }}>
            あなたのサイトではこう見える
          </h2>
          <BrowserMockup />
        </FadeIn>
      </section>

      {/* 3つの価値 */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <FadeIn>
          <h2 className="text-2xl font-black text-center text-gray-900 mb-12">なぜ導入するのか</h2>
        </FadeIn>
        <div className="grid sm:grid-cols-3 gap-8">
          {[
            {
              icon: '💬',
              title: '問い合わせを削減',
              body: '「どれを買えばいいですか？」というコメント対応がなくなる。AIが24時間自動で答える。',
              delay: 0,
            },
            {
              icon: '💰',
              title: 'アフィリエイト収益',
              body: 'Amazonリンクにはあなたのアフィリエイトタグを使用。検索するたびに購買導線が生まれる。',
              delay: 0.1,
            },
            {
              icon: '⚡',
              title: 'サイトの差別化',
              body: '「AI選定機能付き」はまだ珍しい。同ジャンルのブログと明確に差別化できる。',
              delay: 0.2,
            },
          ].map(item => (
            <FadeIn key={item.title} delay={item.delay}>
              <div className="text-center p-6 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-shadow">
                <div style={{ fontSize: 36, marginBottom: 12 }}>{item.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.body}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* 料金 */}
      <section style={{ background: '#f8fafc' }} className="py-16 px-4">
        <div className="max-w-2xl mx-auto">
          <FadeIn>
            <h2 className="text-2xl font-black text-center text-gray-900 mb-10">料金</h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
              <div style={{ background: '#1d4ed8', padding: '20px 28px', color: '#fff' }}>
                <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.1em', opacity: 0.7, marginBottom: 4 }}>STANDARD PLAN</div>
                <div style={{ fontSize: 28, fontWeight: 800 }}>初期 50,000円 <span style={{ fontSize: 14, fontWeight: 400, opacity: 0.7 }}>+ 月額 5,000円</span></div>
              </div>
              <div style={{ padding: '24px 28px' }}>
                {[
                  'あなたのサイトに合わせたカスタマイズ',
                  'Amazonアフィリエイトタグの設定',
                  '商品カタログの初期セットアップ',
                  '月1回の商品情報アップデート',
                  'メールサポート',
                ].map(item => (
                  <div key={item} style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 12 }}>
                    <div style={{ width: 18, height: 18, borderRadius: '50%', background: '#dbeafe', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <span style={{ fontSize: 10, color: '#1d4ed8', fontWeight: 700 }}>✓</span>
                    </div>
                    <span style={{ fontSize: 13, color: '#374151' }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#060810', color: '#fff', padding: '64px 16px', textAlign: 'center' }}>
        <FadeIn>
          <h2 style={{ fontSize: 28, fontWeight: 800, marginBottom: 12 }}>まず無料でデモを試してください</h2>
          <p style={{ color: '#94a3b8', marginBottom: 32, fontSize: 14 }}>
            気に入ったら、Xでご連絡ください。あなたのサイト向けに調整したデモをお見せします。
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link
              href="/tool-finder/search?q=DIY初心者、棚を作りたい"
              style={{
                background: '#2563eb',
                color: '#fff',
                padding: '13px 32px',
                borderRadius: 8,
                fontWeight: 700,
                fontSize: 14,
                textDecoration: 'none',
              }}
            >
              デモを試す →
            </Link>
            <a
              href="https://twitter.com/sparkia_jp"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(255,255,255,0.15)',
                color: '#e2e8f0',
                padding: '13px 32px',
                borderRadius: 8,
                fontWeight: 600,
                fontSize: 14,
                textDecoration: 'none',
              }}
            >
              X（Twitter）で相談する
            </a>
          </div>
        </FadeIn>
      </section>
    </main>
  )
}
