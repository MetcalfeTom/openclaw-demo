const S = { position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 12% 0 14%' }

export default function SlideAgents() {
  return (
    <div style={S}>
      <div style={{ fontFamily: 'var(--serif)', fontSize: 44, fontWeight: 700, color: 'var(--warm-headline)', lineHeight: 1.15, marginBottom: 40 }}>
        AGENTS.md
      </div>

      <div style={{ fontFamily: 'var(--serif)', fontSize: 24, fontStyle: 'italic', color: 'var(--warm-headline)', lineHeight: 1.45, maxWidth: 600, marginBottom: 32 }}>
        If SOUL.md is who the agent is, AGENTS.md is how it operates.
      </div>

      <pre style={{
        fontFamily: 'var(--mono)', fontSize: 15, lineHeight: 1.7,
        background: 'rgba(0,0,0,0.04)', borderRadius: 12, padding: '24px 28px',
        color: 'var(--warm-headline)', maxWidth: 520, whiteSpace: 'pre-wrap',
      }}>
{`# AGENTS.md

## Every Session
1. Read USER.md for flagged priorities
2. Check memory/ for today's context
3. Load pending tasks from last session

## Rules
- Never send external messages without approval
- Log all completed actions to daily memory
- If unsure about scope, ask before acting
- Keep responses under 200 words unless asked`}
      </pre>

      <div style={{ marginTop: 28, fontFamily: 'var(--sans)', fontSize: 16, color: 'var(--warm-muted)', lineHeight: 1.6, maxWidth: 520 }}>
        Loaded first (highest priority). "Session Startup" and "Red Lines" sections survive context compaction - the agent never forgets its guardrails.
      </div>
    </div>
  )
}
