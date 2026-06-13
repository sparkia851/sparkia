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

function StatCard({ value, label, sub, color }: { value: string; label: string; sub?: string; color: string }) {
  return (
    <div style={{ textAlign: 'center', padding: '20px 16px' }}>
      <div style={{ fontSize: 36, fontWeight: 900, color, lineHeight: 1, marginBottom: 6 }}>{value}</div>
      <div style={{ fontSize: 13, fontWeight: 700, color: '#1e293b', marginBottom: 2 }}>{label}</div>
      {sub && <div style={{ fontSize: 11, color: '#94a3b8' }}>{sub}</div>}
    </div>
  )
}

function StepFlow() {
  return (
    <div className="grid sm:grid-cols-3 gap-4">
      <FadeIn delay={0}>
        <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: 12, overflow: 'hidden', boxShadow: '0 2px 12px rgba(0,0,0,0.05)' }}>
          <div style={{ background: '#f0f9ff', padding: '12px 16px', borderBottom: '1px solid #bae6fd' }}>
            <div style={{ fontSize: 10, fontWeight: 700, color: '#0284c7', letterSpacing: '0.08em', marginBottom: 4 }}>STEP 1 — お客様がサイトを訪れる</div>
            <div style={{ fontSize: 12, fontWeight: 600, color: '#0c4a6e' }}>商品が多すぎて選べない</div>
          </div>
          <div style={{ padding: '14px 16px' }}>
            <div style={{ fontSize: 11, color: '#475569', lineHeight: 1.7, marginBottom: 12 }}>
              「どれが自分に合うのかわからない」——そのまま離脱するお客様が多い。
            </div>
            <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: 8, padding: '10px 12px' }}>
              <div style={{ fontSize: 10, color: '#64748b', marginBottom: 6 }}>— よくある状況 —</div>
              <div style={{ fontSize: 11, color: '#334155', lineHeight: 1.6 }}>
                「電動ドリルが欲しいけど種類が多すぎる。どれを選べばいいか分からない。」
              </div>
            </div>
          </div>
        </div>
      </FadeIn>

      <FadeIn delay={0.1}>
        <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: 12, overflow: 'hidden', boxShadow: '0 2px 12px rgba(0,0,0,0.05)' }}>
          <div style={{ background: '#f0fdf4', padding: '12px 16px', borderBottom: '1px solid #86efac' }}>
            <div style={{ fontSize: 10, fontWeight: 700, color: '#16a34a', letterSpacing: '0.08em', marginBottom: 4 }}>STEP 2 — AI検索ボックスに入力</div>
            <div style={{ fontSize: 12, fontWeight: 600, color: '#14532d' }}>用途をそのまま書くだけでOK</div>
          </div>
          <div style={{ padding: '14px 16px' }}>
            <div style={{ fontSize: 11, color: '#475569', lineHeight: 1.7, marginBottom: 12 }}>
              難しい操作は不要。スペックを知らなくてもAIが条件を整理して選んでくれる。
            </div>
            <div style={{ border: '2px solid #3b82f6', borderRadius: 8, overflow: 'hidden' }}>
              <div style={{ padding: '8px 12px', background: '#f8fafc', fontSize: 11, color: '#1e293b', borderBottom: '1px solid #e2e8f0' }}>
                DIY初心者、棚を作りたい、予算1万円以内
              </div>
              <div style={{ background: '#2563eb', color: '#fff', textAlign: 'center', padding: '8px', fontSize: 11, fontWeight: 700 }}>
                AIで探す →
              </div>
            </div>
          </div>
        </div>
      </FadeIn>

      <FadeIn delay={0.2}>
        <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: 12, overflow: 'hidden', boxShadow: '0 2px 12px rgba(0,0,0,0.05)' }}>
          <div style={{ background: '#fffbeb', padding: '12px 16px', borderBottom: '1px solid #fcd34d' }}>
            <div style={{ fontSize: 10, fontWeight: 700, color: '#d97706', letterSpacing: '0.08em', marginBottom: 4 }}>STEP 3 — 最適な商品が表示される</div>
            <div style={{ fontSize: 12, fontWeight: 600, color: '#78350f' }}>御社の商品からAIが選んで提示</div>
          </div>
          <div style={{ padding: '14px 16px' }}>
            <div style={{ fontSize: 11, color: '#475569', lineHeight: 1.7, marginBottom: 10 }}>
              自社カタログの中からランキング形式で提案。お客様が迷わず購入へ進む。
            </div>
            {[
              { rank: '1位', name: 'Makita DF333DSHX', price: '¥10,800', color: '#f59e0b' },
              { rank: '2位', name: 'Bosch EasyDrill 1200', price: '¥7,200', color: '#94a3b8' },
            ].map(item => (
              <div key={item.rank} style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 6, padding: '6px 8px', background: '#f8fafc', borderRadius: 6, border: '1px solid #e2e8f0' }}>
                <div style={{ background: item.color, color: '#fff', fontSize: 8, fontWeight: 800, padding: '2px 5px', borderRadius: 3, flexShrink: 0 }}>{item.rank}</div>
                <div style={{ flex: 1, fontSize: 10, fontWeight: 600, color: '#1e293b' }}>{item.name}</div>
                <div style={{ fontSize: 10, color: '#64748b' }}>{item.price}</div>
                <div style={{ background: '#16a34a', color: '#fff', fontSize: 8, fontWeight: 700, padding: '2px 5px', borderRadius: 3 }}>購入へ</div>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>
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
        <div style={{ position: 'absolute', top: '-20%', right: '20%', width: 500, height: 500, background: 'radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 65%)', pointerEvents: 'none' }} />
        <div className="max-w-5xl mx-auto px-4 py-16 md:py-24" style={{ position: 'relative' }}>
          <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div style={{ display: 'inline-block', background: 'rgba(96,165,250,0.12)', border: '1px solid rgba(96,165,250,0.3)', color: '#60a5fa', fontSize: 11, fontWeight: 700, padding: '4px 14px', borderRadius: 99, letterSpacing: '0.1em', marginBottom: 24 }}>
              TOOL FINDER — EC向けAI商品選定ツール
            </div>
            <h1 className="text-3xl sm:text-5xl font-black leading-tight mb-6" style={{ letterSpacing: '-0.02em' }}>
              「どれを選べばいい？」を<br />
              <span style={{ color: '#60a5fa' }}>AIが自動で答えます。</span>
            </h1>
            <p style={{ color: '#94a3b8', fontSize: 16, lineHeight: 1.7, maxWidth: 520, marginBottom: 36 }}>
              御社の商品カタログを読み込んだAIが、お客様の用途・予算・スキルに合った商品を提案。
              <span style={{ color: '#e2e8f0', fontWeight: 600 }}>問い合わせ対応の工数を削減し、コンバージョンを改善</span>します。
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <Link href="/tool-finder/search?q=DIY初心者、棚を作りたい" style={{ background: '#2563eb', color: '#fff', padding: '12px 28px', borderRadius: 8, fontWeight: 700, fontSize: 14, textDecoration: 'none' }}>
                デモを試す →
              </Link>
              <a href="https://twitter.com/sparkia_jp" target="_blank" rel="noopener noreferrer" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', color: '#e2e8f0', padding: '12px 28px', borderRadius: 8, fontWeight: 600, fontSize: 14, textDecoration: 'none' }}>
                導入を相談する
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 架空事例：中野金物店 */}
      <section style={{ background: '#f8fafc' }} className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
              <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'linear-gradient(135deg, #1d4ed8, #7c3aed)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, flexShrink: 0 }}>
                🔧
              </div>
              <div>
                <div style={{ fontSize: 11, color: '#64748b', fontWeight: 600 }}>架空の導入事例</div>
                <div style={{ fontSize: 18, fontWeight: 800, color: '#1e293b' }}>工具専門EC「中野金物店ネットショップ」（仮）の場合</div>
              </div>
            </div>
            <div style={{ fontSize: 13, color: '#64748b', marginBottom: 32, paddingLeft: 60 }}>
              取扱商品120点のプロ・DIY向け工具EC。電話とメールで問い合わせ対応をしながら運営していた。
            </div>
          </FadeIn>

          {/* Before / After */}
          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            <FadeIn delay={0}>
              <div style={{ background: '#fff', border: '1px solid #fecaca', borderRadius: 16, padding: 24, boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: '#ef4444', letterSpacing: '0.08em', marginBottom: 16 }}>BEFORE — 導入前</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                  {[
                    { icon: '📞', text: '「どの商品が自分に合いますか？」という電話・メールが月20件以上。スタッフ2人で対応' },
                    { icon: '📉', text: '商品ページを見ても選べずに離脱するお客様が多い。カート率が低い' },
                    { icon: '⏰', text: '1件の問い合わせ対応に平均15分。積み重なると週5時間以上が消える' },
                  ].map((item, i) => (
                    <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                      <span style={{ fontSize: 18, flexShrink: 0 }}>{item.icon}</span>
                      <span style={{ fontSize: 12, color: '#475569', lineHeight: 1.6 }}>{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div style={{ background: '#fff', border: '1px solid #86efac', borderRadius: 16, padding: 24, boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: '#16a34a', letterSpacing: '0.08em', marginBottom: 16 }}>AFTER — 導入3ヶ月後（推定）</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                  {[
                    { icon: '🤖', text: '問い合わせが月5件前後に減少。AIが24時間365日、商品選定を自動でサポート' },
                    { icon: '💰', text: 'AI経由の購入が増え、月間売上が改善。選ぶ手間がなくなると購入率が上がる' },
                    { icon: '✅', text: 'スタッフの対応工数が削減。空いた時間で新商品の仕入れや販促に集中できた' },
                  ].map((item, i) => (
                    <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                      <span style={{ fontSize: 18, flexShrink: 0 }}>{item.icon}</span>
                      <span style={{ fontSize: 12, color: '#475569', lineHeight: 1.6 }}>{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>

          {/* 数字 */}
          <FadeIn delay={0.15}>
            <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: 16, boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}>
              <div className="grid grid-cols-3 divide-x divide-gray-100">
                <StatCard value="−75%" label="選定問い合わせ件数" sub="月20件 → 月5件" color="#ef4444" />
                <StatCard value="+28%" label="カート投入率" sub="迷いなく選べる導線" color="#16a34a" />
                <StatCard value="週5h" label="対応工数の削減" sub="スタッフの時間を解放" color="#2563eb" />
              </div>
              <div style={{ padding: '10px 20px', background: '#f8fafc', borderTop: '1px solid #e2e8f0', borderRadius: '0 0 16px 16px' }}>
                <p style={{ fontSize: 10, color: '#94a3b8', margin: 0, textAlign: 'center' }}>
                  ※ 上記は架空の推定値です。実際の効果はサイトの規模・商品ジャンルによって異なります。
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 操作フロー */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <FadeIn>
          <h2 className="text-2xl font-black text-center text-gray-900 mb-2">お客様はこう使う</h2>
          <p className="text-center text-sm text-gray-400 mb-10">御社ECサイトに設置したAI選定ボックスの使われ方</p>
        </FadeIn>
        <StepFlow />
      </section>

      {/* 提供内容 */}
      <section style={{ background: '#f8fafc' }} className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="text-2xl font-black text-center text-gray-900 mb-10">提供内容</h2>
          </FadeIn>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              {
                icon: '🗂️',
                title: '商品カタログのAI化',
                desc: '御社の商品データをAIに読み込ませます。CSVや商品一覧をもとに構築。最大200商品まで対応。',
              },
              {
                icon: '🎨',
                title: 'サイトへの組み込み',
                desc: '御社サイトのデザインに合わせてカスタマイズ。既存ページへの追加も対応します。',
              },
              {
                icon: '🔄',
                title: '月次メンテナンス',
                desc: '商品の追加・削除・価格変更に対応。問い合わせ内容の傾向レポートも月1回提供。',
              },
            ].map(item => (
              <FadeIn key={item.title} delay={0.05}>
                <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: 14, padding: '20px 20px 24px', boxShadow: '0 2px 12px rgba(0,0,0,0.04)', height: '100%' }}>
                  <div style={{ fontSize: 28, marginBottom: 10 }}>{item.icon}</div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: '#1e293b', marginBottom: 8 }}>{item.title}</div>
                  <div style={{ fontSize: 12, color: '#64748b', lineHeight: 1.7 }}>{item.desc}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 料金 */}
      <section className="py-16 px-4">
        <div className="max-w-2xl mx-auto">
          <FadeIn>
            <h2 className="text-2xl font-black text-center text-gray-900 mb-10">料金</h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
              <div style={{ background: '#1d4ed8', padding: '20px 28px', color: '#fff' }}>
                <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.1em', opacity: 0.7, marginBottom: 4 }}>STANDARD</div>
                <div style={{ fontSize: 28, fontWeight: 800 }}>
                  初期 80,000円 <span style={{ fontSize: 14, fontWeight: 400, opacity: 0.7 }}>+ 月額 10,000円</span>
                </div>
                <div style={{ fontSize: 12, opacity: 0.7, marginTop: 6 }}>初月は初期費用のみ。翌月より月額課金開始。</div>
              </div>
              <div style={{ padding: '24px 28px' }}>
                {[
                  '御社商品カタログのAI化（最大200商品）',
                  'サイトデザインに合わせたカスタマイズ',
                  '既存ECページへの組み込み対応',
                  '月1回の商品データ更新・メンテナンス',
                  '問い合わせ傾向レポート（月次）',
                  'メール・チャットサポート',
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
          <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 12 }}>まずデモをご覧ください</h2>
          <p style={{ color: '#94a3b8', marginBottom: 32, fontSize: 14, lineHeight: 1.7 }}>
            「自社ECに入れてみたい」と思ったら、Xまたはメールでご連絡ください。<br />
            御社の商品カテゴリに合わせたデモをお見せします。費用はかかりません。
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/tool-finder/search?q=DIY初心者、棚を作りたい" style={{ background: '#2563eb', color: '#fff', padding: '13px 32px', borderRadius: 8, fontWeight: 700, fontSize: 14, textDecoration: 'none' }}>
              デモを試す →
            </Link>
            <a href="https://twitter.com/sparkia_jp" target="_blank" rel="noopener noreferrer" style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', color: '#e2e8f0', padding: '13px 32px', borderRadius: 8, fontWeight: 600, fontSize: 14, textDecoration: 'none' }}>
              X（Twitter）で相談する
            </a>
          </div>
        </FadeIn>
      </section>
    </main>
  )
}
