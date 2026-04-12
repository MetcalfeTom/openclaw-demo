const stats = [
  { number: '341', label: 'Malicious skills on ClawHub', sub: '12% of 2,857 audited' },
  { number: '30k+', label: 'Exposed instances online', sub: 'February 2026' },
]

const S = { position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '0 10%' }

export default function SlideClawHavoc() {
  return (
    <div style={S}>
      <div style={{ fontFamily: 'var(--serif)', fontSize: 48, fontWeight: 700, lineHeight: 1.1, marginBottom: 48, textAlign: 'center' }}>
        Safety
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 32, maxWidth: 720 }}>
        {stats.map((s, i) => (
          <div key={i} style={{
            background: 'rgba(255,255,255,0.04)', borderRadius: 12, padding: '28px 24px',
            borderLeft: '3px solid var(--accent)',
          }}>
            <div style={{ fontFamily: 'var(--serif)', fontSize: 48, fontWeight: 700, color: 'var(--accent)', marginBottom: 8 }}>{s.number}</div>
            <div style={{ fontFamily: 'var(--sans)', fontSize: 16, fontWeight: 600, marginBottom: 6 }}>{s.label}</div>
            <div style={{ fontFamily: 'var(--sans)', fontSize: 13, color: 'var(--dark-muted)' }}>{s.sub}</div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 40, fontFamily: 'var(--sans)', fontSize: 15, color: 'var(--dark-muted)', textAlign: 'center', maxWidth: 560, lineHeight: 1.6 }}>
        The core issue: ClawHub had no code review, no signing, no verification. People installed skills that looked useful but silently stole credentials, crypto wallets, and API keys.
      </div>
    </div>
  )
}
