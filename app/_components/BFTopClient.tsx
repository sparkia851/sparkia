'use client'

import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { SearchBox } from './SearchBox'

/* ── font shorthand ──────────────────────────────────── */
const HEADING = 'var(--font-heading), "Space Grotesk", sans-serif'

/* ── metallic gradient helper ───────────────────────── */
const METALLIC: React.CSSProperties = {
  background: 'linear-gradient(145deg, #f8fafc 0%, #cbd5e1 30%, #f1f5f9 55%, #94a3b8 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
}

/* ── color-tinted metallic for spec values ───────────── */
function metallicColor(hex: string): React.CSSProperties {
  return {
    background: `linear-gradient(145deg, #f0f4ff 10%, ${hex} 55%, #e2e8f0 90%)`,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  }
}

/* ── brand row for coverage section ─────────────────── */
function BrandRow({ brand, tagline, color, boards, delay }: {
  brand: string; tagline: string; color: string
  boards: { name: string; img: string }[]; delay: number
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className="brand-row-grid"
      style={{ background: `${color}06` }}
    >
      {/* brand identity */}
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '18px 16px 18px 20px', position: 'relative' }}>
        {/* left glow bar */}
        <div style={{ position: 'absolute', left: 0, top: '50%', transform: 'translateY(-50%)', width: 3, height: 44, background: color, borderRadius: '0 2px 2px 0', boxShadow: `0 0 14px ${color}99` }} />
        <p style={{ fontSize: 14, fontWeight: 800, color, letterSpacing: '-0.01em', fontFamily: HEADING, marginBottom: 5, lineHeight: 1 }}>
          {brand}
        </p>
        <p style={{ fontSize: 10, color: '#334155', letterSpacing: '0.03em', lineHeight: 1.5, margin: 0 }}>
          {tagline}
        </p>
      </div>

      {/* board photos — horizontal strip */}
      <div style={{ display: 'flex', gap: 2, padding: '8px 8px 8px 0', overflowX: 'auto', alignItems: 'stretch' }}
        className="scrollbar-hide brand-row-photos"
      >
        {boards.map((b) => (
          <motion.div
            key={b.name}
            style={{ position: 'relative', width: 130, minHeight: 90, flexShrink: 0, overflow: 'hidden', background: '#04060e', borderRadius: 1 }}
            whileHover={{ scale: 1.05, zIndex: 2 }}
            transition={{ duration: 0.18 }}
          >
            <Image src={b.img} alt={b.name} fill className="object-cover object-center" sizes="130px" unoptimized />
            {/* brand-colored name overlay on hover */}
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.15 }}
              style={{
                position: 'absolute', inset: 0,
                background: `linear-gradient(to top, ${color}e0 0%, ${color}40 50%, transparent 100%)`,
                display: 'flex', alignItems: 'flex-end', padding: '6px 8px',
              }}
            >
              <span style={{ fontSize: 9, fontWeight: 700, color: '#fff', letterSpacing: '0.05em', lineHeight: 1.3, textShadow: '0 1px 4px rgba(0,0,0,0.8)' }}>
                {b.name}
              </span>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

/* ── spec row ────────────────────────────────────────── */
function SpecRow({ label, value, sub, color, delay }: {
  label: string; value: string; sub: string; color: string; delay: number
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-30px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -40, filter: 'blur(6px)' }}
      animate={inView ? { opacity: 1, x: 0, filter: 'blur(0px)' } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ x: 6 }}
      style={{
        display: 'flex',
        alignItems: 'baseline',
        justifyContent: 'flex-start',
        gap: '0 28px',
        padding: '22px 0',
        borderBottom: '1px solid rgba(255,255,255,0.05)',
        flexWrap: 'wrap',
        cursor: 'default',
        transition: 'border-color 0.3s',
      }}
    >
      <span style={{
        fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
        color: '#1e3a5f', flex: '0 0 80px', paddingTop: 4,
      }}>
        {label}
      </span>
      <span style={{
        fontSize: 'clamp(26px, 6.5vw, 42px)', fontWeight: 700, lineHeight: 1,
        fontFamily: HEADING, letterSpacing: '-0.025em',
        flex: '0 0 auto',
        ...metallicColor(color),
      }}>
        {value}
      </span>
      <span style={{ fontSize: 13, color: '#334155', flex: '1 1 180px', alignSelf: 'center', lineHeight: 1.6 }}>
        {sub}
      </span>
    </motion.div>
  )
}

/* ── section label ───────────────────────────────────── */
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p style={{
      fontSize: 10, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase',
      color: '#1e3a5f', marginBottom: 20, fontFamily: HEADING,
    }}>
      {children}
    </p>
  )
}

/* ── fade-up helper ──────────────────────────────────── */
function FadeUp({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div ref={ref} className={className}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

/* ── data ─────────────────────────────────────────────── */

const FLOATING_TAGS = [
  'Clock · 240MHz', 'RAM · 8MB', 'Flash · 16MB', 'WiFi 2.4GHz',
  'BLE 5.0', 'LoRa', 'Arduino', 'ESP32', 'STM32', 'Nano',
  'Feather', 'DevKit', 'XIAO', 'USB-C', 'OTA', 'I²C · SPI',
  'ADC 12bit', 'Zigbee', 'FreeRTOS', '難易度 3段階',
]

const SCROLL_BOARDS = [
  { name: 'Uno R4 WiFi',   img: '/api/board-image?slug=uno-r4-wifi',                                                                                                                                  spec: 'WiFi · 48MHz' },
  { name: 'ESP32 DevKit',  img: '/api/board-image?ext=https%3A%2F%2Fwww.espressif.com%2Fsites%2Fdefault%2Ffiles%2Fdev-board%2FESP32-DevKitC_S_0.png',                                                spec: 'WiFi · BLE · 240MHz' },
  { name: 'Portenta H7',   img: '/api/board-image?slug=portenta-h7',                                                                                                                                  spec: 'BLE · 480MHz' },
  { name: 'Pico W',        img: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/RPI_PICO_W_1.jpg',                                                                                               spec: 'WiFi · 133MHz' },
  { name: 'M5Stack Core2', img: '/api/board-image?m5=m5stack-core2-esp32-iot-development-kit',                                                                                                        spec: '240MHz · Touch' },
  { name: 'XIAO ESP32S3',  img: '/api/board-image?ext=https%3A%2F%2Ffiles.seeedstudio.com%2Fwiki%2FSeeedStudio-XIAO-ESP32S3%2Fimg%2Fxiaoesp32s3.jpg',                                                spec: 'WiFi · BLE · Tiny' },
  { name: 'Nano 33 BLE',   img: '/api/board-image?slug=nano-33-ble-sense-rev2',                                                                                                                       spec: 'BLE · IMU · 64MHz' },
  { name: 'Teensy 4.1',    img: '/api/board-image?ext=https%3A%2F%2Fwww.pjrc.com%2Fstore%2Fteensy41_4.jpg',                                                                                          spec: '600MHz · USB Host' },
]
const MARQUEE_W = 140 // card width
const MARQUEE_GAP = 10
const MARQUEE_SHIFT = SCROLL_BOARDS.length * (MARQUEE_W + MARQUEE_GAP)

const HERO_BOARDS = [
  '/api/board-image?slug=arduino-uno-rev3',
  '/api/board-image?slug=uno-r4-wifi',
  '/api/board-image?slug=nano-33-ble-sense-rev2',
  '/api/board-image?slug=portenta-h7',
  'https://upload.wikimedia.org/wikipedia/commons/d/d9/RPI_PICO_W_1.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/8/82/Top_view_of_a_Raspberry_Pi_Pico_2_microcontroller_board.jpg',
  '/api/board-image?ext=https%3A%2F%2Fwww.espressif.com%2Fsites%2Fdefault%2Ffiles%2Fdev-board%2FESP32-DevKitC_S_0.png',
  '/api/board-image?m5=m5stack-core2-esp32-iot-development-kit',
]

const SPECS = [
  { label: 'Clock',   value: '16 – 240MHz',  sub: 'ATmega 8-bit から ESP32 Xtensa 240MHz まで対応',    color: '#3b82f6' },
  { label: 'RAM',     value: '2KB – 8MB',    sub: '組み込みミニマムからエッジAIモデル展開まで',          color: '#059669' },
  { label: 'Flash',   value: '32KB – 16MB',  sub: 'スケッチサイズ・OTA更新の可否に直結',                color: '#06b6d4' },
  { label: '接続性',  value: '7 種',          sub: 'WiFi · BLE · LoRa · Zigbee · Ethernet · USB · Serial', color: '#0ea5e9' },
  { label: 'Form',    value: '15 種',         sub: 'Nano · Pico · DevKit · Feather · Hat · 産業用 他',  color: '#2dd4bf' },
  { label: 'Level',   value: '3 段階',        sub: '電子工作入門から業務・エッジAI開発まで',             color: '#4ade80' },
]

const FAMILIES = [
  {
    brand: 'Arduino',
    tagline: 'Open-source electronics platform',
    color: '#00979D',
    boards: [
      { name: 'Uno R3',      img: '/api/board-image?slug=arduino-uno-rev3' },
      { name: 'Uno R4 WiFi', img: '/api/board-image?slug=uno-r4-wifi' },
      { name: 'Nano 33 BLE', img: '/api/board-image?slug=nano-33-ble-sense-rev2' },
      { name: 'Nano ESP32',  img: '/api/board-image?slug=nano-esp32' },
      { name: 'Portenta H7', img: '/api/board-image?slug=portenta-h7' },
      { name: 'Giga R1',     img: '/api/board-image?slug=giga-r1-wifi' },
    ],
  },
  {
    brand: 'Raspberry Pi',
    tagline: 'British low-power computing',
    color: '#C51A4A',
    boards: [
      { name: 'Pico',   img: 'https://upload.wikimedia.org/wikipedia/commons/3/38/Raspberry_Pi_Pico_top.jpg' },
      { name: 'Pico W', img: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/RPI_PICO_W_1.jpg' },
      { name: 'Pico 2', img: 'https://upload.wikimedia.org/wikipedia/commons/8/82/Top_view_of_a_Raspberry_Pi_Pico_2_microcontroller_board.jpg' },
    ],
  },
  {
    brand: 'Espressif',
    tagline: 'WiFi · BLE · RISC-V SoC platform',
    color: '#E03030',
    boards: [
      { name: 'ESP32-DevKitC', img: '/api/board-image?ext=https%3A%2F%2Fwww.espressif.com%2Fsites%2Fdefault%2Ffiles%2Fdev-board%2FESP32-DevKitC_S_0.png' },
      { name: 'ESP32-S3',      img: '/api/board-image?ext=https%3A%2F%2Fwww.espressif.com%2Fsites%2Fdefault%2Ffiles%2Fdev-board%2FESP32-S3-DevKitC-1%2520%25E5%25B0%258F.png' },
      { name: 'ESP32-C3 Mini', img: 'https://docs.zephyrproject.org/latest/_images/esp32c3_supermini.webp' },
      { name: 'ESP32-H2',      img: '/api/board-image?ext=https%3A%2F%2Fwww.espressif.com%2Fsites%2Fdefault%2Ffiles%2Fdev-board%2FESP32-H2-DevKitM-1_S_1.png' },
    ],
  },
  {
    brand: 'Seeed Studio',
    tagline: 'Grove · XIAO micro-ecosystem',
    color: '#8DC63F',
    boards: [
      { name: 'XIAO ESP32S3', img: '/api/board-image?ext=https%3A%2F%2Ffiles.seeedstudio.com%2Fwiki%2FSeeedStudio-XIAO-ESP32S3%2Fimg%2Fxiaoesp32s3.jpg' },
      { name: 'XIAO ESP32C3', img: '/api/board-image?ext=https%3A%2F%2Ffiles.seeedstudio.com%2Fwiki%2FXIAO_WiFi%2Fboard-pic.png' },
      { name: 'Wio Terminal', img: '/api/board-image?ext=https%3A%2F%2Ffiles.seeedstudio.com%2Fwiki%2FWio-Terminal%2Fimg%2FWio-Terminal-Wiki.jpg' },
    ],
  },
  {
    brand: 'M5Stack',
    tagline: 'Modular IoT · display-first kits',
    color: '#FF6B35',
    boards: [
      { name: 'Core2',        img: '/api/board-image?m5=m5stack-core2-esp32-iot-development-kit' },
      { name: 'StickC Plus2', img: '/api/board-image?m5=m5stickc-plus2-esp32-mini-iot-development-kit' },
      { name: 'AtomS3',       img: '/api/board-image?m5=atoms3-dev-kit-w-0-85-inch-screen' },
    ],
  },
  {
    brand: 'Others',
    tagline: 'Teensy · Adafruit · ST Micro · BBC',
    color: '#7c3aed',
    boards: [
      { name: 'Teensy 4.1',    img: '/api/board-image?ext=https%3A%2F%2Fwww.pjrc.com%2Fstore%2Fteensy41_4.jpg' },
      { name: 'Feather ESP32', img: '/api/board-image?ext=https%3A%2F%2Fcdn-shop.adafruit.com%2F970x728%2F5400-13.jpg' },
      { name: 'Micro:bit v2',  img: 'https://upload.wikimedia.org/wikipedia/commons/a/a3/Micro-bit_v1_%26_v2.JPG' },
      { name: 'STM32 BluePill', img: 'https://upload.wikimedia.org/wikipedia/commons/b/b0/Blue_Pill.jpg' },
      { name: 'NodeMCU',       img: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/NodeMCU_DEVKIT_1.0.jpg' },
    ],
  },
]

/* ─────────────────────────────────────────────────────── */
export function BFTopClient() {
  const heroRef = useRef<HTMLElement>(null)
  const { scrollYProgress: heroScroll } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const mosaicY    = useTransform(heroScroll, [0, 1], ['0%', '22%'])
  const mosaicOpacity = useTransform(heroScroll, [0, 0.7], [0.55, 0.2])
  const textY      = useTransform(heroScroll, [0, 1], ['0%', '12%'])

  return (
    <main>

      {/* ══════════════════════ HERO ══════════════════════════ */}
      <section
        ref={heroRef}
        style={{ minHeight: '100svh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}
      >
        {/* mosaic — parallax */}
        <motion.div style={{ position: 'absolute', inset: 0, zIndex: 0, y: mosaicY, opacity: mosaicOpacity }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gridTemplateRows: 'repeat(2, 50%)',
            height: '100%', gap: 2,
          }}>
            {HERO_BOARDS.map((src, i) => (
              <div key={i} style={{ position: 'relative', overflow: 'hidden', background: '#06091a' }}>
                <Image src={src} alt="" fill sizes="25vw" className="object-cover object-center" unoptimized />
              </div>
            ))}
          </div>
          {/* left text fade */}
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, #05070f 0%, #05070f 28%, rgba(5,7,15,0.72) 52%, rgba(5,7,15,0.2) 100%)' }} />
          {/* top/bottom fade */}
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, #05070f 0%, transparent 10%, transparent 90%, #05070f 100%)' }} />
        </motion.div>

        {/* ambient blue glow */}
        <div style={{ position: 'absolute', top: '20%', left: '5%', width: 600, height: 600, background: 'radial-gradient(ellipse, rgba(59,130,246,0.07) 0%, transparent 65%)', pointerEvents: 'none', zIndex: 1 }} />

        {/* hero text — subtle parallax */}
        <motion.div
          style={{ zIndex: 10, paddingTop: 96, paddingBottom: 96, y: textY }}
          className="relative max-w-5xl mx-auto px-6 w-full"
        >
          <div style={{ maxWidth: 540 }}>
            <motion.p
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.18em', color: '#3b82f6', marginBottom: 28, textTransform: 'uppercase', fontFamily: HEADING }}
            >
              Board Finder — Sparkia
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              style={{
                fontSize: 'clamp(36px, 5.8vw, 60px)', fontWeight: 900, lineHeight: 1.1,
                marginBottom: 22, letterSpacing: '-0.03em',
                fontFamily: HEADING,
              }}
            >
              <span style={METALLIC}>最適なマイコンボードを、</span>
              <br />
              <span style={{ color: '#60a5fa' }}>瞬時に。</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.55 }}
              style={{ fontSize: 14, color: '#475569', lineHeight: 1.9, marginBottom: 44 }}
            >
              用途をそのまま書くだけ。クロック・RAM・接続性・難易度——<br />
              40種のボードをAIが6指標で評価し、最適解を返す。
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.7 }}>
              <SearchBox searchPath="/board-finder/search" dark />
            </motion.div>
          </div>
        </motion.div>

        {/* scroll cue */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.6 }}
          style={{ position: 'absolute', bottom: 36, left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, zIndex: 10 }}
        >
          <span style={{ fontSize: 9, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#1e3a5f', fontFamily: HEADING }}>Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
            style={{ width: 1, height: 36, background: 'linear-gradient(to bottom, #334155, transparent)' }}
          />
        </motion.div>
      </section>

      {/* ══════════════════════ SPECS ═════════════════════════ */}
      <section style={{ padding: '100px 24px', position: 'relative', background: '#060913', overflow: 'hidden' }}>

        {/* ── featured board photo — full section background ── */}
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0, overflow: 'hidden' }}>
          <div style={{ position: 'relative', width: '100%', height: '100%', background: '#04060e' }}>
            <Image
              src="/api/board-image?slug=portenta-h7"
              alt=""
              fill
              sizes="100vw"
              className="object-cover object-center"
              unoptimized
            />
          </div>
          {/* flat dark overlay — no left-right gradient */}
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(4,6,14,0.62)' }} />
          {/* top/bottom vignette only */}
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, #060913 0%, transparent 12%, transparent 88%, #060913 100%)' }} />
        </div>

        {/* left ambient light */}
        <div style={{ position: 'absolute', left: '-5%', top: '10%', width: 500, height: 500, background: 'radial-gradient(ellipse, rgba(59,130,246,0.06) 0%, transparent 60%)', pointerEvents: 'none', zIndex: 0 }} />

        <div className="max-w-5xl mx-auto" style={{ position: 'relative', zIndex: 2 }}>
          <FadeUp>
            <SectionLabel>Evaluation</SectionLabel>
            <h2 style={{ fontSize: 'clamp(28px, 4.2vw, 46px)', fontWeight: 900, letterSpacing: '-0.02em', color: '#f1f5f9', marginBottom: 12, fontFamily: HEADING, paddingRight: '0.1em' }}>
              6つの指標で、見落としをなくす。
            </h2>
            <p style={{ fontSize: 13, color: '#334155', lineHeight: 1.9, marginBottom: 56, maxWidth: 480 }}>
              「とりあえず安いやつ」で後から仕様不足に気づく——その失敗をなくすため、AIはクロックからフォームファクタまで一括評価する。
            </p>
          </FadeUp>

          <div>
            {SPECS.map((s, i) => (
              <SpecRow key={s.label} {...s} delay={i * 0.08} />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════ BOARD WALL ════════════════════ */}
      <section style={{ padding: '100px 24px 80px', position: 'relative', background: '#04060e', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, right: '-10%', width: '60%', height: '100%', background: 'radial-gradient(ellipse at 100% 50%, rgba(16,185,129,0.04) 0%, transparent 55%)', pointerEvents: 'none' }} />

        <div className="max-w-5xl mx-auto">
          <FadeUp>
            <SectionLabel>Coverage</SectionLabel>
            <h2 style={{ fontSize: 'clamp(28px, 4.2vw, 46px)', fontWeight: 900, letterSpacing: '-0.025em', color: '#f1f5f9', marginBottom: 12, fontFamily: HEADING }}>
              全40種。主要ファミリーを網羅。
            </h2>
            <p style={{ fontSize: 13, color: '#334155', lineHeight: 1.9, marginBottom: 52, maxWidth: 480 }}>
              Arduino · Raspberry Pi · ESP32 · Seeed · M5Stack · Teensy · Adafruit——<br />
              国内外で使われる全ファミリーをカバーする。
            </p>
          </FadeUp>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 0, borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
            {FAMILIES.map((f, i) => (
              <BrandRow key={f.brand} {...f} delay={i * 0.07} />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════ CTA ═══════════════════════════ */}
      <section style={{ padding: '100px 24px 130px', textAlign: 'center', position: 'relative', overflow: 'hidden', background: '#05070f' }}>

        {/* B: floating spec chips */}
        {FLOATING_TAGS.map((tag, i) => (
          <motion.span
            key={tag}
            style={{
              position: 'absolute',
              left: `${(i * 43 + 8) % 82 + 4}%`,
              top: `${(i * 31 + 13) % 76 + 8}%`,
              fontSize: 9, fontWeight: 600, letterSpacing: '0.08em',
              color: 'rgba(148,163,184,0.18)',
              border: '1px solid rgba(148,163,184,0.07)',
              borderRadius: 3, padding: '2px 7px',
              pointerEvents: 'none', zIndex: 0, whiteSpace: 'nowrap', userSelect: 'none',
            }}
            animate={{ y: [0, -(6 + i % 6), 0] }}
            transition={{ duration: 5 + (i * 0.6) % 4, repeat: Infinity, delay: (i * 0.3) % 3, ease: 'easeInOut' }}
          >
            {tag}
          </motion.span>
        ))}

        {/* thin top line */}
        <div style={{ position: 'absolute', top: 0, left: '10%', right: '10%', height: 1, background: 'linear-gradient(to right, transparent, rgba(59,130,246,0.3), transparent)' }} />

        <div className="relative max-w-lg mx-auto" style={{ zIndex: 10 }}>
          <FadeUp>
            <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#1e3a5f', marginBottom: 24, fontFamily: HEADING }}>
              40 boards · AI‑powered · Free
            </p>
            <h2 style={{ fontSize: 'clamp(26px, 4vw, 40px)', fontWeight: 900, letterSpacing: '-0.025em', marginBottom: 14, fontFamily: HEADING, ...METALLIC }}>
              あなたのプロジェクトに合った<br />ボードを見つける
            </h2>
            <p style={{ fontSize: 13, color: '#334155', marginBottom: 44, lineHeight: 1.9 }}>
              用途・予算・接続要件——どんな条件でも即絞り込める。
            </p>
            <SearchBox searchPath="/board-finder/search" dark />
          </FadeUp>

        </div>

        {/* C: board photo marquee */}
        <div style={{ marginTop: 52, position: 'relative', overflow: 'hidden', zIndex: 10 }}>
          <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 72, background: 'linear-gradient(to right, #05070f, transparent)', zIndex: 2, pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: 72, background: 'linear-gradient(to left, #05070f, transparent)', zIndex: 2, pointerEvents: 'none' }} />
          <motion.div
            style={{ display: 'flex', gap: MARQUEE_GAP, paddingBottom: 2 }}
            animate={{ x: [0, -MARQUEE_SHIFT] }}
            transition={{ duration: 26, repeat: Infinity, ease: 'linear', repeatType: 'loop' }}
          >
            {[...SCROLL_BOARDS, ...SCROLL_BOARDS].map((b, i) => (
              <div key={i} style={{ position: 'relative', width: MARQUEE_W, height: 96, flexShrink: 0, borderRadius: 6, overflow: 'hidden', background: '#04060e' }}>
                <Image src={b.img} alt={b.name} fill className="object-cover object-center" sizes="140px" unoptimized />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(4,6,14,0.95) 0%, rgba(4,6,14,0.15) 55%, transparent 100%)' }} />
                <div style={{ position: 'absolute', bottom: 7, left: 8, right: 4 }}>
                  <p style={{ fontSize: 9, fontWeight: 700, color: '#e2e8f0', margin: 0, lineHeight: 1.3 }}>{b.name}</p>
                  <p style={{ fontSize: 8, color: '#475569', margin: 0, marginTop: 1 }}>{b.spec}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

    </main>
  )
}
