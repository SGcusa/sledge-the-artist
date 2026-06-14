export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-end overflow-hidden pt-20">
      <div className="hero-bg absolute inset-0">
        <div className="flex flex-row h-full">
          <img src="/images/potrait_3.jpg" alt="Sledge The Artist at work" className="w-full h-full object-cover object-top opacity-50" />
          <video src="/videos/video_2.mp4" autoPlay loop muted playsInline className="w-full h-full object-cover opacity-50" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-ink-900/90 via-ink-900/60 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-transparent to-transparent"></div>
        
        {/* paint splatter SVG accent */}
        <svg className="absolute top-0 right-0 w-64 h-64 opacity-10" viewBox="0 0 260 260" aria-hidden="true">
          <circle cx="180" cy="60" r="55" fill="#D4A843"/>
          <circle cx="220" cy="110" r="30" fill="#e63946"/>
          <circle cx="140" cy="30" r="20" fill="#2d6a9f"/>
          <circle cx="200" cy="170" r="12" fill="#D4A843"/>
          <circle cx="100" cy="80" r="8" fill="#e63946"/>
          <ellipse cx="240" cy="40" rx="14" ry="8" fill="#D4A843"/>
        </svg>
      </div>

      <div className="absolute left-0 top-0 bottom-0 w-1 bg-red"></div>

      <div className="relative z-10 px-5 md:px-16 pb-16 w-full max-w-3xl">
        <h1 className="font-display text-7xl md:text-[120px] leading-none text-cream fade-up" style={{ animationDelay: '0.2s' }}>
          SLEDGE<br /><span className="text-red">THE</span><br />ARTIST
        </h1>
        <p className="mt-5 text-sm text-ink-50 max-w-sm leading-relaxed font-light fade-up" style={{ animationDelay: '0.35s' }}>
          Custom portraits. Wall murals. Clothing art.<br />Every piece is a story told with paint, pencil, <br className="md:hidden"></br> and purpose.
        </p>
        <div className="flex gap-3 mt-8 flex-wrap fade-up" style={{ animationDelay: '0.45s' }}>
          <a href="#contact" className="btn-red p-2.5 md:px-6 md:py-3 text-xs tracking-widest uppercase font-medium">Request Your Piece</a>
          <a href="#work"    className="btn-outline p-2.5 md:px-6 md:py-3 text-xs tracking-widest uppercase font-medium">View My Work</a>
        </div>
      </div>
    </section>
  );
}