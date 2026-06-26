export type TKCategory = 'キースイッチ' | 'キーキャップ' | 'パーツ' | 'マイコンボード' | 'ツール'

export type TKProduct = {
  id: string
  shopifyId: number
  name: string
  category: TKCategory
  price: string
  imageUrl: string
  shopUrl: string
  tags: string[]
  available: boolean
  description: string
}

type ShopifyVariant = {
  price: string
  available: boolean
}

type ShopifyImage = {
  src: string
}

type ShopifyProduct = {
  id: number
  title: string
  handle: string
  body_html: string
  product_type: string
  tags: string[]
  images: ShopifyImage[]
  variants: ShopifyVariant[]
}

const SHOP_BASE = 'https://shop.talpkeyboard.com/products'
const ALLOWED_TYPES: TKCategory[] = ['キースイッチ', 'キーキャップ', 'パーツ', 'マイコンボード', 'ツール']

function formatPrice(price: string): string {
  const n = parseFloat(price)
  if (isNaN(n)) return price
  return '¥' + n.toLocaleString('ja-JP', { maximumFractionDigits: 0 })
}

function stripHtml(html: string): string {
  return html
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, 600)
}

async function _fetchTalpProducts(): Promise<TKProduct[]> {
  const res = await fetch('https://shop.talpkeyboard.com/products.json?limit=250', {
    next: { revalidate: 3600 },
  })
  if (!res.ok) return []

  const json = await res.json() as { products: ShopifyProduct[] }

  return json.products
    .filter(p => ALLOWED_TYPES.includes(p.product_type as TKCategory))
    .map(p => ({
      id: p.handle,
      shopifyId: p.id,
      name: p.title,
      category: p.product_type as TKCategory,
      price: formatPrice(p.variants?.[0]?.price ?? ''),
      imageUrl: p.images?.[0]?.src ?? '',
      shopUrl: `${SHOP_BASE}/${p.handle}`,
      tags: Array.isArray(p.tags) ? p.tags : [],
      available: p.variants?.some(v => v.available) ?? false,
      description: stripHtml(p.body_html ?? ''),
    }))
}

let _cache: TKProduct[] | null = null
let _cacheAt = 0
const CACHE_TTL = 3600 * 1000

export async function fetchTalpProducts(): Promise<TKProduct[]> {
  const now = Date.now()
  if (_cache && now - _cacheAt < CACHE_TTL) return _cache
  _cache = await _fetchTalpProducts()
  _cacheAt = now
  return _cache
}
