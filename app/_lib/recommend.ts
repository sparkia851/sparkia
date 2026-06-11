export type Connectivity = 'WiFi' | 'BLE' | 'LoRa' | 'NB-IoT' | 'USB-HID' | 'LTE-M' | 'Zigbee'
export type Level = 'beginner' | 'intermediate' | 'advanced'
export type FormFactor = 'Standard' | 'Nano' | 'Mega' | 'MKR' | 'Portenta' | 'GIGA' | 'Pico' | 'DevKit' | 'M5Stack' | 'XIAO' | 'Feather' | 'Teensy' | 'Bluepill' | 'WioTerminal' | 'MicroBit'

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

  // ── 追加15ボード ────────────────────────────────────────
  {
    id: 'esp8266-nodemcu',
    name: 'ESP8266 NodeMCU',
    mcu: 'Tensilica LX106',
    clockMhz: 80, ramKb: 128, flashKb: 4096,
    digitalPins: 11, analogPins: 1,
    connectivity: ['WiFi'], formFactor: 'DevKit', level: 'beginner', score: 3.8,
    points: [
      '500円前後で入手できる最安クラスのWiFi対応ボード',
      'Arduino IDEで開発可能。日本語情報・書籍が豊富',
      'シンプルなIoTセンサー送信・スマートプラグ制作に最適',
    ],
    verdict: '安さ最優先のWiFi IoTならこれ。ESP32が予算オーバーなときの選択肢',
    price: '約500〜700円',
    officialUrl: 'https://www.espressif.com/en/products/socs/esp8266',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/NodeMCU_DEVKIT_1.0.jpg',
    tags: ['wifi', '安い', '低コスト', '格安', '予算', 'iot', '入門', '初心者', 'esp8266', 'nodemcu', 'lua', 'シンプル'],
  },
  {
    id: 'esp32-h2-devkitm',
    name: 'ESP32-H2 DevKitM',
    mcu: 'ESP32-H2 (RISC-V)',
    clockMhz: 96, ramKb: 320, flashKb: 4096,
    digitalPins: 19, analogPins: 5,
    connectivity: ['BLE', 'Zigbee'], formFactor: 'DevKit', level: 'intermediate', score: 4.0,
    points: [
      'WiFiなし・BLE 5.2 + Zigbee 3.0 + Thread + Matter対応',
      'スマートホーム・ホームオートメーション特化の省電力設計',
      'Matter対応でApple Home / Google Home / Alexaと連携可能',
    ],
    verdict: 'Zigbee/Thread/MatterのスマートホームデバイスにはH2が最適。WiFi不要な用途に',
    price: '約700〜1,000円',
    officialUrl: 'https://docs.espressif.com/projects/esp-dev-kits/en/latest/esp32h2/esp32-h2-devkitm-1/user_guide.html',
    imageUrl: 'https://docs.espressif.com/projects/esp-dev-kits/en/latest/_images/esp32-h2-devkitm-1-45.png',
    tags: ['zigbee', 'thread', 'matter', 'ble', 'bluetooth', 'スマートホーム', 'ホームオートメーション', '省電力', 'wifiなし', 'esp32-h2', 'h2', '802.15.4', '低消費電力'],
  },
  {
    id: 'esp32-c3-supermini',
    name: 'ESP32-C3 SuperMini',
    mcu: 'ESP32-C3 (RISC-V)',
    clockMhz: 160, ramKb: 400, flashKb: 4096,
    digitalPins: 13, analogPins: 6,
    connectivity: ['WiFi', 'BLE'], formFactor: 'DevKit', level: 'beginner', score: 4.1,
    points: [
      '22×18mmの超小型サイズにWiFi + BLE 5を搭載',
      'ESP32-C3 DevKitMの半分以下のサイズで同等の機能',
      '500円前後の低価格。量産・組み込みプロジェクトにも最適',
    ],
    verdict: '小さく安くWiFi+BLEを搭載したいときの筆頭候補',
    price: '約500〜700円',
    officialUrl: 'https://www.espressif.com/en/products/socs/esp32-c3',
    imageUrl: 'https://docs.zephyrproject.org/latest/_images/esp32c3_supermini.webp',
    tags: ['超小型', '小型', 'wifi', 'ble', '安い', '低コスト', 'esp32-c3', 'c3', 'supermini', 'スーパーミニ', 'iot', '省スペース'],
  },
  {
    id: 'esp32-c6-devkitc',
    name: 'ESP32-C6 DevKitC',
    mcu: 'ESP32-C6 (RISC-V)',
    clockMhz: 160, ramKb: 512, flashKb: 8192,
    digitalPins: 22, analogPins: 7,
    connectivity: ['WiFi', 'BLE', 'Zigbee'], formFactor: 'DevKit', level: 'intermediate', score: 4.2,
    points: [
      'WiFi 6（802.11ax）+ BLE 5.3 + Zigbee 3.0 + Thread一枚で対応',
      'ESP32の次世代。省電力性とセキュリティが大幅に向上',
      'Matter対応でスマートホームエコシステムとの親和性が高い',
    ],
    verdict: 'WiFi 6・Zigbee・Threadを1枚で。次世代IoT標準ボードの筆頭候補',
    price: '約700〜1,200円',
    officialUrl: 'https://docs.espressif.com/projects/esp-dev-kits/en/latest/esp32c6/esp32-c6-devkitc-1/user_guide.html',
    imageUrl: 'https://docs.espressif.com/projects/esp-dev-kits/en/latest/_images/esp32-c6-devkitc-1-isometric_v1.2.png',
    tags: ['wifi6', 'wifi', 'ble', 'bluetooth', 'zigbee', 'thread', 'matter', 'スマートホーム', 'iot', 'esp32-c6', 'c6', '省電力', '最新'],
  },
  {
    id: 'xiao-esp32s3',
    name: 'Seeed XIAO ESP32S3',
    mcu: 'ESP32-S3 (Xtensa LX7 × 2)',
    clockMhz: 240, ramKb: 8192, flashKb: 8192,
    digitalPins: 11, analogPins: 9,
    connectivity: ['WiFi', 'BLE'], formFactor: 'XIAO', level: 'intermediate', score: 4.5,
    points: [
      '21×17.5mmの爪サイズ。WiFi + BLE + 8MB PSRAM + カメラコネクタ内蔵',
      'ESP32-S3搭載でTinyML・エッジAI・画像認識に対応',
      'LiPo充電回路内蔵でバッテリー駆動のウェアラブルIoTに最適',
    ],
    verdict: '最小クラスのAI・カメラ対応ボード。ウェアラブルや超小型デバイスに最適',
    price: '約1,800〜2,200円',
    officialUrl: 'https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html',
    imageUrl: 'https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3.jpg',
    tags: ['超小型', '最小', 'xiao', 'wifi', 'ble', 'ai', '機械学習', 'ml', 'tinyml', 'カメラ', '画像認識', 'ウェアラブル', 'バッテリー', 'esp32-s3', 's3', 'psram'],
  },
  {
    id: 'xiao-esp32c3',
    name: 'Seeed XIAO ESP32C3',
    mcu: 'ESP32-C3 (RISC-V)',
    clockMhz: 160, ramKb: 400, flashKb: 4096,
    digitalPins: 11, analogPins: 4,
    connectivity: ['WiFi', 'BLE'], formFactor: 'XIAO', level: 'beginner', score: 4.2,
    points: [
      '20×17.5mmの超小型フォームファクター。親指の爪サイズ',
      'WiFi + BLE 5搭載で800円程度。C3 SuperMiniと並ぶ最安クラス',
      'XIAOシールドとの互換性でセンサー・ディスプレイを簡単増設',
    ],
    verdict: '超小型WiFi+BLEの定番。XIAOエコシステムで拡張しやすい',
    price: '約800〜1,200円',
    officialUrl: 'https://www.seeedstudio.com/Seeed-XIAO-ESP32C3-p-5431.html',
    imageUrl: 'https://files.seeedstudio.com/wiki/XIAO_WiFi/board-pic.png',
    tags: ['超小型', '最小', 'xiao', 'wifi', 'ble', '安い', '小型', 'esp32-c3', 'c3', 'iot', '省スペース', 'ウェアラブル'],
  },
  {
    id: 'wio-terminal',
    name: 'Seeed Wio Terminal',
    mcu: 'ATSAMD51P19A (ARM Cortex-M4F)',
    clockMhz: 120, ramKb: 192, flashKb: 4096,
    digitalPins: 26, analogPins: 6,
    connectivity: ['WiFi', 'BLE'], formFactor: 'WioTerminal', level: 'intermediate', score: 4.3,
    points: [
      '2.4インチLCDディスプレイ搭載。IMU・マイク・赤外線・Groveコネクタ内蔵',
      'WiFi 2.4G/5G + BLE 5.0対応。単体で完結するオールインワン開発ボード',
      'MicroPython・Arduino両対応。40ピンRaspberry Pi互換GPIO',
    ],
    verdict: '液晶・センサー・WiFi全部入りのオールインワンボード。すぐ使える完成度の高さ',
    price: '約4,500〜5,500円',
    officialUrl: 'https://www.seeedstudio.com/Wio-Terminal-p-4509.html',
    imageUrl: 'https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-Wiki.jpg',
    tags: ['ディスプレイ', '画面', 'lcd', 'wifi', 'ble', 'imu', 'マイク', 'grove', 'オールインワン', '全部入り', 'micropython', 'センサー', 'wio', '赤外線'],
  },
  {
    id: 'teensy-4-1',
    name: 'Teensy 4.1',
    mcu: 'NXP iMXRT1062 (ARM Cortex-M7)',
    clockMhz: 600, ramKb: 1024, flashKb: 8192,
    digitalPins: 42, analogPins: 18,
    connectivity: ['USB-HID'], formFactor: 'Teensy', level: 'advanced', score: 4.7,
    points: [
      '600MHz Cortex-M7。Arduinoエコシステム最高クラスの演算性能',
      'microSD・Ethernet・USBホスト内蔵。音声処理・音楽合成に定評',
      '42デジタル・18アナログピン。FFT/DSPライブラリが充実',
    ],
    verdict: '本格的な音楽・音声処理、高速USB HID、大量I/O制御ならTeensy一択',
    price: '約4,500〜6,000円',
    officialUrl: 'https://www.pjrc.com/store/teensy41.html',
    imageUrl: 'https://www.pjrc.com/teensy41_4.jpg',
    tags: ['高性能', '高速', 'オーディオ', '音楽', '音声', '音声処理', 'dsp', 'fft', 'usb-hid', 'usb', 'ethernet', 'sd', 'teensy', 'プロ', '上級', 'cortex-m7'],
  },
  {
    id: 'stm32-bluepill',
    name: 'STM32F103 Bluepill',
    mcu: 'STM32F103C8T6 (ARM Cortex-M3)',
    clockMhz: 72, ramKb: 20, flashKb: 64,
    digitalPins: 32, analogPins: 10,
    connectivity: [], formFactor: 'Bluepill', level: 'intermediate', score: 3.9,
    points: [
      '72MHz Cortex-M3。多GPIO・多UART/SPI/I2Cでモーター制御・産業用途に強い',
      '200〜500円の激安価格。エンコーダ・CAN通信など高度な機能も低コストで',
      'STM32CubeIDEでプロ品質の開発環境を構築可能',
    ],
    verdict: '多ピン・高速・激安。組み込み上級者の定番。Arduinoでは物足りないときに',
    price: '約200〜500円',
    officialUrl: 'https://www.st.com/en/microcontrollers-microprocessors/stm32f103c8.html',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/b0/Blue_Pill.jpg',
    tags: ['安い', '格安', 'stm32', 'bluepill', 'ブルーピル', 'モーター', 'モーター制御', '産業', 'cortex-m3', '多ピン', 'can', '組み込み', '上級'],
  },
  {
    id: 'feather-esp32-v2',
    name: 'Adafruit Feather ESP32 V2',
    mcu: 'ESP32-D0WDQ6-V3 (Xtensa LX6 × 2)',
    clockMhz: 240, ramKb: 520, flashKb: 8192,
    digitalPins: 21, analogPins: 4,
    connectivity: ['WiFi', 'BLE'], formFactor: 'Feather', level: 'intermediate', score: 4.4,
    points: [
      'LiPoバッテリーコネクタ内蔵・充電回路付き。電池駆動IoTの定番フォームファクター',
      'STEMMA QT(Qwiic)ポートでI2Cセンサーをケーブルワンタッチ接続',
      'ディープスリープ70μAの超省電力。WiFi + BLE搭載',
    ],
    verdict: 'バッテリー駆動IoTの定番規格Feather。電池で長期間動かすプロジェクトに最適',
    price: '約3,500〜4,500円',
    officialUrl: 'https://www.adafruit.com/product/5400',
    imageUrl: 'https://cdn-shop.adafruit.com/970x728/5400-13.jpg',
    tags: ['バッテリー', 'lipo', '電池', '電池駆動', '省電力', '長時間', 'wifi', 'ble', 'iot', 'feather', 'adafruit', 'stemma', 'qwiic', '充電', '野外', '屋外'],
  },
  {
    id: 'microbit-v2',
    name: 'BBC micro:bit v2',
    mcu: 'Nordic nRF52833 (ARM Cortex-M4)',
    clockMhz: 64, ramKb: 128, flashKb: 512,
    digitalPins: 19, analogPins: 6,
    connectivity: ['BLE'], formFactor: 'MicroBit', level: 'beginner', score: 4.3,
    points: [
      '5×5 LEDマトリクス・加速度センサー・スピーカー・マイク内蔵',
      'MakeCode（ビジュアルプログラミング）・MicroPython・JavaScript対応',
      'BLE 5.0で他のmicro:bitと無線通信。学校教育で世界的に採用',
    ],
    verdict: '教育・学習用として完成されたボード。センサー・LED・音声が全部載ってすぐ楽しめる',
    price: '約2,500〜3,500円',
    officialUrl: 'https://microbit.org/get-started/first-steps/introduction/',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a3/Micro-bit_v1_%26_v2.JPG',
    tags: ['教育', '学習', '初心者', '子供', '入門', 'ble', 'bluetooth', 'led', '加速度', 'センサー', 'スピーカー', 'マイク', 'makecode', 'micropython', 'microbit', 'マイクロビット', '学校'],
  },
  {
    id: 'rp2040-zero',
    name: 'Waveshare RP2040-Zero',
    mcu: 'RP2040 (ARM Cortex-M0+ × 2)',
    clockMhz: 133, ramKb: 264, flashKb: 2048,
    digitalPins: 29, analogPins: 4,
    connectivity: [], formFactor: 'Pico', level: 'beginner', score: 4.1,
    points: [
      '23.5×18mmの超小型。Pico(51×21mm)の半分以下のサイズ',
      'USB-C搭載・WS2812 RGBオンボード。キャスタレートで基板直付け可能',
      'MicroPython・C/C++どちらも使える。Picoの豊富な情報がそのまま活用可能',
    ],
    verdict: 'Picoの機能を最小サイズに凝縮。スペースが限られるプロジェクトに最適',
    price: '約500〜800円',
    officialUrl: 'https://www.waveshare.com/rp2040-zero.htm',
    imageUrl: '',
    tags: ['超小型', '最小', 'pico', 'rp2040', 'python', 'micropython', '小型', '省スペース', 'usb-c', 'waveshare', 'ラズパイ'],
  },
  {
    id: 'nano-rp2040-connect',
    name: 'Arduino Nano RP2040 Connect',
    mcu: 'RP2040 (ARM Cortex-M0+ × 2)',
    clockMhz: 133, ramKb: 264, flashKb: 16384,
    digitalPins: 22, analogPins: 8,
    connectivity: ['WiFi', 'BLE'], formFactor: 'Nano', level: 'intermediate', score: 4.5,
    points: [
      'NanoサイズにWiFi・BLE 4.2・6軸IMU・マイク・16MB Flashを搭載',
      'TinyML対応。姿勢推定・振動検知・転倒検知プロジェクトに活用可能',
      'Arduino公式のMicroPython対応。RP2040の豊富なライブラリも利用可',
    ],
    verdict: 'Nano互換ピンでWiFi+BLE+MLを実現。機械学習×IoTを小型でやるならベスト',
    price: '約3,500〜4,500円',
    officialUrl: 'https://store.arduino.cc/products/arduino-nano-rp2040-connect',
    imageUrl: '/api/board-image?slug=arduino-nano-rp2040-connect',
    tags: ['wifi', 'ble', 'bluetooth', 'nano', '小型', 'imu', 'ml', '機械学習', 'tinyml', 'マイク', 'rp2040', 'python', 'micropython', 'iot'],
  },
  {
    id: 'esp32-s2-devkitc',
    name: 'ESP32-S2 DevKitC',
    mcu: 'ESP32-S2 (Xtensa LX7)',
    clockMhz: 240, ramKb: 320, flashKb: 4096,
    digitalPins: 43, analogPins: 20,
    connectivity: ['WiFi', 'USB-HID'], formFactor: 'DevKit', level: 'intermediate', score: 4.0,
    points: [
      '追加チップ不要のネイティブUSB。HID・CDC・WebUSBデバイスとして動作',
      'WiFi内蔵・BLEなし。シンプルな構成で消費電力を抑えやすい',
      '43デジタル・20アナログと豊富なGPIO。LCD接続にも余裕',
    ],
    verdict: 'ネイティブUSBデバイス（キーボード・マウス等）作成に最適。S3より安価',
    price: '約800〜1,200円',
    officialUrl: 'https://docs.espressif.com/projects/esp-dev-kits/en/latest/esp32s2/esp32-s2-devkitc-1/user_guide.html',
    imageUrl: 'https://docs.espressif.com/projects/esp-dev-kits/en/latest/_images/esp32-s2-devkitc-1-v1-isometric.png',
    tags: ['usb', 'usb-hid', 'キーボード', 'マウス', 'hid', 'wifi', 'esp32-s2', 's2', 'ネイティブusb', 'webusb', 'bleなし'],
  },
  {
    id: 'xiao-samd21',
    name: 'Seeed XIAO SAMD21',
    mcu: 'SAMD21G18 (ARM Cortex-M0+)',
    clockMhz: 48, ramKb: 32, flashKb: 256,
    digitalPins: 11, analogPins: 11,
    connectivity: [], formFactor: 'XIAO', level: 'beginner', score: 4.0,
    points: [
      '20×17.5mmの超小型。最小フォームファクターのArduino互換ボード',
      'Arduino UNOとほぼ同じ開発環境でそのまま使える。USB-Cで快適接続',
      'ネイティブUSBでHID（キーボード・マウス）として動作可能',
    ],
    verdict: '最小サイズのArduino互換機。WiFi不要で小型にArduinoを使いたいときに',
    price: '約600〜1,000円',
    officialUrl: 'https://www.seeedstudio.com/Seeed-XIAO-Arduino-p-4244.html',
    imageUrl: 'https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/Seeeduino-XIAO-preview-1.jpg',
    tags: ['超小型', '最小', 'xiao', 'arduino', '小型', 'usb-hid', 'usb', 'hid', 'キーボード', 'samd21', '入門'],
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
    if ((word.includes('ディスプレイ') || word.includes('画面') || word.includes('タッチ') || word.includes('m5') || word.includes('m5stack') || word.includes('スクリーン')) && (board.formFactor === 'M5Stack' || board.formFactor === 'WioTerminal')) score += 5
    if ((word.includes('ディスプレイ') || word.includes('画面') || word.includes('タッチ')) && board.formFactor !== 'M5Stack' && board.formFactor !== 'WioTerminal') score -= 2
    if ((word.includes('zigbee') || word.includes('thread') || word.includes('matter') || word.includes('スマートホーム') || word.includes('ホームオートメーション')) && board.connectivity.includes('Zigbee')) score += 5
    if ((word.includes('バッテリー') || word.includes('電池') || word.includes('lipo') || word.includes('電池駆動')) && board.formFactor === 'Feather') score += 4
    if ((word.includes('xiao') || word.includes('超小型') || word.includes('爪') || word.includes('指先')) && board.formFactor === 'XIAO') score += 5
    if ((word.includes('teensy') || word.includes('オーディオ') || word.includes('音楽') || word.includes('音声処理') || word.includes('dsp')) && board.formFactor === 'Teensy') score += 5
    if ((word.includes('stm32') || word.includes('bluepill') || word.includes('ブルーピル') || word.includes('モーター制御')) && board.formFactor === 'Bluepill') score += 5
    if ((word.includes('教育') || word.includes('学校') || word.includes('子供') || word.includes('makecode') || word.includes('マイクロビット') || word.includes('microbit')) && board.formFactor === 'MicroBit') score += 5
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
