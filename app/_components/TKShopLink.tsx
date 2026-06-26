'use client'
import type { CSSProperties, ReactNode } from 'react'

interface TKShopLinkProps {
  href: string
  productId: string
  productName: string
  rank: number
  style?: CSSProperties
  children: ReactNode
}

export function TKShopLink({ href, productId, productName, rank, style, children }: TKShopLinkProps) {
  function handleClick() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ;(window as any).gtag?.('event', 'shop_link_click', {
      item_id: productId,
      item_name: productName,
      rank,
    })
  }
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      style={style}
    >
      {children}
    </a>
  )
}
