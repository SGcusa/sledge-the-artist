export default function Process() {
  return (
    <section id="process" className="py-10 md:py-20 px-4 md:px-16 bg-ink-800">
      <p className="section-eyebrow">How It Works</p>
      <h2 className="section-heading">The Process</h2>
      <div className="section-divider mb-10"></div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-ink-400 mt-2.5 md:mt-5">
        <div className="group step-card border-l-2 border-red transition-colors duration-[5s] ease-in-out">
          <div className="font-display text-6xl text-ink-500 mb-4 transition-colors duration-[2s] ease-in-out group-hover:text-red">01</div>
          <h3 className="font-medium text-cream mb-2 transition-all duration-[1.5s] ease-in-out group-hover:text-[20px]">Send Your Request</h3>
          <p className="text-sm text-ink-100 leading-relaxed font-light">WhatsApp or the form below. Tell me what you need — type, size, and any reference photos.</p>
        </div>
        <div className="group step-card border-l-2 border-amber transition-colors duration-[5s] ease-in-out">
          <div className="font-display text-6xl text-ink-500 mb-4 transition-colors duration-[2s] ease-in-out group-hover:text-amber">02</div>
          <h3 className="font-medium text-cream mb-2 transition-all duration-[1.5s] ease-in-out group-hover:text-[20px]">Quote & Confirmation</h3>
          <p className="text-sm text-ink-100 leading-relaxed font-light">I send a custom quote based on your brief. Once confirmed and deposit paid, your slot is locked in.</p>
        </div>
        <div className="group step-card border-l-2 border-blue transition-colors duration-[5s] ease-in-out">
          <div className="font-display text-6xl text-ink-500 mb-4 transition-colors duration-[2s] ease-in-out group-hover:text-blue">03</div>
          <h3 className="font-medium text-cream mb-2 transition-all duration-[1.5s] ease-in-out group-hover:text-[20px]">Creation & Updates</h3>
          <p className="text-sm text-ink-100 leading-relaxed font-light">I work on your piece and share progress photos. Your feedback shapes the final result.</p>
        </div>
        <div className="group step-card border-l-2 border-green transition-colors duration-[5s] ease-in-out">
          <div className="font-display text-6xl text-ink-500 mb-4 transition-colors duration-[2s] ease-in-out group-hover:text-green">04</div>
          <h3 className="font-medium text-cream mb-2 transition-all duration-[1.5s] ease-in-out group-hover:text-[20px]">Delivery</h3>
          <p className="text-sm text-ink-100 leading-relaxed font-light">Final payment, then collection or delivery. Your original artwork, ready to display or wear.</p>
        </div>
      </div>
    </section>
  );
}