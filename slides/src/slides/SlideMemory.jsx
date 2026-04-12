const S = { position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 12% 0 14%' }

export default function SlideMemory() {
  return (
    <div style={S}>
      <div style={{ fontFamily: 'var(--serif)', fontSize: 44, fontWeight: 700, lineHeight: 1.15, marginBottom: 40 }}>
        MEMORY.md
      </div>

      <div style={{ fontFamily: 'var(--serif)', fontSize: 28, fontStyle: 'italic', lineHeight: 1.45, maxWidth: 700, marginBottom: 36 }}>
        The difference between a conversation with amnesia and one that accumulates state across sessions.
      </div>

      <div style={{ display: 'flex', gap: 40, flexWrap: 'wrap' }}>
        <div style={{ flex: '1 1 280px', minWidth: 260 }}>
          <div style={{ fontFamily: 'var(--sans)', fontSize: 13, fontWeight: 600, color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: 10 }}>MEMORY.md</div>
          <div style={{ fontFamily: 'var(--sans)', fontSize: 17, color: 'var(--dark-muted)', lineHeight: 1.6 }}>
            Curated long-term knowledge. Not auto-created - the agent builds this file organically as it learns what matters.
          </div>
        </div>
        <div style={{ flex: '1 1 280px', minWidth: 260 }}>
          <div style={{ fontFamily: 'var(--sans)', fontSize: 13, fontWeight: 600, color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: 10 }}>memory/2026-04-10.md</div>
          <div style={{ fontFamily: 'var(--sans)', fontSize: 17, color: 'var(--dark-muted)', lineHeight: 1.6 }}>
            Daily working logs. One file per day. Written during memory flush before context compaction.
          </div>
        </div>
      </div>
    </div>
  )
}
