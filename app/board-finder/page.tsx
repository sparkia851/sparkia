import type { Metadata } from 'next'
import { SearchBox } from '../_components/SearchBox'
import { HeroBoardAnnotated } from '../_components/HeroBoardAnnotated'

export const metadata: Metadata = {
  title: 'Board Finder — マイコンボードAI選定ツール | Sparkia',
  description: '要件を入力するだけで最適なマイコンボードをAIが選定。Arduino・ESP32・Raspberry Pi Picoなど40種から即絞り込み。無料で使えるマイコン検索ツール。',
}

const QUERY_EXAMPLES = [
  { label: 'Lチカ・入門',       q: 'Lチカ入門に使いたい' },
  { label: 'Wi-Fi IoT',         q: 'Wi-Fiでデータを送りたい' },
  { label: 'USB キーボード',     q: 'USBキーボードとして動かしたい' },
  { label: 'LoRa 長距離',       q: 'LoRaで長距離通信したい' },
  { label: '小型・省スペース',   q: '小型でブレッドボードに挿したい' },
  { label: 'AI・機械学習',       q: 'IMUセンサーと機械学習に使いたい' },
]

export default function BoardFinderPage() {
  return (
    <main>
      <section className="bg-gray-950 text-white relative">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "url('/pcb-pattern-dark.svg')",
            backgroundSize: '240px 240px',
          }}
        />
        <div className="relative max-w-5xl mx-auto px-4 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="text-center md:text-left">
              <p className="text-xs font-semibold tracking-widest uppercase text-blue-400 mb-4">
                Board Finder
              </p>
              <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight mb-3">
                「要件を入力」するだけで<br />
                <span className="text-blue-400">最適なマイコンボード</span>を選べる
              </h1>
              <p className="text-gray-400 text-sm mb-8">
                おすすめ度・スペック・特徴をランキング形式で表示。40種のボードから即絞り込み。
              </p>
              <SearchBox searchPath="/board-finder/search" />
            </div>
            <div className="flex justify-center md:justify-end">
              <div className="w-full max-w-sm md:max-w-none">
                <HeroBoardAnnotated />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-gray-200 bg-white">
        <div className="max-w-3xl mx-auto px-4 py-10">
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { n: '01', title: '要件を入力',    body: '「Wi-Fi対応で安いもの」「初心者向け」など自由に記入' },
              { n: '02', title: 'ランキング表示', body: 'おすすめ度・スペック・特徴・価格を一覧で比較' },
              { n: '03', title: 'ボードを選択',   body: '総評と公式ページを確認して最適な一枚を決める' },
            ].map(s => (
              <div key={s.n} className="flex gap-4">
                <span className="text-3xl font-black text-gray-200 leading-none shrink-0">{s.n}</span>
                <div>
                  <p className="font-bold text-gray-900 text-sm">{s.title}</p>
                  <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 py-10">
        <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-4">よく使われる検索</p>
        <div className="flex flex-wrap gap-2">
          {QUERY_EXAMPLES.map(ex => (
            <a
              key={ex.q}
              href={`/board-finder/search?q=${encodeURIComponent(ex.q)}`}
              className="px-4 py-2 rounded-full border border-gray-200 bg-white text-sm text-gray-700 hover:border-blue-400 hover:text-blue-700 hover:bg-blue-50 transition-colors"
            >
              {ex.label}
            </a>
          ))}
        </div>

        <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mt-10 mb-4">
          対応ボード一覧（40種）
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm">
          {[
            ['Uno Rev3',               '入門定番'],
            ['Uno R4 Minima',          '入門'],
            ['Uno R4 WiFi',            'WiFi / BLE'],
            ['Nano',                   '小型入門'],
            ['Nano Every',             '小型・高性能'],
            ['Nano 33 BLE Sense',      'BLE / センサー / ML'],
            ['Nano 33 IoT',            'WiFi / BLE 小型'],
            ['Nano ESP32',             'WiFi / Python'],
            ['Nano RP2040 Connect',    'WiFi / BLE / ML'],
            ['Mega 2560',              '多ピン / 大型'],
            ['Leonardo',               'USB HID'],
            ['Micro',                  'USB HID 小型'],
            ['MKR WiFi 1010',          'WiFi / バッテリー'],
            ['MKR WAN 1300',           'LoRa'],
            ['Portenta H7',            '産業 / AI'],
            ['GIGA R1 WiFi',           'フラッグシップ'],
            ['Pico',                   'Python / 入門'],
            ['Pico W',                 'Python / WiFi'],
            ['Pico 2',                 'Python / 高性能'],
            ['Pico 2 W',               'Python / WiFi 高性能'],
            ['RP2040-Zero',            '超小型 Pico'],
            ['ESP8266 NodeMCU',        '格安 WiFi'],
            ['ESP32-DevKitC',          'WiFi / BLE 定番'],
            ['ESP32-S2 DevKitC',       'WiFi / ネイティブUSB'],
            ['ESP32-S3-DevKitC',       'AI / USB-HID'],
            ['ESP32-C3-DevKitM',       '省電力 / 安価'],
            ['ESP32-C3 SuperMini',     '超小型 WiFi / BLE'],
            ['ESP32-C6 DevKitC',       'WiFi 6 / Zigbee'],
            ['ESP32-H2 DevKitM',       'Zigbee / Thread / Matter'],
            ['XIAO SAMD21',            '最小 Arduino 互換'],
            ['XIAO ESP32C3',           '超小型 WiFi / BLE'],
            ['XIAO ESP32S3',           '超小型 AI / カメラ'],
            ['Wio Terminal',           '画面付き全部入り'],
            ['M5Stack Core2',          'タッチ画面付き'],
            ['M5StickC Plus2',         '超小型 / 画面付き'],
            ['M5Atom S3',              '極小 / Grove対応'],
            ['Adafruit Feather ESP32', 'バッテリー IoT'],
            ['BBC micro:bit v2',       '教育 / BLE'],
            ['Teensy 4.1',             '高性能 / 音楽 / USB'],
            ['STM32F103 Bluepill',     '格安 / 多ピン / 産業'],
          ].map(([name, tag]) => (
            <div key={name} className="flex items-center justify-between bg-white border border-gray-200 rounded-lg px-3 py-2">
              <span className="font-medium text-gray-800 text-xs">{name}</span>
              <span className="text-[10px] text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded-full ml-2 shrink-0">{tag}</span>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
