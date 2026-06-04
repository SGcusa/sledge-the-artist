import useFadeIn from '../hooks/useFadeIn';

export default function Services() {
  const card1Ref = useFadeIn();

  return (
    <section id="services" className="py-20 px-8 md:px-16 bg-ink-700">
      <div className="mb-10">
        <p className="section-eyebrow">What I Do</p>
        <h2 className="section-heading">Services</h2>
        <div className="section-divider"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-ink-400">
        <div className="service-card border-t-2 border-red reveal">
          <div className="text-red text-3xl mb-5">✏</div>
          <h3 className="font-display text-2xl text-cream tracking-wide mb-3">Portrait Drawing</h3>
          <p className="text-sm text-ink-100 leading-relaxed font-light">Detailed hand-drawn portraits in pencil, charcoal or colour. Commissions for individuals, couples and families — each one unique.</p>
          <a href="#contact" className="inline-block mt-6 text-xs text-red tracking-widest uppercase border border-red px-4 py-2 hover:bg-red hover:text-white transition-colors duration-200">Commission →</a>
        </div>

        <div className="service-card border-t-2 border-amber reveal">
          <div className="text-amber text-3xl mb-5">🖌</div>
          <h3 className="font-display text-2xl text-cream tracking-wide mb-3">Wall Murals</h3>
          <p className="text-sm text-ink-100 leading-relaxed font-light">Large-scale wall paintings for homes, businesses and public spaces. From concept sketch all the way to the finished mural.</p>
          <a href="#contact" className="inline-block mt-6 text-xs text-amber tracking-widest uppercase border border-amber px-4 py-2 hover:bg-amber hover:text-ink-900 transition-colors duration-200">Commission →</a>
        </div>

        <div className="service-card border-t-2 border-blue reveal">
          <div className="text-blue text-3xl mb-5">👕</div>
          <h3 className="font-display text-2xl text-cream tracking-wide mb-3">Clothing Art</h3>
          <p className="text-sm text-ink-100 leading-relaxed font-light">Hand-painted custom art on jackets, jeans and sneakers. Wearable, one-of-a-kind statements that turn clothing into canvas.</p>
          <a href="#contact" className="inline-block mt-6 text-xs text-blue tracking-widest uppercase border border-blue px-4 py-2 hover:bg-blue hover:text-white transition-colors duration-200">Commission →</a>
        </div>
      </div>
    </section>
  );
}