import { NextRequest, NextResponse } from 'next/server'

const ARDUINO_CDN_BASE = 'https://cdn.shopify.com/s/files/1/0438/4735/2471/files/'
const ALLOWED_EXT_HOSTS = [
  'www.espressif.com',
  'files.seeedstudio.com',
  'www.pjrc.com',
  'cdn-shop.adafruit.com',
]

function imageResponse(body: ArrayBuffer, contentType: string): NextResponse {
  return new NextResponse(body, {
    headers: {
      'Content-Type': contentType,
      'Cache-Control': 'public, max-age=86400, stale-while-revalidate=3600',
    },
  })
}

async function proxyUrl(url: string): Promise<NextResponse> {
  const res = await fetch(url, { next: { revalidate: 86400 } })
  if (!res.ok) return new NextResponse(null, { status: res.status === 404 ? 404 : 502 })
  const body = await res.arrayBuffer()
  return imageResponse(body, res.headers.get('content-type') ?? 'image/jpeg')
}

async function proxyShopifyProduct(storeHost: string, slug: string): Promise<NextResponse> {
  const productRes = await fetch(
    `https://${storeHost}/products/${slug}.json`,
    { headers: { 'User-Agent': 'Sparkia/1.0' }, next: { revalidate: 86400 } }
  )
  if (!productRes.ok) return new NextResponse(null, { status: 404 })
  const data = (await productRes.json()) as { product?: { images?: { src: string }[] } }
  const src = data.product?.images?.[0]?.src
  if (!src) return new NextResponse(null, { status: 404 })
  return proxyUrl(src)
}

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl
  const slug = searchParams.get('slug')
  const cdn  = searchParams.get('cdn')
  const m5   = searchParams.get('m5')
  const ext  = searchParams.get('ext')

  try {
    // Arduino discontinued boards — direct CDN file
    if (cdn) {
      if (!/^[A-Za-z0-9_.-]+\.jpe?g$/i.test(cdn)) return new NextResponse(null, { status: 400 })
      return proxyUrl(`${ARDUINO_CDN_BASE}${cdn}`)
    }

    // Arduino store — product JSON
    if (slug) {
      if (!/^[a-z0-9-]+$/.test(slug)) return new NextResponse(null, { status: 400 })
      return proxyShopifyProduct('store.arduino.cc', slug)
    }

    // M5Stack store — product JSON
    if (m5) {
      if (!/^[a-z0-9-]+$/.test(m5)) return new NextResponse(null, { status: 400 })
      return proxyShopifyProduct('shop.m5stack.com', m5)
    }

    // External URL proxy (allowlisted domains only)
    if (ext) {
      let extUrl: URL
      try { extUrl = new URL(ext) } catch { return new NextResponse(null, { status: 400 }) }
      if (extUrl.protocol !== 'https:' || !ALLOWED_EXT_HOSTS.includes(extUrl.hostname)) {
        return new NextResponse(null, { status: 400 })
      }
      return proxyUrl(extUrl.toString())
    }

    return new NextResponse(null, { status: 400 })
  } catch {
    return new NextResponse(null, { status: 500 })
  }
}
