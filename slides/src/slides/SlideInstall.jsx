const steps = [
  { num: '01', title: 'Install', cmd: 'curl -fsSL https://openclaw.ai/install.sh | bash' },
  { num: '02', title: 'Onboard', cmd: 'openclaw onboard --install-daemon' },
  { num: '03', title: 'Verify', cmd: 'openclaw gateway status' },
  { num: '04', title: 'First message', cmd: 'openclaw dashboard' },
  { num: '05', title: 'Connect your phone', cmd: 'Telegram (bot token) or WhatsApp (QR code)' },
]

const S = { position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 10% 0 14%' }

export default function SlideInstall() {
  return (
    <div style={S}>
      <div style={{ fontFamily: 'var(--serif)', fontSize: 44, fontWeight: 700, color: 'var(--warm-headline)', lineHeight: 1.15, marginBottom: 12 }}>
        Getting it running
      </div>
      <div style={{ fontFamily: 'var(--sans)', fontSize: 17, color: 'var(--warm-muted)', marginBottom: 48 }}>
        Goal: first reply in the dashboard, then on your phone.
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 24, maxWidth: 600 }}>
        {steps.map((s, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 20 }}>
            <div style={{
              fontFamily: 'var(--serif)', fontSize: 32, fontWeight: 700,
              color: i === 4 ? 'var(--accent)' : 'var(--accent)', lineHeight: 1, minWidth: 48,
              opacity: i === 4 ? 1 : 0.7,
            }}>
              {s.num}
            </div>
            <div>
              <div style={{ fontFamily: 'var(--sans)', fontSize: 18, fontWeight: 600, color: 'var(--warm-headline)', marginBottom: 6 }}>{s.title}</div>
              <code style={{
                fontFamily: i === 4 ? 'var(--sans)' : 'var(--mono)', fontSize: 14,
                background: 'rgba(0,0,0,0.05)', padding: '4px 10px', borderRadius: 6,
                color: 'var(--warm-body)',
              }}>
                {s.cmd}
              </code>
            </div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 36, fontFamily: 'var(--sans)', fontSize: 14, color: 'var(--warm-muted)', maxWidth: 480, lineHeight: 1.6 }}>
        Telegram is fastest - create a bot via @BotFather, paste the token during onboard. WhatsApp uses a QR code login.
        macOS app also available — <code style={{ background: 'rgba(0,0,0,0.05)', padding: '2px 8px', borderRadius: 4, fontSize: 13 }}>brew install openclaw</code> or download from openclaw.ai/download.
      </div>
    </div>
  )
}
