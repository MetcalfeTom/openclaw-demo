const S = { position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 12% 0 14%' }

export default function SlideUser() {
  return (
    <div style={S}>
      <div style={{ fontFamily: 'var(--serif)', fontSize: 44, fontWeight: 700, color: 'var(--warm-headline)', lineHeight: 1.15, marginBottom: 40 }}>
        USER.md
      </div>

      <div style={{ fontFamily: 'var(--serif)', fontSize: 24, fontStyle: 'italic', color: 'var(--warm-headline)', lineHeight: 1.45, maxWidth: 600, marginBottom: 32 }}>
        Everything about you. The context the agent needs to be useful.
      </div>

      <pre style={{
        fontFamily: 'var(--mono)', fontSize: 15, lineHeight: 1.7,
        background: 'rgba(0,0,0,0.04)', borderRadius: 12, padding: '24px 28px',
        color: 'var(--warm-headline)', maxWidth: 480, whiteSpace: 'pre-wrap',
      }}>
{`# USER.md

Timezone: CET (Berlin)
Work hours: 9am-6pm, no meetings before 10
Communication: Direct, concise. No small talk.
Task manager: Things (macOS)
Calendar: Google Calendar (read-only access)
Channels: Telegram primary, email secondary`}
      </pre>

      <div style={{ marginTop: 28, fontFamily: 'var(--sans)', fontSize: 16, color: 'var(--warm-muted)', lineHeight: 1.6, maxWidth: 520 }}>
        The agent reads this on every boot. Your timezone, your preferences, your tools.
      </div>
    </div>
  )
}
