import Link from 'next/link'
import { SparkiaLogo } from './SparkiaLogo'

export function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-4 h-14 flex items-center gap-6">
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <SparkiaLogo className="h-7 w-auto text-gray-900" />
          <span className="hidden sm:inline text-xs text-gray-400 font-normal leading-none border-l border-gray-200 pl-3">
            電気系セレクトツール
          </span>
        </Link>
        <nav className="flex items-center gap-4 text-sm text-gray-600">
          <Link href="/board-finder" className="hover:text-blue-700 transition-colors">
            マイコン検索
          </Link>
          <span className="text-gray-300">|</span>
          <Link href="/tool-finder" className="hover:text-blue-700 transition-colors">
            工具検索
          </Link>
          <span className="text-gray-300">|</span>
          <span className="text-gray-400 cursor-default" title="近日公開">
            IC・センサー（準備中）
          </span>
        </nav>
      </div>
    </header>
  )
}
