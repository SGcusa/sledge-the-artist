import { useState, useEffect, useRef } from 'react';

const galleryData = [
  { id: 1, category: 'Canvas Paintings', size: 'tall', img: '/images/potrait_1.jpg', title: 'Studio Work', dot: 'bg-blue' },
  { id: 2, category: 'Clothing Art', size: 'tall', img: '/images/frame_2.jpg', title: 'Clothing Art', dot: 'bg-red' },
  { id: 3, category: 'Pencil Drawings', size: 'tall', vid: '/videos/video_4.mp4', title: 'Charcoal Study', dot: 'bg-red' },
  { id: 4, category: 'Wall Murals', size: 'tall', img: '/images/potrait_6.jpg', title: 'Wall Murals Art', dot: 'bg-amber' },
  { id: 5, category: 'Pencil Drawings', size: 'tall', vid: '/videos/video_3.mp4', title: 'Charcoal Study', dot: 'bg-red' },
  { id: 6, category: 'Pencil Drawings', size: 'tall', img: '/images/denim_1.jpg', title: 'Charcoal Study', dot: 'bg-red' },
  { id: 7, category: 'Commercial Work', size: 'tall', img: '/images/potrait_4.jpg', title: 'Commercial Work', dot: 'bg-red' },
  { id: 8, category: 'Pencil Drawings', size: 'tall', img: '/images/frame_1.jpg', title: 'Custom Piece', dot: 'bg-amber' },
  { id: 9, category: 'Wall Murals', size: 'tall', vid: '/videos/video_2.mp4', title: 'Charcoal Study', dot: 'bg-red' },
  { id: 10, category: 'Commercial Work', size: 'tall', img: '/images/potrait_2.jpg', title: 'Commercial Work', dot: 'bg-red' },
  { id: 11, category: 'Wall Murals', size: 'tall', vid: '/videos/video_1.mp4', title: 'Charcoal Study', dot: 'bg-red' },
  { id: 12, category: 'Clothing Art', size: 'tall', img: '/images/potrait_3.jpg', title: 'Clothing Art', dot: 'bg-red' },
  { id: 13, category: 'Clothing Art', size: 'tall', img: '/images/denim_2.jpg', title: 'Commission', dot: 'bg-red' },
  { id: 14, category: 'Wall Murals', size: 'tall', img: '/images/potrait_5.jpg', title: 'Wall Murals Art', dot: 'bg-amber' },
  { id: 15, category: 'Clothing Art', size: 'tall', img: '/images/denim_3.jpg', title: 'Commission', dot: 'bg-red' },
  { id: 16, category: 'Wall Murals', size: 'tall', img: '/images/potrait_7.jpg', title: 'Wall Murals Art', dot: 'bg-amber' },
  { id: 17, category: 'Pencil Drawings', size: 'tall', img: '/images/potrait_8.jpg', title: 'Custom Piece', dot: 'bg-amber' },
];

export default function Gallery() {
  const [filter, setFilter] = useState('all');

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

  return (
    <section id="work" className="py-10 md:py-20 px-4 md:px-16 bg-ink-800">
      <div className="flex flex-col items-start gap-6 mb-4">
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
      </div>

      <div id="gallery-grid" className="grid grid-cols-2 md:grid-cols-4 gap-1">
        {displayGallery.map((item, index) => {
          const isCurrentTarget = filter === 'all' && fadingSlot === index;

          return (
            <div 
              key={item.id}
              className={`gallery-item relative overflow-hidden group cursor-pointer transition-opacity duration-500 ${
                item.size === 'large' ? 'col-span-1 row-span-1' : ''
              } ${isCurrentTarget ? 'opacity-0' : 'opacity-100'}`} 
              style={{ 
                aspectRatio: item.size === 'square' ? '1' : item.size === 'tall' ? '4/5' : 'auto',
                minHeight: item.size === 'large' ? '320px' : 'auto'
              }}
            >
              {item.vid ? (
                <video src={item.vid} autoPlay loop muted playsInline className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              ) : (
                <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-ink-900/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-3">
                <span className={`dot ${item.dot}`}></span>
                <span className="text-xs text-cream tracking-widest uppercase ml-2">{item.title}</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}