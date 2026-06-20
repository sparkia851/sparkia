export default function EWSearchLoading() {
  return (
    <main style={{ minHeight: '100vh', background: '#fafaf8' }}>
      <div style={{ maxWidth: 720, margin: '0 auto', padding: '0 16px 80px' }}>

        {/* header skeleton */}
        <div style={{
          padding: '20px 0 16px',
          borderBottom: '1px solid #f3f4f6',
          marginBottom: 24,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          <div style={{ width: 48, height: 16, background: '#f3f4f6', borderRadius: 4 }} />
          <div style={{ width: 160, height: 22, background: '#fff7ed', borderRadius: 20 }} />
        </div>

        {/* query skeleton */}
        <div style={{ marginBottom: 20 }}>
          <div style={{ width: 200, height: 16, background: '#f3f4f6', borderRadius: 4 }} />
        </div>

        {/* loading indicator */}
        <div style={{ textAlign: 'center', padding: '48px 0' }}>
          <div style={{
            display: 'inline-block',
            width: 32, height: 32,
            border: '3px solid #f3f4f6',
            borderTopColor: '#f97316',
            borderRadius: '50%',
            animation: 'spin 0.7s linear infinite',
          }} />
          <p style={{ marginTop: 16, fontSize: 13, color: '#9ca3af' }}>
            AIが最適な商品を探しています...
          </p>
        </div>

        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
      </div>
    </main>
  )
}
