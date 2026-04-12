import { useState, useEffect } from 'react'

const steps = [
  { label: 'Sleep', desc: 'Configurable interval', icon: '◯' },
  { label: 'Wake', desc: 'Read HEARTBEAT.md', icon: '↑' },
  { label: 'Evaluate', desc: 'Anything need attention?', icon: '?' },
  { label: 'Act or OK', desc: 'Message you - or silent heartbeat', icon: '→' },
]

const S = { position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '0 10%' }

export default function SlideHeartbeat() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setActive(a => (a + 1) % steps.length), 1800)
    return () => clearInterval(t)
  }, [])

  return (
    <div style={S}>
      <div style={{ fontFamily: 'var(--serif)', fontSize: 48, fontWeight: 700, lineHeight: 1.1, marginBottom: 16, textAlign: 'center' }}>
        HEARTBEAT.md
      </div>
      <div style={{ fontFamily: 'var(--sans)', fontSize: 18, color: 'var(--dark-muted)', marginBottom: 56, textAlign: 'center', maxWidth: 520 }}>
        Not a cron job. A daemon with judgment.<br />
        "Wake up, check your list, decide if anything matters."
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: 0 }}>
        {steps.map((s, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{
              width: 140, height: 140, borderRadius: '50%',
              border: `2px solid ${i === active ? 'var(--accent)' : 'rgba(255,255,255,0.12)'}`,
              background: i === active ? 'rgba(200,168,130,0.12)' : 'transparent',
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
              transition: 'all 0.5s ease',
            }}>
              <div style={{ fontSize: 28, marginBottom: 8, opacity: i === active ? 1 : 0.3, transition: 'opacity 0.5s' }}>{s.icon}</div>
              <div style={{ fontFamily: 'var(--sans)', fontSize: 14, fontWeight: 600, color: i === active ? 'var(--accent)' : 'var(--dark-muted)', transition: 'color 0.5s' }}>{s.label}</div>
              <div style={{ fontFamily: 'var(--sans)', fontSize: 11, color: 'var(--dark-muted)', marginTop: 4, textAlign: 'center', padding: '0 10px' }}>{s.desc}</div>
            </div>
            {i < steps.length - 1 && (
              <div style={{
                width: 48, height: 2, background: i < active ? 'var(--accent)' : 'rgba(255,255,255,0.1)',
                transition: 'background 0.5s',
              }} />
            )}
          </div>
        ))}
      </div>

      <div style={{ marginTop: 48, fontFamily: 'var(--sans)', fontSize: 15, color: 'var(--dark-muted)',
        textAlign: 'center', maxWidth: 480, lineHeight: 1.6,
      }}>
        Default interval is 30 minutes. Configurable per-agent - every few minutes, every hour, once a day.
        If nothing needs attention, a silent OK. No notification spam.
      </div>
    </div>
  )
}
