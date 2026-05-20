const stats = [
  { label: 'Papers Published', value: '16' },
  { label: 'Projects Mentored',        value: '25' },
  { label: 'Grad Students',     value: '8' },
  { label: 'h-index',          value: '9' },
];

export default function AboutCard() {
  return (
    <div className="bento-card p-7 flex flex-col justify-between h-full animate-fade-up delay-200">
      <div>
        <span className="emerald-tag mb-4">At a Glance</span>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: '1.6', marginTop: '0.5rem' }}>
          Previously Research Assistant at University of Louisiana at Lafayette under Dr. Magdy Bayoumi. Ph.D. in Computer Science, 2021. 
          NSF SmartCity Challenge team member. Best Paper Award, IEEE IEMCON 2021.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '1.5rem' }}>
        {stats.map((s) => (
          <div
            key={s.label}
            style={{
              backgroundColor: 'var(--bg-subtle)',
              borderRadius: '0.75rem',
              padding: '1rem',
              border: '1px solid var(--border-subtle)',
              transition: 'background-color 0.3s ease, border-color 0.3s ease',
            }}
          >
            <p className="font-display" style={{ fontSize: '1.875rem', fontWeight: 600, color: 'var(--text-primary)' }}>
              {s.value}
            </p>
            <p className="font-mono-custom" style={{ fontSize: '0.625rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}