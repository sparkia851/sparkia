export type EWCategory = 'マイコン' | 'センサー'
export type Level = 'beginner' | 'intermediate' | 'advanced'

export type EWProduct = {
  id: string
  category: EWCategory
  name: string
  level: Level
  score: number
  points: string[]
  verdict: string
  price: string
  imageUrl: string
  shopUrl: string
  tags: string[]
  connectivity?: string[]
  interface?: string[]
  measureTarget?: string
}

const BASE = 'https://imagedelivery.net/QondspN4HIUvB_R16-ddAQ/61d869cdfd2e73482d08d4c0/'
const SHOP = 'https://electronicwork.stores.jp/'

export const catalog: EWProduct[] = [
  // ───────────────── マイコン ─────────────────
  {
    id: 'uno-r3',
    category: 'マイコン',
    name: 'Arduino UNO R3 互換ボード',
    level: 'beginner',
    score: 4.8,
    points: [
      'ATmega328P搭載のArduino定番互換ボード。正規品と同じピン配置',
      '書籍・サンプルコードが豊富で初心者に最適な入門機',
      'CH340G搭載でWindows/Mac/Linuxで即使用可能',
    ],
    verdict: '電子工作の定番入門ボード。まず最初に使うならこれ。',
    price: '¥1,110〜',
    imageUrl: BASE + '0fb1411b77f474ce3ed4.png/fit=cover,w=920,h=920',
    shopUrl: SHOP,
    tags: ['入門', '初心者', 'arduino', 'uno', 'atmega328p', '定番', 'lチカ', '学習', '互換'],
    connectivity: [],
  },
  {
    id: 'nano-atmega328p',
    category: 'マイコン',
    name: 'Arduino Nano 互換ボード (ATmega328P)',
    level: 'beginner',
    score: 4.5,
    points: [
      'UNOと同じATmega328Pをブレッドボードに直挿しできる小型サイズ',
      'Type-B/Type-C両対応で接続が便利',
      'アナログ8本・デジタル14本とNanoにしては豊富なI/O',
    ],
    verdict: 'ブレッドボードで素早くプロトタイプを作る定番小型ボード。',
    price: '¥890',
    imageUrl: BASE + 'aa9a3452da49caf45a3c.png/fit=cover,w=920,h=920',
    shopUrl: SHOP,
    tags: ['小型', 'nano', 'ブレッドボード', 'arduino', 'atmega328p', '入門', 'コンパクト'],
    connectivity: [],
  },
  {
    id: 'nano-supermini',
    category: 'マイコン',
    name: 'Arduino Nano 互換ボード (SuperMini)',
    level: 'beginner',
    score: 4.4,
    points: [
      '26×21mmの超コンパクト設計。通常のNanoよりさらに小さい',
      'Type-C接続でArduino IDEからそのまま開発可能',
      '基板に直付けしたい組み込みプロジェクトに最適',
    ],
    verdict: 'Nanoより一回り小さく、省スペース・組み込みに最適な超小型ボード。',
    price: '¥850',
    imageUrl: BASE + '9668ee8ae2b32c3563e8.png/fit=cover,w=920,h=920',
    shopUrl: SHOP,
    tags: ['超小型', '最小', 'nano', 'supermini', 'arduino', 'コンパクト', '省スペース', '組み込み'],
    connectivity: [],
  },
  {
    id: 'mega-2560',
    category: 'マイコン',
    name: 'Arduino Mega 互換ボード (ATmega2560)',
    level: 'intermediate',
    score: 4.3,
    points: [
      'デジタル54本・アナログ16本で業界最多クラスのI/O数',
      '3Dプリンタ(RAMPS)・大型ロボット制御に多数の実績',
      'UART×4搭載でマルチデバイス同時接続が可能',
    ],
    verdict: '大量のI/Oが必要な複雑なプロジェクトに最適なビッグボード。',
    price: '¥2,490〜',
    imageUrl: BASE + '35e6ed9ab8089b5abe80.png/fit=cover,w=920,h=920',
    shopUrl: SHOP,
    tags: ['多ピン', 'mega', 'arduino', '3dプリンタ', 'ロボット', 'モーター', '多チャンネル', 'atmega2560'],
    connectivity: [],
  },
  {
    id: 'uno-r4-wifi',
    category: 'マイコン',
    name: 'Arduino UNO R4 WiFi',
    level: 'intermediate',
    score: 4.6,
    points: [
      '32bit Cortex-M4(48MHz)とWiFi/BLE(ESP32-S3)を同時搭載',
      'UNO R3と完全互換のピン配置でシールドもそのまま使用可能',
      'Type-C接続・技適取得済みで安心して使える最新世代UNO',
    ],
    verdict: 'Arduinoの使いやすさにWiFi・BLE・32bitを追加した最新旗艦モデル。',
    price: '¥4,990',
    imageUrl: BASE + '9f23b9978eaceadc329c.png/fit=cover,w=920,h=920',
    shopUrl: SHOP,
    tags: ['wifi', 'ble', 'bluetooth', 'arduino', 'r4', 'uno', '32bit', 'iot', '無線', '最新', '互換'],
    connectivity: ['WiFi', 'BLE'],
  },
  {
    id: 'pro-mini',
    category: 'マイコン',
    name: 'Arduino Pro Mini 互換ボード',
    level: 'intermediate',
    score: 4.0,
    points: [
      '33×18mmの超小型設計。Nano以上に省スペースで基板に直付け可能',
      '3.3V/8MHz・5V/16MHzの2バージョンでプロジェクトに合わせて選択',
      'シリアル変換モジュール(別売)で書き込み。乾電池駆動に最適',
    ],
    verdict: 'USBなし・超省スペース・低消費電力。電池駆動の組み込みに最適。',
    price: '¥715〜',
    imageUrl: BASE + 'b7e33f788b2ca9d9d795.png/fit=cover,w=920,h=920',
    shopUrl: SHOP,
    tags: ['超小型', 'pro mini', 'arduino', '省電力', '電池', '組み込み', '3.3v', '低消費電力'],
    connectivity: [],
  },
  {
    id: 'pro-micro',
    category: 'マイコン',
    name: 'Leonardo Pro Micro (ATmega32U4)',
    level: 'intermediate',
    score: 4.4,
    points: [
      'ATmega32U4のUSBネイティブHID対応でキーボード・マウスとして動作',
      'PCに挿すだけで入力デバイスとして認識。ドライバ不要',
      'マクロパッド・ゲームコントローラー自作に多数の実績',
    ],
    verdict: 'USBキーボード/マウスエミュレーションが必要なら唯一の選択肢。',
    price: '¥1,180〜',
    imageUrl: BASE + '3444f47b25ee78940f0e.png/fit=cover,w=920,h=920',
    shopUrl: SHOP,
    tags: ['usb', 'hid', 'キーボード', 'マウス', 'ゲームパッド', 'マクロ', '入力デバイス', 'atmega32u4'],
    connectivity: ['USB-HID'],
  },
  {
    id: 'attiny85',
    category: 'マイコン',
    name: 'ATtiny85 USB 開発ボード',
    level: 'intermediate',
    score: 3.9,
    points: [
      '親指サイズ以下の超小型マイコン。USB直挿しで書き込み可能',
      'I2C・SPI対応で小型ながら多様なセンサーと接続可能',
      '超省スペースな最終形態の組み込みに最適',
    ],
    verdict: 'とにかく小さく完結させたいミニマム組み込みプロジェクトに。',
    price: '¥665〜',
    imageUrl: BASE + '210fe7f9a1d0c256918a.png/fit=cover,w=920,h=920',
    shopUrl: SHOP,
    tags: ['超小型', '最小', 'attiny85', 'arduino', '組み込み', '省スペース', 'usb'],
    connectivity: ['USB-HID'],
  },
  {
    id: 'esp32-30pin',
    category: 'マイコン',
    name: 'ESP-WROOM-32 開発ボード (30Pin Type-C)',
    level: 'intermediate',
    score: 4.7,
    points: [
      'WiFi+BLE内蔵で世界最普及のIoTマイコン。情報量が圧倒的',
      '240MHz デュアルコア・520KB RAMでArduino系より段違いの処理性能',
      'Arduino IDE・MicroPython・ESP-IDFと複数の開発環境に対応',
    ],
    verdict: 'IoTプロジェクトのデファクトスタンダード。WiFi+BLEで何でもできる。',
    price: '¥995',
    imageUrl: BASE + '209a57ab8ffccad71722.png/fit=cover,w=920,h=920',
    shopUrl: SHOP,
    tags: ['wifi', 'ble', 'bluetooth', 'iot', 'esp32', '定番', 'arduino', 'python', 'micropython', '無線', 'クラウド'],
    connectivity: ['WiFi', 'BLE'],
  },
  {
    id: 'esp32-c3',
    category: 'マイコン',
    name: 'ESP32-C3-WROOM-02-N4',
    level: 'intermediate',
    score: 4.2,
    points: [
      'RISC-Vコア採用のESP32最安クラス。WiFi+BLE5.0を490円で実現',
      'GPIO15本・ADC6本でシンプルなIoTノードに最適なスペック',
      '技適取得済みで安心して日本国内で使用可能',
    ],
    verdict: '最安クラスでWiFi+BLEを実現。コスト重視のIoTノードに最適。',
    price: '¥490',
    imageUrl: BASE + '340e2e46c7a68e0a9072.jpg/fit=cover,w=920,h=920',
    shopUrl: SHOP,
    tags: ['wifi', 'ble', 'iot', '安い', '格安', '予算', 'esp32-c3', 'risc-v', '低コスト', '技適'],
    connectivity: ['WiFi', 'BLE'],
  },
  {
    id: 'esp32-s3-cam',
    category: 'マイコン',
    name: 'ESP32-S3-WROOM CAMボード (FNK0085)',
    level: 'advanced',
    score: 4.5,
    points: [
      'ESP32-S3+OV3660カメラでリアルタイム映像取得・AIを1枚で実現',
      'Type-C対応・技適取得済みで日本でも安心して使用可能',
      'カメラモジュール・ケーブルが全て付属。すぐ始められるセット',
    ],
    verdict: 'カメラ映像・AIエッジ処理・WiFi通信を一枚で完結させる最有力候補。',
    price: '¥2,865〜',
    imageUrl: BASE + '5aeeb50e11542f720d84.png/fit=cover,w=920,h=920',
    shopUrl: SHOP,
    tags: ['カメラ', 'camera', 'ai', '画像認識', 'esp32-s3', 'wifi', 'ble', '映像', '技適', '機械学習'],
    connectivity: ['WiFi', 'BLE'],
  },
  {
    id: 't-display-esp32',
    category: 'マイコン',
    name: 'T-Display ESP32 1.14インチ',
    level: 'intermediate',
    score: 4.3,
    points: [
      '1.14インチカラー液晶ディスプレイをESP32に直接搭載',
      'WiFi+BLE内蔵なのでIoTデバイスとして即使用可能',
      '表示＋通信を1枚で完結。M5Stackより安価なディスプレイ付きESP32',
    ],
    verdict: '小型ディスプレイ付きIoTデバイスを低コストで作るならこれ。',
    price: '¥1,890',
    imageUrl: BASE + '0833420eabf027e7e765.png/fit=cover,w=920,h=920',
    shopUrl: SHOP,
    tags: ['ディスプレイ', '画面', 'lcd', 'esp32', 'wifi', 'ble', '表示', 'iot'],
    connectivity: ['WiFi', 'BLE'],
  },
  {
    id: 'pico-typec',
    category: 'マイコン',
    name: 'Raspberry Pi Pico (Type-C)',
    level: 'beginner',
    score: 4.6,
    points: [
      'RP2040デュアルコア(最大133MHz)でArduinoより高い処理性能',
      'MicroPython・CircuitPython対応でPythonから電子工作を始められる',
      'Type-C接続でSPI×2・I2C×2・UART×3・ADC×3と豊富なI/F',
    ],
    verdict: 'Pythonで電子工作を始めたい入門者からC/C++使いまで幅広く対応。',
    price: '¥790〜',
    imageUrl: BASE + '77a94d5e62950fc6deef.jpg/fit=cover,w=920,h=920',
    shopUrl: SHOP,
    tags: ['python', 'micropython', 'pico', 'rp2040', '入門', 'ラズパイ', 'raspberry', 'コスパ'],
    connectivity: [],
  },
  {
    id: 'pico-2w',
    category: 'マイコン',
    name: 'Raspberry Pi Pico 2W',
    level: 'beginner',
    score: 4.8,
    points: [
      'RP2350+CYW43439でWiFi(802.11n)+Bluetooth 5.2を搭載した最新Pico',
      '520KB RAM・4MB Flashとスペック大幅向上。技適取得済み',
      'MicroPython・Arduino対応。PicoのコードがほぼそのままPico 2Wで動く',
    ],
    verdict: 'PicoにWiFi/BLEを追加した最新世代。Pythonで始めるIoTの最有力候補。',
    price: '¥1,565',
    imageUrl: BASE + 'f53f231a03ec91a09f22.png/fit=cover,w=920,h=920',
    shopUrl: SHOP,
    tags: ['wifi', 'ble', 'bluetooth', 'python', 'micropython', 'pico', 'rp2350', 'ラズパイ', 'iot', '技適'],
    connectivity: ['WiFi', 'BLE'],
  },
  {
    id: 'rp2040-zero',
    category: 'マイコン',
    name: 'RP2040-Zero',
    level: 'beginner',
    score: 4.2,
    points: [
      '23.5×18mmの超小型。Pico(51×21mm)の半分以下のサイズ',
      'USB-C搭載・WS2812 RGBオンボード。Picoの豊富な情報がそのまま活用可能',
      'キャスタレートで基板直付けもでき、組み込みプロジェクトに最適',
    ],
    verdict: 'Picoの機能を最小サイズに凝縮。省スペースのRP2040プロジェクトに最適。',
    price: '¥740',
    imageUrl: BASE + '6e1ca0028a3835eb1958.png/fit=cover,w=920,h=920',
    shopUrl: SHOP,
    tags: ['超小型', '最小', 'pico', 'rp2040', 'python', 'micropython', '省スペース'],
    connectivity: [],
  },
  {
    id: 'xiao-esp32c3',
    category: 'マイコン',
    name: 'XIAO ESP32C3',
    level: 'intermediate',
    score: 4.4,
    points: [
      '20×17.5mmの爪サイズ。WiFi+BLE 5を超小型ボディに搭載',
      '技適取得済み(R 204-B00704)で日本国内でも安心して使用可能',
      'LiPo充電回路・外部アンテナ付属。ウェアラブルIoTに最適な充実の仕様',
    ],
    verdict: '超小型WiFi+BLEの定番。XIAOエコシステムで拡張しやすい究極の小型IoT基板。',
    price: '¥1,080',
    imageUrl: BASE + '569204c37ac73b9a96b4.png/fit=cover,w=920,h=920',
    shopUrl: SHOP,
    tags: ['超小型', '最小', 'xiao', 'wifi', 'ble', 'esp32-c3', 'iot', '省スペース', 'ウェアラブル', '技適'],
    connectivity: ['WiFi', 'BLE'],
  },
  {
    id: 'xiao-esp32s3',
    category: 'マイコン',
    name: 'XIAO ESP32S3 (カメラセット)',
    level: 'advanced',
    score: 4.6,
    points: [
      '20×17.5mmにESP32-S3・カメラ・マイク・SDスロットを全部搭載',
      'OV2640カメラモジュール取り外し可能。AI・画像認識に即対応',
      '8MB PSRAM+8MB Flash搭載で複雑なMLモデルも動かせるパワー',
    ],
    verdict: '爪サイズでカメラ・AI・WiFi・BLEを全部入り。超小型カメラデバイスの決定版。',
    price: '¥2,620',
    imageUrl: BASE + '4059239a576371d7a7dc.png/fit=cover,w=920,h=920',
    shopUrl: SHOP,
    tags: ['超小型', 'カメラ', 'ai', '画像認識', 'xiao', 'esp32-s3', 'wifi', 'ble', 'マイク', 'tinyml'],
    connectivity: ['WiFi', 'BLE'],
  },
  {
    id: 'm5stack-core2',
    category: 'マイコン',
    name: 'M5Stack Core2 v1.1',
    level: 'intermediate',
    score: 4.5,
    points: [
      '2インチタッチディスプレイ・IMU・マイク・スピーカー・バッテリーをオールインワン搭載',
      'UIFlow・MicroPython・ArduinoIDEで開発可能。M5Stack最大エコシステム',
      'WiFi+BLE+16MB Flash+8MB PSRAM搭載。表示・通信・センシングを即開始',
    ],
    verdict: 'ディスプレイ付きスタンドアロン機器を最短で作るならCore2一択。',
    price: '¥8,640〜',
    imageUrl: BASE + '2b31791245a04079a6db.png/fit=cover,w=920,h=920',
    shopUrl: SHOP,
    tags: ['ディスプレイ', 'タッチ', 'm5stack', 'wifi', 'ble', 'スピーカー', 'マイク', 'バッテリー', 'オールインワン'],
    connectivity: ['WiFi', 'BLE'],
  },
  {
    id: 'rp2040-tiny',
    category: 'マイコン',
    name: 'RP2040-Tiny 開発キット',
    level: 'advanced',
    score: 3.9,
    points: [
      '本体基板(18×23.5mm)とUSBアダプタ基板が分離した独自設計',
      '本体から離れた位置にコネクタやリセットボタンを設置できる柔軟な設計',
      'MicroPython・Arduino・C/C++対応。組み込みケース設計の自由度が高い',
    ],
    verdict: 'コネクタ位置を自由に決めたい組み込みプロジェクト向けの変わり種RP2040。',
    price: '¥945〜',
    imageUrl: BASE + 'dd0e0477a41f712aa2cf.png/fit=cover,w=920,h=920',
    shopUrl: SHOP,
    tags: ['超小型', 'pico', 'rp2040', 'python', 'micropython', '組み込み', '分離'],
    connectivity: [],
  },
  {
    id: 'raspberry-pi-5',
    category: 'マイコン',
    name: 'Raspberry Pi 5',
    level: 'advanced',
    score: 4.7,
    points: [
      '2.4GHz 4コア Cortex-A76搭載。前世代比2〜3倍の処理性能',
      'PCIe 2.0・USB 3.0×2・カメラ2系統と大幅に拡張されたインターフェース',
      'WiFi(802.11ac)+Bluetooth 5.0+RTCを標準搭載。正規品・技適取得済み',
    ],
    verdict: 'Linux・高度なAI・複雑な処理が必要ならPi 5が唯一の選択肢。',
    price: '¥22,500〜',
    imageUrl: BASE + '9f90e3d10c0764b8bb90.png/fit=cover,w=920,h=920',
    shopUrl: SHOP,
    tags: ['linux', 'ai', 'python', '高性能', 'ラズパイ', 'raspberry', 'pi5', 'wifi', 'bluetooth', 'カメラ', 'sbc'],
    connectivity: ['WiFi', 'BLE'],
  },

  // ───────────────── センサー ─────────────────
  {
    id: 'dht11',
    category: 'センサー',
    name: 'DHT11 温湿度センサーモジュール',
    level: 'beginner',
    score: 4.5,
    points: [
      '温度(0〜50℃)と湿度(20〜90%)を1本のデータ線で同時取得',
      'Arduinoライブラリが豊富で初心者でも数行で動作',
      'ケーブル付きでブレッドボード接続が簡単',
    ],
    verdict: '温湿度センサー入門の定番。まず試すならこれ一択。',
    price: '¥270',
    imageUrl: BASE + 'a1eee340ae9194627830.png/fit=cover,w=920,h=920',
    shopUrl: SHOP,
    tags: ['温度', '湿度', '温湿度', 'dht11', '入門', '初心者', '定番', '気象', '室内環境'],
    interface: ['デジタル'],
    measureTarget: '温度・湿度',
  },
  {
    id: 'dht22',
    category: 'センサー',
    name: 'DHT22 温湿度センサーモジュール',
    level: 'beginner',
    score: 4.6,
    points: [
      'DHT11より精度が高く、温度(-40〜80℃)・湿度(0〜100%)の広範囲に対応',
      '±0.5℃・±2%の高精度でより信頼性の高いデータを取得',
      'DHT11と同じライブラリで使えるのでコード変更なしに移行可能',
    ],
    verdict: 'DHT11より広範囲・高精度。本格的な温湿度計測にはこちら。',
    price: '¥420',
    imageUrl: BASE + '7c8e10f569bc3790faff.png/fit=cover,w=920,h=920',
    shopUrl: SHOP,
    tags: ['温度', '湿度', '温湿度', 'dht22', '高精度', '広範囲', '気象', '室内環境'],
    interface: ['デジタル'],
    measureTarget: '温度・湿度',
  },
  {
    id: 'sht31',
    category: 'センサー',
    name: 'SHT31 温湿度センサーモジュール',
    level: 'intermediate',
    score: 4.7,
    points: [
      'I2C通信でATmega系からESP32まで幅広いマイコンに接続可能',
      '±0.3℃・±2%の最高クラス精度。業務・研究用途にも対応',
      '温度-40〜+125℃・湿度0〜100%の最も広い測定範囲',
    ],
    verdict: '精度・範囲ともに最上位クラス。高信頼性が必要な用途に。',
    price: '¥640',
    imageUrl: BASE + 'a6e767ba15c48e2dc3c3.png/fit=cover,w=920,h=920',
    shopUrl: SHOP,
    tags: ['温度', '湿度', '温湿度', 'sht31', '高精度', 'i2c', '業務', '研究'],
    interface: ['I2C'],
    measureTarget: '温度・湿度',
  },
  {
    id: 'bmp280',
    category: 'センサー',
    name: 'BMP280 気圧・温度センサーモジュール',
    level: 'beginner',
    score: 4.4,
    points: [
      'I2C/SPI両対応で接続方法を選べる高精度気圧・温度センサー',
      '20bitの高分解能で天気予報・高度計測・気圧変化の検知が可能',
      '190円の低コストで気象観測ステーションに最適',
    ],
    verdict: '気圧と温度を低コストで測りたいなら最初に選ぶべき定番センサー。',
    price: '¥190',
    imageUrl: BASE + 'ca2e8bfde25f99c08217.png/fit=cover,w=920,h=920',
    shopUrl: SHOP,
    tags: ['気圧', '温度', '高度', '気象', 'bmp280', 'i2c', 'spi', '天気', '天気予報', '安い'],
    interface: ['I2C', 'SPI'],
    measureTarget: '気圧・温度',
  },
  {
    id: 'bme280',
    category: 'センサー',
    name: 'BME280 高精度気圧・温湿度センサー (5V)',
    level: 'beginner',
    score: 4.7,
    points: [
      '気圧・温度・湿度の3種類を1つのセンサーで同時取得',
      'BMP280との上位互換。同じI2Cアドレスで簡単に移行可能',
      '5V対応モデルなのでArduino UNOに直接接続可能',
    ],
    verdict: '気圧・温度・湿度を1つで。環境モニタリングのオールインワン定番センサー。',
    price: '¥990',
    imageUrl: BASE + 'a87ee72fbf00bc15d36e.png/fit=cover,w=920,h=920',
    shopUrl: SHOP,
    tags: ['気圧', '温度', '湿度', '環境', 'bme280', 'i2c', '気象', '天気', 'オールインワン', '5v'],
    interface: ['I2C'],
    measureTarget: '気圧・温度・湿度',
  },
  {
    id: 'mh-z19e',
    category: 'センサー',
    name: 'MH-Z19E CO2センサー',
    level: 'intermediate',
    score: 4.6,
    points: [
      'NDIR(非分散型赤外線)方式で高精度にCO2濃度(400〜5000ppm)を計測',
      '起動時間が約1分と短く、シリアル/PWM両対応で接続が柔軟',
      'ESP32・Arduinoと組み合わせてCO2換気モニターを簡単に自作可能',
    ],
    verdict: '室内のCO2濃度を正確に測るなら最も定番の高精度センサー。',
    price: '¥2,450',
    imageUrl: BASE + '9036c6e0945e25a3eb25.png/fit=cover,w=920,h=920',
    shopUrl: SHOP,
    tags: ['co2', '二酸化炭素', '空気質', '換気', '室内環境', 'mh-z19', 'uart', 'pwm', 'ndir'],
    interface: ['UART', 'PWM'],
    measureTarget: 'CO2濃度',
  },
  {
    id: 'hc-sr04',
    category: 'センサー',
    name: 'HC-SR04 超音波距離センサー',
    level: 'beginner',
    score: 4.5,
    points: [
      '2〜400cmの範囲を超音波で非接触計測。分解能0.3cm',
      '電源5V・4ピン接続のシンプル設計でArduinoと即接続',
      '障害物検知・ロボット・駐車センサーに広く使われる定番センサー',
    ],
    verdict: '距離センサーの定番。270円で始められるロボット・障害物検知の第一歩。',
    price: '¥270',
    imageUrl: BASE + '2f9e38157c1db62914f7.png/fit=cover,w=920,h=920',
    shopUrl: SHOP,
    tags: ['距離', '超音波', 'hc-sr04', 'ロボット', '障害物', '非接触', '測距', '入門', '定番'],
    interface: ['デジタル'],
    measureTarget: '距離',
  },
  {
    id: 'hc-sr501',
    category: 'センサー',
    name: 'HC-SR501 焦電型赤外線センサー (人感)',
    level: 'beginner',
    score: 4.6,
    points: [
      '人体の赤外線変化を検出。感知距離5〜7m・検出角度120度',
      '遅延時間・感度をボリュームで調整可能な使い勝手のよい設計',
      '自動点灯・侵入検知・スマートホームに広く使われる定番PIRセンサー',
    ],
    verdict: '人が来たら何かをしたいプロジェクトに。最もよく使われる人感センサー。',
    price: '¥230',
    imageUrl: BASE + '235c532b97eaf89a2cef.png/fit=cover,w=920,h=920',
    shopUrl: SHOP,
    tags: ['人感', 'pir', '赤外線', '人体検知', '自動', 'hc-sr501', '動体', 'スマートホーム'],
    interface: ['デジタル'],
    measureTarget: '人感・動体',
  },
  {
    id: 'rcwl-0516',
    category: 'センサー',
    name: 'RCWL-0516 マイクロ波レーダーセンサー',
    level: 'beginner',
    score: 4.1,
    points: [
      'ドップラーレーダーで障害物越しにも人体・動体を7m以内で検出',
      'HC-SR501と違い光の影響を受けないため昼夜問わず安定動作',
      '110円の最安クラス。4〜28Vの広い動作電圧で使い回しやすい',
    ],
    verdict: '壁越し・暗所での人感検知が必要な場合はHC-SR501よりこちら。',
    price: '¥110',
    imageUrl: BASE + 'c1b37520162dfcb44825.png/fit=cover,w=920,h=920',
    shopUrl: SHOP,
    tags: ['人感', 'マイクロ波', '動体', 'rcwl-0516', '安い', '障害物越し', '暗所', 'ドップラー'],
    interface: ['デジタル'],
    measureTarget: '人感・動体',
  },
  {
    id: 'gy-521',
    category: 'センサー',
    name: 'GY-521 (MPU-6050) 3軸ジャイロ・加速度',
    level: 'intermediate',
    score: 4.4,
    points: [
      '3軸加速度+3軸ジャイロの6軸データをI2Cで取得',
      '傾き・回転・振動の高精度な計測が可能。ドローン・ロボットに定番',
      '16ビット精度・内部ADコンバータ搭載で外部回路不要',
    ],
    verdict: '傾き・動き・回転を計測するなら最もポピュラーな6軸IMUセンサー。',
    price: '¥287〜',
    imageUrl: BASE + '124d12a32c2bee3cdc23.png/fit=cover,w=920,h=920',
    shopUrl: SHOP,
    tags: ['imu', '加速度', 'ジャイロ', '傾き', '回転', 'mpu6050', 'gy-521', 'ドローン', 'ロボット', 'i2c', '6軸'],
    interface: ['I2C'],
    measureTarget: '加速度・ジャイロ',
  },
  {
    id: 'ds18b20',
    category: 'センサー',
    name: 'DS18B20 水温センサー',
    level: 'beginner',
    score: 4.5,
    points: [
      '防水仕様の温度センサー。-10℃〜+85℃の水中・液体の温度計測に対応',
      '約1mのケーブルでマイコンから離れた箇所の温度計測が可能',
      'OneWire通信で複数センサーを1本のデータ線に並列接続可能',
    ],
    verdict: '水槽・水耕栽培・配管の温度測定に最適な防水温度センサー。',
    price: '¥305〜',
    imageUrl: BASE + 'c66a09eba00f17a656b4.png/fit=cover,w=920,h=920',
    shopUrl: SHOP,
    tags: ['温度', '防水', '水温', '液体', 'ds18b20', '水槽', '水耕栽培', '1-wire', 'onewire'],
    interface: ['1-Wire'],
    measureTarget: '温度(防水)',
  },
  {
    id: 'mq-2',
    category: 'センサー',
    name: 'MQ-2 ガスセンサー',
    level: 'beginner',
    score: 4.2,
    points: [
      'プロパン・天然ガス・LPG・煙など可燃性ガスを検知',
      'アナログ/デジタル両出力対応でArduinoのADCに直接接続可能',
      '約20秒のウォームアップ後から安定した検知が可能',
    ],
    verdict: '家庭のガス漏れ・火災検知・煙報知器の自作に最もよく使われるセンサー。',
    price: '¥330',
    imageUrl: BASE + 'e4e57c6034f19b64ec69.png/fit=cover,w=920,h=920',
    shopUrl: SHOP,
    tags: ['ガス', '煙', '可燃性', 'mq-2', 'プロパン', '天然ガス', '火災', '安全', 'アナログ'],
    interface: ['アナログ', 'デジタル'],
    measureTarget: 'ガス・煙',
  },
  {
    id: 'mq-135',
    category: 'センサー',
    name: 'MQ-135 ガスセンサー',
    level: 'beginner',
    score: 4.2,
    points: [
      'アンモニア・ベンゼン・煙・CO2・窒素酸化物など複合的な空気汚染を検知',
      'アナログ/デジタル両出力。10〜1000ppmの広い検知範囲',
      '室内空気質モニタリング・農業・工場の環境管理に活用',
    ],
    verdict: '複数の有害ガスを一括検知。空気品質モニタリングの定番センサー。',
    price: '¥350',
    imageUrl: BASE + 'd7d1167a4644af3a0ef4.png/fit=cover,w=920,h=920',
    shopUrl: SHOP,
    tags: ['ガス', '空気質', '空気', 'mq-135', 'アンモニア', '煙', '室内環境', '有害ガス'],
    interface: ['アナログ', 'デジタル'],
    measureTarget: '空気質・ガス',
  },
  {
    id: 'ky-037',
    category: 'センサー',
    name: 'KY-037 高感度音声センサー',
    level: 'beginner',
    score: 4.0,
    points: [
      'マイクで音を検知し、閾値以上でデジタル出力。アナログ出力も対応',
      '感度調整ポテンショメータ搭載で検知レベルを自由に設定',
      '拍手・音声コマンド・騒音アラートなどシンプルな音検知に最適',
    ],
    verdict: 'Arduinoで音を検知したい入門に。130円で始められる定番音センサー。',
    price: '¥130',
    imageUrl: BASE + '6f273e7624ce5bd68189.png/fit=cover,w=920,h=920',
    shopUrl: SHOP,
    tags: ['音', '音声', 'マイク', 'ky-037', '検知', '拍手', 'アナログ', '入門', '安い'],
    interface: ['アナログ', 'デジタル'],
    measureTarget: '音・音声',
  },
  {
    id: 'cds',
    category: 'センサー',
    name: 'CDSセンサー (フォトレジスター)',
    level: 'beginner',
    score: 4.1,
    points: [
      '光量に応じてアナログ・デジタル両方で出力。LM393コンパレータ内蔵',
      '明るさに応じた自動制御・夜間検知・照度に応じたLED制御に最適',
      '100円の最安クラス。光センサー入門に最も手軽な選択肢',
    ],
    verdict: '明るさ検知の入門に最適。最も安価で簡単に使える光センサー。',
    price: '¥100〜',
    imageUrl: BASE + '701ab15a3bf1d833c372.png/fit=cover,w=920,h=920',
    shopUrl: SHOP,
    tags: ['光', '明るさ', '照度', 'cds', 'フォトレジスター', '安い', '入門', '自動', '夜間'],
    interface: ['アナログ', 'デジタル'],
    measureTarget: '光・明るさ',
  },
  {
    id: 'gy-30',
    category: 'センサー',
    name: 'GY-30 デジタル光強度センサー',
    level: 'beginner',
    score: 4.3,
    points: [
      'BH1750FVI搭載で0〜65535lxの広い照度範囲を16bitデジタル値で取得',
      'I2C接続でArduino・ESP32から数行のコードで即使用可能',
      'CDSより精度が高く数値での照度管理が必要な場合に最適',
    ],
    verdict: '照度を正確な数値(lux)で取得したい場合はCDSよりこちら。',
    price: '¥340',
    imageUrl: BASE + '2a7853c9d76a633b6110.png/fit=cover,w=920,h=920',
    shopUrl: SHOP,
    tags: ['光', '照度', '明るさ', 'lux', 'gy-30', 'bh1750', 'i2c', '高精度', 'デジタル'],
    interface: ['I2C'],
    measureTarget: '照度',
  },
  {
    id: 'ttp223',
    category: 'センサー',
    name: 'TTP223 タッチセンサーモジュール',
    level: 'beginner',
    score: 4.2,
    points: [
      '静電容量式タッチをデジタル1本で検出。配線が超シンプル',
      '2.5〜5.5Vの広い電圧範囲で大半のマイコンに直結可能',
      '40円の驚異的な低コスト。タッチ入力の最安・最小選択肢',
    ],
    verdict: 'タッチ入力を最も手軽に追加できる40円センサー。入門に最適。',
    price: '¥40',
    imageUrl: BASE + '7ad76e0648a042bca8b8.png/fit=cover,w=920,h=920',
    shopUrl: SHOP,
    tags: ['タッチ', '静電容量', 'ttp223', '安い', '入門', '簡単', 'デジタル', 'ボタン'],
    interface: ['デジタル'],
    measureTarget: 'タッチ',
  },
  {
    id: 'soil-moisture',
    category: 'センサー',
    name: '土壌水分センサーモジュール',
    level: 'beginner',
    score: 4.1,
    points: [
      '土の水分量をアナログ電圧(0〜2.3V)で出力。3.3V/5V両対応',
      '56×20mmのコンパクト設計で鉢植え・農業実験に刺しやすいサイズ',
      '植物の水やりタイミング自動化・スマート農業入門に最適',
    ],
    verdict: '植物の水分管理を自動化したいプロジェクトの必需品センサー。',
    price: '¥130',
    imageUrl: BASE + '0e2df813beb3c0a63964.png/fit=cover,w=920,h=920',
    shopUrl: SHOP,
    tags: ['土壌', '水分', '植物', '農業', '水やり', '自動', 'スマート農業', 'アナログ'],
    interface: ['アナログ'],
    measureTarget: '土壌水分',
  },
  {
    id: 'mfrc-522',
    category: 'センサー',
    name: 'MFRC-522 ICカードモジュール',
    level: 'intermediate',
    score: 4.3,
    points: [
      '13.56MHz NFC/Mifare対応の非接触ICカードリーダー・ライター',
      'SPI接続でArduino・Raspberry Piから簡単に制御可能',
      'カード・タグが付属。入退室管理・認証システムの自作に最適',
    ],
    verdict: 'ICカードで認証・管理したい場合の定番モジュール。290円で始められる。',
    price: '¥290',
    imageUrl: BASE + '88174fd928adb1a9dab5.png/fit=cover,w=920,h=920',
    shopUrl: SHOP,
    tags: ['rfid', 'nfc', 'icカード', 'mfrc-522', '認証', '入退室', '非接触', 'spi', 'mifare'],
    interface: ['SPI'],
    measureTarget: 'ICカード・RFID',
  },
  {
    id: 'gy-906',
    category: 'センサー',
    name: 'GY-906 非接触赤外線温度センサー',
    level: 'intermediate',
    score: 4.5,
    points: [
      'MLX90614搭載で-70℃〜+380℃を非接触・±0.5℃精度で計測',
      'I2C接続・3〜5V対応。センサーに触れずに物体の表面温度を測定',
      '体温計・工業温度管理・料理温度測定など接触不可な用途に最適',
    ],
    verdict: '触れずに温度を測りたい場面の唯一の選択肢。体温計・炉温測定に。',
    price: '¥1,250',
    imageUrl: BASE + '3eb1b7e059ba754edd33.png/fit=cover,w=920,h=920',
    shopUrl: SHOP,
    tags: ['温度', '非接触', '赤外線', 'gy-906', 'mlx90614', '体温', '表面温度', 'i2c'],
    interface: ['I2C'],
    measureTarget: '温度(非接触)',
  },
]

// ── keyword → score ────────────────────────────────────────────────────────

type KeyMap = { keywords: string[]; products: string[]; weight: number }

const KEYWORD_MAPS: KeyMap[] = [
  // 温湿度
  { keywords: ['温度', '温湿度', '気温', '暑', '寒', '熱', '冷', '体温'], products: ['dht11', 'dht22', 'sht31', 'bme280', 'bmp280', 'ds18b20', 'gy-906'], weight: 3 },
  { keywords: ['湿度', '湿'], products: ['dht11', 'dht22', 'sht31', 'bme280'], weight: 3 },
  { keywords: ['気圧', '天気', '天気予報', '高度', '気象'], products: ['bmp280', 'bme280'], weight: 3 },
  { keywords: ['co2', '二酸化炭素', '換気', '換気モニター', '空気', '空気質', '室内'], products: ['mh-z19e'], weight: 4 },
  { keywords: ['防水', '水温', '水槽', '水中', '液体', '水耕'], products: ['ds18b20'], weight: 4 },
  { keywords: ['非接触', '触れずに', '体温計', '表面温度', '物体温度'], products: ['gy-906'], weight: 4 },

  // 距離・動き
  { keywords: ['距離', '超音波', '測距', '近づ', '離れ'], products: ['hc-sr04'], weight: 4 },
  { keywords: ['人感', '人が来', '人が通', '人体', '動体', '動き', '検知', '侵入', '自動', '自動点灯'], products: ['hc-sr501', 'rcwl-0516'], weight: 3 },
  { keywords: ['壁越し', '暗所', '光の', 'レーダー', 'マイクロ波'], products: ['rcwl-0516'], weight: 4 },
  { keywords: ['傾き', '加速度', 'ジャイロ', '振動', 'imu', '6軸', '回転', '角度', 'ドローン'], products: ['gy-521'], weight: 4 },

  // ガス・環境
  { keywords: ['ガス', 'ガス漏れ', '可燃', 'lpg', 'プロパン', '煙', '火災', '煙感知', '煙報知'], products: ['mq-2'], weight: 4 },
  { keywords: ['空気質', '有害ガス', 'アンモニア'], products: ['mq-135'], weight: 4 },

  // 光・音
  { keywords: ['光', '明るさ', '照度', '光量', '夜間'], products: ['cds', 'gy-30'], weight: 3 },
  { keywords: ['lux', '照度計', '正確な', '高精度な照度'], products: ['gy-30'], weight: 4 },
  { keywords: ['音', '音声', '拍手', '騒音', 'マイク', '音を検知'], products: ['ky-037'], weight: 4 },

  // タッチ・入力
  { keywords: ['タッチ', 'touch', '静電', '触れると'], products: ['ttp223'], weight: 4 },
  { keywords: ['カード', 'rfid', 'nfc', '非接触カード', '認証', '入退室', 'タグ', 'mifare'], products: ['mfrc-522'], weight: 4 },

  // 植物・農業
  { keywords: ['植物', '水やり', '土壌', '水分', '農業', '家庭菜園', '水耕栽培', 'スマート農業'], products: ['soil-moisture', 'dht11', 'dht22', 'bme280'], weight: 3 },

  // WiFi・無線・IoT
  { keywords: ['wifi', 'wi-fi', '無線', 'iot', 'クラウド', 'インターネット', 'スマートホーム', 'ネット', 'サーバー'], products: ['esp32-30pin', 'pico-2w', 'uno-r4-wifi', 'esp32-c3', 'xiao-esp32c3'], weight: 3 },
  { keywords: ['bluetooth', 'ble', 'スマホ', 'スマートフォン', '携帯', 'アプリ', '通知'], products: ['esp32-30pin', 'pico-2w', 'uno-r4-wifi', 'm5stack-core2'], weight: 3 },

  // Python
  { keywords: ['python', 'micropython', 'circuitpython', 'パイソン'], products: ['pico-typec', 'pico-2w', 'rp2040-zero', 'rp2040-tiny', 'raspberry-pi-5'], weight: 4 },

  // カメラ・AI
  { keywords: ['カメラ', '写真', '映像', '撮影', '動画', '画像認識', 'camera'], products: ['esp32-s3-cam', 'xiao-esp32s3', 'raspberry-pi-5'], weight: 4 },
  { keywords: ['ai', '機械学習', '推論', 'tinyml', '顔認識', '物体検出'], products: ['xiao-esp32s3', 'esp32-s3-cam', 'raspberry-pi-5'], weight: 4 },

  // ディスプレイ
  { keywords: ['ディスプレイ', '画面', 'lcd', 'tft', '表示', '液晶', '時計', 'オメーター'], products: ['t-display-esp32', 'm5stack-core2'], weight: 4 },

  // 小型・省スペース
  { keywords: ['小型', '超小型', '省スペース', 'コンパクト', 'tiny', 'ミニ', 'ウェアラブル'], products: ['nano-supermini', 'xiao-esp32c3', 'rp2040-zero', 'attiny85', 'nano-atmega328p'], weight: 3 },

  // USB HID・キーボード
  { keywords: ['usb', 'キーボード', 'マウス', 'hid', 'マクロ', 'ゲームパッド', 'コントローラー', '入力デバイス'], products: ['pro-micro', 'attiny85'], weight: 4 },

  // 多ピン
  { keywords: ['多ピン', 'ピン数', '3dプリンタ', 'ramps', 'サーボ', '複数モーター'], products: ['mega-2560'], weight: 4 },

  // コスト
  { keywords: ['安い', '格安', '予算', '低コスト', 'コスパ', '最安'], products: ['rcwl-0516', 'ttp223', 'cds', 'esp32-c3', 'attiny85'], weight: 2 },

  // 入門・初心者
  { keywords: ['入門', '初心者', '初めて', 'はじめて', '最初', '簡単', '手軽', 'lチカ', 'led'], products: ['uno-r3', 'pico-typec', 'pico-2w', 'dht11', 'hc-sr501', 'hc-sr04'], weight: 2 },

  // ロボット
  { keywords: ['ロボット', 'robot', 'rc', 'サーボ', 'モーター制御'], products: ['mega-2560', 'esp32-30pin', 'pico-typec', 'hc-sr04', 'gy-521'], weight: 2 },

  // Linux・高性能
  { keywords: ['linux', 'os', 'sbc', 'シングルボード', '高性能', '本格的', 'python複数', 'サーバー構築'], products: ['raspberry-pi-5'], weight: 4 },

  // 電池・省電力
  { keywords: ['電池', '乾電池', '省電力', '長期間', 'バッテリー駆動', '低消費'], products: ['pro-mini', 'attiny85', 'esp32-c3'], weight: 3 },
]

export type ScoredProduct = EWProduct & { rank: number }

export function scoreMatch(product: EWProduct, query: string): number {
  const q = query.toLowerCase()
  let score = 0

  for (const map of KEYWORD_MAPS) {
    const matched = map.keywords.some(k => q.includes(k.toLowerCase()))
    if (matched && map.products.includes(product.id)) {
      score += map.weight
    }
  }

  // tag fallback — direct word overlap
  const qWords = q.split(/[\s　、。,，.、・]+/).filter(w => w.length >= 2)
  for (const tag of product.tags) {
    if (qWords.some(w => tag.includes(w) || w.includes(tag))) {
      score += 1
    }
  }

  return score
}

export function recommend(query: string): ScoredProduct[] {
  if (!query.trim()) {
    return catalog.slice(0, 5).map((p, i) => ({ ...p, rank: i + 1 }))
  }

  const scored = catalog
    .map(p => ({ ...p, _score: scoreMatch(p, query) }))
    .filter(p => p._score > 0)
    .sort((a, b) => {
      if (b._score !== a._score) return b._score - a._score
      return b.score - a.score
    })
    .slice(0, 5)

  return scored.map((p, i) => ({ ...p, rank: i + 1 }))
}
