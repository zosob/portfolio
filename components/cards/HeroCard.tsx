export default function HeroCard() {
  return (
    <div
      className="bento-card noise-overlay relative overflow-hidden p-8 md:p-10 flex flex-col justify-between min-h-[340px] h-full animate-fade-up delay-100"
      style={{
        backgroundColor: '#0f172a',
        color: '#ffffff',
        borderColor: '#1e293b',
      }}
    >
      {/* Decorative emerald orb — top right */}
      <div
        aria-hidden
        className="absolute -top-16 -right-16 w-64 h-64 rounded-full"
        style={{
          opacity: 0.22,
          background: 'radial-gradient(circle, #10b981 0%, transparent 70%)',
        }}
      />
      {/* Decorative emerald orb — bottom left */}
      <div
        aria-hidden
        className="absolute bottom-0 left-0 w-48 h-48 rounded-full"
        style={{
          opacity: 0.12,
          background: 'radial-gradient(circle, #065f46 0%, transparent 70%)',
        }}
      />

      {/* Top row */}
      <div className="flex items-start justify-between gap-4 relative z-10">
        <div>
          <span
            className="font-mono-custom text-xs tracking-widest uppercase mb-3 block"
            style={{ color: '#34d399' }}
          >
            St. Cloud State University
          </span>
          <h1
            className="font-display text-4xl md:text-5xl font-light leading-tight"
            style={{ color: '#ffffff' }}
          >
            Bhaskar
            <br />
            <span className="italic" style={{ color: '#cbd5e1' }}>
              Ghosh
            </span>
          </h1>
        </div>

        {/* Avatar placeholder */}
        <div
          className="shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-2xl overflow-hidden flex items-center justify-center"
          style={{
            backgroundColor: '#1e293b',
            border: '2px solid #334155',
          }}
        >
          {/* Replace with: <Image src="/avatar.jpg" width={96} height={96} alt="Prof. Voss" /> */}
          <span className="font-display text-3xl" style={{ color: '#94a3b8' }}>
            BG
          </span>
        </div>
      </div>

      {/* Bottom row */}
      <div className="relative z-10 mt-6">
        <p
          className="text-sm leading-relaxed max-w-md font-light"
          style={{ color: '#cbd5e1' }}
        >
          Assistant Professor of Computer Science & Cybersecurity.
          I build interpretable AI systems, study human-computer interaction, and mentor the next generation of researchers.
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {['AI', 'Machine Learning', 'HCI', 'Cybersecurity'].map((tag) => (
            <span
              key={tag}
              className="text-xs font-mono-custom tracking-wide rounded-full px-3 py-0.5"
              style={{
                backgroundColor: '#1e293b',
                border: '1px solid #334155',
                color: '#cbd5e1',
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}