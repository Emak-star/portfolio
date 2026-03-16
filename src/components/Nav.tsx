'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const links = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#contact', label: 'Contact' },
  { href: '/cv.pdf', label: 'CV', external: true },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <nav
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
          height: 'var(--nav-h)',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '0 max(2rem, calc((100vw - 1100px)/2))',
          background: scrolled ? 'rgba(10,10,15,0.95)' : 'rgba(10,10,15,0.85)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid var(--border)',
          transition: 'background 0.3s',
        }}
      >
        <Link
          href="#hero"
          style={{
            fontFamily: 'var(--mono)', fontSize: 14, color: 'var(--text2)',
            textDecoration: 'none', letterSpacing: '0.02em',
          }}
        >
          <span style={{ color: 'var(--accent)' }}>dev</span> / emaks
        </Link>

        {/* Desktop links */}
        <ul style={{ display: 'flex', alignItems: 'center', gap: '2rem', listStyle: 'none' }}
          className="nav-desktop">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                target={l.external ? '_blank' : undefined}
                rel={l.external ? 'noopener noreferrer' : undefined}
                style={{ fontSize: 14, color: 'var(--text2)', textDecoration: 'none' }}
                className="nav-link"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="nav-cta nav-desktop"
          style={{
            fontSize: 13, fontWeight: 500,
            padding: '8px 18px', borderRadius: 100,
            background: 'var(--accent)', color: '#fff',
            textDecoration: 'none',
          }}
        >
          Let&apos;s work together →
        </a>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
          className="nav-mobile-btn"
          style={{
            display: 'none', background: 'none', border: 'none',
            color: 'var(--text2)', cursor: 'pointer', padding: 4,
          }}
        >
          <svg width={20} height={20} fill="none" viewBox="0 0 24 24"
            stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round"
              d={menuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
          </svg>
        </button>
      </nav>

      {/* Mobile nav drawer */}
      {menuOpen && (
        <div style={{
          position: 'fixed', top: 'var(--nav-h)', left: 0, right: 0,
          background: 'var(--bg2)', borderBottom: '1px solid var(--border)',
          padding: '1.5rem 2rem', zIndex: 99,
          display: 'flex', flexDirection: 'column', gap: '1.25rem',
        }}>
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              target={l.external ? '_blank' : undefined}
              rel={l.external ? 'noopener noreferrer' : undefined}
              onClick={() => setMenuOpen(false)}
              style={{ fontSize: 15, color: 'var(--text2)', textDecoration: 'none' }}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .nav-desktop { display: none !important; }
          .nav-mobile-btn { display: block !important; }
        }
        .nav-link:hover { color: var(--text) !important; }
        .nav-cta:hover { opacity: 0.85; }
      `}</style>
    </>
  )
}
