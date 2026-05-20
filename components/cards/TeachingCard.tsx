'use client';

const courses = [
  { code: 'CS',  title: 'Design and Analysis of Algorithms', level: 'Graduate' },
  { code: 'CS',  title: 'Advanced Shell Scripting',          level: 'Graduate' },
  { code: 'CS',  title: 'Database Theory and Design',        level: 'Undergraduate' },
  { code: 'CS',  title: 'Network Administration',            level: 'Undergraduate' },
  { code: 'CS',  title: 'C++',          level: 'Undergraduate' },
];

export default function TeachingCard() {
  return (
    <div id="teaching" className="bento-card p-7 h-full animate-fade-up delay-500">
      <span className="emerald-tag mb-5">Teaching</span>
      <ul style={{ listStyle: 'none', margin: 0, padding: 0, marginTop: '0.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        {courses.map((c) => (
          <li
            key={c.code}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderRadius: '0.75rem',
              border: '1px solid var(--border-subtle)',
              backgroundColor: 'var(--bg-subtle)',
              padding: '0.75rem 1rem',
              transition: 'background-color 0.2s ease, border-color 0.2s ease',
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLLIElement;
              el.style.borderColor = 'var(--emerald-tag-bd)';
              el.style.backgroundColor = 'var(--emerald-tag-bg)';
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLLIElement;
              el.style.borderColor = 'var(--border-subtle)';
              el.style.backgroundColor = 'var(--bg-subtle)';
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <span className="font-mono-custom" style={{ fontSize: '0.75rem', color: 'var(--emerald)', letterSpacing: '0.05em' }}>
                {c.code}
              </span>
              <span style={{ fontSize: '0.875rem', color: 'var(--text-primary)', fontWeight: 500 }}>
                {c.title}
              </span>
            </div>
            <span className="font-mono-custom" style={{ fontSize: '0.625rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-muted)' }}>
              {c.level}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}