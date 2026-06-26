export default function TKSearchLoading() {
  return (
    <main
      style={{
        background: '#ffffff',
        color: '#16140f',
        minHeight: '100vh',
        fontFamily: 'var(--font-jp), sans-serif',
      }}
    >
      {/* NAV */}
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          height: 64,
          background: 'rgba(255,255,255,0.94)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderBottom: '1px solid #ededed',
          display: 'flex',
          alignItems: 'center',
          padding: '0 52px',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.2em', color: '#16140f' }}>
            TALP KEYBOARD
          </span>
          <span style={{ display: 'inline-block', width: 1, height: 14, background: '#ededed' }} />
          <span style={{ fontSize: 11, color: '#aaa' }}>AI 商品提案</span>
        </div>
        <span style={{ fontSize: 11, color: '#b08d57', letterSpacing: '0.06em' }}>
          選定中…
        </span>
        {/* Indeterminate progress bar */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: 2,
            background: '#f0ece4',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              height: '100%',
              width: '38%',
              background: '#b08d57',
              animation: 'tk-bar-slide 1.5s cubic-bezier(0.4,0,0.2,1) infinite',
            }}
          />
        </div>
      </nav>

      <style>{`
        @keyframes tk-bar-slide {
          0%   { transform: translateX(-100%); }
          100% { transform: translateX(370%); }
        }
        @keyframes tk-shimmer {
          0%   { opacity: 0.4; }
          50%  { opacity: 0.9; }
          100% { opacity: 0.4; }
        }
      `}</style>

      <div style={{ paddingTop: 64 }}>
        {/* Query header skeleton */}
        <div style={{ padding: '60px 52px 0' }}>
          <div style={{ width: 110, height: 9, background: '#f0ece4', borderRadius: 2, marginBottom: 16, animation: 'tk-shimmer 1.5s ease-in-out infinite' }} />
          <div style={{ width: 300, height: 36, background: '#f5f2ee', borderRadius: 2, marginBottom: 10, animation: 'tk-shimmer 1.5s ease-in-out infinite 0.1s' }} />
          <div style={{ width: 72, height: 9, background: '#f0ece4', borderRadius: 2, animation: 'tk-shimmer 1.5s ease-in-out infinite 0.15s' }} />
        </div>

        {/* Hero card skeleton */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            borderTop: '1px solid #ededed',
            borderBottom: '1px solid #ededed',
            minHeight: 340,
            marginTop: 40,
          }}
        >
          <div style={{ background: '#f9f8f6', display: 'flex', alignItems: 'center', justifyContent: 'center', animation: 'tk-shimmer 1.8s ease-in-out infinite' }}>
            <div style={{ width: 160, height: 160, background: '#ede9e0', borderRadius: 3 }} />
          </div>
          <div style={{ padding: '52px 52px 52px 48px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 14 }}>
            <div style={{ display: 'flex', gap: 8 }}>
              <div style={{ width: 90, height: 26, background: '#f5f2ee', borderRadius: 100, animation: 'tk-shimmer 1.5s ease-in-out infinite' }} />
              <div style={{ width: 58, height: 26, background: '#f5f2ee', borderRadius: 100, animation: 'tk-shimmer 1.5s ease-in-out infinite 0.08s' }} />
            </div>
            <div style={{ width: '72%', height: 28, background: '#f0ece4', borderRadius: 2, animation: 'tk-shimmer 1.5s ease-in-out infinite 0.14s' }} />
            <div style={{ width: '88%', height: 13, background: '#f5f2ee', borderRadius: 2, animation: 'tk-shimmer 1.5s ease-in-out infinite 0.18s' }} />
            <div style={{ width: '72%', height: 13, background: '#f5f2ee', borderRadius: 2, animation: 'tk-shimmer 1.5s ease-in-out infinite 0.22s' }} />
            <div style={{ width: '60%', height: 13, background: '#f5f2ee', borderRadius: 2, animation: 'tk-shimmer 1.5s ease-in-out infinite 0.26s' }} />
          </div>
        </div>

        {/* Card list skeletons */}
        <div style={{ padding: '0 52px 100px' }}>
          <div style={{ width: 180, height: 9, background: '#f0ece4', borderRadius: 2, margin: '44px 0 20px', animation: 'tk-shimmer 1.5s ease-in-out infinite' }} />
          {([0, 0.07, 0.14, 0.21] as const).map((d, i) => (
            <div
              key={i}
              style={{
                display: 'grid',
                gridTemplateColumns: '140px 1fr',
                border: '1px solid #efefef',
                borderRadius: 4,
                overflow: 'hidden',
                marginBottom: 14,
                animation: `tk-shimmer 1.5s ease-in-out infinite ${d}s`,
              }}
            >
              <div style={{ minHeight: 120, background: '#f9f8f6' }} />
              <div style={{ padding: '24px 28px', display: 'flex', flexDirection: 'column', gap: 12 }}>
                <div style={{ width: '52%', height: 16, background: '#f0ece4', borderRadius: 2 }} />
                <div style={{ width: '84%', height: 12, background: '#f5f2ee', borderRadius: 2 }} />
                <div style={{ width: '68%', height: 12, background: '#f5f2ee', borderRadius: 2 }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom toast */}
      <div
        style={{
          position: 'fixed',
          bottom: 44,
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          background: '#16140f',
          color: '#ffffff',
          borderRadius: 100,
          padding: '11px 22px',
          fontSize: 11,
          letterSpacing: '0.08em',
          fontFamily: 'var(--font-jp), sans-serif',
          whiteSpace: 'nowrap',
          boxShadow: '0 8px 32px rgba(0,0,0,0.16)',
        }}
      >
        <span
          style={{
            display: 'inline-block',
            width: 6,
            height: 6,
            borderRadius: '50%',
            background: '#b08d57',
            animation: 'tk-shimmer 0.9s ease-in-out infinite',
          }}
        />
        162商品の仕様を読んで選定中…
      </div>
    </main>
  )
}
