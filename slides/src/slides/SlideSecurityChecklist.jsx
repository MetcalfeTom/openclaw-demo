const items = [
  'Don\'t install skills you haven\'t read the source of',
  'Start read-only: summarize, draft, classify',
  'Never put secrets in workspace files',
  'Update to latest stable release',
]

const S = { position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 14%' }

export default function SlideSecurityChecklist() {
  return (
    <div style={S}>
      <div style={{ fontFamily: 'var(--serif)', fontSize: 44, fontWeight: 700, lineHeight: 1.1, marginBottom: 44 }}>
        Deploy safely
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 14, maxWidth: 600 }}>
        {items.map((item, i) => (
          <div key={i} style={{
            display: 'flex', alignItems: 'center', gap: 14,
            fontFamily: 'var(--sans)', fontSize: 18,
          }}>
            <div style={{
              width: 28, height: 28, borderRadius: 14,
              border: '2px solid var(--accent)', flexShrink: 0,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 13, color: 'var(--accent)', fontWeight: 700,
            }}>
              {i + 1}
            </div>
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
