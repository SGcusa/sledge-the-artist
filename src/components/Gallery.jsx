import { useState, useEffect, useRef } from 'react';

// Updated data with mainType and specific Commercial sub-categories
const galleryData = [
  // --- VISUAL ARTS ---
  { id: 1, mainType: 'visual', category: 'Canvas Paintings', size: 'tall', img: '/images/potrait_1.jpg', title: 'Conceptual Artwork', dot: 'bg-blue' },
  { id: 2, mainType: 'visual', category: 'Pencil Drawings', size: 'tall', img: '/images/frame_2.jpg', title: 'A2 Commission', dot: 'bg-red' },
  { id: 3, mainType: 'visual', category: 'Clothing Art', size: 'tall', img: '/images/denim_3.jpg', title: 'Commission', dot: 'bg-red' },
  { id: 4, mainType: 'visual', category: 'Canvas Paintings', size: 'tall', img: '/images/potrait_8.jpg', title: 'Commission', dot: 'bg-amber' },
  { id: 5, mainType: 'visual', category: 'Clothing Art', size: 'tall', vid: '/videos/video_3.mp4', title: 'Charcoal Study', dot: 'bg-red' },
  { id: 7, mainType: 'visual', category: 'Pencil Drawings', size: 'tall', img: '/images/potrait_4.jpg', title: 'Commission', dot: 'bg-red' },
  { id: 8, mainType: 'visual', category: 'Pencil Drawings', size: 'tall', img: '/images/frame_1.jpg', title: 'A4 Commission', dot: 'bg-amber' },
  { id: 9, mainType: 'visual', category: 'Wall Murals', size: 'tall', vid: '/videos/video_2.mp4', title: 'First Mural', dot: 'bg-red' },
  { id: 10, mainType: 'visual', category: 'Canvas Paintings', size: 'tall', img: '/images/potrait_2.jpg', title: 'Conceptual Artwork', dot: 'bg-blue' },
  { id: 12, mainType: 'visual', category: 'Canvas Paintings', size: 'tall', img: '/images/potrait_3.jpg', title: 'Conceptual Artwork', dot: 'bg-blue' },
  { id: 13, mainType: 'visual', category: 'Clothing Art', size: 'tall', img: '/images/denim_2.jpg', title: 'Commission', dot: 'bg-red' },
  { id: 14, mainType: 'visual', category: 'Pencil Drawings', size: 'tall', img: '/images/potrait_5.jpg', title: 'Wall Murals Art', dot: 'bg-amber' },
  { id: 15, mainType: 'visual', category: 'Clothing Art', size: 'tall', vid: '/videos/video_4.mp4', title: 'Charcoal Study', dot: 'bg-blue' },
  { id: 16, mainType: 'visual', category: 'Canvas Paintings', size: 'tall', img: '/images/potrait_7.jpg', title: 'A2 Commission', dot: 'bg-amber' },
  { id: 17, mainType: 'visual', category: 'Canvas Paintings', size: 'tall', img: '/images/potrait_6.jpg', title: 'A1 Commission', dot: 'bg-amber' },

  // --- COMMERCIAL WORK ---
  { id: 6, mainType: 'commercial', category: 'Campaigns', size: 'tall', img: '/images/commercial_5.jpg', title: 'J&B Campaign', dot: 'bg-red' },
  { id: 11, mainType: 'commercial', category: 'Logos', size: 'tall', img: '/images/commercial_1.jpg', title: 'Switch Energy', dot: 'bg-blue' },
  { id: 18, mainType: 'commercial', category: 'Websites', size: 'tall', img: '/images/commercial_2.jpg', title: 'Web Design', dot: 'bg-red' },
  { id: 19, mainType: 'commercial', category: 'Newsletters', size: 'tall', img: '/images/commercial_3.jpg', title: 'Newsletter Template', dot: 'bg-red' },
  { id: 20, mainType: 'commercial', category: 'Websites', size: 'tall', img: '/images/commercial_4.jpg', title: 'Tarsus Distribution', dot: 'bg-red' },
];

export default function Gallery() {
  const [view, setView] = useState('main'); // 'main', 'visual', 'commercial'
  const [filter, setFilter] = useState('all');
  const [expandedId, setExpandedId] = useState(null);
  const [zoomStyle, setZoomStyle] = useState({ transformOrigin: 'center center', transform: 'scale(1)' });

  // --- Scoped Grid Randomizer Logic ---
  const [grid, setGrid] = useState({ visible: [], pool: [] });
  const [fadingSlot, setFadingSlot] = useState(null);

  // Initialize grid when view changes
  useEffect(() => {
    if (view === 'main') return;
    
    const sectionData = galleryData.filter(item => item.mainType === view);
    setGrid({
      visible: sectionData.slice(0, 8),
      pool: sectionData.slice(8)
    });
    setFilter('all');
    setExpandedId(null);
  }, [view]);

  // Randomizer Interval
  useEffect(() => {
    if (view === 'main' || filter !== 'all' || grid.pool.length === 0) return;

    const interval = setInterval(() => {
      const randomSlotIndex = Math.floor(Math.random() * grid.visible.length);
      setFadingSlot(randomSlotIndex);

      setTimeout(() => {
        setGrid((prev) => {
          const nextVisible = [...prev.visible];
          const nextPool = [...prev.pool];

          const exitingItem = nextVisible[randomSlotIndex];
          const poolIndex = Math.floor(Math.random() * nextPool.length);
          const enteringItem = nextPool[poolIndex];

          nextVisible[randomSlotIndex] = enteringItem;
          nextPool[poolIndex] = exitingItem;

          return { visible: nextVisible, pool: nextPool };
        });

        setFadingSlot(null);
      }, 500); 
    }, 3500); 

    return () => clearInterval(interval);
  }, [view, filter, grid.pool.length, grid.visible.length]);

  // Reset zoom and expanded states when filter changes
  useEffect(() => {
    setExpandedId(null);
    setZoomStyle({ transformOrigin: 'center center', transform: 'scale(1)' });
  }, [filter]);

  // --- Sliding Filter Logic ---
  const tabsRef = useRef(null);
  const [sliderStyle, setSliderStyle] = useState({ left: 0, width: 0 });

  useEffect(() => {
    // Small timeout ensures the DOM has updated with the new tabs before measuring
    setTimeout(() => {
      if (tabsRef.current) {
        const activeTab = tabsRef.current.querySelector('.filter-btn.active');
        if (activeTab) {
          setSliderStyle({
            left: activeTab.offsetLeft,
            width: activeTab.offsetWidth
          });
        }
      }
    }, 50);
  }, [filter, view]); 

  // --- Filter Definitions ---
  const visualTabs = ['all', 'Pencil Drawings', 'Canvas Paintings', 'Wall Murals', 'Clothing Art'];
  const commercialTabs = ['all', 'Logos', 'Campaigns', 'Newsletters', 'Websites'];
  const activeTabs = view === 'visual' ? visualTabs : commercialTabs;

  const displayGallery = filter === 'all' 
    ? grid.visible 
    : galleryData.filter(item => item.mainType === view && item.category === filter).slice(0, 8);

  // --- Focal Point Magnifier Functions ---
  const handleMouseMove = (e, itemId) => {
    if (expandedId !== itemId) return;
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setZoomStyle({
      transformOrigin: `${x}% ${y}%`,
      transform: 'scale(1.8)'
    });
  };

  const handleMouseLeave = () => {
    setZoomStyle({
      transformOrigin: 'center center',
      transform: 'scale(1)'
    });
  };

  return (
    <section id="work" className="py-10 md:py-20 px-4 md:px-16 bg-[#0a0a0a] overflow-hidden min-h-screen">
      <div className="relative w-full flex flex-col items-start gap-6 mb-8 md:mb-12">
        <div className="w-full flex flex-col md:flex-row md:justify-between md:items-end gap-6">
          <div>
            <p className="section-eyebrow text-[#D4A843] uppercase tracking-widest text-xs font-bold mb-2">Selected Work</p>
            <h2 className="section-heading text-cream text-4xl md:text-5xl font-black uppercase">The Portfolio</h2>
            <div className="section-divider mb-2"></div>
          </div>
          
          {/* Action Buttons Container (Styled Consistently Without Backgrounds) */}
          <div className="flex flex-row items-end gap-2.5">
            {view !== 'main' && (
              <button 
                onClick={() => setView('main')}
                className="text-[#D4A843] hover:text-cream transition-colors duration-300 font-bold uppercase tracking-widest text-xs flex items-center gap-2"
              >
                <span className="text-lg leading-none pt-0.5">←</span> Back to Categories
              </button>
            )}

            {/* Commercial Work Strobe Link */}
            {view === 'commercial' && (
              <a 
                href="https://mzukisimbutuma.odoo.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ animation: 'textStrobe 3s ease-in-out infinite' }}
                className="text-[#E84E4E] hover:text-cream transition-colors duration-300 font-bold uppercase tracking-widest text-xs flex items-center gap-2 select-none no-underline"
              >
                <span>/</span>
                <span>More Commercial Work</span>
                <span 
                  className="text-lg leading-none pt-0.5 inline-block"
                  style={{ animation: 'horizontalNudge 1s ease-in-out infinite alternate' }}
                >
                  →
                </span>
              </a>
            )}
          </div>
        </div>
        
        {view !== 'main' && (
          <div id="filters" ref={tabsRef} className="relative grid grid-cols-2 md:flex md:flex-row md:justify-between md:flex-wrap gap-px border border-ink-400 overflow-hidden w-full">
            
            <div 
              className="absolute top-0 bottom-0 bg-[#D4A843] transition-all duration-300 ease-in-out z-0 max-md:h-min"
              style={{ left: `${sliderStyle.left}px`, width: `${sliderStyle.width}px` }}
            />

            {activeTabs.map((category) => (
              <button 
                key={category}
                onClick={() => setFilter(category)}
                className={`filter-btn relative z-10 transition-colors duration-300 flex-1 text-center py-3 px-2 uppercase text-xs tracking-wider font-semibold ${
                  filter === category 
                    ? 'active text-ink-900' 
                    : 'border-l border-ink-400 text-ink-200 hover:text-cream'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        )}

        {/* Keeping styles scoped inline for component-specific animations */}
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes horizontalNudge {
            0% { transform: translateX(0); }
            100% { transform: translateX(6px); }
          }
          @keyframes textStrobe {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.7; }
          }
        `}} />
      </div>

      {/* --- MAIN MENU VIEW --- */}
      {view === 'main' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-[76vh] min-h-[500px]">
          
          {/* Commercial Work Trigger (Moved to Priority/First Position) */}
          <div 
            onClick={() => setView('commercial')}
            className="relative group cursor-pointer overflow-hidden rounded-sm"
          >
            <img 
              src="/images/commercial_5.jpg" 
              alt="Commercial Work" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 object-left"
            />
            <div className="absolute inset-0 bg-ink-900/60 group-hover:bg-ink-900/30 transition-colors duration-500"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <h3 className="text-cream text-[6vw] md:text-[3vw] font-black uppercase tracking-widest drop-shadow-2xl group-hover:scale-110 transition-transform duration-500">
                Commercial Work
              </h3>
            </div>
          </div>

          {/* Visual Arts Trigger */}
          <div 
            onClick={() => setView('visual')}
            className="relative group cursor-pointer overflow-hidden rounded-sm"
          >
            <img 
              src="/images/potrait_1.jpg" 
              alt="Visual Arts" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-ink-900/60 group-hover:bg-ink-900/30 transition-colors duration-500"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <h3 className="text-cream text-[6vw] md:text-[3vw] font-black uppercase tracking-widest drop-shadow-2xl group-hover:scale-110 transition-transform duration-500">
                Visual Arts
              </h3>
            </div>
          </div>

        </div>
      ) : (
        /* --- GALLERY VIEW --- */
        <div id="gallery-grid" className="grid grid-cols-2 md:grid-cols-4 gap-1 auto-rows-fr">
          {displayGallery.map((item, index) => {
            const isCurrentTarget = filter === 'all' && fadingSlot === index;
            const isExpanded = expandedId === item.id;

            return (
              <div 
                key={item.id}
                onClick={() => {
                  if (filter === 'all') return;
                  setExpandedId(isExpanded ? null : item.id);
                }}
                onMouseMove={(e) => handleMouseMove(e, item.id)}
                onMouseLeave={handleMouseLeave}
                className={`gallery-item relative overflow-hidden group cursor-pointer transition-all duration-500 ease-in-out bg-ink-900 ${
                  isExpanded 
                    ? 'col-span-2 row-span-2 z-20 ring-1 ring-[#D4A843]/50 shadow-2xl' 
                    : 'col-span-1 row-span-1 z-10'
                } ${isCurrentTarget ? 'opacity-0' : 'opacity-100'}`} 
                style={{ 
                  aspectRatio: isExpanded ? 'auto' : (item.size === 'square' ? '1' : item.size === 'tall' ? '4/5' : 'auto'),
                  minHeight: isExpanded ? '450px' : (item.size === 'large' ? '320px' : 'auto')
                }}
              >
                {item.vid ? (
                  <video 
                    src={item.vid} 
                    autoPlay 
                    loop 
                    muted 
                    playsInline 
                    style={isExpanded ? zoomStyle : {}}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102" 
                  />
                ) : (
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    style={isExpanded ? zoomStyle : {}}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102" 
                  />
                )}
                
                {/* Fade Overlay and Text Labels */}
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900/90 via-ink-900/10 to-transparent pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 p-3 pointer-events-none flex items-center justify-between w-full">
                  <div>
                    <span className={`inline-block w-2 h-2 rounded-full ${item.dot}`}></span>
                    <span className="text-xs text-cream tracking-widest uppercase ml-2">{item.title}</span>
                  </div>
                  {isExpanded && (
                    <span className="text-[9px] text-[#D4A843] bg-ink-900/80 px-2 py-1 uppercase tracking-widest font-bold">
                      Click to close
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}