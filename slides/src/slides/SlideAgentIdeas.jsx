const ideas = [
  { icon: '☀', title: 'Daily Briefing', desc: 'Morning summary with a realism check on your schedule' },
  { icon: '◉', title: 'Research Digest', desc: 'Top 3 articles on your topic every 12 hours' },
  { icon: '🎛', title: 'DJing Pipeline', desc: 'Download tracks, tag key/BPM, split stems, add to Ableton' },
  { icon: '⛑', title: 'Health Patterns', desc: 'Cross-analyze WHOOP with location, calendar, other sources' },
  { icon: '🛒', title: 'Grocery Shopping', desc: 'Weekly chat, fills the basket, checks out. Pay on delivery.' },
  { icon: '📣', title: 'Marketing Agent', desc: 'One got 2M TikTok views in 2 weeks. Zero manual posting.' },
  { icon: '🧠', title: 'Chief of Staff', desc: '6 sub-agents run overnight, morning brief by 8am' },
  { icon: '✉', title: 'Inbox Triage', desc: 'Classify email urgency, draft replies. Start read-only.' },
]

const S = { position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 8% 0 10%' }

export default function SlideAgentIdeas() {
  return (
    <div style={S}>
      <div style={{ fontFamily: 'var(--serif)', fontSize: 40, fontWeight: 700, color: 'var(--warm-headline)', lineHeight: 1.15, marginBottom: 40 }}>
        What would you actually use it for?
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, maxWidth: 960 }}>
        {ideas.map((idea, i) => (
          <div key={i} style={{
            background: 'rgba(0,0,0,0.03)', borderRadius: 12, padding: '20px 18px',
          }}>
            <div style={{ fontSize: 24, marginBottom: 10 }}>{idea.icon}</div>
            <div style={{ fontFamily: 'var(--sans)', fontSize: 15, fontWeight: 600, color: 'var(--warm-headline)', marginBottom: 6 }}>{idea.title}</div>
            <div style={{ fontFamily: 'var(--sans)', fontSize: 13, color: 'var(--warm-muted)', lineHeight: 1.5 }}>{idea.desc}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
