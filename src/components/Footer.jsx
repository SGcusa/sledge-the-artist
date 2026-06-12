export default function Footer() {
  return (
    <footer className="bg-ink-900 px-4 md:px-16 py-10 border-t border-ink-400">
      <div className="flex flex-wrap justify-between items-center gap-6 mb-6">
        <a href="#" className="font-display text-2xl tracking-widest text-ink-300">SLEDGE<span className="text-red opacity-70">.</span></a>
        <div className="flex gap-3">
          <a href="https://instagram.com/sledgetheartist" target="_blank" rel="noreferrer" className="text-ink-100 hover:text-red transition-colors" aria-label="Instagram">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
            </svg>
          </a>
          <a href="https://twitter.com/SledgeTheArtist" target="_blank" rel="noreferrer" className="text-ink-100 hover:text-red transition-colors" aria-label="Twitter/X">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
          <a href="https://www.facebook.com/mzukisi.mbutuma.9" target="_blank" rel="noreferrer" className="text-ink-100 hover:text-red transition-colors" aria-label="Facebook">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>
        </div>
      </div>
      <div className="flex flex-wrap justify-between items-center gap-4 pt-6 border-t border-ink-400">
        <p className="text-xs text-ink-200 tracking-wide">© 2026 Sledge The Artist · Cape Town, South Africa</p>
        <div className="flex gap-6">
          <a href="#work"     className="text-xs text-ink-200 hover:text-cream tracking-widest uppercase transition-colors">Work</a>
          <a href="#process" className="text-xs text-ink-200 hover:text-cream tracking-widest uppercase transition-colors">Process</a>
          <a href="#contact"  className="text-xs text-ink-200 hover:text-cream tracking-widest uppercase transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
}