'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'

const BOARD_IMAGES = [
  '/api/board-image?slug=arduino-uno-rev3',
  '/api/board-image?slug=uno-r4-wifi',
  '/api/board-image?slug=nano-33-ble-sense-rev2',
  'https://upload.wikimedia.org/wikipedia/commons/d/d9/RPI_PICO_W_1.jpg',
  '/api/board-image?ext=https%3A%2F%2Fwww.espressif.com%2Fsites%2Fdefault%2Ffiles%2Fdev-board%2FESP32-DevKitC_S_0.png',
  '/api/board-image?m5=m5stack-core2-esp32-iot-development-kit',
]

function BoardFinderCard({ index }: { index: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link
        href="/board-finder"
        className="group relative flex overflow-hidden rounded-2xl border border-white/10 bg-[#0d1117] hover:border-blue-500/50 transition-all duration-500 min-h-[200px]"
      >
        {/* ボード画像モザイク背景 */}
        <div className="absolute right-0 top-0 bottom-0 w-1/2 grid grid-cols-3 gap-0.5 opacity-40 group-hover:opacity-60 transition-opacity duration-500">
          {BOARD_IMAGES.map((src, i) => (
            <div key={i} className="relative overflow-hidden bg-gray-900">
              <img
                src={src}
                alt=""
                className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700"
              />
            </div>
          ))}
          {/* 左からのグラデーションオーバーレイ */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0d1117] via-[#0d1117]/80 to-transparent" />
        </div>

        {/* コンテンツ */}
        <div className="relative z-10 flex flex-col justify-between p-7 w-3/5">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <span className="text-[10px] font-bold tracking-widest uppercase text-blue-400 border border-blue-500/30 bg-blue-500/10 px-2 py-0.5 rounded-full">
                公開中
              </span>
            </div>
            <h3 className="text-2xl font-extrabold text-white mb-2 tracking-tight">
              Board Finder
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              要件を入力するだけでAIが最適なマイコンボードを選定。Arduino・Pico・ESP32など25種から即絞り込み。
            </p>
          </div>

          <div className="flex items-center gap-2 mt-6 text-sm font-semibold text-blue-400 group-hover:text-blue-300 transition-colors">
            <span>使ってみる</span>
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
            >
              →
            </motion.span>
          </div>
        </div>

        {/* ホバー時の外枠グロー */}
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{ boxShadow: 'inset 0 0 40px rgba(59,130,246,0.08)' }}
        />
      </Link>
    </motion.div>
  )
}

function LockedCard({ label, description, index }: { label: string; description: string; index: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="relative flex overflow-hidden rounded-2xl border border-white/5 bg-[#0d1117]/60 min-h-[200px] cursor-default">
        <div className="absolute inset-0 backdrop-blur-[1px]" />
        <div className="relative z-10 flex flex-col justify-between p-7 w-full">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <span className="text-[10px] font-bold tracking-widest uppercase text-gray-600 border border-gray-700 bg-gray-800/50 px-2 py-0.5 rounded-full">
                Coming Soon
              </span>
            </div>
            <h3 className="text-2xl font-extrabold text-gray-600 mb-2 tracking-tight">{label}</h3>
            <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export function HomeClient() {
  const servicesRef = useRef(null)
  const servicesInView = useInView(servicesRef, { once: true, margin: '-100px' })

  return (
    <div className="bg-[#060810] min-h-screen">

      {/* Hero */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4">

        {/* グリッド背景 */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)
            `,
            backgroundSize: '64px 64px',
          }}
        />

        {/* 中央グロー */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, rgba(59,130,246,0.12) 0%, transparent 70%)' }}
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative text-center max-w-3xl"
        >
          {/* ロゴ */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-8xl sm:text-9xl font-black tracking-tighter mb-8 select-none"
            style={{
              background: 'linear-gradient(135deg, #93c5fd 0%, #ffffff 30%, #60a5fa 50%, #ffffff 70%, #93c5fd 100%)',
              backgroundSize: '200% auto',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              animation: 'shine 5s linear infinite',
            }}
          >
            Sparkia
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-xl text-gray-300 mb-3 font-light tracking-wide"
          >
            電子工作・IoT開発を助けるAIツール集
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="text-sm text-gray-500"
          >
            目的を入力するだけで、最適なパーツ・ボードを即選定
          </motion.p>
        </motion.div>

        {/* スクロールインジケーター */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="absolute bottom-10 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] text-gray-600 tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
            className="w-px h-10 bg-gradient-to-b from-gray-500 to-transparent"
          />
        </motion.div>
      </section>

      {/* サービス一覧 */}
      <section className="py-24 px-4" ref={servicesRef}>
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <p className="text-xs font-bold tracking-widest uppercase text-blue-500 mb-3">Services</p>
            <h2 className="text-3xl font-extrabold text-white tracking-tight">AIで選定を、瞬時に。</h2>
          </motion.div>

          <div className="grid gap-4">
            <BoardFinderCard index={0} />
            <LockedCard
              label="Parts Finder"
              description="電子部品を用途・スペックから即絞り込み。抵抗・コンデンサ・センサーなど幅広く対応予定。"
              index={1}
            />
            <LockedCard
              label="Kit Finder"
              description="電子工作の入門キットを目的・レベルから選定。初心者から上級者まで対応予定。"
              index={2}
            />
          </div>
        </div>
      </section>

      <style>{`
        @keyframes shine {
          0% { background-position: 200% center; }
          100% { background-position: -200% center; }
        }
      `}</style>
    </div>
  )
}
