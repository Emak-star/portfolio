import FadeUp from '@/components/ui/FadeUp'
import { siteConfig, skills, aiTools, values } from '@/lib/data'

export default function About() {
  return (
    <section id="about" className="section-pad" style={{ background: 'var(--bg)' }}>
      <FadeUp>
        <div className="section-pill">About me</div>
        <h2 className="display-heading">
          The developer<br />
          <em style={{ fontStyle: 'italic', color: 'var(--text2)' }}>behind the work</em>
        </h2>
      </FadeUp>

      <FadeUp delay={100}>
        <div style={{
          display: 'grid', gridTemplateColumns: '1.3fr 1fr',
          gap: '4rem', alignItems: 'start',
        }} className="about-grid">

          {/* Left — bio */}
          <div className="about-text">
            {[
              <>I&apos;m a frontend developer with about 3 years of experience building web apps with{' '}
                <strong>React, TypeScript, and Tailwind CSS</strong>. I got into development because I love
                the intersection of logic and design — the moment a product clicks together and actually{' '}
                <em>feels good</em> to use.</>,
              <>Over the past year I&apos;ve been deeply exploring how AI tools fit into a modern frontend
                workflow. I use <span style={{ color: 'var(--accent2)' }}>Cursor, v0.dev, and the Claude API</span>{' '}
                not to replace thinking, but to move faster, reduce boilerplate, and take on more ambitious
                projects than I could alone.</>,
              <>Right now I&apos;m based in <strong>Lagos, Nigeria</strong> and work with clients remotely
                across Africa, Europe, and beyond. I&apos;m comfortable working async, communicating clearly
                across time zones, and delivering projects that don&apos;t need hand-holding.</>,
              <>When I&apos;m not building, I&apos;m exploring design systems and contributing to open source.
                I believe the best code is the code that solves a real problem simply.</>,
            ].map((p, i) => (
              <p key={i} style={{
                fontSize: 15, lineHeight: 1.85, color: 'var(--text2)',
                marginBottom: i < 3 ? '1.2rem' : 0,
              }}>
                {p}
              </p>
            ))}
          </div>

          {/* Right — sidebar */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {/* Location */}
            <InfoCard label="Location" value={siteConfig.location} />
            {/* Experience */}
            <InfoCard label="Experience" value={siteConfig.experience} />

            {/* Skill bars */}
            <div style={{
              background: 'var(--surface)', border: '1px solid var(--border)',
              borderRadius: 12, padding: '1rem 1.2rem',
            }}>
              <p style={{ fontSize: 10, fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text3)', marginBottom: 12 }}>
                Core skills
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {skills.map((s) => (
                  <div key={s.name} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <span style={{ fontSize: 12, color: 'var(--text2)', minWidth: 110 }}>{s.name}</span>
                    <div style={{ flex: 1, height: 3, background: 'var(--border2)', borderRadius: 2 }}>
                      <div style={{ width: `${s.pct}%`, height: '100%', borderRadius: 2, background: 'var(--accent)' }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* AI tools */}
            <div style={{
              background: 'var(--surface)', border: '1px solid var(--border)',
              borderRadius: 12, padding: '1rem 1.2rem',
            }}>
              <p style={{ fontSize: 10, fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text3)', marginBottom: 10 }}>
                AI tools I use
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {aiTools.map((t) => (
                  <span key={t} style={{
                    fontSize: 11, padding: '3px 10px', borderRadius: 100,
                    background: 'var(--accent-bg)', color: 'var(--accent2)',
                    border: '1px solid var(--accent-border)',
                  }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Values */}
            <div style={{
              background: 'var(--surface)', border: '1px solid var(--border)',
              borderRadius: 12, padding: '1rem 1.2rem',
            }}>
              <p style={{ fontSize: 10, fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text3)', marginBottom: 10 }}>
                What I care about
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 6 }}>
                {values.map((v) => (
                  <li key={v} style={{ fontSize: 13, color: 'var(--text2)', display: 'flex', alignItems: 'center', gap: 8 }}>
                    <span style={{ width: 5, height: 5, background: 'var(--accent)', borderRadius: '50%', flexShrink: 0, display: 'inline-block' }} />
                    {v}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </FadeUp>

      <style>{`
        @media (max-width: 900px) {
          .about-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}

function InfoCard({ label, value }: { label: string; value: string }) {
  return (
    <div style={{
      background: 'var(--surface)', border: '1px solid var(--border)',
      borderRadius: 12, padding: '1rem 1.2rem',
    }}>
      <p style={{ fontSize: 10, fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text3)', marginBottom: 8 }}>
        {label}
      </p>
      <p style={{ fontSize: 14, color: 'var(--text)', fontWeight: 500 }}>{value}</p>
    </div>
  )
}
