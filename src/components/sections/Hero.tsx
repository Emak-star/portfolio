import { siteConfig } from '@/lib/data'

const GithubIcon = () => (
  <svg width={14} height={14} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
)
const LinkedinIcon = () => (
  <svg width={14} height={14} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)

export default function Hero() {
  return (
    <section id="hero" style={{
      minHeight: '100vh',
      display: 'flex', alignItems: 'center',
      paddingTop: 'calc(var(--nav-h) + 4rem)',
      paddingBottom: '4rem',
      padding: 'calc(var(--nav-h) + 4rem) max(2rem, calc((100vw - 1100px)/2)) 4rem',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Background glow */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0,
        background: `
          radial-gradient(ellipse 70% 60% at 60% 40%, rgba(79,110,247,0.07) 0%, transparent 70%),
          radial-gradient(ellipse 40% 40% at 20% 70%, rgba(34,211,160,0.04) 0%, transparent 60%)
        `,
      }} />

      <div style={{
        display: 'grid', gridTemplateColumns: '1fr 1fr',
        gap: '4rem', alignItems: 'center',
        position: 'relative', zIndex: 1, width: '100%',
      }} className="hero-grid">

        {/* Left — copy */}
        <div>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 7,
            fontSize: 12, color: 'var(--green)',
            background: 'var(--green-bg)', border: '1px solid rgba(34,211,160,0.2)',
            padding: '5px 12px', borderRadius: 100, marginBottom: '1.5rem',
          }}>
            <span style={{
              width: 6, height: 6, background: 'var(--green)',
              borderRadius: '50%', display: 'inline-block',
            }} className="animate-pulse-dot" />
            Available for freelance
          </div>

          <h1 style={{
            fontFamily: 'var(--serif)', fontWeight: 300, fontStyle: 'italic',
            fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
            lineHeight: 1.05, letterSpacing: '-0.03em',
            color: 'var(--text)', marginBottom: '0.4rem',
          }}>
            Hi, I&apos;m{' '}
            <em style={{ fontStyle: 'normal', color: 'var(--accent2)' }}>Emaks.</em>
          </h1>

          <p style={{
            fontSize: 14, color: 'var(--text3)', fontFamily: 'var(--mono)',
            letterSpacing: '0.05em', marginBottom: '1.5rem',
          }}>
            <span style={{ color: 'var(--text2)' }}>Frontend Developer</span>
            {' '}· React · TypeScript · Tailwind · AI integrations
          </p>

          <p style={{
            fontSize: 16, lineHeight: 1.8, color: 'var(--text2)',
            maxWidth: 480, marginBottom: '2.5rem',
          }}>
            I turn ideas into fast, beautiful web apps — and I build them quicker than most
            because I pair <strong style={{ color: 'var(--text)', fontWeight: 500 }}>
              strong engineering fundamentals
            </strong> with modern AI tools. Whether you need a polished product from scratch
            or a smarter feature added to what you have, I&apos;ve got you.
          </p>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: '2.5rem' }}>
            <a href="#projects" className="btn-primary">
              See my work
              <svg width={14} height={14} viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth={2.5}>
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a href="#contact" className="btn-secondary">Let&apos;s work together</a>
          </div>

          <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'center', flexWrap: 'wrap' }}>
            {[
              { href: siteConfig.github, icon: <GithubIcon />, label: 'GitHub' },
              { href: siteConfig.linkedin, icon: <LinkedinIcon />, label: 'LinkedIn' },
              { href: siteConfig.upwork, label: '↗ Upwork' },
              { href: siteConfig.cv, label: '↓ Download CV' },
            ].map((s) => (
              <a
                key={s.href}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: 13, color: 'var(--text3)', textDecoration: 'none',
                  display: 'flex', alignItems: 'center', gap: 5,
                }}
                className="hero-social-link"
              >
                {s.icon} {s.label}
              </a>
            ))}
          </div>
        </div>

        {/* Right — code cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }} className="hero-visual">
          {/* Card 1 */}
          <div className="float-up-1" style={{
            background: 'var(--surface)', border: '1px solid var(--border)',
            borderRadius: 12, padding: '1.25rem 1.5rem',
            fontFamily: 'var(--mono)', fontSize: 12,
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 10 }}>
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#ff5f56', display: 'inline-block' }} />
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#ffbd2e', display: 'inline-block' }} />
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#27c93f', display: 'inline-block' }} />
              <span style={{ fontSize: 11, color: 'var(--text3)', marginLeft: 4, fontFamily: 'var(--font)' }}>AIGenerator.tsx</span>
            </div>
            <div style={{ lineHeight: 1.7 }}>
              <div><span style={{ color: 'var(--purple)' }}>import</span> <span style={{ color: 'var(--accent2)' }}>useStream</span> <span style={{ color: 'var(--purple)' }}>from</span> <span style={{ color: 'var(--green)' }}>&apos;ai/react&apos;</span></div>
              <div><span style={{ color: 'var(--purple)' }}>import</span> <span style={{ color: 'var(--accent2)' }}>{'{ claude }'}</span> <span style={{ color: 'var(--purple)' }}>from</span> <span style={{ color: 'var(--green)' }}>&apos;@ai-sdk/anthropic&apos;</span></div>
              <div>&nbsp;</div>
              <div><span style={{ color: 'var(--purple)' }}>export function</span> <span style={{ color: 'var(--accent2)' }}>Generator</span>{'() {'}</div>
              <div>&nbsp;&nbsp;<span style={{ color: 'var(--purple)' }}>const</span> {'{ '}<span style={{ color: 'var(--accent2)' }}>stream</span>{', '}<span style={{ color: 'var(--accent2)' }}>isLoading</span>{' } = '}<span style={{ color: 'var(--accent2)' }}>useStream</span>{'({'}</div>
              <div>&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: 'var(--accent2)' }}>model</span>{': '}<span style={{ color: 'var(--accent2)' }}>claude</span>{'('}<span style={{ color: 'var(--green)' }}>&apos;claude-sonnet-4-6&apos;</span>{'),'}</div>
              <div>&nbsp;&nbsp;{'})'}</div>
              <div style={{ color: 'var(--text3)', fontStyle: 'italic' }}>&nbsp;&nbsp;{'// streaming responses ✦'}</div>
              <div>{'}'}</div>
            </div>
          </div>

          {/* Card 2 — stats */}
          <div className="float-up-2" style={{
            background: 'var(--surface)', border: '1px solid var(--border)',
            borderRadius: 12, padding: '1.25rem 1.5rem',
            marginLeft: '1.5rem',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 10 }}>
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#ff5f56', display: 'inline-block' }} />
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#ffbd2e', display: 'inline-block' }} />
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#27c93f', display: 'inline-block' }} />
              <span style={{ fontSize: 11, color: 'var(--text3)', marginLeft: 4, fontFamily: 'var(--font)' }}>performance ✓</span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10 }}>
              {[
                { num: '98', label: 'Lighthouse', color: 'var(--green)' },
                { num: '<1s', label: 'LCP', color: 'var(--accent2)' },
                { num: 'A11y', label: '100%', color: 'var(--purple)' },
              ].map((s) => (
                <div key={s.label} style={{
                  background: 'var(--surface)', border: '1px solid var(--border)',
                  borderRadius: 8, padding: '0.9rem 1rem', textAlign: 'center',
                }}>
                  <div style={{ fontSize: 22, fontWeight: 600, color: s.color, lineHeight: 1, marginBottom: 3 }}>{s.num}</div>
                  <div style={{ fontSize: 11, color: 'var(--text3)' }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Card 3 */}
          <div className="float-up-3" style={{
            background: 'var(--surface)', border: '1px solid var(--border)',
            borderRadius: 12, padding: '1.25rem 1.5rem',
            fontFamily: 'var(--mono)', fontSize: 12,
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 10 }}>
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#ff5f56', display: 'inline-block' }} />
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#ffbd2e', display: 'inline-block' }} />
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#27c93f', display: 'inline-block' }} />
              <span style={{ fontSize: 11, color: 'var(--text3)', marginLeft: 4, fontFamily: 'var(--font)' }}>tools.config.ts</span>
            </div>
            <div style={{ lineHeight: 1.7 }}>
              <div><span style={{ color: 'var(--purple)' }}>const</span> <span style={{ color: 'var(--accent2)' }}>stack</span> = {'['}</div>
              <div>&nbsp;&nbsp;<span style={{ color: 'var(--green)' }}>&apos;React&apos;</span>, <span style={{ color: 'var(--green)' }}>&apos;Next.js&apos;</span>, <span style={{ color: 'var(--green)' }}>&apos;TypeScript&apos;</span>,</div>
              <div>&nbsp;&nbsp;<span style={{ color: 'var(--green)' }}>&apos;Tailwind CSS&apos;</span>, <span style={{ color: 'var(--green)' }}>&apos;Claude API&apos;</span>,</div>
              <div>&nbsp;&nbsp;<span style={{ color: 'var(--green)' }}>&apos;Cursor&apos;</span>, <span style={{ color: 'var(--green)' }}>&apos;v0.dev&apos;</span>, <span style={{ color: 'var(--green)' }}>&apos;Vercel&apos;</span>,</div>
              <div>{']'}</div>
              <div style={{ color: 'var(--text3)', fontStyle: 'italic' }}>{'// AI-accelerated workflow ✦'}</div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-visual { display: none !important; }
        }
        .hero-social-link:hover { color: var(--text2) !important; }
      `}</style>
    </section>
  )
}
