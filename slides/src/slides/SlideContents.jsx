const sections = [
  { num: '01', title: 'The origin story', time: '8 min' },
  { num: '02', title: 'How it actually works', time: '10 min' },
  { num: '03', title: 'What would you use it for?', time: '10 min' },
  { num: '04', title: 'Safety', time: '12 min' },
  { num: '05', title: 'Getting it running', time: '15 min' },
  { num: '06', title: 'Your first agent', time: '5 min' },
]

const S = { position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 14%' }

export default function SlideContents() {
  return (
    <div style={S}>
      <div style={{ fontFamily: 'var(--serif)', fontSize: 40, fontWeight: 700, lineHeight: 1.1, marginBottom: 48 }}>
        Today
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20, maxWidth: 520 }}>
        {sections.map((s) => (
          <div key={s.num} style={{ display: 'flex', alignItems: 'baseline', gap: 20 }}>
            <div style={{ fontFamily: 'var(--sans)', fontSize: 14, color: 'var(--dark-muted)', fontWeight: 600, minWidth: 28 }}>{s.num}</div>
            <div style={{ fontFamily: 'var(--sans)', fontSize: 22, fontWeight: 500, flex: 1 }}>{s.title}</div>
            <div style={{ fontFamily: 'var(--sans)', fontSize: 14, color: 'var(--dark-muted)' }}>{s.time}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
