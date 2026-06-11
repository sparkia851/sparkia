export default function Loading() {
  return (
    <main className="pcb-bg min-h-screen">
      <div className="max-w-3xl mx-auto px-4 py-8">
        <div className="fixed bottom-6 left-6 flex items-center gap-2.5 bg-white border border-gray-200 shadow-lg rounded-full px-4 py-2.5 z-50">
          <span className="flex gap-1">
            {[0, 1, 2].map(i => (
              <span
                key={i}
                className="w-2 h-2 rounded-full bg-blue-500 animate-bounce"
                style={{ animationDelay: `${i * 0.15}s` }}
              />
            ))}
          </span>
          <span className="text-xs font-medium text-gray-600">AIが検索中...</span>
        </div>
      </div>
    </main>
  )
}
