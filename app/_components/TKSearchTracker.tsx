'use client'
import { useEffect } from 'react'

export function TKSearchTracker({ query }: { query: string }) {
  useEffect(() => {
    if (!query) return
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ;(window as any).gtag?.('event', 'search', { search_term: query })
  }, [query])
  return null
}
