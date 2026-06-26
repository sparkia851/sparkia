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
        .tk-hs { display: grid; grid-template-columns: 1fr 1fr; min-height: 680px; }
        .tk-hp { overflow: hidden; position: relative; }
        @media (max-width: 1023px) {
          .tk-hs { grid-template-columns: 1fr !important; min-height: auto !important; }
          .tk-hp { display: none !important; }
        }
      `}</style>
      {children}
    </div>
  )
}
