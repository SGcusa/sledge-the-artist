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
          <a href="https://wa.me/27653620916" target="_blank" rel="noreferrer" className="text-ink-100 hover:text-red transition-colors" aria-label="WhatsApp">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.558 4.118 1.532 5.845L.057 23.492a.5.5 0 0 0 .619.635l5.805-1.525A11.95 11.95 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22a9.952 9.952 0 0 1-5.071-1.383l-.361-.214-3.742.982.998-3.648-.235-.374A9.953 9.953 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
            </svg>
          </a>
        </div>
      </div>
      <div className="flex flex-wrap justify-between items-center gap-4 pt-6 border-t border-ink-400">
        <p className="text-xs text-ink-200 tracking-wide">© 2026 Sledge The Artist · Cape Town, South Africa</p>
        <div className="flex gap-6">
          <a href="#services" className="text-xs text-ink-200 hover:text-cream tracking-widest uppercase transition-colors">Services</a>
          <a href="#work"     className="text-xs text-ink-200 hover:text-cream tracking-widest uppercase transition-colors">Work</a>
          <a href="#contact"  className="text-xs text-ink-200 hover:text-cream tracking-widest uppercase transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
}