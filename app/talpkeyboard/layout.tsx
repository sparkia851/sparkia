export default function TalpKeyboardLayout({ children }: { children: React.ReactNode }) {
  // Pull content up by the height of the global Sparkia sticky header (h-14 = 3.5rem)
  // so that our fixed TALP nav (z-100) visually replaces it.
  return <div style={{ marginTop: '-3.5rem' }}>{children}</div>
}
