const awards = [
  { year: '2021', title: 'Best Paper Award',       org: 'IEEE IEMCON 2021' },
  { year: '2020', title: '3-Minute Thesis Finalist', org: 'University of Louisiana at Lafayette' },
  { year: '2025', title: 'SCSU Faculty Improvement Grant', org: 'St. Cloud State University' },
  { year: '2025', title: 'NVIDIA Generative AI Certification', org: 'NVIDIA Deep Learning Institute' },
];

export default function AwardsCard() {
  return (
    <div
      className="bento-card p-7 h-full animate-fade-up delay-600"
      style={{
        background: 'linear-gradient(135deg, #065f46 0%, #0f766e 100%)',
        borderColor: '#047857',
      }}
    >
      <span
        className="inline-flex items-center gap-1 rounded-full border border-emerald-400/40 
                   text-emerald-200 text-xs font-medium px-3 py-0.5 font-mono-custom tracking-wide mb-5"
      >
        Honors & Awards
      </span>

      <ul className="space-y-4">
        {awards.map((a, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="font-mono-custom text-xs text-emerald-300 shrink-0 w-8 mt-0.5">
              {a.year}
            </span>
            <div>
              <p className="text-sm font-semibold text-white leading-snug">{a.title}</p>
              <p className="text-xs text-emerald-200/70 mt-0.5">{a.org}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}