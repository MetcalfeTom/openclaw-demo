const S = { position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 14%' }

export default function SlideQuoteEmployee() {
  return (
    <div style={S}>
      <div style={{ fontFamily: 'var(--serif)', fontSize: 52, fontWeight: 600, lineHeight: 1.25, maxWidth: 900, fontStyle: 'italic' }}>
        "It feels like hiring an employee rather than opening another chat window."
      </div>
      <div style={{ marginTop: 40, width: 48, height: 2, background: 'var(--accent)' }} />
      <div style={{ marginTop: 20, fontFamily: 'var(--sans)', fontSize: 16, color: 'var(--dark-muted)' }}>
        The single most repeated line across OpenClaw coverage, early 2026
      </div>
    </div>
  )
}
