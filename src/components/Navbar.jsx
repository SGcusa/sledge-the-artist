import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      // 1. Handle Navbar Shadow & Shrink
      if (window.scrollY > 60) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // 2. Handle Active Link Highlighting
      const sections = document.querySelectorAll('section[id]');
      const scrollPos = window.scrollY + 100;

      sections.forEach(section => {
        const top = section.offsetTop;
        const bottom = top + section.offsetHeight;
        const id = section.getAttribute('id');

        if (scrollPos >= top && scrollPos < bottom) {
          setActiveSection(id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav 
        id="navbar" 
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 transition-all duration-300 bg-ink-900 border-b border-ink-400 ${
          isScrolled ? 'py-2 shadow-[0_4px_24px_rgba(0,0,0,0.5)]' : 'py-4'
        }`}
      >
        <a href="#" className="font-display text-2xl tracking-widest text-cream">SLEDGE<span className="text-red">.</span></a>
        
        <div className="hidden md:flex items-center gap-8">
          {['services', 'work', 'about', 'process', 'contact'].map((item) => (
            <a 
              key={item}
              href={`#${item}`} 
              className={`nav-link text-xs tracking-widest uppercase transition-colors hover:text-cream ${
                activeSection === item ? 'text-cream' : 'text-ink-100'
              }`}
            >
              {item}
            </a>
          ))}
        </div>
        
        <a href="#contact" className="btn-red text-xs tracking-widest uppercase px-5 py-3 font-medium hidden md:block">Get a Quote</a>
        
        <button 
          onClick={() => setIsMenuOpen(true)}
          className="md:hidden text-cream text-2xl focus:outline-none" 
        >
          &#9776;
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div id="mobile-menu" className="fixed inset-0 z-40 bg-ink-900 flex flex-col items-center justify-center gap-8 animate-[fadeIn_0.2s_ease]">
          <button onClick={() => setIsMenuOpen(false)} className="absolute top-5 right-6 text-cream text-3xl">&times;</button>
          {['services', 'work', 'about', 'process', 'contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item}`} 
              onClick={() => setIsMenuOpen(false)} 
              className="font-display text-5xl tracking-widest text-cream hover:text-red transition-colors capitalize"
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </>
  );
}