import FadeUp from '@/components/ui/FadeUp'
import { projects } from '@/lib/data'

type Project = typeof projects[number]

function Badge({ children, accent }: { children: React.ReactNode; accent?: boolean }) {
  return (
    <span style={{
      fontSize: 11, padding: '3px 10px', borderRadius: 100,
      border: `1px solid ${accent ? 'var(--accent-border)' : 'var(--border)'}`,
      color: accent ? 'var(--accent2)' : 'var(--text3)',
      background: accent ? 'var(--accent-bg)' : 'transparent',
    }}>
      {children}
    </span>
  )
}

function ProjectCard({ project }: { project: Project }) {
  const thumbBg: Record<string, string> = {
    'thumb-blue': 'linear-gradient(135deg, rgba(79,110,247,0.15) 0%, rgba(79,110,247,0.05) 100%)',
    'thumb-teal': 'linear-gradient(135deg, rgba(6,182,212,0.12) 0%, rgba(6,182,212,0.04) 100%)',
    'thumb-purple': 'linear-gradient(135deg, rgba(167,139,250,0.12) 0%, rgba(167,139,250,0.04) 100%)',
  }

  return (
    <div style={{
      background: 'var(--surface)',
      border: `1px solid ${project.featured ? 'var(--accent-border)' : 'var(--border)'}`,
      borderRadius: 12, overflow: 'hidden',
    }} className="project-card">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr' }} className="featured-inner">
        {/* Thumb */}
        <div style={{
          aspectRatio: '16/10',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontFamily: 'var(--mono)', fontSize: 12, color: 'var(--text3)',
          letterSpacing: '0.04em', padding: '2rem',
          position: 'relative', overflow: 'hidden',
          background: thumbBg[project.thumbClass],
        }}>
          <span style={{
            fontSize: 40, opacity: 0.25, position: 'absolute',
            right: '1.5rem', top: '50%', transform: 'translateY(-50%)',
          }}>{project.thumbIcon}</span>
          <span>{project.thumb}</span>
        </div>

        {/* Body */}
        <div style={{
          padding: '2rem', display: 'flex',
          flexDirection: 'column', gap: 10, justifyContent: 'center',
        }}>
          <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
            <Badge accent>Featured</Badge>
            {project.badges.map((b) => <Badge key={b}>{b}</Badge>)}
          </div>
          <p style={{ fontSize: 22, fontWeight: 500, color: 'var(--text)', lineHeight: 1.3 }}>
            {project.title}
          </p>
          <p style={{ fontSize: 15, color: 'var(--text2)', lineHeight: 1.7 }}>
            {project.description}
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            {project.metrics.map((m) => (
              <span key={m.label} style={{ fontSize: 12, color: 'var(--text3)' }}>
                <strong style={{ color: 'var(--accent2)', fontWeight: 500 }}>{m.label}</strong>{' '}{m.value}
              </span>
            ))}
          </div>
          <div style={{ display: 'flex', gap: 12, marginTop: 4 }}>
            <a href={project.demo} style={{ fontSize: 13, color: 'var(--accent2)', textDecoration: 'none' }} className="proj-link">Live demo →</a>
            <a href={project.github} style={{ fontSize: 13, color: 'var(--text3)', textDecoration: 'none' }} className="proj-link-muted">GitHub</a>
            <a href={project.caseStudy} style={{ fontSize: 13, color: 'var(--text3)', textDecoration: 'none' }} className="proj-link-muted">Case study</a>
          </div>
        </div>
      </div>
    </div>
  )
}

function SmallCard({ project }: { project: Project }) {
  const thumbBg: Record<string, string> = {
    'thumb-blue': 'linear-gradient(135deg, rgba(79,110,247,0.15) 0%, rgba(79,110,247,0.05) 100%)',
    'thumb-teal': 'linear-gradient(135deg, rgba(6,182,212,0.12) 0%, rgba(6,182,212,0.04) 100%)',
    'thumb-purple': 'linear-gradient(135deg, rgba(167,139,250,0.12) 0%, rgba(167,139,250,0.04) 100%)',
  }

  return (
    <div style={{
      background: 'var(--surface)', border: '1px solid var(--border)',
      borderRadius: 12, overflow: 'hidden',
    }} className="project-card">
      <div style={{
        aspectRatio: '16/10',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontFamily: 'var(--mono)', fontSize: 12, color: 'var(--text3)',
        letterSpacing: '0.04em', padding: '2rem',
        position: 'relative', overflow: 'hidden',
        background: thumbBg[project.thumbClass],
      }}>
        <span style={{
          fontSize: 40, opacity: 0.25, position: 'absolute',
          right: '1.5rem', top: '50%', transform: 'translateY(-50%)',
        }}>{project.thumbIcon}</span>
        <span>{project.thumb}</span>
      </div>
      <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: 10 }}>
        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
          {project.badges.map((b) => <Badge key={b}>{b}</Badge>)}
        </div>
        <p style={{ fontSize: 17, fontWeight: 500, color: 'var(--text)', lineHeight: 1.3 }}>
          {project.title}
        </p>
        <p style={{ fontSize: 13, color: 'var(--text2)', lineHeight: 1.7 }}>
          {project.description}
        </p>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          {project.metrics.map((m) => (
            <span key={m.label} style={{ fontSize: 12, color: 'var(--text3)' }}>
              <strong style={{ color: 'var(--accent2)', fontWeight: 500 }}>{m.label}</strong>{' '}{m.value}
            </span>
          ))}
        </div>
        <div style={{ display: 'flex', gap: 12, marginTop: 4 }}>
          <a href={project.demo} style={{ fontSize: 13, color: 'var(--accent2)', textDecoration: 'none' }} className="proj-link">Live demo →</a>
          <a href={project.github} style={{ fontSize: 13, color: 'var(--text3)', textDecoration: 'none' }} className="proj-link-muted">GitHub</a>
          <a href={project.caseStudy} style={{ fontSize: 13, color: 'var(--text3)', textDecoration: 'none' }} className="proj-link-muted">Case study</a>
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const featured = projects.find((p) => p.featured)!
  const rest = projects.filter((p) => !p.featured)

  return (
    <section id="projects" className="section-pad" style={{ background: 'var(--bg2)' }}>
      <FadeUp>
        <div className="section-pill">Projects</div>
        <h2 className="display-heading">Things I&apos;ve built</h2>
        <p style={{
          fontSize: 15, color: 'var(--text2)', maxWidth: 520,
          lineHeight: 1.75, marginBottom: '3rem',
        }}>
          A selection of projects that show how I think, what I can build, and how I use AI tools to ship faster.
        </p>
      </FadeUp>

      <FadeUp delay={100}>
        <div style={{ display: 'grid', gap: 16 }}>
          {/* Featured — full width */}
          <ProjectCard project={featured} />

          {/* Two-column grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }} className="two-col-projects">
            {rest.map((p) => <SmallCard key={p.id} project={p} />)}
          </div>
        </div>
      </FadeUp>

      <style>{`
        .project-card { transition: border-color 0.2s, transform 0.2s; }
        .project-card:hover { border-color: var(--border2) !important; transform: translateY(-2px); }
        .proj-link:hover { color: var(--text) !important; }
        .proj-link-muted:hover { color: var(--text2) !important; }
        @media (max-width: 900px) {
          .featured-inner { grid-template-columns: 1fr !important; }
          .two-col-projects { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
