export default function About() {
  return (
    <section id="about" className="grid grid-cols-1 md:grid-cols-2 bg-ink-700">
      <div className="relative overflow-hidden min-h-80 max-md:order-2">
        <img src="/images/potrait_8.jpg" alt="Sledge The Artist" className="w-full h-full object-cover object-center md:object-top" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-ink-700 hidden md:block"></div>
        <div className="absolute inset-0 md:hidden before:absolute before:inset-0 before:bg-gradient-to-b before:from-ink-800 before:to-transparent after:absolute after:inset-0 after:bg-gradient-to-t after:from-ink-800 after:to-transparent"></div>
      </div>
      
      <div className="flex flex-col justify-center px-6 md:px-10 py-8 md:py-16 max-md:order-1">
        <p className="section-eyebrow">The Artist</p>
        <h2 className="section-heading">About <br className="md:hidden"></br> Sledge The Artist</h2>
        <div className="section-divider mb-6"></div>
        
        <p className="text-sm text-ink-50 leading-relaxed font-light mb-4 mt-2.5 md:mt-5">
          I create art that captures people — their stories, their energy, their identity. From detailed portraits to bold murals to hand-painted clothing.
        </p>
        <p className="text-sm text-ink-50 leading-relaxed font-light md:mb-8">
          Every commission is personal. I work closely with each client to make sure the final piece means something real.
        </p>
        
        <div className="mt-4 md:mt-0 pt-6 border-t border-ink-600/50">
          
          <h3 className="text-white text-lg md:text-3xl font-medium mb-1 uppercase tracking-wide" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>
            Collaborations
          </h3>
          
          <p className="text-[10px] md:text-xs text-ink-50 tracking-widest uppercase mb-4 md:mb-6">
            Trusted to bring creative visions to life for:
          </p>
          
          <div className="flex items-center gap-6 md:gap-4">
            <div className="w-28 md:w-36 h-16 md:h-20 bg-white flex items-center justify-center p-3 rounded-sm shadow-sm">
              <img 
                src="images/Disney_logo.jpg" 
                alt="Takealot" 
                className="w-full h-auto object-contain"
              />
            </div>
            <div className="w-28 md:w-36 h-16 md:h-20 bg-white flex items-center justify-center p-3 rounded-sm shadow-sm">
              <img 
                src="images/Takealot_logo.jpg" 
                alt="Takealot" 
                className="max-w-full max-h-full object-contain"
              />
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
}