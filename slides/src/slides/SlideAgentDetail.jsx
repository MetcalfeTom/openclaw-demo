const snippet = `# HEARTBEAT.md

## Checks

Every 12 hours:
- Search for recent articles on AI agents
- Pick the top 3 most relevant
- Summarize each in 2-3 sentences
- Send the digest to me via Telegram

Every weekday at 7:30am:
- Read today's calendar events
- Read open tasks
- If total estimated time > 8 hours, flag it
- Send me a morning briefing`

const S = { position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 12% 0 14%' }

export default function SlideAgentDetail() {
  return (
    <div style={S}>
      <div style={{ fontFamily: 'var(--serif)', fontSize: 36, fontWeight: 700, color: 'var(--warm-headline)', lineHeight: 1.15, marginBottom: 12 }}>
        Plain English in a markdown file
      </div>
      <div style={{ fontFamily: 'var(--sans)', fontSize: 17, color: 'var(--warm-muted)', marginBottom: 36, maxWidth: 500 }}>
        The entry point isn't writing code. It's writing a paragraph describing what you want checked and when.
      </div>

      <pre style={{
        fontFamily: 'var(--mono)', fontSize: 15, lineHeight: 1.7,
        background: 'rgba(0,0,0,0.04)', borderRadius: 12, padding: '28px 32px',
        color: 'var(--warm-headline)', maxWidth: 520, whiteSpace: 'pre-wrap',
      }}>
        {snippet}
      </pre>
    </div>
  )
}
