import Script from 'next/script'

const TALP_GA_ID = 'G-9K0JZE8F1B'

export default function TalpKeyboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ marginTop: '-3.5rem' }}>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${TALP_GA_ID}`} strategy="afterInteractive" />
      <Script id="talp-ga-init" strategy="afterInteractive">{`
        window.dataLayer=window.dataLayer||[];
        function gtag(){dataLayer.push(arguments);}
        gtag('js',new Date());
        gtag('config','${TALP_GA_ID}');
      `}</Script>
      {/* Server-rendered responsive CSS — hoisted to <head> before first paint */}
      <style precedence="default" href="tk-layout">{`
        .tk-hs { display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); min-height: 100vh; }
        .tk-hp { overflow: hidden; position: relative; }
        .tk-ht { padding: 88px 60px 88px 72px; display: flex; flex-direction: column; justify-content: center; min-width: 0; }
        .tk-h1 { margin: 0 0 18px; font-size: 50px; font-weight: 500; line-height: 1.32; letter-spacing: 0.01em; color: #16140f; }
        @media (max-width: 1023px) {
          .tk-hs { grid-template-columns: minmax(0, 1fr) !important; min-height: auto !important; }
          .tk-hp { display: none !important; }
          .tk-ht { padding: 72px 24px 52px !important; }
          .tk-h1 { font-size: clamp(28px, 8vw, 44px) !important; }
        }
      `}</style>
      {children}
    </div>
  )
}
