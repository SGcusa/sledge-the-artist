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
        <a href="#" className="inline-block h-14 transition-opacity hover:opacity-90">
          <img 
            src="images/logo.png" 
            alt="Sledge The Artist" 
            className="h-full w-auto object-contain"
          />
        </a>
        
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
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden focus:outline-none z-50 relative transition-transform active:scale-95" 
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? (
            /* 1. ARTISTIC SLASHED 'X' (Red: #b52d38) */
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 32 32" 
              className="w-8 h-8"
              fill="#b52d38"
            >
              <path d="M7,5 Q16,14 27,25 Q16,16 5,7 Z" />
              <path d="M25,5 Q14,14 5,25 Q16,16 27,5 Z" />
            </svg>
          ) : (
            /* 2. GOLD PAINTBRUSH BURGER MENU (#D4A843) */
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 32 32" 
              className="w-8 h-8"
              fill="#D4A843"
            >
              <path d="M4,7 Q16,5 28,8 Q16,10 4,7 Z" />
              <path d="M2,15 Q16,17 30,14 Q15,13 2,15 Z" />
              <path d="M5,23 Q18,21 26,24 Q15,25 5,23 Z" />
              <circle cx="29" cy="22" r="1.2" />
            </svg>
          )}
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