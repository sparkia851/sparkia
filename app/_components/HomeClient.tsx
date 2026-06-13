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

function ServiceCard({
  href,
  label,
  title,
  description,
  index,
  accent,
  visual,
}: {
  href: string
  label: string
  title: string
  description: string
  index: number
  accent: string
  visual: React.ReactNode
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link
        href={href}
        className="group relative flex overflow-hidden min-h-[200px]"
        style={{
          borderRadius: 16,
          border: '1px solid rgba(255,255,255,0.07)',
          background: 'rgba(255,255,255,0.02)',
          transition: 'border-color 0.4s',
        }}
        onMouseEnter={e => (e.currentTarget.style.borderColor = `${accent}40`)}
        onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)')}
      >
        {/* visual right panel */}
        <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-30 group-hover:opacity-50 transition-opacity duration-500">
          {visual}
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to right, #05070f 0%, rgba(5,7,15,0.7) 40%, transparent 100%)' }}
          />
        </div>

        {/* content */}
        <div className="relative z-10 flex flex-col justify-between p-7 w-3/5">
          <div>
            <span
              className="inline-block text-[10px] font-bold tracking-widest uppercase mb-4 px-2 py-0.5 rounded-full"
              style={{ color: accent, background: `${accent}14`, border: `1px solid ${accent}30` }}
            >
              {label}
            </span>
            <h3 className="text-2xl font-extrabold text-white mb-2 tracking-tight">{title}</h3>
            <p className="text-sm leading-relaxed" style={{ color: '#64748b' }}>{description}</p>
          </div>
          <div
            className="flex items-center gap-2 mt-6 text-sm font-semibold transition-colors"
            style={{ color: accent }}
          >
            <span>使ってみる</span>
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
            >
              →
            </motion.span>
          </div>
        </div>

        {/* hover glow */}
        <div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{ boxShadow: `inset 0 0 40px ${accent}0d` }}
        />
      </Link>
    </motion.div>
  )
}

function LockedCard({ title, description, index }: { title: string; description: string; index: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
    >
      <div
        className="relative flex overflow-hidden min-h-[160px] cursor-default"
        style={{
          borderRadius: 16,
          border: '1px solid rgba(255,255,255,0.04)',
          background: 'rgba(255,255,255,0.01)',
        }}
      >
        <div className="relative z-10 flex flex-col justify-between p-7 w-full">
          <div>
            <span
              className="inline-block text-[10px] font-bold tracking-widest uppercase mb-4 px-2 py-0.5 rounded-full"
              style={{ color: '#1e293b', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}
            >
              Coming Soon
            </span>
            <h3 className="text-xl font-extrabold mb-2 tracking-tight" style={{ color: '#1e293b' }}>{title}</h3>
            <p className="text-sm leading-relaxed" style={{ color: '#1e293b' }}>{description}</p>
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
    <div style={{ minHeight: '100vh' }}>

      {/* Hero */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4">

        {/* center glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          style={{
            width: 800,
            height: 500,
            background: 'radial-gradient(ellipse, rgba(59,130,246,0.1) 0%, transparent 70%)',
            borderRadius: '50%',
          }}
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative text-center max-w-3xl"
        >
          <motion.h1
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-black tracking-tighter mb-8 select-none"
            style={{
              fontSize: 'clamp(72px, 14vw, 128px)',
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
            className="text-xl font-light tracking-wide mb-3"
            style={{ color: '#94a3b8' }}
          >
            電子工作・IoT開発を助けるAIツール集
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="text-sm"
            style={{ color: '#334155' }}
          >
            目的を入力するだけで、最適なパーツ・ボードを即選定
          </motion.p>
        </motion.div>

        {/* scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="absolute bottom-10 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] tracking-widest uppercase" style={{ color: '#1e293b' }}>Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
            className="w-px h-10"
            style={{ background: 'linear-gradient(to bottom, #334155, transparent)' }}
          />
        </motion.div>
      </section>

      {/* Services */}
      <section className="px-4 pb-24" ref={servicesRef}>
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: '#1e3a5f' }}>Services</p>
            <h2 className="text-3xl font-extrabold text-white tracking-tight">AIで選定を、瞬時に。</h2>
          </motion.div>

          <div className="flex flex-col gap-4">
            <ServiceCard
              href="/board-finder"
              label="公開中"
              title="Board Finder"
              description="要件を入力するだけでAIが最適なマイコンボードを選定。Arduino・Pico・ESP32など40種から即絞り込み。"
              index={0}
              accent="#3b82f6"
              visual={
                <div className="absolute inset-0 grid grid-cols-3 gap-0.5">
                  {BOARD_IMAGES.map((src, i) => (
                    <div key={i} className="relative overflow-hidden" style={{ background: '#0a0f1a' }}>
                      <img src={src} alt="" className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700" />
                    </div>
                  ))}
                </div>
              }
            />
            <ServiceCard
              href="/tool-finder"
              label="公開中"
              title="Tool Finder"
              description="「DIY初心者」「予算1万円以内」など用途を入力すると最適な電動工具をランキングで提案。"
              index={1}
              accent="#f59e0b"
              visual={
                <div
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(135deg, rgba(245,158,11,0.15) 0%, rgba(251,191,36,0.05) 100%)',
                  }}
                />
              }
            />
            <LockedCard
              title="Parts Finder"
              description="電子部品を用途・スペックから即絞り込み。抵抗・コンデンサ・センサーなど幅広く対応予定。"
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
