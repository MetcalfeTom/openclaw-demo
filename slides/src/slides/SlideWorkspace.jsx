import { useState } from 'react'

const files = [
  { name: 'AGENTS.md', desc: 'How the agent operates - procedures, session startup rules, red lines. Loaded first, survives context resets.' },
  { name: 'SOUL.md', desc: 'Who the agent is - personality, values, tone. Injected into every session with a "embody this persona" hint.' },
  { name: 'IDENTITY.md', desc: 'Agent identity - name, emoji, avatar, creature type. Parsed for display metadata.' },
  { name: 'USER.md', desc: 'Who you are - timezone, preferences, communication style. The agent updates it over time.' },
  { name: 'TOOLS.md', desc: 'Environment-specific tool notes - SSH hosts, camera names, API quirks. Agent-editable.' },
  { name: 'HEARTBEAT.md', desc: 'Recurring checks on a configurable schedule. Default: every 30 min. Empty = skipped.' },
  { name: 'MEMORY.md', desc: 'Long-term curated knowledge. Not auto-created - the agent builds it organically over time.' },
  { name: 'memory/', desc: 'Daily logs: memory/2026-04-10.md - working notes written during memory flush.' },
]

const S = { position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 12% 0 14%' }

export default function SlideWorkspace() {
  const [expanded, setExpanded] = useState(null)

  return (
    <div style={S}>
      <div style={{ fontFamily: 'var(--serif)', fontSize: 44, fontWeight: 700, color: 'var(--warm-headline)', lineHeight: 1.15, marginBottom: 12 }}>
        The workspace
      </div>
      <div style={{ fontFamily: 'var(--sans)', fontSize: 18, color: 'var(--warm-muted)', marginBottom: 44, maxWidth: 600 }}>
        A folder of plain markdown files. No database, no config panel.<br />
        Change a file, change the agent.
      </div>

      <div style={{ fontFamily: 'var(--mono)', fontSize: 15, color: 'var(--warm-body)', background: 'rgba(0,0,0,0.04)', borderRadius: 12, padding: '24px 28px', maxWidth: 600 }}>
        <div style={{ color: 'var(--warm-muted)', marginBottom: 12, fontSize: 13 }}>~/.openclaw/workspace/</div>
        {files.map((f, i) => (
          <div key={i} style={{ marginBottom: 4 }}>
            <div
              onClick={(e) => { e.stopPropagation(); setExpanded(expanded === i ? null : i) }}
              style={{
                cursor: 'pointer', padding: '8px 12px', borderRadius: 8,
                background: expanded === i ? 'rgba(200,168,130,0.15)' : 'transparent',
                transition: 'background 0.2s',
                display: 'flex', alignItems: 'center', gap: 10,
              }}
            >
              <span style={{ color: 'var(--accent)', fontSize: 12 }}>{expanded === i ? '▾' : '▸'}</span>
              <span style={{ fontWeight: 600, color: 'var(--warm-headline)' }}>{f.name}</span>
            </div>
            {expanded === i && (
              <div style={{
                padding: '8px 12px 8px 38px', fontSize: 14,
                fontFamily: 'var(--sans)', color: 'var(--warm-muted)', lineHeight: 1.5,
                animation: 'fadeIn 0.3s ease',
              }}>
                {f.desc}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
