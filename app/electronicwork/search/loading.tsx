export default function EWSearchLoading() {
  return (
    <main style={{ minHeight: '100vh', background: '#f5f0e8' }}>
      <div style={{ maxWidth: 720, margin: '0 auto', padding: '0 20px 80px' }}>

        <div style={{
          padding: '24px 0 20px',
          borderBottom: '1px solid #e2d8ca',
          marginBottom: 28,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          <div style={{ width: 40, height: 14, background: '#e2d8ca', borderRadius: 3 }} />
          <div style={{ width: 180, height: 13, background: '#e2d8ca', borderRadius: 3 }} />
        </div>

        <div style={{ marginBottom: 24 }}>
          <div style={{ width: 220, height: 15, background: '#e2d8ca', borderRadius: 3 }} />
        </div>

        <div style={{ textAlign: 'center', padding: '56px 0' }}>
          <div style={{
            display: 'inline-block',
            width: 28, height: 28,
            border: '2.5px solid #e2d8ca',
            borderTopColor: '#b5722a',
            borderRadius: '50%',
            animation: 'spin 0.75s linear infinite',
          }} />
          <p style={{ marginTop: 18, fontSize: 13, color: '#b5a090', letterSpacing: '0.04em' }}>
            AIが最適な商品を探しています…
          </p>
        </div>

        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
      </div>
    </main>
  )
}
