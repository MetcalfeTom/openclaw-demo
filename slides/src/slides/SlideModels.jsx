const items = [
  {
    emoji: '🔧',
    title: 'It builds itself',
    body: '"Can you connect to Whoop?" — it comes back with setup instructions. You paste the API key into the chat. Done.',
  },
  {
    emoji: '📶',
    title: 'Low network, no problem',
    body: 'Queue messages in Telegram while offline. They execute when your phone has signal again.',
  },
  {
    emoji: '📂',
    title: 'A workspace you can see',
    body: 'Everything is markdown files on disk. You can read, search, and version the agent\'s state at any time.',
  },
]

const S = { position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 10% 0 14%' }

export default function SlideModels() {
  return (
    <div style={S}>
      <div style={{ fontFamily: 'var(--serif)', fontSize: 40, fontWeight: 700, color: 'var(--warm-headline)', lineHeight: 1.15, marginBottom: 12 }}>
        Three things I love
      </div>
      <div style={{ fontFamily: 'var(--sans)', fontSize: 17, color: 'var(--warm-muted)', marginBottom: 44, maxWidth: 500 }}>
        Personal highlights after living with it daily
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 28, maxWidth: 580 }}>
        {items.map((t, i) => (
          <div key={i} style={{ display: 'flex', gap: 18, alignItems: 'flex-start' }}>
            <div style={{ fontSize: 28, lineHeight: 1, flexShrink: 0, marginTop: 2 }}>{t.emoji}</div>
            <div>
              <div style={{ fontFamily: 'var(--sans)', fontSize: 18, fontWeight: 600, color: 'var(--warm-headline)', marginBottom: 4 }}>
                {t.title}
              </div>
              <div style={{ fontFamily: 'var(--sans)', fontSize: 15, color: 'var(--warm-body)', lineHeight: 1.55 }}>
                {t.body}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
