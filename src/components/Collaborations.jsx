import useFadeIn from '../hooks/useFadeIn';

export default function Collaborations() {
  const sectionRef = useFadeIn();

  return (
    <section 
      id="collaborations" 
      ref={sectionRef} 
      className="py-12 md:pt-16 md:pb-4 px-4 md:px-16 bg-[#0a0a0a] flex justify-center"
    >
      <div className="w-full max-w-6xl flex flex-col items-center">
        
        {/* Header with flanking lines */}
        <div className="flex items-center justify-center w-full mb-4 md:mb-8">
          <div className="h-px bg-[#D4A843]/40 flex-grow max-w-[100px] md:max-w-[200px]"></div>
          <h3 className="mx-6 text-[#D4A843] text-xs md:text-sm font-bold uppercase tracking-[0.25em] whitespace-nowrap">
            Trusted By
          </h3>
          <div className="h-px bg-[#D4A843]/40 flex-grow max-w-[100px] md:max-w-[200px]"></div>
        </div>

        {/* Logos and text container */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24 w-full">
          
          <img 
            src="images/disney_logo.png" 
            alt="Disney" 
            className="h-12 md:h-16 w-auto object-contain mix-blend-lighten opacity-90"
          />
          
          <img 
            src="images/takealot_logo.png" 
            alt="Takealot" 
            className="h-8 md:h-12 w-auto object-contain mix-blend-lighten opacity-90"
          />
          
          <p className="text-white text-[10px] md:text-xs tracking-[0.25em] uppercase text-center md:text-left mt-2 md:mt-0 font-medium">
            And collectors across South Africa
          </p>

        </div>
      </div>
    </section>
  );
}