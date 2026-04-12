const tiers = [
  { model: 'Claude Opus', cost: '$5 / $25', use: 'Complex reasoning, deep analysis' },
  { model: 'Claude Sonnet', cost: '$3 / $15', use: 'Daily driver. Most tasks.' },
  { model: 'Claude Haiku', cost: '$1 / $5', use: 'Heartbeats, classification, simple Q&A' },
  { model: 'DeepSeek V3', cost: '$0.28 / $0.42', use: 'Budget. Surprisingly capable.' },
  { model: 'Ollama (local)', cost: 'Free', use: 'Zero cost. Limited reasoning.' },
]

const S = { position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 10% 0 14%' }

export default function SlideModels() {
  return (
    <div style={S}>
      <div style={{ fontFamily: 'var(--serif)', fontSize: 40, fontWeight: 700, color: 'var(--warm-headline)', lineHeight: 1.15, marginBottom: 12 }}>
        Switch models, not wallets
      </div>
      <div style={{ fontFamily: 'var(--sans)', fontSize: 17, color: 'var(--warm-muted)', marginBottom: 36, maxWidth: 500 }}>
        Type <code style={{ background: 'rgba(0,0,0,0.06)', padding: '2px 8px', borderRadius: 4, fontSize: 15 }}>/model</code> in Telegram to switch on the fly.
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 620 }}>
        {tiers.map((t, i) => (
          <div key={i} style={{
            display: 'grid', gridTemplateColumns: '150px 120px 1fr', alignItems: 'center', gap: 12,
            padding: '10px 16px', borderRadius: 8,
            background: i === 0 ? 'rgba(200,168,130,0.1)' : 'transparent',
          }}>
            <div style={{ fontFamily: 'var(--sans)', fontSize: 15, fontWeight: 600, color: 'var(--warm-headline)' }}>{t.model}</div>
            <div style={{ fontFamily: 'var(--mono)', fontSize: 13, color: 'var(--accent)' }}>{t.cost}</div>
            <div style={{ fontFamily: 'var(--sans)', fontSize: 14, color: 'var(--warm-muted)' }}>{t.use}</div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 32, fontFamily: 'var(--sans)', fontSize: 14, color: 'var(--warm-muted)', maxWidth: 480, lineHeight: 1.6 }}>
        Per million tokens (input / output). Most people use Sonnet as default and Haiku for heartbeats. That alone cuts costs 60%+.
      </div>
    </div>
  )
}
