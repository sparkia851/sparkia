import Script from 'next/script'

const BF_GA_ID = 'G-KKX4NN48RJ'

export default function BoardFinderLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${BF_GA_ID}`} strategy="afterInteractive" />
      <Script id="bf-ga-init" strategy="afterInteractive">{`
        window.dataLayer=window.dataLayer||[];
        function gtag(){dataLayer.push(arguments);}
        gtag('js',new Date());
        gtag('config','${BF_GA_ID}');
      `}</Script>
      {children}
    </div>
  )
}
