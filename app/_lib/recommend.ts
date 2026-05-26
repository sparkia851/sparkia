export type Connectivity = 'WiFi' | 'BLE' | 'LoRa' | 'NB-IoT' | 'USB-HID' | 'LTE-M'
export type Level = 'beginner' | 'intermediate' | 'advanced'
export type FormFactor = 'Standard' | 'Nano' | 'Mega' | 'MKR' | 'Portenta' | 'GIGA' | 'Pico' | 'DevKit' | 'M5Stack'

export type ArduinoBoard = {
  id: string
  name: string
  mcu: string
  clockMhz: number
  ramKb: number
  flashKb: number
  digitalPins: number
  analogPins: number
  connectivity: Connectivity[]
  formFactor: FormFactor
  level: Level
  score: number
  points: string[]      // 3件まで・短く
  verdict: string       // 1行
  price: string
  officialUrl: string
  imageUrl: string      // 空文字 = placeholder 表示
  tags: string[]
}

const catalog: ArduinoBoard[] = [
  {
    id: 'uno-r3',
    name: 'Arduino Uno Rev3',
    mcu: 'ATmega328P',
    clockMhz: 16, ramKb: 2, flashKb: 32,
    digitalPins: 14, analogPins: 6,
    connectivity: [], formFactor: 'Standard', level: 'beginner', score: 4.2,
    points: [
      '世界で最も普及した入門ボード。書籍・サンプルが豊富',
      'シールドによる拡張が業界最大エコシステム',
      '5V動作で汎用センサーと直結しやすい',
    ],
    verdict: 'Arduinoを始めるなら迷わずこれ。情報量が圧倒的',
    price: '約3,500円',
    officialUrl: 'https://store.arduino.cc/products/arduino-uno-rev3',
    imageUrl: '/api/board-image?slug=arduino-uno-rev3',
    tags: ['入門', '初心者', 'lチカ', 'led', '学習', '教育', '定番', 'シールド', '安定', 'r3'],
  },
  {
    id: 'uno-r4-minima',
    name: 'Arduino Uno R4 Minima',
    mcu: 'Renesas RA4M1',
    clockMhz: 48, ramKb: 32, flashKb: 256,
    digitalPins: 14, analogPins: 6,
    connectivity: [], formFactor: 'Standard', level: 'beginner', score: 4.3,
    points: [
      'R3と完全互換の形状で性能を16倍に強化',
      '12ビットADC/DAC内蔵で高精度アナログ処理',
      'USB-C接続対応',
    ],
    verdict: 'R3ユーザーの最初のアップグレード先として最適',
    price: '約3,000円',
    officialUrl: 'https://store.arduino.cc/products/uno-r4-minima',
    imageUrl: '/api/board-image?slug=uno-r4-minima',
    tags: ['入門', '初心者', 'r4', 'uno', 'dac', 'adc', 'アナログ', 'usb-c'],
  },
  {
    id: 'uno-r4-wifi',
    name: 'Arduino Uno R4 WiFi',
    mcu: 'Renesas RA4M1 + ESP32-S3',
    clockMhz: 48, ramKb: 32, flashKb: 256,
    digitalPins: 14, analogPins: 6,
    connectivity: ['WiFi', 'BLE'], formFactor: 'Standard', level: 'beginner', score: 4.6,
    points: [
      'Wi-Fi / BLE 内蔵でIoTにすぐ使える',
      'R3互換シールドをそのまま流用可能',
      '12×8 LEDマトリクス搭載',
    ],
    verdict: 'Unoの学びやすさとWi-Fi/BLEを両立した現時点でのベストバランス',
    price: '約4,000円',
    officialUrl: 'https://store.arduino.cc/products/uno-r4-wifi',
    imageUrl: '/api/board-image?slug=uno-r4-wifi',
    tags: ['wifi', 'ble', 'bluetooth', 'iot', '入門', '初心者', 'クラウド', '無線', 'led', 'r4'],
  },
  {
    id: 'nano',
    name: 'Arduino Nano',
    mcu: 'ATmega328P',
    clockMhz: 16, ramKb: 2, flashKb: 32,
    digitalPins: 22, analogPins: 8,
    connectivity: [], formFactor: 'Nano', level: 'beginner', score: 3.9,
    points: [
      'ブレッドボードに直挿しできる超コンパクト設計',
      '互換品が安価（数百円〜）で複数使いが容易',
      'Unoと同MCUで学習資産をそのまま活用',
    ],
    verdict: 'ブレッドボードで素早くプロトタイプを組む際の定番小型ボード',
    price: '約1,200〜2,000円',
    officialUrl: 'https://store.arduino.cc/products/arduino-nano',
    imageUrl: '/api/board-image?slug=arduino-nano',
    tags: ['小型', 'nano', 'コンパクト', 'ブレッドボード', '安い', '入門', '省スペース'],
  },
  {
    id: 'nano-every',
    name: 'Arduino Nano Every',
    mcu: 'ATmega4809',
    clockMhz: 20, ramKb: 6, flashKb: 48,
    digitalPins: 22, analogPins: 8,
    connectivity: [], formFactor: 'Nano', level: 'beginner', score: 4.1,
    points: [
      'Nano形状のまま RAM 3倍・Flash 1.5倍に強化',
      '5V動作で既存センサーとの互換性を維持',
      'コスパ最良の小型ボード',
    ],
    verdict: 'Nanoの使い勝手はそのままに性能を大幅向上したコスパ最強モデル',
    price: '約2,000円',
    officialUrl: 'https://store.arduino.cc/products/arduino-nano-every',
    imageUrl: '/api/board-image?slug=nano-every',
    tags: ['小型', 'nano', 'コンパクト', 'ブレッドボード', '省スペース', 'コスパ'],
  },
  {
    id: 'nano-33-ble-sense',
    name: 'Arduino Nano 33 BLE Sense Rev2',
    mcu: 'nRF52840',
    clockMhz: 64, ramKb: 256, flashKb: 1024,
    digitalPins: 22, analogPins: 8,
    connectivity: ['BLE'], formFactor: 'Nano', level: 'intermediate', score: 4.7,
    points: [
      '9軸IMU・温湿度・気圧・照度・近接・ジェスチャーを内蔵',
      'BLE 5.0搭載で無線データ転送が即可能',
      'TensorFlow Lite Microでエッジ推論に対応',
    ],
    verdict: 'センサー全部入り＋ML対応。センシング・BLEプロジェクトの最有力',
    price: '約4,500〜5,000円',
    officialUrl: 'https://store.arduino.cc/products/arduino-nano-33-ble-sense-rev2',
    imageUrl: '/api/board-image?slug=nano-33-ble-sense-rev2',
    tags: ['ble', 'bluetooth', 'imu', 'センサー', '機械学習', 'ml', '加速度', 'ジャイロ', '温度', '湿度', '小型'],
  },
  {
    id: 'nano-33-iot',
    name: 'Arduino Nano 33 IoT',
    mcu: 'SAMD21 + NINA-W102',
    clockMhz: 48, ramKb: 256, flashKb: 1024,
    digitalPins: 22, analogPins: 8,
    connectivity: ['WiFi', 'BLE'], formFactor: 'Nano', level: 'intermediate', score: 4.4,
    points: [
      'Nanoサイズに Wi-Fi + BLE を内蔵',
      '3.3V省電力動作でIoTノードに最適',
      'ArduinoCloudと連携しリモート管理が容易',
    ],
    verdict: '小型Wi-FiデバイスをArduino流儀で手軽に作る定番ボード',
    price: '約3,500〜4,000円',
    officialUrl: 'https://store.arduino.cc/products/arduino-nano-33-iot',
    imageUrl: '/api/board-image?slug=arduino-nano-33-iot',
    tags: ['wifi', 'ble', 'bluetooth', 'iot', '小型', 'nano', '省電力', 'クラウド', '無線'],
  },
  {
    id: 'nano-esp32',
    name: 'Arduino Nano ESP32',
    mcu: 'ESP32-S3',
    clockMhz: 240, ramKb: 512, flashKb: 16384,
    digitalPins: 22, analogPins: 8,
    connectivity: ['WiFi', 'BLE'], formFactor: 'Nano', level: 'intermediate', score: 4.5,
    points: [
      '240MHz ESP32-S3でNano最速の処理性能',
      'MicroPython対応でPythonから直接開発',
      '16MB Flashで大容量アプリも余裕',
    ],
    verdict: 'Nanoサイズで最速・Python対応・Wi-Fi搭載の万能小型ボード',
    price: '約3,000〜3,500円',
    officialUrl: 'https://store.arduino.cc/products/arduino-nano-esp32',
    imageUrl: '/api/board-image?slug=nano-esp32',
    tags: ['wifi', 'ble', 'iot', '小型', 'nano', '高速', 'python', 'micropython', 'esp32'],
  },
  {
    id: 'mega-2560',
    name: 'Arduino Mega 2560 Rev3',
    mcu: 'ATmega2560',
    clockMhz: 16, ramKb: 8, flashKb: 256,
    digitalPins: 54, analogPins: 16,
    connectivity: [], formFactor: 'Mega', level: 'intermediate', score: 4.2,
    points: [
      'デジタル54本・アナログ16本で業界最多クラスのI/O',
      'UART×4搭載でマルチデバイス同時接続が可能',
      '3Dプリンタ（RAMPS）・大型ロボットのデファクト',
    ],
    verdict: '多チャンネル・多センサーを同時制御する大規模プロジェクトに最適',
    price: '約5,000〜6,000円',
    officialUrl: 'https://store.arduino.cc/products/arduino-mega-2560-rev3',
    imageUrl: '/api/board-image?slug=arduino-mega-2560-rev3',
    tags: ['ピン数', '多ピン', '3dプリンタ', 'ロボット', 'モーター', '多チャンネル', 'mega', '大型'],
  },
  {
    id: 'leonardo',
    name: 'Arduino Leonardo',
    mcu: 'ATmega32U4',
    clockMhz: 16, ramKb: 3, flashKb: 32,
    digitalPins: 20, analogPins: 12,
    connectivity: ['USB-HID'], formFactor: 'Standard', level: 'intermediate', score: 4.0,
    points: [
      'USB HIDネイティブ対応でキーボード・マウスとして動作',
      'PCに挿すだけで入力デバイスとして認識',
      'マクロパッド・アクセシビリティデバイスに実績多数',
    ],
    verdict: 'USBキーボード/マウスエミュレーションが必要ならこれ一択',
    price: '約3,500〜5,000円',
    officialUrl: 'https://store.arduino.cc/products/arduino-leonardo',
    imageUrl: '/api/board-image?cdn=A000057_03.front.jpg',
    tags: ['usb', 'hid', 'キーボード', 'マウス', 'ゲームパッド', 'マクロ', '入力デバイス'],
  },
  {
    id: 'micro',
    name: 'Arduino Micro',
    mcu: 'ATmega32U4',
    clockMhz: 16, ramKb: 3, flashKb: 32,
    digitalPins: 20, analogPins: 12,
    connectivity: ['USB-HID'], formFactor: 'Nano', level: 'intermediate', score: 4.0,
    points: [
      'LeonardoのHID機能をNanoサイズに凝縮',
      'ブレッドボード対応でコンパクトなHIDデバイスを作れる',
      '小型マクロパッド・フットペダルに最適',
    ],
    verdict: 'コンパクトなUSB HIDデバイスをブレッドボードで作るなら第一候補',
    price: '約3,000〜4,000円',
    officialUrl: 'https://store.arduino.cc/products/arduino-micro',
    imageUrl: '/api/board-image?slug=arduino-micro',
    tags: ['usb', 'hid', 'キーボード', 'マウス', 'マクロ', '小型', 'コンパクト', 'ブレッドボード'],
  },
  {
    id: 'mkr-wifi-1010',
    name: 'Arduino MKR WiFi 1010',
    mcu: 'SAMD21 + NINA-W102',
    clockMhz: 48, ramKb: 32, flashKb: 256,
    digitalPins: 22, analogPins: 7,
    connectivity: ['WiFi', 'BLE'], formFactor: 'MKR', level: 'intermediate', score: 4.3,
    points: [
      'Wi-Fi + BLE内蔵で産業向けMKRエコシステムに対応',
      'LiPoバッテリーコネクタ内蔵でバッテリー駆動が簡単',
      'MKRシールドで産業・通信機能を拡張可能',
    ],
    verdict: 'バッテリー駆動のWi-Fi IoTを本格的なシールドで拡張したい場合に最適',
    price: '約5,000〜6,000円',
    officialUrl: 'https://store.arduino.cc/products/arduino-mkr-wifi-1010',
    imageUrl: '/api/board-image?slug=arduino-mkr-wifi-1010',
    tags: ['wifi', 'ble', 'iot', 'バッテリー', '省電力', 'mkr', 'クラウド'],
  },
  {
    id: 'mkr-wan-1300',
    name: 'Arduino MKR WAN 1300',
    mcu: 'SAMD21 + Murata CMWX1ZZABZ',
    clockMhz: 48, ramKb: 32, flashKb: 256,
    digitalPins: 22, analogPins: 7,
    connectivity: ['LoRa'], formFactor: 'MKR', level: 'advanced', score: 4.5,
    points: [
      'LoRaWAN対応でkm単位の長距離・低電力通信が可能',
      'LiPoバッテリー内蔵で長期フィールド設置に対応',
      '農業・環境モニタリング・スマートシティ用途で実績多数',
    ],
    verdict: 'LoRaWANによる長距離省電力通信が必要なIoTノードの最有力候補',
    price: '約6,000〜8,000円',
    officialUrl: 'https://store.arduino.cc/products/arduino-mkr-wan-1300',
    imageUrl: '/api/board-image?cdn=ABX00017_03.front.jpg',
    tags: ['lora', 'lorawan', '長距離', '省電力', '農業', '環境', 'iot', 'フィールド', '屋外'],
  },
  {
    id: 'portenta-h7',
    name: 'Arduino Portenta H7',
    mcu: 'STM32H747XI (M7+M4)',
    clockMhz: 480, ramKb: 8192, flashKb: 16384,
    digitalPins: 80, analogPins: 8,
    connectivity: ['WiFi', 'BLE'], formFactor: 'Portenta', level: 'advanced', score: 4.8,
    points: [
      'Cortex-M7（480MHz）＋M4デュアルコアで最高クラスの処理',
      'TensorFlow LiteとMicroPythonでエッジAI対応',
      '産業オートメーション・医療機器向け設計',
    ],
    verdict: 'ArduinoラインナップNo.1の処理能力。エッジAI・産業用途に本格対応',
    price: '約20,000〜25,000円',
    officialUrl: 'https://store.arduino.cc/products/portenta-h7',
    imageUrl: '/api/board-image?slug=portenta-h7',
    tags: ['高性能', '産業', '業務', 'ai', '機械学習', 'ml', 'wifi', 'ble', '高速', 'デュアルコア'],
  },
  {
    id: 'giga-r1-wifi',
    name: 'Arduino GIGA R1 WiFi',
    mcu: 'STM32H747XI (M7+M4)',
    clockMhz: 480, ramKb: 8192, flashKb: 16384,
    digitalPins: 76, analogPins: 12,
    connectivity: ['WiFi', 'BLE'], formFactor: 'GIGA', level: 'advanced', score: 4.7,
    points: [
      'PortentaH7同等のデュアルコアをMegaサイズに搭載',
      'オーディオジャック・USBホスト内蔵',
      'Edge Impulse等のAIライブラリに完全対応',
    ],
    verdict: '大型・マルチメディア・AIを全部入りでやりたいフラッグシップボード',
    price: '約12,000〜15,000円',
    officialUrl: 'https://store.arduino.cc/products/giga-r1-wifi',
    imageUrl: '/api/board-image?slug=giga-r1-wifi',
    tags: ['高性能', 'ai', '機械学習', 'wifi', 'ble', 'オーディオ', '大型', 'giga', 'マルチメディア'],
  },
  // ─── Raspberry Pi Pico ────────────────────────────────────────
  {
    id: 'rpi-pico',
    name: 'Raspberry Pi Pico',
    mcu: 'RP2040',
    clockMhz: 133, ramKb: 264, flashKb: 2048,
    digitalPins: 26, analogPins: 3,
    connectivity: [], formFactor: 'Pico', level: 'beginner', score: 4.3,
    points: [
      'RP2040デュアルコアで同価格帯最高クラスの処理性能',
      'MicroPython / CircuitPython対応で入門コストが低い',
      '700円台から買えるコスパ最良のマイコンボード',
    ],
    verdict: 'Pythonで始めたい入門者からC/C++を使う中級者まで幅広く対応',
    price: '約700〜900円',
    officialUrl: 'https://www.raspberrypi.com/products/raspberry-pi-pico/',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/38/Raspberry_Pi_Pico_top.jpg',
    tags: ['python', 'micropython', 'pico', 'rp2040', '安い', 'コスパ', '入門', 'ブレッドボード', 'ラズパイ', 'raspberry'],
  },
  {
    id: 'rpi-pico-w',
    name: 'Raspberry Pi Pico W',
    mcu: 'RP2040 + CYW43439',
    clockMhz: 133, ramKb: 264, flashKb: 2048,
    digitalPins: 26, analogPins: 3,
    connectivity: ['WiFi', 'BLE'], formFactor: 'Pico', level: 'beginner', score: 4.5,
    points: [
      'Picoに WiFi + BLE を追加、IoTノードに最適',
      'MicroPythonのurequestsでHTTP通信が数行で書ける',
      '省電力設計でバッテリー駆動のセンサーノードに適する',
    ],
    verdict: 'Picoの学びやすさにIoT通信を加えたコスパ最高のWiFiボード',
    price: '約1,000〜1,200円',
    officialUrl: 'https://www.raspberrypi.com/products/raspberry-pi-pico/',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/RPI_PICO_W_1.jpg',
    tags: ['python', 'micropython', 'wifi', 'ble', 'iot', 'pico', 'rp2040', 'ラズパイ', 'raspberry', '省電力', '安い'],
  },
  {
    id: 'rpi-pico-2',
    name: 'Raspberry Pi Pico 2',
    mcu: 'RP2350',
    clockMhz: 150, ramKb: 520, flashKb: 4096,
    digitalPins: 26, analogPins: 3,
    connectivity: [], formFactor: 'Pico', level: 'beginner', score: 4.5,
    points: [
      'RP2350はM33 + RISC-Vの切り替え可能なデュアルアーキテクチャ',
      'RAM 520KB・Flash 4MBとPicoから約2倍に強化',
      'Picoと完全ピン互換で既存プロジェクトをそのまま移行可能',
    ],
    verdict: 'Picoユーザーの性能アップグレードとして最も自然な選択肢',
    price: '約900〜1,100円',
    officialUrl: 'https://www.raspberrypi.com/products/raspberry-pi-pico-2/',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/82/Top_view_of_a_Raspberry_Pi_Pico_2_microcontroller_board.jpg',
    tags: ['python', 'micropython', 'pico', 'rp2350', '高性能', 'risc-v', 'ラズパイ', 'raspberry', 'コスパ'],
  },
  {
    id: 'rpi-pico-2w',
    name: 'Raspberry Pi Pico 2 W',
    mcu: 'RP2350 + CYW43439',
    clockMhz: 150, ramKb: 520, flashKb: 4096,
    digitalPins: 26, analogPins: 3,
    connectivity: ['WiFi', 'BLE'], formFactor: 'Pico', level: 'beginner', score: 4.6,
    points: [
      'RP2350の高性能とWiFi/BLEを1枚に集約した最新世代',
      '520KB RAMでより複雑なIoTアプリを快適に実行',
      'Pico / Pico Wとピン互換で移行が容易',
    ],
    verdict: '性能・通信・コスパをすべて兼ね備えたPicoラインの現時点最良モデル',
    price: '約1,200〜1,500円',
    officialUrl: 'https://www.raspberrypi.com/products/raspberry-pi-pico-2w/',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/82/Top_view_of_a_Raspberry_Pi_Pico_2_microcontroller_board.jpg',
    tags: ['python', 'micropython', 'wifi', 'ble', 'iot', 'pico', 'rp2350', 'ラズパイ', 'raspberry', '高性能'],
  },

  // ─── ESP32 DevKit ──────────────────────────────────────────────
  {
    id: 'esp32-devkitc',
    name: 'ESP32-DevKitC',
    mcu: 'ESP32 (LX6 dual)',
    clockMhz: 240, ramKb: 520, flashKb: 4096,
    digitalPins: 34, analogPins: 18,
    connectivity: ['WiFi', 'BLE'], formFactor: 'DevKit', level: 'intermediate', score: 4.6,
    points: [
      'WiFi + BLE内蔵で世界最普及のIoTマイコン、情報量が圧倒的',
      '240MHz デュアルコアと520KB RAMで高い処理性能',
      'Arduino IDE・MicroPython・ESP-IDF と複数の開発環境に対応',
    ],
    verdict: '定番中の定番。IoTプロジェクトのデファクトスタンダード',
    price: '約1,000〜1,500円',
    officialUrl: 'https://www.espressif.com/en/products/devkits/esp32-devkitc',
    imageUrl: '/api/board-image?ext=https%3A%2F%2Fwww.espressif.com%2Fsites%2Fdefault%2Ffiles%2Fdev-board%2FESP32-DevKitC_S_0.png',
    tags: ['wifi', 'ble', 'iot', 'esp32', '定番', '安い', 'python', 'micropython', 'arduino', '高速', '無線'],
  },
  {
    id: 'esp32-s3-devkitc',
    name: 'ESP32-S3-DevKitC',
    mcu: 'ESP32-S3 (LX7 dual)',
    clockMhz: 240, ramKb: 512, flashKb: 8192,
    digitalPins: 45, analogPins: 20,
    connectivity: ['WiFi', 'BLE', 'USB-HID'], formFactor: 'DevKit', level: 'intermediate', score: 4.7,
    points: [
      'LX7デュアルコアでEdge AI・画像処理に対応',
      'USBネイティブHID対応でPC入力デバイスの自作が容易',
      'TensorFlow Lite Microで機械学習推論をオンデバイス実行',
    ],
    verdict: 'AI・USB・WiFiを全部入りで使いたいESP32ファミリーの最強モデル',
    price: '約1,500〜2,000円',
    officialUrl: 'https://www.espressif.com/en/products/devkits/esp32-s3-devkitc-1',
    imageUrl: '/api/board-image?ext=https%3A%2F%2Fwww.espressif.com%2Fsites%2Fdefault%2Ffiles%2Fdev-board%2FESP32-S3-DevKitC-1%2520%25E5%25B0%258F.png',
    tags: ['wifi', 'ble', 'ai', '機械学習', 'ml', 'usb', 'hid', 'esp32', 'esp32-s3', '高性能', 'python', 'キーボード'],
  },
  {
    id: 'esp32-c3-devkitm',
    name: 'ESP32-C3-DevKitM',
    mcu: 'ESP32-C3 (RISC-V)',
    clockMhz: 160, ramKb: 400, flashKb: 4096,
    digitalPins: 22, analogPins: 6,
    connectivity: ['WiFi', 'BLE'], formFactor: 'DevKit', level: 'intermediate', score: 4.3,
    points: [
      'RISC-Vアーキテクチャ採用の小型・低消費電力モデル',
      'WiFi + BLEを搭載しながら最安クラスの価格を実現',
      'バッテリー動作のシンプルなIoTノードに最適',
    ],
    verdict: '低コストで省電力なIoTノードを量産したいときの第一選択肢',
    price: '約800〜1,200円',
    officialUrl: 'https://www.espressif.com/en/products/devkits/esp32-c3-devkitm-1',
    imageUrl: '/api/board-image?ext=https%3A%2F%2Fwww.espressif.com%2Fsites%2Fdefault%2Ffiles%2Fdev-board%2FC3-DevKitM%2520small.png',
    tags: ['wifi', 'ble', 'iot', '省電力', '安い', '小型', 'esp32', 'risc-v', '低消費電力', 'バッテリー'],
  },

  // ─── M5Stack ───────────────────────────────────────────────────
  {
    id: 'm5stack-core2',
    name: 'M5Stack Core2',
    mcu: 'ESP32-D0WDQ6',
    clockMhz: 240, ramKb: 520, flashKb: 16384,
    digitalPins: 32, analogPins: 2,
    connectivity: ['WiFi', 'BLE'], formFactor: 'M5Stack', level: 'intermediate', score: 4.5,
    points: [
      '2インチタッチディスプレイ内蔵ですぐにUIを作れる',
      'マイク・スピーカー・IMU・RTC・バッテリーをオールインワン搭載',
      'M5Stackエコシステムの豊富な拡張モジュールに対応',
    ],
    verdict: 'ディスプレイ付きスタンドアロン機器を最短で作るならCore2一択',
    price: '約5,500〜6,500円',
    officialUrl: 'https://shop.m5stack.com/products/m5stack-core2-esp32-iot-development-kit',
    imageUrl: '/api/board-image?m5=m5stack-core2-esp32-iot-development-kit',
    tags: ['ディスプレイ', '画面', 'タッチ', 'm5stack', 'm5', 'wifi', 'ble', 'imu', 'センサー', 'スピーカー', 'マイク', 'バッテリー'],
  },
  {
    id: 'm5stickc-plus2',
    name: 'M5StickC Plus2',
    mcu: 'ESP32-PICO',
    clockMhz: 240, ramKb: 520, flashKb: 8192,
    digitalPins: 9, analogPins: 1,
    connectivity: ['WiFi', 'BLE'], formFactor: 'M5Stack', level: 'intermediate', score: 4.2,
    points: [
      '1.14インチディスプレイ付き超小型ボディ',
      'IMU・マイク・赤外線LED・バッテリーを内蔵',
      'ウェアラブルやポケットサイズのIoT機器に最適',
    ],
    verdict: '携帯できるサイズに必要な機能を詰め込んだM5Stackの小型版',
    price: '約3,000〜3,500円',
    officialUrl: 'https://shop.m5stack.com/products/m5stickc-plus2-esp32-mini-iot-development-kit',
    imageUrl: '/api/board-image?m5=m5stickc-plus2-esp32-mini-iot-development-kit',
    tags: ['小型', '超小型', 'ウェアラブル', 'm5stack', 'm5', 'wifi', 'ble', 'ディスプレイ', '画面', 'バッテリー', 'imu'],
  },
  {
    id: 'm5atom-s3',
    name: 'M5Atom S3',
    mcu: 'ESP32-S3FN8',
    clockMhz: 240, ramKb: 512, flashKb: 8192,
    digitalPins: 8, analogPins: 1,
    connectivity: ['WiFi', 'BLE'], formFactor: 'M5Stack', level: 'intermediate', score: 4.3,
    points: [
      '24×24mmの極小ボディにESP32-S3とLEDディスプレイを搭載',
      'WiFi + BLE対応でIoTセンサーノードやリモコンに使いやすい',
      'Grove互換コネクタでM5Stackエコシステムのセンサーと接続可',
    ],
    verdict: 'M5Stackエコシステム最小サイズ。センサーノードや組み込み用途に最適',
    price: '約2,500〜3,000円',
    officialUrl: 'https://shop.m5stack.com/products/atoms3-dev-kit',
    imageUrl: '/api/board-image?m5=atoms3-dev-kit-w-0-85-inch-screen',
    tags: ['超小型', '最小', 'm5stack', 'm5', 'wifi', 'ble', 'センサー', 'grove', 'esp32-s3', '省スペース'],
  },
]

function scoreMatch(board: ArduinoBoard, query: string): number {
  const lower = query.toLowerCase()
  const words = lower.split(/[\s　,、。・！？!?]+/).filter(w => w.length >= 1)
  let score = 0
  for (const word of words) {
    for (const tag of board.tags) {
      if (tag === word) score += 5
      else if (tag.includes(word) || word.includes(tag)) score += 3
    }
    const identifiers = [board.name, board.mcu, board.formFactor, ...board.connectivity].join(' ').toLowerCase()
    if (identifiers.includes(word)) score += 4
    const desc = [...board.points, board.verdict].join(' ').toLowerCase()
    if (desc.includes(word)) score += 1
    if ((word.includes('初心者') || word.includes('入門') || word.includes('初めて')) && board.level === 'beginner') score += 4
    if ((word.includes('中級') || word.includes('本格')) && board.level === 'intermediate') score += 3
    if ((word.includes('上級') || word.includes('業務') || word.includes('産業')) && board.level === 'advanced') score += 4
    if ((word.includes('小型') || word.includes('小さ') || word.includes('コンパクト')) && board.formFactor === 'Nano') score += 4
    if ((word.includes('小型') || word.includes('小さ') || word.includes('コンパクト')) && board.formFactor === 'Pico') score += 3
    if (word.includes('ピン') && board.formFactor === 'Mega') score += 3
    if ((word.includes('python') || word.includes('パイソン') || word.includes('micropython') || word.includes('pico') || word.includes('ラズパイ') || word.includes('raspberry')) && board.formFactor === 'Pico') score += 5
    if ((word.includes('esp32') || word.includes('espressif') || word.includes('devkit')) && board.formFactor === 'DevKit') score += 5
    if ((word.includes('ディスプレイ') || word.includes('画面') || word.includes('タッチ') || word.includes('m5') || word.includes('m5stack') || word.includes('スクリーン')) && board.formFactor === 'M5Stack') score += 5
    if ((word.includes('ディスプレイ') || word.includes('画面') || word.includes('タッチ')) && board.formFactor !== 'M5Stack') score -= 2
  }
  return score
}

export function recommend(query: string): (ArduinoBoard & { rank: number })[] {
  if (!query.trim()) return []
  const scored = catalog
    .map(b => ({ board: b, matchScore: scoreMatch(b, query) }))
    .filter(({ matchScore }) => matchScore > 0)
    .sort((a, b) => b.matchScore !== a.matchScore ? b.matchScore - a.matchScore : b.board.score - a.board.score)
  const results = scored.length > 0
    ? scored.slice(0, 5).map(({ board }) => board)
    : catalog.slice().sort((a, b) => b.score - a.score).slice(0, 3)
  return results.map((board, i) => ({ ...board, rank: i + 1 }))
}

export { catalog }
