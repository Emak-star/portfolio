import FadeUp from '@/components/ui/FadeUp'
import { testimonials } from '@/lib/data'

const avatarColors: Record<string, { bg: string; color: string }> = {
  blue:  { bg: 'var(--accent-bg)',  color: 'var(--accent2)' },
  green: { bg: 'var(--green-bg)',   color: 'var(--green)' },
  amber: { bg: 'rgba(245,166,35,0.1)', color: 'var(--amber)' },
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-pad" style={{ background: 'var(--bg)' }}>
      <FadeUp>
        <div className="section-pill">Testimonials</div>
        <h2 className="display-heading">What people say</h2>
      </FadeUp>

      <FadeUp delay={100}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 16,
          marginTop: '3rem',
        }} className="testimonials-grid">
          {testimonials.map((t) => {
            const av = avatarColors[t.color]
            return (
              <div key={t.name} style={{
                background: 'var(--surface)', border: '1px solid var(--border)',
                borderRadius: 12, padding: '1.5rem',
                display: 'flex', flexDirection: 'column', gap: '1.25rem',
              }}>
                <p style={{
                  fontFamily: 'var(--serif)', fontWeight: 300, fontStyle: 'italic',
                  fontSize: 15, color: 'var(--text2)', lineHeight: 1.75, flex: 1,
                }}>
                  <span style={{ color: 'var(--accent)', fontSize: '1.2em' }}>&ldquo;</span>
                  {t.quote}
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div style={{
                    width: 36, height: 36, borderRadius: '50%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 12, fontWeight: 500, flexShrink: 0,
                    background: av.bg, color: av.color,
                  }}>
                    {t.initials}
                  </div>
                  <div>
                    <p style={{ fontSize: 13, fontWeight: 500, color: 'var(--text)' }}>{t.name}</p>
                    <p style={{ fontSize: 11, color: 'var(--text3)' }}>{t.role}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </FadeUp>

      <style>{`
        @media (max-width: 900px) {
          .testimonials-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
