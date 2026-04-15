const S = { position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 12% 0 14%' }

export default function SlideTools() {
  return (
    <div style={S}>
      <div style={{ fontFamily: 'var(--serif)', fontSize: 44, fontWeight: 700, color: 'var(--warm-headline)', lineHeight: 1.15, marginBottom: 44 }}>
        TOOLS.md
      </div>

      <div style={{ display: 'flex', gap: 40, flexWrap: 'wrap', marginBottom: 40 }}>
        <div style={{ flex: '1 1 280px', minWidth: 260 }}>
          <div style={{ fontFamily: 'var(--sans)', fontSize: 13, fontWeight: 600, color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: 10 }}>TOOLS.md</div>
          <div style={{ fontFamily: 'var(--sans)', fontSize: 17, color: 'var(--warm-body)', lineHeight: 1.6 }}>
            Environment-specific notes the agent reads before using a tool. SSH hostnames, API base URLs, camera names. Written by you, updated by the agent.
          </div>
          <pre style={{
            fontFamily: 'var(--mono)', fontSize: 13, lineHeight: 1.6, marginTop: 16,
            background: 'rgba(0,0,0,0.04)', borderRadius: 8, padding: '14px 18px',
            color: 'var(--warm-headline)', whiteSpace: 'pre-wrap',
          }}>
{`# TOOLS.md

SSH into staging: ssh deploy@10.0.1.5
Grafana: http://grafana.internal:3000
API base: https://api.example.com/v2`}
          </pre>
        </div>

        <div style={{ flex: '1 1 280px', minWidth: 260 }}>
          <div style={{ fontFamily: 'var(--sans)', fontSize: 13, fontWeight: 600, color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: 10 }}>Skills</div>
          <div style={{ fontFamily: 'var(--sans)', fontSize: 17, color: 'var(--warm-body)', lineHeight: 1.6 }}>
            Reusable capabilities installed from ClawHub or written locally. A skill is a folder with a manifest and code — like a plugin that gives the agent new abilities.
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 16 }}>
            {['Web search', 'Email', 'Calendar', 'File management', 'Browser'].map((s, i) => (
              <div key={i} style={{
                fontFamily: 'var(--sans)', fontSize: 14, padding: '8px 14px',
                background: 'rgba(0,0,0,0.04)', borderRadius: 8, color: 'var(--warm-headline)',
                display: 'flex', alignItems: 'center', gap: 8,
              }}>
                <span style={{ color: 'var(--accent)', fontSize: 12 }}>▸</span> {s}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ fontFamily: 'var(--sans)', fontSize: 15, color: 'var(--warm-muted)', maxWidth: 520, lineHeight: 1.6 }}>
        Start with zero skills. Add them one at a time. Read the source before installing.
      </div>
    </div>
  )
}
