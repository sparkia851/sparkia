import Image from 'next/image'
import type { TKProduct } from '../_lib/talp-catalog'
import { TKShopLink } from './TKShopLink'

const SERIF = 'var(--font-serif-jp), serif'

function ProductImage({ imageUrl, name }: { imageUrl: string; name: string }) {
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        background: '#f6f4f0',
      }}
    >
      {imageUrl ? (
        <Image
          src={imageUrl}
          alt={name}
          fill
          style={{ objectFit: 'contain', padding: 16 }}
          sizes="140px"
        />
      ) : (
        <div style={{ width: '100%', height: '100%', background: '#ece8e0' }} />
      )}
    </div>
  )
}

export function TKRankingCard({
  product,
  rank,
  aiReason,
}: {
  product: TKProduct
  rank: number
  aiReason?: string
}) {
  const specTags = product.tags.slice(0, 3)

  return (
    <article
      className="tk-card-reveal"
      style={{
        display: 'grid',
        gridTemplateColumns: '140px 1fr',
        border: '1px solid #efefef',
        borderRadius: 4,
        overflow: 'hidden',
        background: '#ffffff',
      }}
    >
      {/* Thumbnail */}
      <div style={{ minHeight: 160, position: 'relative' }}>
        <ProductImage imageUrl={product.imageUrl} name={product.name} />
      </div>

      {/* Content */}
      <div style={{ padding: '24px 28px', display: 'flex', flexDirection: 'column', gap: 8 }}>

        {/* Rank + tags */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span
            style={{
              fontFamily: SERIF,
              fontSize: 13,
              color: '#ccc',
              lineHeight: 1,
            }}
          >
            {String(rank).padStart(2, '0')}
          </span>
          <div style={{ display: 'flex', gap: 5 }}>
            {specTags.map(tag => (
              <span
                key={tag}
                style={{
                  fontSize: 9,
                  border: '1px solid #e8e8e8',
                  borderRadius: 100,
                  padding: '2px 10px',
                  color: '#999',
                }}
              >
                {tag}
              </span>
            ))}
            {!product.available && (
              <span
                style={{
                  fontSize: 9,
                  border: '1px solid #fecaca',
                  borderRadius: 100,
                  padding: '2px 10px',
                  color: '#ef4444',
                }}
              >
                在庫なし
              </span>
            )}
          </div>
        </div>

        {/* Product name */}
        <h3
          style={{
            margin: 0,
            fontFamily: SERIF,
            fontSize: 15,
            fontWeight: 600,
            color: '#16140f',
            lineHeight: 1.5,
            letterSpacing: '0.01em',
          }}
        >
          {product.name}
        </h3>

        {/* AI reason */}
        {aiReason && (
          <p
            style={{
              margin: 0,
              fontSize: 13,
              color: '#555',
              lineHeight: 2,
              letterSpacing: '0.02em',
            }}
          >
            {aiReason}
          </p>
        )}

        {/* Price + CTA */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginTop: 4 }}>
          <span
            style={{
              fontFamily: SERIF,
              fontSize: 17,
              color: '#16140f',
              lineHeight: 1,
            }}
          >
            {product.price}
          </span>
          <TKShopLink
            href={product.shopUrl}
            productId={product.id}
            productName={product.name}
            rank={rank}
            style={{
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: '0.04em',
              color: '#ffffff',
              background: '#16140f',
              borderRadius: 2,
              padding: '8px 18px',
              textDecoration: 'none',
            }}
          >
            ショップで購入 →
          </TKShopLink>
        </div>

      </div>
    </article>
  )
}
