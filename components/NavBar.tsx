'use client';
import { useState, useEffect } from 'react';
import { useTheme } from '@/context/Themecontext';

const links = [
  { label: 'Research', href: '#research' },
  { label: 'Publications', href: '#publications' },
  { label: 'Teaching', href: '#teaching' },
  { label: 'CV', href: '/cv.pdf' },
  { label: 'Contact', href: '#contact' },
];
 
function SunIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="5"/>
      <line x1="12" y1="1"  x2="12" y2="3"/>
      <line x1="12" y1="21" x2="12" y2="23"/>
      <line x1="4.22"  y1="4.22"  x2="5.64"  y2="5.64"/>
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
      <line x1="1"  y1="12" x2="3"  y2="12"/>
      <line x1="21" y1="12" x2="23" y2="12"/>
      <line x1="4.22"  y1="19.78" x2="5.64"  y2="18.36"/>
      <line x1="18.36" y1="5.64"  x2="19.78" y2="4.22"/>
    </svg>
  );
}
 
function MoonIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
    </svg>
  );
}
 
export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggle } = useTheme();
  const isDark = theme === 'dark';
 
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);
 
  return (
    <header
      style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: 50,
        transition: 'background-color 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
        // Always opaque — prevents links disappearing over the dark HeroCard
        backgroundColor: isDark ? 'rgba(10,15,26,0.95)' : 'rgba(255,255,255,0.95)',
        backdropFilter: 'blur(12px)',
        borderBottom: scrolled
          ? `1px solid ${isDark ? '#1e293b' : '#e2e8f0'}`
          : `1px solid ${isDark ? '#1e293b33' : '#e2e8f011'}`,
        boxShadow: scrolled ? '0 1px 12px -4px rgba(15,23,42,0.10)' : 'none',
      }}
    >
      <nav
        style={{
          maxWidth: '72rem',
          margin: '0 auto',
          padding: '0 1.5rem',
          height: '4rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <a
          href="#"
          className="font-display"
          style={{ fontSize: '1.125rem', fontWeight: 600, color: 'var(--text-primary)', textDecoration: 'none', letterSpacing: '-0.02em' }}
        >
          B. Ghosh<span style={{ color: 'var(--emerald)' }}>.</span>
        </a>
 
        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          <ul
            className="hidden md:flex"
            style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', alignItems: 'center', gap: '2rem' }}
          >
            {links.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className="link-underline font-mono-custom"
                  style={{
                    fontSize: '0.625rem',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'var(--text-secondary)',
                    textDecoration: 'none',
                    transition: 'color 0.2s ease',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--emerald)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-secondary)')}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
 
          {/* Theme toggle */}
          <button
            type="button"
            onClick={() => toggle()}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '2rem',
              height: '2rem',
              borderRadius: '9999px',
              border: `1px solid ${isDark ? '#334155' : '#e2e8f0'}`,
              backgroundColor: isDark ? '#1e293b' : '#f8fafc',
              color: isDark ? '#34d399' : '#065f46',
              cursor: 'pointer',
              flexShrink: 0,
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--emerald)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = isDark ? '#334155' : '#e2e8f0'; }}
          >
            {isDark ? <SunIcon /> : <MoonIcon />}
          </button>
        </div>
      </nav>
    </header>
  );
}