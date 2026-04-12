const links = [
  { label: 'OpenClaw docs', url: 'https://docs.clawd.bot' },
  { label: 'OpenClaw GitHub', url: 'https://github.com/openclaw/openclaw' },
  { label: 'Karpathy on No Priors', url: 'https://podscripts.co/podcasts/no-priors-artificial-intelligence-technology-startups/andrej-karpathy-on-code-agents-autoresearch-and-the-loopy-era-of-ai' },
  { label: 'Steinberger: "Just Talk To It"', url: 'https://steipete.me/posts/2025/just-talk-to-it' },
]

const S = { position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '0 10%' }

export default function SlideClose() {
  return (
    <div style={S}>
      <div style={{ fontFamily: 'var(--serif)', fontSize: 32, fontStyle: 'italic', lineHeight: 1.4, textAlign: 'center', maxWidth: 640, marginBottom: 20 }}>
        "I have non-technical CEO friends who are going all-in on OpenClaw. They're automating entire parts of their businesses. Which is totally insane."
      </div>
      <div style={{ fontFamily: 'var(--sans)', fontSize: 14, color: 'var(--dark-muted)', marginBottom: 48 }}>
        Garry Tan, Y Combinator, Lightcone podcast
      </div>

      <div style={{ width: 48, height: 2, background: 'var(--accent)', marginBottom: 40 }} />

      <div style={{ display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'center' }}>
        {links.map((l, i) => (
          <div key={i} style={{ fontFamily: 'var(--sans)', fontSize: 15, color: 'var(--dark-muted)' }}>
            {l.label}
            <span style={{ color: 'rgba(255,255,255,0.2)', margin: '0 8px' }}>&middot;</span>
            <span style={{ color: 'var(--accent)', fontSize: 13 }}>{l.url.replace('https://', '')}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
