import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const { name, siteUrl, category, message } = await req.json()

  if (!name || !category || !message) {
    return NextResponse.json({ error: 'missing fields' }, { status: 400 })
  }

  const token = process.env.LINE_CHANNEL_ACCESS_TOKEN
  const userId = process.env.LINE_ADMIN_USER_ID

  if (!token || !userId) {
    return NextResponse.json({ error: 'LINE not configured' }, { status: 500 })
  }

  const text = [
    '📩 新しいお問い合わせ',
    '',
    `名前: ${name}`,
    `サイトURL: ${siteUrl || '未記入'}`,
    `商品カテゴリ: ${category}`,
    '',
    '相談内容:',
    message,
  ].join('\n')

  const res = await fetch('https://api.line.me/v2/bot/message/push', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      to: userId,
      messages: [{ type: 'text', text }],
    }),
  })

  if (!res.ok) {
    const err = await res.text()
    console.error('LINE push failed:', err)
    return NextResponse.json({ error: 'LINE push failed' }, { status: 500 })
  }

  return NextResponse.json({ ok: true })
}
