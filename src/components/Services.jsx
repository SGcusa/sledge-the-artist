import useFadeIn from '../hooks/useFadeIn';

export default function Services() {
  // 1. Initialize a ref for each card
  const card1Ref = useFadeIn();
  const card2Ref = useFadeIn();
  const card3Ref = useFadeIn();

  return (
    <section id="services" className="py-20 px-8 md:px-16 bg-ink-700">
      <div className="mb-10">
        <p className="section-eyebrow">What I Do</p>
        <h2 className="section-heading">Services</h2>
        <div className="section-divider"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-ink-400">
        
        {/* Card 1: Portrait */}
        <div ref={card1Ref} className="service-card border-t-2 border-red reveal group">
          <div className="service-icon text-red">✏</div>
          <h3 className="service-title">Portrait Drawing</h3>
          <p className="service-desc">Detailed hand-drawn portraits in pencil, charcoal or colour. Commissions for individuals, couples and families — each one unique.</p>
          <a href="#contact" className="btn-service text-red border-red hover:bg-red hover:text-white">Commission →</a>
        </div>

        {/* Card 2: Murals */}
        <div ref={card2Ref} className="service-card border-t-2 border-amber reveal group">
          <div className="service-icon text-amber">🖌</div>
          <h3 className="service-title">Wall Murals</h3>
          <p className="service-desc">Large-scale wall paintings for homes, businesses and public spaces. From concept sketch all the way to the finished mural.</p>
          <a href="#contact" className="btn-service text-amber border-amber hover:bg-amber hover:text-ink-900">Commission →</a>
        </div>

        {/* Card 3: Clothing */}
        <div ref={card3Ref} className="service-card border-t-2 border-blue reveal group">
          <div className="service-icon text-blue">👕</div>
          <h3 className="service-title">Clothing Art</h3>
          <p className="service-desc">Hand-painted custom art on jackets, jeans and sneakers. Wearable, one-of-a-kind statements that turn clothing into canvas.</p>
          <a href="#contact" className="btn-service text-blue border-blue hover:bg-blue hover:text-white">Commission →</a>
        </div>
        
      </div>
    </section>
  );
}