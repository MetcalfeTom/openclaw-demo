const events = [
  { date: 'Nov 2025', text: 'One-hour prototype: WhatsApp + Claude glue code', dot: false },
  { date: 'Dec 2025', text: 'SOUL.md, MEMORY.md, Heartbeat added', dot: false },
  { date: 'Jan 2026', text: 'Goes viral. Fastest to 100k stars in GitHub history', dot: true },
  { date: 'Feb 2026', text: '250k+ stars. Most starred project on GitHub. Karpathy: "sci-fi takeoff-adjacent"', dot: true },
  { date: 'Feb 14', text: 'Steinberger joins OpenAI. OpenClaw → foundation', dot: true },
]

const S = {
  position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column',
  justifyContent: 'center', padding: '0 12% 0 14%',
}

export default function SlideTimeline() {
  return (
    <div style={S}>
      <div style={{ fontFamily: 'var(--serif)', fontSize: 48, fontWeight: 700, color: 'var(--warm-headline)', lineHeight: 1.1, marginBottom: 56 }}>
        It started as a<br />dev prototype
      </div>
      <div style={{ position: 'relative', paddingLeft: 32 }}>
        <div style={{ position: 'absolute', left: 7, top: 6, bottom: 6, width: 2, background: 'var(--accent)', opacity: 0.4 }} />
        {events.map((e, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'flex-start', marginBottom: 28, position: 'relative' }}>
            <div style={{
              width: 16, height: 16, borderRadius: '50%', flexShrink: 0, marginRight: 20,
              background: e.dot ? 'var(--accent)' : 'transparent',
              border: e.dot ? 'none' : '2px solid var(--accent)',
              marginTop: 4,
            }} />
            <div>
              <div style={{ fontFamily: 'var(--sans)', fontSize: 13, fontWeight: 600, color: 'var(--warm-muted)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: 4 }}>{e.date}</div>
              <div style={{ fontFamily: 'var(--sans)', fontSize: 20, color: 'var(--warm-headline)', lineHeight: 1.4 }}>{e.text}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
