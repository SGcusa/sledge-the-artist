import useFadeIn from '../hooks/useFadeIn';

export default function Services() {
  const card1Ref = useFadeIn();
  const card2Ref = useFadeIn();
  const card3Ref = useFadeIn();
  const card4Ref = useFadeIn();

  return (
    <section id="services" className="py-10 md:py-20 px-4 md:px-16 bg-ink-700">
      <div className="mb-10">
        <p className="section-eyebrow">What I Do</p>
        <h2 className="section-heading">Services</h2>
        <div className="section-divider"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-ink-400">
        
        {/* Card 1: Pencil */}
        <div ref={card1Ref} className="service-card border-t-2 border-red reveal group">
          <div className="service-icon text-red">✏</div>
          <h3 className="service-title">Pencil Drawings</h3>
          <p className="service-desc">Beautiful hand-drawn portraits in classic black and white or vibrant colored pencil. Custom artwork for individuals, couples, and families — a unique keepsake to treasure forever.</p>
          <a href="#contact" className="btn-service text-red border-red hover:bg-red hover:text-white">Commission →</a>
        </div>

        {/* Card 2: Canvas */}
        <div ref={card2Ref} className="service-card border-t-2 border-green reveal group">
          <div className="service-icon text-ink-100">🎨</div>
          <h3 className="service-title">CANVAS PAINTINGS</h3>
          <p className="service-desc">Custom hand-painted artwork on professional canvas. Bring your favorite memories, landscapes, or abstract visions to life with rich colors and beautiful textures.</p>
          <a href="#contact" className="btn-service text-green border-green hover:bg-green hover:text-white">Conceptual →</a>
        </div>

        {/* Card 3: Murals */}
        <div ref={card3Ref} className="service-card border-t-2 border-amber reveal group">
          <div className="service-icon text-amber">🖌</div>
          <h3 className="service-title">Wall Murals</h3>
          <p className="service-desc">Large-scale wall paintings for homes, businesses and public spaces. From concept sketch all the way to the finished mural.</p>
          <a href="#contact" className="btn-service text-amber border-amber hover:bg-amber hover:text-ink-900">Commission →</a>
        </div>

        {/* Card 4: Clothing */}
        <div ref={card4Ref} className="service-card border-t-2 border-blue reveal group">
          <div className="service-icon text-blue">👕</div>
          <h3 className="service-title">Clothing Art</h3>
          <p className="service-desc">Hand-painted custom art on jackets, jeans and sneakers. Wearable, one-of-a-kind statements that turn clothing into canvas.</p>
          <a href="#contact" className="btn-service text-blue border-blue hover:bg-blue hover:text-white">Commission →</a>
        </div>
        
      </div>
    </section>
  );
}