import Link from 'next/link'
import { SparkiaLogo } from './SparkiaLogo'

export function Header() {
  return (
    <header
      className="sticky top-0 z-50"
      style={{
        background: 'rgba(5,7,15,0.85)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      <div className="max-w-5xl mx-auto px-4 h-14 flex items-center gap-4">
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <SparkiaLogo className="h-7 w-auto text-white" />
          <span className="hidden sm:inline text-xs font-normal" style={{ color: '#334155' }}>
            電気系セレクトツール
          </span>
        </Link>
        <nav className="flex items-center gap-6 text-sm" style={{ color: '#475569' }}>
          <Link href="/board-finder" className="hover:text-white transition-colors duration-150">
            デモを見る
          </Link>
          <Link href="/service" className="hover:text-white transition-colors duration-150">
            サービス
          </Link>
        </nav>
        <div style={{ marginLeft: 'auto' }}>
          <Link href="/service#contact" style={{ fontSize: 12, fontWeight: 700, color: '#fff', background: 'linear-gradient(135deg, #2563eb, #3b82f6)', padding: '7px 16px', borderRadius: 6, textDecoration: 'none' }}>
            相談する
          </Link>
        </div>
      </div>
    </header>
  )
}
