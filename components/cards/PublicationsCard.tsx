'use client';

import { recentPubs } from '@/data/publications';

export default function PublicationsCard() {
  const publications = recentPubs(5);

  return (
    <div id="publications" className="bento-card p-7 h-full animate-fade-up delay-400">
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
        <span className="emerald-tag">Selected Publications</span>
        <a
          href="https://scholar.google.com/citations?user=IjH5C4gAAAAJ"
          target="_blank"
          rel="noopener noreferrer"
          className="link-underline font-mono-custom"
          style={{ fontSize: '0.625rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--emerald)', textDecoration: 'none' }}
        >
          Full List →
        </a>
      </div>

      <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
        {publications.map((p, i) => (
          <li
            key={p.id}
            style={{
              display: 'flex',
              gap: '1rem',
              alignItems: 'flex-start',
              padding: '1rem 0',
              borderTop: i === 0 ? 'none' : '1px solid var(--border-subtle)',
            }}
          >
            <span
              className="font-mono-custom"
              style={{ fontSize: '0.75rem', color: 'var(--text-muted)', flexShrink: 0, marginTop: '0.125rem', width: '2rem' }}
            >
              {p.year}
            </span>
            <div style={{ flex: 1 }}>
              {/* Award badge */}
              {p.award && (
                <span
                  className="font-mono-custom"
                  style={{
                    display: 'inline-block',
                    fontSize: '0.6rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    color: '#d97706',
                    backgroundColor: '#fef3c7',
                    border: '1px solid #fde68a',
                    borderRadius: '9999px',
                    padding: '0.1rem 0.5rem',
                    marginBottom: '0.35rem',
                  }}
                >
                  🏆 {p.award}
                </span>
              )}
              <a
                href={p.href ?? '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="font-display link-underline"
                style={{
                  fontSize: '0.9375rem',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                  textDecoration: 'none',
                  lineHeight: 1.3,
                  display: 'block',
                  transition: 'color 0.2s ease',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--emerald)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-primary)')}
              >
                {p.title}
              </a>
              <p
                className="font-mono-custom"
                style={{ fontSize: '0.625rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--emerald)', marginTop: '0.25rem' }}
              >
                {p.venue}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}