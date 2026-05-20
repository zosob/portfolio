const areas = [
  { title: 'Neurosymbolic AI', desc: 'Integrating symbolic reasoning with neural networks for interpretable and reliable AI systems.' },
  { title: 'Assistive & Wearable AI', desc: 'Building wearable AI systems using smart glasses for real-time contextual assistance and multimodal interaction.' },
  { title: 'AI for Social Good', desc: 'Developing tools to help elderly individuals detect online scams; fake profile detection using GANs.' },
];

export default function ResearchCard() {
  return (
    <div id="research" className="bento-card p-7 h-full animate-fade-up delay-300">
      <span className="emerald-tag mb-5">Research Areas</span>

      <ul style={{ listStyle: 'none', margin: 0, padding: 0, marginTop: '0.5rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
        {areas.map((a, i) => (
          <li key={i} style={{ display: 'flex', gap: '1rem' }}>
            <div
              style={{
                marginTop: '0.375rem',
                flexShrink: 0,
                width: '2px',
                alignSelf: 'stretch',
                borderRadius: '9999px',
                background: 'linear-gradient(to bottom, var(--emerald), var(--emerald-light))',
              }}
            />
            <div>
              <h3 className="font-display" style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--text-primary)', lineHeight: 1.3 }}>
                {a.title}
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.75rem', marginTop: '0.25rem', lineHeight: 1.6 }}>
                {a.desc}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}