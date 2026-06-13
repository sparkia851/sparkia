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
      <div className="max-w-5xl mx-auto px-4 h-14 flex items-center gap-8">
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <SparkiaLogo className="h-7 w-auto text-white" />
          <span className="hidden sm:inline text-xs font-normal" style={{ color: '#334155' }}>
            電気系セレクトツール
          </span>
        </Link>
        <nav className="flex items-center gap-6 text-sm" style={{ color: '#475569' }}>
          <Link href="/board-finder" className="hover:text-white transition-colors duration-150">
            マイコン検索
          </Link>
          <Link href="/tool-finder" className="hover:text-white transition-colors duration-150">
            工具検索
          </Link>
          <span className="cursor-default" style={{ color: '#1e293b' }} title="近日公開">
            IC・センサー
          </span>
        </nav>
      </div>
    </header>
  )
}
