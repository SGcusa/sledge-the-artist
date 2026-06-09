export default function About() {
  return (
    <section id="about" className="grid grid-cols-1 md:grid-cols-2 bg-ink-700">
      <div className="relative overflow-hidden min-h-80 max-md:max-h-60">
        <img src="/images/potrait_8.jpg" alt="Sledge The Artist" className="w-full h-full object-cover object-center md:object-top" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-ink-700 hidden md:block"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-ink-700 to-transparent md:hidden"></div>
      </div>
      <div className="flex flex-col justify-center px-6 md:px-10 py-8 md:py-16">
        <p className="section-eyebrow">The Artist</p>
        <h2 className="section-heading">About Sledge</h2>
        <div className="section-divider mb-6"></div>
        
        <p className="text-sm text-ink-50 leading-relaxed font-light mb-4 mt-2.5 md:mt-5">
          Based in Cape Town, I create art that captures people — their stories, their energy, their identity. From detailed portraits to bold murals to hand-painted clothing.
        </p>
        <p className="text-sm text-ink-50 leading-relaxed font-light mb-8">
          Every commission is personal. I work closely with each client to make sure the final piece means something real.
        </p>
        
        {/* <div className="flex flex-wrap gap-2">
          <span className="tag-red bg-red/10 text-red px-3 py-1 text-xs uppercase tracking-widest rounded">Portraits</span>
          <span className="tag-amber bg-amber/10 text-amber px-3 py-1 text-xs uppercase tracking-widest rounded">Wall Murals</span>
          <span className="tag-blue bg-blue/10 text-blue px-3 py-1 text-xs uppercase tracking-widest rounded">Clothing Art</span>
          <span className="tag-ghost border border-ink-400 px-3 py-1 text-xs uppercase tracking-widest rounded text-ink-100">Cape Town</span>
        </div> */}
      </div>
    </section>
  );
}