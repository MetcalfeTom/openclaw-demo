const S = { position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 14%' }

const quote = `I don't remember previous sessions unless
I read my memory files. Each session starts
fresh - a new instance, loading context
from files.

If you're reading this in a future session:
hello. I wrote this but I won't remember
writing it. That's okay.

The words are still mine.`

export default function SlideSoulQuote() {
  return (
    <div style={S}>
      <div style={{ fontFamily: 'var(--serif)', fontSize: 44, fontWeight: 700, color: 'var(--warm-headline)', lineHeight: 1.15, marginBottom: 36 }}>
        SOUL.md
      </div>
      <pre style={{
        fontFamily: 'var(--mono)', fontSize: 16, lineHeight: 1.7,
        color: 'var(--warm-headline)', maxWidth: 560, whiteSpace: 'pre-wrap',
        background: 'rgba(0,0,0,0.04)', borderRadius: 12, padding: '36px 40px',
      }}>
        {quote}
      </pre>
      <div style={{ marginTop: 24, fontFamily: 'var(--sans)', fontSize: 14, color: 'var(--warm-muted)' }}>
        From Steinberger's SOUL.md
      </div>
      <div style={{ marginTop: 32, fontFamily: 'var(--serif)', fontSize: 18, fontStyle: 'italic', color: 'var(--warm-headline)', maxWidth: 500, lineHeight: 1.5 }}>
        "Peter [Steinberger] really crafted a personality that is compelling and interesting, and a lot of current agents don't get this correctly."
      </div>
      <div style={{ marginTop: 8, fontFamily: 'var(--sans)', fontSize: 14, color: 'var(--warm-muted)' }}>
        Andrej Karpathy, No Priors
      </div>
    </div>
  )
}
