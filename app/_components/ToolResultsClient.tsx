'use client'

import { motion, type Variants } from 'framer-motion'
import { ToolCardPremium } from './ToolCardPremium'
import type { AIToolResult } from '../_lib/tool-recommend-ai'

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

const item: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
}

export function ToolResultsClient({ results, query }: { results: AIToolResult[]; query: string }) {
  return (
    <div>
      <div className="flex items-center justify-between mb-5">
        <p className="text-sm text-gray-500">
          「<span className="font-semibold text-gray-800">{query}</span>」の検索結果
          <span className="ml-2 text-gray-400">— {results.length}件</span>
        </p>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="space-y-4"
      >
        {results.map(tool => (
          <motion.div key={tool.id} variants={item}>
            <ToolCardPremium tool={tool} rank={tool.rank} aiReason={tool.aiReason} />
          </motion.div>
        ))}
      </motion.div>

      <p className="mt-8 text-xs text-gray-400 text-center leading-relaxed">
        ※ 掲載スペック・価格は参考値です。最新情報はAmazonの商品ページをご確認ください。
      </p>
    </div>
  )
}
