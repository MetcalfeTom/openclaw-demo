const steps = [
  { num: '1', text: 'Pick one narrow personal workflow' },
  { num: '2', text: 'Define the inputs - what does the agent read?' },
  { num: '3', text: 'Define the allowed actions - what can it do?' },
  { num: '4', text: 'Define one thing the agent must never do' },
  { num: '5', text: 'Run it for a week before expanding scope' },
]

const S = { position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 12% 0 14%' }

export default function SlideFirstAgent() {
  return (
    <div style={S}>
      <div style={{ fontFamily: 'var(--serif)', fontSize: 44, fontWeight: 700, color: 'var(--warm-headline)', lineHeight: 1.15, marginBottom: 44 }}>
        Your first agent
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 20, maxWidth: 580 }}>
        {steps.map((s) => (
          <div key={s.num} style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}>
            <div style={{
              fontFamily: 'var(--serif)', fontSize: 24, fontWeight: 700,
              color: 'var(--accent)', minWidth: 32,
            }}>
              {s.num}
            </div>
            <div style={{ fontFamily: 'var(--sans)', fontSize: 20, color: 'var(--warm-headline)', lineHeight: 1.4 }}>
              {s.text}
            </div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 48, fontFamily: 'var(--sans)', fontSize: 16, color: 'var(--warm-muted)', maxWidth: 480, lineHeight: 1.6 }}>
        Start with one agent, one domain. Don't try to build a multi-agent system on day one.
      </div>
    </div>
  )
}
