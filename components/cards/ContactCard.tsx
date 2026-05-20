'use client';

const links = [
  { label: 'bhaskar.ghosh@stcloudstate.edu',   href: 'mailto:bhaskar.ghosh@stcloudstate.edu', icon: '✉' },
  { label: 'Google Scholar',  href: 'https://scholar.google.com/citations?hl=en&user=IjH5C4gAAAAJ', icon: '◆' },
  { label: 'LinkedIn',              href: 'https://www.linkedin.com/in/bg46/',               icon: '◆' },
  { label: 'GitHub',          href: 'https://github.com/zosob', icon: '◆' },
  { label: 'AI, What the Tech? Podcast',     href: 'https://www.youtube.com/@AIWTT', icon: '◆' },
];

export default function ContactCard() {
  return (
    <div id="contact" className="bento-card p-7 animate-fade-up delay-700">
      <span className="emerald-tag mb-5">Contact & Profiles</span>

      <address
        className="font-mono-custom"
        style={{
          fontStyle: 'normal',
          fontSize: '0.75rem',
          color: 'var(--text-muted)',
          letterSpacing: '0.05em',
          lineHeight: 1.8,
          marginBottom: '1rem',
        }}
      >
        <p>St. Cloud State University</p>
        <p>St. Cloud, MN</p>
      </address>

      <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        {links.map((l) => (
          <li key={l.label}>
            <a
              href={l.href}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                fontSize: '0.875rem',
                color: 'var(--text-primary)',
                textDecoration: 'none',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--emerald)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-primary)')}
            >
              <span style={{ color: 'var(--emerald)', fontSize: '0.75rem' }}>{l.icon}</span>
              <span className="link-underline">{l.label}</span>
              <span style={{ marginLeft: 'auto', color: 'var(--text-faint)', transition: 'color 0.2s ease' }}>→</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}