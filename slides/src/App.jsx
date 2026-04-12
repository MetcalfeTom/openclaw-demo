import { useState, useEffect, useCallback } from 'react'
import './styles.css'
import slides from './slides'

export default function App() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)
  const total = slides.length

  const go = useCallback((delta) => {
    setCurrent(prev => {
      const next = prev + delta
      if (next < 0 || next >= total) return prev
      setDirection(delta)
      return next
    })
  }, [total])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') { e.preventDefault(); go(1) }
      if (e.key === 'ArrowLeft' || e.key === 'PageUp') { e.preventDefault(); go(-1) }
      if (e.key === 'f') document.documentElement.requestFullscreen?.()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [go])

  const Slide = slides[current]
  const mode = Slide.mode || 'dark'

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        background: mode === 'dark'
          ? 'radial-gradient(ellipse at 50% 40%, #2a2a2a 0%, #1a1a1a 70%, #111 100%)'
          : 'var(--warm-bg)',
        color: mode === 'dark' ? 'var(--dark-text)' : 'var(--warm-body)',
        position: 'relative',
        overflow: 'hidden',
        transition: 'background 0.6s ease, color 0.4s ease',
        cursor: 'pointer',
      }}
      onClick={(e) => {
        const x = e.clientX / window.innerWidth
        if (x > 0.5) go(1); else go(-1)
      }}
    >
      {/* grain overlay */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none', opacity: 0.04, zIndex: 10,
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        backgroundRepeat: 'repeat',
      }} />

      <div key={current} style={{
        position: 'absolute', inset: 0, zIndex: 1,
        animation: 'fadeIn 0.5s ease both',
      }}>
        <Slide />
      </div>

      {/* progress */}
      <div style={{
        position: 'absolute', bottom: 32, left: '50%', transform: 'translateX(-50%)',
        display: 'flex', gap: 6, zIndex: 20,
      }}>
        {slides.map((_, i) => (
          <div key={i} style={{
            width: i === current ? 24 : 8, height: 4, borderRadius: 2,
            background: mode === 'dark'
              ? (i === current ? 'var(--accent)' : 'rgba(255,255,255,0.15)')
              : (i === current ? 'var(--accent)' : 'rgba(0,0,0,0.12)'),
            transition: 'all 0.3s ease',
            cursor: 'pointer',
          }} onClick={(e) => { e.stopPropagation(); setCurrent(i) }} />
        ))}
      </div>

      {/* slide number */}
      <div style={{
        position: 'absolute', bottom: 32, right: 40, zIndex: 20,
        fontFamily: 'var(--sans)', fontSize: 13,
        color: mode === 'dark' ? 'var(--dark-muted)' : 'var(--warm-muted)',
      }}>
        {current + 1} / {total}
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  )
}
