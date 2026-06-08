import { headers } from 'next/headers'
import type { MetadataRoute } from 'next'

export const dynamic = 'force-dynamic'

export default async function robots(): Promise<MetadataRoute.Robots> {
  const host = (await headers()).get('host') ?? ''

  if (host !== 'sparkia.jp') {
    return {
      rules: { userAgent: '*', disallow: '/' },
    }
  }

  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: 'https://sparkia.jp/sitemap.xml',
  }
}
