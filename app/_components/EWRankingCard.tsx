'use client'

import Image from 'next/image'
import type { EWProduct, Level } from '../_lib/recommend-ew'

const LEVEL: Record<Level, { label: string; color: string }> = {
  beginner:     { label: '初心者向け', color: '#4d7c5a' },
  intermediate: { label: '中級者向け', color: '#7a6040' },
  advanced:     { label: '上級者向け', color: '#5a5070' },
}

const CATEGORY_COLOR = {
  マイコン: '#b5722a',
  センサー: '#4d7c5a',
}

function ProductImage({ imageUrl, name }: { imageUrl: string; name: string }) {
  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', background: '#f0ebe2' }}>
      <Image
        src={imageUrl}
        alt={name}
        fill
        style={{ objectFit: 'cover' }}
        sizes="(max-width: 640px) 100vw, 176px"
      />
    </div>
  )
}

export function EWRankingCard({
  product,
  rank,
  aiReason,
}: {
  product: EWProduct
  rank: number
  aiReason?: string
}) {
  const lv = LEVEL[product.level]
  const catColor = CATEGORY_COLOR[product.category]
  const verdict = aiReason ?? product.verdict
  const isFirst = rank === 1

  return (
    <article style={{
      background: '#ffffff',
      border: isFirst ? '1px solid #d4a76a' : '1px solid #e8e0d4',
      borderRadius: 8,
      overflow: 'hidden',
      boxShadow: isFirst
        ? '0 2px 20px rgba(181,114,42,0.09)'
        : '0 1px 4px rgba(28,20,16,0.04)',
    }}>

      <div className="flex flex-col sm:flex-row">

        {/* image — mobile: 3:2 top, desktop: fixed left column */}
        <div className="sm:hidden relative" style={{ aspectRatio: '3/2' }}>
          <ProductImage imageUrl={product.imageUrl} name={product.name} />
        </div>
        <div className="hidden sm:block relative shrink-0" style={{ width: 176, alignSelf: 'stretch' }}>
          <ProductImage imageUrl={product.imageUrl} name={product.name} />
        </div>

        {/* content */}
        <div style={{
          flex: 1,
          minWidth: 0,
          padding: '22px 26px',
          display: 'flex',
          flexDirection: 'column',
          gap: 11,
        }}>

          {/* rank + badges */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: '0.1em',
              color: isFirst ? '#b5722a' : '#c8bba8',
              fontVariantNumeric: 'tabular-nums',
            }}>
              {String(rank).padStart(2, '0')}
            </span>
            <div style={{ display: 'flex', gap: 5 }}>
              <span style={{
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: '0.04em',
                color: catColor,
                border: `1px solid ${catColor}40`,
                padding: '2px 9px',
                borderRadius: 3,
              }}>
                {product.category}
              </span>
              <span style={{
                fontSize: 10,
                letterSpacing: '0.02em',
                color: lv.color,
                border: '1px solid #e2d9cc',
                padding: '2px 9px',
                borderRadius: 3,
              }}>
                {lv.label}
              </span>
            </div>
          </div>

          {/* name */}
          <h2 style={{
            margin: 0,
            fontSize: 15,
            fontWeight: 700,
            color: '#1c1410',
            lineHeight: 1.4,
            letterSpacing: '0.01em',
          }}>
            {product.name}
          </h2>

          {/* verdict */}
          <p style={{
            margin: 0,
            fontSize: 13,
            color: '#7a6e64',
            lineHeight: 1.9,
            letterSpacing: '0.025em',
          }}>
            {verdict}
          </p>

          {/* interface / connectivity tags */}
          {(product.interface?.length || product.connectivity?.length) ? (
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5 }}>
              {product.interface?.map(i => (
                <span key={i} style={{
                  fontSize: 10,
                  color: '#b5a090',
                  border: '1px solid #e2d9cc',
                  padding: '2px 8px',
                  borderRadius: 3,
                  letterSpacing: '0.04em',
                }}>
                  {i}
                </span>
              ))}
              {product.connectivity?.map(c => (
                <span key={c} style={{
                  fontSize: 10,
                  color: '#b5a090',
                  border: '1px solid #e2d9cc',
                  padding: '2px 8px',
                  borderRadius: 3,
                  letterSpacing: '0.04em',
                }}>
                  {c}
                </span>
              ))}
            </div>
          ) : null}

          {/* match score dots */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{
              fontSize: 9,
              fontWeight: 700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: '#c8bba8',
            }}>
              マッチ度
            </span>
            <div style={{ display: 'flex', gap: 4 }}>
              {Array.from({ length: 5 }, (_, i) => {
                const filled = i < Math.max(1, 6 - rank)
                return (
                  <span key={i} style={{
                    display: 'inline-block',
                    width: 7,
                    height: 7,
                    borderRadius: '50%',
                    background: filled
                      ? (isFirst ? '#b5722a' : '#c8a87a')
                      : '#e8e0d4',
                    transition: 'background 0.2s',
                  }} />
                )
              })}
            </div>
            {isFirst && (
              <span style={{
                fontSize: 9,
                fontWeight: 700,
                color: '#b5722a',
                letterSpacing: '0.08em',
              }}>
                最有力
              </span>
            )}
          </div>

          {/* price + CTA */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginTop: 2 }}>
            <span style={{
              fontSize: 16,
              fontWeight: 700,
              color: '#1c1410',
              letterSpacing: '-0.01em',
              fontVariantNumeric: 'tabular-nums',
            }}>
              {product.price}
            </span>
            <a
              href={product.shopUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: '0.05em',
                color: '#ffffff',
                background: '#b5722a',
                borderRadius: 5,
                padding: '9px 20px',
                textDecoration: 'none',
              }}
            >
              ショップで購入 →
            </a>
          </div>

        </div>
      </div>
    </article>
  )
}
