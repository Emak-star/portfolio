'use client'

import { useState } from 'react'
import FadeUp from '@/components/ui/FadeUp'
import { siteConfig } from '@/lib/data'

const projectTypes = [
  'New web app from scratch',
  'AI feature integration',
  'Landing page / marketing site',
  'Dashboard or admin panel',
  'Freelance hourly work',
  'Something else',
]

const socialLinks = [
  { label: 'LinkedIn', href: siteConfig.linkedin },
  { label: 'Upwork',   href: siteConfig.upwork },
  { label: 'GitHub',   href: siteConfig.github },
  { label: 'Download CV', href: siteConfig.cv, arrow: '↓' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', type: projectTypes[0], message: '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) return
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      setStatus(res.ok ? 'success' : 'error')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="section-pad" style={{ background: 'var(--bg2)' }}>
      <FadeUp>
        <div className="section-pill">Contact</div>
        <h2 className="display-heading">
          Let&apos;s build something<br />
          <em style={{ fontStyle: 'italic', color: 'var(--text2)' }}>together</em>
        </h2>
        <p style={{ fontSize: 15, color: 'var(--text2)', maxWidth: 520, lineHeight: 1.75, marginBottom: '3rem' }}>
          Have a project in mind? I&apos;d love to hear about it. Fill in the form or reach out directly — I typically respond within 24 hours.
        </p>
      </FadeUp>

      <FadeUp delay={100}>
        <div style={{
          display: 'grid', gridTemplateColumns: '1.2fr 1fr',
          gap: '3rem', alignItems: 'start',
        }} className="contact-grid">

          {/* Form */}
          <div style={{
            background: 'var(--surface)', border: '1px solid var(--border)',
            borderRadius: 12, padding: '2rem',
          }}>
            {status === 'success' ? (
              <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
                <div style={{ fontSize: 40, marginBottom: '1rem' }}>✓</div>
                <h3 style={{ fontSize: 18, color: 'var(--text)', marginBottom: 8 }}>Message sent!</h3>
                <p style={{ fontSize: 14, color: 'var(--text2)' }}>Got it — I&apos;ll be in touch within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                {[
                  { label: 'Your name', name: 'name', type: 'text', placeholder: 'Jane Smith' },
                  { label: 'Email address', name: 'email', type: 'email', placeholder: 'jane@company.com' },
                ].map((f) => (
                  <div key={f.name} style={{ marginBottom: '1.1rem' }}>
                    <label style={{ display: 'block', fontSize: 12, color: 'var(--text3)', marginBottom: 6, letterSpacing: '0.03em' }}>
                      {f.label}
                    </label>
                    <input
                      name={f.name}
                      type={f.type}
                      placeholder={f.placeholder}
                      value={form[f.name as keyof typeof form]}
                      onChange={handleChange}
                      required
                      style={{
                        width: '100%', padding: '10px 14px',
                        background: 'var(--bg)', border: '1px solid var(--border2)',
                        borderRadius: 8, color: 'var(--text)',
                        fontFamily: 'inherit', fontSize: 14, outline: 'none',
                      }}
                      className="form-input"
                    />
                  </div>
                ))}

                <div style={{ marginBottom: '1.1rem' }}>
                  <label style={{ display: 'block', fontSize: 12, color: 'var(--text3)', marginBottom: 6, letterSpacing: '0.03em' }}>
                    Project type
                  </label>
                  <select
                    name="type"
                    value={form.type}
                    onChange={handleChange}
                    style={{
                      width: '100%', padding: '10px 14px',
                      background: 'var(--bg)', border: '1px solid var(--border2)',
                      borderRadius: 8, color: 'var(--text)',
                      fontFamily: 'inherit', fontSize: 14, outline: 'none',
                      appearance: 'none', cursor: 'pointer',
                    }}
                    className="form-input"
                  >
                    {projectTypes.map((t) => <option key={t}>{t}</option>)}
                  </select>
                </div>

                <div style={{ marginBottom: '1.1rem' }}>
                  <label style={{ display: 'block', fontSize: 12, color: 'var(--text3)', marginBottom: 6, letterSpacing: '0.03em' }}>
                    Tell me about your project
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="What are you building, what's your timeline, and what's your rough budget?"
                    required
                    style={{
                      width: '100%', padding: '10px 14px',
                      background: 'var(--bg)', border: '1px solid var(--border2)',
                      borderRadius: 8, color: 'var(--text)',
                      fontFamily: 'inherit', fontSize: 14, outline: 'none',
                      resize: 'vertical', minHeight: 100,
                    }}
                    className="form-input"
                  />
                </div>

                {status === 'error' && (
                  <p style={{ fontSize: 13, color: '#f87171', marginBottom: '0.75rem' }}>
                    Something went wrong — please try emailing me directly.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  style={{
                    width: '100%', padding: 12, borderRadius: 100,
                    background: 'var(--accent)', color: '#fff',
                    fontWeight: 500, fontSize: 14, border: 'none',
                    cursor: status === 'loading' ? 'wait' : 'pointer',
                    fontFamily: 'inherit', opacity: status === 'loading' ? 0.7 : 1,
                    transition: 'all 0.2s',
                  }}
                >
                  {status === 'loading' ? 'Sending…' : 'Send message →'}
                </button>
              </form>
            )}
          </div>

          {/* Sidebar */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {/* Availability */}
            <div style={{
              background: 'var(--green-bg)', border: '1px solid rgba(34,211,160,0.2)',
              borderRadius: 12, padding: '1.2rem 1.4rem',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
                <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--green)', display: 'inline-block' }} />
                <span style={{ fontSize: 13, fontWeight: 500, color: 'var(--green)' }}>Available for new projects</span>
              </div>
              <p style={{ fontSize: 12, color: 'var(--green)', opacity: 0.75, lineHeight: 1.55 }}>
                Currently taking on freelance work and open to full-time remote roles.
              </p>
            </div>

            {/* Response time */}
            <div style={{
              background: 'var(--accent-bg)', border: '1px solid var(--accent-border)',
              borderRadius: 12, padding: '1.2rem 1.4rem',
            }}>
              <p style={{ fontSize: 13, fontWeight: 500, color: 'var(--accent2)', marginBottom: 4 }}>Typical response time</p>
              <p style={{ fontSize: 12, color: 'var(--accent2)', opacity: 0.75, lineHeight: 1.55 }}>
                Within 24 hours on weekdays. I&apos;ll reply with a few questions to understand your project better.
              </p>
            </div>

            {/* Direct email */}
            <div style={{
              background: 'var(--surface)', border: '1px solid var(--border)',
              borderRadius: 12, padding: '1.2rem 1.4rem',
            }}>
              <p style={{ fontSize: 10, fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text3)', marginBottom: 8 }}>
                Direct contact
              </p>
              <a href={`mailto:${siteConfig.email}`} style={{
                fontSize: 14, color: 'var(--accent2)', fontWeight: 500,
                textDecoration: 'none', display: 'block', marginBottom: 3,
              }}>
                {siteConfig.email}
              </a>
              <p style={{ fontSize: 11, color: 'var(--text3)' }}>For urgent enquiries</p>
            </div>

            {/* Social links */}
            <div style={{
              background: 'var(--surface)', border: '1px solid var(--border)',
              borderRadius: 12, padding: '1.2rem 1.4rem',
            }}>
              <p style={{ fontSize: 10, fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text3)', marginBottom: 8 }}>
                Find me on
              </p>
              <ul style={{ listStyle: 'none' }}>
                {socialLinks.map((s, i) => (
                  <li key={s.label} style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    padding: '8px 0',
                    borderBottom: i < socialLinks.length - 1 ? '1px solid var(--border)' : 'none',
                  }}>
                    <a href={s.href} target="_blank" rel="noopener noreferrer" style={{
                      fontSize: 13, color: 'var(--text2)', textDecoration: 'none',
                      display: 'flex', justifyContent: 'space-between', width: '100%',
                    }} className="soc-link">
                      <span>{s.label}</span>
                      <span style={{ fontSize: 12, color: 'var(--text3)' }}>{s.arrow ?? '↗'}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </FadeUp>

      <style>{`
        .form-input:focus { border-color: var(--accent) !important; }
        .soc-link:hover { color: var(--text) !important; }
        @media (max-width: 900px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
