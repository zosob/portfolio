import type { Metadata } from 'next';
import './globals.css';
import NavBar from '@/components/NavBar';
import { ThemeProvider } from '@/context/Themecontext';

const SITE_URL = 'https://bhaskar-ghosh.vercel.app'; // ← update after first deploy
 
export const metadata: Metadata = {
  // ── Core ────────────────────────────────────────────────────────
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Prof. Bhaskar Ghosh | Computer Science & Cybersecurity',
    template: '%s | Prof. Bhaskar Ghosh',
  },
  description:
    'Assistant Professor of Computer Science and Cybersecurity at St. Cloud State University. Research in AI, Machine Learning, Computer Vision, and Human-Computer Interaction.',
  keywords: [
    'Bhaskar Ghosh', 'Computer Science', 'Cybersecurity', 'Artificial Intelligence',
    'Machine Learning', 'Computer Vision', 'HCI', 'St. Cloud State University',
    'SCSU', 'IEEE', 'GAN', 'Neurosymbolic AI',
  ],
  authors: [{ name: 'Bhaskar Ghosh', url: SITE_URL }],
  creator: 'Bhaskar Ghosh',
  alternates: {
    canonical: SITE_URL,
  },
 
  // ── Google Scholar / academic discovery ─────────────────────────
  other: {
    'citation_title':              'Prof. Bhaskar Ghosh | Computer Science & Cybersecurity',
    'citation_author':             'Ghosh, Bhaskar',
    'citation_author_institution': 'St. Cloud State University',
    'citation_public_url':         SITE_URL,
    'DC.type':                     'Dataset',
    'DC.creator':                  'Bhaskar Ghosh',
    'DC.publisher':                'St. Cloud State University',
    'DC.language':                 'en',
  },
 
  // ── Open Graph ──────────────────────────────────────────────────
  openGraph: {
    type:        'profile',
    url:         SITE_URL,
    title:       'Prof. Bhaskar Ghosh | Computer Science & Cybersecurity',
    description: 'Assistant Professor at St. Cloud State University. AI, Machine Learning, Computer Vision, and Cybersecurity research.',
    siteName:    'Bhaskar Ghosh Academic Portfolio',
    locale:      'en_US',
    firstName:   'Bhaskar',
    lastName:    'Ghosh',
    username:    'bg46',
  },
 
  // ── Twitter / X card ────────────────────────────────────────────
  twitter: {
    card:        'summary',
    title:       'Prof. Bhaskar Ghosh | SCSU',
    description: 'Research in AI, Machine Learning, Computer Vision, and Cybersecurity.',
    // creator: '@yourhandle', // ← add if you have a Twitter/X account
  },
 
  // ── Crawling ────────────────────────────────────────────────────
  robots: {
    index:  true,
    follow: true,
    googleBot: {
      index:               true,
      follow:              true,
      'max-snippet':       -1,
      'max-image-preview': 'large',
    },
  },
 
  // ── Verification ────────────────────────────────────────────────
  // verification: {
  //   google: 'your-google-site-verification-token',
  // },
};
 
export default function RootLayout({ children }: { children: React.ReactNode }) {
  const year = new Date().getFullYear();
 
  return (
    <html lang="en" className="scroll-smooth">
      <body style={{ minHeight: '100vh' } as React.CSSProperties}>
        <ThemeProvider>
          <NavBar />
          <main style={{ paddingTop: '4rem' }}>{children}</main>
          <footer
            style={{
              marginTop: '5rem',
              borderTop: '1px solid var(--border-card)',
              padding: '2rem 0',
              textAlign: 'center',
              transition: 'border-color 0.3s ease',
            }}
          >
            <p
              className="font-mono-custom"
              style={{
                fontSize: '0.65rem',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'var(--text-muted)',
              }}
            >
              {`© ${year} Bhaskar Ghosh · St. Cloud State University`}
            </p>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
 