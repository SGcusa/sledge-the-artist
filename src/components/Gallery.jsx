import { useState, useEffect, useRef } from 'react';

const galleryData = [
  { id: 1, category: 'Canvas Paintings', size: 'tall', img: '/images/potrait_1.jpg', title: 'Conceptual Artwork', dot: 'bg-blue' },
  { id: 2, category: 'Pencil Drawings', size: 'tall', img: '/images/frame_2.jpg', title: 'A2 Commission', dot: 'bg-red' },
  { id: 3, category: 'Clothing Art', size: 'tall', img: '/images/denim_3.jpg', title: 'Commission', dot: 'bg-red' },
  { id: 4, category: 'Canvas Paintings', size: 'tall', img: '/images/potrait_8.jpg', title: 'Commission', dot: 'bg-amber' },
  { id: 5, category: 'Clothing Art', size: 'tall', vid: '/videos/video_3.mp4', title: 'Charcoal Study', dot: 'bg-red' },
  { id: 6, category: 'Commercial Work', size: 'tall', img: '/images/commercial_2.jpg', title: 'Commercial Work', dot: 'bg-red' },
  { id: 7, category: 'Pencil Drawings', size: 'tall', img: '/images/potrait_4.jpg', title: 'Commercial Work', dot: 'bg-red' },
  { id: 8, category: 'Pencil Drawings', size: 'tall', img: '/images/frame_1.jpg', title: 'A4 Commission', dot: 'bg-amber' },
  { id: 9, category: 'Wall Murals', size: 'tall', vid: '/videos/video_2.mp4', title: 'First Mural', dot: 'bg-red' },
  { id: 10, category: 'Canvas Paintings', size: 'tall', img: '/images/potrait_2.jpg', title: 'Conceptual Artwork', dot: 'bg-blue' },
  { id: 11, category: 'Commercial Work', size: 'tall', img: '/images/commercial_1.jpg', title: 'Commercial Work', dot: 'bg-blue' },
  { id: 12, category: 'Canvas Paintings', size: 'tall', img: '/images/potrait_3.jpg', title: 'Conceptual Artwork', dot: 'bg-blue' },
  { id: 13, category: 'Clothing Art', size: 'tall', img: '/images/denim_2.jpg', title: 'Commission', dot: 'bg-red' },
  { id: 14, category: 'Pencil Drawings', size: 'tall', img: '/images/potrait_5.jpg', title: 'Wall Murals Art', dot: 'bg-amber' },
  { id: 15, category: 'Clothing Art', size: 'tall', vid: '/videos/video_4.mp4', title: 'Charcoal Study', dot: 'bg-blue' },
  { id: 16, category: 'Canvas Paintings', size: 'tall', img: '/images/potrait_7.jpg', title: 'A2 Commission', dot: 'bg-amber' },
  { id: 17, category: 'Canvas Paintings', size: 'tall', img: '/images/potrait_6.jpg', title: 'A1 Commission', dot: 'bg-amber' },
  { id: 18, category: 'Commercial Work', size: 'tall', img: '/images/commercial_5.jpg', title: 'J&B Campaign', dot: 'bg-red' },
  { id: 19, category: 'Commercial Work', size: 'tall', img: '/images/commercial_3.jpg', title: 'Commercial Work', dot: 'bg-red' },
  { id: 20, category: 'Commercial Work', size: 'tall', img: '/images/commercial_4.jpg', title: 'Commercial Work', dot: 'bg-red' },
];

export default function Gallery() {
  const [filter, setFilter] = useState('all');
  const [expandedId, setExpandedId] = useState(null);
  const [zoomStyle, setZoomStyle] = useState({ transformOrigin: 'center center', transform: 'scale(1)' });

  // --- Grid Randomizer Logic ---
  const [grid, setGrid] = useState(() => ({
    visible: galleryData.slice(0, 8),
    pool: galleryData.slice(8)
  }));
  const [fadingSlot, setFadingSlot] = useState(null);

  useEffect(() => {
    if (filter !== 'all' || grid.pool.length === 0) return;

    const interval = setInterval(() => {
      const randomSlotIndex = Math.floor(Math.random() * 8);
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
  }, [filter, grid.pool.length]);

  // Reset expanded grid cell when filter/tabs change
  useEffect(() => {
    setExpandedId(null);
    setZoomStyle({ transformOrigin: 'center center', transform: 'scale(1)' });
  }, [filter]);

  // --- Sliding Filter Logic ---
  const tabsRef = useRef(null);
  const [sliderStyle, setSliderStyle] = useState({ left: 0, width: 0 });

  useEffect(() => {
    if (tabsRef.current) {
      const activeTab = tabsRef.current.querySelector('.filter-btn.active');
      if (activeTab) {
        setSliderStyle({
          left: activeTab.offsetLeft,
          width: activeTab.offsetWidth
        });
      }
    }
  }, [filter]); 

  const displayGallery = filter === 'all' 
    ? grid.visible 
    : galleryData.filter(item => item.category === filter).slice(0, 8);

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
    <section id="work" className="py-10 md:py-20 px-4 md:px-16 bg-ink-800 overflow-hidden">
      <div className="relative w-full flex flex-col items-start gap-6 mb-2 md:mb-4">
        <div>
          <p className="section-eyebrow">Selected Work</p>
          <h2 className="section-heading">The Portfolio</h2>
          <div className="section-divider"></div>
        </div>
        
        <div id="filters" ref={tabsRef} className="relative grid grid-cols-2 md:flex md:flex-row md:justify-between md:flex-wrap gap-px border border-ink-400 overflow-hidden w-full">
          
          <div 
            className="absolute top-0 bottom-0 bg-[#D4A843] transition-all duration-300 ease-in-out z-0 max-md:h-min"
            style={{ left: `${sliderStyle.left}px`, width: `${sliderStyle.width}px` }}
          />

          {['all', 'Pencil Drawings', 'Canvas Paintings', 'Wall Murals', 'Clothing Art', 'Commercial Work'].map((category) => (
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

        <div 
          className={`absolute right-0 top-full z-30 transition-all duration-500 ease-in-out origin-top transform ${
            filter === 'Commercial Work' 
              ? 'opacity-100 translate-y-0 scale-y-100' 
              : 'opacity-0 -translate-y-4 scale-y-0 pointer-events-none'
          }`}
        >
          <a 
            href="https://mzukisimbutuma.odoo.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ animation: 'textStrobe 2s ease-in-out infinite' }}
            className="flex items-center justify-center bg-amber hover:text-black font-black uppercase text-[10px] md:text-[11.1px] tracking-widest py-3 px-4  shadow-2xl select-none no-underline"
          >
            <span 
              className="mr-2 inline-block rotate-180"
              style={{ animation: 'horizontalNudge 1s ease-in-out infinite alternate' }}
            >
              ←
            </span>
            <span>More Commercial Work</span>
          </a>

          <style dangerouslySetInnerHTML={{__html: `
            @keyframes horizontalNudge {
              0% { transform: translateX(0); }
              100% { transform: translateX(6px); }
            }
          `}} />
        </div>
      </div>

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
              className={`gallery-item relative overflow-hidden group cursor-pointer transition-all duration-500 ease-in-out ${
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
              <div className="absolute inset-0 bg-gradient-to-t from-ink-900/80 via-ink-900/10 to-transparent pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 p-3 pointer-events-none flex items-center justify-between w-full">
                <div>
                  <span className={`dot ${item.dot}`}></span>
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
    </section>
  );
}