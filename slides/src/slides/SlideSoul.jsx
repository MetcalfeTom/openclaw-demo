const S = { position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 12% 0 14%' }

const snippet = `# SOUL.md

You have opinions. Strong ones.
Stop hedging everything with "it depends."

Never open with "Great question" or
"I'd be happy to help." Just answer.

Be the assistant you'd actually want
to talk to at 2am. Not a corporate drone.
Not a sycophant. Just... good.`

export default function SlideSoul() {
  return (
    <div style={S}>
      <div style={{ fontFamily: 'var(--serif)', fontSize: 44, fontWeight: 700, color: 'var(--warm-headline)', lineHeight: 1.15, marginBottom: 12 }}>
        SOUL.md
      </div>
      <div style={{ fontFamily: 'var(--sans)', fontSize: 17, color: 'var(--warm-muted)', marginBottom: 36, maxWidth: 500 }}>
        Who the agent is. Personality, values, tone. Read on every boot.
      </div>

      <pre style={{
        fontFamily: 'var(--mono)', fontSize: 13, lineHeight: 1.6,
        background: 'rgba(0,0,0,0.04)', borderRadius: 12, padding: '22px 28px',
        color: 'var(--warm-headline)', maxWidth: 460, whiteSpace: 'pre-wrap',
      }}>
        {snippet}
      </pre>

      <a href="https://www.soul.md" target="_blank" rel="noopener noreferrer" style={{
        marginTop: 24, fontFamily: 'var(--sans)', fontSize: 15, color: 'var(--warm-muted)',
        textDecoration: 'underline', textUnderlineOffset: 3,
      }}>
        www.soul.md &rarr;
      </a>

      <div style={{ marginTop: 28, fontFamily: 'var(--serif)', fontSize: 17, fontStyle: 'italic', color: 'var(--warm-headline)', maxWidth: 500, lineHeight: 1.5 }}>
        "Peter [Steinberger] really crafted a personality that is compelling and interesting, and a lot of current agents don't get this correctly."
      </div>
      <div style={{ marginTop: 6, fontFamily: 'var(--sans)', fontSize: 13, color: 'var(--warm-muted)' }}>
        Andrej Karpathy, No Priors
      </div>
    </div>
  )
}
