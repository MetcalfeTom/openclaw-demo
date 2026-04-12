const apps = ['Fitness', 'To-Do', 'Calendar', 'Notes', 'Expense', 'Weather', 'News', 'Habit']

const S = { position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 12% 0 14%' }

export default function SlideAppsMelt() {
  return (
    <div style={S}>
      <div style={{ fontFamily: 'var(--serif)', fontSize: 48, fontWeight: 700, color: 'var(--warm-headline)', lineHeight: 1.15, marginBottom: 40, maxWidth: 700 }}>
        "80% of apps<br />are going away."
      </div>
      <div style={{ fontFamily: 'var(--sans)', fontSize: 14, color: 'var(--warm-muted)', marginBottom: 40 }}>
        - Peter Steinberger, YC interview, February 2026
      </div>

      <div style={{ fontFamily: 'var(--serif)', fontSize: 20, color: 'var(--warm-headline)', lineHeight: 1.5, maxWidth: 600, marginBottom: 40, fontStyle: 'italic' }}>
        "Why do I need My Fitness Pal? My agent already knows I'm making bad decisions. Why do I need a to-do app? I just tell it, hey, remind me of this."
      </div>

      <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', maxWidth: 500 }}>
        {apps.map((a, i) => (
          <div key={i} style={{
            fontFamily: 'var(--sans)', fontSize: 13, padding: '6px 16px',
            borderRadius: 20, border: '1px solid rgba(61,28,0,0.15)',
            color: 'var(--warm-muted)', textDecoration: 'line-through', opacity: 0.6,
          }}>
            {a}
          </div>
        ))}
        <div style={{
          fontFamily: 'var(--sans)', fontSize: 13, fontWeight: 600, padding: '6px 16px',
          borderRadius: 20, background: 'var(--accent)', color: '#fff',
        }}>
          One chat thread
        </div>
      </div>
    </div>
  )
}
