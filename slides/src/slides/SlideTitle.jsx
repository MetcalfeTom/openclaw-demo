import lobsterImg from '../assets/thirdlobster.png'

const S = { position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '0 10%' }

export default function SlideTitle() {
  return (
    <div style={S}>
      <div style={{ position: 'relative', width: 420, height: 420, marginBottom: 32 }}>
        <img
          src={lobsterImg}
          alt=""
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
        />
        <div style={{
          position: 'absolute', inset: 0, display: 'flex', alignItems: 'flex-end', justifyContent: 'center',
          paddingBottom: 28,
          background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.15) 50%, transparent 100%)',
        }}>
          <div style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 72, fontWeight: 600, fontStyle: 'italic', color: '#fff', letterSpacing: '-1px', lineHeight: 1 }}>
            OpenClaw
          </div>
        </div>
      </div>
      <div style={{ fontFamily: 'var(--sans)', fontSize: 22, color: 'var(--dark-muted)', fontWeight: 400 }}>
        Product design, and how to use it
      </div>
    </div>
  )
}
