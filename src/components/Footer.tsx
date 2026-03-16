export default function Footer() {
  return (
    <footer style={{
      padding: '2rem max(2rem, calc((100vw - 1100px)/2))',
      borderTop: '1px solid var(--border)',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      flexWrap: 'wrap', gap: '1rem',
    }}>
      <p style={{ fontSize: 13, color: 'var(--text3)' }}>
        © {new Date().getFullYear()} <strong style={{ color: 'var(--text2)', fontWeight: 500 }}>Emaks</strong> · Built with Next.js &amp; Tailwind
      </p>
      <div style={{ display: 'flex', gap: '1.5rem' }}>
        {[
          { href: '#hero', label: 'Back to top ↑' },
          { href: '/cv.pdf', label: 'Download CV', external: true },
          { href: 'https://github.com/Emak-star', label: 'GitHub', external: true },
        ].map((l) => (
          <a
            key={l.href}
            href={l.href}
            target={l.external ? '_blank' : undefined}
            rel={l.external ? 'noopener noreferrer' : undefined}
            style={{ fontSize: 13, color: 'var(--text3)', textDecoration: 'none' }}
            className="footer-link"
          >
            {l.label}
          </a>
        ))}
      </div>
      <p style={{ fontSize: 11, color: 'var(--text3)' }}>
        Deployed on{' '}
        <a href="https://vercel.com" target="_blank" rel="noopener noreferrer"
          style={{ color: 'var(--accent2)', textDecoration: 'none' }}>
          Vercel
        </a>
      </p>
      <style>{`.footer-link:hover { color: var(--text2) !important; }`}</style>
    </footer>
  )
}
