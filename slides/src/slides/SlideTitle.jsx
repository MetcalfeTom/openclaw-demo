const S = { position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '0 10%' }

export default function SlideTitle() {
  return (
    <div style={S}>
      <div style={{ fontFamily: 'var(--serif)', fontSize: 96, fontWeight: 700, letterSpacing: '-2px', lineHeight: 1, marginBottom: 24 }}>
        OpenClaw
      </div>
      <div style={{ fontFamily: 'var(--sans)', fontSize: 22, color: 'var(--dark-muted)', fontWeight: 400, marginBottom: 48 }}>
        Why it worked, and what to learn from it
      </div>
      <div style={{ width: 48, height: 2, background: 'var(--accent)', marginBottom: 24 }} />
      <div style={{ fontFamily: 'var(--sans)', fontSize: 15, color: 'var(--dark-muted)' }}>
        Internal workshop &middot; April 2026
      </div>
    </div>
  )
}
